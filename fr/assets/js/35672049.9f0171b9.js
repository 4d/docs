"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42587"],{379559:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>l,assets:()=>s,toc:()=>o,contentTitle:()=>d});var l=JSON.parse('{"id":"Concepts/null-undefined","title":"Null et Undefined","description":"Null","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/dt_null_undefined.md","sourceDirName":"Concepts","slug":"/Concepts/null-undefined","permalink":"/docs/fr/18/Concepts/null-undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"null-undefined","title":"Null et Undefined"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/fr/18/Concepts/date"},"next":{"title":"Num\xe9rique (R\xe9el, Entier, Entier long)","permalink":"/docs/fr/18/Concepts/number"}}'),i=t("785893"),u=t("250065");let r={id:"null-undefined",title:"Null et Undefined"},d=void 0,s={},o=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Exemples",id:"exemples",level:2}];function a(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,u.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,i.jsxs)(n.p,{children:["Null est un type de donn\xe9es particulier avec une seule valeur possible : ",(0,i.jsx)(n.strong,{children:"null"}),". Cette valeur est retourn\xe9e par une expression qui ne contient aucune valeur."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont g\xe9r\xe9es via la commande ",(0,i.jsx)(n.code,{children:"Null"}),". Cette commande peut \xeatre utilis\xe9e avec les expressions suivantes pour fixer ou comparer la valeur null :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"attributs d'objets"}),"\n",(0,i.jsx)(n.li,{children:"\xe9l\xe9ments de collections"}),"\n",(0,i.jsx)(n.li,{children:"variables de type objet, collection, pointeur, image ou variant."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,i.jsxs)(n.p,{children:["Undefined (Ind\xe9finie) n'est pas v\xe9ritablement un type de donn\xe9es. Il indique une variable n'ayant pas encore \xe9t\xe9 d\xe9finie. Une fonction utilisateur (c'est-\xe0-dire une m\xe9thode projet qui retourne une valeur) peut retourner une valeur ind\xe9finie si, \xe0 l'int\xe9rieur de la m\xe9thode, le r\xe9sultat de la fonction ($0) est assign\xe9 \xe0 une expression ind\xe9finie (une expression issue d'un calcul effectu\xe9 avec au moins une variable ind\xe9finie). Un champ ne peut pas \xeatre ind\xe9fini (la commande ",(0,i.jsx)(n.code,{children:"Indefinie"})," retourne toujours Faux pour un champ). Une variable variant porte la valeur par d\xe9faut ",(0,i.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsxs)(n.p,{children:["Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,i.jsx)(n.code,{children:"Undefined"})," et de la commande ",(0,i.jsx)(n.code,{children:"Null"})," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n\n$undefined:=Undefined($vEmp.name) // Faux\n$null:=($vEmp.name=Null) //Faux\n\n$undefined:=Undefined($vEmp.children) // Faux\n$null:=($vEmp.children=Null) //Vrai\n\n$undefined:=Undefined($vEmp.parent) // Vrai\n$null:=($vEmp.parent=Null) //Vrai\n'})})]})}function c(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var l=t(667294);let i={},u=l.createContext(i);function r(e){let n=l.useContext(u);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(u.Provider,{value:n},e.children)}}}]);