import React from 'react'

import '../src/app/globals.css'

import { GlobalStyles } from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
