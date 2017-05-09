import React, { PureComponent } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Navbar.scss';

const NAV_ITEMS = [
  {
    name: 'Saved albums',
    url: '/saved'
  }
];

export default class Navbar extends PureComponent {
  render() {
    return (
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          <IndexLink to="/" activeClassName={styles.active}>Search album</IndexLink>
        </li>
        {NAV_ITEMS.map(item => (
          <li className={styles.navbarItem} key={item.url}>
            <Link to={item.url} activeClassName={styles.active}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
