"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36722"],{15579:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/ldap-login","title":"LDAP LOGIN","description":"LDAP LOGIN ( url ; login ; password {; digest} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/ldap-login.md","sourceDirName":"commands-legacy","slug":"/commands/ldap-login","permalink":"/docs/20-R8/commands/ldap-login","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-login.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ldap-login","title":"LDAP LOGIN","slug":"/commands/ldap-login","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LDAP","permalink":"/docs/20-R8/commands/theme/LDAP"},"next":{"title":"LDAP LOGOUT","permalink":"/docs/20-R8/commands/ldap-logout"}}'),r=s("785893"),i=s("250065");let d={id:"ldap-login",title:"LDAP LOGIN",slug:"/commands/ldap-login",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LDAP LOGIN"})," ( ",(0,r.jsx)(n.em,{children:"url"})," ; ",(0,r.jsx)(n.em,{children:"login"})," ; ",(0,r.jsx)(n.em,{children:"password"})," {; ",(0,r.jsx)(n.em,{children:"digest"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"URL of LDAP server to connect to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"login"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Login entry"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Password of login entry"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"digest"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 = send password in digest MD5 (default), 1 = send password without encryption"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"LDAP LOGIN"})," command opens a read-only connection to the LDAP server specified in the ",(0,r.jsx)(n.em,{children:"url"})," parameter with the ",(0,r.jsx)(n.em,{children:"login"})," and ",(0,r.jsx)(n.em,{children:"password"})," identifiers provided. If accepted by the server, this connection will be used for any LDAP searches executed subsequently in the current process until the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/ldap-logout",children:"LDAP LOGOUT"})," command is executed (or until the process is closed)."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"url"}),", pass the full URL of the LDAP server you want to connect to, including the scheme and port (389 by default). This parameter should be compliant with ",(0,r.jsx)(n.a,{href:"https://www.ietf.org/rfc/rfc2255.txt",children:"rfc2255"}),".",(0,r.jsx)(n.br,{}),"\nYou can open secure connections over TLS by using a ",(0,r.jsx)(n.em,{children:"url"}),' that starts with "ldaps" and uses a specific port number (for example "ldaps://svr.ldap.acme.com:1389"). The LDAP server must have an SSL Certificate (at least for Microsoft Active Directory). Using a TLS connection is highly recommended when the password is sent in plain text (see below).']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you pass an empty string in the ",(0,r.jsx)(n.em,{children:"url"})," parameter, the command will try to connect to the default LDAP server available on the domain; (this feature is intended for testing purposes only, for performance reasons it should not be used in production)."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"login"}),", pass the user account on the LDAP server, and in ",(0,r.jsx)(n.em,{children:"password"}),", pass the user password. By default, the ",(0,r.jsx)(n.em,{children:"login"})," can be one of the following login strings, depending on the LDAP Server configuration:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'a Distinguished Name (DN), for example "CN=John Smith,OU=users,DC=example,DC=com"'}),"\n",(0,r.jsx)(n.li,{children:'the user name (CN), for example "CN=John Smith"'}),"\n",(0,r.jsxs)(n.li,{children:['an e-mail address, for example "',(0,r.jsx)(n.a,{href:"mailto:johnsmith@4d.fr",children:"johnsmith@4d.fr"}),'"']}),"\n",(0,r.jsx)(n.li,{children:'an SAM-Account-Name, for example "jsmith".'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Note that accepted values for the ",(0,r.jsx)(n.em,{children:"login"})," are related to the password transmission mode as defined by the ",(0,r.jsx)(n.em,{children:"digest"})," parameter. For example, in a default MS Active Directory configuration:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When the transmission mode is LDAP password MD5, the only accepted value for a login is the SAM-Account-Name."}),"\n",(0,r.jsxs)(n.li,{children:["When the transmission mode is LDAP password plain text (clear text), the ",(0,r.jsx)(n.em,{children:"login"}),' parameter can be either DN, CN or an e-mail address. An SAM-Account-Name is also accepted but only when preceded by the domain name (for example, "dc-acme.com/jsmith").']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"digest"}),' parameter allows you to modify the way the password is transmitted over the network. You can use one of the following constants, located in the "',(0,r.jsx)(n.em,{children:"LDAP"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LDAP password MD5"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"(Default) Send password encrypted in MD5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LDAP password plain text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Send password with no encryption (TLS connection recommended)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.em,{children:"password"})," is transmitted in digest MD5. Pass LDAP password plain text if necessary, for example if you want to use different login type values with the LDAP server. In a production environment, it is recommended to use a TLS connection for the ",(0,r.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Authentication with an empty password lets you enter the anonymous binding mode (if authorized by the LDAP server). However, in this mode, errors can be thrown if you try to perform any operation that is not allowed in this kind of bind."]}),"\n",(0,r.jsx)(n.p,{children:"If the login parameters are valid, a connection to the LDAP server is opened in the 4D process. You can then search and retrieve information using LDAP commands."}),"\n",(0,r.jsxs)(n.p,{children:["Do not forget to call the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/ldap-logout",children:"LDAP LOGOUT"})," command when the connection to the LDAP server is no longer necessary."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to log in to an LDAP server and do a search:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes;"phoneNumber")\n\xa0LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")\n\xa0$vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";\u201Dcn=John Doe";LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\xa0//do not forget to log out\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"This example tries to connect to an application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ON ERR CALL("ErrHdlr")\xa0//handle errors\n\xa0errOccurred:=False\n\xa0errMsg:=""\n\xa0If(ppBindMode=1)\xa0//if password mode is default\n\xa0\xa0\xa0\xa0LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)\n\xa0Else\n\xa0\xa0\xa0\xa0LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)\n\xa0End if\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Not(errOccurred))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(" You are now connected to your LDAP server.\xa0 ")\n\xa0\n\xa0\xa0\xa0\xa0:(errOccurred)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Error in your parameters")\n\xa0End case\n\xa0\n\xa0LDAP LOGOUT\n\xa0ON ERR CALL("")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"LDAP"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/ldap-logout",children:"LDAP LOGOUT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1326"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);