import React from "react"

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 w-full p-8 h-[80px] ${
        scrolled ? "bg-blue-500" : "bg-transparent"
      }`}
    >
      <nav className="flex gap-4">
        <li className="flex gap-4">
          <ul>Home</ul>
          <ul>Contato</ul>
          <ul>teste</ul>
        </li>
      </nav>
    </header>
  )
}
