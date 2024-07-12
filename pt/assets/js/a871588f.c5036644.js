/*! For license information please see a871588f.c5036644.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1417],{674268:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var d=o(474848),i=o(28453);const l={id:"null-undefined",title:"Null e indefinido"},s=void 0,t={id:"Concepts/null-undefined",title:"Null e indefinido",description:"Null",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/pt/18/Concepts/null-undefined",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"null-undefined",title:"Null e indefinido"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/pt/18/Concepts/date"},next:{title:"N\xfamero (Real, Longint, Integer)",permalink:"/docs/pt/18/Concepts/number"}},r={},a=[{value:"Null",id:"null",level:2},{value:"Indefinido",id:"indefinido",level:2},{value:"Exemplos",id:"exemplos",level:2}];function u(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,d.jsxs)(n.p,{children:["Null \xe9 um tipo de dados especial com um \xfanico valor poss\xedvel: ",(0,d.jsx)(n.strong,{children:"null"}),". Este valor \xe9 devolvido por uma express\xe3o que n\xe3o cont\xe9m nenhum valor."]}),"\n",(0,d.jsxs)(n.p,{children:["Na linguagem 4D e para os atributos dos campos dos objetos, os valores nulos s\xe3o gerenciados atrav\xe9s da fun\xe7\xe3o ",(0,d.jsx)(n.code,{children:"Null"}),". Esta fun\xe7\xe3o pode ser usada com as express\xf5es abaixo para definir ou comparar o valor nulo:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"atributos de objetos"}),"\n",(0,d.jsx)(n.li,{children:"elementos da cole\xe7\xe3o"}),"\n",(0,d.jsx)(n.li,{children:"vari\xe1veis do objecto, colec\xe7\xe3o, ponteiro, imagem, ou tipo de variante."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"indefinido",children:"Indefinido"}),"\n",(0,d.jsxs)(n.p,{children:["Indefinido n\xe3o \xe9 realmente um tipo de dados. Denota uma vari\xe1vel que ainda n\xe3o foi definida. Uma fun\xe7\xe3o (um m\xe9todo projeto que devolve um resultado) pode devolver um valor indefinido se, dentro do m\xe9todo, se atribuir ao resultado da fun\xe7\xe3o ($0) uma express\xe3o indefinida (uma express\xe3o calculada com ao menos uma vari\xe1vel indefinida). Um campo n\xe3o pode ser indefinido (o comando ",(0,d.jsx)(n.code,{children:"Undefined"})," sempre devolve False para um campo). Uma vari\xe1vel variant tem ",(0,d.jsx)(n.strong,{children:"indefinido"})," como valor por defini\xe7\xe3o."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,d.jsxs)(n.p,{children:["Aqu\xed est\xe3o os diferentes resultados do comando ",(0,d.jsx)(n.code,{children:"Undefined"})," assim como do comando ",(0,d.jsx)(n.code,{children:"Null"})," com as propriedades dos objetos, dependendo do contexto:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // False\n$null:=($vEmp.name=Null) //False\n\n$undefined:=Undefined($vEmp.children) // False\n$null:=($vEmp.children=Null) //True\n\n$undefined:=Undefined($vEmp.parent) // True\n$null:=($vEmp.parent=Null) //True\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},221020:(e,n,o)=>{var d=o(296540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var d,l={},a=null,u=null;for(d in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,d)&&!r.hasOwnProperty(d)&&(l[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===l[d]&&(l[d]=n[d]);return{$$typeof:i,type:e,key:a,ref:u,props:l,_owner:t.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>t});var d=o(296540);const i={},l=d.createContext(i);function s(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);