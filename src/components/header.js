import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const HeaderLink = props => (
  <li>
    <Link to={props.to}>{props.text}</Link>
  </li>
)

const Logo = props => (
  <Link to={props.to} className={styles.header__logo}>
    <div>{props.text}</div>
  </Link>
)

export default () => {
  const nav = {
    home: { to: "/", text: "Home" },
    "try-it": { to: "/try-it", text: "Try-it-out" },
    "quick-poll": { to: "/quick-poll", text: "Quick poll" },
    suggest: { to: "/suggest", text: "Suggest Genderwise words" },
    "sign-in": { to: "/sign-in", text: "Sign in" },
  }

  const [showMenu, setShowMenu] = useState(false)

  const onBurgerTap = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      <Logo to="/" text="GenderWise" />

      <div className={styles.menuBtn} onClick={onBurgerTap} onKeyDown={onBurgerTap} role="button"
  tabIndex="0">
        <span
          className={`${styles.menuBtn__burger} ${
            showMenu ? styles.menuBtn__burger__open : ""
          }`}
        ></span>
      </div>

      <nav className={`${styles.header__nav} ${showMenu ? "" : styles.header__nav__hide}` }>
        <ul className={styles.header__navList}>
          {Object.values(nav).map((menu, idx) => (
            <HeaderLink to={menu.to} text={menu.text} key={idx} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
