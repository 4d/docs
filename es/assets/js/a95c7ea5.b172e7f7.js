"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8495"],{250573:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/drop-position","title":"Drop position","description":"Drop position {( colNum | posXImagen )} : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/drop-position.md","sourceDirName":"commands-legacy","slug":"/commands/drop-position","permalink":"/docs/es/20-R7/commands/drop-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrop-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"drop-position","title":"Drop position","slug":"/commands/drop-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Arrastrar y soltar","permalink":"/docs/es/20-R7/commands/theme/Drag-and-Drop"},"next":{"title":"SET DRAG ICON","permalink":"/docs/es/20-R7/commands/set-drag-icon"}}'),s=o("785893"),a=o("250065");let t={id:"drop-position",title:"Drop position",slug:"/commands/drop-position",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Drop position"})," {( colNum | posXImagen )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colNum | posXImagen"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsxs)(n.td,{children:["N\xfamero de columna del list box (-1 si el soltar ocurre m\xe1s all\xe1 de la \xfaltima columna)o ",(0,s.jsx)(n.br,{}),"Posici\xf3n coordenada X en la imagen"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero (array/ list box) o posici\xf3n (lista jer\xe1rquica) o Posici\xf3n en cadena (texto/combo box) o elemento de destino o -1 si soltar ocurri\xf3 m\xe1s all\xe1 del \xfaltimo elemento del array o de la lista"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando Drop position puede utilizarse para descubrir la ubicaci\xf3n, en un objeto de destino \u201Ccomplejo\u201D, donde un objeto ha sido (arrastrado y) soltado."}),"\n",(0,s.jsx)(n.p,{children:"Generalmente, se utiliza Drop position cuando administra un evento arrastrar y soltar que se produce en un array, un list box, una lista jer\xe1rquica, un campo de texto o una imagen o un \xe1rea 4D Write Pro."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si el objeto de destino es un array, el comando devuelve un n\xfamero de elemento."}),"\n",(0,s.jsxs)(n.li,{children:["Si el objeto de destino es un list box, el comando devuelve un n\xfamero de l\xednea. En este caso, el comando tambi\xe9n devuelve el n\xfamero de columna donde se solt\xf3 en el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"colNum"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Si el objeto de destino es una lista jer\xe1rquica, el comando devuelve una posici\xf3n del elemento."}),"\n",(0,s.jsxs)(n.li,{children:["Si el objeto de destino es una variable o un campo tipo texto, o un combo box, el comando devuelve una posici\xf3n de car\xe1cter al interior de la cadena.",(0,s.jsx)(n.br,{}),"\nEn todos los casos, el comando puede devolver -1 si el objeto fuente ha sido soltado m\xe1s all\xe1 del \xfaltimo elemento o del \xfaltimo elemento del objeto de destino."]}),"\n",(0,s.jsxs)(n.li,{children:["Si el objeto de destino es una variable o un campo de tipo imagen, la funci\xf3n devuelve la ubicaci\xf3n horizontal del clic y en el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"posYImagen"}),", la ubicaci\xf3n vertical del clic. Los valores devueltos se expresan en p\xedxeles y con relaci\xf3n al sistema de coordenadas locales."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si llama Drop position cuando procesa un evento que no es del tipo arrastrar y soltar en un array, un list box, un combo box, una lista jer\xe1rquica, un texto o una imagen, o un \xe1rea 4D Write Pro, el comando devuelve -1."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importante:"})," para que un objeto de formulario acepte los datos soltados, la propiedad ",(0,s.jsx)(n.strong,{children:"Soltable"})," debe estar seleccionada. Igualmente, su m\xe9todo de objeto debe ser activado por el evento On Drag Over y/o On Drop, para procesar estos eventos."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"En el siguiente ejemplo, una lista de sumas debe ser desglosada por mes y por persona. La operaci\xf3n se efect\xfaa arrastrando y soltando entre dos list boxes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(387113).Z+"",width:"751",height:"280"})}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo de objeto list box de la derecha (origen) contiene el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Begin Drag Over)\xa0//El evento debe seleccionarse para el list box\n\xa0\xa0\xa0\xa0var $tomove : Blob\n\xa0\xa0\xa0\xa0var $val : Text\n\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LBPaid";$col;$row)\n\xa0\xa0\xa0\xa0$val:=PaidCol{$row}\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB($val;$tomove)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("mydrag";$tomove)\xa0//utilice una llave personalizada\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo de objeto list box de la izquierda (destino) contiene el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Drag Over)\xa0//El evento debe seleccionarse para el list box\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $toGet : Blob\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $rownum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$rownum:=Drop position($colnum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("mydrag";$toGet)\xa0//obtener datos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Pasteboard data size("mydrag")>0)&($colnum#1))\xa0//Si los datos est\xe1n en el portapapeles\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=0\xa0//podr\xedamos aceptar el soltar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=-1\xa0//Se rechaza el soltar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Drop)\xa0//el evento debe seleccionarse para el list box\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $toGet : Blob\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $rownum;$val : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$rownum:=Drop position($colnum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("mydrag";$toGet)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($toGet;$val)\xa0//obtener el valor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Pasteboard data size("mydrag")>0))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($colnum=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\xa0//Adici\xf3n de los valores soltados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0John{$rownum}:=John{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Mark{$rownum}:=Mark{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Peter{$rownum}:=Peter{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(PaidCol;Find in array(PaidCol;$val))\xa0//Actualizar listbox de origen\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Arrastrar y soltar"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"608"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},387113:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/pict4091260.en-1dd251c85d0af3d5a601963d1fc874f0.png"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var r=o(667294);let s={},a=r.createContext(s);function t(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);