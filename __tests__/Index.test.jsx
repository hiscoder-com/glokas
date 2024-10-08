import React from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CustomInput } from '../app/components/CustomInput'

describe('CustomInput', () => {
  it('renders correctly', () => {
    render(
      <CustomInput
        variant="default"
        color="default"
        size="md"
        radius="md"
        fullWidth
        labelPlacement="outside"
        isDisabled
        isMultiline
      />
    )

    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
