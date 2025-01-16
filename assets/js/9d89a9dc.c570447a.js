"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78208"],{107897:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/web-service-set-option","title":"WEB SERVICE SET OPTION","description":"WEB SERVICE SET OPTION ( option ; value )","source":"@site/versioned_docs/version-20-R8/commands-legacy/web-service-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-set-option","permalink":"/docs/commands/web-service-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-set-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-service-set-option","title":"WEB SERVICE SET OPTION","slug":"/commands/web-service-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/commands/web-service-get-result"},"next":{"title":"WEB SERVICE SET PARAMETER","permalink":"/docs/commands/web-service-set-parameter"}}'),i=t("785893"),r=t("250065");let o={id:"web-service-set-option",title:"WEB SERVICE SET OPTION",slug:"/commands/web-service-set-option",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Preliminary note",id:"preliminary-note",level:4},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB SERVICE SET OPTION"})," ( ",(0,i.jsx)(n.em,{children:"option"})," ; ",(0,i.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Code of the option to set"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Value of the option"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"preliminary-note",children:"Preliminary note"}),"\n",(0,i.jsx)(n.p,{children:"This command is designed for advanced Web Services users. Its use is optional."}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WEB SERVICE SET OPTION"})," command sets different options to be used during the next SOAP request triggered using the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command.",(0,i.jsx)(n.br,{}),"\nYou can call this command as many times as there are options to be set."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"option"})," parameter, pass the number of the option to set and in the ",(0,i.jsx)(n.em,{children:"value"})," parameter, pass the new value of the option. For these parameters, you can use one of the following predefined constants of the ",(0,i.jsx)(n.em,{children:"Web Services (Client)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service display auth dialog"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"value"})," = 0 (do not display dialog box) or 1 (display dialog box)",(0,i.jsx)(n.br,{}),"This option manages the display of the authentication dialog box during execution of the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command. By default, this command never displays the dialog box; normally, you have to use the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-authenticate",children:"WEB SERVICE AUTHENTICATE"})," command to do so. However, if you want the authentication dialog box to appear in order for the user to enter their identifiers, you will need to use this option: pass 1 in ",(0,i.jsx)(n.em,{children:"value"})," to display the dialog box and 0 otherwise. The dialog box only appears if the Web service requires authentication"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service HTTP compression"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"value"})," = Web Service Compression ",(0,i.jsx)(n.br,{})," This option is used to enable an internal compression mechanism for SOAP requests in order to accelerate inter-4D application exchanges. When you execute the statement ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),'(Web Service HTTP Compression; Web Service Compression) on the 4D client of the Web Service, the data of the next SOAP request sent by the client will be compressed using a standard HTTP mechanism ("gzip" or "deflate", depending on the request contents) before being sent to the 4D SOAP server. The server will decompress and parse the request, then will reply automatically using the same mechanism. Only the request that follows the call to the ',(0,i.jsx)(n.a,{href:"/docs/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"})," command is affected. You must therefore call this command each time you want to use compression. By default, 4D does not compress Web Service HTTP requests.",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Note:"})," This mechanism cannot be used for requests sent to a 4D SOAP server whose version is earlier than 11.3. So that you can further optimize this functioning, additional options configure the threshold and compression rate of the requests. These options can be accessed via the ",(0,i.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service HTTP timeout"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"value"})," = timeout of the client portion expressed in seconds.",(0,i.jsx)(n.br,{}),"The timeout of the client portion is the wait period of the Web Service client in case the server does not respond. After this period, the client closes the session and the request is lost. ",(0,i.jsx)(n.br,{}),"This timeout is 180 seconds by default. It can be modified for specific reasons (network status, Web Service specifics, etc.)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service reset auth settings"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"value"})," = 0 (do not erase information) or 1 (erase information)",(0,i.jsx)(n.br,{}),"This option lets you indicate to 4D whether to memorize the authentication information of the user (user name, password, method, etc.), in order to reuse it subsequently. By default, this information is erased after each execution of the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command. Pass 0 in value to store the information and 1 to erase it. Note that when you pass 0, the information is kept during the session but is not stored."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service SOAP header"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"value"})," = XML root element reference to insert as a header in the SOAP request.",(0,i.jsx)(n.br,{}),"This option allows you to insert a header in a SOAP request generated using the ",(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})," command. SOAP requests do not contain a specific header by default. However, certain Web Services require a header, for example when managing identification parameters"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Web Service SOAP version"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"value"})," = Web Service SOAP_1_1 or Web Service SOAP_1_2",(0,i.jsx)(n.br,{}),"This option lets you specify the SOAP protocol version used in the request. Pass the Web Service SOAP_1_1 constant in value to indicate version 1.1 and Web Service SOAP_1_2 to indicate version 1.2."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The order in which the options are called is not important. If the same ",(0,i.jsx)(n.em,{children:"option"})," is set several times, only the value of the last call is taken into account."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"Inserting a customized header in the SOAP request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Creating an XML reference\n\xa0var vRootRef;vElemRef : Text\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath)\n\xa0\xa0//Modifying SOAP header with reference\n\xa0WEB SERVICE SET OPTION(Web Service SOAP header;vElemRef)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"Using version 1.2 of the SOAP protocol:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"901"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);