/*! For license information please see 86573f5b.016dadce.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1443],{52965:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(474848),i=s(28453);const t={id:"analysis",title:"Page Analyse d'activit\xe9s",sidebar_label:"Page Analyse d'activit\xe9s"},o=void 0,l={id:"MSC/analysis",title:"Page Analyse d'activit\xe9s",description:"La page Analyse d'activit\xe9s du CSM permet de visualiser le contenu du fichier d\u2019historique courant. Cette fonction est utile pour analyser l'utilisation d'une application ou pour d\xe9tecter la ou les op\xe9ration(s) \xe0 l'origine d'erreurs ou de dysfonctionnements. Dans le cas d'une application en mode client-serveur, elle permet de v\xe9rifier les op\xe9rations effectu\xe9es par chaque machine cliente.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/fr/MSC/analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fanalysis.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"analysis",title:"Page Analyse d'activit\xe9s",sidebar_label:"Page Analyse d'activit\xe9s"},sidebar:"docs",previous:{title:"Page informations",permalink:"/docs/fr/MSC/information"},next:{title:"Page V\xe9rification",permalink:"/docs/fr/MSC/verify"}},a={},c=[];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"La page Analyse d'activit\xe9s du CSM permet de visualiser le contenu du fichier d\u2019historique courant. Cette fonction est utile pour analyser l'utilisation d'une application ou pour d\xe9tecter la ou les op\xe9ration(s) \xe0 l'origine d'erreurs ou de dysfonctionnements. Dans le cas d'une application en mode client-serveur, elle permet de v\xe9rifier les op\xe9rations effectu\xe9es par chaque machine cliente."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Il est \xe9galement possible de revenir en arri\xe8re parmi les op\xe9rations effectu\xe9es sur les donn\xe9es de la base. Pour plus d'informations, reportez-vous \xe0 la ",(0,r.jsx)(n.a,{href:"/docs/fr/MSC/rollback",children:"page Retour arri\xe8re"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(397580).A+"",width:"882",height:"666"})}),"\n",(0,r.jsx)(n.p,{children:"Chaque op\xe9ration \xe9l\xe9mentaire enregistr\xe9e dans le fichier d\u2019historique appara\xeet sous forme d\u2019une ligne. Les colonnes fournissent diverses informations concernant l\u2019op\xe9ration. Vous pouvez r\xe9organiser les colonnes comme vous le souhaitez en cliquant sur leur en-t\xeate."}),"\n",(0,r.jsx)(n.p,{children:"Les informations affich\xe9es permettent d\u2019identifier la source et le contexte de chaque op\xe9ration :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Op\xe9ration"})," : num\xe9ro de s\xe9quence de l\u2019op\xe9ration dans le fichier d\u2019historique."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Action"})," : type d\u2019op\xe9ration effectu\xe9e. Cette colonne peut contenir les op\xe9rations suivantes :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ouverture du fichier de donn\xe9es : ouverture d\u2019un fichier de donn\xe9es."}),"\n",(0,r.jsx)(n.li,{children:"Fermeture du fichier de donn\xe9es : fermeture du fichier de donn\xe9es ouvert."}),"\n",(0,r.jsx)(n.li,{children:"Cr\xe9ation d\u2019un contexte : cr\xe9ation d\u2019un process d\xe9finissant un contexte d\u2019ex\xe9cution."}),"\n",(0,r.jsx)(n.li,{children:"Fermeture d\u2019un contexte : fermeture d\u2019un process."}),"\n",(0,r.jsx)(n.li,{children:"Ajout : cr\xe9ation et stockage d\u2019un enregistrement."}),"\n",(0,r.jsx)(n.li,{children:"Ajout d\u2019un BLOB : stockage d\u2019un BLOB dans un champ BLOB."}),"\n",(0,r.jsx)(n.li,{children:"Suppression : suppression d\u2019un enregistrement."}),"\n",(0,r.jsx)(n.li,{children:"Modification : modification d\u2019un enregistrement."}),"\n",(0,r.jsx)(n.li,{children:"D\xe9but de transaction : transaction d\xe9marr\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"Validation de transaction : transaction valid\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"Annulation de transaction : transaction annul\xe9e."}),"\n",(0,r.jsxs)(n.li,{children:["Contexte de mise \xe0 jour : modification des donn\xe9es suppl\xe9mentaires (ex : un appel \xe0 ",(0,r.jsx)(n.code,{children:"CHANGE CURRENT USER"})," ou ",(0,r.jsx)(n.code,{children:"SET USER ALIAS"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table"})," : table \xe0 laquelle appartient l\u2019enregistrement ou le BLOB ajout\xe9/supprim\xe9/modifi\xe9."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cl\xe9 primaire/BLOB"})," : contenu de la cl\xe9 primaire de l'enregistrement (lorsque la cl\xe9 primaire est compos\xe9e de plusieurs champs, les valeurs sont s\xe9par\xe9es par des points-virgules), ou num\xe9ro de s\xe9quence du BLOB impliqu\xe9 dans l\u2019op\xe9ration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Process"})," : num\xe9ro interne du process dans lequel l\u2019op\xe9ration a \xe9t\xe9 effectu\xe9e. Ce num\xe9ro interne correspond au contexte de l\u2019op\xe9ration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Taille"})," : taille (en octets) des donn\xe9es trait\xe9es par l\u2019op\xe9ration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Date et Heure"})," : date et heure \xe0 laquelle l\u2019op\xe9ration a \xe9t\xe9 effectu\xe9e."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Utilisateur syst\xe8me"})," : nom de l\u2019utilisateur syst\xe8me ayant effectu\xe9 l\u2019op\xe9ration. En mode client-serveur, le nom de la machine c\xf4t\xe9 client est affich\xe9; en mode mono-utilisateur, le nom de session de l'utilisateur s'affiche."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Utilisateur 4D"})," : nom de l\u2019utilisateur 4D ayant effectu\xe9 l\u2019op\xe9ration. Si un alias est d\xe9fini pour l'utilisateur, l'alias s'affiche \xe0 la place du nom d'utilisateur 4D."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Valeurs"})," : valeurs des champs de l\u2019enregistrement en cas d\u2019ajout ou de modification. Les valeurs sont s\xe9par\xe9es par des \u201c;\u201d. Seules les valeurs repr\xe9sent\xe9es sous forme alphanum\xe9rique sont affich\xe9es.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si la base de donn\xe9es est chiffr\xe9e et si aucune cl\xe9 de donn\xe9es valide correspondant au fichier d'historique ouvert n'a \xe9t\xe9 fournie, les valeurs chiffr\xe9es ne sont pas affich\xe9es dans cette colonne."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Enregistrements"})," : num\xe9ro de l\u2019enregistrement."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Cliquez sur ",(0,r.jsx)(n.strong,{children:"Analyser"})," pour mettre \xe0 jour le contenu du fichier d'historique courant de l'application s\xe9lectionn\xe9e (nomm\xe9 par d\xe9faut dataname.journal). Le bouton Parcourir peut \xeatre utilis\xe9 pour s\xe9lectionner et ouvrir un autre fichier journal pour l'application. Le bouton ",(0,r.jsx)(n.strong,{children:"Exporter..."})," peut \xeatre utilis\xe9 pour exporter le contenu du fichier en tant que texte."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},221020:(e,n,s)=>{var r=s(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,t={},c=null,u=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:u,props:t,_owner:l.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},397580:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(296540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);