"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13473"],{331689:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/font-style-list","title":"FONT STYLE LIST","description":"FONT STYLE LIST ( fontFamily ; fontStyleList ; fontNameList )","source":"@site/versioned_docs/version-20-R9/commands-legacy/font-style-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-style-list","permalink":"/docs/commands/font-style-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-style-list.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"font-style-list","title":"FONT STYLE LIST","slug":"/commands/font-style-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FONT LIST","permalink":"/docs/commands/font-list"},"next":{"title":"GET SYSTEM FORMAT","permalink":"/docs/commands/get-system-format"}}'),l=t("785893"),i=t("250065");let a={id:"font-style-list",title:"FONT STYLE LIST",slug:"/commands/font-style-list",displayed_sidebar:"docs"},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"FONT STYLE LIST"})," ( ",(0,l.jsx)(n.em,{children:"fontFamily"})," ; ",(0,l.jsx)(n.em,{children:"fontStyleList"})," ; ",(0,l.jsx)(n.em,{children:"fontNameList"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontFamily"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Name of font family"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontStyleList"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"List of font styles supported by the font family"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fontNameList"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"List of complete font names supported by the font family"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"FONT STYLE LIST"})," command returns the list of font styles and the list of complete font names supported by the font family defined in the ",(0,l.jsx)(n.em,{children:"fontFamily"})," parameter. This command allows you to design interfaces handling fonts and font styles, particularly in the context of 4D Write Pro areas (see ",(0,l.jsx)(n.em,{children:"4D Write Pro Reference"}),")."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"fontFamily"}),", pass the name of the font family for which you want to know the supported font styles and names."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"fontStyleList"}),", you pass a text array to be filled with the list of font styles supported by the ",(0,l.jsx)(n.em,{children:"fontFamily"}),'. Styles are returned using their localized names (i.e. an "Italic" element will be returned as "It\xe1lico" on a Spanish system), so that you can build a localized "Style" pop-up menu, for example.']}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"fontNameList"}),", you pass a text array to be filled with the complete list of font names supported by the ",(0,l.jsx)(n.em,{children:"fontFamily"}),". Unlike the ",(0,l.jsx)(n.em,{children:"fontStyleList"})," array, the ",(0,l.jsx)(n.em,{children:"fontNameList"})," array returns non-localized values, i.e. font names based upon the system identification. Thus, font names will be independent from the system language. Elements of this array are strings intended to be used with the wk font 4D Write Pro attribute of the ",(0,l.jsx)(n.em,{children:"WP SET ATTRIBUTES"})," command. Using this feature, 4D Write Pro documents can store font names and then be opened on machines using any system language without font issues."]}),"\n",(0,l.jsxs)(n.p,{children:["If the ",(0,l.jsx)(n.em,{children:"fontFamily"})," is not found on the machine, arrays are returned empty. To get the list of font families available on the machine, use the ",(0,l.jsx)(n.a,{href:"/docs/commands/font-list",children:"FONT LIST"})," command."]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:'You want to select styles of the "Verdana" font family (if available):'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($aTfonts;0)\n\xa0ARRAY TEXT($aTStyles;0)\n\xa0ARRAY TEXT($aTnames;0)\n\xa0var $numStyle : Integer\n\xa0\n\xa0FONT LIST($aTfonts)\n\xa0$numStyle:=Find in array($aTfonts;"Verdana")\n\xa0If($numStyle#0)\n\xa0\xa0\xa0\xa0FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)\n\xa0End if\n\xa0\n\xa0\xa0//For example, resulting arrays are:\n\xa0\xa0//$aTStyles{1}="Normal"\n\xa0\xa0//$aTStyles{1}="Italic"\n\xa0\xa0//$aTStyles{1}="Bold"\n\xa0\xa0//$aTStyles{1}="Bold Italic"\n\xa0\n\xa0\xa0// $aTnames{1}="Verdana"\n\xa0\xa0// $aTnames{1}="Verdana Italic"\n\xa0\xa0// $aTnames{1}="Verdana Bold"\n\xa0\xa0// $aTnames{1}="Verdana Bold Italic"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/commands/font-list",children:"FONT LIST"})}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"1362"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);