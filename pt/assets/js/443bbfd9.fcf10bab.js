"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51890"],{417653:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>a,toc:()=>i,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/char","title":"Char","description":"Char ( codigoCaractere ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/char.md","sourceDirName":"commands-legacy","slug":"/commands/char","permalink":"/docs/pt/commands/char","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchar.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"char","title":"Char","slug":"/commands/char","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Change string","permalink":"/docs/pt/commands/change-string"},"next":{"title":"Character code","permalink":"/docs/pt/commands/character-code"}}'),t=n("785893"),s=n("250065");let c={id:"char",title:"Char",slug:"/commands/char",displayed_sidebar:"docs"},o=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Char"})," ( ",(0,t.jsx)(r.em,{children:"codigoCaractere"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"codigoCaractere"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"C\xf3digo do caractere"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Caractere representado por c\xf3digoCaractere"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O comando ",(0,t.jsx)(r.strong,{children:"Char"})," devolve o caractere cujo c\xf3digo \xe9 ",(0,t.jsx)(r.em,{children:"codigoCaractere"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Passe um valor UTF-16 (entre 1 e 65535) em ",(0,t.jsx)(r.em,{children:"codigoCaractere."})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Dica"}),": O comando ",(0,t.jsx)(r.strong,{children:"Char"})," geralmente se utiliza para inserir no editor de m\xe9todos os caracteres que no podem ser introduzidos desde o teclado ou que devem ser interpretados como um comando de edi\xe7\xe3o no editor de m\xe9todos."]}),"\n",(0,t.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"O seguinte exemplo utiliza Char para inserir um retorno de carro no texto de uma mensagem de alerta:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0ALERT("Empregados: "+String(Records in table([Empregados]))+Char(Carriage return)+"Pressione Aceitar para continuar.")\n'})}),"\n",(0,t.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/commands/character-code",children:"Character code"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"C\xf3digos Unicode"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"S\xedmbolos de refer\xeancia de caracteres"})]}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"90"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return c}});var d=n(667294);let t={},s=d.createContext(t);function c(e){let r=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);