import { render } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import ScriptLoader from './index'

describe('ScriptLoader', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('injects a script tag', () => {
    const onLoad = vi.fn()
    const src = 'https://example.com/script.js'
    
    render(<ScriptLoader src={src} onLoad={onLoad} />)
    
    const script = document.querySelector('script')
    expect(script).toBeTruthy()
    expect(script?.src).toBe(src)
  })

  it('calls onLoad when script loads', () => {
    const onLoad = vi.fn()
    const src = 'https://example.com/script.js'
    
    render(<ScriptLoader src={src} onLoad={onLoad} />)
    
    const script = document.querySelector('script')
    expect(script).toBeTruthy()
    
    // Simulate load
    script?.dispatchEvent(new Event('load'))
    expect(onLoad).toHaveBeenCalled()
  })

  it('does not inject duplicate scripts', () => {
    const onLoad1 = vi.fn()
    const onLoad2 = vi.fn()
    const src = 'https://example.com/script.js'
    
    render(<ScriptLoader src={src} onLoad={onLoad1} />)
    render(<ScriptLoader src={src} onLoad={onLoad2} />)
    
    const scripts = document.querySelectorAll('script')
    expect(scripts.length).toBe(1)
  })
})
