"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["875"],{129612:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/form-get-entry-order","title":"FORM GET ENTRY ORDER","description":"FORM GET ENTRY ORDER ( nomsObjets {; numPage | *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-get-entry-order.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-entry-order","permalink":"/docs/fr/commands/form-get-entry-order","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-entry-order.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-get-entry-order","title":"FORM GET ENTRY ORDER","slug":"/commands/form-get-entry-order","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Get current page","permalink":"/docs/fr/commands/form-get-current-page"},"next":{"title":"FORM GET HORIZONTAL RESIZING","permalink":"/docs/fr/commands/form-get-horizontal-resizing"}}'),t=n("785893"),d=n("250065");let o={id:"form-get-entry-order",title:"FORM GET ENTRY ORDER",slug:"/commands/form-get-entry-order",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"FORM GET ENTRY ORDER"})," ( ",(0,t.jsx)(r.em,{children:"nomsObjets"})," {; numPage | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nomsObjets"}),(0,t.jsx)(r.td,{children:"Text array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Noms des objets tri\xe9s par ordre de saisie"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"numPage | *"}),(0,t.jsx)(r.td,{children:"Entier long, Op\xe9rateur"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de la page dont vous voulez lire l'ordre de saisie d\xe9fini (page courante si omis), ou * pour obtenir l'ordre de saisie actuel de la page courante"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"FORM GET ENTRY ORDER"})," retourne dans ",(0,t.jsx)(r.em,{children:"nomsObjets"})," les noms des objets dans l'ordre de saisie du formulaire courant."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(r.em,{children:"*"}),", ",(0,t.jsx)(r.strong,{children:"FORM GET ENTRY ORDER"})," retourne l'ordre de saisie tel qu'il a \xe9t\xe9 pr\xe9c\xe9demment d\xe9clar\xe9 avec la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"}),". Avec cette syntaxe, vous pouvez omettre ou passer le param\xe8tre ",(0,t.jsx)(r.em,{children:"numPage"})," :\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["si vous omettez le param\xe8tre ",(0,t.jsx)(r.em,{children:"numPage"}),", le tableau ",(0,t.jsx)(r.em,{children:"nomsObjets"})," retourne l'ordre de saisie des objets de la page courante."]}),"\n",(0,t.jsxs)(r.li,{children:["si vous passez le param\xe8tre ",(0,t.jsx)(r.em,{children:"numPage"}),", le tableau ",(0,t.jsx)(r.em,{children:"nomsObjets"})," retourne l'ordre de saisie des objets de la page dont le num\xe9ro est ",(0,t.jsx)(r.em,{children:"numPage"}),".",(0,t.jsx)(r.br,{}),"\nDans les deux cas, si la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"})," n'a pas \xe9t\xe9 pr\xe9c\xe9demment appel\xe9e pour le formulaire courant, le tableau ",(0,t.jsx)(r.em,{children:"nomsObjets"})," est retourn\xe9 vide."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Si vous passez le param\xe8tre ",(0,t.jsx)(r.em,{children:"*"}),", ",(0,t.jsx)(r.strong,{children:"FORM GET ENTRY ORDER"})," retourne l'ordre de saisie actuel de la page courante, c'est-\xe0-dire que le tableau ",(0,t.jsx)(r.em,{children:"nomsObjets"})," contient seulement les noms d'objets ",(0,t.jsx)(r.strong,{children:"valides"})," (pour plus d'informations sur les objets valides, veuillez vous r\xe9f\xe9rer \xe0 la description de la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"}),"). L'ordre de saisie actuel du formulaire peut \xeatre :\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"l'ordre de saisie par d\xe9faut du formulaire, bas\xe9 sur le plan des objets,"}),"\n",(0,t.jsxs)(r.li,{children:["ou l'ordre de saisie de l'\xe9diteur de formulaire (voir ",(0,t.jsx)(r.em,{children:"Modifier l'ordre de saisie"}),"), s'il a \xe9t\xe9 d\xe9fini,"]}),"\n",(0,t.jsxs)(r.li,{children:["ou l'ordre de saisie fix\xe9 par un appel \xe0 la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"})," dans le process courant, si elle a \xe9t\xe9 appel\xe9e.",(0,t.jsx)(r.br,{}),"\nL'ordre de saisie actuel inclut toujours les objets de la page 0 et des formulaires h\xe9rit\xe9s."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note :"})," L'ordre de saisie dans un sous-formulaire n'est pas retourn\xe9 lorsque la commande s'applique au formulaire parent."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.p,{children:"Vous voulez exclure certains objets de l'ordre de saisie :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTabOrderObject;0)\n\xa0var $vElem : Integer\n\xa0FORM GET ENTRY ORDER($arrTabOrderObject;*)\xa0\xa0//on lit l\'ordre de saisie actuel\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vElem:=Find in array($arrTabOrderObject;"Tot@")\n\xa0\xa0\xa0\xa0If($vElem>0)\xa0\xa0// On exclut de l\'ordre de saisie les objets dont le nom commence par "Tot"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($arrTabOrderObject;$vElem)\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vElem<0)\n\xa0FORM SET ENTRY ORDER($arrTabOrderObject)\xa0\xa0// On applique le nouvel ordre de saisie\n'})}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"})}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"1469"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var s=n(667294);let t={},d=s.createContext(t);function o(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);