/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Profile from '../Profile';
import Experience from '../Experience';
import Abilities from '../Abilities';
import Projects from '../Projects';
import Contact from '../Contact';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Experience />
        <Abilities />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
