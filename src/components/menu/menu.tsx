import {
  component$,
  useSignal,
  useStyles$,
  $,
  useTask$
} from '@builder.io/qwik'
import { useContent, Link, useLocation } from '@builder.io/qwik-city'
import type { ContentMenu } from '@builder.io/qwik-city'
import styles from './menu.css?inline'

export default component$(() => {
  useStyles$(styles)

  const { menu } = useContent()
  const loc = useLocation()
  const activeMenu = useSignal<string | undefined>('')

  useTask$(() => {
    const list = menu?.items ?? []

    list.forEach((item) => {
      if (!item.items) return

      item.items.forEach((i) => {
        if (i && i.href === loc.url.pathname) {
          activeMenu.value = item.text
        }
      })
    })
  })

  const handleMenuClick = $((item: ContentMenu) => {
    if (activeMenu.value === item.text) {
      activeMenu.value = undefined
    } else {
      activeMenu.value = item.text
    }
  })

  return (
    <aside class="menu">
      {menu
        ? menu.items?.map((item) => (
            <>
              <div class="menu-title" onClick$={() => handleMenuClick(item)}>
                <div class="menu-title-text">{item.text}</div>
                <div
                  class={
                    activeMenu.value === item.text
                      ? 'triangle-up'
                      : 'triangle-down'
                  }
                ></div>
              </div>
              {activeMenu.value === item.text ? (
                <ul class="menu-list">
                  {item.items?.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        class={{
                          'is-active': loc.url.pathname === item.href
                        }}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          ))
        : null}
    </aside>
  )
})
