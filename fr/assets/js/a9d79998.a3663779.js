"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45794"],{732382:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/http-get-certificates-folder","title":"HTTP Get certificates folder","description":"HTTP Get certificates folder  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/http-get-certificates-folder.md","sourceDirName":"commands-legacy","slug":"/commands/http-get-certificates-folder","permalink":"/docs/fr/20-R8/commands/http-get-certificates-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-get-certificates-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-get-certificates-folder","title":"HTTP Get certificates folder","slug":"/commands/http-get-certificates-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Get","permalink":"/docs/fr/20-R8/commands/http-get"},"next":{"title":"HTTP GET OPTION","permalink":"/docs/fr/20-R8/commands/http-get-option"}}'),r=n("785893"),i=n("250065");let c={id:"http-get-certificates-folder",title:"HTTP Get certificates folder",slug:"/commands/http-get-certificates-folder",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"HTTP Get certificates folder"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Chemin d\u2019acc\xe8s complet du dossier de certificats actif"})]})})]}),"\n",(0,r.jsx)(t.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,r.jsxs)(t.p,{children:["Cette commande est maintenue pour des raisons de compatibilit\xe9 uniquement. Il est maintenant recommand\xe9 d'utiliser la classe ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/API/HTTPRequestClass",children:(0,r.jsx)(t.code,{children:"4D.HTTPRequest"})}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"HTTP Get certificates folder"})," retourne le chemin d\u2019acc\xe8s complet du dossier de certificats client actif."]}),"\n",(0,r.jsxs)(t.p,{children:['Par d\xe9faut, 4D utilise le dossier "ClientCertificatesFolder" cr\xe9\xe9 \xe0 c\xf4t\xe9 du fichier de structure (dossier cr\xe9\xe9 uniquement si n\xe9cessaire). Vous pouvez toutefois cr\xe9er un dossier personnalis\xe9 pour le process courant \xe0 l\u2019aide de la commande ',(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:"Vous souhaitez changer temporairement de dossier de certificats :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $certifFolder : Text\n\xa0$certifFolder :=HTTP Get certificates folder\xa0//on stocke le dossier courant\n\xa0HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")\n\xa0\xa0\xa0\xa0...\xa0// ex\xe9cution de requ\xeates sp\xe9cifiques\n\xa0HTTP SET CERTIFICATES FOLDER($certifFolder)\xa0//on r\xe9tablit le dossier\n'})}),"\n",(0,r.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"})}),"\n",(0,r.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1307"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return c}});var s=n(667294);let r={},i=s.createContext(r);function c(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);