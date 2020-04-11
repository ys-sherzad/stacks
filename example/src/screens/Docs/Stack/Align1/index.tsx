import React from 'react'
import { Stack } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const StackAlign1 = () => {
  return (
    <Stack space={1} align="center">
      <Placeholder width={140} />
      <Placeholder width={200} />
    </Stack>
  )
}