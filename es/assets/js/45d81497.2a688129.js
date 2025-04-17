"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38789"],{396058:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-printable-area","title":"GET PRINTABLE AREA","description":"GET PRINTABLE AREA ( altura {; largo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-printable-area.md","sourceDirName":"commands-legacy","slug":"/commands/get-printable-area","permalink":"/docs/es/20-R8/commands/get-printable-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-printable-area.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-printable-area","title":"GET PRINTABLE AREA","slug":"/commands/get-printable-area","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get print preview","permalink":"/docs/es/20-R8/commands/get-print-preview"},"next":{"title":"GET PRINTABLE MARGIN","permalink":"/docs/es/20-R8/commands/get-printable-margin"}}'),a=r("785893"),s=r("250065");let i={id:"get-printable-area",title:"GET PRINTABLE AREA",slug:"/commands/get-printable-area",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"GET PRINTABLE AREA"})," ( ",(0,a.jsx)(n.em,{children:"altura"})," {; ",(0,a.jsx)(n.em,{children:"largo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"altura"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Altura del \xe1rea de impresi\xf3n"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"largo"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Largo del \xe1rea de impresi\xf3n"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando GET PRINTABLE AREA devuelve el tama\xf1o en p\xedxeles del \xe1rea de impresi\xf3n en los par\xe1metros ",(0,a.jsx)(n.em,{children:"altura"})," y ",(0,a.jsx)(n.em,{children:"largo"})," el tama\xf1o. Este tama\xf1o depende de los par\xe1metros de impresi\xf3n actuales, la orientaci\xf3n del papel, etc."]}),"\n",(0,a.jsx)(n.p,{children:"El tama\xf1o devuelto no var\xeda de una p\xe1gina a otra (despu\xe9s de un salto de p\xe1gina, por ejemplo)."}),"\n",(0,a.jsxs)(n.p,{children:["Asociado al comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-printed-height",title:"Get printed height",children:"Get printed height"}),", este comando es \xfatil para conocer el n\xfamero de p\xedxeles disponibles para la impresi\xf3n o para centrar un objeto en la p\xe1gina."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre gesti\xf3n de impresi\xf3n y terminolog\xeda en 4D, consulte la descripci\xf3n del comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-printable-margin",title:"GET PRINTABLE MARGIN",children:"GET PRINTABLE MARGIN"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Para saber el tama\xf1o total de la p\xe1gina, puede:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["a\xf1adir las m\xe1rgenes ofrecidas por el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-printable-margin",title:"GET PRINTABLE MARGIN",children:"GET PRINTABLE MARGIN"})," a los valores devueltos por este comando."]}),"\n",(0,a.jsx)(n.li,{children:"o utilizar la siguiente sintaxis:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0SET PRINTABLE MARGIN(0;0;0;0)\xa0// Definir el margen del papel\n\xa0GET PRINTABLE AREA(hPapel;wPapel)\xa0//Tama\xf1o del papel\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-form",children:"Print form"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"703"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);