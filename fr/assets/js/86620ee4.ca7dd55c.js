"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41959"],{682161:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-paste-from-object","title":"VP PASTE FROM OBJECT","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-paste-from-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-paste-from-object","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-paste-from-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-paste-from-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-paste-from-object","title":"VP PASTE FROM OBJECT"},"sidebar":"docs","previous":{"title":"P","permalink":"/docs/fr/20-R8/commands-legacy/P"},"next":{"title":"VP PRINT","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-print"}}'),o=t("785893"),r=t("250065");let i={id:"vp-paste-from-object",title:"VP PASTE FROM OBJECT"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.details,{children:[(0,o.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Release"}),(0,o.jsx)(n.th,{children:"Modifications"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"19 R4"}),(0,o.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP PASTE FROM OBJECT"})," ( ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,o.jsx)(n.em,{children:"dataObject"})," : Object {; ",(0,o.jsx)(n.em,{children:"options"})," : Longint} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tres"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objet plage de cellules"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"dataObject"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objet contenant les donn\xe9es \xe0 coller"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Specifies what is pasted"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP PASTE FROM OBJECT"})," command pastes the contents, style and formulas stored in ",(0,o.jsx)(n.em,{children:"dataObject"})," to the ",(0,o.jsx)(n.em,{children:"rangeObj"})," object."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"rangeObj"}),", pass the cell range object where the values, formatting, and/or formula cells will be pasted. If ",(0,o.jsx)(n.em,{children:"rangeObj"})," refers to more than one cell, only the first one is used."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"dataObject"}),", pass the object that contains the cell data, formatting, and formulas to be pasted."]}),"\n",(0,o.jsxs)(n.p,{children:["In the optional ",(0,o.jsx)(n.em,{children:"options"})," parameter, you can specify what to paste in the cell range. Valeurs possibles :"]}),"\n",(0,o.jsxs)(n.p,{children:["|Constant|Description|\n|---|---|---|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options all"}),"|Pastes all data objects, including values, formatting, and formulas.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options formatting"}),"|Pastes only the formatting.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options formulas"}),"|Pastes only the formulas.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options formulas and formatting"}),"|Pastes formulas and formatting.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options values"}),"|Pastes only values.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options value and formatting"}),"|Pastes values and formatting.|"]}),"\n",(0,o.jsxs)(n.p,{children:["The paste options defined in the ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-set-workbook-options",children:"workbook options"})," are taken into account."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.em,{children:"options"})," refers to a paste option not present in the copied object (e.g. formulas), the command does nothing."]}),"\n",(0,o.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsxs)(n.p,{children:["See example the example from ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"})]}),"\n",(0,o.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-move-cells",children:"VP MOVE CELLS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-workbook-options",children:"VP Get workbook options"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);