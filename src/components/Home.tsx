import * as React from "react";

interface HomeProps {
  name: string;
}

export class Home extends React.Component<HomeProps> {
  render() {
    return <div>Hello {this.props.name}, How's it going?</div>;
  }
}
