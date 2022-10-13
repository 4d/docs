import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const url = context.siteConfig.baseUrl

  return (
      <script
            dangerouslySetInnerHTML={{
              __html: `
              ( function() {

                window.location.href = ${url} + "searchAPI" + window.location.search
            })();
                `,
            }}
          />
  );
}

