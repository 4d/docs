"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96286"],{965263:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"ViewPro/commands/vp-object-to-font","title":"VP Object to font","description":"VP Object to font ( fontObj Text","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-object-to-font.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-object-to-font","permalink":"/docs/ViewPro/commands/vp-object-to-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-object-to-font.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-object-to-font","title":"VP Object to font"},"sidebar":"docs","previous":{"title":"O","permalink":"/docs/commands-legacy/O"},"next":{"title":"P","permalink":"/docs/commands-legacy/P"}}'),i=t("785893"),l=t("250065");let o={id:"vp-object-to-font",title:"VP Object to font"},r=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP Object to font"})," ( ",(0,i.jsx)(n.em,{children:"fontObj"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fontObj"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Font object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Font shorthand"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP Object to font"})," command returns a font shorthand string from ",(0,i.jsx)(n.em,{children:"fontObj"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"fontObj"}),", pass an object containing the font properties. The following properties are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Possible values"}),(0,i.jsx)(n.th,{children:"Mandatory"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"family"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Specifies the font."}),(0,i.jsx)(n.td,{children:'any standard or generic font family. Ex. "Arial", "Helvetica", "serif", "arial,sans-serif"'}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Defines the size of the font.The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt"'}),(0,i.jsxs)(n.td,{children:["a number with one of the following units: ",(0,i.jsx)(n.li,{children:'"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"'}),"or one of the following:",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size large"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size larger"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size x large"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size xx large"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size small"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size smaller"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size x small"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size xx small"})})]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"style"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"The style of the font."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font style italic"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font style oblique"})})]}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Specifies font in small capital letters."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font variant small caps"})})}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weight"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Defines the thickness of the font."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 100"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 200"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 300"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 400"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 500"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 600"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 700"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 800"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 900"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight bold"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight bolder"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight lighter"})})]}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["This object can be created with the ",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-font-to-object",children:"VP Font to object"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:['The returned shorthand string can be assigned to the "font" property of a cell with the ',(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),", for example."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$cellStyle:=VP Get cell style($range)\n \n$font:=VP Font to object($cellStyle.font)\n$font.style:=vk font style oblique\n$font.variant:=vk font variant small caps\n$font.weight:=vk font weight bolder\n \n$cellStyle.font:=VP Object to font($font)\n//$cellStyle.font contains "bolder oblique small-caps 16pt arial"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let i={},l=s.createContext(i);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);