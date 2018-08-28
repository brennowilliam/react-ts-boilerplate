// Libs
import * as React from 'react'

import '../test.css'

interface IApp {}

export default class App extends React.Component<IApp, {}> {
  public render() {
    return (
      <div className="container">
        <h1>Hello, it works! Happy Hacking...</h1>
      </div>
    )
  }
}
