import React from 'react'

export interface ClassesAndChildren {
  children?: React.ReactNode
  classes?: string
}

export interface HasURL extends ClassesAndChildren {
  url: string
}
