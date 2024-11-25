"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23892"],{195742:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/blob-to-list","title":"BLOB to list","description":"BLOB to list ( blob {; offset} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-list","permalink":"/docs/fr/commands/blob-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-list","title":"BLOB to list","slug":"/commands/blob-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to integer","permalink":"/docs/fr/commands/blob-to-integer"},"next":{"title":"BLOB to longint","permalink":"/docs/fr/commands/blob-to-longint"}}'),l=n("785893"),r=n("250065");let i={id:"blob-to-list",title:"BLOB to list",slug:"/commands/blob-to-list",displayed_sidebar:"docs"},o=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"BLOB to list"})," ( ",(0,l.jsx)(s.em,{children:"blob"})," {; ",(0,l.jsx)(s.em,{children:"offset"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tre"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"blob"}),(0,l.jsx)(s.td,{children:"Blob"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"BLOB contenant la liste hi\xe9rarchique"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"offset"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2194"}),(0,l.jsx)(s.td,{children:"Offset (en octets) dans le BLOB"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{}),(0,l.jsx)(s.td,{}),(0,l.jsx)(s.td,{}),(0,l.jsx)(s.td,{children:"Nouvel offset apr\xe8s la lecture"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"R\xe9sultat"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2190"}),(0,l.jsx)(s.td,{children:"R\xe9f\xe9rence de la liste nouvellement cr\xe9\xe9e"})]})]})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,l.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"BLOB to list"})," cr\xe9e une nouvelle liste hi\xe9rarchique avec les donn\xe9es stock\xe9es dans le BLOB ",(0,l.jsx)(s.em,{children:"blob"})," \xe0 l'offset d'octet (\xe0 partir de z\xe9ro) sp\xe9cifi\xe9 par ",(0,l.jsx)(s.em,{children:"offset"})," et retourne un num\xe9ro de r\xe9f\xe9rence de liste hi\xe9rarchique pour cette nouvelle liste."]}),"\n",(0,l.jsxs)(s.p,{children:["Les donn\xe9es pr\xe9sentes dans le BLOB doivent \xeatre compatibles avec la commande : g\xe9n\xe9ralement, vous utilisez des BLOBs pr\xe9alablement remplis avec la commande ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/list-to-blob",children:"LIST TO BLOB"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Si vous ne passez pas le param\xe8tre optionnel ",(0,l.jsx)(s.em,{children:"offset"}),", les valeurs de la liste sont lues \xe0 partir du d\xe9but du BLOB. Si vous g\xe9rez un BLOB dans lequel plusieurs variables ou listes ont \xe9t\xe9 stock\xe9es, vous devez passer le param\xe8tre ",(0,l.jsx)(s.em,{children:"offset"})," ainsi qu'une variable num\xe9rique. Avant l'appel, fixez cette variable num\xe9rique \xe0 l'offset d\xe9sir\xe9. Apr\xe8s l'appel, cette m\xeame variable num\xe9rique retourne l'offset de la variable suivante stock\xe9e dans le BLOB."]}),"\n",(0,l.jsx)(s.p,{children:"Apr\xe8s l'appel, la variable OK prend la valeur 1 si la liste hi\xe9rarchique a \xe9t\xe9 correctement cr\xe9\xe9e. Si l'op\xe9ration ne peut pas \xeatre effectu\xe9e \xe0 cause, par exemple, d'un manque de m\xe9moire, la variable OK prend la valeur 0."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note pour l'ind\xe9pendance de plate-forme :"})," ",(0,l.jsx)(s.strong,{children:"BLOB to list"})," et ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/list-to-blob",children:"LIST TO BLOB"})," utilisent un format interne 4D pour g\xe9rer les listes stock\xe9es dans des BLOBs. L'avantage est que vous n'avez pas besoin de vous soucier de la conversion des octets (\"byte swapping\") entre les plates-formes lorsque vous utilisez ces deux commandes. Autrement dit, avec ces commandes, un BLOB cr\xe9\xe9 sous Windows peut \xeatre r\xe9utilis\xe9 sous Mac OS et vice-versa."]}),"\n",(0,l.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(s.p,{children:"Dans l'exemple suivant, la m\xe9thode d'un formulaire entr\xe9e extrait une liste d'un champ BLOB avant que le formulaire ne s'affiche puis le stocke dans le champ BLOB lorsque la saisie est valid\xe9e :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode du formulaire [Choses \xe0 Faire];"Entr\xe9e"\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hListe:=BLOB to list([Choses \xe0 Faire]Id\xe9es)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0hListe:=New list\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hListe;*)\n\xa0\n\xa0\xa0\xa0\xa0:(bValider=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LIST TO BLOB(hListe;[Choses \xe0 Faire]Id\xe9es)\n\xa0\n\xa0End case\n'})}),"\n",(0,l.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(s.p,{children:"La variable OK prend la valeur 1 si la liste a \xe9t\xe9 correctement cr\xe9\xe9e, sinon elle prend la valeur 0."}),"\n",(0,l.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/docs/fr/commands/list-to-blob",children:"LIST TO BLOB"})})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var t=n(667294);let l={},r=t.createContext(l);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);