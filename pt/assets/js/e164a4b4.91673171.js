"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92062"],{284113:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/set-plugin-access","title":"SET PLUGIN ACCESS","description":"SET PLUGIN ACCESS ( plugIn ; grupo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-plugin-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-plugin-access","permalink":"/docs/pt/commands/set-plugin-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-plugin-access.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-plugin-access","title":"SET PLUGIN ACCESS","slug":"/commands/set-plugin-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Set group properties","permalink":"/docs/pt/commands/set-group-properties"},"next":{"title":"SET USER ALIAS","permalink":"/docs/pt/commands/set-user-alias"}}'),d=s("785893"),i=s("250065");let t={id:"set-plugin-access",title:"SET PLUGIN ACCESS",slug:"/commands/set-plugin-access",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET PLUGIN ACCESS"})," ( ",(0,d.jsx)(n.em,{children:"plugIn"})," ; ",(0,d.jsx)(n.em,{children:"grupo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"plugIn"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de plug-in"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"grupo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome do grupo associado ao plug-in"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando SET PLUGIN ACCESS permite especificar por programa\xe7\xe3o o grupo de usu\xe1rios autorizado a utilizar cada plug-in com \u201Cn\xfamero de s\xe9rie\u201D instalado na base. Ao fazer isto, pode administrar a reparti\xe7\xe3o das licen\xe7as dos plug-ins."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": esta opera\xe7\xe3o tamb\xe9m pode ser realizada em modo Desenho no editor de grupos."]}),"\n",(0,d.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(n.em,{children:"plugIn"})," o n\xfamero do plug-in a associar um grupo de usu\xe1rios. As licen\xe7as de plug-ins incluem as licen\xe7as web e SOAP de 4D Client. Pode passar uma das seguintes constantes do tema \u201C",(0,d.jsx)(n.em,{children:"Licen\xe7a dispon\xedvel"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D Client SOAP license"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"808465465"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D Client Web license"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"808465209"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D for OCI license"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"808465208"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D ODBC Pro license"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"808464946"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D View license"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"808465207"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D Write license"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"808464697"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(n.em,{children:"grupo"})," o nome do grupo cujos usu\xe1rios est\xe3o autorizados a utilizar o plug-im."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"apenas um grupo por vez pode utilizar um plug-in. Quando este comando for executado, se outro grupo tiver os direitos de acesso ao plug-in, se perde este privil\xe9gio."}),"\n",(0,d.jsxs)(n.li,{children:["As licen\xe7as utilizadas permanecer\xe3o anexadas \xe0s contas de usu\xe1rio 4D em ",(0,d.jsx)(n.em,{children:"grupo"})," durante toda a sess\xe3o, mesmo se mudar de filia\xe7\xe3o ou se o ",(0,d.jsx)(n.em,{children:"grupo"})," perder seus direitos de acesso de plug-in."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-plugin-access",children:"Get plugin access"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/plugin-list",children:"PLUGIN LIST"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-group-access",children:"SET GROUP ACCESS"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"845"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var r=s(667294);let d={},i=r.createContext(d);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);