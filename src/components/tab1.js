import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab1Actions';

class Tab1 extends React.Component {

  handleToggle = (value,checkBox) => {
    let valueCheckbox = {}
    valueCheckbox[checkBox] = value;
    // Merge Current State with new Selected State
    this.props.actions.toggleCheckBox({...this.props.selection, ...valueCheckbox})
    this.props.toNextTab(this.props.currentTab+1)
  }

  render(){

    return (
      <div>
        <div>
          <input type="checkbox" id="A1" name="interest" value="A1" checked={this.props.selection.A1} onChange={(e) => this.handleToggle(e.target.checked,'A1')}/>
          <label >A1</label>

          <input type="checkbox" id="A2" name="interest" value="A2" checked={this.props.selection.A2} onChange={(e) => this.handleToggle(e.target.checked,'A2')}/>
          <label >A2</label>
        </div>
        <input type="submit" value="Save" onClick={this.props.toNextTab}/>
      </div>
    );
  }
}

const { func } = PropTypes;

Tab1.propTypes = {
  toNextTab: func.isRequired
};

function mapStateToProps(state) {
  return {
    selection: state.tab1.selection,
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
)(Tab1);
