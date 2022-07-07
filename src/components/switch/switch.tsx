import styles from "./switch.module.scss";

console.log(styles.switch);
const Switch = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};

export { Switch };
