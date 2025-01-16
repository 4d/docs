"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10072"],{493694:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-external-data-path","title":"Get external data path","description":"Get external data path ( leChamp ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-external-data-path.md","sourceDirName":"commands-legacy","slug":"/commands/get-external-data-path","permalink":"/docs/fr/commands/get-external-data-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-external-data-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-external-data-path","title":"Get external data path","slug":"/commands/get-external-data-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Field name","permalink":"/docs/fr/commands/field-name"},"next":{"title":"GET FIELD ENTRY PROPERTIES","permalink":"/docs/fr/commands/get-field-entry-properties"}}'),r=n("785893"),a=n("250065");let d={id:"get-external-data-path",title:"Get external data path",slug:"/commands/get-external-data-path",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let t={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Get external data path"})," ( ",(0,r.jsx)(t.em,{children:"leChamp"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"leChamp"}),(0,r.jsx)(t.td,{children:"Text, Blob, Picture"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Champ dont vous souhaitez obtenir le lieu de stockage"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Chemin d\u2019acc\xe8s complet du fichier de stockage externe"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"Get external data path"})," retourne le chemin d\u2019acc\xe8s complet du fichier de stockage externe des donn\xe9es du champ pass\xe9 dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"leChamp"}),", pour l\u2019enregistrement courant. Le champ pass\xe9 en param\xe8tre doit \xeatre de type Texte, Blob ou Image. La commande retourne le chemin d'acc\xe8s du fichier de stockage m\xeame si le fichier n'existe pas ou n'est pas accessible."]}),"\n",(0,r.jsx)(t.p,{children:"Cette commande vous permet notamment de recopier le fichier externe."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note :"})," Pour plus d\u2019informations sur le stockage externe de donn\xe9es, reportez-vous au manuel ",(0,r.jsx)(t.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Cette commande retourne une cha\xeene vide dans les cas suivants :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"le champ n\u2019est pas stock\xe9 en-dehors du fichier de donn\xe9es,"}),"\n",(0,r.jsx)(t.li,{children:"le champ a une valeur Null (et ne contient pas de chemin d'acc\xe8s),"}),"\n",(0,r.jsx)(t.li,{children:"la commande est ex\xe9cut\xe9e depuis un 4D distant."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/fr/commands/set-external-data-path",children:"SET EXTERNAL DATA PATH"})}),"\n",(0,r.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1133"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);