import * as React from 'react'
import Image from 'next/image'
import { titles } from '../docs/titles'

export const Sidebar = () => {
  return (
    <nav className="font-bold bg-blue-500 h-screen w-72 table fixed">
      <div className="align-middle table-cell text-center">
        <img
          src="/icon.svg"
          alt="icon"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <ul>
          {Object.entries(titles).map(([key, title]) => {
            return (
              <li className="p-2">
                <a href={`#${key}`} className="text-white">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
