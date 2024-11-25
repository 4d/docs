"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4586"],{207176:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/import-structure","title":"IMPORT STRUCTURE","description":"IMPORT STRUCTURE ( structureXML )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/import-structure.md","sourceDirName":"commands-legacy","slug":"/commands/import-structure","permalink":"/docs/fr/commands/import-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-structure.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-structure","title":"IMPORT STRUCTURE","slug":"/commands/import-structure","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE PROPERTIES","permalink":"/docs/fr/commands/get-table-properties"},"next":{"title":"Is field number valid","permalink":"/docs/fr/commands/is-field-number-valid"}}'),s=n("785893"),i=n("250065");let d={id:"import-structure",title:"IMPORT STRUCTURE",slug:"/commands/import-structure",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Note pour le d\xe9ploiement",id:"note-pour-le-d\xe9ploiement",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function u(e){let t={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"IMPORT STRUCTURE"})," ( ",(0,s.jsx)(t.em,{children:"structureXML"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"structureXML"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"D\xe9finition XML de la structure de la base 4D"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"IMPORT STRUCTURE"})," vous permet d'importer, dans la base courante, la d\xe9finition XML de la structure de la base 4D pass\xe9e dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"structureXML"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Le param\xe8tre ",(0,s.jsx)(t.em,{children:"structureXML"})," doit contenir une d\xe9finition valide de structure 4D au format XML. Pour obtenir ce type de d\xe9finition, vous pouvez utiliser l'un des moyens suivants :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["ex\xe9cuter la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/export-structure",children:"EXPORT STRUCTURE"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["s\xe9lectionner la commande de menu ",(0,s.jsx)(t.strong,{children:"Exporter > D\xe9finition de structure vers le fichier XML..."})," disponible dans l'interface du mode D\xe9veloppement de 4D (voir ",(0,s.jsx)(t.em,{children:"Exporter et importer des d\xe9finitions de structure"}),"),"]}),"\n",(0,s.jsx)(t.li,{children:'cr\xe9er ou modifier un fichier XML personnalis\xe9 bas\xe9 sur les DTD publiques pr\xe9sentes dans le dossier "DTD" de l\'application 4D.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"La d\xe9finition de structure import\xe9e est ajout\xe9e \xe0 la structure d\xe9j\xe0 ouverte et est affich\xe9e dans l'\xe9diteur de Structure standard de 4D parmi les tables existantes (s'il y en a). Si une table import\xe9e a le m\xeame nom qu'une table locale, une erreur est g\xe9n\xe9r\xe9e et l'op\xe9ration d'import est annul\xe9e."}),"\n",(0,s.jsx)(t.p,{children:"Vous pouvez \xe9galement importer la structure dans une base vide, et ainsi cr\xe9er une nouvelle base."}),"\n",(0,s.jsx)(t.p,{children:"Une erreur est g\xe9n\xe9r\xe9e si la structure est en mode compil\xe9 ou en lecture seulement."}),"\n",(0,s.jsx)(t.p,{children:"Cette commande ne peut pas \xeatre appel\xe9e depuis une application 4D en mode distant."}),"\n",(0,s.jsx)(t.h4,{id:"note-pour-le-d\xe9ploiement",children:"Note pour le d\xe9ploiement"}),"\n",(0,s.jsx)(t.p,{children:"\xc9tant donn\xe9 que cette commande modifie la structure de la base de donn\xe9es, elle ne peut pas \xeatre utilis\xe9e dans une application packag\xe9e en lecture seule (fichier .4dc install\xe9 dans le dossier Program Files ou fichier .4dz)."}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Vous souhaitez importer une d\xe9finiton de structure stock\xe9e sur disque dans la base courante :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$struc:=Document to text("c:\\\\4DStructures\\\\Employee.xml")\n\xa0IMPORT STRUCTURE($struc)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/fr/commands/export-structure",children:"EXPORT STRUCTURE"})})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var r=n(667294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);