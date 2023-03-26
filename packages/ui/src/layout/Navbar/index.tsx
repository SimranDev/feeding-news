import { IoMdNotifications } from 'react-icons/io'
import { IoLogoDesignernews } from 'react-icons/io5'

export type NavbarProps = {}

export function Navbar({}: NavbarProps) {
  return (
    <div>
      <nav className="h-14 flex items-center px-2 justify-between">
        <div className="avatar">
          <div className="w-11 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-1">
            <img src="https://loremflickr.com/320/240/man,avatar" alt="something" />
          </div>
        </div>
        <div className="flex items-center gap-1 mx-auto">
          <IoLogoDesignernews size={40} title="Feeding news" />
          <span className="font-semibold">Feeding News</span>
        </div>
        <div>
          <IoMdNotifications size={26} />
        </div>
      </nav>
      <div className="h-0.5 bg-gradient-to-r from-primary to-teal-400 via-rose-500"></div>
    </div>
  )
}
