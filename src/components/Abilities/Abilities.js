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
import s from './Abilities.css';

class Abilities extends React.Component {
  render() {
    return (
      <div className={('container', s.root)}>
        <div className={s.container}>
          <div className="text-center">
            <h1 className={s.header}>Abilities</h1>
            <p>
              “Life without knowledge is death in disguise.”
              <br />
              - Talib Kweli
            </p>
            <hr />
          </div>
          <h3 className={s.header}>Skills</h3>
          <br />
          <div className="row">
            <div className="col-md-6">
              <ul className={s.noBullets}>
                <li>
                  <span className="ability-title">CSS(3)</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />
                  </span>
                </li>

                <li>
                  <span className="ability-title">HTML(5)</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />
                  </span>
                </li>

                <li>
                  <span className="ability-title">JSON</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />
                  </span>
                </li>

                <li>
                  <span className="ability-title">MySQL</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />
                  </span>
                </li>

                <li>
                  <span className="ability-title">XML</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />
                  </span>
                </li>

                <li>
                  <span className="ability-title">Javascript</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="fas fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">Angular 2+</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="fas fa-star " />

                    <span className="fas fa-star " />

                    <span className="far fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">React</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="fas fa-star " />

                    <span className="fas fa-star " />

                    <span className="far fa-star " />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className={s.noBullets}>
                <li>
                  <span className="ability-title">NodeJs</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="fas fa-star " />

                    <span className="fas fa-star " />

                    <span className="far fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">Command line Inteface</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="far fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">Android</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="far fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">
                    Object Orientated Programming
                  </span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <span className="far fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">SASS / SCSS</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="far fa-star" />

                    <span className="far fa-star " />
                  </span>
                </li>
                <li>
                  <span className="ability-title">PHP</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="far fa-star" />

                    <i className="far fa-star" />
                  </span>
                </li>
                <li>
                  <span className="ability-title">Bootstrap Framework</span>
                  <span className={s.abilityScore}>
                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="fas fa-star" />

                    <i className="far fa-star" />

                    <i className="far fa-star" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Abilities);
