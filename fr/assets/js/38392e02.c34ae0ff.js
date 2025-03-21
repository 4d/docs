"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72535"],{257289:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/listbox-move-column","title":"LISTBOX MOVE COLUMN","description":"LISTBOX MOVE COLUMN ( { ;} objet ; positionCol* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-move-column","permalink":"/docs/fr/commands/listbox-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-move-column.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-move-column","title":"LISTBOX MOVE COLUMN","slug":"/commands/listbox-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT ROWS","permalink":"/docs/fr/commands/listbox-insert-rows"},"next":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/fr/commands/listbox-moved-column-number"}}'),o=s("785893"),i=s("250065");let r={id:"listbox-move-column",title:"LISTBOX MOVE COLUMN",slug:"/commands/listbox-move-column",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX MOVE COLUMN"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objet"})," ; ",(0,o.jsx)(n.em,{children:"positionCol"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Op\xe9rateur"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objet"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis) de la colonne \xe0 d\xe9placer"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"positionCol"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nouvel emplacement de la colonne"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.strong,{children:"LISTBOX MOVE COLUMN"})," permet de d\xe9placer par programmation la colonne d\xe9sign\xe9e par le(s) param\xe8tre(s) ",(0,o.jsx)(n.em,{children:"objet"})," et ",(0,o.jsx)(n.em,{children:"*"})," dans le contexte du formulaire en cours d\u2019ex\xe9cution (mode Application). Le formulaire d\u2019origine, g\xe9n\xe9r\xe9 en mode D\xe9veloppement, n\u2019est pas modifi\xe9."]}),"\n",(0,o.jsxs)(n.p,{children:["Les param\xe8tres ",(0,o.jsx)(n.em,{children:"objet"})," et ",(0,o.jsx)(n.em,{children:"*"})," d\xe9signent la colonne \xe0 d\xe9placer. Si vous passez le param\xe8tre optionnel ",(0,o.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est un nom de colonne (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,o.jsx)(n.em,{children:"objet"})," est une variable de colonne. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,o.jsxs)(n.p,{children:["La colonne est d\xe9plac\xe9e juste avant la colonne d\xe9sign\xe9e par le param\xe8tre ",(0,o.jsx)(n.em,{children:"positionCol"}),". Si le param\xe8tre ",(0,o.jsx)(n.em,{children:"positionCol"})," est sup\xe9rieur au nombre total de colonnes, la colonne est d\xe9plac\xe9e apr\xe8s la derni\xe8re colonne."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," Cette commande ne fait rien si elle est appliqu\xe9e \xe0 la premi\xe8re colonne d\u2019une list box affich\xe9e en mode hi\xe9rarchique."]}),"\n",(0,o.jsx)(n.p,{children:"La commande tient compte des propri\xe9t\xe9s de colonnes statiques et verrouill\xe9es : si vous tentez par exemple de d\xe9placer une colonne statique, la commande ne fait rien."}),"\n",(0,o.jsx)(n.p,{children:"Cette fonctionnalit\xe9 est pr\xe9sente dans 4D en mode Application : l\u2019utilisateur peut d\xe9placer des colonnes non statiques \xe0 l\u2019aide de la souris. En revanche, \xe0 la diff\xe9rence du d\xe9placement effectu\xe9 par l\u2019utilisateur, la commande ne g\xe9n\xe8re pas l\u2019\xe9v\xe9nement On Column Moved."}),"\n",(0,o.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.p,{children:"Vous souhaitez intervertir les 2e et 3e colonnes de la list box :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX MOVE COLUMN(*;"colonne2";3)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/fr/commands/listbox-duplicate-column",children:"LISTBOX DUPLICATE COLUMN"})}),"\n",(0,o.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"1274"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let o={},i=t.createContext(o);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);