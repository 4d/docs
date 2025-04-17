"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19814"],{606714:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"FormEditor/print","title":"Imprimir","description":"Settings","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/FormEditor/properties_Print.md","sourceDirName":"FormEditor","slug":"/FormEditor/print","permalink":"/docs/pt/FormEditor/print","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"print","title":"Imprimir"},"sidebar":"docs","previous":{"title":"Men\xfa","permalink":"/docs/pt/FormEditor/menu"},"next":{"title":"Tamanho da janela","permalink":"/docs/pt/FormEditor/windowSize"}}'),r=t("785893"),s=t("250065");let o={id:"print",title:"Imprimir"},d=void 0,a={},l=[{value:"Settings",id:"settings",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}];function c(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,r.jsx)(n.p,{children:"Permite definir os par\xe2metros de impress\xe3o espec\xedficos para o formul\xe1rio. Esta funcionalidade \xe9 \xfatil para visualizar os limites da p\xe1gina de impress\xe3o no editor de formul\xe1rios."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibilidad:"})," aunque estos par\xe1metros se tengan en cuenta cuando se imprime el formulario en modo Aplicaci\xf3n, se desaconseja confiar en esta funcionalidad para almacenar los par\xe1metros de impresi\xf3n del formulario, debido a las limitaciones relativas Es muy recomendable utilizar los comandos 4D ",(0,r.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,r.jsx)(n.code,{children:"BLOB to print settings"})," que son m\xe1s poderosos."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Pode modificar os seguintes par\xe2metros de impress\xe3o:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Formato de papel"}),"\n",(0,r.jsx)(n.li,{children:"Orienta\xe7\xe3o do papel"}),"\n",(0,r.jsx)(n.li,{children:"Escala de p\xe1gina"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"As op\xe7\xf5es dispon\xedveis dependem da configura\xe7\xe3o do sistema."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nome"}),(0,r.jsx)(n.th,{children:"Tipo de dados"}),(0,r.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageFormat"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Propriedades de impress\xe3o dispon\xedveis: paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperName"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperWidth"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Utilizado se n\xe3o tiver sido encontrado um papel com o nome paperName. Requer sufixo de unidade: pt, in, mm, cm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperHeight"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Utilizado se n\xe3o tiver sido encontrado um papel com o nome paperName. Requer sufixo de unidade: pt, in, mm, cm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orientation"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"landscape" (padr\xe3o \xe9 "retrato")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scale"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"m\xednimo: 0"})]})]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(667294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);