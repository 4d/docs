"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36921"],{186449:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-table-properties","title":"GET TABLE PROPERTIES","description":"GET TABLE PROPERTIES ( ptrTable | numTable ; invisible {; trigSvgdeNouv {; trigSvgdeEnr {; trigSupprEnr {; trigChargEnr}}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-table-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-table-properties","permalink":"/docs/fr/20-R7/commands/get-table-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-table-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-table-properties","title":"GET TABLE PROPERTIES","slug":"/commands/get-table-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET RELATION PROPERTIES","permalink":"/docs/fr/20-R7/commands/get-relation-properties"},"next":{"title":"IMPORT STRUCTURE","permalink":"/docs/fr/20-R7/commands/import-structure"}}'),s=n("785893"),i=n("250065");let d={id:"get-table-properties",title:"GET TABLE PROPERTIES",slug:"/commands/get-table-properties",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GET TABLE PROPERTIES"})," ( ptrTable | numTable ; ",(0,s.jsx)(r.em,{children:"invisible"})," {; ",(0,s.jsx)(r.em,{children:"trigSvgdeNouv"})," {; ",(0,s.jsx)(r.em,{children:"trigSvgdeEnr"})," {; ",(0,s.jsx)(r.em,{children:"trigSupprEnr"})," {; ",(0,s.jsx)(r.em,{children:"trigChargEnr"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param\xe8tre"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ptrTable | numTable"}),(0,s.jsx)(r.td,{children:"Pointeur, Entier long"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Pointeur de table ou Num\xe9ro de table"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"invisible"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Vrai = Invisible, Faux = Visible"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigSvgdeNouv"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Vrai = Trigger \u201CSur sauvegarde nouvel enreg\u201D activ\xe9, sinon Faux"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigSvgdeEnr"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Vrai = Trigger \u201CSur sauvegarde enregistrement\u201D activ\xe9, sinon Faux"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigSupprEnr"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Vrai = Trigger \u201CSur suppression enreg\u201D activ\xe9, sinon Faux"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigChargEnr"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"*** Ne pas utiliser (obsol\xe8te) ***"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["La commande ",(0,s.jsx)(r.strong,{children:"GET TABLE PROPERTIES"})," retourne les propri\xe9t\xe9s de la table d\xe9sign\xe9e par ",(0,s.jsx)(r.em,{children:"ptrTable"})," ou ",(0,s.jsx)(r.em,{children:"numTable"}),". Vous pouvez passer dans le premier param\xe8tre soit un pointeur vers la table, soit le num\xe9ro de la table."]}),"\n",(0,s.jsx)(r.p,{children:"Apr\xe8s l\u2019ex\xe9cution de la commande :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"invisible"})," retourne Vrai si la table dispose de l\u2019attribut \u201CInvisible\u201D, Faux sinon. L\u2019attribut \u201CInvisible\u201D permet de masquer la table dans les \xe9diteurs standard de 4D (\xe9tiquettes, graphes...)."]}),"\n",(0,s.jsxs)(r.li,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"trigSvgdeNouv"})," retourne Vrai si le trigger \u201CSur sauvegarde nouvel enreg\u201D a \xe9t\xe9 activ\xe9 pour la table, Faux sinon."]}),"\n",(0,s.jsxs)(r.li,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"trigSvgdeEnr"})," retourne Vrai si le trigger \u201CSur sauvegarde enregistrement\u201D a \xe9t\xe9 activ\xe9 pour la table, Faux sinon."]}),"\n",(0,s.jsxs)(r.li,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"trigSupprEnr"})," retourne Vrai si le trigger \u201CSur suppression enreg\u201D a \xe9t\xe9 activ\xe9 pour la table, Faux sinon."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/get-relation-properties",children:"GET RELATION PROPERTIES"})]}),"\n",(0,s.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(r.td,{children:"687"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return d}});var t=n(667294);let s={},i=t.createContext(s);function d(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);