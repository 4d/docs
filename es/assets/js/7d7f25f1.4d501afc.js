"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16556"],{486460:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/count-in-array","title":"Count in array","description":"Count in array ( array ; valor ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/count-in-array.md","sourceDirName":"commands-legacy","slug":"/commands/count-in-array","permalink":"/docs/es/commands/count-in-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-in-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"count-in-array","title":"Count in array","slug":"/commands/count-in-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY ARRAY","permalink":"/docs/es/commands/copy-array"},"next":{"title":"DELETE FROM ARRAY","permalink":"/docs/es/commands/delete-from-array"}}'),t=r("785893"),a=r("250065");let o={id:"count-in-array",title:"Count in array",slug:"/commands/count-in-array",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Count in array"})," ( ",(0,t.jsx)(n.em,{children:"array"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Array donde efectuar el conteo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor a contar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de ocurrencias encontradas"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando Count in array devuelve el n\xfamero de ocurrencias de ",(0,t.jsx)(n.em,{children:"valor"})," en el ",(0,t.jsx)(n.em,{children:"array"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Este comando puede utilizarse con los siguientes tipos de array: Texto, Num\xe9rico, Fecha, Puntero y Booleano. Los par\xe1metros ",(0,t.jsx)(n.em,{children:"a"})," ",(0,t.jsx)(n.em,{children:"rray"})," y ",(0,t.jsx)(n.em,{children:"valor"})," deben ser del mismo tipo o de un tipo compatible."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," con arrays Objeto, s\xf3lo puede utilizar referencias a objetos en el par\xe1metro ",(0,t.jsx)(n.em,{children:"valor"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ning\xfan elemento del ",(0,t.jsx)(n.em,{children:"array"})," corresponde al ",(0,t.jsx)(n.em,{children:"valor"}),", el comando devuelve 0."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo permite visualizar el n\xfamero de l\xedneas seleccionadas en un list box:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//tBList es el nombre de un array de una columna de un List box\n\xa0ALERT(String(Count in array(tBList;True))+" l\xednea(s) seleccionada(s) en el list box")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Desea contar las referencias a objetos en un array objeto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($objects;100)\n\xa0$o1:={a10;b"xyz"}\n\xa0$o2:={a10;b"xyz"}\n\xa0\n\xa0$objects{20}:=$o1\n\xa0$objects{21}:=$o1\n\xa0$objects{22}:=$o1\n\xa0\n\xa0var $n : Integer\n\xa0\n\xa0$n:=Count in array($objects;$o1)\xa0// n = 3\xa0\n\xa0$n:=Count in array($objects;$o2)\xa0// n = 0\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/find-in-array",children:"Find in array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/find-in-sorted-array",children:"Find in sorted array"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"907"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let t={},a=s.createContext(t);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);