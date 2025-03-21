"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78139"],{816637:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/form-set-horizontal-resizing","title":"FORM SET HORIZONTAL RESIZING","description":"FORM SET HORIZONTAL RESIZING ( redimensao {; larguraMin {; larguraMax}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-set-horizontal-resizing.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-horizontal-resizing","permalink":"/docs/pt/commands/form-set-horizontal-resizing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-horizontal-resizing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-set-horizontal-resizing","title":"FORM SET HORIZONTAL RESIZING","slug":"/commands/form-set-horizontal-resizing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET ENTRY ORDER","permalink":"/docs/pt/commands/form-set-entry-order"},"next":{"title":"FORM SET INPUT","permalink":"/docs/pt/commands/form-set-input"}}'),o=n("785893"),i=n("250065");let a={id:"form-set-horizontal-resizing",title:"FORM SET HORIZONTAL RESIZING",slug:"/commands/form-set-horizontal-resizing",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"FORM SET HORIZONTAL RESIZING"})," ( ",(0,o.jsx)(r.em,{children:"redimensao"})," {; ",(0,o.jsx)(r.em,{children:"larguraMin"})," {; ",(0,o.jsx)(r.em,{children:"larguraMax"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"redimensao"}),(0,o.jsx)(r.td,{children:"Boolean"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"True: o formul\xe1rio pode ser redimensionado horizontalmente; False - o formul\xe1rio n\xe3o pode ser redimensionado horizontalmente"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"larguraMin"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Melhor largura de formul\xe1rio permitida (p\xedxels)"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"larguraMax"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Maior largura de formul\xe1rio permitida (p\xedxels)"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(r.p,{children:"O comando FORM SET HORIZONTAL RESIZING permite modificar por programa\xe7\xe3o as propriedades de redimensionamento horizontal do formul\xe1rio atual. Automaticamente, estas propriedades s\xe3o definidas no editor de formul\xe1rios no ambiente Desenho. As novas propriedades s\xe3o definidas para o processo atual; n\xe3o s\xe3o armazenadas com o formul\xe1rio."}),"\n",(0,o.jsxs)(r.p,{children:["O par\xe2metro ",(0,o.jsx)(r.em,{children:"redimensao"})," lhe permite definir se o formul\xe1rio pode ser redimensionado horizontalmente; em outras palavras, se a largura \xe9 modific\xe1vel (manualmente pelo usu\xe1rio ou por programa\xe7\xe3o)."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),", a largura do formul\xe1rio pode ser modificado pelo usu\xe1rio; 4D utiliza como marcadores os valores passados em ",(0,o.jsx)(r.em,{children:"larguraMin"})," e ",(0,o.jsx)(r.em,{children:"larguraMax"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),", n\xe3o \xe9 poss\xedvel modificar a largura do formul\xe1rio atual; neste caso, n\xe3o h\xe1 necessidade de passar valores nos par\xe2metros ",(0,o.jsx)(r.em,{children:"larguraMin"})," e ",(0,o.jsx)(r.em,{children:"larguraMax"})," ."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passar ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," no primeiro par\xe2metro, pode passar nos par\xe2metros opcionais ",(0,o.jsx)(r.em,{children:"larguraMin"})," e ",(0,o.jsx)(r.em,{children:"larguraMax"})," as novas larguras, m\xednimas e m\xe1ximas, do formul\xe1rio (em pixels). Se omitir estes par\xe2metros s\xe3o utilizados os valores definidos no ambiente Desenho (se os houver)."]}),"\n",(0,o.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(r.p,{children:["Consulte o exemplo do comando ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-set-size",title:"FORM SET SIZE",children:"FORM SET SIZE"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-get-horizontal-resizing",children:"FORM GET HORIZONTAL RESIZING"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-set-size",children:"FORM SET SIZE"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-set-vertical-resizing",children:"FORM SET VERTICAL RESIZING"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"892"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return a}});var s=n(667294);let o={},i=s.createContext(o);function a(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);