"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99653"],{326302:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-sheet-name","title":"VP Get sheet name","description":"VP Get sheet name ( vpAreaName Integer ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-sheet-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-sheet-name","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-get-sheet-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-sheet-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-sheet-name","title":"VP Get sheet name"},"sidebar":"docs","previous":{"title":"VP Get sheet index","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-get-sheet-index"},"next":{"title":"VP Get sheet options","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-get-sheet-options"}}'),r=t("785893"),d=t("250065");let o={id:"vp-get-sheet-name",title:"VP Get sheet name"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get sheet name"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Nome da folha"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get sheet name"})," command returns the name of a sheet based on its index in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"sheet"}),", pass the index of the sheet whose name will be returned."]}),"\n",(0,r.jsx)(n.p,{children:"Se o \xedndice de folha passado n\xe3o existir, o m\xe9todo devolve um nome vazio."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"A indexa\xe7\xe3o come\xe7a em 0."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Obt\xe9m o nome da terceira folha do documento:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$sheetName:=VP Get sheet name("ViewProArea";2)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-get-sheet-index",children:"VP Get sheet index"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);