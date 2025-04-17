"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10712"],{182519:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/ob-values","title":"OB Values","description":"OB Values ( objeto ) : Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/ob-values.md","sourceDirName":"commands-legacy","slug":"/commands/ob-values","permalink":"/docs/pt/commands/ob-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-values.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ob-values","title":"OB Values","slug":"/commands/ob-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET NULL","permalink":"/docs/pt/commands/ob-set-null"},"next":{"title":"Storage","permalink":"/docs/pt/commands/storage"}}'),o=s("785893"),t=s("250065");let d={id:"ob-values",title:"OB Values",slug:"/commands/ob-values",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OB Values"})," ( ",(0,o.jsx)(n.em,{children:"objeto"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Objeto a retornar valores de propriedade"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Cole\xe7\xe3o de valores propriedade (variante)"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"OB Values"})," retorna uma cole\xe7\xe3o de variantes contendo todas os valores de propriedade enumer\xe1veis de ",(0,o.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"A ordem de valores dentro da cole\xe7\xe3o retornada segue a ordem de defini\xe7\xe3o das propriedades"}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser uma cole\xe7\xe3o com todos os valores de propriedade de um objeto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $col : Collection\n\xa0\n\xa0$person:=New object\n\xa0$person.lastName:="Smith"\n\xa0$person.firstName:="Jenny"\n\xa0$person.children:=New object("Mary";12;"Mark";8)\n\xa0\n\xa0$col:=OB Values($person)\n\xa0\n\xa0\xa0//$col[0]="Smith"\n\xa0\xa0//$col[1]="Jenny"\n\xa0\xa0//$col[2]={"Mary":12,"Mark":8}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/ob-entries",children:"OB Entries"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/ob-keys",children:"OB Keys"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1718"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let o={},t=r.createContext(o);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);