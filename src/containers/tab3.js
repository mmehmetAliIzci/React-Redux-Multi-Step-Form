import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab3Actions';

let textInput
class Tab3 extends React.Component {


  /**
   * Responsible for handling submit button in the form
   */
  handleSubmit = (value) => {

    let self = this;
    // Dispatch necessary action for sending text
    this.props.actions.sendText(textInput.value).payload.then(
      (value) => {
        self.props.actions.sendTextSuccess(value)
        self.props.toNextTab(self.props.currentTab+1)
      },
      (error)=> {
        self.props.actions.sendTextFailure(error)
      })
  }

  render(){

    let errorTemplate

    if (this.props.selection.error) {
      errorTemplate = (
        <div>{this.props.selection.error.toString()}</div>
      )
    }

    return (
      <div>
        <label>
          Name:
          <input type="text" ref={(input) => { textInput = input; }}  />
        </label>
        <input type="button" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
        {errorTemplate}
      </div>

    );
  }
}
const { func } = PropTypes;

Tab3.propTypes = {
  toNextTab: func.isRequired
};

function mapStateToProps(state) {
  return {
    selection: state.tab3,
    currentTab: state.tabHolder.currentTab
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab3);
