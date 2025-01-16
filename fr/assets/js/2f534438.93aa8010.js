"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83099"],{818530:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/cache-info","title":"Cache info","description":"Cache info {( dbFilter )} : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/cache-info.md","sourceDirName":"commands-legacy","slug":"/commands/cache-info","permalink":"/docs/fr/commands/cache-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcache-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"cache-info","title":"Cache info","slug":"/commands/cache-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADJUST TABLE CACHE PRIORITY","permalink":"/docs/fr/commands/adjust-table-cache-priority"},"next":{"title":"FLUSH CACHE","permalink":"/docs/fr/commands/flush-cache"}}'),r=t("785893"),i=t("250065");let c={id:"cache-info",title:"Cache info",slug:"/commands/cache-info",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cache info"})," {( ",(0,r.jsx)(n.em,{children:"dbFilter"})," )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dbFilter"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"d\xe9finit la liste des attributs \xe0 retourner (filtr\xe9s par DB)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Informations \xe0 propos du cache"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Cache info"})," retourne un objet contenant des informations d\xe9taill\xe9es sur le contenu actuel du cache (m\xe9moire utilis\xe9e, tables et index charg\xe9s, etc.)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement en mode local (4D Server et 4D) ; elle ne doit pas \xeatre utilis\xe9e avec 4D en mode acc\xe8s distant."]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, l'information retourn\xe9e se r\xe9f\xe8re seulement \xe0 la base courante en cours d'ex\xe9cution. Le param\xe8tre objet optionnel ",(0,r.jsx)(n.em,{children:"dbFilter"})," vous permet de sp\xe9cifier la port\xe9e de cette commande :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'passez l\'attribut "dbFilter" avec la valeur "All" pour obtenir les informations sur le cache de toutes les bases lanc\xe9es, y compris les composants.'}),"\n",(0,r.jsxs)(n.li,{children:['passez l\'attribut "dbFilter" avec la valeur "" (cha\xeene vide) pour obtenir des informations uniquement sur la base courante (\xe9quivalent \xe0 l\'omission du param\xe8tre ',(0,r.jsx)(n.em,{children:"dbFilter"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Cache info"})," retourne un objet unique qui contient toutes les informations pertinentes \xe0 propos du cache. L'objet retourn\xe9 a la structure suivante :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "maxMem": Maximum cache size (real),\xa0\xa0\xa0 "usedMem": Current cache size (real),\xa0\xa0\xa0 "objects": [...] Array of objects currently loaded in cache}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Les \xe9l\xe9ments du tableau ",(0,r.jsx)(n.em,{children:"objects"})," sont des objets racine (tables, index, Blobs, etc.) qui sont actuellement charg\xe9s dans le cache. Chaque \xe9l\xe9ment contient les attributs sp\xe9cifiques qui d\xe9crivent son statut courant. Pour plus d'informations sur l'interpr\xe9tation avanc\xe9e de ces donn\xe9es, veuillez contacter les services techniques de 4D."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez obtenir des informations sur la base de donn\xe9es courante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $cache : Object\n\xa0$cache:=Cache info\n"})}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez obtenir des informations sur la base courante et tous les composants ouverts :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $dbFilter : Object\n\xa0OB SET($dbFilter;"dbFilter";"All")\n\xa0$cache:=Cache info($dbFilter)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/memory-statistics",children:"MEMORY STATISTICS"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1402"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);