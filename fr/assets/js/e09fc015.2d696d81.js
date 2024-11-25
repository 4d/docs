"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30808"],{246642:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"MSC/rollback","title":"Page Retour en arri\xe8re","description":"La page Retour arri\xe8re du CSM permet d\u2019acc\xe9der \xe0 la fonction de retour en arri\xe8re parmi les op\xe9rations effectu\xe9es dans le fichier de donn\xe9es. Elle s\u2019apparente \xe0 une fonction d\u2019annulation multi-niveaux. Elle est utile notamment lorsqu\u2019un enregistrement a \xe9t\xe9 supprim\xe9 par erreur dans la base de donn\xe9es.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/MSC/rollback.md","sourceDirName":"MSC","slug":"/MSC/rollback","permalink":"/docs/fr/18/MSC/rollback","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frollback.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"rollback","title":"Page Retour en arri\xe8re","sidebar_label":"Page Retour en arri\xe8re"},"sidebar":"docs","previous":{"title":"Page compactage","permalink":"/docs/fr/18/MSC/compact"},"next":{"title":"Page restitution","permalink":"/docs/fr/18/MSC/restore"}}'),s=r("785893"),i=r("250065");let o={id:"rollback",title:"Page Retour en arri\xe8re",sidebar_label:"Page Retour en arri\xe8re"},a=void 0,l={},u=[];function c(e){let n={a:"a",blockquote:"blockquote",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"La page Retour arri\xe8re du CSM permet d\u2019acc\xe9der \xe0 la fonction de retour en arri\xe8re parmi les op\xe9rations effectu\xe9es dans le fichier de donn\xe9es. Elle s\u2019apparente \xe0 une fonction d\u2019annulation multi-niveaux. Elle est utile notamment lorsqu\u2019un enregistrement a \xe9t\xe9 supprim\xe9 par erreur dans la base de donn\xe9es."}),"\n",(0,s.jsx)(n.p,{children:"Pour que cette fonction soit accessible, il est imp\xe9ratif que la base travaille avec un fichier d\u2019historique."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(977967).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Si la base de donn\xe9es est chiffr\xe9e et si aucune cl\xe9 de donn\xe9es valide correspondant au fichier d'historique ouvert n'a \xe9t\xe9 fournie, les valeurs chiffr\xe9es ne s'affichent pas dans la colonne ",(0,s.jsx)(n.strong,{children:"Valeurs"})," et un dialogue s'affiche, demandant la saisie d'une phrase secr\xe8te ou de la cl\xe9 de donn\xe9es, si vous cliquez sur le bouton ",(0,s.jsx)(n.strong,{children:"Revenir en arri\xe8re"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le contenu et le fonctionnement de la liste des op\xe9rations sont identiques \xe0 ceux de la fen\xeatre ",(0,s.jsx)(n.a,{href:"/docs/fr/18/MSC/analysis",children:"d\u2019analyse d\u2019activit\xe9s"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Pour effectuer un retour en arri\xe8re parmi les op\xe9rations, vous devez s\xe9lectionner la ligne situ\xe9e apr\xe8s laquelle toutes les op\xe9rations doivent \xeatre annul\xe9es. L\u2019op\xe9ration de la ligne s\xe9lectionn\xe9e sera la derni\xe8re conserv\xe9e. Si par exemple vous souhaitez annuler une suppression, s\xe9lectionnez l\u2019op\xe9ration situ\xe9e juste avant la suppression. L'op\xe9ration de suppression et les op\xe9rations suivantes seront annul\xe9es."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(23281).Z+"",width:"1008",height:"366"})}),"\n",(0,s.jsxs)(n.p,{children:["Cliquez ensuite sur le bouton ",(0,s.jsx)(n.strong,{children:"Revenir en arri\xe8re"}),". 4D vous demande de confirmer l\u2019op\xe9ration. Si vous cliquez sur ",(0,s.jsx)(n.strong,{children:"OK"}),", les donn\xe9es sont alors restitu\xe9es dans l\u2019\xe9tat exact o\xf9 elles se trouvaient au moment de l\u2019action s\xe9lectionn\xe9e."]}),"\n",(0,s.jsx)(n.p,{children:"Le menu situ\xe9 en bas de la fen\xeatre vous permet de s\xe9lectionner le fichier d\u2019historique \xe0 utiliser lorsque vous appliquez la fonction de retour en arri\xe8re \xe0 une base restitu\xe9e. Dans ce cas, vous devez d\xe9signer le fichier d\u2019historique correspondant \xe0 l\u2019archive."}),"\n",(0,s.jsxs)(n.p,{children:["Le principe mis en oeuvre pour la fonction de retour arri\xe8re est le suivant : lorsque l\u2019utilisateur clique sur le bouton ",(0,s.jsx)(n.strong,{children:"Revenir en arri\xe8re"}),", 4D referme la base de donn\xe9es courante et restitue la derni\xe8re sauvegarde des donn\xe9es de la base. La base restitu\xe9e est ensuite ouverte et 4D int\xe8gre les op\xe9rations de l\u2019historique jusqu\u2019\xe0 l\u2019op\xe9ration s\xe9lectionn\xe9e. Si la base n\u2019avait pas encore \xe9t\xe9 sauvegard\xe9e, 4D repart d\u2019un fichier de donn\xe9es vierge."]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},977967:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},23281:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);