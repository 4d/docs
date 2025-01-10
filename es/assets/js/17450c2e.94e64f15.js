"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11075"],{303848:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"ViewPro/commands/vp-export-to-object","title":"VP Export to object","description":"VP Export to object ( vpAreaName Object} ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-export-to-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-to-object","permalink":"/docs/es/ViewPro/commands/vp-export-to-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-export-to-object","title":"VP Export to object"},"sidebar":"docs","previous":{"title":"VP EXPORT TO BLOB","permalink":"/docs/es/ViewPro/commands/vp-export-to-blob"},"next":{"title":"F","permalink":"/docs/es/commands-legacy/F"}}'),t=o("785893"),s=o("250065");let i={id:"vp-export-to-object",title:"VP Export to object"},c=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Export to object"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,t.jsx)(n.em,{children:"options"})," : Object} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Opciones de exportaci\xf3n"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto 4D View Pro"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Export to object"}),"  devuelve el objeto 4D View Pro adjunto al \xe1rea 4D View Pro ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". Puede utilizar este comando, por ejemplo, para almacenar el \xe1rea 4D View Pro en un campo objeto de la base de datos 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"options"}),", puede pasar las siguientes opciones de exportaci\xf3n, si es necesario:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeFormatInfo"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True (por defecto) para incluir la informaci\xf3n del formato, en caso contrario false. La informaci\xf3n de formato es \xfatil en algunos casos, por ejemplo, para una exportaci\xf3n a SVG. Por otro lado, poner esta propiedad en False permite reducir el tiempo de exportaci\xf3n."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"includeBindingSource"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True (por defecto) para exportar los valores del contexto de datos actual como valores de celda en el objeto exportado (los contextos de datos en s\xed no se exportan). False en caso contrario. El enlace de la celda siempre se exporta."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los objetos 4D View Pro, consulte el p\xe1rrafo ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#4d-view-pro-object",children:"Objeto 4D View Pro"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:'Quiere obtener la propiedad "version" del \xe1rea 4D View Pro actual:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $vpAreaObj : Object\nvar $vpVersion : Number\n$vpAreaObj:=VP Export to object("vpArea")\n // $vpVersion:=OB Get($vpAreaObj;"version")\n$vpVersion:=$vpAreaObj.version\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Desea exportar el \xe1rea, excluyendo la informaci\xf3n de formato:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $vpObj : Object\n$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-import-from-object",children:"VP IMPORT FROM OBJECT"})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return i}});var r=o(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);