"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93280],{253777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var l=t(474848),i=t(28453);const s={id:"null-undefined",title:"Null et Undefined"},d=void 0,u={id:"Concepts/null-undefined",title:"Null et Undefined",description:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/fr/19/Concepts/null-undefined",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"null-undefined",title:"Null et Undefined"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/fr/19/Concepts/date"},next:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/19/Concepts/number"}},r={},o=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Exemples",id:"exemples",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Null et Undefined sont des types de donn\xe9es qui g\xe8rent les cas o\xf9 la valeur d'une expression n'est pas connue."}),"\n",(0,l.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,l.jsxs)(n.p,{children:["Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,l.jsx)(n.strong,{children:"null"}),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la commande ",(0,l.jsx)(n.code,{children:"Null"}),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"attributs d'objets"}),"\n",(0,l.jsx)(n.li,{children:"\xe9l\xe9ments de collections"}),"\n",(0,l.jsx)(n.li,{children:"variables de type objet, collection, pointeur, image ou variant."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,l.jsxs)(n.p,{children:["Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Il indique une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Une fonction utilisateur (c'est-\xe0-dire une m\xe9thode projet qui retourne une valeur) peut retourner une valeur ind\xe9finie si, \xe0 l'int\xe9rieur de la m\xe9thode, le r\xe9sultat de la fonction ($0) est assign\xe9 \xe0 une expression ind\xe9finie (une expression issue d'un calcul effectu\xe9 avec au moins une variable ind\xe9finie). Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,l.jsx)(n.code,{children:"Indefinie"})," retourne toujours Faux pour un champ). Une variable variant porte la valeur par d\xe9faut ",(0,l.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,l.jsx)(n.code,{children:"Undefined"})," et de la commande ",(0,l.jsx)(n.code,{children:"Null"})," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // Faux\n$null:=($vEmp.name=Null) //Faux\n\n$undefined:=Undefined($vEmp.children) // Faux\n$null:=($vEmp.children=Null) //Vrai\n\n$undefined:=Undefined($vEmp.parent) // Vrai\n$null:=($vEmp.parent=Null) //Vrai\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>u});var l=t(296540);const i={},s=l.createContext(i);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);