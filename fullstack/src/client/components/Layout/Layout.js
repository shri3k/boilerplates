import React, { PureComponent } from 'react';

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

export default Layout;
