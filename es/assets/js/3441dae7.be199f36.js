"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22697"],{830657:function(e,s,n){n.r(s),n.d(s,{default:()=>r,frontMatter:()=>A,metadata:()=>l,assets:()=>o,toc:()=>c,contentTitle:()=>a});var l=JSON.parse('{"id":"commands-legacy/selected-list-items","title":"Selected list items","description":"Selected list items ( { ;} lista {; arrayElem {; }} )  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selected-list-items.md","sourceDirName":"commands-legacy","slug":"/commands/selected-list-items","permalink":"/docs/es/20-R7/commands/selected-list-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-list-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selected-list-items","title":"Selected list items","slug":"/commands/selected-list-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECT LIST ITEMS BY REFERENCE","permalink":"/docs/es/20-R7/commands/select-list-items-by-reference"},"next":{"title":"SET LIST ITEM","permalink":"/docs/es/20-R7/commands/set-list-item"}}'),i=n("785893"),t=n("250065");let A={id:"selected-list-items",title:"Selected list items",slug:"/commands/selected-list-items",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Selected list items"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"lista"})," {; ",(0,i.jsx)(s.em,{children:"arrayElem"})," {; *}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Operador"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si se especifica: lista es un nombre de objeto (cadena) Si se omite, lista es una referencia de lista"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lista"}),(0,i.jsx)(s.td,{children:"Integer, Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto tipo lista (si se pasa *)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"arrayElem"}),(0,i.jsx)(s.td,{children:"Integer array"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Si  se omite el segundo *: Array contiene las posiciones de los elementos seleccionados en la(s) lista(s) Si se pasa el segundo *: Array contiene las referencias de los elementos seleccionados"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Operador"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si se omite: posici\xf3n(es) de(l) (los) elemento(s) Si se pasa: referencia(s) de(l) (los) elemento(s)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resultado"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Si se omite segundo *: posici\xf3n del elemento seleccionado en la(s) lista(s) desplegada(s) Si se pasa el segundo *: Referencia del elemento seleccionado"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["El comando Selected list items devuelve la posici\xf3n o referencia del elemento seleccionado en la lista cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,i.jsx)(s.em,{children:"lista"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,i.jsx)(s.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(s.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza s\xf3lo una representaci\xf3n de lista o trabaja con referencias de elementos (el segundo * se pasa), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de una misma lista y trabaja con posiciones de elementos (el segundo * se omite), la sintaxis basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propia configuraci\xf3n de elementos desplegados/contra\xeddos."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota"}),": si utiliza el car\xe1cter @ en el nombre del objeto de la lista y el formulario contiene varias listas que responden a este nombre, el comando Selected list items s\xf3lo aplicar\xe1 al primer objeto cuyo nombre corresponde."]}),"\n",(0,i.jsxs)(s.p,{children:["En el caso de selecci\xf3n m\xfaltiple, el comando puede devolver tambi\xe9n en el array ",(0,i.jsx)(s.em,{children:"elemArray"}),", la posici\xf3n o referencia de cada elemento seleccionado. Esta funci\xf3n debe ser aplicada a una lista mostrada en un formulario con el fin de detectar el (los) elementos seleccionado(s) por el usuario."]}),"\n",(0,i.jsx)(s.p,{children:"El segundo par\xe1metro * le permite indicar si quiere trabajar con las posiciones actuales de los elementos (en este caso, se debe omitir el par\xe1metro *) o con referencias fijas de los elementos (en este caso, debe utilizarse el par\xe1metro *)."}),"\n",(0,i.jsxs)(s.p,{children:["Puede pasar un array entero largo en el par\xe1metro ",(0,i.jsx)(s.em,{children:"elemArray."})," Si es necesario, el array ser\xe1 creado y redimensionado por el comando. Una vez ejecutado el comando, ",(0,i.jsx)(s.em,{children:"elemArray"})," contendr\xe1:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"la posici\xf3n de cada elemento seleccionado relativa al estado contra\xeddo/desplegado de la(s) lista(s) desplegada(s) si se omite el par\xe1metro *."}),"\n",(0,i.jsxs)(s.li,{children:["la referencia fija de cada elemento seleccionado si se pasa el par\xe1metro *.",(0,i.jsx)(s.br,{}),"\nSi no se han seleccionado elementos, el array se devuelve vac\xedo."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota:"})," en caso de selecci\xf3n m\xfaltiple, el comando devuelve la posici\xf3n o la referencia del primer elemento seleccionado en ",(0,i.jsx)(s.em,{children:"lista"}),", bien sea por un clic del usuario (selecci\xf3n manual) o por los comandos ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"})," o ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})," (selecci\xf3n por programaci\xf3n)."]}),"\n",(0,i.jsx)(s.p,{children:"Si la lista tiene sublistas, aplique el comando a la lista principal (la que est\xe1 definida en el formulario), y no a una de sus sublistas. Las posiciones son expresadas con respecto al elemento superior de la lista principal, utilizando el estado actual desplegado/expandido de la lista y sus sublistas."}),"\n",(0,i.jsx)(s.p,{children:"En todos los casos, si ning\xfan elemento est\xe1 seleccionado, la funci\xf3n devuelve 0."}),"\n",(0,i.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(s.p,{children:["Esta es una lista llamada ",(0,i.jsx)(s.em,{children:"hList,"})," mostrada en el entorno Aplicaci\xf3n:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(781601).Z+"",width:"179",height:"177"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// en este punto $vlItemPos vale 2\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(119214).Z+"",width:"179",height:"174"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// en este punto $vlItemPos vale 4\n\xa0$vlItemRef:=Selected list items(hList;*)\xa0// $vlItemRef vale 200 (por ejemplo)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(487324).Z+"",width:"179",height:"177"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// en este punto $vlItemPos vale 8\n\xa0$vlItemRef:=Selected list items(hList;*)\xa0// $vlItemRef vale 203 (por ejemplo)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(256869).Z+"",width:"178",height:"177"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList;$arrPos)\xa0// en este punto, $vlItemPos vale 3\n\xa0\xa0// $arrPos{1} vale 3, $arrPos{2} vale 4 y $arrPos{3} vale 5\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(484182).Z+"",width:"179",height:"179"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0$vlItemRef:=Selected list items(hList;$arrRefs;*)\xa0// $vlItemRef vale 101 (por ejemplo)\n\xa0\xa0// $arrRefs{1} gets 101, $arrRefs{2} vale 203 (por ejemplo)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})]}),"\n",(0,i.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero de comando"}),(0,i.jsx)(s.td,{children:"379"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hilo seguro"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function r(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},781601:function(e,s,n){n.d(s,{Z:function(){return l}});let l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACxCAIAAAAAvhuvAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHFxQSIam5P1AAAATqSURBVHic7ds/aBtXAMfxp3LDCVw4gwvWVkEKkWgHGwKuRoEXlQYS06UhkxIvpl0sOnkqpkNRMrR4cdCS0C7FzlCiDgZ1KDgdSr3VHQzqqFEQg284cJ90TppIv5Nq+xRJvu8HIV0OWXpwX0735yV18uLEAH3eGfcAMKEoAxplQKMMaE74Ut9rjHccmCil5aLz6h+3b5XGOBSMSmBarZbdA7iu+/pq13H9wLfPPW/3fb/x277h1wRRKAMaZUCjDGhO/6rGXuPw78P+9bnrueJycfRDwkQQZdgs1r5Y61+/9f0WZVwpgdz+Z4b8muSLlZhHgwkRmOrDaieOCBFlBC8fPcu4GgKz8fWG3WHUntSitmzkPuOT1R/tI/v+Yrgw9Lvqq6kzq/ULDxhvQ2A2v93MZDL5D/KZ+czuL7syDv070z5u//Cwc0m0cHtzf3cjXDP460rbp6fb9rV+L7X54KvS+rVLDh+jEXT2E4sfLXqe57puOp22Cewf7BcWCj0t6DL8Y18uD/LzvdTNWnfp4+oFR43Rc0z5btn0Xx3vC2HIEWjj8f87Aj16ULhpnp1af1WXzjlWvGWOeqh39cpdz+083ZHrI7/s8PD5Ui5rF47qO7+blQsPGhNDlFFcLp77usWn69Vv8vlUxSyVy+wzroToKx3nk1t/froe02dhEnDfBFpc+wxMqPZx253pnZ5j2ROTV89veFkE+wxolAGNMqBd9jhj8dHw9/x5/5JfgjFgnwGNMqBRBjTKgMYMYWixzRCu3jfNn8zWkPk9mBrMEIYWcT0jiFhGYkRe6QpnBYczhO3Cs+3Ph3+YZ3Y+M1ljmn+YlYP4xohxiG2GsFW+YVYemWa3j7UmxxzTLb4ZwsbU9kzTvrRN7cgUvc4CpldMM4TflJ270FgwSWKaIdxVzJqtg87Rht1h1P6JZXgYm5hmCHfZI4zwtmpjz/D/1KZdbLP9KuHt+F/j+jyMGfdNoFEGNMqARhnQKAPaZc9NmP17VbHPgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAowxolAGNMqBRBjTKgEYZ0CgDGmVAc8Y9AIyWN+O1Wi27nV3XfX2967h+4Nvnnvf7vh8usM+ARhnQKAMaZUCjDGicmyRP0LdgRAiUkTCBqX5XDU9N7SlrOp325rzMXKa0XOppgTISxjGVLyu1JzWbxaw3a7OYfXd24cOF/hA4zkgex5Tvlt0Zd35+PvNeRmZhKCMhwmud9vns4bp3bt2xa3LXclE/G5SRVI4p3CgMOJqgjGRwTP8tksEHmZSRCCKLYTg3SSqnez0jevtTRjLI7Txw41NGIvjH/nn/5L8ydp/WYx0Mplvq5MXJuMeAScS5CbR/Ae4l+apeEzTzAAAAAElFTkSuQmCC"},119214:function(e,s,n){n.d(s,{Z:function(){return l}});let l="data:image/png;base64,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"},487324:function(e,s,n){n.d(s,{Z:function(){return l}});let l="data:image/png;base64,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"},256869:function(e,s,n){n.d(s,{Z:function(){return l}});let l="data:image/png;base64,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"},484182:function(e,s,n){n.d(s,{Z:function(){return l}});let l="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return A}});var l=n(667294);let i={},t=l.createContext(i);function A(e){let s=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:A(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);