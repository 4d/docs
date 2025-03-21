"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67984"],{214409:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-field","title":"VP SET FIELD","description":"VP SET FIELD ( rangeObj Pointer { ; formatPattern : Text } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-field.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-field","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-field","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-field.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-field","title":"VP SET FIELD"},"sidebar":"docs","previous":{"title":"VP SET DEFAULT STYLE","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-default-style"},"next":{"title":"VP SET FORMULA","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-set-formula"}}'),i=t("785893"),s=t("250065");let l={id:"vp-set-field",title:"VP SET FIELD"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET FIELD"})," ( ",(0,i.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,i.jsx)(n.em,{children:"field"})," : Pointer { ; ",(0,i.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rangeObj"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Objet plage"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"champ"}),(0,i.jsx)(n.td,{children:"Pointer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"R\xe9f\xe9rence au champ dans la structure virtuelle"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"formatPattern"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Format du champ"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP SET FIELD"})," command assigns a 4D database virtual field to a designated cell range."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) whose value you want to specify. If ",(0,i.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the specified field will be linked in each cell."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"field"})," parameter specifies a 4D database ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/formulas#referencing-fields-using-the-virtual-structure",children:"virtual field"})," to be assigned to the ",(0,i.jsx)(n.em,{children:"rangeObj"}),". The virtual structure name for ",(0,i.jsx)(n.em,{children:"field"})," can be viewed in the formula bar. If any of the cells in ",(0,i.jsx)(n.em,{children:"rangeObj"})," have existing content, it will be replaced by ",(0,i.jsx)(n.em,{children:"field"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"formatPattern"})," defines a pattern for the ",(0,i.jsx)(n.em,{children:"field"})," parameter. You can pass any valid ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/configuring#cell-format",children:"custom format"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);