"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3024"],{180105:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-row-attributes","title":"VP SET ROW ATTRIBUTES","description":"VP SET ROW ATTRIBUTES ( rangeObj Object  )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-row-attributes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-row-attributes","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-row-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-row-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-row-attributes","title":"VP SET ROW ATTRIBUTES"},"sidebar":"docs","previous":{"title":"VP SET PRINT INFO","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-print-info"},"next":{"title":"VP SET ROW COUNT","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-row-count"}}'),s=t("785893"),i=t("250065");let d={id:"vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET ROW ATTRIBUTES"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"propertyObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Plage de lignes"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propertyObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet contenant des propri\xe9t\xe9s de lignes"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET ROW ATTRIBUTES"})," command applies the attributes defined in the ",(0,s.jsx)(n.em,{children:"propertyObj"})," to the rows in the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range. Si la plage contient des colonnes et des lignes, les attributs s'appliquent uniquement aux lignes."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"propertyObj"})," parameter lets you specify the attributes to apply to the rows in the ",(0,s.jsx)(n.em,{children:"rangeObj"}),". Ces attributs sont :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Hauteur de la ligne exprim\xe9e en pixels"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pageBreak"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Vrai pour ins\xe9rer un saut de page avant la premi\xe8re ligne de la plage, sinon faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"visible"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Vrai si la ligne est visible, sinon faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resizable"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Vrai si la ligne peut \xeatre redimensionn\xe9e, sinon faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Texte de l'en-t\xeate de la ligne"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour modifier la taille de la deuxi\xe8me ligne et d\xe9finir l'en-t\xeate, saisissez le code suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $row; $properties : Object\n \n$row:=VP Row("ViewProArea";1)\n$properties:=New object("height";75;"header";"June")\n \nVP SET ROW ATTRIBUTES($row;$properties)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(466e3).Z+"",width:"555",height:"131"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-column-attributes",children:"VP get column attributes"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},466e3:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/cmd_vpSetRowAttributes-4a46d2daac9f9c643381a86535798f2a.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);