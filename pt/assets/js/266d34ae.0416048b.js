"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22251"],{732859:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/form-set-vertical-resizing","title":"FORM SET VERTICAL RESIZING","description":"FORM SET VERTICAL RESIZING ( redimensao {; alturaMin {; alturaMax}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-vertical-resizing.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-vertical-resizing","permalink":"/docs/pt/commands/form-set-vertical-resizing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-vertical-resizing.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-vertical-resizing","title":"FORM SET VERTICAL RESIZING","slug":"/commands/form-set-vertical-resizing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET SIZE","permalink":"/docs/pt/commands/form-set-size"},"next":{"title":"FORM UNLOAD","permalink":"/docs/pt/commands/form-unload"}}'),o=s("785893"),i=s("250065");let t={id:"form-set-vertical-resizing",title:"FORM SET VERTICAL RESIZING",slug:"/commands/form-set-vertical-resizing",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"FORM SET VERTICAL RESIZING"})," ( ",(0,o.jsx)(r.em,{children:"redimensao"})," {; ",(0,o.jsx)(r.em,{children:"alturaMin"})," {; ",(0,o.jsx)(r.em,{children:"alturaMax"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"redimensao"}),(0,o.jsx)(r.td,{children:"Boolean"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsxs)(r.td,{children:["True: o formul\xe1rio pode ser redimensionado verticalmente",(0,o.jsx)(r.br,{}),"False: o formul\xe1rio n\xe3o pode ser redimensionado verticalmente"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"alturaMin"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Maior altura de formul\xe1rio permitida (p\xedxels)"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"alturaMax"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Altura m\xe1xima de formul\xe1rio permitida (p\xedxels)"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(r.p,{children:"O comando FORM SET VERTICAL RESIZING lhe permite modificar por programa\xe7\xe3o as propriedades de redimensionamento vertical do formul\xe1rio atual. Automaticamente estas propriedades s\xe3o definidas no editor de formul\xe1rios no ambiente Desenho. As novas propriedades s\xe3o definidas para o processo atual; n\xe3o s\xe3o armazenadas com o formul\xe1rio."}),"\n",(0,o.jsxs)(r.p,{children:["O par\xe2metro ",(0,o.jsx)(r.em,{children:"redimensao"})," lhe permite definir se o formul\xe1rio pode ser redimensionado verticalmente; em outras palavras, se a altura \xe9 modific\xe1vel (manualmente pelo usu\xe1rio ou por programa\xe7\xe3o)."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),", a altura do formul\xe1rio pode ser modificada pelo usuario; 4D utiliza como marcadores os valores passados em ",(0,o.jsx)(r.em,{children:"alturaMin"})," e ",(0,o.jsx)(r.em,{children:"alturaMax"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),", n\xe3o pode ser modificada a largura do formul\xe1rio atual; neste caso, n\xe3o h\xe1 necessidade de passar valores nos par\xe2metros ",(0,o.jsx)(r.em,{children:"alturaMin"})," e ",(0,o.jsx)(r.em,{children:"alturaMax"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passar ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," no primeiro par\xe2metro, pode passar nos par\xe2metros opcionais ",(0,o.jsx)(r.em,{children:"alturaMin"})," e ",(0,o.jsx)(r.em,{children:"alturaMax"})," as novas alturas, m\xednimas e m\xe1ximas, do formul\xe1rio (em p\xedxels). Se omitir estes par\xe2metros s\xe3o utilizados os valores definidos no ambiente Desenho (se os houver)."]}),"\n",(0,o.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(r.p,{children:["Consulte o exemplo do comando ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-set-size",title:"FORM SET SIZE",children:"FORM SET SIZE"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-get-vertical-resizing",children:"FORM GET VERTICAL RESIZING"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-set-horizontal-resizing",children:"FORM SET HORIZONTAL RESIZING"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/form-set-size",children:"FORM SET SIZE"})]}),"\n",(0,o.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"893"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return t}});var n=s(667294);let o={},i=n.createContext(o);function t(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);