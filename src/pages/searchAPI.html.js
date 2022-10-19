import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import versions from '../../versions.json';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const listVersions = JSON.stringify(versions)
  const url = context.siteConfig.baseUrl
  return (
      <script
            dangerouslySetInnerHTML={{
              __html: `
              ( function() {
              const versions = JSON.parse('${listVersions}')
              const url = new URL(window.location.href);
              const versionWanted = url.searchParams.get("v");
              const classWanted = url.searchParams.get("class");
              const member = url.searchParams.get("member");
              let finalUrl = ""
              let versionToGo = ""
              //Match version
              for (let i = 1; i < versions.length; ++i) {

                const version = versions[i].replace('-','');
                if(version === versionWanted) {
                  versionToGo = versions[i] + "/"
                }
                i++;
              }
              finalUrl = "${url}" + versionToGo + "API/" + classWanted + "Class" + "#" + member
              window.location.href = finalUrl
            })();
                `,
            }}
          />
  );
}

