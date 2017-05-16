import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import FlashMsgsList from './FlashMsgsList'
class App extends Component {
  render() {
    return (
			<div className="container">
				<NavigationBar />
				<FlashMsgsList />
				{this.props.children}
			</div>
    );
  }
}

export default App;
