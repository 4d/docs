"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91025"],{555211:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/is-user-deleted","title":"Is user deleted","description":"Is user deleted ( r\xe9fUtilisateur ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-user-deleted.md","sourceDirName":"commands-legacy","slug":"/commands/is-user-deleted","permalink":"/docs/fr/commands/is-user-deleted","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-user-deleted.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-user-deleted","title":"Is user deleted","slug":"/commands/is-user-deleted","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET USER PROPERTIES","permalink":"/docs/fr/commands/get-user-properties"},"next":{"title":"SET GROUP ACCESS","permalink":"/docs/fr/commands/set-group-access"}}'),t=r("785893"),d=r("250065");let i={id:"is-user-deleted",title:"Is user deleted",slug:"/commands/is-user-deleted",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Is user deleted"})," ( ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"r\xe9fUtilisateur"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro d'identification de l'utilisateur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Vrai = le compte de l'utilisateur est supprim\xe9 ou n'existe pas Faux = le compte de l'utilisateur est actif"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"Is user deleted"})," teste le compte de l'utilisateur dont le num\xe9ro d'identification unique est pass\xe9 dans ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si le compte n'existe pas ou a \xe9t\xe9 supprim\xe9, la fonction ",(0,t.jsx)(s.strong,{children:"Is user deleted"})," retourne Vrai. Sinon, elle retourne Faux."]}),"\n",(0,t.jsx)(s.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler ",(0,t.jsx)(s.strong,{children:"Is user deleted"})," ou si un autre process acc\xe8de d\xe9j\xe0 au syst\xe8me de mots de passe, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs utilisant la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/delete-user",children:"DELETE USER"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"616"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return i}});var n=r(667294);let t={},d=n.createContext(t);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);