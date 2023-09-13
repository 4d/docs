import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import commandList from '../../commandList.json';
import versions from '../../versions.json';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const commandListString = JSON.stringify(commandList)
  const listVersions = JSON.stringify(versions)

  const url = context.siteConfig.baseUrl
  return (
      <script
            dangerouslySetInnerHTML={{
              __html: `
              ( function() {
              const commands = JSON.parse('${commandListString}')
              const versions = JSON.parse('${listVersions}')

              const url = new URL(window.location.href);
              const classWanted = url.searchParams.get("class");
              const memberWanted = url.searchParams.get("member");
              const versionWanted = url.searchParams.get("v");
              const commandWanted = url.searchParams.get("command").replaceAll("%20", " ").toLowerCase();

              let versionToGo = ""
              //Match version
              for (let i = 1; i < versions.length; ++i) {

                const version = versions[i].replace('-','');
                if(version === versionWanted) {
                  versionToGo = versions[i] + "/"
                }
                i++;
              }
              const commandFile = commands[versionToGo][commandWanted];

              let finalUrl = ""
              if(!memberWanted)
              {
                finalUrl = "${url}" + versionToGo + commandFile + "#" + commandWanted.replaceAll(" ", "-");
              }
              else
              {
                finalUrl = "${url}" + versionToGo + "API/" + classWanted + "Class" + "#" + memberWanted.toLowerCase();
              }
              window.location.href = finalUrl
            })();
                `,
            }}
          />
  );
}