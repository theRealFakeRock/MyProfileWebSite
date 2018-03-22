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
import sunsetFarms from './SunsetFarms.PNG';
import waterMeter from './WaterMeter.PNG';

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
                <img alt="sunset farms" src={sunsetFarms} />

                <figcaption>
                  <h3>Sunset Farms Project</h3>

                  <p>A website for a local charity to manage it's members.</p>

                  <p>
                    <a href="https://sunsetfarm.herokuapp.com/">See More</a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <figure className={s.marginTop}>
                <img alt="Water Meter" src={waterMeter} />

                <figcaption>
                  <h3>Smart Water Meter</h3>

                  <p>
                    A personal project intended to help people in Southern Utah
                    and Arizona save water.
                  </p>

                  <p>
                    <a href="https://smrtwatermeter.herokuapp.com/">See More</a>
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
