import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="flex h-10 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center">&#169; {currentYear}</p>
      </footer>
    </>
  )
}
