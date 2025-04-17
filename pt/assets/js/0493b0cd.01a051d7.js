"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32805"],{676983:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>r,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/set-cache-size","title":"SET CACHE SIZE","description":"SET CACHE SIZE ( tamanho {; libMin} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-cache-size.md","sourceDirName":"commands-legacy","slug":"/commands/set-cache-size","permalink":"/docs/pt/20-R8/commands/set-cache-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-cache-size.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-cache-size","title":"SET CACHE SIZE","slug":"/commands/set-cache-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET BLOBS CACHE PRIORITY","permalink":"/docs/pt/20-R8/commands/set-blobs-cache-priority"},"next":{"title":"SET INDEX CACHE PRIORITY","permalink":"/docs/pt/20-R8/commands/set-index-cache-priority"}}'),d=a("785893"),s=a("250065");let t={id:"set-cache-size",title:"SET CACHE SIZE",slug:"/commands/set-cache-size",displayed_sidebar:"docs"},c=void 0,r={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET CACHE SIZE"})," ( ",(0,d.jsx)(n.em,{children:"tamanho"})," {; ",(0,d.jsx)(n.em,{children:"libMin"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tamanho"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tamanho do banco de dados em bytes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"libMin"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"M\xednimo n\xfamero de bytes a liberar quando cache estiver cheia"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando SET CACHE SIZE define din\xe2micamente o tamanho da cache do banco de dados e, opcionalmente, permite definir o tamanho minino em bytes a partir do qual come\xe7a a liberar mem\xf3ria."}),"\n",(0,d.jsx)(n.p,{children:"Nota: este comando s\xf3 funciona em modo local (4D Server y 4D); n\xe3o deve ser utilizado desde um 4D em modo remoto."}),"\n",(0,d.jsx)(n.p,{children:"Em tam, passe o novo tamanho da mem\xf3ria cache do banco de dados em bytes. Este novo tamanho se aplica de forma din\xe2mica quando for executao o comando."}),"\n",(0,d.jsx)(n.p,{children:"Em libMin, passe o tamanho m\xednimo de mem\xf3ria a liberar da cach\xe9 do banco de dados quando o motor necessitar espa\xe7o para assignar um objeto a ele (valor em bytes). O prop\xf3sito desta op\xe7\xe3o \xe9 reduzir o n\xfamero de vezes que os dados s\xe3o liberados da mem\xf3ria cach\xe9 com o objetivo de obter um melhor rendimento. Como padr\xe3o, se esta op\xe7\xe3o n\xe3o for utilizada, 4D descarrega pelo menos 10% da cach\xe9 quando for necess\xe1rio espa\xe7o. Se seu banco de dados funcionar com um grande cache, pode ser vantajoso utilizar um tamanho fixo que n\xe3o dependa de tamanho da mem\xf3ria cach\xe9. Pode ajustar esta configura\xe7\xe3o de acordo com o tamanho dos blocos de dados que maneja em seu banco de datos."}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Se quiser adicionar 100 MB ao tamanho da cache de seu banco de ados atual. Pode escrever:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var $currentCache : Real\n\xa0$currentCache:=Get cache size\n\xa0\xa0// o tamanho da cach\xe9 atual, e por exemplo, 419430400\n\xa0SET CACHE SIZE($currentCache+100000000)\n\xa0\xa0// o tamanho da cach\xe9 atual agora \xe9 519430400\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-cache-size",children:"Get cache size"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1399"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return t}});var o=a(667294);let d={},s=o.createContext(d);function t(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);