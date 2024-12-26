"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["265"],{173899:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>t,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/insert-in-array","title":"INSERT IN ARRAY","description":"INSERT IN ARRAY ( array ; onde {; quantos} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-in-array.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-array","permalink":"/docs/pt/commands/insert-in-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-in-array","title":"INSERT IN ARRAY","slug":"/commands/insert-in-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in sorted array","permalink":"/docs/pt/commands/find-in-sorted-array"},"next":{"title":"LIST TO ARRAY","permalink":"/docs/pt/commands/list-to-array"}}'),o=r("785893"),d=r("250065");let a={id:"insert-in-array",title:"INSERT IN ARRAY",slug:"/commands/insert-in-array",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"INSERT IN ARRAY"})," ( ",(0,o.jsx)(n.em,{children:"array"})," ; ",(0,o.jsx)(n.em,{children:"onde"})," {; ",(0,o.jsx)(n.em,{children:"quantos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"array"}),(0,o.jsx)(n.td,{children:"Array"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome do array"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"onde"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Onde inserir os elementos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"quantos"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de elementos a serem inseridos, ou 1 elemento se omitido"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando INSERT IN ARRAY insere um ou mais elementos no ",(0,o.jsx)(n.em,{children:"array"}),". Os novos elementos s\xe3o inseridos antes do elemento especificado por ",(0,o.jsx)(n.em,{children:"onde"}),", e s\xe3o inicializados no valor vacio do tipo de array. Todos os elementos al\xe9m de ",(0,o.jsx)(n.em,{children:"onde"})," s\xe3o movidos consequentemente no array por um valor de um ou pelo valor especificado em ",(0,o.jsx)(n.em,{children:"quantos"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se ",(0,o.jsx)(n.em,{children:"onde"})," \xe9 maior que o tamanho do array, os elementos s\xe3o adicionados ao final do array."]}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.em,{children:"quantos"})," \xe9 o n\xfamero de elementos a ser inserido. Se n\xe3o for especificado ",(0,o.jsx)(n.em,{children:"quantos"}),", ent\xe3o apenas um elemento \xe9 inserido. O tamanho do array aumenta em ",(0,o.jsx)(n.em,{children:"quantos"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"O exemplo a seguir insere cinco novos elementos, come\xe7ando no elemento 10:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0INSERT IN ARRAY(anArray;10;5)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"O exemplo a seguir adiciona um elemento a um array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0$vlElem:=Size of array(anArray)+1\n\xa0INSERT IN ARRAY(anArray;$vlElem)\n\xa0anArray{$vlElem}:=...\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/size-of-array",children:"Size of array"})]}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"227"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let o={},d=s.createContext(o);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);