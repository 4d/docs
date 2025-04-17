"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21537"],{769897:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-show-cell","title":"VP SHOW CELL","description":"VP SHOW CELL ( rangeObj Integer; hPos : Integer } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-show-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-show-cell","permalink":"/docs/es/20-R8/ViewPro/commands/vp-show-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-show-cell.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-show-cell","title":"VP SHOW CELL"},"sidebar":"docs","previous":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/es/20-R8/ViewPro/commands/vp-set-workbook-options"},"next":{"title":"VP SUSPEND COMPUTING","permalink":"/docs/es/20-R8/ViewPro/commands/vp-suspend-computing"}}'),l=i("785893"),r=i("250065");let a={id:"vp-show-cell",title:"VP SHOW CELL"},c=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function t(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP SHOW CELL"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"vPos"})," : Integer; ",(0,l.jsx)(n.em,{children:"hPos"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metros"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objeto rango"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vPos"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Posici\xf3n vertical de la vista de la celda o de la l\xednea"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"hPos"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Posici\xf3n horizontal de la vista de la celda o de la l\xednea"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.code,{children:"VP SHOW CELL"})," reposiciona vertical y horizontalmente la vista del ",(0,l.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["En ",(0,l.jsx)(n.em,{children:"rangeObj"}),", pase un rango de celdas como objeto para designar las celdas a visualizar. La vista del ",(0,l.jsx)(n.em,{children:"rangeObj"})," se posicionar\xe1 vertical u horizontalmente (es decir, donde aparezca ",(0,l.jsx)(n.em,{children:"rangeObj"}),") en funci\xf3n de los par\xe1metros ",(0,l.jsx)(n.em,{children:"vPos"})," y ",(0,l.jsx)(n.em,{children:"hPos"}),". El par\xe1metro ",(0,l.jsx)(n.em,{children:"vPos"})," define la posici\xf3n vertical deseada para mostrar el r",(0,l.jsx)(n.em,{children:"rangeObj"})," y el par\xe1metro ",(0,l.jsx)(n.em,{children:"hPos"})," define la posici\xf3n horizontal deseada para mostrar el ",(0,l.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Los siguientes selectores est\xe1n disponibles:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Selector"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"}),(0,l.jsxs)(n.th,{children:["Disponible con ",(0,l.jsx)(n.em,{children:"vPos"})]}),(0,l.jsxs)(n.th,{children:["Disponible con ",(0,l.jsx)(n.em,{children:"hPos"})]})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"vk position bottom"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n vertical a la parte inferior de la celda o de la l\xednea."}),(0,l.jsx)(n.td,{children:"X"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"vk position center"})}),(0,l.jsxs)(n.td,{children:["Alineaci\xf3n al centro. El alineamiento ser\xe1 a la celda, fila, o l\xedmite de columna seg\xfan la posici\xf3n indicada en la vista:",(0,l.jsx)(n.li,{children:"Posici\xf3n de la vista vertical - celda o fila"}),(0,l.jsx)(n.li,{children:"Posici\xf3n horizontal de la vista - celda o columna"})]}),(0,l.jsx)(n.td,{children:"X"}),(0,l.jsx)(n.td,{children:"X"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"vk position left"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n horizontal a la izquierda de la celda o columna"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"X"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"vk position nearest"})}),(0,l.jsxs)(n.td,{children:["Alineaci\xf3n al l\xedmite m\xe1s cercano (arriba, abajo, izquierda, derecha, centro). La alineaci\xf3n ser\xe1 a la celda, fila o l\xedmite de columna seg\xfan la posici\xf3n indicada en la vista:",(0,l.jsx)(n.li,{children:"Posici\xf3n de la vista vertical (arriba, centro, abajo) - celda o fila "}),(0,l.jsx)(n.li,{children:"Posici\xf3n de la vista horizontal (izquierda, centro, derecha) - celda o columna"})]}),(0,l.jsx)(n.td,{children:"X"}),(0,l.jsx)(n.td,{children:"X"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"vk position right"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n horizontal a la derecha de la celda o de la columna"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"X"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"vk position top"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n vertical a la parte superior de la celda o de la l\xednea"}),(0,l.jsx)(n.td,{children:"X"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Este comando s\xf3lo es eficaz si es posible reposicionar la vista. Por ejemplo, si el ",(0,l.jsx)(n.em,{children:"rangeObj"})," est\xe1 en la celda A1 (la primera columna y la primera l\xednea) de la hoja actual, reposicionar la vista no supondr\xe1 ninguna diferencia porque ya se han alcanzado los l\xedmites vertical y horizontal (es decir, no es posible desplazarse m\xe1s arriba o m\xe1s a la izquierda). Lo mismo ocurre si ",(0,l.jsx)(n.em,{children:"rangeObj"})," est\xe1 en la celda C3 y la vista se reposiciona al centro o abajo a la derecha. La vista permanece inalterada."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:"Quiere ver la celda en la columna AY, l\xednea 51 en el centro del \xe1rea 4D View Pro:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n // Mover la vista para mostrar la celda\nVP SHOW CELL($displayCell;vk position center;vk position center)\n'})}),"\n",(0,l.jsx)(n.p,{children:"Resultado:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(535525).Z+"",width:"621",height:"483"})}),"\n",(0,l.jsx)(n.p,{children:"El mismo c\xf3digo con los selectores vertical y horizontal cambiados para mostrar la misma celda posicionada en la parte superior derecha del \xe1rea 4D View Pro:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$displayCell:=VP Cell("myVPArea";50;50)\n  // Mover la vista para mostrar la celda\nVP SHOW CELL($displayCell;vk position top;vk position right)\n'})}),"\n",(0,l.jsx)(n.p,{children:"Resultado:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(246928).Z+"",width:"626",height:"489"})}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},535525:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/cmd_vpShowCell1-dbf90524114dcb917c52da621ad4719a.PNG"},246928:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/cmd_vpShowCell2-cd0206db4d87d4584c736a78e28ac8d4.PNG"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var s=i(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);