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
              const memberWanted = url.searchParams.get("member");
              const versionWanted = url.searchParams.get("v");
              let commandWanted = url.searchParams.get("command");
              if(commandWanted !== null) {
                commandWanted = commandWanted.replaceAll("%20", " ").toLowerCase();
              }

              let classWanted = url.searchParams.get("class");
              if(classWanted !== null) {
                classWanted = classWanted.replaceAll("%20", " ").toLowerCase();
              }

              let versionToGo = ""
              //Match version
              for (let i = 1; i < versions.length; ++i) {

                const version = versions[i].replace('-','');
                if(version === versionWanted) {
                  versionToGo = versions[i] + "/"
                }
                i++;
              }

              let commandFile = ""

              let commandsVersion = commands[versionWanted];
              if(!commandsVersion) {
                commandsVersion = commands[""];
              }

              let valueWanted = ""
              if(commandsVersion !== undefined) {
                if(memberWanted)
                {
                  valueWanted = memberWanted
                  commandFile = commandsVersion["classes"][classWanted]
                }
                else
                {
                  valueWanted = commandWanted
                  commandFile = commandsVersion["commands"][commandWanted]
                }
              }

              const finalUrl = "${url}" + versionToGo + commandFile + "#" + valueWanted.toLowerCase().replaceAll(" ", "-");
              console.log(finalUrl)

              window.location.href = finalUrl
            })();
                `,
            }}
          />
  );
}