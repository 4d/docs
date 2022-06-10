import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import Features from '@site/src/data/features';

import styles from './styles.module.css';

function HeroBanner() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
      <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/banner-object.png')}
            width="350"
            height="350"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Documentation for 4D developers',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroBanner />
      </main>
    </Layout>
  );
}