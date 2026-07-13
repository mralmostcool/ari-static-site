import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface BreadcrumbItem {
  label: string
  path?: string
}

const formatSegment = (segment: string): string => {
  try {
    const decoded = decodeURIComponent(segment)
    return decoded
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  } catch {
    return segment
  }
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/')
      const isLast = index === segments.length - 1
      return {
        label: formatSegment(segment),
        path: isLast ? undefined : path,
      }
    }),
  ]

  return (
    <div className="flex flex-wrap items-center gap-2">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <svg
                className="w-3.5 h-3.5 text-[#1982c4] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="text-[14px] font-semibold text-[#1982c4] hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[14px] font-semibold text-[#1982c4]">
                {item.label}
              </span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
