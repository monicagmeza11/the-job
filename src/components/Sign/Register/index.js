import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import FormRegister from './Form';

const Container = ({ history }) => (
  <div>
    <FormRegister
      handleSave={(user) => {
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/');
      }}
    />
  </div>
);

Container.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Container);
