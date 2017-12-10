import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tabHolderActions';
import Tab1 from './tab1.js'
import Tab2 from './tab2.js'
import Tab3 from './tab3.js'
import Tab4 from './tab4.js'
import Tab5 from './tab5.js'
import NotFoundPage from '../components/NotFoundPage';

export class TabContainer extends React.Component {


  /**
   * Responsible for changing tabs
   */
  changeTab = (tabNumber) => {
    console.log(parseInt(tabNumber));
    this.props.actions.changeTab(parseInt(tabNumber));
  }

  componentDidMount(){
    this.props.actions.changeTab(1);
  }

  render() {
    let template;
    switch (this.props.currentTab) {
      case 1:
        template = <Tab1 toNextTab={this.changeTab}/>;
      break;
      case 2:
        template = <Tab2 toNextTab={this.changeTab}/>;
      break;
      case 3:
        template = <Tab3 toNextTab={this.changeTab}/>;
      break;
      case 4:
        template = <Tab4 toNextTab={this.changeTab}/>;
      break;
      case 5:
        template = <Tab5 toNextTab={this.changeTab}/>;
      break;
      default:
        template = <NotFoundPage />;
    }
    return (
      <div id="msform">
        <ul id="progressbar">
          <li className={this.props.currentTab === 1 ? 'active' : ''} onClick={(e) => this.changeTab(1)} >First</li>
          <li className={this.props.currentTab === 2 ? 'active' : ''} onClick={(e) => this.changeTab(2)} >Second</li>
          <li className={this.props.currentTab === 3 ? 'active' : ''} onClick={(e) => this.changeTab(3)} >Third</li>
          <li className={this.props.currentTab === 4 ? 'active' : ''} onClick={(e) => this.changeTab(4)} >Forth</li>
          <li className={this.props.currentTab === 5 ? 'active' : ''} onClick={(e) => this.changeTab(5)} >Fifth</li>
        </ul>
        <fieldset>
          {template}
        </fieldset>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    tabHolder: state.tabHolder,
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
)(TabContainer);
