import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './footer.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <footer>
      <ul>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/about-me">About me</a>
        </li>
        <li>
          <a href="https://qwik.builder.io/">Qwik</a>
        </li>
        <li>
          <a href="https://github.com/echoLC">GitHub</a>
        </li>
        <li>
          <a href="https://juejin.cn/user/3702810893618253">掘金</a>
        </li>
      </ul>
      <div>
        <a href="https://qwik.builder.io/" target="_blank" class="builder">
          Power by Qwik ♡
        </a>
      </div>
    </footer>
  )
})
