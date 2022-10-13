import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const listVersions = JSON.stringify(context.siteConfig.presets[0][1].docs.versions)
  const url = context.siteConfig.baseUrl
  const currentLanguage = context.i18n.currentLocale;
  //console.log(listVersions)
  return (
    <Layout title="redirectPage">
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
              for (let [key, value] of Object.entries(obj)) {
                const version = key.replace('-','');
                if(version === versionWanted) {
                  versionToGo = version + "/"
                }
              }
              finalUrl = "${url}" + "/${currentLanguage}/" + versionToGo + "API/" + classWanted + "Class" + "#" + member
              console.log(finalUrl)
              window.location.href = finalUrl
            })();
                `,
            }}
          />
    </Layout>
  );
}

