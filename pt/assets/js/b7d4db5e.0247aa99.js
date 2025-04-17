"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38623"],{962205:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/font-file","title":"Font file","description":"Font file ( fontFamily {; fontStyle} ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/font-file.md","sourceDirName":"commands-legacy","slug":"/commands/font-file","permalink":"/docs/pt/20-R8/commands/font-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"font-file","title":"Font file","slug":"/commands/font-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current system user","permalink":"/docs/pt/20-R8/commands/current-system-user"},"next":{"title":"FONT LIST","permalink":"/docs/pt/20-R8/commands/font-list"}}'),l=t("785893"),r=t("250065");let d={id:"font-file",title:"Font file",slug:"/commands/font-file",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Font file"})," ( ",(0,l.jsx)(n.em,{children:"fontFamily"})," {; ",(0,l.jsx)(n.em,{children:"fontStyle"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe2metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontFamily"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Name of font family"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontStyle"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Font style: 0=normal (default), 1=bold, 2=italic"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Null, Object"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Font file object"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Font file"})," command returns an object describing the font file in your OS corresponding to the ",(0,l.jsx)(n.em,{children:"fontFamily"})," and, optionally, ",(0,l.jsx)(n.em,{children:"fontStyle"})," you passed in parameter."]}),"\n",(0,l.jsxs)(n.p,{children:["If the font designated by ",(0,l.jsx)(n.em,{children:"fontFamily"})," is not installed in the OS, the command returns a ",(0,l.jsx)(n.em,{children:"Null"})," object."]}),"\n",(0,l.jsxs)(n.p,{children:["The optional ",(0,l.jsx)(n.em,{children:"fontStyle"})," parameter allows to define a style variation to get. You can pass one or a combination of the following constants from the ",(0,l.jsx)(n.em,{children:"Font Styles"})," theme (any other value is ignored):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constant"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Bold"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Italic"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Plain"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,l.jsx)(n.p,{children:"You want to make sure the font used in a text area is available on the user system for a correct display:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $fontName : Text\n\xa0var $fontStyle : Integer\n\xa0var $fontFile : Object\n\xa0$fontName:=OBJECT Get font(*;"vText")\n\xa0$fontStyle:=OBJECT Get font style(*;"vText")\n\xa0$fontFile:=Font file($fontName;$fontStyle)\n\xa0If($fontFile=Null)\n\xa0\xa0\xa0\xa0ALERT("Defined font is not available, please install: "+$fontName)\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/pt/20-R8/commands/object-set-font",children:"OBJECT SET FONT"})}),"\n",(0,l.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero do comando"}),(0,l.jsx)(n.td,{children:"1700"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread-seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let l={},r=s.createContext(l);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);