# React Isomorphic ScriptLoader

React package to load scripts into your isomorphic (server side rendered) webapp.

## Installation
```
npm install --save react-isomorphic-scriptloader
```

## Example Usage

```js
import React from 'react'
import Loader from 'react-isomorphic-scriptloader'

export default class MyComponent extends React.Component {
  state = { scriptsLoaded: false };
  render() {
    return (
      <div>
        <Loader src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places" onLoad={() => this.setState({ scriptsLoaded: true })} />
        { this.state.scriptsLoaded &&  <div>Yayy google maps loaded</div> }
        { !this.state.scriptsLoaded &&  <div>Please wait while google maps is being loaded</div> }
      </div>
    )
  }
}
```

## License

This package is licensed under the terms of MIT License. See the LICENSE file for further information.
