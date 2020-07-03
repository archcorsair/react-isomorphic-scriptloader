import React, { ReactElement, useEffect, useState } from 'react'

interface Props {
  src: string
  onLoad: () => void
}

export default function ScriptLoader({ src, onLoad }: Props): ReactElement {
  const [loadFired, setLoadFired] = useState<boolean>(false)
  useEffect(() => {
    const invokeOnLoad = () => {
      if (!loadFired) {
        setTimeout(() => {
          setLoadFired(true)
          onLoad()
        }, 0)
      }
    }
    const scripts: HTMLScriptElement[] = Array.from(document.querySelectorAll('script'))
    if (scripts.find((script) => script.src === src)) {
      invokeOnLoad()
      return
    }
    const script: HTMLScriptElement = document.createElement('script')
    script.src = src
    script.onload = () => invokeOnLoad()
    document.body.appendChild(script)
  }, [src, onLoad, loadFired])

  return <span style={{ display: 'none' }} data-purpose="Dummy element created by react-isomorphic-scriptloader" />
}
