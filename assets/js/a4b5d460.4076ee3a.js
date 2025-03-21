"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58021"],{85627:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/text-to-array","title":"TEXT TO ARRAY","description":"TEXT TO ARRAY ( varText ; arrText ; width ; fontName ; fontSize {; fontStyle {; *}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/text-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-array","permalink":"/docs/commands/text-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"text-to-array","title":"TEXT TO ARRAY","slug":"/commands/text-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SORT ARRAY","permalink":"/docs/commands/sort-array"},"next":{"title":"Backup","permalink":"/docs/commands/theme/Backup"}}'),r=n("785893"),s=n("250065");let a={id:"text-to-array",title:"TEXT TO ARRAY",slug:"/commands/text-to-array",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"TEXT TO ARRAY"})," ( ",(0,r.jsx)(t.em,{children:"varText"})," ; ",(0,r.jsx)(t.em,{children:"arrText"})," ; ",(0,r.jsx)(t.em,{children:"width"})," ; ",(0,r.jsx)(t.em,{children:"fontName"})," ; ",(0,r.jsx)(t.em,{children:"fontSize"})," {; ",(0,r.jsx)(t.em,{children:"fontStyle"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"varText"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Original text to be divided"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"arrText"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Array containing the text divided into words or lines"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"width"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Maximum width of string (in pixels)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fontName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of font"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fontSize"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Size of font"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fontStyle"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Style of font"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = interpret text as multistyle"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"TEXT TO ARRAY"})," command transforms a text variable into a text array. The original varText text (styled or not) is divided and each part becomes an element of the ",(0,r.jsx)(t.em,{children:"arrText"})," array that is returned by the command. This command can be used for example to fill pages or columns with text of a set size."]}),"\n",(0,r.jsx)(t.p,{children:'The original text is divided into "words" based on a line size defined by the command parameters and which takes any styles used into account.'}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"varText"})," parameter, you pass the text to be divided into array elements. This text may or may not be multistyle. Some parameters are ignored when the text is multistyle."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"arrText"})," parameter, you pass the name of the array to be filled by the divided text."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"width"}),' parameter, you pass a size in pixels indicating the maximum line length to measure when dividing the text. For the entire text, the command evaluates the maximum number of words that can "fit" into this width based on the graphic attributes of the text (font, style).']}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If it is multistyle text, the styles of the original text are taken into account and the following parameters are ignored if they are passed. In this case, the lines of text in the resulting array keep their original styles (so that they can be printed one by one through a text or string variable for example)."}),"\n",(0,r.jsx)(t.li,{children:"If it is raw text (no styles), you must pass all the parameters so that the command is able to calculate the length of the lines."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Each array element must contain at least one word. If the ",(0,r.jsx)(t.em,{children:"width"})," passed is too small for the dividing rule to be strictly respected, the array is filled as close as possible according to the parameters and the OK variable is set to 0. For example, if you pass a width of 3 pixels, it is probable that most of the words will be bigger than this length. In this case, the OK variable is set to 0.",(0,r.jsx)(t.br,{}),"\nThis also means that the theoretical maximum size of the array returned is equal to the number of words found in ",(0,r.jsx)(t.em,{children:"varText"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"fontName"})," and ",(0,r.jsx)(t.em,{children:"fontSize"})," parameters, you pass the font name and size with which ",(0,r.jsx)(t.em,{children:"varText"})," must be evaluated by the command in order to divide it. These parameters are mandatory in the case of raw text."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"fontStyle"})," parameter, you pass one or more constants from the ",(0,r.jsx)(t.em,{children:"Font Styles"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bold"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Italic"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Plain"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Underline"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"This parameter is optional; when it is omitted, the Plain style is used."}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, if passed, forces the ",(0,r.jsx)(t.em,{children:"fontName"}),", ",(0,r.jsx)(t.em,{children:"fontSize"})," and/or ",(0,r.jsx)(t.em,{children:"fontStyle"})," parameters to be taken into account for multistyle text when these parameters are not defined in the original text. However, if these parameters are defined in the original text, then the parameters passed to the command are ignored in all cases."]}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"We want to divide a multistyle text into lines with a maximum size of 200 pixels:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Plain;*)\n\xa0\xa0// the Arial, 20, and Normal attributes are only taken into account if they are not defined in the text\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"We want to divide raw text into lines with a maximum size of 350 pixels in Bodoni Bold font, size 14. Since the command does not work correctly if the font is not available, it is important to check for its presence:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT($FontList;0)\n\xa0FONT LIST($FontList)\n\xa0$Font:="Bodoni"\n\xa0$p:=Find in array($FontList;$Font)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)\n\xa0Else\n\xa0\xa0// use another font\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.p,{children:"Multistyle text must be printed without any styles in Arial Normal font, size 12 with a maximum width of 600 pixels:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// we transform the multistyle text into raw text\n\xa0$RawText:=OBJECT Get plain text(vText)\n\xa0\xa0// we fill the array\n\xa0TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(t.p,{children:"You need to print in a 400-pixel wide area, a text with a maximum of 80 lines and using the largest font possible (without exceeding 24 points). You can write:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT(TextArray;0)\n\xa0$Size:=24\n\xa0Repeat\n\xa0\xa0\xa0\xa0TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)\n\xa0\xa0\xa0\xa0$Size:=$Size-1\n\xa0\xa0\xa0\xa0$n:=Size of array(TextArray)\n\xa0Until($n<=80)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/split-string",children:"Split string"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/st-get-text",children:"ST Get text"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1149"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var i=n(667294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);