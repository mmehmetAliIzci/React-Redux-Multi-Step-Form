import React from 'react';
import PropTypes from 'prop-types';

function Tab2({toNextTab}) {
  return (
    <div>
      radiobutton 1
      radiobutton 2
      <input type="submit" value="Save" onClick={toNextTab}/>
    </div>
  );
}

const { func } = PropTypes;

Tab2.propTypes = {
  toNextTab: func.isRequired
};

export default Tab2;
