import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const listVersions = JSON.stringify(context.siteConfig.presets[0][1].docs.versions)
  const url = context.siteConfig.baseUrl
  return (
      <script
            dangerouslySetInnerHTML={{
              __html: `
              ( function() {
              const obj = JSON.parse('${listVersions}')
              const url = new URL(window.location.href);
              const versionWanted = url.searchParams.get("v");
              const classWanted = url.searchParams.get("class");
              const member = url.searchParams.get("member");
              let finalUrl = ""
              let versionToGo = ""
              //Match version
              let i = 0;
              for (let [key, value] of Object.entries(obj)) {
                if(i === 0)
                  continue;

                const version = key.replace('-','');
                if(version === versionWanted) {
                  versionToGo = key + "/"
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

