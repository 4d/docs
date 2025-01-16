"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83555"],{131183:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"ViewPro/commands/vp-show-cell","title":"VP SHOW CELL","description":"VP SHOW CELL ( rangeObj Integer; hPos : Integer } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-show-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-show-cell","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-show-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-show-cell.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-show-cell","title":"VP SHOW CELL"},"sidebar":"docs","previous":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-workbook-options"},"next":{"title":"VP SUSPEND COMPUTING","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-suspend-computing"}}'),s=t("785893"),o=t("250065");let r={id:"vp-show-cell",title:"VP SHOW CELL"},l=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SHOW CELL"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object { ; ",(0,s.jsx)(n.em,{children:"vPos"})," : Integer; ",(0,s.jsx)(n.em,{children:"hPos"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto intervalo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Posi\xe7\xe3o vertical da vista da c\xe9lula ou linha"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Posi\xe7\xe3o horizontal da vista da c\xe9lula ou linha"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SHOW CELL"})," command vertically and horizontally repositions the view of the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of cells as an object to designate the cells to be viewed. The view of the ",(0,s.jsx)(n.em,{children:"rangeObj"})," will be positioned vertically or horizontally (i.e., where ",(0,s.jsx)(n.em,{children:"rangeObj"})," appears) based on the ",(0,s.jsx)(n.em,{children:"vPos"})," and ",(0,s.jsx)(n.em,{children:"hPos"})," parameters. The ",(0,s.jsx)(n.em,{children:"vPos"})," parameter defines the desired vertical position to display the ",(0,s.jsx)(n.em,{children:"rangeObj"}),", and the ",(0,s.jsx)(n.em,{children:"hPos"})," parameter defines the desired horizontal position to display the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Est\xe3o dispon\xedveis os seguintes selectores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Selector"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsxs)(n.th,{children:["Dispon\xedvel com ",(0,s.jsx)(n.em,{children:"vPos"})]}),(0,s.jsxs)(n.th,{children:["Dispon\xedvel com ",(0,s.jsx)(n.em,{children:"hPos"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position bottom"})}),(0,s.jsx)(n.td,{children:"Alinhamento vertical para o fundo da c\xe9lula ou linha."}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position center"})}),(0,s.jsxs)(n.td,{children:["Alinhamento com o centro. The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,s.jsx)(n.li,{children:"Vertical view position - cell or row"}),(0,s.jsx)(n.li,{children:"Horizontal view position - cell or column"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position left"})}),(0,s.jsx)(n.td,{children:"Alinhamento horizontal \xe0 esquerda da c\xe9lula ou coluna"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position nearest"})}),(0,s.jsxs)(n.td,{children:["Alinhamento ao limite mais pr\xf3ximo (superior, inferior, esquerda, direita, centro). The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,s.jsx)(n.li,{children:"Vertical view position (top, center, bottom) - cell or row "}),(0,s.jsx)(n.li,{children:"Horizontal view position (left, center, right) - cell or column"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position right"})}),(0,s.jsx)(n.td,{children:"Alinhamento horizontal \xe0 direita da c\xe9lula ou coluna"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position top"})}),(0,s.jsx)(n.td,{children:"Alinhamento vertical ao topo da c\xe9lula ou linha"}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Este comando s\xf3 \xe9 eficaz se o reposicionamento da vista for poss\xedvel. For example, if the ",(0,s.jsx)(n.em,{children:"rangeObj"})," is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if ",(0,s.jsx)(n.em,{children:"rangeObj"})," is in cell C3 and the view is repositioned to the center or the bottom right. A vista mant\xe9m-se inalterada."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"You want to view the cell in column AY, row 51 in the center of the 4D View Pro area:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n// Move the view to show the cell VP SHOW CELL($displayCell;vk position center;vk position center)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultados:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(523568).Z+"",width:"621",height:"483"})}),"\n",(0,s.jsx)(n.p,{children:"The same code with the vertical and horizontal selectors changed to show the same cell positioned at the top right of the 4D View Pro area:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n  // Move the view to show the cell VP SHOW CELL($displayCell;vk position top;vk position right)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultados:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(28170).Z+"",width:"626",height:"489"})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"})]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},523568:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cmd_vpShowCell1-dbf90524114dcb917c52da621ad4719a.PNG"},28170:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cmd_vpShowCell2-cd0206db4d87d4584c736a78e28ac8d4.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);