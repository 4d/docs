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
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <p><translate>New versions of this project are released every so often.</translate></p>
          <h3 id="latest"><translate>Current BETA version</translate></h3>
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
                    }Concepts/about`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={ltsv18}>Release Notes</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <translate>This is the default version displayed when you connect to developer.4d.com/docs.</translate>
          </p>
          <h3 id="rc">Next version (alpha)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>v18 R2 BETA</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/next/:id" */}
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
          <h3 id="archive">Current public versions</h3>
          <p>Documentation of the latest 4D versions.</p>
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
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                            props.language ? props.language + '/' : ''
                          }${version}/doc1`}>
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a href={`${repoUrl}/releases/tag/v${version}`}>
                          Release Notes
                        </a>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on{' '}
            <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
