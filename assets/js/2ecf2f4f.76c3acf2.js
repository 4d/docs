"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33383"],{128697:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/font-file","title":"Font file","description":"Font file ( fontFamily {; fontStyle} ) : any","source":"@site/versioned_docs/version-20-R8/commands-legacy/font-file.md","sourceDirName":"commands-legacy","slug":"/commands/font-file","permalink":"/docs/commands/font-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"font-file","title":"Font file","slug":"/commands/font-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current system user","permalink":"/docs/commands/current-system-user"},"next":{"title":"FONT LIST","permalink":"/docs/commands/font-list"}}'),l=t("785893"),i=t("250065");let r={id:"font-file",title:"Font file",slug:"/commands/font-file",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Font file"})," ( ",(0,l.jsx)(n.em,{children:"fontFamily"})," {; ",(0,l.jsx)(n.em,{children:"fontStyle"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontFamily"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Name of font family"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontStyle"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Font style: 0=normal (default), 1=bold, 2=italic"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Function result"}),(0,l.jsx)(n.td,{children:"Null, Object"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Font file object"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Font file"})," command returns an object describing the font file in your OS corresponding to the ",(0,l.jsx)(n.em,{children:"fontFamily"})," and, optionally, ",(0,l.jsx)(n.em,{children:"fontStyle"})," you passed in parameter."]}),"\n",(0,l.jsxs)(n.p,{children:["If the font designated by ",(0,l.jsx)(n.em,{children:"fontFamily"})," is not installed in the OS, the command returns a ",(0,l.jsx)(n.em,{children:"Null"})," object."]}),"\n",(0,l.jsxs)(n.p,{children:["The optional ",(0,l.jsx)(n.em,{children:"fontStyle"})," parameter allows to define a style variation to get. You can pass one or a combination of the following constants from the ",(0,l.jsx)(n.em,{children:"Font Styles"})," theme (any other value is ignored):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constant"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Bold"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Italic"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Plain"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"You want to make sure the font used in a text area is available on the user system for a correct display:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $fontName : Text\n\xa0var $fontStyle : Integer\n\xa0var $fontFile : Object\n\xa0$fontName:=OBJECT Get font(*;"vText")\n\xa0$fontStyle:=OBJECT Get font style(*;"vText")\n\xa0$fontFile:=Font file($fontName;$fontStyle)\n\xa0If($fontFile=Null)\n\xa0\xa0\xa0\xa0ALERT("Defined font is not available, please install: "+$fontName)\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/commands/object-set-font",children:"OBJECT SET FONT"})}),"\n",(0,l.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"1700"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);