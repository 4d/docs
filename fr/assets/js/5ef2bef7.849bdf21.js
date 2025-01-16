"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67732"],{672080:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-group-list","title":"GET GROUP LIST","description":"GET GROUP LIST ( nomsGroupes ; num\xe9rosGroupes )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-group-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-list","permalink":"/docs/fr/commands/get-group-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-list","title":"GET GROUP LIST","slug":"/commands/get-group-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get group access","permalink":"/docs/fr/commands/get-group-access"},"next":{"title":"GET GROUP PROPERTIES","permalink":"/docs/fr/commands/get-group-properties"}}'),t=r("785893"),i=r("250065");let o={id:"get-group-list",title:"GET GROUP LIST",slug:"/commands/get-group-list",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET GROUP LIST"})," ( ",(0,t.jsx)(s.em,{children:"nomsGroupes"})," ; ",(0,t.jsx)(s.em,{children:"num\xe9rosGroupes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nomsGroupes"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Noms des groupes tels qu'ils apparaissent dans l'\xe9diteur de Mots de passe"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"num\xe9rosGroupes"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Num\xe9ros de r\xe9f\xe9rence uniques pour chaque groupe"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET GROUP LIST"})," remplit les tableaux ",(0,t.jsx)(s.em,{children:"nomsGroupes"})," et ",(0,t.jsx)(s.em,{children:"num\xe9rosGroupes"})," avec les noms et les num\xe9ros de r\xe9f\xe9rence uniques des groupes tels qu'ils apparaissent dans l'\xe9diteur de Mots de passe."]}),"\n",(0,t.jsxs)(s.p,{children:["Le tableau ",(0,t.jsx)(s.em,{children:"num\xe9rosGroupes"}),", synchronis\xe9 avec le tableau ",(0,t.jsx)(s.em,{children:"nomsGroupes"}),", est rempli avec les num\xe9ros de r\xe9f\xe9rence uniques des groupes."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Dans les bases projets, ces num\xe9ros commencent \xe0 15001, sont assign\xe9s dynamiquement au d\xe9marrage et sont maintenus au cours de la session."}),"\n",(0,t.jsxs)(s.li,{children:["Dans les bases binaires, ces num\xe9ros sont stock\xe9s et correspondent \xe0 une plage sp\xe9cifique, en fonction du cr\xe9ateur du groupe. Pour plus d'informations, veuillez consulter le paragraphe ",(0,t.jsx)(s.em,{children:"Plages de r\xe9f\xe9rences des groupes et des utilisateurs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler la commande ",(0,t.jsx)(s.strong,{children:"GET GROUP LIST"})," ou si le syst\xe8me de Mots de passe est d\xe9j\xe0 ouvert par un autre process, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"610"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return o}});var n=r(667294);let t={},i=n.createContext(t);function o(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);