import styles from "@/styles/Home.module.css"
import ThemeToggle from "./ThemeToggle"

type Route = {
  displayName: string
  location: string
}

const RouteList: Route[] = [
  { displayName: "Home", location: "/" },
  { displayName: "About", location: "/about" },
]

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLinks}>
        {RouteList.map((route) => (
          <a key={route.location} href={route.location}>
            {route.displayName}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  )
}
