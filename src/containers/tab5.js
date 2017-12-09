import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab5Actions';

let textInput
class Tab5 extends React.Component {

  handleSubmit = (value) => {
    // Merge Current State with new Selected State
    let self = this;
    let formContent = {
      a: this.props.tab1Content.selection,
      b: this.props.tab2Content.selection,
      text: this.props.tab3Content.savedText,
      c: this.props.tab4Content.selection
    }
    console.log(formContent);
    this.props.actions.sendFormContent(formContent).payload.then(
      (value) => {
        self.props.actions.sendFormContentSuccess(value)
      },
      (error)=> {
        self.props.actions.sendFormContentFailure(error)
      })
  }

  render(){

    let errorTemplate,sentContentTemplate

    if (this.props.tab5Content.error) {
      errorTemplate = (
        <div>{this.props.tab5Content.error.toString()}</div>
      )
    }
    if (this.props.tab5Content.sentContent) {
      sentContentTemplate = (
        <div>Form Content sent Successfully</div>
      )
    }

    return (
      <div>

        <input type="button" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
        {errorTemplate}
        {sentContentTemplate}
      </div>

    );
  }
}
const { func } = PropTypes;

Tab5.propTypes = {
  toNextTab: func.isRequired
};

function mapStateToProps(state) {
  return {
    tab1Content: state.tab1,
    tab2Content: state.tab2,
    tab3Content: state.tab3,
    tab4Content: state.tab4,
    tab5Content: state.tab5,
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
)(Tab5);
