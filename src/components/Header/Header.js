import React from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link className={styles.logo} to="/"><h1>Foo(d)</h1></Link>
        <section>
          "The best of all thyme"
        </section>
      </div>
    )
  }
}

export default Header
