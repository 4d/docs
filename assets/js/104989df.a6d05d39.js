"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45333"],{605267:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/wa-set-page-content","title":"WA SET PAGE CONTENT","description":"WA SET PAGE CONTENT ( { ;} object ; content ; baseURL* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-set-page-content.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-page-content","permalink":"/docs/20-R7/commands/wa-set-page-content","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-page-content.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-set-page-content","title":"WA SET PAGE CONTENT","slug":"/commands/wa-set-page-content","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET EXTERNAL LINKS FILTERS","permalink":"/docs/20-R7/commands/wa-set-external-links-filters"},"next":{"title":"WA SET PREFERENCE","permalink":"/docs/20-R7/commands/wa-set-preference"}}'),r=t("785893"),i=t("250065");let a={id:"wa-set-page-content",title:"WA SET PAGE CONTENT",slug:"/commands/wa-set-page-content",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Compatibility Note",id:"compatibility-note",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WA SET PAGE CONTENT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"content"})," ; ",(0,r.jsx)(n.em,{children:"baseURL"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"content"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"HTML source code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"baseURL"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"URL for relative references (Mac OS)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,r.jsxs)(n.p,{children:['This historical command is no longer really useful. As security is tightened in modern browsers, there are more and more restrictions on modifying page content "on the fly". A more reliable approach is to create a local file (e.g. in the temporary folder) and use ',(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/wa-open-url",children:"WA OPEN URL"})," to load it. To clear the content, just call ",(0,r.jsx)(n.strong,{children:"WA OPEN URL"}),"(myArea;\u201Dabout:blank\u201D)."]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The WA SET PAGE CONTENT command replaces the page displayed in the Web area designated by the ",(0,r.jsx)(n.em,{children:"*"})," and ",(0,r.jsx)(n.em,{children:"object"})," parameters by the HTML code passed in the ",(0,r.jsx)(n.em,{children:"content"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"baseURL"})," parameter specifies, under Mac OS, a base URL that will be added in front of any relative links found in the page."]}),"\n",(0,r.jsx)(n.p,{children:"Under Windows, this parameter has no effect and the base URL is not specified so it is not possible to use relative references on this platform."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' Under Windows, you cannot call this command unless a page has already been loaded previously into the Web area. If necessary, you can pass the "about:blank" URL in order to load a blank page.']}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'Displays "Hello world!" and sets a "file:///" base URL (Mac OS only):'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0WA SET PAGE CONTENT(MyWArea;"\n\n[Hello World!]\n\n";"file:///")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/wa-get-page-content",children:"WA Get page content"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1037"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);