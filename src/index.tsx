import React, { ReactNode, useEffect } from 'react'

interface Props {
  src: string
  onLoad: () => void
}

export default function ScriptLoader({ src, onLoad }: Props): ReactNode {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = Array.from(document.querySelectorAll('script'))
    if (scripts.find((script) => script.src === src)) {
      onLoad()
      return
    }
    const script: HTMLScriptElement = document.createElement('script')
    script.src = src
    script.onload = onLoad
    document.body.appendChild(script)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <span style={{ display: 'none' }} data-purpose="Dummy element created by react-isomorphic-scriptloader" />
}
