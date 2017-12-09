import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab2Actions';

class Tab2 extends React.Component {

  handleToggle = (value) => {

    // Merge Current State with new Selected State
    this.props.actions.toggleRadioButton(value)
    debugger;
    this.props.toNextTab(this.props.currentTab+1)
  }

  render(){

    return (
      <div>
        <div>
          <input type="radio" id="B1" name="interest" value="B1" checked={this.props.selection === "B1"} onChange={(e) => this.handleToggle('B1')}/>
          <label >B1</label>

          <input type="radio" id="B2" name="interest" value="B2" checked={this.props.selection === "B2"} onChange={(e) => this.handleToggle('B2')}/>
          <label >B2</label>
        </div>
        <input type="submit" value="Save" onClick={this.props.toNextTab}/>
      </div>
    );
  }
}

const { func } = PropTypes;

Tab2.propTypes = {
  toNextTab: func.isRequired
};

function mapStateToProps(state) {
  return {
    selection: state.tab2.selection,
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
)(Tab2);
