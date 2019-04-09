import React, { Component } from 'react';
import { Input, Label, FormGroup } from "reactstrap";
class MinesInput extends Component {
    state = {  }
    render() { 
        return (
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="SelectSize">Select Size: </Label>
                <Input type="text" id="mines" name="mines" placeholder="Mines Sount" />
            </FormGroup>
        );
    }
}
 
export default MinesInput;