"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39504"],{833358:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/method-set-attribute","title":"METHOD SET ATTRIBUTE","description":"METHOD SET ATTRIBUTE ( ruta ; tipoAtrib ; valorAtrib {; tipoAtrib2 ; valorAtrib2 ; ... ; tipoAtribN ; valorAtribN}{; operador} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attribute","permalink":"/docs/es/commands/method-set-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-attribute","title":"METHOD SET ATTRIBUTE","slug":"/commands/method-set-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/es/commands/method-set-access-mode"},"next":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/es/commands/method-set-attributes"}}'),d=t("785893"),s=t("250065");let i={id:"method-set-attribute",title:"METHOD SET ATTRIBUTE",slug:"/commands/method-set-attribute",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD SET ATTRIBUTE"})," ( ",(0,d.jsx)(n.em,{children:"ruta"})," ; ",(0,d.jsx)(n.em,{children:"tipoAtrib"})," ; ",(0,d.jsx)(n.em,{children:"valorAtrib"})," {; ",(0,d.jsx)(n.em,{children:"tipoAtrib2"})," ; ",(0,d.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"tipoAtribN"})," ; ",(0,d.jsx)(n.em,{children:"valorAtribN"}),"}{; ",(0,d.jsx)(n.em,{children:"operador"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ruta"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Ruta del m\xe9todo proyecto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoAtrib"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tipo de atributo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valorAtrib"}),(0,d.jsx)(n.td,{children:"Boolean, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"True = seleccionar el atributo  False = deseleccionar el atributo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"operador"}),(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un  componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"METHOD SET ATTRIBUTE"})," permite definir el valor del atributo ",(0,d.jsx)(n.em,{children:"tipoAtrib"})," para el m\xe9todo proyecto designado por el par\xe1metro ",(0,d.jsx)(n.em,{children:"ruta"}),". Este comando s\xf3lo funciona con m\xe9todos proyecto. Si pasa una ",(0,d.jsx)(n.em,{children:"ruta"})," invalida, se genera un error."]}),"\n",(0,d.jsxs)(n.p,{children:["En el par\xe1metro ",(0,d.jsx)(n.em,{children:"tipoAtrib"}),", pase un valor que indique el tipo de atributo a definir. Puede utilizar las siguientes constantes, del tema ",(0,d.jsx)(n.em,{children:"Acceso objetos dise\xf1o"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute executed on server"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Ejecutar en servidor"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute folder name"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1024"}),(0,d.jsxs)(n.td,{children:['Nombre de la carpeta para el m\xe9todo (atributo "carpeta"). Cuando pase esta constante, debe pasar un nombre de carpeta en ',(0,d.jsx)(n.em,{children:"attribValue"}),":",(0,d.jsx)(n.br,{}),"si el nombre corresponde a una carpeta v\xe1lida, el m\xe9todo se coloca en esta carpeta padre,si la carpeta no existe, el comando no cambia nada en el nivel de la carpeta padre,si pasa una cadena vac\xeda, el m\xe9todo se ubica al nivel de la ra\xedz."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute invisible"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Invisible"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published SOAP"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Ofrecido como servicio web"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published SQL"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Disponible v\xeda SQL"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published Web"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Disponible v\xeda las etiquetas HTML y los URLs 4D (4DACTION...)"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published WSDL"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Publicado en WSDL"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute shared"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Compartido entre componentes y base local"'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Puede pasar en el par\xe1metro ",(0,d.jsx)(n.em,{children:"valorAtrib:"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"True"})," para seleccionar la opci\xf3n correspondiente y ",(0,d.jsx)(n.strong,{children:"False"})," para deseleccionarla o,"]}),"\n",(0,d.jsxs)(n.li,{children:["una cadena (nombre de carpeta) si utiliz\xf3 la constante Attribute folder name en ",(0,d.jsx)(n.em,{children:"tipoAtrib"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Puede pasar m\xfaltiples pares ",(0,d.jsx)(n.em,{children:"tipoAtrib"}),";",(0,d.jsx)(n.em,{children:"valorAtrib"})," en una sola llamada."]}),"\n",(0,d.jsxs)(n.p,{children:["Puede ejecutar este comando desde un componente, pero en este caso debe pasar el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"}),", por el acceso en s\xf3lo escritura al c\xf3digo del componente. Si omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"})," en este contexto, se genera el error -9763."]}),"\n",(0,d.jsx)(n.h5,{id:""}),"\n",(0,d.jsx)(n.p,{children:"Este comando no puede ejecutarse en modo compilado. Cuando se llama en este modo, generar\xe1 el error -9762."}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:'Selecci\xf3n de la propiedad "Compartido entre componentes y la base local" para el m\xe9todo proyecto "Selecci\xf3n di\xe1logo":'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0METHOD SET ATTRIBUTE("Selecci\xf3n di\xe1logo";Attribute shared;True)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"Definici\xf3n de varios pares de atributos/valores:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Acceso objetos dise\xf1o"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/method-get-attribute",children:"METHOD Get attribute"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1192"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);