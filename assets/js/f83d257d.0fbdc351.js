"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81640"],{928757:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-active-cell","title":"VP Get active cell","description":"VP Get active cell (  vpAreaName Integer } ) : Object","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-active-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-active-cell","permalink":"/docs/ViewPro/commands/vp-get-active-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-active-cell.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-active-cell","title":"VP Get active cell"},"sidebar":"docs","previous":{"title":"G","permalink":"/docs/commands-legacy/G"},"next":{"title":"VP Get binding path","permalink":"/docs/ViewPro/commands/vp-get-binding-path"}}'),r=t("785893"),c=t("250065");let i={id:"vp-get-active-cell",title:"VP Get active cell"},l=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get active cell"})," (  ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Range object of single cell"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get active cell"})," command returns a new range object referencing the cell which has the focus and where new data will be entered (the active cell)."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(813419).Z+"",width:"548",height:"359"})}),"\n",(0,r.jsx)(n.p,{children:"The following code will retrieve the coordinates of the active cell:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$activeCell:=VP Get active cell("myVPArea")\n \n  //returns a range object containing: \n  //$activeCell.ranges[0].column=3\n  //$activeCell.ranges[0].row=4\n  //$activeCell.ranges[0].sheet=0\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},813419:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpGetActiveCell-8ebb4e93425aab7ecfcd2a337e26e6a9.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},c=s.createContext(r);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);