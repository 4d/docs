"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67412"],{804677:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-show-cell","title":"VP SHOW CELL","description":"VP SHOW CELL ( rangeObj Integer; hPos : Integer } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-show-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-show-cell","permalink":"/docs/pt/ViewPro/commands/vp-show-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-show-cell.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-show-cell","title":"VP SHOW CELL"},"sidebar":"docs","previous":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/pt/ViewPro/commands/vp-set-workbook-options"},"next":{"title":"VP SUSPEND COMPUTING","permalink":"/docs/pt/ViewPro/commands/vp-suspend-computing"}}'),s=i("785893"),o=i("250065");let r={id:"vp-show-cell",title:"VP SHOW CELL"},l=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SHOW CELL"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object { ; ",(0,s.jsx)(n.em,{children:"vPos"})," : Integer; ",(0,s.jsx)(n.em,{children:"hPos"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto intervalo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Posi\xe7\xe3o vertical da vista da c\xe9lula ou linha"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Posi\xe7\xe3o horizontal da vista da c\xe9lula ou linha"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.code,{children:"VP SHOW CELL"}),"  verticalmente e horizontalmente reposiciona a vis\xe3o do ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of cells as an object to designate the cells to be viewed. The view of the ",(0,s.jsx)(n.em,{children:"rangeObj"})," will be positioned vertically or horizontally (i.e., where ",(0,s.jsx)(n.em,{children:"rangeObj"})," appears) based on the ",(0,s.jsx)(n.em,{children:"vPos"})," and ",(0,s.jsx)(n.em,{children:"hPos"})," parameters. The ",(0,s.jsx)(n.em,{children:"vPos"})," parameter defines the desired vertical position to display the ",(0,s.jsx)(n.em,{children:"rangeObj"}),", and the ",(0,s.jsx)(n.em,{children:"hPos"})," parameter defines the desired horizontal position to display the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Est\xe3o dispon\xedveis os seguintes selectores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Selector"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsxs)(n.th,{children:["Dispon\xedvel com ",(0,s.jsx)(n.em,{children:"vPos"})]}),(0,s.jsxs)(n.th,{children:["Dispon\xedvel com ",(0,s.jsx)(n.em,{children:"hPos"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position bottom"})}),(0,s.jsx)(n.td,{children:"Alinhamento vertical para o fundo da c\xe9lula ou linha."}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position center"})}),(0,s.jsxs)(n.td,{children:["Alinhamento com o centro. The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,s.jsx)(n.li,{children:"Vertical view position - cell or row"}),(0,s.jsx)(n.li,{children:"Horizontal view position - cell or column"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position left"})}),(0,s.jsx)(n.td,{children:"Alinhamento horizontal \xe0 esquerda da c\xe9lula ou coluna"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position nearest"})}),(0,s.jsxs)(n.td,{children:["Alinhamento ao limite mais pr\xf3ximo (superior, inferior, esquerda, direita, centro). The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,s.jsx)(n.li,{children:"Vertical view position (top, center, bottom) - cell or row "}),(0,s.jsx)(n.li,{children:"Horizontal view position (left, center, right) - cell or column"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position right"})}),(0,s.jsx)(n.td,{children:"Alinhamento horizontal \xe0 direita da c\xe9lula ou coluna"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk position top"})}),(0,s.jsx)(n.td,{children:"Alinhamento vertical ao topo da c\xe9lula ou linha"}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Este comando s\xf3 \xe9 eficaz se o reposicionamento da vista for poss\xedvel. For example, if the ",(0,s.jsx)(n.em,{children:"rangeObj"})," is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if ",(0,s.jsx)(n.em,{children:"rangeObj"})," is in cell C3 and the view is repositioned to the center or the bottom right. A vista mant\xe9m-se inalterada."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Voc\xea deseja visualizar a c\xe9lula na coluna AY, linha 51, no centro da \xe1rea do 4D View Pro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n// Mova a vista para mostrar a c\xe9lula\nVP MOS, C\xc9LLL($displayCell;vk position center;vk position center)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultados:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(430515).Z+"",width:"621",height:"483"})}),"\n",(0,s.jsx)(n.p,{children:"O mesmo c\xf3digo com os seletores vertical e horizontal alterados para mostrar a mesma c\xe9lula posicionada no canto superior direito da \xe1rea do 4D View Pro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n  // Mova a visualiza\xe7\xe3o para mostrar a c\xe9lula\nVP SHOW CELL($displayCell;vk position top;vk position right)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultados:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(526657).Z+"",width:"626",height:"489"})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},430515:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/cmd_vpShowCell1-dbf90524114dcb917c52da621ad4719a.PNG"},526657:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/cmd_vpShowCell2-cd0206db4d87d4584c736a78e28ac8d4.PNG"},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(667294);let s={},o=t.createContext(s);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);