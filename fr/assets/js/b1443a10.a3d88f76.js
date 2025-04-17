"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50095"],{160240:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/spell-get-current-dictionary","title":"SPELL Get current dictionary","description":"SPELL Get current dictionary  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/spell-get-current-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-get-current-dictionary","permalink":"/docs/fr/commands/spell-get-current-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-get-current-dictionary.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"spell-get-current-dictionary","title":"SPELL Get current dictionary","slug":"/commands/spell-get-current-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL CHECKING","permalink":"/docs/fr/commands/spell-checking"},"next":{"title":"SPELL GET DICTIONARY LIST","permalink":"/docs/fr/commands/spell-get-dictionary-list"}}'),i=t("785893"),s=t("250065");let c={id:"spell-get-current-dictionary",title:"SPELL Get current dictionary",slug:"/commands/spell-get-current-dictionary",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SPELL Get current dictionary"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"ID du dictionnaire utilis\xe9 pour la correction orthographique"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SPELL Get current dictionary"})," retourne le num\xe9ro d\u2019ID du dictionnaire en cours d\u2019utilisation."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"On souhaite afficher la langue du dictionnaire courant :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Liste des dictionnaires charg\xe9s\n\xa0SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Noms_at)\n\xa0$curLangCode:=SPELL Get current dictionary\n\xa0$countryName:=$Noms_at{Find in array($IDs_al;$curLangCode)}\n\xa0\xa0// Affichage du message\n\xa0ALERT("Dictionnaire courant : "+$countryName)\xa0// Espagnol\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1205"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var r=t(667294);let i={},s=r.createContext(i);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);