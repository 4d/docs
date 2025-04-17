"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3981"],{103937:function(e,a,r){r.r(a),r.d(a,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/register-data-key","title":"Register data key","description":"Register data key ( curPassPhrase ) Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/register-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/register-data-key","permalink":"/docs/pt/commands/register-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregister-data-key.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"register-data-key","title":"Register data key","slug":"/commands/register-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New data key","permalink":"/docs/pt/commands/new-data-key"},"next":{"title":"Database Methods","permalink":"/docs/pt/commands/theme/Database-Methods"}}'),n=r("785893"),d=r("250065");let t={id:"register-data-key",title:"Register data key",slug:"/commands/register-data-key",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Register data key"})," ( ",(0,n.jsx)(a.em,{children:"curPassPhrase"})," ) : Boolean",(0,n.jsx)(a.br,{}),(0,n.jsx)(a.strong,{children:"Register data key"})," ( ",(0,n.jsx)(a.em,{children:"curDataKey"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"curPassPhrase | curDataKey"}),(0,n.jsx)(a.td,{children:"Texto, Objeto"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Frase passe atual (texto) ou chave de criptografia de dados atual (objeto)"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Resultado"}),(0,n.jsx)(a.td,{children:"Boolean"}),(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"True se a chave de criptografia tiver sido adicionada com sucesso ao chaveiro 4D, False se j\xe1 estiver no chaveiro."})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["O comando ",(0,n.jsx)(a.strong,{children:"Register data key"})," agrega a chave de cifrado de dados passada no par\xe2metro ao chaveiro 4D."]}),"\n",(0,n.jsxs)(a.p,{children:["O chaveiro 4D \xe9 um conjunto de uma ou mais chaves de cifrado de dados carregadas na mem\xf3ria que 4D escaneia automaticamente quando se exigir uma chave de dados para descifrar/cifrar um arquivo de dados. Para mais informa\xe7\xe3o, consulte ",(0,n.jsx)(a.em,{children:"Criptografia de dados"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["No primeiro par\xe2metro, passe ",(0,n.jsx)(a.em,{children:"curPassPhrase"})," ou ",(0,n.jsx)(a.em,{children:"curDataKey"})," que define a chave de cifrado a agregar:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.em,{children:"curPassPhrase"}),": string utilizada para gerar a chave de cifrado. Quando se utilizar este par\xe2metro, se gera uma chave de cifrado."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.em,{children:"curDataKey"}),": objeto (com propriedade ",(0,n.jsx)(a.em,{children:"encodedKey"}),") que cont\xe9m a chave de cifrado de dados. Esta chave pode ser gerada com o comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Valor devolvido"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"True"})," se a chave de cifrado for carregada corretamente no chaveiro 4D."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"False"})," se a mesma chave de cifrado j\xe1 estiver presente no chaveiro 4D."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0var $passphrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Introduza a frase-passe:")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\n\xa0\n\xa0\xa0\xa0\xa0OPEN DATA FILE("data.4DD")\xa0//N\xe3o \xe9 necess\xe1rio uma chave, j\xe1 est\xe1 no chaveiro 4D\n\xa0End if\n'})}),"\n",(0,n.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"})}),"\n",(0,n.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"1638"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return t}});var s=r(667294);let n={},d=s.createContext(n);function t(e){let a=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);