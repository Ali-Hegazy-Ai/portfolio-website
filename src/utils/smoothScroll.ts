/**
 * Smooth scroll utility functions
 */

export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const smoothScrollToElement = (element: HTMLElement, offset: number = 80) => {
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

// Hook for smooth scrolling with better UX
export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId)
  }

  const scrollToTop = () => {
    smoothScrollToTop()
  }

  return {
    scrollToSection,
    scrollToTop
  }
}
