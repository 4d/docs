"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57507"],{763329:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/set-group-access","title":"SET GROUP ACCESS","description":"SET GROUP ACCESS {( groupes )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-group-access","permalink":"/docs/fr/commands/set-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-access.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-group-access","title":"SET GROUP ACCESS","slug":"/commands/set-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is user deleted","permalink":"/docs/fr/commands/is-user-deleted"},"next":{"title":"Set group properties","permalink":"/docs/fr/commands/set-group-properties"}}'),t=n("785893"),i=n("250065");let o={id:"set-group-access",title:"SET GROUP ACCESS",slug:"/commands/set-group-access",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET GROUP ACCESS"})," {( ",(0,t.jsx)(s.em,{children:"groupes"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"groupes"}),(0,t.jsx)(s.td,{children:"Collection"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom(s) de groupe(s) au(x)quel(s) le compte utilisateur doit appartenir durant la session"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"SET GROUP ACCESS"})," modifie l'adh\xe9sion du compte utilisateur pour la session courante. Elle red\xe9finit les groupes pr\xe9c\xe9dents et d\xe9finit les nouvelles adh\xe9sions dans les ",(0,t.jsx)(s.em,{children:"groupes"})," list\xe9s."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["La port\xe9e de cette commande est la session courante. L'appel \xe0 la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/change-current-user",children:"CHANGE CURRENT USER"})," par la suite, red\xe9finit par exemple les adh\xe9sions."]}),"\n",(0,t.jsx)(s.li,{children:"Cette commande peut \xeatre appel\xe9e uniquement depuis un 4D distant ou des applications 4D monopostes. Elle n'est pas autoris\xe9e sur 4D Server."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Dans ",(0,t.jsx)(s.em,{children:"groupes"}),", passez une collection de nom(s) de groupe(s) existant(s) au(x)quel(s) le compte l'utilisateur 4D appartient (si un nom de groupe n'existe pas, il est ignor\xe9). Si vous passez une collection vide, le compte utilisateur 4D n'appartiendra plus \xe0 aucun groupe."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous omettez le param\xe8tre ",(0,t.jsx)(s.em,{children:"groupes"}),", les adh\xe9sions du compte utilisateur 4D sont red\xe9finies sur les adh\xe9sions stock\xe9es sur disque."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Lorsqu'une adh\xe9sion \xe0 un groupe fournit un acc\xe8s \xe0 une fonctionnalit\xe9 \"s\xe9rialis\xe9\" (ex : un plug-in), une licence correspondante est utilis\xe9e et demeurera associ\xe9e au compte utilisateur 4D jusqu'\xe0 la fin de la session, m\xeame si la commande ",(0,t.jsx)(s.strong,{children:"SET GROUP ACCESS"})," est appel\xe9e et si l'adh\xe9sion au groupe est annul\xe9e."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:'Vous souhaitez ajouter l\'utilisateur courant aux groupes "admin" et "plugins" dans la session :'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$groups:=New collection("admin";"plugins")\n\xa0SET GROUP ACCESS($groups)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-group-access",children:"Get group access"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-plugin-access",children:"Get plugin access"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-plugin-access",children:"SET PLUGIN ACCESS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-user-alias",children:"SET USER ALIAS"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"1737"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(s.td,{})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var r=n(667294);let t={},i=r.createContext(t);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);