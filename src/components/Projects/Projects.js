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
import s from './Projects.css';
import site1 from './site1.jpg';

class Projects extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={('container', s.container)}>
          <div className="text-center">
            <h2 className={s.header}>Projects</h2>
            <p className={s.quote}>
              “You can do anything you set your mind to.”<br />
              - Benjamin Franklin
            </p>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <figure>
                <img alt="nerd girl" src={site1} />

                <figcaption>
                  <h3>I love this title!</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <p>
                    <a href="#">Read More</a>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Projects);
