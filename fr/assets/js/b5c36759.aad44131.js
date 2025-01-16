"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80966"],{174928:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/undefined","title":"Undefined","description":"Undefined ( expression ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/undefined.md","sourceDirName":"commands-legacy","slug":"/commands/undefined","permalink":"/docs/fr/20-R7/commands/undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fundefined.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"undefined","title":"Undefined","slug":"/commands/undefined","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Type","permalink":"/docs/fr/20-R7/commands/type"},"next":{"title":"Value type","permalink":"/docs/fr/20-R7/commands/value-type"}}'),r=s("785893"),d=s("250065");let t={id:"undefined",title:"Undefined",slug:"/commands/undefined",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Undefined"})," ( ",(0,r.jsx)(n.em,{children:"expression"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expression"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Expression \xe0 tester"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vrai = Variable actuellement ind\xe9finie Faux = Variable actuellement d\xe9finie"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Undefined"})," retourne Vrai si le r\xe9sultat de l'\xe9valuation d'",(0,r.jsx)(n.em,{children:"expression"})," n'est pas une valeur d\xe9finie, sinon elle retourne Faux si ",(0,r.jsx)(n.em,{children:"expression"})," a \xe9t\xe9 d\xe9finie.retourne Faux pour toutes les variables."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Une propri\xe9t\xe9 d'objet est ind\xe9finie si elle n'existe pas dans l'objet."}),"\n",(0,r.jsxs)(n.li,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Undefined"})," retourne toujours Faux pour les champs."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," A noter que ",(0,r.jsx)(n.strong,{children:"Undefined"})," \xe9value expression. Les instructions suivantes sont \xe9quivalentes :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$result:=Undefined($exp)\n\xa0\xa0// r\xe9sultat identique :\n\xa0$result:=(Value type($exp)=Est une variable ind\xe9finie)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Dans certains cas, il est possible que vous ne souhaitiez pas \xe9valuer le param\xe8tre (par exemple, lorsque vous utilisez un pointeur vers une variable pour v\xe9ifier si la variable est d\xe9finie). Vous devez alors \xe9crire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$result:=(Type($ptr->)=Est une variable ind\xe9finie)\xa0//vrai si la variable point\xe9e n'existe pas (pas d'erreur)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/undefined",children:"Undefined"})," et de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/null",children:"Null"})," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vEmp : Object\n\xa0vEmp:=New object\n\xa0vEmp.name:="Smith"\n\xa0vEmp.children:=Null\n\xa0\n\xa0$undefined:=Undefined(vEmp.name)\xa0// Faux\n\xa0$null:=(vEmp.name=Null)\xa0// Faux\n\xa0\n\xa0$undefined:=Undefined(vEmp.children)\xa0// Faux\n\xa0$null:=(vEmp.children=Null)\xa0// Vrai\n\xa0\n\xa0$undefined:=Undefined(vEmp.parent)\xa0// Vrai\n\xa0$null:=(vEmp.parent=Null)\xa0// Vrai\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/clear-variable",children:"CLEAR VARIABLE"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"82"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(667294);let r={},d=i.createContext(r);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);