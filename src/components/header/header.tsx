import { component$, useStyles$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import logo from './huaping.jpeg'
import styles from './header.css?inline'

export default component$(() => {
  useStyles$(styles)

  const { url } = useLocation()

  return (
    <header>
      <a class="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <a href="/blogs" class={{ active: url.pathname.startsWith('/blogs') }}>
          Blogs
        </a>
        <a
          href="/about-me"
          class={{ active: url.pathname.startsWith('/about-me') }}
        >
          About Me
        </a>
      </nav>
    </header>
  )
})
