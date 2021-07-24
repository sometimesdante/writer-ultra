import Toggle from 'react-toggle'
import useThemeToggle from './../hooks/ThemeToggle'

export default function ThemeButton() {
  const defaultTheme = 'light'
  const [theme, setTheme, otherThemes] = useThemeToggle(defaultTheme)

  const toggleTheme = () => {
    setTheme(otherThemes[0])
    document.querySelector('body').classList.remove(theme)
    document.querySelector('body').classList.add(otherThemes[0])
  }

  return (
    <Toggle
      defaultChecked={theme === defaultTheme}
      icons={{
        unchecked: '☀️',
        checked: '🌜',
      }}
      onChange={toggleTheme}
    />
  )
}
