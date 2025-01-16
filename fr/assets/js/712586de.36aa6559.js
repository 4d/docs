"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17064"],{632830:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"ViewPro/commands/vp-font-to-object","title":"VP Font to object","description":"VP Font to object (  font Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-font-to-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-font-to-object","permalink":"/docs/fr/ViewPro/commands/vp-font-to-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-font-to-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-font-to-object","title":"VP Font to object"},"sidebar":"docs","previous":{"title":"VP FLUSH COMMANDS","permalink":"/docs/fr/ViewPro/commands/vp-flush-commands"},"next":{"title":"G","permalink":"/docs/fr/commands-legacy/G"}}'),r=n("785893"),s=n("250065");let c={id:"vp-font-to-object",title:"VP Font to object"},i=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Font to object"})," (  ",(0,r.jsx)(t.em,{children:"font"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tres"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"font"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Cha\xeene raccourcie pour la police (shorthand)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Objet police"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Font to object"})," utility command returns an object from a font shorthand string. ."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"font"}),' parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings ',(0,r.jsx)(t.a,{href:"https://www.w3schools.com/cssref/pr_font_font.asp",children:"in this page"})," for example."]}),"\n",(0,r.jsxs)(t.p,{children:["L'objet retourn\xe9 contient les attributs de police d\xe9finis comme propri\xe9t\xe9s. For more information about the available properties, see the ",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-object-to-font",children:"VP Object to font"})," command."]}),"\n",(0,r.jsx)(t.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(t.p,{children:"Le code suivant :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'$font:=VP Font to object("16pt arial")\n'})}),"\n",(0,r.jsx)(t.p,{children:"retournera l'objet $font suivant :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"{\n\nfamily:arial\nsize:16pt\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(t.p,{children:["See example for ",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-object-to-font",children:(0,r.jsx)(t.code,{children:"VP Object to font"})}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var o=n(667294);let r={},s=o.createContext(r);function c(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);