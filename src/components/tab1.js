import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tab1Actions';

class Tab1 extends React.Component {

  handleToggle = (value,checkBox) => {
    let newSelection = []
    // If its selected, add checkbox to the selection Array
    if (value) {
      newSelection = [...this.props.selection , checkBox]
    }
    // If its DEselected, remove checkBox from the selection Array
    else {
      var indexToBeRemoved = this.props.selection.indexOf(checkBox);
      if (indexToBeRemoved > -1) {
        newSelection = this.props.selection.filter(function(element, index) {
          return index !== indexToBeRemoved;
        });
      }
    }
    // Merge Current State with new Selected State
    this.props.actions.toggleCheckBox(newSelection)
    this.props.toNextTab(this.props.currentTab+1)
  }

  render(){
    console.log(this.props.selection.includes('A1'));
    return (
      <div>
        <div>
          <input type="checkbox" id="A1" name="interest" value="A1" checked={this.props.selection.includes('A1')} onChange={(e) => this.handleToggle(e.target.checked,'A1')}/>
          <label >A1</label>

          <input type="checkbox" id="A2" name="interest" value="A2" checked={this.props.selection.includes('A2')} onChange={(e) => this.handleToggle(e.target.checked,'A2')}/>
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
