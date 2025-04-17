"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48547"],{68580:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/web-service-set-parameter","title":"WEB SERVICE SET PARAMETER","description":"WEB SERVICE SET PARAMETER ( name ; value {; soapType} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/web-service-set-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-set-parameter","permalink":"/docs/commands/web-service-set-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-set-parameter.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-service-set-parameter","title":"WEB SERVICE SET PARAMETER","slug":"/commands/web-service-set-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE SET OPTION","permalink":"/docs/commands/web-service-set-option"},"next":{"title":"Web Services (Server)","permalink":"/docs/commands/theme/Web-Services-Server"}}'),t=r("785893"),d=r("250065");let i={id:"web-service-set-parameter",title:"WEB SERVICE SET PARAMETER",slug:"/commands/web-service-set-parameter",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SERVICE SET PARAMETER"})," ( ",(0,t.jsx)(n.em,{children:"name"})," ; ",(0,t.jsx)(n.em,{children:"value"})," {; ",(0,t.jsx)(n.em,{children:"soapType"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of parameter to include in SOAP request"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4D variable containing the value of the parameter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"soapType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"SOAP type of the parameter"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WEB SERVICE SET PARAMETER"})," command enables the definition of a parameter used for a client SOAP request. Call this command for each parameter in the request (the number of times the command is called depends on the number of parameters)."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"name"}),", pass the name of the parameter as it must appear in the SOAP request."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"value"}),", pass the 4D variable containing the value of the parameter. In the case of proxy methods, this variable is generally ",(0,t.jsx)(n.em,{children:"$param1"}),", ",(0,t.jsx)(n.em,{children:"$param2"}),", ",(0,t.jsx)(n.em,{children:"$param3"}),", etc., corresponding to a 4D parameter passed to the proxy method when it was called. It is, however, possible to use intermediary variables."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Each 4D variable or array used must first be declared using the commands of the theme ",(0,t.jsx)(n.em,{children:"Compiler"})," or ",(0,t.jsx)(n.em,{children:"Arrays"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, 4D automatically determines the most appropriate SOAP type for the ",(0,t.jsx)(n.em,{children:"name"})," parameter according to the content of ",(0,t.jsx)(n.em,{children:"value"}),". The indication of the type is included in the request."]}),"\n",(0,t.jsxs)(n.p,{children:["However, you may want to \u201Cforce\u201D the definition of the SOAP type of a parameter. In this case, you can pass the optional ",(0,t.jsx)(n.em,{children:"soapType"})," parameter using one of the following character strings (primary data types):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"soapType"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Text"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"Integer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"32-bit real"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"decimal"}),(0,t.jsx)(n.td,{children:"Real with decimal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"64-bit real"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"duration"}),(0,t.jsx)(n.td,{children:"Duration in years, months, days, hours, minutes, seconds, for example"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"P1Y2M3DT10H30M"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datetime"}),(0,t.jsx)(n.td,{children:"Date and time in ISO8601 format, for example 2003-05-31T13:20:00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Time, for example 13:20:00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"date"}),(0,t.jsx)(n.td,{children:"Date, for example 2003-05-31"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gyearmonth"}),(0,t.jsx)(n.td,{children:"Year and month (Gregorian calender), for example 2003-05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gyear"}),(0,t.jsx)(n.td,{children:"Year (Gregorian calender), for example 2003"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gmonthday"}),(0,t.jsx)(n.td,{children:"Month and day (Gregorian calender), for example --05-31"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gday"}),(0,t.jsx)(n.td,{children:"Day (Gregorian calender), for example ---31"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gmonth"}),(0,t.jsx)(n.td,{children:"Month (Gregorian calender), for example --10--"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hexbinary"}),(0,t.jsx)(n.td,{children:"Value expressed in hexadecimal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"base64binary"}),(0,t.jsx)(n.td,{children:"BLOB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"anyuri"}),(0,t.jsx)(n.td,{children:"Uniform Resource Identifier (URI), for example"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://www.company.com/page",children:"http://www.company.com/page"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qname"}),(0,t.jsx)(n.td,{children:"Qualified XML name (namespace and local part)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"notation"}),(0,t.jsx)(n.td,{children:"Notation attribute"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For more information about XML data types, refer to the URL ",(0,t.jsx)(n.a,{href:"http://www.w3.org/TR/xmlschema-2/",children:"http://www.w3.org/TR/xmlschema-2/"})]}),"\n",(0,t.jsxs)(n.li,{children:["This command does not support blob objects (4D.Blob type). See ",(0,t.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example defines two parameters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' #DECLARE($param1 : Text ; $param2 : Text)\n\xa0WEB SERVICE SET PARAMETER("city";$param1)\n\xa0WEB SERVICE SET PARAMETER("country";$param2)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"777"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);