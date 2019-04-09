import React, { Component } from 'react';
import { FormGroup,Label,Input } from "reactstrap";
class GridSizeSelect extends Component {
    state = {  }
    render() { 
        return(
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="SelectSize">Select Size: </Label>
            <Input type="select" name="selectMulti" id="SelectSize" onChange={this.props.changeSize}>
                <option value="8">8x8</option>
                <option value="16">16x16</option>
                <option value="32">32x32</option>
            </Input>
          </FormGroup>
          );
    }
}
 
export default GridSizeSelect;