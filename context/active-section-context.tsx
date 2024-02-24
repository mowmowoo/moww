import React, { useState, createContext } from 'react'
import { links } from "@/lib/data"

type SectionName = typeof links[number]["name"]

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}

const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <div>ActiveSectionContextProvider</div>
  )
}
 