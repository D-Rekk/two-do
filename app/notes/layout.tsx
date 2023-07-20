import { RootLayoutProps } from "../layout"

export default function NotesLayout({children} : RootLayoutProps){
  return (
    <>
      <div className="mx-auto w-5/6 max-w-4xl max-md:px-1 md:px-4">
        <div>
          {children}
        </div>
      </div>
    </>
  )
}