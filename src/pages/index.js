import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
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
            alt={translate({ message: '4D banner logo' })}
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
              }),
            }}
          />
        </h1>
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <h3 className={clsx(styles.featureHeading)}>{feature.title}</h3>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroBanner />
        <FeaturesContainer />
      </main>
    </Layout>
  );
}