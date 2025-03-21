"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47741"],{258876:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/current-client-authentication","title":"Current client authentication","description":"Current client authentication {( domain ; protocol )} : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/current-client-authentication.md","sourceDirName":"commands-legacy","slug":"/commands/current-client-authentication","permalink":"/docs/commands/current-client-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-client-authentication.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-client-authentication","title":"Current client authentication","slug":"/commands/current-client-authentication","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count screens","permalink":"/docs/commands/count-screens"},"next":{"title":"Current machine","permalink":"/docs/commands/current-machine"}}'),r=t("785893"),s=t("250065");let o={id:"current-client-authentication",title:"Current client authentication",slug:"/commands/current-client-authentication",displayed_sidebar:"docs"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Authentication security level",id:"authentication-security-level",level:3},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Current client authentication"})," {( ",(0,r.jsx)(n.em,{children:"domain"})," ; ",(0,r.jsx)(n.em,{children:"protocol"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"domain"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Domain name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"protocol"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:'"Kerberos", "NTLM", or empty string'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Session user login returned by Windows"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Current client authentication"})," command asks the Windows Active Directory server to authenticate the current client and, if successful, returns the Windows login name for this client (session identifier). If the authentication failed, an empty string is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["This command can only be used in the context of an SSO implementation on Windows with 4D Server. For more information, please refer to the ",(0,r.jsx)(n.em,{children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,r.jsxs)(n.p,{children:["Usually, both the client and the server must be managed by the same Active Directory. However, different configurations can be supported, as described in the ",(0,r.jsx)(n.em,{children:"Requirements for SSO"})," section."]}),"\n",(0,r.jsx)(n.p,{children:'The returned login string must be passed to your 4D identification module to grant access rights to the client based upon the Windows session login; if you managed to remove the 4D Server login dialog by setting a "Default user", you can implement an interface where the user does not need to reenter any IDs (see example).'}),"\n",(0,r.jsx)(n.p,{children:"Optionally, the command can return two text parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"domain"}),": name of domain to which the client belongs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"protocol"}),': name of protocol used by Windows to authenticate the user. It can be "Kerberos" or "NTLM", depending on available resources. If the authentication failed, an empty string ("") is returned.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These parameters can be used to accept or reject connections if you want to filter access with regard to the domain or protocol."}),"\n",(0,r.jsx)(n.h3,{id:"authentication-security-level",children:"Authentication security level"}),"\n",(0,r.jsxs)(n.p,{children:["The security level of the authentication (i.e., how much you can trust the user login) depends on how the user has actually been identified. The value(s) returned in the ",(0,r.jsx)(n.strong,{children:"Current client authentication"})," command parameters will allow you to find out what the login (if any) is based on, and thus the security level:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Login"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Domain"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Protocol"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Comments"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Empty"}),(0,r.jsx)(n.td,{children:"Empty"}),(0,r.jsx)(n.td,{children:"Empty"}),(0,r.jsx)(n.td,{children:"Command was unable to get authentication information about the logged user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Filled"}),(0,r.jsx)(n.td,{children:"Empty"}),(0,r.jsx)(n.td,{children:"NTLM"}),(0,r.jsx)(n.td,{children:"ID returned is the local one, which has been defined on the local computer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Filled"}),(0,r.jsx)(n.td,{children:"Filled"}),(0,r.jsx)(n.td,{children:"NTLM"}),(0,r.jsxs)(n.td,{children:["ID returned has been authenticated using the NTLM protocol in the Domain returned in the ",(0,r.jsx)(n.em,{children:"domain"})," parameter. In this case, you must check the Domain to increase the security level. Since some architectures have a Domain forest, you need to make sure that the Domain where the user was authenticated was the expected one."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Filled"}),(0,r.jsx)(n.td,{children:"Filled"}),(0,r.jsx)(n.td,{children:"Kerberos"}),(0,r.jsx)(n.td,{children:"ID returned has been authenticated with the Kerberos protocol in the expected Domain. This configuration provides the highest level of security."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"For more information on these requirements, please refer to the paragraph."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"In your 4D Server database, you have designed an access control system based on 4D's users and groups feature. You want to configure your application so that 4D remote users on Windows connect directly to 4D Server (no password dialog box is displayed), but while being logged with their actual rights:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:['In the "Security" page of the Database Settings dialog box, designate a user as the "default user":',(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:t(985285).Z+"",width:"431",height:"31"}),(0,r.jsx)(n.br,{}),'\nWith this setting, no password dialog will be displayed for a remote 4D that connects to the server; all clients being logged as "Bob".']}),"\n",(0,r.jsx)(n.li,{children:"In the On Server Open Connection database method, add the following code to check user authentication from the Active Directory:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//On Server Open Connection database method\n\xa0var $0;$1;$2;$3 : Integer\n\xa0$login:=Current client authentication($domain;$protocol)\n\xa0If($login #"")\xa0//a login was returned\n\xa0\xa0//call your custom authentication method\n\xa0\xa0\xa0\xa0$0:=CheckCredentials($login)\n\xa0\xa0//should return 0 in case of success or -1 for error\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=-1\xa0//reject the connection\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This example shows a basic scenario that must be adapted to your solutions. The 4D user custom authentication method (CheckCredentials in the above example) could be based on one of the following implementations:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"replicate the Active directory names in the 4D user and group names, for an automatic mapping,"}),"\n",(0,r.jsx)(n.li,{children:"map returned information to a custom [users] table,"}),"\n",(0,r.jsx)(n.li,{children:"use LDAP features to get user credentials."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1355"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},985285:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAfCAIAAADftNWXAAAFRUlEQVR42u3cTUgjVwAH8LelIlsPjV8HkbRu4sfizZSme5C24E7cricP4we0Eih0jYVttsVDqEWhdj0EqezBKPQQhEKzImsPyjZp2UNPjRAPW+z6lXXx4CFuHaG4WiXT92ZGM+ZjHLtLJjj/nyAz7yPzEpi/7+UlXhIEgQAAmN5rRg8AAKAgIA0BABikIQAAgzQEAGCQhgAAzOtGD8AwwWBwa2vr4ODA6IEAQP4UFxdXVVW53e7MqkuCKT9hE5iYeOPy5c7OzoqKCqPHAgD5s729HQqF9l688PT2plWZdG749/Pnn/b3WyyWvb09o8cCAPlTVlbW3d3t9/szq0z6vuHh4SF9Ufb3940eCADkFb3r6b1PEyCzyqRzQ0qUGD0KAMi3XDd+rrlhxGtJcQXiWo8ttz2jUVoHjdZptdqNX/ZFEcXwF2+qcePrYk5SW80WAFDocgWCxtzQORILe2xyHjksy9PCGJc9vPigO1fl2bHob1CuYgDpdZFfGvf9ne85ErlT2uFzeO3sOGsHuRcRMakEuHD0rJS5sdjIkmMuMsblSDxng93o53F+NNGSyaQUbtIZO7HVvUvIglKRtY/0O5mrHgAKn3jOlfJpttZ2Z3AuIh3HAy5lAe2NsMkdHyRRn0NZzaYW2F65tXqdm7kEVvoeN9Z26sLZCtjje70udqpvea2aN0sH6w9nFwjp+ahFLo/cKT92I7Ceart870ZaKQAUjPJs1A1yBcJ5d1EiXseD9pgQtrFDV8AeFqaJarXLjQnCmBxM/sBtTnMJTNue6nvWle/5GqeF8Mn0NG0kcc5DC6NLDTFBsNESPU9G9bpMdVVMSQc9P42yMCS/fVXZNUXPEqMt8cmb7w04v6xNjEotFv6q/yORIKxw4PMJbv6WQet8AMgmkUhUVlamlYg63t3Sn4bScji+tkSiQYfFJ5e529JbyRM+qf3Iq32K9gZnkHedZGf2kTjbW49T+az3MY+OjqRPnv/zLzvr+mH12w/Is2DH9a7Kx1//ev/KLAvHrvffoW3KrrmayMLU7M/fXGdtm1zXymhHqXDhz8e0/tU+UQB4Saurq3V1dSfHad8xKSkpydpLXxrGf3kQbeynOcMWn2lbJqpFLl268mRaoEFEj3p1PXIWNPbUl6ap19jGIs4TFjzS4jjKRmDXHIk+8p8LeaUsnbz14c2m7xYX1zbEK6pSZaNFlH6UfmKqEDsqAIVnZWWlvr6e/tZ/h+pJQ7omZYtUlju22kbiy7kGXl+OyhsqLD1JOyui0RZdXqcd6cPMBQnRMWGk14jyvYFWaRJI18c0/E4iz+YJx4irdy1OOM2R6NisFpXNEmU/RNoZefZofpFO/uzWZHNLJwmFVuJPk81vy6WdLc3JJAvcxflHTz/pIalC7KgAFKInT55kvT1z5aNGGrL9DWkd6hyJCce5wvaXXY7jBSqbnKl6cLdH/FKd0+1W5nc2T7/bwluCrHHm96S5NjfP0w6nJ3mnrsE+5yNVpdbgtDUdjU1rJPqo9pRDn10NyYUdkz9+bE0mrYNLk2Ljrdard1lhk+/hIM2936W2i3eV0o7JQYQhwEVh0v/aMDQ0NDw8vLGxYfRAACDfampqBgYGaAiklZv3m3lEmRsCADDmTUPtTx4BwEX1P943vMiKiop2dnaqq6s3NzeNHgsA5I/VaqX3Pk2AzCqTpmF5efnMzAzP87W1tUaPBQDyZ3d3l977NAEyq0y6i0KNj4/TPxFZ/80ZAFxUdFZYWlra19eXWWXeNAQAUDPp/74GAEiDNAQAYJCGAAAM0hAAgPkPEeUDGB8fQ34AAAAASUVORK5CYII="},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var i=t(667294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);