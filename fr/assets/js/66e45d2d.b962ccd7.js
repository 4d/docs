"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79298"],{502218:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-group-access","title":"Get group access","description":"Get group access : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-access","permalink":"/docs/fr/commands/get-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-access.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-access","title":"Get group access","slug":"/commands/get-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get default user","permalink":"/docs/fr/commands/get-default-user"},"next":{"title":"GET GROUP LIST","permalink":"/docs/fr/commands/get-group-list"}}'),r=s("785893"),c=s("250065");let i={id:"get-group-access",title:"Get group access",slug:"/commands/get-group-access",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get group access"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Collection de nom(s) de groupe(s) au(x)quel(s) l'utilisateur appartient"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Get group access"})," retourne l'adh\xe9sion du compte utilisateur 4D \xe0 la session courante. Si l'utilisateur n'appartient \xe0 aucun groupe de la session, une collection vide est retourn\xe9e."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,r.jsx)(n.p,{children:"Collection de chaines : nom de groupe auxquels le compte utilisateur 4D appartient."}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez v\xe9rifier si l\'utilisateur courant appartient au groupe "plugins" :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$groups:=Get group access\n\xa0If($groups.countValues("plugins")#0)\xa0//l\'utilisateur appartient au groupe\n\xa0\xa0\xa0\xa0...\xa0//\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-group-access",children:"SET GROUP ACCESS"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1738"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},c=t.createContext(r);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);