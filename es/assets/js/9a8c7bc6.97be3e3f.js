"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59078"],{23522:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/method-get-attribute","title":"METHOD Get attribute","description":"METHOD Get attribute ( ruta ; tipoAtributo {; *} ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attribute","permalink":"/docs/es/commands/method-get-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-attribute","title":"METHOD Get attribute","slug":"/commands/method-get-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET NAMES","permalink":"/docs/es/commands/form-get-names"},"next":{"title":"METHOD GET ATTRIBUTES","permalink":"/docs/es/commands/method-get-attributes"}}'),d=t("785893"),s=t("250065");let i={id:"method-get-attribute",title:"METHOD Get attribute",slug:"/commands/method-get-attribute",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD Get attribute"})," ( ",(0,d.jsx)(n.em,{children:"ruta"})," ; ",(0,d.jsx)(n.em,{children:"tipoAtributo"})," {; *} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ruta"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Ruta de m\xe9todo proyecto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoAtributo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tipo de atributo a obtener"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = atributo seleccionado; de lo contrario False"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"METHOD Get attribute"})," devuelve el valor del atributo ",(0,d.jsx)(n.em,{children:"tipoAtributo"})," para el m\xe9todo proyecto designado por el par\xe1metro ",(0,d.jsx)(n.em,{children:"ruta"}),". Este comando s\xf3lo funciona con m\xe9todos proyecto. Si pasa una ",(0,d.jsx)(n.em,{children:"ruta"})," invalida, se genera un error."]}),"\n",(0,d.jsxs)(n.p,{children:["En el par\xe1metro ",(0,d.jsx)(n.em,{children:"tipoAtributo"}),", pase un valor indicando el tipo de atributo a obtener. Puede utilizar las siguientes constantes del tema ",(0,d.jsx)(n.em,{children:"Acceso objetos dise\xf1o"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute executed on server"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Ejecutar en servidor"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute invisible"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Invisible"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published SOAP"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Ofrecido como servicio web"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published SQL"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Disponible v\xeda SQL"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published Web"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Disponible v\xeda las etiquetas HTML y los URLs 4D (4DACTION...)"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute published WSDL"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Publicado en WSDL"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Attribute shared"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsx)(n.td,{children:'Corresponde a la opci\xf3n "Compartido entre componentes y base local"'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si el comando se ejecuta desde un componente, se aplica por defecto a los m\xe9todos del componente. Si pasa el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"}),", accede a los m\xe9todos de la base local."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando devuelve ",(0,d.jsx)(n.strong,{children:"True"})," si se selecciona un atributo y ",(0,d.jsx)(n.strong,{children:"False"})," si se deselecciona."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1169"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);