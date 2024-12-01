"use client";
import React, { createContext, useContext, useState } from 'react';
import type { SectionName } from '../lib/types';

type ActiveSectionContextProdviderProps ={
  children: React.ReactNode;
};

type ActiveSectionContextType ={
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
  lastTimeClicked:number,
  setLastTimeClicked:React.Dispatch<React.SetStateAction<number>>,
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children
}:ActiveSectionContextProdviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [lastTimeClicked, setLastTimeClicked] = useState(0); // to keep track of this to disable the react-interaction-observer temporarily
  // when user clicks on the link in header.
  return (
  <ActiveSectionContext.Provider value={{
    activeSection, 
    setActiveSection, 
    lastTimeClicked,
    setLastTimeClicked
    }}
  >
    {children}
  </ActiveSectionContext.Provider>
  );
}


export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);
  if (context===null){
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
