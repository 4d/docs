"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42019],{431056:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(474848),r=s(28453);const i={id:"delete-string",title:"Delete string",slug:"/commands/delete-string",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/delete-string",title:"Delete string",description:"Delete string ( fuente ; posicion ; numCaracteres ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-string.md",sourceDirName:"commands-legacy",slug:"/commands/delete-string",permalink:"/docs/es/commands/delete-string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"delete-string",title:"Delete string",slug:"/commands/delete-string",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Convert to text",permalink:"/docs/es/commands/convert-to-text"},next:{title:"GET TEXT KEYWORDS",permalink:"/docs/es/commands/get-text-keywords"}},c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Delete string"})," ( ",(0,t.jsx)(n.em,{children:"fuente"})," ; ",(0,t.jsx)(n.em,{children:"posicion"})," ; ",(0,t.jsx)(n.em,{children:"numCaracteres"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fuente"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cadena de la cual borrar caracteres"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posicion"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Primer caracter a borrar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCaracteres"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de caracteres a borrar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Cadena resultante"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Delete string borra ",(0,t.jsx)(n.em,{children:"numCaracteres"})," de ",(0,t.jsx)(n.em,{children:"fuente"}),", a partir de ",(0,t.jsx)(n.em,{children:"posicion"}),", y devuelve la cadena resultante."]}),"\n",(0,t.jsxs)(n.p,{children:["Delete string devuelve la misma cadena que ",(0,t.jsx)(n.em,{children:"fuente"})," cuando:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"fuente"})," es una cadena vac\xeda"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"posicion"})," es superior a la longitud de ",(0,t.jsx)(n.em,{children:"fuente"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"numCaracteres"})," es igual a cero (0)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"posicion"})," es inferior a uno, los caracteres son borrados a partir del inicio de la cadena."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"posicion"})," m\xe1s ",(0,t.jsx)(n.em,{children:"numCaracteres"})," es igual o mayor a la longitud de ",(0,t.jsx)(n.em,{children:"fuente"}),", los caracteres se borran a partir de ",(0,t.jsx)(n.em,{children:"posicion"})," hasta el final de ",(0,t.jsx)(n.em,{children:"fuente"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo ilustra el uso de Delete string. Los resultados se asignan a la variable ",(0,t.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vtResult:=Delete string("Lamborghini";6;6)\xa0// vtResult obtiene "Lambo"\n\xa0vtResult:=Delete string("Indentation";6;2)\xa0// vtResult obtiene "Indention"\n\xa0vtResult:=Delete string(var;3;32000)\xa0// vtResult es igual a los dos primeros caracteres de var\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/change-string",children:"Change string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/insert-string",children:"Insert string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/replace-string",children:"Replace string"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);