/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;
const translate = require('../../server/translate.js').translate;


const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const {config: siteConfig} = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  const ltsv18 = `https://doc.4d.com/4Dv18/4D/18/4D-v18-Release-Notes.100-4822813.${props.language ? props.language + '.html': ''}`;
  const v18R2 = `https://doc.4d.com/4Dv18R2/4D/18-R2/4D-v18-R2-Release-Notes.100-4833800.${props.language ? props.language + '.html': ''}`;
  const ltsv18new = `https://blog.4d.com/${props.language ? props.language + '-whats-new-in-4d-v18/': ''}`;
  const v18R2new = `https://blog.4d.com/${props.language ? props.language + '-whats-new-in-4d-v18-r2/': ''}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <p><translate>New versions of this project are released every so often.</translate></p>
          <h3 id="latest"><translate>Latest version (BETA)</translate></h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}${
                      props.language ? props.language + '/' : ''
                    }Concepts/about.html`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={v18R2}>Release Notes</a>
                </td>
				<td>
                  <a href={v18R2new}>What's new</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <translate>This is the default version displayed when you connect to developer.4d.com/docs.</translate>
          </p>
 { /*        <h3 id="rc">Next version (alpha)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>v18 R2 BETA</th>
                <td>
                   <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}${
                      props.language ? props.language + '/' : ''
                    }next/Concepts/about`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table> 
  
          <p>Coming soon...</p>
*/}

          <h3 id="archive">Current public versions</h3>
          <p><translate>Documentation of the latest 4D versions.</translate></p>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr>
                      <th>{version}</th>
                      <td>
                        {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}${
                            props.language ? props.language + '/' : ''
                          }${version}/Concepts/about.html`}>
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a href={ltsv18}>Release Notes</a>
                      </td>
						<td>
						<a href={ltsv18new}>What's new</a>
						</td>

                    </tr>
                  ),
              )}
            </tbody>
          </table>
          <p>
            <translate>You can find past versions of this project on</translate>{' '}
            <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
