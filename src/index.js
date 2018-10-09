// @flow

import React from 'react'
import PropTypes from 'prop-types'

class ScriptLoader extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { src: scriptSrc } = this.props
    const scripts = Array.from(document.querySelectorAll('script'))
    if (scripts.find(script => script.src === scriptSrc)) {
      this.invokeOnLoad()
      return
    }
    const script = document.createElement('script')
    script.src = scriptSrc
    script.onload = () => this.invokeOnLoad()
    document.body.appendChild(script)
  }
  loadFired: boolean
  invokeOnLoad() {
    if (!this.loadFired) {
      setTimeout(() => {
        this.loadFired = true
        const { onLoad } = this.props
        onLoad()
      }, 0)
    }
  }

  render() {
    return <span style={{ display: 'none' }} data-purpose="Dummy element created by react-isomorphic-scriptloader" />
  }
}

module.exports = ScriptLoader
