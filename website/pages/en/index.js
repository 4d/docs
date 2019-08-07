/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  // return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  return siteConfig.baseUrl + '' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src="" />
        <div className="inner">
          <ProjectTitle />
          <PromoSection><i>...more to come...</i>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}
//<Logo img_src={imgUrl('4dlogo.png')} />
//<Button href="#try">Overview</Button>
//Button href={docUrl('doc1.html', language)}>Classic</Button>
//<Button href={docUrl('doc2.html', language)}>ORDA</Button>
			
const Block = props => (
  <Container
    //padding={['bottom', 'top']}
	padding={['left', 'right']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);


const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('4dlogo.png'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'left'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="light" layout="threeColumn">
    {[
      {


	   image: imgUrl('manuals.png'),
		imageAlign: 'left',
       
      },{

	   content: '[4D Language Concepts](Concepts/about.html)',

        title: 'Getting Started',
      }


    ]}
  </Block>

);

const Description2 = props => (
  <Block background="white" layout="threeColumn">
    {[
 {

	   image: imgUrl('manuals.png'),
		imageAlign: 'left',
      },
	       {

	     content: '[Projects in 4D (BETA)](Project/overview.html)<br>[Menus](Menus/overview.html)<br>[4D for iOS](https://developer.4d.com/4d-for-ios/)',

        title: 'Development',
      }


    ]}
  </Block>

);

const Classic = props => (
  <Block background="light" layout="threeColumn">
    {[
     {
        image: imgUrl('manuals.png'),
		imageAlign: 'left',
      },
	  {
        content: '[Maintenance and Security Center](MSC/overview.html)',
        title: 'Administration',
      },



    ]}
  </Block>

);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};


class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Description />
		  <Description2 />
		  <Classic />
        </div>
      </div>
    );
  }
}

//<Features />
 //<FeatureCallout />
   //<LearnHow />
  // <TryOut />
  //<Showcase language={language} />

module.exports = Index;
