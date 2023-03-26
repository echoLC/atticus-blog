import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import styles from './webpack.css?inline'

export default component$(() => {
  useStyles$(styles)

  return (
    <div class="webpack">
      <article>
        <Slot />
      </article>
    </div>
  )
})

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Webpack`
  }
}
