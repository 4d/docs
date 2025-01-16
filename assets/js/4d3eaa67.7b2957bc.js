"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77435"],{252134:function(e,n,l){l.r(n),l.d(n,{default:()=>A,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-border","title":"VP SET BORDER","description":"VP SET BORDER ( rangeObj Object  ; borderPosObj : Object )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-set-border.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-border","permalink":"/docs/20-R7/ViewPro/commands/vp-set-border","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-border.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-border","title":"VP SET BORDER"},"sidebar":"docs","previous":{"title":"VP SET BOOLEAN VALUE","permalink":"/docs/20-R7/ViewPro/commands/vp-set-boolean-value"},"next":{"title":"VP SET CELL STYLE","permalink":"/docs/20-R7/ViewPro/commands/vp-set-cell-style"}}'),r=l("785893"),d=l("250065");let t={id:"vp-set-border",title:"VP SET BORDER"},c=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET BORDER"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"borderStyleObj"})," : Object  ; ",(0,r.jsx)(n.em,{children:"borderPosObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Range object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"borderStyleObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Object containing border line style"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"borderPosObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Object containing border placement"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET BORDER"})," command applies the border style(s) defined in ",(0,r.jsx)(n.em,{children:"borderStyleObj"})," and ",(0,r.jsx)(n.em,{children:"borderPosObj"})," to the range defined in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range of cells where the border style will be applied. If the ",(0,r.jsx)(n.em,{children:"rangeObj"})," contains multiple cells, borders applied with ",(0,r.jsx)(n.code,{children:"VP SET BORDER"})," will be applied to the ",(0,r.jsx)(n.em,{children:"rangeObj"})," as a whole (as opposed to the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-cell-style",children:(0,r.jsx)(n.code,{children:"VP SET CELL STYLE"})})," command which applies borders to each cell of the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"). If a style sheet has already been applied, ",(0,r.jsx)(n.code,{children:"VP SET BORDER"})," will override the previously applied border settings for the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"borderStyleObj"})," parameter allows you to define the style for the lines of the border. The ",(0,r.jsx)(n.em,{children:"borderStyleObj"})," supports the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Possible values"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Defines the color of the border. Default = black."}),(0,r.jsx)(n.td,{children:'CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"style"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"Defines the style of the border. Default = empty."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style dash dot"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style dash dot dot"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style dashed"})})," ",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style dotted"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style double"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style empty"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style hair"})})," ",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style medium"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style medium dash dot"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style medium dash dot dot"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style medium dashed"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style slanted dash dot"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style thick"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk line style thin"})})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can define the position of the ",(0,r.jsx)(n.em,{children:"borderStyleObj"})," (i.e., where the line is applied) with the ",(0,r.jsx)(n.em,{children:"borderPosObj"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"all"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to all borders."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"left"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to left border."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"top"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to top border."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"right"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to right border."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bottom"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to bottom border."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"outline"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to outer borders only."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inside"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to inner borders only."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"innerHorizontal"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to inner horizontal borders only."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"innerVertical"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Border line style applied to inner vertical borders only."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"This code produces a border around the entire range:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$border:=New object("color";"red";"style";vk line style thick)\n$option:=New object("outline";True)\nVP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:l(10292).Z+"",width:"391",height:"166"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["This code demonstrates the difference between ",(0,r.jsx)(n.code,{children:"VP SET BORDER"})," and setting borders with the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-cell-style",children:(0,r.jsx)(n.code,{children:"VP SET CELL STYLE"})})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Set borders using VP SET BORDER\n$border:=New object("color";"red";"style";vk line style thick)\n$option:=New object("outline";True)\nVP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)\n \n// // Set borders using VP SET CELL STYLE\n$cellStyle:=New object\n$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)\n$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)\nVP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:l(628731).Z+"",width:"432",height:"158"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"})})]})}function A(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},10292:function(e,n,l){l.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},628731:function(e,n,l){l.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return t}});var s=l(667294);let r={},d=s.createContext(r);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);