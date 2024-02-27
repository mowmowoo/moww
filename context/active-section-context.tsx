"use client";

import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = typeof links[number]["name"]; //get link name from data

type ActiveSectionContextProviderProps = {
  //seperate from ActiveSectionContextProvider
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  //useState
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null); //for components to call

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
