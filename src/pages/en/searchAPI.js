const React = require("react");

class RedirectAPI extends React.Component {
  render() {
    const listVersions = JSON.stringify(this.props.config.presets[0][1].docs.versions)
    const url = this.props.config.baseUrl
   

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
              for (let [key, value] of Object.entries(obj)) {
                const version = key.replace('-','');
                if(version === versionWanted) {
                  versionToGo = version + "/"
                }
              }

              finalUrl = "${url}" + versionToGo + "API/" + classWanted + "Class" + "#" + member
              console.log(finalUrl)
              window.location.href = finalUrl
            })();
                `,
            }}
          />
    );
  }
}

module.exports = RedirectAPI;