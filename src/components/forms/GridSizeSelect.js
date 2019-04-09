import React, { Component } from 'react';
import { FormGroup,Label,Input } from "reactstrap";
class GridSizeSelect extends Component {
    state = {  }
    render() { 
        return(
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="SelectSize">Select Size: </Label>
            <Input type="select" name="selectMulti" id="SelectSize">
                <option>8x8</option>
                <option>16x16</option>
                <option>32x32</option>
            </Input>
          </FormGroup>
          );
    }
}
 
export default GridSizeSelect;