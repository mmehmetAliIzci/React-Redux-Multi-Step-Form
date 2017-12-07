import React from 'react';
import PropTypes from 'prop-types';

function Tab5({toNextTab}) {
  return (
    <div>
      Send Your Data to server
      <input type="submit" value="Save" onClick={toNextTab}/>
    </div>
  );
}

const { func } = PropTypes;

Tab5.propTypes = {
  toNextTab: func.isRequired
};

export default Tab5;
