"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50316"],{973418:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-query-destination","title":"GET QUERY DESTINATION","description":"GET QUERY DESTINATION ( destinationType ; destinationObjet ; destinationPtr )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/get-query-destination","permalink":"/docs/fr/20-R7/commands/get-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-query-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-query-destination","title":"GET QUERY DESTINATION","slug":"/commands/get-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in field","permalink":"/docs/fr/20-R7/commands/find-in-field"},"next":{"title":"Get query limit","permalink":"/docs/fr/20-R7/commands/get-query-limit"}}'),r=t("785893"),i=t("250065");let d={id:"get-query-destination",title:"GET QUERY DESTINATION",slug:"/commands/get-query-destination",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," ( ",(0,r.jsx)(n.em,{children:"destinationType"})," ; ",(0,r.jsx)(n.em,{children:"destinationObjet"})," ; ",(0,r.jsx)(n.em,{children:"destinationPtr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destinationType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"0 = s\xe9lection courante, 1 = ensemble, 2 = s\xe9lection temporaire, 3 = variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destinationObjet"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom de l'ensemble ou Nom de la s\xe9lection temporaire ou Cha\xeene vide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destinationPtr"}),(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Pointeur vers variable locale si destinationType = 3"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GET QUERY DESTINATION"})," retourne la destination courante des r\xe9sultats des recherches pour le process en cours. Par d\xe9faut, les r\xe9sultats des recherches modifient la s\xe9lection courante, mais vous pouvez modifier ce fonctionnement l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-query-destination",children:"SET QUERY DESTINATION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["4D retourne dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"destinationType"})," une valeur indiquant la destination courante des recherches et dans ",(0,r.jsx)(n.em,{children:"destinationObjet"})," le nom de la destination (le cas \xe9ch\xe9ant). Vous pouvez comparer la valeur du param\xe8tre ",(0,r.jsx)(n.em,{children:"destinationType"})," aux constantes du th\xe8me ",(0,r.jsx)(n.em,{children:"Recherches"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into current selection"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into named selection"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into set"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into variable"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La valeur retourn\xe9e dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"destinationObjet"})," d\xe9pend de la valeur du param\xe8tre ",(0,r.jsx)(n.em,{children:"destinationType"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Param\xe8tre destinationType"})}),(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.strong,{children:"Param\xe8tre"})," ",(0,r.jsx)(n.strong,{children:"destinationObjet"})]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0 (s\xe9lection courante)"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"destinationObjet"})," est une cha\xeene vide"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1 (ensemble)"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"destinationObjet"})," contient le nom de l\u2019ensemble"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2 (s\xe9lection temporaire)"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"destinationObjet"})," contient le nom de la s\xe9lection temporaire"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3 (variable)"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"destinationObjet"})," est une cha\xeene vide (utiliser le param\xe8tre ",(0,r.jsx)(n.em,{children:"destinationPtr"}),")"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque la destination des recherches est une variable (",(0,r.jsx)(n.em,{children:"destinationType"})," retourne 3), 4D retourne dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"destinationPtr"})," un pointeur vers cette variable."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Nous souhaitons modifier temporairement la destination de recherche, et r\xe9tablir ensuite les param\xe8tres pr\xe9c\xe9dents :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GET QUERY DESTINATION($vType;$vNom;$ptr)\n\xa0\xa0//r\xe9cup\xe9ration des param\xe8tres courants\n\xa0SET QUERY DESTINATION(Into set;"$tempo")\n\xa0\xa0//modification temporaire de la destination\n\xa0QUERY(...)\xa0//recherche\n\xa0SET QUERY DESTINATION($vType;$vNom;$ptr)\n\xa0\xa0//r\xe9tablissement des param\xe8tres\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-query-destination",children:"SET QUERY DESTINATION"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1155"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);