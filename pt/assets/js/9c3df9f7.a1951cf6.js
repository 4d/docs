"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52296"],{99321:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-file-from-pasteboard","title":"Get file from pasteboard","description":"Get file from pasteboard ( indiceN ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-file-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-file-from-pasteboard","permalink":"/docs/pt/commands/get-file-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-file-from-pasteboard.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-file-from-pasteboard","title":"Get file from pasteboard","slug":"/commands/get-file-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR PASTEBOARD","permalink":"/docs/pt/commands/clear-pasteboard"},"next":{"title":"GET PASTEBOARD DATA","permalink":"/docs/pt/commands/get-pasteboard-data"}}'),o=n("785893"),a=n("250065");let s={id:"get-file-from-pasteboard",title:"Get file from pasteboard",slug:"/commands/get-file-from-pasteboard",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Get file from pasteboard"})," ( ",(0,o.jsx)(r.em,{children:"indiceN"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"indiceN"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Arquivo N inclu\xeddo na a\xe7\xe3o de arrastar"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Resultado"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Rota do arquivo extra\xeddo da \xe1rea de transfer\xeancia"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando Get file from pasteboard devolve a rota de acesso absoluto de um arquivo inclu\xeddo em uma opera\xe7\xe3o de arrastar e soltar. V\xe1rios arquivos podem ser selecionados e movidos simult\xe2neamente. O par\xe2metro ",(0,o.jsx)(r.em,{children:"indiceN"})," s\xe3o utilizados para designar um arquivo entre um conjunto de arquivos selecionados."]}),"\n",(0,o.jsx)(r.p,{children:"Se n\xe3o houver arquivo N no porta-pap\xe9is, o comando devolve uma string vazia."}),"\n",(0,o.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(r.p,{children:"O exemplo a seguir pode ser utilizado para recuperar em um array todas as rotas de acesso aos arquivos inclu\xeddos na opera\xe7\xe3o arrastar e soltar:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrayArquivos;0)\n\xa0var $vtarquivo : Text\n\xa0var $n : Integer\n\xa0$n:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vtarquivo:=Get file from pasteboard($n)\n\xa0\xa0\xa0\xa0If($vtarchivo#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($arrayArquivos;$vtarquivo)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$n:=$n+1\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vtarquivo="")\n'})}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"})}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"976"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var t=n(667294);let o={},a=t.createContext(o);function s(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);