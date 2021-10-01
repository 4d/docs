
const React = require("react");

class RedirectAPI extends React.Component {
  render() {
    const l = JSON.stringify(this.props.config.headerLinks)
    const language = this.props.language
    return (
      <html lang="en">
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const obj = JSON.parse('${l}')
              const url = new URL(window.location.href);
              const versionWanted = url.searchParams.get("v");
              const classWanted = url.searchParams.get("class");
              const member = url.searchParams.get("member");

              let finalUrl = ""

              //Match version
              for(let i = 0; i < obj.length; i++) {
                const version = obj[i].version
                if(version === versionWanted) {
                  finalUrl = obj[i].href
                }
              }

              if(finalUrl === "") {
                finalUrl = obj[0].href
              }
              finalUrl += "/${language}" + "/API/" + classWanted + "Class" + "#" + member
              window.location.href = finalUrl
                `,
            }}
          />

      </html>
    );
  }
}

module.exports = RedirectAPI;
