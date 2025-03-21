"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66351"],{501025:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/is-record-loaded","title":"Is record loaded","description":"Is record loaded {( laTable )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-record-loaded.md","sourceDirName":"commands-legacy","slug":"/commands/is-record-loaded","permalink":"/docs/fr/20-R7/commands/is-record-loaded","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-record-loaded.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-record-loaded","title":"Is record loaded","slug":"/commands/is-record-loaded","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is new record","permalink":"/docs/fr/20-R7/commands/is-new-record"},"next":{"title":"Modified record","permalink":"/docs/fr/20-R7/commands/modified-record"}}'),t=r("785893"),d=r("250065");let o={id:"is-record-loaded",title:"Is record loaded",slug:"/commands/is-record-loaded",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Is record loaded"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de l\u2019enregistrement \xe0 examiner ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai si l\u2019enregistrement est charg\xe9, Faux sinon"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Is record loaded"})," retourne Vrai si l\u2019enregistrement courant de ",(0,t.jsx)(n.em,{children:"laTable"})," est charg\xe9 dans le process en cours.: En principe, lorsque des tables sont li\xe9es par des liens automatiques, les enregistrements courants des tables li\xe9es sont automatiquement charg\xe9s (cf. ",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des liens"}),"). Toutefois, pour des raisons d'optimisation, 4D Server ne charge ces enregistrements qu'au moment o\xf9 c'est n\xe9cessaire, par exemple lors de la lecture ou de l'affectation d'un champ de l'enregistrement li\xe9. Par cons\xe9quent, dans ce contexte la commande ",(0,t.jsx)(n.strong,{children:"Is record loaded"})," retournera Faux en mode distant (elle retourne Vrai en mode local)."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Au lieu d\u2019utiliser les actions automatiques \u201CEnregistrement suivant\u201D ou \u201CEnregistrement pr\xe9c\xe9dent\u201D, vous voulez \xe9crire dans les m\xe9thodes de boutons sans action des instructions sp\xe9cifiant que le bouton \u201CSuivant\u201D affiche le d\xe9but de la s\xe9lection si la fin de la s\xe9lection est atteinte et que le bouton \u201CPr\xe9c\xe9dent\u201D affiche la fin de la s\xe9lection si le d\xe9but est atteint."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet du bouton sans action "PR\xc9C\xc9DENT"\n\xa0If(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0PREVIOUS RECORD([Groupe])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Groupe])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Groupe];Records in selection([Groupe]))\n\xa0\xa0//Aller au dernier enregistrement de la s\xe9lection\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// M\xe9thode objet du bouton sans action "SUIVANT"\n\xa0If(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0NEXT RECORD([Groupe])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Groupe])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Groupe];1)\xa0//Aller au premier enregistrement de la s\xe9lection\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"669"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);