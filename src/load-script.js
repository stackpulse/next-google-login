export default (d, s, id, jsSrc, cb, onError, check) => {
  const element = d.getElementsByTagName(s)[0]
  const fjs = element
  let js = element
  js = d.createElement(s)
  js.id = id
  js.src = jsSrc
  if (fjs && fjs.parentNode) {
    fjs.parentNode.insertBefore(js, fjs)
  } else {
    d.head.appendChild(js)
  }
  js.onerror = onError
  js.onload = cb

  if (typeof check === 'function' && check()) {
    const callbackTimeout = setTimeout(() => {
      cb()

      clearTimeout(callbackTimeout)
    }, 1000)
  }
}
