"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4035"],{670681:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-add-span","title":"VP ADD SPAN","description":"VP ADD SPAN ( rangeObj : Object )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-add-span.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-span","permalink":"/docs/fr/ViewPro/commands/vp-add-span","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-span.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-add-span","title":"VP ADD SPAN"},"sidebar":"docs","previous":{"title":"VP ADD SHEET","permalink":"/docs/fr/ViewPro/commands/vp-add-sheet"},"next":{"title":"VP ADD STYLESHEET","permalink":"/docs/fr/ViewPro/commands/vp-add-stylesheet"}}'),r=s("785893"),l=s("250065");let i={id:"vp-add-span",title:"VP ADD SPAN"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP ADD SPAN"})," combine les cellules dans ",(0,r.jsx)(n.em,{children:"rangeObj"})," en une seule cellule fusionn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passez un objet de plage de cellules. Les cellules de la plage sont jointes, afin de cr\xe9er une cellule plus large qui s'\xe9tend sur plusieurs colonnes et/ou lignes. Vous pouvez passer plusieurs plages de cellules pour cr\xe9er plusieurs fusions de cellules en m\xeame temps. A noter que si les plages de cellules se chevauchent, seule la premi\xe8re plage est utilis\xe9e."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Seules les donn\xe9es contenues dans la cellule sup\xe9rieure gauche sont affich\xe9es. Les donn\xe9es des autres cellules combin\xe9es sont cach\xe9es jusqu'\xe0 ce que la fusion soit retir\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"Les donn\xe9es masqu\xe9es, contenues dans les cellules fusionn\xe9es, sont accessibles via des formules (commen\xe7ant par la cellule sup\xe9rieure gauche)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour fusionner les cellules First quarter et Second quarter avec les deux cellules c\xf4te \xe0 c\xf4te, et de fusionner la cellule South area avec les deux lignes en-dessous :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"initial-document",src:s(5990).Z+"",width:"679",height:"170"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Plage First quarter\n $q1:=VP Cells("ViewProArea";2;3;3;1)\n \n  // Plage Second quarter\n $q2:=VP Cells("ViewProArea";5;3;3;1)\n \n  // Plage South area\n $south:=VP Cells("ViewProArea";0;5;1;3)\n \n VP ADD SPAN(VP Combine ranges($q1;$q2;$south))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"vp-add-span-result",src:s(210520).Z+"",width:"679",height:"163"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/getting-started#using-range-objects",children:"4D View Pro Range Object Properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-spans",children:"VP Get spans"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},210520:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-add-span-2-584074a60f1d13d7c891d349b4531166.png"},5990:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-add-span-d3eb740fe3b6369f6553f30743000156.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);