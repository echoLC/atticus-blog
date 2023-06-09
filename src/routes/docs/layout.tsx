import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Menu from '~/components/menu/menu'
import styles from './docs.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <div class="docs">
      <Menu />
      <article>
        <Slot />
      </article>
    </div>
  )
})

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`
  }
}
