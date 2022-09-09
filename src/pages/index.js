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
  const firstRow = Tiles.slice(0, 4);
  const secondRow = Tiles.slice(4);

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
          />
        ))}
      </div>
    </div>
  );
}

function Updates() {
  return (
    <div className="container text--right">
      <div className="doc-updates">
        <Link to="/updates">
          <em><Translate>Documentation updates</Translate></em>
        </Link></div>
    </div>
  )
}

function Lts() {
  return (
 			<div className="preview">
			<div className="text--center"><b><Translate>This is the documentation for the latest </Translate><Link to=
                "https://blog.4d.com/4d-versioning-feature-releases-lts-releases-explained/">4D Feature Release</Link>. <Translate>Looking for a LTS documentation? </Translate>Select <Link to=
                "19/GettingStarted/installation">v19</Link> or <Link to=
                "18/GettingStarted/installation">v18</Link></b>.
			</div>
		</div>
  );
}

export default function Home() {
  return (
    <Layout>	  
      <main>
    	<Lts />
		<HeroBanner />	
        <TilesContainer />
        <Updates />
      </main>
    </Layout>
  );
}