const navHeight = 86

export const scrollToElement = (element: string): void => {
  const actual = document.getElementById(element)

  if (actual === undefined || actual === null) return

  window.scrollTo({
    behavior: 'smooth',
    top: actual!.getBoundingClientRect().top - navHeight + window.pageYOffset,
  })
}
