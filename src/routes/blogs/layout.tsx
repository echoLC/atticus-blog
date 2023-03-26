import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Menu from '~/components/menu/menu'
import styles from './blog.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <div class="blogs">
      <Menu />
      <main>
        <Slot />
      </main>
    </div>
  )
})

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Blogs`
  }
}
