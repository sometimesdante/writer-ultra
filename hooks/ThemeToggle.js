import React from 'react'

export default function useThemeToggle(initialValue) {
  let themes = ['light', 'dark']

  const [value, setValue] = React.useState(initialValue)

  const toggle = React.useCallback((val) => {
    setValue(val)
  }, [])

  const otherThemes = themes.filter((item) => item !== value)

  return [value, toggle, otherThemes]
}
