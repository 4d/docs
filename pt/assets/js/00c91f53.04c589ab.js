"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86366],{108043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=t(474848),r=t(28453);const s={id:"print",title:"Imprimir"},o=void 0,d={id:"FormEditor/print",title:"Imprimir",description:"Settings",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/pt/19/FormEditor/print",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"print",title:"Imprimir"},sidebar:"docs",previous:{title:"Men\xfa",permalink:"/docs/pt/19/FormEditor/menu"},next:{title:"Tamanho da janela",permalink:"/docs/pt/19/FormEditor/windowSize"}},c={},a=[{value:"Settings",id:"settings",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,i.jsx)(n.p,{children:"Permite definir os par\xe2metros de impress\xe3o espec\xedficos para o formul\xe1rio. Esta funcionalidade \xe9 \xfatil para visualizar os limites da p\xe1gina de impress\xe3o no editor de formul\xe1rios."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compatibility:"})," Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands ",(0,i.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,i.jsx)(n.code,{children:"BLOB to print settings"})," which are more powerful."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Pode modificar os seguintes par\xe2metros de impress\xe3o:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Formato de papel"}),"\n",(0,i.jsx)(n.li,{children:"Orienta\xe7\xe3o do papel"}),"\n",(0,i.jsx)(n.li,{children:"Escala de p\xe1gina"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"As op\xe7\xf5es dispon\xedveis dependem da configura\xe7\xe3o do sistema."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nome"}),(0,i.jsx)(n.th,{children:"Tipo de dados"}),(0,i.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pageFormat"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Propriedades de impress\xe3o dispon\xedveis: paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"paperName"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"paperWidth"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Utilizado se n\xe3o tiver sido encontrado um papel com o nome paperName. Requer sufixo de unidade: pt, in, mm, cm."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"paperHeight"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Utilizado se n\xe3o tiver sido encontrado um papel com o nome paperName. Requer sufixo de unidade: pt, in, mm, cm."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"orientation"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"landscape" (padr\xe3o \xe9 "retrato")'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scale"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"m\xednimo: 0"})]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(296540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);