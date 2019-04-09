import React, { Component } from 'react';
import NewGameForm from './components/forms/NewGameForm';
import {Container,Col,Row} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{size:8,offset:2}} sm="12">
            <header className="App-header"><h1>mine sweeper</h1></header>

            <NewGameForm/>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
