import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function ScriptLoader({ src, onLoad }) {
  const [loadFired, setLoadFired] = useState(false)
  useEffect(() => {
    const invokeOnLoad = () => {
      if (!loadFired) {
        setTimeout(() => {
          setLoadFired(true)
          onLoad()
        }, 0)
      }
    }
    const scripts = Array.from(document.querySelectorAll('script'))
    if (scripts.find((script) => script.src === src)) {
      invokeOnLoad()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onLoad = () => invokeOnLoad()
    document.body.appendChild(script)
  }, [src, onLoad, loadFired])

  return <span style={{ display: 'none' }} data-purpose="Dummy element created by react-isomorphic-scriptloader" />
}

ScriptLoader.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
}
