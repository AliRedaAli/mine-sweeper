import React, { Component } from 'react';
import { Button, FormGroup } from 'reactstrap';

class NewGameBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Button onClick={this.props.handleNewGame}>New Game</Button>
            </FormGroup>
         );
    }
}
 
export default NewGameBtn;