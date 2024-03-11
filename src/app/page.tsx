"use client"

import Header from "@/components/Header"
import { useEffect, useState } from "react"

export default function Home({}) {
  const [scrolled, setScroll] = useState(false)

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", posicaoScroll)
  }, [])

  return (
    <main className="h-screen snap-y snap-mandatory">
      <Header scrolled={scrolled} />
      <section className="py-[80px]">
        <div className="h-screen snap-start bg-red-700">teste</div>
        <div className="h-screen snap-start bg-green-700">teste</div>
        <div className="h-screen snap-start bg-yellow-700">teste</div>
        <div className="h-screen snap-start bg-blue-700">teste</div>
      </section>
    </main>
  )
}
