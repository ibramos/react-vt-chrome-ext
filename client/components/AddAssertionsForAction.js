import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button, Input, Dropdown } from 'semantic-ui-react';

class AddAssertionsForAction extends Component {

  handleSubmitEventForAction(event) {
      event.preventDefault();
      // this.props.saveActionProperty('assertID', this.props.stateIsNowProp.assertID);
      this.props.setActionLocation(this.props.compAddress);
      let newAction = this.props.stateIsNowProp.action;
      newAction.loc = this.props.compAddress;
      newAction.assertID = this.props.stateIsNowProp.assertID;
      this.props.incrementAssertId();
      this.props.saveAssertion(newAction);
      this.props.clearAction();
      this.props.renderEditMode();
    };

    handleEventDropdown(event, value) {
      this.props.saveActionProperty('event', value);
      console.log('handled event dropdown', value)
    }

    handleBack() {
      this.props.renderEditMode();
    }

  render () {
    const eventOptions = [
      { key: 1, text: 'Click', value: 'click' },
      { key: 2, text: 'Double Click', value: 'dblclick' },
      { key: 3, text: 'Right Click', value: 'contextmenu' },
      { key: 4, text: 'Enter', value: 'onEnter' }      
    ];
    return (

      <form onSubmit={(event)=>{
        this.handleSubmitEventForAction(event);
        }}>

        <h3 className="subheader">Action</h3>

        <div className="form-group">
          <label>Component <span style={ {color: "#ffaaaa"} }>*</span></label>
          <Input placeholder="Click on Node"className="form-control" required ref="componentName" value={this.props.compName} disabled/>
        </div>

        <div className="form-group">
          <label>Type of Event <span style={ {color: "#ffaaaa"} }>*</span></label>
          <Dropdown selection options={eventOptions} placeholder='Choose an event' onChange={(e, { value })=>this.handleEventDropdown(e, value)} />
        </div>
        
        <Button inverted color="blue" size="tiny" onClick={()=>this.handleBack()} className="btn btn-primary">Back</Button>
        <Button primary size="small" type="submit" className="btn btn-primary">Save</Button>
      </form>
    );
  }
};

export default AddAssertionsForAction;