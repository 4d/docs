"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[493],{826338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=r(474848),t=r(28453);const c={id:"wp-new-header",title:"WP New header",slug:"/WritePro/commands/wp-new-header",displayed_sidebar:"docs"},d=void 0,i={id:"WritePro/commands-legacy/wp-new-header",title:"WP New header",description:"WP New header ( wpSection ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-header.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-new-header",permalink:"/docs/es/WritePro/commands/wp-new-header",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-header.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-new-header",title:"WP New header",slug:"/WritePro/commands/wp-new-header",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP New footer",permalink:"/docs/es/WritePro/commands/wp-new-footer"},next:{title:"WP New style sheet",permalink:"/docs/es/WritePro/commands/wp-new-style-sheet"}},o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP New header"})," ( ",(0,s.jsx)(n.em,{children:"wpSection"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpSection"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Secci\xf3n o subsecci\xf3n 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Encabezado 4D Write Pro"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"WP New header"})," crea y devuelve el encabezado asociado a la secci\xf3n o subsecci\xf3n definida por el par\xe1metro ",(0,s.jsx)(n.em,{children:"wpSection"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ya se ha definido un elemento de encabezado para la secci\xf3n o subsecci\xf3n, se devuelve un objeto ",(0,s.jsx)(n.em,{children:"indefinido"})," y se genera un error."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Desea crear un encabezado para las p\xe1ginas correctas de una secci\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Recupera la primera secci\xf3n\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Recupera la subsecci\xf3n de la primera secci\xf3n\n\xa0$subsection:=WP Get subsection($section;wk right page)\n\xa0\n\xa0\xa0//Si la subsecci\xf3n existe, configura el encabezado\n\xa0If($subsection#Null)\n\xa0\xa0\xa0\xa0$header:=WP New header($subsection)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-delete-header",children:"WP DELETE HEADER "}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(296540);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);