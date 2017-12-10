import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab2Actions';

class Tab2 extends React.Component {


  /**
   * Responsible for handling radio toggles and dispatching necessary actions
   */
  handleToggle = (value) => {

    // Dispatch necessary action with selected value
    this.props.actions.toggleRadioButton(value)
    // Move to next tab
    this.props.toNextTab(this.props.currentTab+1)
  }

  render(){

    return (
      <div>
        <h2 className="fs-title">Select one of the radiobuttons</h2>
        <h3 className="fs-subtitle">This is step 2</h3>
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
