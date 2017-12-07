import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tabHolderActions';
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import Tab4 from '../components/tab4'
import Tab5 from '../components/tab5'
import NotFoundPage from '../components/NotFoundPage';

export class TabContainer extends React.Component {
  changeTab = tabNumber => {
    this.props.actions.changeTab(tabNumber);
  }

  componentDidMount(){
    this.props.actions.changeTab("1");
  }

  render() {
    let template;
    switch (this.props.currentTab) {
      case "1":
        template = <Tab1 toNextTab={this.changeTab}/>;
      break;
      case "2":
        template = <Tab2 toNextTab={this.changeTab}/>;
      break;
      case "3":
        template = <Tab3 toNextTab={this.changeTab}/>;
      break;
      case "4":
        template = <Tab4 toNextTab={this.changeTab}/>;
      break;
      case "5":
        template = <Tab5 toNextTab={this.changeTab}/>;
      break;
      default:
        template = <NotFoundPage />;
    }
    return (
      <div>
        <input type="submit" value="1" onClick={(e) => this.changeTab(e.target.value)}/>
        <input type="submit" value="2" onClick={(e) => this.changeTab(e.target.value)}/>
        <input type="submit" value="3" onClick={(e) => this.changeTab(e.target.value)}/>
        <input type="submit" value="4" onClick={(e) => this.changeTab(e.target.value)}/>
        <input type="submit" value="5" onClick={(e) => this.changeTab(e.target.value)}/>
        {template}
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
