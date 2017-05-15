import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
class App extends Component {
  render() {
    return (
			<div className="container">
				<NavigationBar />
				{this.props.children}
			</div>
    );
  }
}

export default App;
