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
import s from './Experience.css';

class Experience extends React.Component {
  render() {
    return (
      <div className={('container', s.root)}>
        <div className={s.container}>
          <div className="text-center">
            <h1 className={s.header}>Experiences</h1>
            <p>
              “Protons give an atom its identity, electrons its personality.”
              <br />
              - Bill Bryson, A short history of nearly everything
            </p>
          </div>
          <hr />
          <h3 className={s.header}>Education</h3>
          <br />
          <div className="experience row">
            <div className="col-md-4">
              <h4>University Of Utah</h4>
              <p className="experience-period">August 2018 - Present </p>
            </div>
            <br />
            <div className="col-md-8">
              <p>
                <strong>Bachelors In Computer Engineering</strong>
                <br />
                <span className="hidden-phone">
                  Computer Engineering is an interdisciplinary degree. Combining
                  elements from Electrical Engineering and Computer Science.
                </span>
                <br />
                <span className="experience-details">
                  <span className={('location', s.header)}>
                    <i className="fas fa-map-marker" /> Salt Lake City, UT
                  </span>
                </span>
              </p>
            </div>
            <br />
            <br />
          </div>

          <div className="experience row">
            <div className="col-md-4">
              <br />
              <h4>Salt Lake Community College</h4>
              <p className="experience-period">January 2015 - June 2016 </p>
            </div>
            <br />
            <div className="col-md-8">
              <p>
                <strong>Associates Degree</strong>
                <br />
                <span className="hidden-phone">
                  I received an Associates degree in general studies. My
                  electives were mostly Math, Physics, and Biological
                  Engineering
                </span>
                <br />
                <span className="experience-details">
                  <span className={('location', s.header)}>
                    <i className="fas fa-map-marker" /> Salt Lake City, UT
                  </span>
                </span>
              </p>
            </div>
            <br />
          </div>

          <div className="experience row">
            <div className="col-md-4">
              <br />
              <h4>Itineris Early College High School</h4>
              <p className="experience-period">January 2015 - June 2016 </p>
            </div>
            <br />
            <div className="col-md-8">
              <p>
                <strong>High School Diploma</strong>
                <br />
                <span className="hidden-phone">
                  Itineris is designed to help teens get college in highschool.
                  I was able to get my Associates degree in high school.
                </span>
                <br />
                <span className="experience-details">
                  <span className={('location', s.header)}>
                    <i className="fas fa-map-marker" /> West Jordan, UT
                  </span>
                </span>
              </p>
            </div>
            <br />
          </div>

          <br />
          <br />
          <h3 className={s.header}>Career</h3>
          <br />
          <div className="experience row">
            <div className="col-md-4">
              <h4>Konka Studios</h4>
              <p className="experience-period">August 2015 - September 2016 </p>
            </div>
            <br />
            <div className="col-md-8">
              <p>
                <strong>Sr. Developer/CTO</strong>
                <br />
                <span className="hidden-phone">
                  While working for Konka I was in charge of development and
                  quality control.
                </span>
                <br />
                <span className="experience-details">
                  <span className={('location', s.header)}>
                    <i className="fas fa-map-marker" /> Guildford, England
                  </span>
                </span>
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Experience);
