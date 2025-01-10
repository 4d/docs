"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1812"],{188033:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/old","title":"Old","description":"Old ( leChamp ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/old.md","sourceDirName":"commands-legacy","slug":"/commands/old","permalink":"/docs/fr/commands/old","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fold.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"old","title":"Old","slug":"/commands/old","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MODIFY RECORD","permalink":"/docs/fr/commands/modify-record"},"next":{"title":"REJECT","permalink":"/docs/fr/commands/reject"}}'),s=r("785893"),d=r("250065");let i={id:"old",title:"Old",slug:"/commands/old",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Old"})," ( ",(0,s.jsx)(n.em,{children:"leChamp"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"leField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Champ dont vous voulez obtenir l'ancienne valeur"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur originale de champ"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Old"})," retourne la valeur qui \xe9tait stock\xe9e dans ",(0,s.jsx)(n.em,{children:"leChamp"})," avant qu'il n'ait \xe9t\xe9 modifi\xe9 par programmation ou pendant la saisie de donn\xe9es."]}),"\n",(0,s.jsx)(n.p,{children:"A chaque fois que vous changez d'enregistrement courant pour une table, 4D cr\xe9e et maintient en m\xe9moire un double de l'\"image\" du nouvel enregistrement courant au moment o\xf9 il est charg\xe9. Lorsque vous modifiez un enregistrement, vous travaillez avec l'image r\xe9elle de l'enregistrement, et non son double. Ce double est effac\xe9 lorsque que vous changez \xe0 nouveau d'enregistrement courant."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Old"})," retourne la valeur de ",(0,s.jsx)(n.em,{children:"leChamp"})," telle qu'elle est stock\xe9e dans le double de l'enregistrement. Autrement dit, pour un enregistrement existant, ",(0,s.jsx)(n.strong,{children:"Old"}),"  retourne la valeur du champ telle qu'elle avait \xe9t\xe9 sauvegard\xe9e sur disque. Pour un enregistrement qui vient d'\xeatre cr\xe9\xe9, ",(0,s.jsx)(n.strong,{children:"Old"})," retourne la valeur vide par d\xe9faut correspondant au type de ",(0,s.jsx)(n.em,{children:"leChamp"}),". Par exemple, si ",(0,s.jsx)(n.em,{children:"leChamp"})," est de type Alpha, ",(0,s.jsx)(n.strong,{children:"Old"})," retourne une cha\xeene vide. Si champ est de type num\xe9rique, ",(0,s.jsx)(n.strong,{children:"Old"})," retourne z\xe9ro (0), etc."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Old"})," fonctionne avec ",(0,s.jsx)(n.em,{children:"leChamp"})," de la m\xeame mani\xe8re, que le champ ait \xe9t\xe9 modifi\xe9 par programmation ou suite \xe0 des modifications effectu\xe9es par un utilisateur."]}),"\n",(0,s.jsx)(n.p,{children:"La fonction accepte tous les types de champs."}),"\n",(0,s.jsxs)(n.p,{children:["Pour restaurer la valeur originale d'un champ, assignez-lui la valeur retourn\xe9e par ",(0,s.jsx)(n.strong,{children:"Old"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Pour des raisons techniques, dans le cas des champs de type Image et BLOB, l\u2019expression retourn\xe9e par ",(0,s.jsx)(n.strong,{children:"Old"})," ne peut pas \xeatre directement utilis\xe9e comme param\xe8tre d\u2019une autre commande. Il est n\xe9cessaire de faire transiter la valeur par une variable interm\xe9diaire. Par exemple :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Ne PAS \xe9crire (provoque une erreur de syntaxe) :\n\xa0$taille :=BLOB size(Old([LaTable]LeBlob))\xa0//INCORRECT\n\xa0\n\xa0\xa0//Ecrire :\n\xa0$ancienBlob :=Old([LaTable]LeBlob)\n\xa0$taille :=BLOB size($ancienBlob)\xa0//CORRECT\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/modified",children:"Modified"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"35"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);