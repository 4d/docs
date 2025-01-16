"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90383"],{33191:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"ViewPro/commands/vp-show-cell","title":"VP SHOW CELL","description":"VP SHOW CELL ( rangeObj Integer; hPos : Integer } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-show-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-show-cell","permalink":"/docs/fr/ViewPro/commands/vp-show-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-show-cell.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-show-cell","title":"VP SHOW CELL"},"sidebar":"docs","previous":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/fr/ViewPro/commands/vp-set-workbook-options"},"next":{"title":"VP SUSPEND COMPUTING","permalink":"/docs/fr/ViewPro/commands/vp-suspend-computing"}}'),t=i("785893"),s=i("250065");let r={id:"vp-show-cell",title:"VP SHOW CELL"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SHOW CELL"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object { ; ",(0,t.jsx)(n.em,{children:"vPos"})," : Integer; ",(0,t.jsx)(n.em,{children:"hPos"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vPos"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Position verticale de la vue de la cellule ou de la ligne"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hPos"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Position horizontale de la vue de la cellule ou de la ligne"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SHOW CELL"})," command vertically and horizontally repositions the view of the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range of cells as an object to designate the cells to be viewed. The view of the ",(0,t.jsx)(n.em,{children:"rangeObj"})," will be positioned vertically or horizontally (i.e., where ",(0,t.jsx)(n.em,{children:"rangeObj"})," appears) based on the ",(0,t.jsx)(n.em,{children:"vPos"})," and ",(0,t.jsx)(n.em,{children:"hPos"})," parameters. The ",(0,t.jsx)(n.em,{children:"vPos"})," parameter defines the desired vertical position to display the ",(0,t.jsx)(n.em,{children:"rangeObj"}),", and the ",(0,t.jsx)(n.em,{children:"hPos"})," parameter defines the desired horizontal position to display the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Les s\xe9lecteurs suivants sont disponibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"S\xe9lecteur"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsxs)(n.th,{children:["Disponible avec ",(0,t.jsx)(n.em,{children:"vPos"})]}),(0,t.jsxs)(n.th,{children:["Disponible avec ",(0,t.jsx)(n.em,{children:"hPos"})]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk position bottom"})}),(0,t.jsx)(n.td,{children:"Alignement vertical vers le bas de la cellule ou de la ligne."}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk position center"})}),(0,t.jsxs)(n.td,{children:["Alignement vers le centre. The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,t.jsx)(n.li,{children:"Vertical view position - cell or row"}),(0,t.jsx)(n.li,{children:"Horizontal view position - cell or column"})]}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"X"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk position left"})}),(0,t.jsx)(n.td,{children:"Alignement horizontal vers la gauche de la cellule ou de la colonne"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"X"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk position nearest"})}),(0,t.jsxs)(n.td,{children:["Alignement vers la limite la plus proche (haut, bas, gauche, droite, centre). The alignment will be to the cell, row, or column limit according to the view position indicated:",(0,t.jsx)(n.li,{children:"Vertical view position (top, center, bottom) - cell or row "}),(0,t.jsx)(n.li,{children:"Horizontal view position (left, center, right) - cell or column"})]}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"X"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk position right"})}),(0,t.jsx)(n.td,{children:"Alignement horizontal vers la droite de la cellule ou de la colonne"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"X"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk position top"})}),(0,t.jsx)(n.td,{children:"Alignement vertical vers le haut de la cellule ou de la ligne"}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Cette commande n'est efficace que si le repositionnement de la vue est possible. For example, if the ",(0,t.jsx)(n.em,{children:"rangeObj"})," is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if ",(0,t.jsx)(n.em,{children:"rangeObj"})," is in cell C3 and the view is repositioned to the center or the bottom right. La vue demeure inchang\xe9e."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez visualiser la cellule dans la colonne AY, ligne 51, au centre de la zone 4D View Pro."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n // D\xe9placez la vue pour afficher la cellule\n VP SHOW CELL($displayCell;vk position center;vk position center)\n'})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(520016).Z+"",width:"621",height:"483"})}),"\n",(0,t.jsx)(n.p,{children:"Le m\xeame code ainsi que les s\xe9lecteurs verticaux et horizontaux ont \xe9t\xe9 modifi\xe9s pour afficher la m\xeame cellule en haut \xe0 droite de la zone 4D View Pro :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n  // D\xe9placez la vue pour afficher la cellule\n VP SHOW CELL($displayCell;vk position top;vk position right)\n'})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(332300).Z+"",width:"626",height:"489"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},520016:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/cmd_vpShowCell1-dbf90524114dcb917c52da621ad4719a.PNG"},332300:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/cmd_vpShowCell2-cd0206db4d87d4584c736a78e28ac8d4.PNG"},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var l=i(667294);let t={},s=l.createContext(t);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);