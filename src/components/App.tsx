// Libs
import * as React from 'react'

import '../test.scss'

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
