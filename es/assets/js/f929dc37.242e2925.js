"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65459"],{402046:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>o,default:()=>c,assets:()=>A,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/count-list-items","title":"Count list items","description":"Count list items ( { ;} lista {; } ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/count-list-items.md","sourceDirName":"commands-legacy","slug":"/commands/count-list-items","permalink":"/docs/es/commands/count-list-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-list-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"count-list-items","title":"Count list items","slug":"/commands/count-list-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Copy list","permalink":"/docs/es/commands/copy-list"},"next":{"title":"DELETE FROM LIST","permalink":"/docs/es/commands/delete-from-list"}}'),i=n("785893"),l=n("250065");let d={id:"count-list-items",title:"Count list items",slug:"/commands/count-list-items",displayed_sidebar:"docs"},o=void 0,A={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function r(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Count list items"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"lista"})," {; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Operador"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lista"}),(0,i.jsx)(s.td,{children:"Integer, Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Operador"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si se omite (por defecto): Devuelve los elementos visibles (desplegados) de la lista Si se especifica: Devuelve todos los elementos de la lista"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resultado"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"N\xfamero de elementos visibles de la lista (desplegados) (si se omite el segundo *) o n\xfamero total de elementos de la lista (si se presenta el segundo *)"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["El comando Count list items devuelve el n\xfamero actual de elementos visibles o el n\xfamero total de elementos en la lista cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,i.jsx)(s.em,{children:"lista"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,i.jsx)(s.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, usted indica que el par\xe1metro ",(0,i.jsx)(s.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (",(0,i.jsx)(s.em,{children:"refLista"}),"). Si utiliza una sola representaci\xf3n de lista o trabaja con todos los elementos (pasa el segundo *), puede utilizar cualquiera de las dos sintaxis. Por el contrario, si usted utiliza varias representaciones de la misma lista y trabaja con los elementos visibles (el segundo * se omite), la sintaxis basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propia configuraci\xf3n desplegada/contra\xedda."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota:"})," si utiliza el car\xe1cter @ en el nombre del objeto de la lista y el formulario contiene varias listas que coinciden con este nombre, el comando Count list items se aplicar\xe1 al primer objeto cuyo nombre corresponda."]}),"\n",(0,i.jsx)(s.p,{children:"Utilice el segundo par\xe1metro * para determinar que tipo de informaci\xf3n se devolver\xe1. Cuando se pasa este par\xe1metro, el comando devuelve el n\xfamero total de elementos presentes en la lista, sin importar si la lista est\xe1 desplegada o contra\xedda."}),"\n",(0,i.jsx)(s.p,{children:"Cuando se omite este par\xe1metro, el comando devuelve el n\xfamero de elementos visibles, dependiendo del estado expandido/contra\xeddo de la lista y sus sublistas."}),"\n",(0,i.jsx)(s.p,{children:"Aplique este comando a una lista mostrada en un formulario."}),"\n",(0,i.jsx)(s.h4,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsxs)(s.p,{children:["Ac\xe1 tenemos una lista llamada ",(0,i.jsx)(s.em,{children:"hList"})," mostrada en el entorno Aplicaci\xf3n:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(494991).Z+"",width:"180",height:"176"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlNbItems:=Count list items(hList)\xa0// en este punto $vlNbItems vale 8\n\xa0$vlNbTItems:=Count list items(hList;*)\xa0//$vlNbTItems tambi\xe9n vale 8\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(425581).Z+"",width:"178",height:"177"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlNbItems:=Count list items(hList)\xa0// en este punto $vlNbItems vale 2\n\xa0$vlNbTItems:=Count list items(hList;*)\xa0//$vlNbTItems contin\xfaa valiendo 8\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(281325).Z+"",width:"179",height:"175"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlNbItems:=Count list items(hList)\xa0// en este punto $vlNbItems vale 5\n\xa0$vlNbTItems:=Count list items(hList;*)\xa0//$vlNbTItems contin\xfaa valiendo 8\n"})}),"\n",(0,i.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/commands/list-item-position",children:"List item position"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/commands/selected-list-items",children:"Selected list items"})]}),"\n",(0,i.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero de comando"}),(0,i.jsx)(s.td,{children:"380"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hilo seguro"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},494991:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/png;base64,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"},425581:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACxCAIAAADvfHCRAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHHgoFHwbrZ50AAATqSURBVHic7ds9aBtnAIfxV+WGE7hwBhesrYIUItEONgRcjQIvKg0kpktDJiVeTLtYdPJUTIeiZGjx4qAloV2KnaFEHQzqUHA6lHqrOxjUUaMgBt9w4L7SOWks/U+q7ZP19fwQ0uVQpBfuyek+3iROXp0Y4Lx3hj0AjCKygOCEL9W92nDHgdFRWM47b/5w905hiEPBQASm0WjYf/uu67692nVcP/Dtc8fbfd+v/bZv+BGBRBYQyAICWUBwulfV9mqHfx92r8/czOSX84MfEoZPZGGbWPtirXv91vdbZDE5Arnxz/T5EcnmSzGPBqMgMOXH5VYZESKyCF4/OpYxAQKz8fWG3VVUnlWiNmvk3uKT1R/tI/3+YrjQ97uqq4kzq9VLDxgDF5jNbzdTqVT2g2xqPrX7y64sQ/+8NI+bPzxuXfTM3d3c390I1/T+usL26em2fa0+SGw++qqwfuOKw8cABK09xOJHi57nua6bTCbt9t8/2M8t5DpC0Fn4x75c7uXnB4nblfbSx+VLjhoD5pji/aLpvvjdVUGfQ87a0/93yHn0KHfbvDi1/iovXXCsuE6Oeqh3dcrczOw835HrI7/s8PDlUiZtF46qO7+blUsPGqNBZJFfzl/4+sSn6+VvstlEySwVi+wtxl/0FY2Lyay/PF2P6bMwdNwTgRDX3gKjqHncdGc659pY9jTkzfM5r3NgbwGBLCCQBYSrHlssPun/nj8fXvFLcN3YW0AgCwhkAYEsIDDFF0JsU3zLD039J7PVZ7IOxgNTfCFEXLcIIpYxHSIvZ4XTesMpvnbhxfbn/T/MMzufmbQx9T/MykF8Y8S1i22Kr1W8ZVaemHo7jrU6xxljLL4pvsZU9kzdvjRN5cjkvdYCxlRMU3zPS89daiwYGTFN8W3Lp83WQesIw+4qKv/EMjwMR0xTfNvsUUV4s7S2Z/ifZWMttkl7pfAO+69xfR6GiXsiEMgCAllAIAsIZAHhqmciTN+dSOwtIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAICWUAgCwhkAYEsIJAFBLKAQBYQyAKCM+wBYIC8Ga/RaNiN7Lru2+tdx/UD3z53vN/3/XCBvQUEsoBAFhDIAgJZQOBMZMoEXQtGVEAW0yQw5e/K4VmoPTtNJpPenJeaSxWWCx0hkMU0cUzpy1LlWcU2MevN2iZm351d+HChuwKOLaaMY4r3i+6MOz8/n3ovJZswZDENwquZ9vns4br37tyzazI3MlG/FmQxlRyTu5XrcQRBFlPAMd23P3ofVZLF5BNN9MOZyFRy2tctojc+WUwBuZF7bnmymHz+sX/Rv/JfFrvPq7EOBmMscfLqZNhjwMjhTAQCWUD4F7p0+aqu7JZGAAAAAElFTkSuQmCC"},281325:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return d}});var t=n(667294);let i={},l=t.createContext(i);function d(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);