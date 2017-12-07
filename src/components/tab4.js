import React from 'react';
import PropTypes from 'prop-types';
// import Dropdown from 'react-dropdown'

function Tab4({toNextTab}) {
  const options = ['one', 'two', 'three']
  return (
    <div>
      {/* <Dropdown options={options} onChange={onChange} value={defaultOption} placeholder="Select an option" /> */}
      <input type="submit" value="Save" onClick={toNextTab}/>
    </div>
  );
}

const { func } = PropTypes;

Tab4.propTypes = {
  toNextTab: func.isRequired
};

export default Tab4;
