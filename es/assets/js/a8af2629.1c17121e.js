"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59913"],{271415:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>t,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/resource-type-list","title":"RESOURCE TYPE LIST","description":"RESOURCE TYPE LIST ( resTipos {; resArchivo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resource-type-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-type-list","permalink":"/docs/es/commands/resource-type-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-type-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resource-type-list","title":"RESOURCE TYPE LIST","slug":"/commands/resource-type-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE LIST","permalink":"/docs/es/commands/resource-list"},"next":{"title":"STRING LIST TO ARRAY","permalink":"/docs/es/commands/string-list-to-array"}}'),o=r("785893"),i=r("250065");let l={id:"resource-type-list",title:"RESOURCE TYPE LIST",slug:"/commands/resource-type-list",displayed_sidebar:"docs"},c=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"RESOURCE TYPE LIST"})," ( ",(0,o.jsx)(s.em,{children:"resTipos"})," {; ",(0,o.jsx)(s.em,{children:"resArchivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resTipos"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Lista de tipos de recursos disponibles"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resArchivo"}),(0,o.jsx)(s.td,{children:"Time"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando RESOURCE TYPE LIST llena el array ",(0,o.jsx)(s.em,{children:"resTipos"})," con los tipos de recursos presentes en el (los) archivo(s) de recursos abierto(s)."]}),"\n",(0,o.jsxs)(s.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en el par\xe1metro opcional ",(0,o.jsx)(s.em,{children:"resArchivo"}),", s\xf3lo se listan los recursos de ese archivo. Si no pasa ",(0,o.jsx)(s.em,{children:"resArchivo"}),", se listan todos los recursos de los archivos de recursos abiertos."]}),"\n",(0,o.jsxs)(s.p,{children:["Puede predeclarar el array ",(0,o.jsx)(s.em,{children:"resTipos"})," como un array tipo Alfa o Texto antes de llamar a RESOURCE TYPE LIST. Si no predeclara el array, el comando crea ",(0,o.jsx)(s.em,{children:"resTipos"})," como un array tipo Texto."]}),"\n",(0,o.jsxs)(s.p,{children:["Despu\xe9s de la llamada, puede probar el n\xfamero de tipo de recursos encontrados aplicando el comando ",(0,o.jsx)(s.a,{href:"/docs/es/commands/size-of-array",title:"Size of Array",children:"Size of Array"})," al array ",(0,o.jsx)(s.em,{children:"resTipos"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(s.p,{children:["El siguiente ejemplo llena el array ",(0,o.jsx)(s.em,{children:"atResTipo"})," con los tipos de recursos presentes en los archivos de recursos abiertos:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0RESOURCE TYPE LIST(atResTipo)\n"})}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(s.p,{children:"El siguiente archivo muestra si el archivo de estructura Mac OS utiliza el contenido de los antiguos plug-ins 4D, que deber\xe1n ser actualizados para utilizar la base en Windows:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file(Structure file)\n\xa0RESOURCE TYPE LIST(atResTipo;$vhResArchivo)\n\xa0If(Find in array(atResTipo;"4DEX")>0)\n\xa0\xa0\xa0\xa0ALERT("Esta base contiene los plug-ins 4D del modelo antiguo."+(Char(13)*2)+\n\xa0\xa0\xa0\xa0"Tendr\xe1 que actualizarlos para utilizar esta base en Windows.")\n\xa0End if\n'})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," el archivo de estructura no es el \xfanico archivo en el cual los plug-ins de la versi\xf3n anterior pueden ser almacenados. La base tambi\xe9n puede incluir un archivo Proc.Ext."]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(s.p,{children:"El siguiente m\xe9todo de proyecto devuelve el n\xfamero de recursos presentes en un archivo de recursos:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto Contar recursos\n\xa0\xa0// Contar recursos ( Hora) -> Entero largo\n\xa0\xa0// Contar recursos ( DocRef ) -> N\xfamero de recursos\n\xa0\n\xa0var $0 : Integer\n\xa0var $1 : Time\n\xa0\n\xa0$0:=0\n\xa0RESOURCE TYPE LIST($atResTipo;$1)\n\xa0For($vlElem;1;Size of array($atResTipo))\n\xa0\xa0\xa0\xa0RESOURCE LIST($atResTipo{$vlElem};$alResNum;$atResNom;$1)\n\xa0\xa0\xa0\xa0$0:=$0+Size of array($alResNum)\n\xa0End for\n"})}),"\n",(0,o.jsx)(s.p,{children:"Una vez este m\xe9todo de proyecto se implementa en una base, puede escribir:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("El archivo \u201C"+Document+"\u201D contiene "+String(Count resources($vhResArchivo))+" recurso(s).")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResArchivo)\n\xa0End if\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/es/commands/resource-list",children:"RESOURCE LIST"})}),"\n",(0,o.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"499"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return l}});var n=r(667294);let o={},i=n.createContext(o);function l(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);