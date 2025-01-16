"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16391"],{256909:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"FormEditor/print","title":"Impression","description":"Propri\xe9t\xe9s","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/FormEditor/properties_Print.md","sourceDirName":"FormEditor","slug":"/FormEditor/print","permalink":"/docs/fr/FormEditor/print","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print","title":"Impression"},"sidebar":"docs","previous":{"title":"Menu","permalink":"/docs/fr/FormEditor/menu"},"next":{"title":"Taille de la Fen\xeatre","permalink":"/docs/fr/FormEditor/windowSize"}}'),i=r("785893"),s=r("250065");let o={id:"print",title:"Impression"},d=void 0,l={},c=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4}];function a(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n",(0,i.jsx)(n.p,{children:"Permet de d\xe9finir des param\xe8tres d'impression sp\xe9cifiques pour le formulaire. Cette fonctionnalit\xe9 est utile pour afficher les limites de pages d'impression dans l'\xe9diteur de formulaire."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compatibilit\xe9"})," : M\xeame si ces param\xe8tres sont pris en compte lors de l'impression du formulaire en mode Application, il est d\xe9conseill\xe9 de s'appuyer sur cette fonctionnalit\xe9 pour stocker les param\xe8tres d'impression du formulaire, en raison des limitatio It is highly recommended to use the 4D commands ",(0,i.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,i.jsx)(n.code,{children:"BLOB to print settings"})," which are more powerful."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez modifier les param\xe8tres d'impression suivants :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Format du papier"}),"\n",(0,i.jsx)(n.li,{children:"Orientation du papier"}),"\n",(0,i.jsx)(n.li,{children:"Mise \xe0 l'\xe9chelle de la page"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Les options disponibles d\xe9pendent de la configuration du syst\xe8me."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom"}),(0,i.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pageFormat"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Propri\xe9t\xe9s d'impression disponibles : paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"paperName"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"paperWidth"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Utilis\xe9 si un papier nomm\xe9 paperName n'a pas \xe9t\xe9 trouv\xe9. N\xe9cessite un suffixe d'unit\xe9 : pt, in, mm, cm."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"paperHeight"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Utilis\xe9 si un papier nomm\xe9 paperName n'a pas \xe9t\xe9 trouv\xe9. N\xe9cessite un suffixe d'unit\xe9 : pt, in, mm, cm."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"orientation"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"landscape" (par d\xe9faut "portrait")'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scale"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"minimum : 0"})]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);