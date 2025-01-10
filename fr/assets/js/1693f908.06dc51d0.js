"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35787"],{445275:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/object-get-corner-radius","title":"OBJECT Get corner radius","description":"OBJECT Get corner radius ( { ;} objet* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-corner-radius.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-corner-radius","permalink":"/docs/fr/commands/object-get-corner-radius","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-corner-radius.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-corner-radius","title":"OBJECT Get corner radius","slug":"/commands/object-get-corner-radius","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET COORDINATES","permalink":"/docs/fr/commands/object-get-coordinates"},"next":{"title":"OBJECT Get data source","permalink":"/docs/fr/commands/object-get-data-source"}}'),t=r("785893"),i=r("250065");let d={id:"object-get-corner-radius",title:"OBJECT Get corner radius",slug:"/commands/object-get-corner-radius",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT Get corner radius"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est un champ ou une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Champ ou variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Rayon des angles arrondis (en pixels)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT Get corner radius"})," retourne la valeur courante du rayon d'angles pour l'objet d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"}),". Cette valeur peut avoir \xe9t\xe9 d\xe9finie au niveau du formulaire en utilisant la propri\xe9t\xe9 (cf. ",(0,t.jsx)(n.em,{children:"Rayon d'arrondi (rectangles)"}),"), ou via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-corner-radius",children:"OBJECT SET CORNER RADIUS"})," pour le process courant."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT Get corner radius"})," peut \xeatre utilis\xe9e avec les objets formulaires suivants :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rectangles"}),"\n",(0,t.jsx)(n.li,{children:"zone de saisie (projets 4D uniquement)"}),"\n",(0,t.jsx)(n.li,{children:"zones de texte (projets 4D uniquement)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande renvoie le rayon des angles arrondis en pixels."}),"\n",(0,t.jsx)(n.p,{children:"Remarque : La commande renvoie 0 lorsqu'elle est appliqu\xe9e \xe0 un objet qui ne prend pas en charge la propri\xe9t\xe9 de rayon arrondis."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant peut \xeatre associ\xe9 \xe0 la m\xe9thode d'un bouton :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $radius : Integer\n\xa0$radius:=OBJECT Get corner radius(*;"GreenRect")\xa0//lire la valeur courante\n\xa0OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1)\xa0//augmenter le rayon\n\xa0\xa0// La valeur maximale est g\xe9r\xe9e automatiquement : lorsqu\'elle est atteinte,\n\xa0\xa0// le bouton n\'a plus d\'effet\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-corner-radius",children:"OBJECT SET CORNER RADIUS"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1324"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);