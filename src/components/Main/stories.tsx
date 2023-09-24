import type { StoryObj, Meta } from '@storybook/react'

import { Main } from '.'

const meta: Meta<typeof Main> = {
  title: 'components/Main',
  component: Main,
  args: {
    title: 'default title',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'basic title',
  },
}
