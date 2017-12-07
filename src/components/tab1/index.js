import React from 'react';
import PropTypes from 'prop-types';

function Tab1({toNextTab}) {
  return (
    <div>
      checkbox 1
      checkbox 2
      <input type="submit" value="Save" onClick={toNextTab}/>
    </div>
  );
}

const { func } = PropTypes;

Tab1.propTypes = {
  toNextTab: func.isRequired
};

export default Tab1;
