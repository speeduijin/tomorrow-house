const orderCta = document.querySelector('.order-cta')

const [orderCtaBookmarkbutton, orderCtaBuybutton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuybutton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount -= 1
  } else {
    icon.classList.remove('ic-bookmark')
    icon.classList.add('ic-bookmark-filled')
    newCount += 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)

  this.classList.toggle('is-active')
}

orderCtaBookmarkbutton.addEventListener('click', toggleOrderCtaBookmark)
