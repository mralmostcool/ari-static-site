import React from 'react'
import { Link } from 'react-router-dom'

export interface ButtonProps {
  text: string
  link: string
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ text, link, variant = 'primary' }) => {
  const baseStyles =
    'px-8 py-4 rounded-lg font-semibold text-[16px] tracking-tight transition-all duration-200 inline-flex items-center justify-center cursor-pointer shadow-sm hover:shadow active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? `${baseStyles} bg-[#0369a1] text-[#f0f9ff] hover:bg-[#025a8b]`
      : `${baseStyles} bg-[#e5e7eb] text-[#0369a1] hover:bg-[#d1d5db]`

  const isExternal =
    link.startsWith('http://') ||
    link.startsWith('https://') ||
    link.startsWith('mailto:') ||
    link.startsWith('tel:')

  if (isExternal) {
    return (
      <a href={link} className={styles} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    )
  }

  return (
    <Link to={link} className={styles}>
      {text}
    </Link>
  )
}
