import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { useColorMode } from '@docusaurus/theme-common'

const features = [
  {
    title: "Native apps builder",
    imageUrl: "img/illu_Administration.png",
    description: (
      <>
        <Translate>
          Build your native iOS and Android apps in pure Swift and Kotlin
          using an integrated 4D component without needing any prior expertise.
        </Translate>
      </>
    ),
  },
  {
    title: "Open solution",
    imageUrl: "img/open.png",
    description: (
      <>
        <Translate>
          You can reopen your generated projects with Xcode or Android Studio
          and continue to work on them.
        </Translate>
      </>
    ),
  },
  {
    title: "Online and offline",
    imageUrl: "img/offline.png",
    description: (
      <>
        <Translate>
          All of your data is embedded in your app and available
          without needing an internet connection.
        </Translate>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  const { isDarkTheme } = useColorMode();
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link to={useBaseUrl(
        "docs/getting-started/introduction"
      )} style={{ textDecoration: 'none', color: isDarkTheme ? "#fff" : "#000" }}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl(
                "docs/getting-started/introduction"
              )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}






// const React = require('react');

// const CompLibrary = {
//   Container: props => <div {...props}></div>,
//   GridBlock: props => <div {...props}></div>,
//   MarkdownBlock: props => <div {...props}></div>
// };

// const Container = CompLibrary.Container;
// const GridBlock = CompLibrary.GridBlock;
// //const Showcase = require(`${process.cwd()}/core/Showcase.js`);
// const translate = props => <div {...props}></div>;

// import Layout from "@theme/Layout";

// function HomeSplash(props) {
//   const {siteConfig, language} = props;

//   return (
//     <div className="index-hero">
//       <div className="index-hero-inner">
//         <h1 className="index-hero-project-tagline">
//           <img
//             alt="4D Banner"
//             className="index-hero-logo"
//             src={`${siteConfig.baseUrl}../assets/img/banner-object.png`}
//           />
// 			{siteConfig.tagline}
//         </h1>
//       </div>
//     </div>
//   );
// }
// class Index extends React.Component {
//   render() {
//     const {config: siteConfig, language = 'en'} = this.props;
//     const pinnedUsersToShowcase = siteConfig.users.filter(user => user.pinned);
//     var subContents={
//       installation: <translate desc="in index page Getting started">Installation and activation</translate>,
//       languageConcepts: <translate desc="in index page Getting started">Language Concepts</translate>,
//       projectDatabases: <translate desc="in index page Getting started">Project databases</translate>,
// 	  formEditor: <translate>Form Editor</translate>,
// 	  events: <translate>Form Events</translate>,
// 	  formObjects: <translate>Form Objects</translate>,
// 	  formObjectProperties: <translate>Form Object Properties</translate>,
// 	  menus: <translate>Menus</translate>,
// 	  webServer: <translate>Web Server</translate>,
// 	  restServer: <translate>REST Server</translate>,
// 	  msc: <translate>Maintenance and Security Center</translate>,
// 	  backup: <translate>Backup and Restore</translate>,
// 	  langRef: <translate>Language Reference (4D Doc Center)</translate>,
// 	  users: <translate>Users and Groups</translate>,
// 	  langUrl: <translate>https://doc.4d.com/4Dv18/4D/18.4/4D-Language-Reference.100-5232397.en.html</translate>
//     };



//     return (
//       <div>
//         <HomeSplash siteConfig={siteConfig} language={language} />
//         <div className="mainContainer">
//           <Container padding={['bottom', 'top']} background="white">
//             <GridBlock
//               align="left"
//               contents={[
//                 {
//                   content: `[${subContents.installation}](${siteConfig.baseUrl}${this.props.language}/GettingStarted/installation.html)<br>
// 				  [${subContents.languageConcepts}](${siteConfig.baseUrl}${this.props.language}/Concepts/about.html)<br>
// 				  [${subContents.langRef}](${subContents.langUrl})<br>
// 				  [${subContents.projectDatabases}](${siteConfig.baseUrl}${this.props.language}/Project/overview.html)`,
//                   image: `${siteConfig.baseUrl}../assets/img/illu_GettingStarted.png`,
//                   imageAlign: 'top',
//                   imageAlt: 'Get started',
//                   title: <translate>Getting started</translate>,
//                 },
//                 {

//                   content: `[${subContents.formEditor}](${siteConfig.baseUrl}${this.props.language}/FormEditor/objectLibrary.html)<br>[${subContents.formObjects}](${siteConfig.baseUrl}${this.props.language}/FormObjects/formObjectsOverview.html)<br>[${subContents.formObjectProperties}](${siteConfig.baseUrl}${this.props.language}/FormObjects/propertiesReference.html)<br>[${subContents.menus}](${siteConfig.baseUrl}${this.props.language}/Menus/overview.html)`,
//                   //image: `${siteConfig.baseUrl}../assets/img/illu_DesktopApplication.png`,
//                   image: `${siteConfig.baseUrl}../assets/img/illu_DesktopApplication.png`,
// 				  imageAlign: 'top',
//                   imageAlt: 'Desktop',
//                   title: <translate>Developing a Desktop application</translate>,
//                 },
//                 {
//                   content: `[${subContents.webServer}](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.${this.props.language}.html)<br>[${subContents.restServer}](${siteConfig.baseUrl}${this.props.language}/REST/gettingStarted.html)`,
//                   image: `${siteConfig.baseUrl}../assets/img/illu_WebApplication.png`,
//                   imageAlign: 'top',
//                   imageAlt: 'Web',
//                   title: <translate>Developing a Web application</translate>,
//                 },
//               ]}
//               layout="threeColumn"
//             />
//             <br />
//             <br />
//             <GridBlock
//               align="left"
//               contents={[
//                 {
//                   content: `[4D for iOS](https://developer.4d.com/4d-for-ios/docs/${this.props.language}/overview.html)`,
//                   image: `${siteConfig.baseUrl}../assets/img/illu_MobileApplication.png`,
//                   imageAlign: 'top',
//                   imageAlt: 'Mobile',
//                   title: <translate>Developing a Mobile application</translate>,
//                 },
//                 {
//                   content: `[${subContents.msc}](${siteConfig.baseUrl}${this.props.language}/MSC/overview.html)<br>[${subContents.backup}](${siteConfig.baseUrl}${this.props.language}/Backup/overview.html)<br>[${subContents.users}](${siteConfig.baseUrl}${this.props.language}/Users/overview.html)`,
//                   image: `${siteConfig.baseUrl}../assets/img/illu_Administration.png`,
//                   imageAlign: 'top',
//                   imageAlt: 'Admin',
//                   title: <translate>Administration</translate>,
//                 },
// 				{},
//               ]}
//               layout="threeColumn"
//             />
//           </Container>
//         </div>
//       </div>
//     );
//   }
// }

// export default props => <Layout><Index {...props} /></Layout>;
