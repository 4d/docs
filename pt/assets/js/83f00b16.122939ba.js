"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91329],{260489:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(474848),s=t(28453);const r={id:"object-get-value",title:"OBJECT Get value",slug:"/commands/object-get-value",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/object-get-value",title:"OBJECT Get value",description:"OBJECT Get value ( nomObjeto ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-value.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-value",permalink:"/docs/pt/commands/object-get-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-value",title:"OBJECT Get value",slug:"/commands/object-get-value",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT Get type",permalink:"/docs/pt/commands/object-get-type"},next:{title:"OBJECT Get vertical alignment",permalink:"/docs/pt/commands/object-get-vertical-alignment"}},l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){const o={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"OBJECT Get value"})," ( ",(0,n.jsx)(o.em,{children:"nomObjeto"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"nomObjeto"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome do objeto"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"any"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Valor atual da fonte de dados do objeto formul\xe1rio"})]})]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.strong,{children:"OBJECT Get value"})," retorna o valor atual da fonte de dados para os objetos formul\xe1rios determinados pelo par\xe2metro ",(0,n.jsx)(o.em,{children:"nomObjeto"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["No par\xe2metro ",(0,n.jsx)(o.em,{children:"nomObjeto"}),", passe o nome de um objeto formulario (string). Se usar o caractere coringa (\u201c@\u201d) para m\xfaltiplos objetos, apenas o valor de outras fontes de dados do primeiro objeto formul\xe1rio for retornado."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": ",(0,n.jsx)(o.strong,{children:"OBJECT Get value"})," n\xe3o est\xe1 dispon\xedvel em objetos colluna list box."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Valor retornado"})}),"\n",(0,n.jsx)(o.p,{children:"Valor atual da fonte de dados do objeto formul\xe1rio."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Notas"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Se a fonte de dados for um array, o comando retorna o \xedndice do array"}),"\n",(0,n.jsx)(o.li,{children:"Se a fonte de dados for uma express\xe3o, o comando retorna o valor avaliado desde o \xfaltimo ciclo de execu\xe7\xe3o"}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(o.p,{children:["Ver o exemplo para o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/object-set-value",children:"OBJECT SET VALUE"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/object-set-value",children:"OBJECT SET VALUE"})})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>d,x:()=>a});var n=t(296540);const s={},r=n.createContext(s);function d(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);