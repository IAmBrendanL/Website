import ContentColumn from "@/components/ContentColumn"
import NavBar from "@/components/NavBar"

/// A page layout that includes a navigation bar and a content column.
export default function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <NavBar />
      <ContentColumn>{children}</ContentColumn>
    </>
  )
}
