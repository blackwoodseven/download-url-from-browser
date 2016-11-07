module.exports = url => {
  const link = document.createElement('a')
  link.download = name
  link.href = url

  const clickEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': false
  })

  link.dispatchEvent(clickEvent)
}
