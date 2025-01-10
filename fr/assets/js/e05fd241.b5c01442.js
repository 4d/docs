"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21827"],{90607:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-combine-ranges","title":"VP Combine ranges","description":"VP Combine ranges ( rangeObj Object {;...otherRangeObjN Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-combine-ranges.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-combine-ranges","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-combine-ranges","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-combine-ranges.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-combine-ranges","title":"VP Combine ranges"},"sidebar":"docs","previous":{"title":"VP COLUMN AUTOFIT","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-column-autofit"},"next":{"title":"VP Convert from 4D View","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-convert-from-4d-view"}}'),t=r("785893"),o=r("250065");let i={id:"vp-combine-ranges",title:"VP Combine ranges"},c=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Combine ranges"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"otherRangeObj"})," : Object {;...",(0,t.jsx)(n.em,{children:"otherRangeObjN"})," : Object }  ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"otherRangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objet contenant une plage combin\xe9e"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP Combine Ranges"})," retourne un nouvel objet de plage qui incorpore deux ou plusieurs objets de plage existants. Toutes les plages doivent provenir de la m\xeame zone 4D View Pro."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passez le premier objet de plage."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"otherRangeObj"}),", passez un ou plusieurs autres objets de plage \xe0 combiner avec ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["La commande incorpore les objets ",(0,t.jsx)(n.em,{children:"rangeObj"})," et ",(0,t.jsx)(n.em,{children:"otherRangeObj"})," par r\xe9f\xe9rence."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez combiner des plages de type cellule, colonne et ligne dans une nouvelle plage distincte :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $cell:=VP Cell("ViewProArea";2;4) // C5\n $column:=VP Column("ViewProArea";3) // colonne D\n $row:=VP Row("ViewProArea";9) // ligne 10\n \n $combine:=VP Combine ranges($cell;$column;$row)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-all",children:"VP All"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-column",children:"VP Column"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-name",children:"VP Name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-row",children:"VP Row"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);