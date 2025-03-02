// Theme handling utilities

// Check if we're in the browser environment
const isBrowser = typeof window !== "undefined"

// Custom event for theme changes
const THEME_CHANGE_EVENT = "themeChange"

// Get the user's theme preference
export function getThemePreference(): "light" | "dark" {
  if (!isBrowser) return "light"

  // Check for saved preference
  const savedTheme = localStorage.getItem("color-theme")
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme
  }

  // Check for system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

// Set the theme
export function setTheme(theme: "light" | "dark"): void {
  if (!isBrowser) return

  // Save the preference
  localStorage.setItem("color-theme", theme)

  // Apply the theme to the HTML element
  document.documentElement.setAttribute("data-theme", theme)

  // Apply colors immediately to prevent flash
  if (theme === "dark") {
    document.documentElement.style.backgroundColor = "#121212"
    document.documentElement.style.color = "#f5f5f5"
    document.body.style.backgroundColor = "#121212"
    document.body.style.color = "#f5f5f5"
  } else {
    document.documentElement.style.backgroundColor = "#ffffff"
    document.documentElement.style.color = "#333333"
    document.body.style.backgroundColor = "#ffffff"
    document.body.style.color = "#333333"
  }

  // Dispatch a custom event for components to listen to
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: theme }))
}

// Toggle between light and dark themes
export function toggleTheme(): void {
  const currentTheme = getThemePreference()
  const newTheme = currentTheme === "light" ? "dark" : "light"
  setTheme(newTheme)
}

// Initialize theme on page load
export function initTheme(): void {
  if (!isBrowser) return

  // Set the initial theme
  const theme = getThemePreference()
  setTheme(theme)

  // Listen for system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (localStorage.getItem("color-theme")) return // Don't override user preference
      setTheme(e.matches ? "dark" : "light")
    })
}

// Add a listener for theme changes
export function addThemeChangeListener(
  callback: (theme: "light" | "dark") => void
): () => void {
  if (!isBrowser) return () => {}

  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<"light" | "dark">
    callback(customEvent.detail)
  }

  window.addEventListener(THEME_CHANGE_EVENT, handler)
  return () => window.removeEventListener(THEME_CHANGE_EVENT, handler)
}
