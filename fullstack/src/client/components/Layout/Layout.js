import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.shape({}),
};

export default Layout;
