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
import s from './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={('container', s.container)}>
          <div className="text-center">
            <h2>Contact</h2>
            <p className={s.quote}>
              “If I had asked people what they wanted, they would have said
              faster horses. ”<br />
              - Henry Ford
            </p>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className={s.contactInfo}>
                <i className="fas fa-phone-square" /> (435) 414-4320
              </p>
            </div>
            <div className="col-md-6">
              <p className={s.contactInfo}>
                <i className="fas fa-envelope-square" /> Naylor.orrin@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
