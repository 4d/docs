"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47658"],{486905:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"ViewPro/commands/vp-show-cell","title":"VP SHOW CELL","description":"VP SHOW CELL ( rangeObj Integer; hPos : Integer } )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-show-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-show-cell","permalink":"/docs/ViewPro/commands/vp-show-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-show-cell.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-show-cell","title":"VP SHOW CELL"},"sidebar":"docs","previous":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/ViewPro/commands/vp-set-workbook-options"},"next":{"title":"VP SUSPEND COMPUTING","permalink":"/docs/ViewPro/commands/vp-suspend-computing"}}'),s=t("785893"),l=t("250065");let r={id:"vp-show-cell",title:"VP SHOW CELL"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SHOW CELL"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object { ; ",(0,s.jsx)(n.em,{children:"vPos"})," : Integer; ",(0,s.jsx)(n.em,{children:"hPos"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Range object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Vertical view position of cell or row"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Horizontal view position of cell or row"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SHOW CELL"})," command vertically and horizontally repositions the view of the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of cells as an object to designate the cells to be viewed. The view of the ",(0,s.jsx)(n.em,{children:"rangeObj"})," will be positioned vertically or horizontally (i.e., where ",(0,s.jsx)(n.em,{children:"rangeObj"})," appears) based on the ",(0,s.jsx)(n.em,{children:"vPos"})," and ",(0,s.jsx)(n.em,{children:"hPos"})," parameters. The ",(0,s.jsx)(n.em,{children:"vPos"})," parameter defines the desired vertical position to display the ",(0,s.jsx)(n.em,{children:"rangeObj"}),", and the ",(0,s.jsx)(n.em,{children:"hPos"})," parameter defines the desired horizontal position to display the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The following selectors are available:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Selector"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsxs)(n.th,{children:["Available with ",(0,s.jsx)(n.em,{children:"vPos"})]}),(0,s.jsxs)(n.th,{children:["Available with ",(0,s.jsx)(n.em,{children:"hPos"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position bottom"})}),(0,s.jsx)(n.td,{children:"Vertical alignment to the bottom of cell or row."}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position center"})}),(0,s.jsxs)(n.td,{children:["Alignment to the center. The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,s.jsx)(n.li,{children:"Vertical view position - cell or row"}),(0,s.jsx)(n.li,{children:"Horizontal view position - cell or column"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position left"})}),(0,s.jsx)(n.td,{children:"Horizontal alignment to the left of the cell or column"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position nearest"})}),(0,s.jsxs)(n.td,{children:["Alignment to the closest limit (top, bottom, left, right, center). The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,s.jsx)(n.li,{children:"Vertical view position (top, center, bottom) - cell or row "}),(0,s.jsx)(n.li,{children:"Horizontal view position (left, center, right) - cell or column"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position right"})}),(0,s.jsx)(n.td,{children:"Horizontal alignment to the right of the cell or column"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position top"})}),(0,s.jsx)(n.td,{children:"Vertical alignment to the top of cell or row"}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This command is only effective if repositioning the view is possible. For example, if the ",(0,s.jsx)(n.em,{children:"rangeObj"})," is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if ",(0,s.jsx)(n.em,{children:"rangeObj"})," is in cell C3 and the view is repositioned to the center or the bottom right. The view remains unaltered."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to view the cell in column AY, row 51 in the center of the 4D View Pro area:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n// Move the view to show the cell\nVP SHOW CELL($displayCell;vk position center;vk position center)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(956868).Z+"",width:"621",height:"483"})}),"\n",(0,s.jsx)(n.p,{children:"The same code with the vertical and horizontal selectors changed to show the same cell positioned at the top right of the 4D View Pro area:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n  // Move the view to show the cell\nVP SHOW CELL($displayCell;vk position top;vk position right)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(894089).Z+"",width:"626",height:"489"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},956868:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cmd_vpShowCell1-dbf90524114dcb917c52da621ad4719a.PNG"},894089:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cmd_vpShowCell2-cd0206db4d87d4584c736a78e28ac8d4.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);