"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95651"],{797346:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/export-structure","title":"EXPORT STRUCTURE","description":"EXPORT STRUCTURE ( estructuraXML {; format} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-structure.md","sourceDirName":"commands-legacy","slug":"/commands/export-structure","permalink":"/docs/es/20-R7/commands/export-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-structure.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-structure","title":"EXPORT STRUCTURE","slug":"/commands/export-structure","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE INDEX","permalink":"/docs/es/20-R7/commands/delete-index"},"next":{"title":"Field","permalink":"/docs/es/20-R7/commands/field"}}'),s=r("785893"),a=r("250065");let i={id:"export-structure",title:"EXPORT STRUCTURE",slug:"/commands/export-structure",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EXPORT STRUCTURE"})," ( ",(0,s.jsx)(n.em,{children:"estructuraXML"})," {; ",(0,s.jsx)(n.em,{children:"format"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"estructuraXML"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Exportaci\xf3n de la definici\xf3n XML de la estructura de la base 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Export format: xml format (default) or html format"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"EXPORT STRUCTURE"})," exporta la definici\xf3n de la estructura de la base 4D actual en ",(0,s.jsx)(n.em,{children:"estructuraE"})," ",(0,s.jsx)(n.em,{children:"xportada"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"estructuraE"})," ",(0,s.jsx)(n.em,{children:"xportada"}),", pase la variable texto destinada a almacenar la definici\xf3n de la estructura. La definici\xf3n exportada incluye las tablas, los campos, los \xedndices y las relaciones, as\xed como tambi\xe9n sus atributos y todas las caracter\xedsticas necesarias para obtener una descripci\xf3n completa de la estructura. Los elementos invisibles se exportan con el atributo correspondiente. Sin embargo, los elementos eliminados no se exportan."]}),"\n",(0,s.jsxs)(n.p,{children:["Por defecto, si omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"formato"}),", el comando exporta la definici\xf3n de la estructura en formato XML. De lo contrario, puede pasar una de las siguientes constantes en el par\xe1metro ",(0,s.jsx)(n.em,{children:"formato"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"html format"}),(0,s.jsx)(n.td,{children:"html"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xml format"}),(0,s.jsx)(n.td,{children:"xml"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["El comando genera el mismo c\xf3digo XML o HTML que el elemento de men\xfa ",(0,s.jsx)(n.strong,{children:"Exportar > Definici\xf3n de estructura a archivo XML... o Exportar > Definici\xf3n de estructura a archivo HTML..."})," (ver ",(0,s.jsx)(n.em,{children:"Exportar e importar las definiciones de estructura"}),")."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Formato xml"}),': la "gram\xe1tica" interna de las definiciones de estructura 4D se documenta mediante archivos DTD, tambi\xe9n utilizados para la validaci\xf3n de archivos XML. Los archivos DTD utilizados por 4D est\xe1n agrupados en la carpeta DTD, que se encuentra junto a la aplicaci\xf3n 4D. Los archivos ',(0,s.jsx)(n.strong,{children:"base_core.dtd"})," y ",(0,s.jsx)(n.strong,{children:"common.dtd"})," se utilizan para las definiciones de estructura. Para m\xe1s informaci\xf3n, puede consultar estos archivos junto con los comentarios que contienen.Una definici\xf3n de estructura exportada en formato XML puede ser importada en otra base de datos (ver ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/import-structure",children:"IMPORT STRUCTURE"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Formato"})," ",(0,s.jsx)(n.strong,{children:"html"}),": el comando genera c\xf3digo HTML puro que incluye referencias a una carpeta que contiene recursos externos como im\xe1genes o css, necesarios para la representaci\xf3n HTML. Si desea guardar este c\xf3digo en una p\xe1gina HTML para mostrarla en un navegador, puede reutilizar la carpeta creada por la opci\xf3n de men\xfa ",(0,s.jsx)(n.strong,{children:"Exportar > Definici\xf3n de estructura a archivo HTML..."}),", o crear su propia carpeta de recursos."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea exportar la estructura de la base a un documento de texto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vTStruc : Text\n\xa0EXPORT STRUCTURE($vTStruc)\n\xa0TEXT TO DOCUMENT("myStructure.xml";$vTStruc)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Desea exportar la estructura actual de la base de datos en formato html:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vHtml : Text\n\xa0EXPORT STRUCTURE($vHtml;html format)\n\xa0File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/import-structure",children:"IMPORT STRUCTURE"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1311"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);