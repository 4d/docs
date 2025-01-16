"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83670"],{933843:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>a,assets:()=>d,toc:()=>i,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/cache-info","title":"Cache info","description":"Cache info {( bdFiltro )} : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/cache-info.md","sourceDirName":"commands-legacy","slug":"/commands/cache-info","permalink":"/docs/pt/commands/cache-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcache-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"cache-info","title":"Cache info","slug":"/commands/cache-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADJUST TABLE CACHE PRIORITY","permalink":"/docs/pt/commands/adjust-table-cache-priority"},"next":{"title":"FLUSH CACHE","permalink":"/docs/pt/commands/flush-cache"}}'),s=o("785893"),r=o("250065");let c={id:"cache-info",title:"Cache info",slug:"/commands/cache-info",displayed_sidebar:"docs"},t=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cache info"})," {( ",(0,s.jsx)(n.em,{children:"bdFiltro"})," )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bdFiltro"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Define a lista de atributos a ser retornada (filtrada por banco de dados)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Informa\xe7\xe3o sobre cache"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"Cache info"})," devolve um objeto que contenha a informa\xe7\xe3o detalhada sobre o conte\xfado atual da cach\xe9 (mem\xf3ria utilizada, tabelas e \xedndices carregados, etc.)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3 funciona em modo local (4D Server e 4D); n\xe3o deve ser utilizado com 4D em modo remoto."]}),"\n",(0,s.jsxs)(n.p,{children:["Como padr\xe3o, a informa\xe7\xe3o devolvida se refere somente ao banco sendo executado. O par\xe2metro objeto opcional ",(0,s.jsx)(n.em,{children:"dbFilter"})," lhe permite especificar o alcance do comando:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'passe o atributo "dbFilter" com o valor "All" para obter a informa\xe7\xe3o sobre a cach\xe9 de todos os bancos de dados lan\xe7ados, incluidos os componentes.'}),"\n",(0,s.jsxs)(n.li,{children:['passe o atributo "dbFilter" com um valor "" (string vazia) para obter informa\xe7\xe3o sobre o \xfanico banco de dados atual (equivale a omitir o par\xe2metro ',(0,s.jsx)(n.em,{children:"dbFilter"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"Cache info"})," devolve um \xfanico objeto que cont\xe9m toda a informa\xe7\xe3o relevante sobre a cach\xe9. O objeto devolvido tem a seguinte estrutura b\xe1sica:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "maxMem": Maximum cache size (real),\xa0\xa0\xa0 "usedMem": Current cache size (real),\xa0\xa0\xa0 "objects": [...] Array of objects currently loaded in cache}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Os elementos de array ",(0,s.jsx)(n.em,{children:"objetos"})," s\xe3o objetos raiz (tabelas, \xedndices, Blobs, etc.) que estejam carregados na mem\xf3ria cach\xe9. Cada elemento cont\xe9m atributos espec\xedficos que descrevem seu estado atual. Para mais informa\xe7\xe3o sobre a interpreta\xe7\xe3o avan\xe7ada destes dados, contacte a seu departamento de servi\xe7o t\xe9cnico."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser obter a informa\xe7\xe3o da cache para o banco de dados atual:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $cache : Object\n\xa0$cache:=Cache info\n"})}),"\n",(0,s.jsx)(n.p,{children:"Se quiser obter informa\xe7\xe3o da cache do banco de dados e todos os componentes abertos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $dbFilter : Object\n\xa0OB SET($dbFilter;"dbFilter";"All")\n\xa0$cache:=Cache info($dbFilter)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/memory-statistics",children:"MEMORY STATISTICS"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1402"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return c}});var a=o(667294);let s={},r=a.createContext(s);function c(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);