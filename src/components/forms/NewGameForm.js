import React, { Component } from 'react';
import GridSizeSelect from './GridSizeSelect';
import MinesInput from './MinesInput';
import NewGameBtn from './NewGameBtn';
import {Row,Col} from "reactstrap";

class NewGameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Row>
                <Col md="8">
                    <Row>
                        <Col md="6">
                            <MinesInput/>
                        </Col>
                        <Col md="6">
                            <GridSizeSelect />
                        </Col>
                    </Row>
                </Col>
                <Col md="4" center="true">
                    <NewGameBtn/>
                </Col>
            </Row>
         );
    }
}
 
export default NewGameForm;