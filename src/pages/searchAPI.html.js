import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import commandList from '../../commandList.json';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const commandListString = JSON.stringify(commandList)
  const url = context.siteConfig.baseUrl
  return (
      <script
            dangerouslySetInnerHTML={{
              __html: `
              ( function() {
              const commands = JSON.parse('${commandListString}')
              const url = new URL(window.location.href);
              const classWanted = url.searchParams.get("class");
              const memberWanted = url.searchParams.get("member");
              const commandWanted = url.searchParams.get("command");
              const commandFile = commands[commandWanted];
              let finalUrl = ""
              if(!memberWanted)
              {
                finalUrl = "${url}" + commandFile + "#" + commandWanted.toLowerCase();
              }
              else
              {
                finalUrl = "${url}" + "API/" + classWanted + "Class" + "#" + memberWanted.toLowerCase();
              }
              window.location.href = finalUrl
            })();
                `,
            }}
          />
  );
}