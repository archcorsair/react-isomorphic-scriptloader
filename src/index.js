// @flow

import React from 'react'

class ScriptLoader extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    onLoad: React.PropTypes.func.isRequired,
  };
  loadFired: boolean;
  invokeOnLoad() {
    if (!this.loadFired) {
      setTimeout(() => {
        this.loadFired = true
        this.props.onLoad()
      }, 0)
    }
  }
  componentDidMount() {
    const scriptSrc = this.props.src
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
  render() {
    return <span style={{ display: 'none' }} data-purpose="Dummy element created by react-isomorphic-scriptloader" />
  }
}

module.exports = ScriptLoader
