import React, { Component } from 'react';

import './App.css';

import Modal from './components/modal/Modal'

class App extends Component {
  state = {
    isModalOpen: false
  };

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
      return (
        <div className="container">
          <main>
            <button onClick={this.toggleModal}>Open</button>
            {
              this.state.isModalOpen &&
                <Modal onClose = {this.toggleModal}>
                  <h2>Modal</h2>
                </Modal>
            }
          </main>
        </div>
      );
  }
}

export default App;
