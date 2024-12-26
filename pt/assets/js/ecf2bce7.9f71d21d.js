"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76937"],{308891:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/json-parse-array","title":"JSON PARSE ARRAY","description":"JSON PARSE ARRAY ( cadeiaJSON ; arrayObjeto )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-parse-array.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse-array","permalink":"/docs/pt/commands/json-parse-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-parse-array","title":"JSON PARSE ARRAY","slug":"/commands/json-parse-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Parse","permalink":"/docs/pt/commands/json-parse"},"next":{"title":"JSON Resolve pointers","permalink":"/docs/pt/commands/json-resolve-pointers"}}'),a=r("785893"),o=r("250065");let d={id:"json-parse-array",title:"JSON PARSE ARRAY",slug:"/commands/json-parse-array",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON PARSE ARRAY"})," ( ",(0,a.jsx)(n.em,{children:"cadeiaJSON"})," ; ",(0,a.jsx)(n.em,{children:"arrayObjeto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"cadeiaJSON"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Cadeia JSON a analisar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrayObjeto"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Array que cont\xe9m o resultado da an\xe1lise da cadeia JSON"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando ",(0,a.jsx)(n.strong,{children:"JSON PARSE ARRAY"})," analisa o conte\xfado de uma cadeia com formato JSON e localiza os dados extra\xeddos no array ",(0,a.jsx)(n.em,{children:"arrayObjeto"}),". Este comando n\xe3o realiza os dados JSON, realiza a a\xe7\xe3o inversa do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/json-stringify-array",children:"JSON Stringify array"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Em ",(0,a.jsx)(n.em,{children:"cadeiaJSON"}),", passe a cadeia com formato JSON cujo conte\xfado deseja analisar. Esta cadeia deve ter o formato correto, caso contr\xe1rio \xe9 gerado um erro de an\xe1lise."]}),"\n",(0,a.jsxs)(n.p,{children:["Em ",(0,a.jsx)(n.em,{children:"arrayObjeto"}),", passe o objeto que deve receber os resultados da an\xe1lise."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," A partir de 4D v16 R4, ",(0,a.jsx)(n.strong,{children:"JSON PARSE ARRAY"})," pode geralmente ser substitu\xeddo por uma chamada a ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/json-parse",children:"JSON Parse"})," que retorna uma ",(0,a.jsx)(n.strong,{children:"cole\xe7\xe3o"}),". Cole\xe7\xf5es s\xe3o baseadas em arrays JSON permite armazenar dados de diversos tipos, o que oferece mais flexibilidade que arrays."]}),"\n",(0,a.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(n.p,{children:"Neste exemplo, os dados dos campos dos registros de uma tabela se extraem e localizam nos arrays de objetos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0ARRAY OBJECT($sel;0)\n\xa0ARRAY OBJECT($sel2;0)\n\xa0var v_String : Text\n\xa0\n\xa0OB SET($ref;"name";->[Company]Company Name)\n\xa0OB SET($ref;"city";->[Company]City)\n\xa0\n\xa0While(Not(End selection([Company])))\n\xa0\xa0\xa0\xa0$ref_company:=OB Copy($ref;True)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel;$ref_company)\n\xa0\xa0// $sel{1}={"name":"4D SAS","city":"Clichy"}\n\xa0\xa0// $sel{2}={"name":"MyComp","city":"Lyon"}\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0NEXT RECORD([Company])\n\xa0End while\n\xa0\n\xa0v_String:=JSON Stringify array($sel)\n\xa0\xa0// v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]\n\xa0JSON PARSE ARRAY(v_String;$sel2)\n\xa0\xa0// $sel2{1}={"name":"4D SAS","city":"Clichy"}\n\xa0\xa0// $sel2{2}={"name":"MyComp","city":"Lyon"}\n\xa0\xa0//...\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/json-parse",children:"JSON Parse"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/json-stringify-array",children:"JSON Stringify array"})]}),"\n",(0,a.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"1219"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var s=r(667294);let a={},o=s.createContext(a);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);