import React from 'react';
import PropTypes from 'prop-types';

function Tab3({toNextTab}) {
  return (
    <div>
      <input type="text" placeholder="Better Start with @" onClick={toNextTab}/>
      <input type="submit" value="Save" onClick={toNextTab}/>
    </div>
  );
}

const { func } = PropTypes;

Tab3.propTypes = {
  toNextTab: func.isRequired
};

export default Tab3;
