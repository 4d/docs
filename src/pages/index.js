import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import Tiles from '@site/src/data/homepageTiles';

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

function Tile({
  tile,
  className,
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)} >
      <div className="tile">
        <img
          className={styles.tilesImage}
          alt={tile.title}
          width={Math.floor(tile.image.width)}
          height={Math.floor(tile.image.height)}
          src={withBaseUrl(tile.image.src)}
          loading="lazy"
        />
        <h3 className={clsx(styles.tilesHeading)}>{tile.title}</h3>
        <p>{tile.links}</p>
      </div>
    </div >
  );
}

function TilesContainer() {
  const firstRow = Tiles.slice(0, 3);
  const secondRow = Tiles.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-bottom--lg">
        {firstRow.map((tile, idx) => (
          <Tile tile={tile} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((tile, idx) => (
          <Tile
            tile={tile}
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
        <TilesContainer />
      </main>
    </Layout>
  );
}