import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab4Actions';

class Tab4 extends React.Component {



  /**
   * Responsible for handling dropdown changes and dispatching necessary actions
   */
  handleDropDownChange = (value) => {

    this.props.actions.selectFromDropDown(value)
    this.props.toNextTab(this.props.currentTab+1)
  }

  render(){
    return (
      <div>
        {/* <Dropdown options={options} onChange={onChange} value={defaultOption} placeholder="Select an option" /> */}
        <select id="lang" onChange={(e) => this.handleDropDownChange(e.target.value)} value={this.props.selection}>
          <option value="*">*</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
        </select>
      </div>
    );
  }
}

const { func } = PropTypes;

Tab4.propTypes = {
  toNextTab: func.isRequired
};

function mapStateToProps(state) {
  return {
    selection: state.tab4.selection,
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
)(Tab4);
