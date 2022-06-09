import React from "react";
import Layout from "@theme/Layout";
import styles from "./test.module.css";

function Hello() {
  return (
    <Layout title="Hello">
      <div>
        <div className={styles.navbar}>
          Navbar
          <div class="dropdown dropdown--hoverable">
            <button class="button button--primary">Hover Me</button>
            <ul class="dropdown__menu">
              <li>
                <a class="dropdown__link" href="#url">
                  Home
                </a>
              </li>
              <li>
                <a class="dropdown__link" href="#url">
                  Docs
                </a>
              </li>
              <li>
                <a class="dropdown__link" href="#url">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.heading}>
          <h1>Hi!</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "20px",
          }}
        >
          <p>
            This is a test page created from{" "}
            <code>pages/test-css/index.js</code>
            <br />
            Edit the <code>test.module.css</code> file and reload to see the
            changes.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;
