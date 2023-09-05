// ./logo/gymtom-logo.js
import React from "react";
import styles from "./gymtom-logo.css?inline";

export const Logo = () => (
  <img className={styles.myLogo} src="/static/gymtom-logo-type-small.png" alt="Gymtom Logo" />
);