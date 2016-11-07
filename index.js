module.exports = function(url) {
  var link = document.createElement('a')
  link.download = name
  link.href = url

  var clickEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': false
  })

  link.dispatchEvent(clickEvent)
}
