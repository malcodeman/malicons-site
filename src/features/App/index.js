import React from "react";
import Icons from "malicons";

import styles from "./app.module.css";

function App() {
  function splitIconName(text) {
    const array = text.split(/(?=[A-Z])/);

    return array.join(" ");
  }

  return (
    <div className={styles.app}>
      <div className={styles.grid}>
        {Object.keys(Icons).map(function(key, index) {
          const Icon = Icons[key];

          return (
            <div className={styles.iconContainer} key={Icon.name}>
              <div className={styles.iconWrapper}>
                <Icon />
              </div>
              <span className={styles.iconName}>{splitIconName(key)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
