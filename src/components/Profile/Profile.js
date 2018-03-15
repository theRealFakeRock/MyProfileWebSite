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
import s from './Profile.css';
import profilePic from './profilePic.png';

class Profile extends React.Component {
  render() {
    return (
      <div className={('container', s.root)}>
        <div className="row">
          <div className="col-md-4">
            <h3 className={s.header}>About me</h3>
            <p>
              I am an allround web developer. I am a senior programmer with good
              knowledge of front-end techniques. I love structure and order and
              I also stand for quality. I love spending time on fixing little
              details and optimizing web apps. Also I like working in a team,
              you'll learn faster and much more. As the saying goes: 'two heads
              are better than one'.{' '}
            </p>
          </div>
          <div className="col-md-4" align="center">
            <img src={profilePic} alt="Orrin Naylor's Profile" />
            <br />
          </div>
          <div className={(s.details, 'col-md-4')} align="center">
            <h3 className={s.header}>Details</h3>
            <p>
              <strong>Name:</strong>
              <br />
              Orrin Naylor<br />
              <strong>Age:</strong>
              <br />
              20 years
              <br />
              <strong>Location</strong>
              <br />
              Salt Lake City Utah<br />
              <strong>
                <a
                  className={s.githubLink}
                  href="https://github.com/theRealFakeRock"
                >
                  View My Github
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Profile);
