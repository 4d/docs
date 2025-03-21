"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11117"],{647568:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-print-info","title":"VP SET PRINT INFO","description":"VP SET PRINT INFO ( vpAreaName Object { ; sheet : Integer }  )","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-set-print-info.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-print-info","permalink":"/docs/ViewPro/commands/vp-set-print-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-print-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-print-info","title":"VP SET PRINT INFO"},"sidebar":"docs","previous":{"title":"VP SET NUM VALUE","permalink":"/docs/ViewPro/commands/vp-set-num-value"},"next":{"title":"VP SET ROW ATTRIBUTES","permalink":"/docs/ViewPro/commands/vp-set-row-attributes"}}'),i=t("785893"),s=t("250065");let o={id:"vp-set-print-info",title:"VP SET PRINT INFO"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET PRINT INFO"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,i.jsx)(n.em,{children:"printInfo"})," : Object { ; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"printInfo"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Object containing printing attributes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP SET PRINT INFO"})," command defines the attributes to use when printing the ",(0,i.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the name of the 4D View Pro area to print in ",(0,i.jsx)(n.em,{children:"vpAreaName"}),". If you pass a name that does not exist, an error is returned."]}),"\n",(0,i.jsxs)(n.p,{children:["You can pass an object containing definitions for various printing attributes in the ",(0,i.jsx)(n.em,{children:"printInfo"})," parameter. To view the full list of the available attributes, see ",(0,i.jsx)(n.a,{href:"/docs/ViewPro/configuring#print-attributes",children:"Print Attributes"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the optional ",(0,i.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following code will print a 4D View Pro area to a PDF document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $printInfo : Object\n\n//declare print attributes object\n$printInfo:=New object\n\n//define print attributes\n$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"\n$printInfo.firstPageNumber:=1\n$printInfo.footerRight:="page &P of &N"\n$printInfo.orientation:=vk print page orientation landscape\n$printInfo.centering:=vk print centering horizontal\n$printInfo.columnStart:=0\n$printInfo.columnEnd:=8\n$printInfo.rowStart:=0\n$printInfo.rowEnd:=24\n\n$printInfo.showGridLine:=True\n\n//Add corporate logo\n$printInfo.headerLeftImage:=logo.png\n$printInfo.headerLeft:="&G"\n\n$printInfo.showRowHeader:=vk print visibility hide\n$printInfo.showColumnHeader:=vk print visibility hide\n$printInfo.fitPagesWide:=1\n$printInfo.fitPagesTall:=1\n\n//print PDF document\nVP SET PRINT INFO ("ViewProArea";$printInfo)\n\n//export the PDF\nVP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))\n'})}),"\n",(0,i.jsx)(n.p,{children:"The PDF:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(368953).Z+"",width:"815",height:"640"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ViewPro/configuring#print-attributes",children:"4D View Pro print attributes"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-print-info",children:"VP Get print info"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-print",children:"VP PRINT"})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},368953:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/cmd_vpSetPrintInfo-e383247d68f82d8918fb9f62a1a0039c.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);