"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46291"],{171564:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>t,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/resource-list","title":"RESOURCE LIST","description":"RESOURCE LIST ( resTipo ; resNums ; resNoms {; resArchivo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resource-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-list","permalink":"/docs/es/20-R7/commands/resource-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resource-list","title":"RESOURCE LIST","slug":"/commands/resource-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Open resource file","permalink":"/docs/es/20-R7/commands/open-resource-file"},"next":{"title":"RESOURCE TYPE LIST","permalink":"/docs/es/20-R7/commands/resource-type-list"}}'),o=r("785893"),d=r("250065");let i={id:"resource-list",title:"RESOURCE LIST",slug:"/commands/resource-list",displayed_sidebar:"docs"},l=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"RESOURCE LIST"})," ( ",(0,o.jsx)(s.em,{children:"resTipo"})," ; ",(0,o.jsx)(s.em,{children:"resNums"})," ; ",(0,o.jsx)(s.em,{children:"resNoms"})," {; ",(0,o.jsx)(s.em,{children:"resArchivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resTipo"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Tipo de recurso (4 caracteres)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resNums"}),(0,o.jsx)(s.td,{children:"Integer array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"N\xfameros de recursos de este tipo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resNoms"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nombres de los recursos de este tipo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"resArchivo"}),(0,o.jsx)(s.td,{children:"Time"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando RESOURCE LIST llena los arrays ",(0,o.jsx)(s.em,{children:"resNums"})," y ",(0,o.jsx)(s.em,{children:"resNoms"})," con los n\xfameros y los nombres de los recursos cuyo tipo se pasa en ",(0,o.jsx)(s.em,{children:"resTipo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Importante:"})," debe pasar una cadena de 4 caracteres en ",(0,o.jsx)(s.em,{children:"resTipo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en el par\xe1metro opcional ",(0,o.jsx)(s.em,{children:"resArchivo"}),", s\xf3lo se listan los recursos presentes en este archivo. Si no pasa ",(0,o.jsx)(s.em,{children:"resArchivo"}),", se listan todos los recursos de los archivos de recursos abiertos."]}),"\n",(0,o.jsxs)(s.p,{children:["Si predeclara los arrays antes de llamar a RESOURCE LIST, debe predeclarar ",(0,o.jsx)(s.em,{children:"resNums"})," como un array de tipo Entero largo y ",(0,o.jsx)(s.em,{children:"resNoms"})," como un array de tipo Alfa o Texto. Si no predecla los arrays, el comando crea ",(0,o.jsx)(s.em,{children:"resNums"})," como un array de tipo Entero largo y ",(0,o.jsx)(s.em,{children:"resNoms"})," como un array de tipo Texto."]}),"\n",(0,o.jsxs)(s.p,{children:["Despu\xe9s de la llamada, puede probar el n\xfamero de recursos encontrados aplicando el comando ",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/size-of-array",title:"Size of Array",children:"Size of Array"})," al array ",(0,o.jsx)(s.em,{children:"resNums"})," o ",(0,o.jsx)(s.em,{children:"resNoms"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(s.p,{children:["El siguiente ejemplo llena los arrays ",(0,o.jsx)(s.em,{children:"$alResNum"})," y ",(0,o.jsx)(s.em,{children:"$atResNom"})," con los n\xfameros y los nombres de recursos de tipo lista de cadenas presentes en el archivo de estructura de la base:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0If(On Windows)\n\xa0\xa0\xa0\xa0$vhEstructuraResArchivo:=Open resource file(Replace string(Structure file;".4DB";".RSR"))\n\xa0Else\n\xa0\xa0\xa0\xa0$vhEstructuraResArchivo:=Open resource file(Structure file)\n\xa0End if\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RESOURCE LIST("STR#";$alResNum;$atResNom;$vhEstructuraResArchivo)\n\xa0End if\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(s.p,{children:"El siguiente ejemplo copia los recursos imagen presentes en todos los archivos de recursos abiertos en la librer\xeda de im\xe1genes de la base:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0RESOURCE LIST("PICT";$alResNum;$atResNom)\n\xa0Open window(50;50;550;120;5;"Copia de los recursos PICT...")\n\xa0For($vlElem;1;Size of array($alResNum))\n\xa0\xa0\xa0\xa0GET PICTURE RESOURCE($alResNum{$vlElem};$vgImagen)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNombre:=$atResNom{$vlElem}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vsNombre="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNombre:="PICT resNum="+String($alResNum{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ERASE WINDOW\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY(2;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("A\xf1ada la imagen \u201C"+$vsNombre+"\u201Da la librer\xeda de im\xe1genes de la base.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgImagen;$alResNum{$vlElem};$vsNombre)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/resource-type-list",children:"RESOURCE TYPE LIST"})}),"\n",(0,o.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"500"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return i}});var n=r(667294);let o={},d=n.createContext(o);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);