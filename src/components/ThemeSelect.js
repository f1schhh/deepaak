"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="cursor-pointer">
      {theme === 'dark' ? (
        <IoSunnyOutline onClick={() => setTheme('light')} />
      ) : (
        <IoMoonOutline onClick={() => setTheme('dark')} />
      )}
    </div>
  )
};
export default ThemeSwitcher;
