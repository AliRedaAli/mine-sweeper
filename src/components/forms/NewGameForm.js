import React, { Component } from 'react';
import GridSizeSelect from './GridSizeSelect';
import MinesInput from './MinesInput';
import NewGameBtn from './NewGameBtn';
import {Row,Col} from "reactstrap";
import {createNewGame} from "../../actions/GameActions";
import { connect } from "react-redux";

class NewGameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mines:0,
            size:0
        }
    }
    handleNewGame = (event) => {
        this.props.createNewGame(this.state.mines, this.state.size)
    }
    changeMines = (event) => {
        this.setState({mines:event.target.value})
    }

    changeSize = (event) => {
        this.setState({size:event.target.value})
    }

    render() { 
        return (
            <Row>
                <Col md="8">
                    <Row>
                        <Col md="6">
                            <MinesInput changeMines={this.changeMines}/>
                        </Col>
                        <Col md="6">
                            <GridSizeSelect changeSize={this.changeSize}/>
                        </Col>
                    </Row>
                </Col>
                <Col md="4" center="true">
                    <NewGameBtn handleNewGame={this.handleNewGame}/>
                </Col>
            </Row>
         );
    }
}

 export default connect(null,{createNewGame})(NewGameForm)