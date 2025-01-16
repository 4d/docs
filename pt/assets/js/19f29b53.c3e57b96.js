"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58922"],{809227:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/object-set-value","title":"OBJECT SET VALUE","description":"OBJECT SET VALUE ( nomObjeto ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-value","permalink":"/docs/pt/20-R7/commands/object-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-value","title":"OBJECT SET VALUE","slug":"/commands/object-set-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET TITLE","permalink":"/docs/pt/20-R7/commands/object-set-title"},"next":{"title":"OBJECT SET VERTICAL ALIGNMENT","permalink":"/docs/pt/20-R7/commands/object-set-vertical-alignment"}}'),r=t("785893"),s=t("250065");let d={id:"object-set-value",title:"OBJECT SET VALUE",slug:"/commands/object-set-value",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function i(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET VALUE"})," ( ",(0,r.jsx)(n.em,{children:"nomObjeto"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomObjeto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome de objeto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Novo valor para a fonte de dados do objeto formul\xe1rio"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET VALUE"})," estabelece ",(0,r.jsx)(n.em,{children:"valor"})," da fonte de dados atual para os objetos formul\xe1rio determinados pelo par\xe2metro ",(0,r.jsx)(n.em,{children:"nomObjeto"}),".."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"nomObjeto"}),", passe o nome de um objeto formul\xe1rio (uma string). Pode estabelecer o valor de objetos formul\xe1rio m\xfaltiplos usando um caractere coringa (\u201C@\u201D)."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"value"})," permite que passe um novo valor (qualquer tipo) para a fonte de dados do objeto de formul\xe1rio."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": Se a fonte de dados for uma express\xe3o n\xe3o atribu\xedvel ",(0,r.jsx)(n.strong,{children:"OBJECT SET VALUE"})," n\xe3o faz nada. Para saber mais veja ",(0,r.jsx)(n.em,{children:"assignable vs non-assignable expressions"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser o valor da data source de um objeto formul\xe1rio, obtenha seu nome e estabele\xe7a um novo valor:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $value : Variant\n\xa0\n\xa0$value:=OBJECT Get value(OBJECT Get name(Object current))&NBSP;\xa0//verifique o valor estabelecido\xa0\n\xa0\n\xa0OBJECT SET VALUE(OBJECT Get name(Object current);$value+10)&NBSP;\xa0//encontre o nome do objeto formul\xe1rio e estabele\xe7a o valor para 50\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-get-value",children:"OBJECT Get value"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1742"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var o=t(667294);let r={},s=o.createContext(r);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);