"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48906"],{601456:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/last-query-path","title":"Last query path","description":"Last query path ( formatDescr ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/last-query-path.md","sourceDirName":"commands-legacy","slug":"/commands/last-query-path","permalink":"/docs/pt/commands/last-query-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-query-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"last-query-path","title":"Last query path","slug":"/commands/last-query-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get query limit","permalink":"/docs/pt/commands/get-query-limit"},"next":{"title":"Last query plan","permalink":"/docs/pt/commands/last-query-plan"}}'),r=t("785893"),d=t("250065");let a={id:"last-query-path",title:"Last query path",slug:"/commands/last-query-path",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last query path"})," ( ",(0,r.jsx)(n.em,{children:"formatDescr"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatDescr"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Formato de descri\xe7\xe3o (texto ou XML)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Descri\xe7\xe3o da rota da \xfaltima pesquisa executada"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando Last query path devolve a descri\xe7\xe3o interna detalhada da rota real da \xfaltima pesquisa efetuada nos dados. Para maior informa\xe7\xe3o sobre as descri\xe7\xf5es de pesquisas, consulte a documenta\xe7\xe3o do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/describe-query-execution",title:"DESCRIBE QUERY EXECUTION",children:"DESCRIBE QUERY EXECUTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Esta descri\xe7\xe3o se devolve em formato Texto ou XML dependendo do valor passado no par\xe2metro ",(0,r.jsx)(n.em,{children:"formatDescr"}),". Pode passar uma das seguintes constantes, localizadas no tema \u201CQueries\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description in text format"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description in XML format"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando devolve um valor significativo se o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/describe-query-execution",title:"DESCRIBE QUERY EXECUTION",children:"DESCRIBE QUERY EXECUTION"})," tiver sido executado durante a sess\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["A descri\xe7\xe3o da rota da \xfaltima pesquisa pode ser comparada com a descri\xe7\xe3o do plano de pesquisa da \xfaltima pesquisa (obtido utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/last-query-plan",title:"Last query plan",children:"Last query plan"}),") com prop\xf3sitos de otimiza\xe7\xe3o."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1045"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let r={},d=s.createContext(r);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);