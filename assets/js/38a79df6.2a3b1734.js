"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93931"],{41799:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/web-get-variables","title":"WEB GET VARIABLES","description":"WEB GET VARIABLES ( nameArray ; valueArray )","source":"@site/versioned_docs/version-20-R8/commands-legacy/web-get-variables.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-variables","permalink":"/docs/commands/web-get-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-get-variables","title":"WEB GET VARIABLES","slug":"/commands/web-get-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET STATISTICS","permalink":"/docs/commands/web-get-statistics"},"next":{"title":"WEB Is secured connection","permalink":"/docs/commands/web-is-secured-connection"}}'),a=s("785893"),r=s("250065");let i={id:"web-get-variables",title:"WEB GET VARIABLES",slug:"/commands/web-get-variables",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"About Web forms and their associated actions",id:"about-web-forms-and-their-associated-actions",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WEB GET VARIABLES"})," ( ",(0,a.jsx)(n.em,{children:"nameArray"})," ; ",(0,a.jsx)(n.em,{children:"valueArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nameArray"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Web form variable names"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valueArray"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Web form variable values"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"WEB GET VARIABLES"})," command fills the text arrays ",(0,a.jsx)(n.em,{children:"nameArray"})," and ",(0,a.jsx)(n.em,{children:"valueArray"})," with the variable names and values contained in the Web form \u201Csubmitted\u201D (i.e. sent to the Web server)."]}),"\n",(0,a.jsx)(n.p,{children:"This command gets the value for all the variables which can be included in HTML pages: text area, button, check box, radio button, pop up menu, choice list..."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," Regarding check boxes, the variable name and value are returned only if the check box has been actually checked."]}),"\n",(0,a.jsx)(n.p,{children:"This command is valid regardless of the type of URL or form (POST or GET method) sent to the Web server."}),"\n",(0,a.jsxs)(n.p,{children:["This command can be called, if necessary, in the ",(0,a.jsx)(n.a,{href:"/docs/commands/qr-set-destination",children:"QR SET DESTINATION"})," or any other 4D method resulting from a form submission."]}),"\n",(0,a.jsx)(n.h3,{id:"about-web-forms-and-their-associated-actions",children:"About Web forms and their associated actions"}),"\n",(0,a.jsxs)(n.p,{children:["Each form contains named data entry area (text area, buttons, checkboxes).",(0,a.jsx)(n.br,{}),"\nWhen a form is submitted (a request is sent to the Web server), the request contains (within others) the list of the data entry areas and their associated values.",(0,a.jsx)(n.br,{}),"\nA form can be submitted through two methods (both can be used with 4D):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"POST, usually used to add data into the Web server - to a database,"}),"\n",(0,a.jsx)(n.li,{children:"GET, usually used to request the Web server - data coming from a database."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"A form contains two fields, vName and vCity with \u201CROBERT\u201D and \u201CDALLAS\u201D values. The action associated to the form is \u201C/4DACTION/WEBFORM\u201D."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If the form method is POST (most frequently used), the data entered will not be visible in the URL (",(0,a.jsx)(n.a,{href:"http://127.0.0.1/4DACTION/WEBFORM",children:"http://127.0.0.1/4DACTION/WEBFORM"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["If the form method is GET, the data entered will be visible in the URL (",(0,a.jsx)(n.a,{href:"http://127.0.0.1/4DACTION/WEBFORM?vNAME=ROBERT&vCITY=DALLAS",children:"http://127.0.0.1/4DACTION/WEBFORM?vNAME=ROBERT&vCITY=DALLAS"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The WEBFORM method can be as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($anames;0)\n\xa0ARRAY TEXT($avalues;0)\n\xa0WEB GET VARIABLES($anames;$avalues)\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result will be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$anames{1}="vNAME"\n\xa0$anames{2}="vCITY"\n\xa0$avalues{1}="ROBERT"\n\xa0$avalues{2}="DALLAS"\n'})}),"\n",(0,a.jsx)(n.p,{children:"The vNAME variable contains ROBERT and the vCITY variable contains DALLAS."}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/commands/web-get-body-part",children:"WEB GET BODY PART"})}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"683"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);