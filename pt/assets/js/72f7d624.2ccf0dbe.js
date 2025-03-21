"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34246"],{896511:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/create-set-from-array","title":"CREATE SET FROM ARRAY","description":"CREATE SET FROM ARRAY ( tabela ; arrayReg {; nomConjunto} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-set-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-set-from-array","permalink":"/docs/pt/20-R7/commands/create-set-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set-from-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-set-from-array","title":"CREATE SET FROM ARRAY","slug":"/commands/create-set-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SET","permalink":"/docs/pt/20-R7/commands/create-set"},"next":{"title":"DIFFERENCE","permalink":"/docs/pt/20-R7/commands/difference"}}'),s=n("785893"),a=n("250065");let t={id:"create-set-from-array",title:"CREATE SET FROM ARRAY",slug:"/commands/create-set-from-array",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"CREATE SET FROM ARRAY"})," ( ",(0,s.jsx)(r.em,{children:"tabela"})," ; ",(0,s.jsx)(r.em,{children:"arrayReg"})," {; ",(0,s.jsx)(r.em,{children:"nomConjunto"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabela"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabela do conjunto"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"arrayReg"}),(0,s.jsx)(r.td,{children:"Integer, Boolean array"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Array de n\xfameros de registrs, ou Array de booleanos (True = o registro est\xe1 no conjunto, False = o registro n\xe3o est\xe1 no conjunto)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nomConjunto"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Nome do conjunto a criar, ou Aplicar o comando ao UserSet se omitido"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando CREATE SET FROM ARRAY cria ",(0,s.jsx)(r.em,{children:"nomConj"})," a partir de:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["seja um array de n\xfamero de registros absolutos ",(0,s.jsx)(r.em,{children:"arrayReg"})," da tabela ",(0,s.jsx)(r.em,{children:"tabela"}),","]}),"\n",(0,s.jsxs)(r.li,{children:["ou um array de booleanos ",(0,s.jsx)(r.em,{children:"arrayReg"}),". Neste caso, os valores do array indicam se cada registro na tabela pertence (",(0,s.jsx)(r.em,{children:"True"}),") ou n\xe3o (",(0,s.jsx)(r.em,{children:"False"}),") a ",(0,s.jsx)(r.em,{children:"nomCon"}),".\nQuando utilize este comando e passa um array inteiro longo em ",(0,s.jsx)(r.em,{children:"arrayReg"}),", todos os n\xfameros no array reapresentam a lista de n\xfameros de registros que est\xe1 em ",(0,s.jsx)(r.em,{children:"nomConjunto"}),". Se um n\xfamero for inv\xe1lido (por exemplo, se um registro n\xe3o tiver sido criado), se gera o erro -10503."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Quando utilizar este comando para passar um array inteiro longo em ",(0,s.jsx)(r.em,{children:"arrayReg"}),", todos os n\xfameros no array representam a lista de n\xfameros de registros que estejam em ",(0,s.jsx)(r.em,{children:"nomConjunto"}),". Se um n\xfamero for inv\xe1lido (por exemplo, se um registro n\xe3o foi criado), o erro -10503 \xe9 gerado."]}),"\n",(0,s.jsxs)(r.p,{children:["Quando utilizar este comando para passar um array booleano em ",(0,s.jsx)(r.em,{children:"arrayReg"}),', um elemento N do array indica se o registro "N" est\xe1 (',(0,s.jsx)(r.strong,{children:"True"}),") ou n\xe3o (",(0,s.jsx)(r.strong,{children:"False"}),") em nomConjunto. No princ\xedpio, o n\xfamero de elementos do array deve ser igual ao n\xfamero de registros na tabela. Se o array \xe9 m\xe1s pequeno que o n\xfamero de registros, apenas os registros definidos pelo array estar\xe3o no conjunto."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota"}),": com um array de booleanos, o comando utiliza os elementos 0 a N-1."]}),"\n",(0,s.jsxs)(r.p,{children:["Se n\xe3o passar o par\xe2metro ",(0,s.jsx)(r.em,{children:"nomConjunto"})," ou se passar uma string vazia, o comando \xe9 aplicado ao conjunto sistema Userset."]}),"\n",(0,s.jsx)(r.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsx)(r.p,{children:"Em um array de inteiros longos, se um n\xfamero de registro n\xe3o for v\xe1lido (registro n\xe3o criado), se gera o erro -10503."}),"\n",(0,s.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/boolean-array-from-set",children:"BOOLEAN ARRAY FROM SET"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"})]}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"641"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(r.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return t}});var o=n(667294);let s={},a=o.createContext(s);function t(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);