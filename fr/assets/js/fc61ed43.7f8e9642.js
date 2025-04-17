"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99371"],{582480:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/import-structure","title":"IMPORT STRUCTURE","description":"IMPORT STRUCTURE ( structureXML )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/import-structure.md","sourceDirName":"commands-legacy","slug":"/commands/import-structure","permalink":"/docs/fr/commands/import-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-structure.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"import-structure","title":"IMPORT STRUCTURE","slug":"/commands/import-structure","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE PROPERTIES","permalink":"/docs/fr/commands/get-table-properties"},"next":{"title":"Is field number valid","permalink":"/docs/fr/commands/is-field-number-valid"}}'),s=t("785893"),i=t("250065");let d={id:"import-structure",title:"IMPORT STRUCTURE",slug:"/commands/import-structure",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Note pour le d\xe9ploiement",id:"note-pour-le-d\xe9ploiement",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function u(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IMPORT STRUCTURE"})," ( ",(0,s.jsx)(n.em,{children:"structureXML"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"structureXML"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"D\xe9finition XML de la structure de la base 4D"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"IMPORT STRUCTURE"})," vous permet d'importer, dans la base courante, la d\xe9finition XML de la structure de la base 4D pass\xe9e dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"structureXML"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"structureXML"})," doit contenir une d\xe9finition valide de structure 4D au format XML. Pour obtenir ce type de d\xe9finition, vous pouvez utiliser l'un des moyens suivants :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ex\xe9cuter la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/export-structure",children:"EXPORT STRUCTURE"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["s\xe9lectionner la commande de menu ",(0,s.jsx)(n.strong,{children:"Exporter > D\xe9finition de structure vers le fichier XML..."})," disponible dans l'interface du mode D\xe9veloppement de 4D (voir ",(0,s.jsx)(n.em,{children:"Exporter et importer des d\xe9finitions de structure"}),"),"]}),"\n",(0,s.jsx)(n.li,{children:'cr\xe9er ou modifier un fichier XML personnalis\xe9 bas\xe9 sur les DTD publiques pr\xe9sentes dans le dossier "DTD" de l\'application 4D.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"La d\xe9finition de structure import\xe9e est ajout\xe9e \xe0 la structure d\xe9j\xe0 ouverte et est affich\xe9e dans l'\xe9diteur de Structure standard de 4D parmi les tables existantes (s'il y en a). Si une table import\xe9e a le m\xeame nom qu'une table locale, une erreur est g\xe9n\xe9r\xe9e et l'op\xe9ration d'import est annul\xe9e."}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez \xe9galement importer la structure dans une base vide, et ainsi cr\xe9er une nouvelle base."}),"\n",(0,s.jsx)(n.p,{children:"Une erreur est g\xe9n\xe9r\xe9e si la structure est en mode compil\xe9 ou en lecture seulement."}),"\n",(0,s.jsx)(n.p,{children:"Cette commande ne peut pas \xeatre appel\xe9e depuis une application 4D en mode distant."}),"\n",(0,s.jsx)(n.h2,{id:"note-pour-le-d\xe9ploiement",children:"Note pour le d\xe9ploiement"}),"\n",(0,s.jsx)(n.p,{children:"\xc9tant donn\xe9 que cette commande modifie la structure de la base de donn\xe9es, elle ne peut pas \xeatre utilis\xe9e dans une application packag\xe9e en lecture seule (fichier .4dc install\xe9 dans le dossier Program Files ou fichier .4dz)."}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez importer une d\xe9finiton de structure stock\xe9e sur disque dans la base courante :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$struc:=Document to text("c:\\\\4DStructures\\\\Employee.xml")\n\xa0IMPORT STRUCTURE($struc)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/export-structure",children:"EXPORT STRUCTURE"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1310"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);