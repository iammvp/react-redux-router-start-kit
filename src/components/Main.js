import React,{ Component } from 'react'


import { Link } from 'react-router'
export default class Main extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>
          <Link to="/rock">Lets Rock</Link>
        </h1>
       {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
