"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5332"],{30956:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-sheet-options","title":"VP Get sheet options","description":"VP Get sheet options ( vpAreaName Integer } ) ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-get-sheet-options.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-sheet-options","permalink":"/docs/pt/ViewPro/commands/vp-get-sheet-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-sheet-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-get-sheet-options","title":"VP Get sheet options"},"sidebar":"docs","previous":{"title":"VP Get sheet name","permalink":"/docs/pt/ViewPro/commands/vp-get-sheet-name"},"next":{"title":"VP Get show print lines","permalink":"/docs/pt/ViewPro/commands/vp-get-show-print-lines"}}'),o=n("785893"),i=n("250065");let r={id:"vp-get-sheet-options",title:"VP Get sheet options"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Objeto devolvido",id:"objeto-devolvido",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"VP Get sheet options"})," ( ",(0,o.jsx)(t.em,{children:"vpAreaName"})," : Text {; ",(0,o.jsx)(t.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"vpAreaName"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"->"}),(0,o.jsx)(t.td,{children:"Nome da \xe1rea 4D View Pro no formul\xe1rio"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sheet"}),(0,o.jsx)(t.td,{children:"Integer"}),(0,o.jsx)(t.td,{children:"->"}),(0,o.jsx)(t.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultados"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"<-"}),(0,o.jsx)(t.td,{children:"Objecto op\xe7\xf5es de folha"}),(0,o.jsx)(t.td,{})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"VP Get sheet options"})," command returns an object containing the current sheet options of the ",(0,o.jsx)(t.em,{children:"vpAreaName"})," area."]}),"\n",(0,o.jsxs)(t.p,{children:["Passe o nome da \xe1rea 4D View Pro em ",(0,o.jsx)(t.em,{children:"vpAreaName"}),". Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,o.jsxs)(t.p,{children:["No par\xe2metro opcional ",(0,o.jsx)(t.em,{children:"sheet"}),", pode designar uma planilha espec\xedfica (a contagem come\xe7a em 0). Se omitido ou se voc\xea passar ",(0,o.jsx)(t.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,o.jsx)(t.h2,{id:"objeto-devolvido",children:"Objeto devolvido"}),"\n",(0,o.jsxs)(t.p,{children:["O m\xe9todo devolve um objeto que cont\xe9m os valores atuais de todas as op\xe7\xf5es de folha dispon\xedveis An option value may have been modified by the user or by the ",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"})," method."]}),"\n",(0,o.jsxs)(t.p,{children:["Para ver a lista completa das op\xe7\xf5es, consulte ",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/configuring#sheet-options",children:"Op\xe7\xf5es folha"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'$options:=VP Get sheet options("ViewProArea")\nIf($options.colHeaderVisible) //column headers are visible\n    ... //do something End if\n'})}),"\n",(0,o.jsx)(t.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/configuring#sheet-options",children:"4D VIEW PRO SHEET OPTIONS"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var s=n(667294);let o={},i=s.createContext(o);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);