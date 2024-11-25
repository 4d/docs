"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29125"],{992218:function(e,n,o){o.r(n),o.d(n,{metadata:()=>d,contentTitle:()=>t,default:()=>c,assets:()=>a,toc:()=>r,frontMatter:()=>s});var d=JSON.parse('{"id":"Concepts/null-undefined","title":"Null e indefinido","description":"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_null_undefined.md","sourceDirName":"Concepts","slug":"/Concepts/null-undefined","permalink":"/docs/pt/19/Concepts/null-undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"null-undefined","title":"Null e indefinido"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/pt/19/Concepts/date"},"next":{"title":"N\xfamero (Real, Longint, Integer)","permalink":"/docs/pt/19/Concepts/number"}}'),i=o("785893"),l=o("250065");let s={id:"null-undefined",title:"Null e indefinido"},t=void 0,a={},r=[{value:"Null",id:"null",level:2},{value:"Indefinido",id:"indefinido",level:2},{value:"Exemplos",id:"exemplos",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido."}),"\n",(0,i.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,i.jsxs)(n.p,{children:["Null \xe9 um tipo de dados especial com um \xfanico valor poss\xedvel: ",(0,i.jsx)(n.strong,{children:"null"}),". Este valor \xe9 devolvido por uma express\xe3o que n\xe3o cont\xe9m nenhum valor."]}),"\n",(0,i.jsxs)(n.p,{children:["Na linguagem 4D e para os atributos dos campos dos objetos, os valores nulos s\xe3o gerenciados atrav\xe9s da fun\xe7\xe3o ",(0,i.jsx)(n.code,{children:"Null"}),". Esta fun\xe7\xe3o pode ser usada com as express\xf5es abaixo para definir ou comparar o valor nulo:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"atributos de objetos"}),"\n",(0,i.jsx)(n.li,{children:"elementos da cole\xe7\xe3o"}),"\n",(0,i.jsx)(n.li,{children:"vari\xe1veis do objecto, colec\xe7\xe3o, ponteiro, imagem, ou tipo de variante."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"indefinido",children:"Indefinido"}),"\n",(0,i.jsxs)(n.p,{children:["Indefinido n\xe3o \xe9 realmente um tipo de dados. Denota uma vari\xe1vel que ainda n\xe3o foi definida. Uma fun\xe7\xe3o (um m\xe9todo projeto que devolve um resultado) pode devolver um valor indefinido se, dentro do m\xe9todo, se atribuir ao resultado da fun\xe7\xe3o ($0) uma express\xe3o indefinida (uma express\xe3o calculada com ao menos uma vari\xe1vel indefinida). Um campo n\xe3o pode ser indefinido (o comando ",(0,i.jsx)(n.code,{children:"Undefined"})," sempre devolve False para um campo). Uma vari\xe1vel variant tem ",(0,i.jsx)(n.strong,{children:"indefinido"})," como valor por defini\xe7\xe3o."]}),"\n",(0,i.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,i.jsxs)(n.p,{children:["Aqu\xed est\xe3o os diferentes resultados do comando ",(0,i.jsx)(n.code,{children:"Undefined"})," assim como do comando ",(0,i.jsx)(n.code,{children:"Null"})," com as propriedades dos objetos, dependendo do contexto:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // False\n$null:=($vEmp.name=Null) //False\n\n$undefined:=Undefined($vEmp.children) // False\n$null:=($vEmp.children=Null) //True\n\n$undefined:=Undefined($vEmp.parent) // True\n$null:=($vEmp.parent=Null) //True\n'})})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return s}});var d=o(667294);let i={},l=d.createContext(i);function s(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);