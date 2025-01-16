"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72703"],{147052:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-print-info","title":"VP Get print info","description":"VP Get print info ( vpAreaName Integer } ) : Object","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-get-print-info.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-print-info","permalink":"/docs/ViewPro/commands/vp-get-print-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-print-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-print-info","title":"VP Get print info"},"sidebar":"docs","previous":{"title":"VP Get names","permalink":"/docs/ViewPro/commands/vp-get-names"},"next":{"title":"VP Get row attributes","permalink":"/docs/ViewPro/commands/vp-get-row-attributes"}}'),i=t("785893"),o=t("250065");let s={id:"vp-get-print-info",title:"VP Get print info"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP Get print info"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Object of printing information"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP Get print info"})," command returns an object containing the print attributes of the ",(0,i.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the the name of the 4D View Pro area in ",(0,i.jsx)(n.em,{children:"vpAreaName"}),". If you pass a name that does not exist, an error is returned."]}),"\n",(0,i.jsxs)(n.p,{children:["In the optional ",(0,i.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet (counting begins at 0) whose printing attributes you want returned.  If omitted or if you pass ",(0,i.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"This code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$pinfo:=VP Get print info("ViewProArea")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["... returns the print attributes of the 4D View Pro area set in the ",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'{\nbestFitColumns:false,\nbestFitRows:false,\nblackAndWhite:false,\ncentering:0,\ncolumnEnd:8,\ncolumnStart:0,\nfirstPageNumber:1,\nfitPagesTall:1,\nfitPagesWide:1,\nfooterCenter:"&BS.H.I.E.L.D. &A Sales Per Region",\nfooterCenterImage:,\nfooterLeft:,\nfooterLeftImage:,\nfooterRight:"page &P of &N",\nfooterRightImage:,\nheaderCenter:,\nheaderCenterImage:,\nheaderLeft:"&G",\nheaderLeftImage:logo.png,\nheaderRight:,\nheaderRightImage:,\nmargin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},\norientation:2,\npageOrder:0,\npageRange:,\npaperSize:{width:850,height:1100,kind:1},\nqualityFactor:2,\nrepeatColumnEnd:-1,\nrepeatColumnStart:-1,\nrepeatRowEnd:-1,\nrepeatRowStart:-1,\nrowEnd:24,\nrowStart:0,\nshowBorder:false,\nshowColumnHeader:0,\nshowGridLine:false,\nshowRowHeader:0,\nuseMax:true,\nwatermark:[],\nzoomFactor:1\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ViewPro/configuring#print-attributes",children:"4D View Pro Print Attributes"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);