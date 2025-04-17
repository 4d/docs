"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36629"],{141683:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>l,assets:()=>c,toc:()=>t,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/dom-append-xml-child-node","title":"DOM Append XML child node","description":"DOM Append XML child node ( refElement ; tipoHijo ; valorHijo ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-append-xml-child-node.md","sourceDirName":"commands-legacy","slug":"/commands/dom-append-xml-child-node","permalink":"/docs/es/20-R8/commands/dom-append-xml-child-node","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-append-xml-child-node.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-append-xml-child-node","title":"DOM Append XML child node","slug":"/commands/dom-append-xml-child-node","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML DOM","permalink":"/docs/es/20-R8/commands/theme/XML-DOM"},"next":{"title":"DOM Append XML element","permalink":"/docs/es/20-R8/commands/dom-append-xml-element"}}'),s=d("785893"),r=d("250065");let o={id:"dom-append-xml-child-node",title:"DOM Append XML child node",slug:"/commands/dom-append-xml-child-node",displayed_sidebar:"docs"},i=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ejemplo 5",id:"ejemplo-5",level:2},{value:"Ejemplo 6",id:"ejemplo-6",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Append XML child node"})," ( ",(0,s.jsx)(n.em,{children:"refElement"})," ; ",(0,s.jsx)(n.em,{children:"tipoHijo"})," ; ",(0,s.jsx)(n.em,{children:"valorHijo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refElement"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tipoHijo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tipo de hijo a a\xf1adir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorHijo"}),(0,s.jsx)(n.td,{children:"Text, Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Texto o variable (Texto o BLOB)cuyo valor debe insertarse como nodo hijo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML hijo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DOM Append XML child node se utiliza para anexar el valor ",(0,s.jsx)(n.em,{children:"valorHijo"})," al nodo XML designado por ",(0,s.jsx)(n.em,{children:"refElement"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El tipo de nodo creado es especificado por el par\xe1metro ",(0,s.jsx)(n.em,{children:"tipoHijo"}),'. En este par\xe1metro se puede pasar una de las siguientes constantes, del tema "":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML CDATA"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML comment"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML DATA"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML DOCTYPE"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML ELEMENT"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"11"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML processing instruction"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"valorHijo"}),", pase los datos a insertar. Pase una cadena o una variable 4D (cadena o BLOB). El contenido de este par\xe1metro siempre se convertir\xe1 en texto."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": si el par\xe1metro ",(0,s.jsx)(n.em,{children:"refElement"}),' designa el nodo Document (nodo de nivel superior), el comando inserta un nodo "Doctype" antes de cualquier otro nodo. Lo mismo ocurre con las instrucciones de procesamiento y los comentarios, que siempre se insertan antes del nodo ra\xedz (pero despu\xe9s del nodo Doctype).']}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de un nodo de tipo texto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Create XML element(refElement;"myElement")\n\xa0DOM SET XML ELEMENT VALUE(Reference;"Hola")\n\xa0temp:=DOM Create XML element(Reference;"br")\n\xa0temp:=DOM Append XML child node(Reference;XML DATA;"Nueva")\n\xa0temp:=DOM Create XML element(Reference;"br")\n\xa0temp:=DOM Append XML child node(Reference;XML DATA;"York")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<myElement>Hola<br/>Nueva<br/>York</myElement>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de un nodo de tipo instrucci\xf3n de proceso:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$Txt_instruction:="xml-stylesheet type = \\"text/xsl\\" href=\\"style.xsl\\""\n\xa0Reference:=DOM Append XML child node(elementRef;XML Processing Instruction;$Txt_instruction)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado (insertado antes del primer elemento):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml-stylesheet type="text/xsl" href="style.xsl"?>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de un nodo de tipo comentario:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML Comment;"Hola mundo")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"\x3c!--Hola mundo--\x3e\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de un nodo de tipo CDATA:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML CDATA;"12 < 18")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<element><![CDATA[12 < 18]]></element>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n o reemplazo de un nodo de tipo declaraci\xf3n Doctype:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \\"Book.DTD\\"")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado (insertado antes del primer elemento):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<!DOCTYPE Books SYSTEM  "Book.DTD">\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n o reemplazo de un nodo de tipo Element."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["si el par\xe1metro ",(0,s.jsx)(n.em,{children:"valorHijo"})," es un fragmento XML, se inserta como nodos hijos:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(refElement;XML ELEMENT;"simoneva")  \n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<parent>  \n\xa0\xa0\xa0 <child>simon</child>  \n\xa0\xa0\xa0 <child>eva</child>  \n</parent>  \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"de lo contrario, se a\xf1ade un nuevo elemento hijo vac\xedo:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"tbreak")  \n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<parent>  \n \xa0\xa0 \xa0<tbreak/>  \n </parent>  \n"})}),"\n",(0,s.jsxs)(n.p,{children:["Si el contenido de ",(0,s.jsx)(n.em,{children:"valorHijo"})," no es valido, se devuelve un error."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-get-xml-document-ref",children:"DOM Get XML document ref"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1080"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return o}});var l=d(667294);let s={},r=l.createContext(s);function o(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);