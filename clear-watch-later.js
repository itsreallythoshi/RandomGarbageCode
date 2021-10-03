;(async () => {
  const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

  const [nope, ...items] = document.querySelectorAll(
    '[aria-label="Action menu"]',
  )

  const deleteWL = async (list, i) => {
    await wait()

    if (list.length > i && list[i] && list[i].click) {
      list[i].click()

      await wait()

      const deleteButton = document.querySelector(
        'ytd-menu-service-item-renderer:nth-child(3)',
      )

      deleteButton.click()

      deleteWL(list, i + 1)
    } else {
      await wait(3000)

      const [nope, ...newListxD] = document.querySelectorAll(
        '[aria-label="Action menu"]',
      )

      deleteWL(newListxD, 0)
    }
  }

  deleteWL(items, 0)
})()
