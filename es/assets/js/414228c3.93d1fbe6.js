"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74831"],{406813:function(e,a,n){n.r(a),n.d(a,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>t,frontMatter:()=>r});var i=JSON.parse('{"id":"commands-legacy/localized-document-path","title":"Localized document path","description":"Localized document path ( rutaRelativa ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/localized-document-path.md","sourceDirName":"commands-legacy","slug":"/commands/localized-document-path","permalink":"/docs/es/commands/localized-document-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocalized-document-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"localized-document-path","title":"Localized document path","slug":"/commands/localized-document-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get document size","permalink":"/docs/es/commands/get-document-size"},"next":{"title":"MOVE DOCUMENT","permalink":"/docs/es/commands/move-document"}}'),l=n("785893"),s=n("250065");let r={id:"localized-document-path",title:"Localized document path",slug:"/commands/localized-document-path",displayed_sidebar:"docs"},o=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Localized document path"})," ( ",(0,l.jsx)(a.em,{children:"rutaRelativa"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Par\xe1metro"}),(0,l.jsx)(a.th,{children:"Tipo"}),(0,l.jsx)(a.th,{}),(0,l.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"rutaRelativa"}),(0,l.jsx)(a.td,{children:"Text"}),(0,l.jsx)(a.td,{children:"\u2192"}),(0,l.jsx)(a.td,{children:"Ruta de acceso relativa del documento del cual obtener la versi\xf3n localizada"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Resultado"}),(0,l.jsx)(a.td,{children:"Text"}),(0,l.jsx)(a.td,{children:"\u2190"}),(0,l.jsx)(a.td,{children:"Ruta de acceso absoluta del documento localizado"})]})]})]}),"\n",(0,l.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(a.p,{children:["El comando Localized document path devuelve la ruta completa (absoluta) de un documento designado por ",(0,l.jsx)(a.em,{children:"rutaRelativa"})," y ubicado en la carpeta xxx.lproj."]}),"\n",(0,l.jsxs)(a.p,{children:["Este comando debe usarse dentro de una arquitectura de aplicaci\xf3n multi-lenguaje basada en la presencia de una carpeta ",(0,l.jsx)(a.strong,{children:"Resources"})," y de las subcarpetas xxx.lproj (xxx representa un idioma). Con esta arquitectura, 4D soporta autom\xe1ticamente archivos localizados de tipo XLIFF as\xed como las im\xe1genes, pero es posible que deba usar el mismo mecanismo para otros tipos de archivos."]}),"\n",(0,l.jsxs)(a.p,{children:["Pase en ",(0,l.jsx)(a.em,{children:"rutaRelativa"}),' la ruta de acceso relativa del documento a buscar. La ruta especificada debe ser relativa al primer nivel de la carpeta "xxx.lproj" de la base de datos. El comando devolver\xe1 una ruta de acceso completa utilizando la carpeta "xxx.lproj" correspondiente al idioma actual de la base de datos.']}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Nota"}),": el idioma actual es definido autom\xe1ticamente por 4D en funci\xf3n del contenido de la carpeta Resources (vea el comando ",(0,l.jsx)(a.a,{href:"/docs/es/commands/get-database-localization",title:"Get database localization",children:"Get database localization"}),"), o v\xeda el comando ",(0,l.jsx)(a.a,{href:"/docs/es/commands/set-database-localization",title:"SET DATABASE LOCALIZATION",children:"SET DATABASE LOCALIZATION"}),"."]}),"\n",(0,l.jsx)(a.p,{children:"Puede expresar el contenido del par\xe1metro rutaRelativa utilizando una sintaxis POSIX o sistema. Por ejemplo:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"xsl/log.xsl (sintaxis POSIX: utilizable bajo Mac OS o Windows)"}),"\n",(0,l.jsx)(a.li,{children:"xsllog.xsl (Windows \xfanicamente)"}),"\n",(0,l.jsx)(a.li,{children:"xsl:log.xsl (Mac OS \xfanicamente)\nLa ruta de acceso absoluta devuelta por el comando siempre se expresa en la sintaxis del sistema."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"4D Serve"}),"r: en modo remoto, el comando devuelve la ruta de la carpeta Resources en la m\xe1quina cliente si el comando se llama desde un proceso cliente."]}),"\n",(0,l.jsxs)(a.p,{children:["4D busca el archivo respetando una secuencia que permite tratar todos los casos de aplicaciones en varios idiomas. En cada paso, 4D comprueba la presencia de rutaRelativa en la carpeta correspondiente al idioma y devuelve la ruta completa cuando tiene \xe9xito. Si ",(0,l.jsx)(a.em,{children:"rutaRelativa"})," no se encuentra o si la carpeta no existe, 4D pasa al siguiente paso. Aqu\xed est\xe1n las carpetas para cada una de las diferentes etapas de b\xfasqueda:"]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.em,{children:"Lenguaje actual (por ejemplo: fr-ca)"}),"\n",(0,l.jsx)(a.em,{children:"Lenguaje actual sin regi\xf3n (por ejemplo: fr)"}),"\n",(0,l.jsx)(a.em,{children:"Lenguaje cargado por defecto al inicio (por ejemplo: en-ga)"}),"\n",(0,l.jsx)(a.em,{children:"Lenguaje cargado por defecto al inicio sin regi\xf3n (es por ejemplo: es)"}),"\n",(0,l.jsx)(a.em,{children:"Primera carpeta .lproj encontrada (por ejemplo: en.lproj)"}),"\n",(0,l.jsx)(a.em,{children:"Primer nivel de la carpeta Resources"})]}),"\n",(0,l.jsxs)(a.p,{children:["Si ",(0,l.jsx)(a.em,{children:"rutaRelativa"})," no se encuentra en ninguna de estas ubicaciones, el comando devuelve una cadena vac\xeda."]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(a.p,{children:['Para transformar un archivo XML en HTML, queremos utilizar un archivo de transformaci\xf3n "log.xsl". Este archivo difiere dependiendo del idioma actual. Usted quiere conocer la ruta del archivo "log.xsl" a utilizar.',(0,l.jsx)(a.br,{}),"\nEstos son los contenidos de la carpeta Resources:"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{src:n(287030).Z+"",width:"186",height:"380"})}),"\n",(0,l.jsx)(a.p,{children:"Para utilizar un archivo .xsl adaptado al lenguaje actual, s\xf3lo debe pasar:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0$myxsl:=Localized document path("xsl/log.xsl")\n'})}),"\n",(0,l.jsx)(a.p,{children:"Si el lenguaje actual es, por ejemplo, franc\xe9s canadiense (fr-ca), el comando devuelve:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"bajo Windows: C:users\u2026\u2026\u2026 resources _ca.lprojxsllog.xsl"}),"\n",(0,l.jsx)(a.li,{children:'bajo Mac OS: "HardDisk:users:\u2026:\u2026:\u2026:resources:fr_ca.lproj:xsl:log.xsl"'}),"\n"]}),"\n",(0,l.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"/docs/es/commands/get-database-localization",children:"Get database localization"})}),"\n",(0,l.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{}),(0,l.jsx)(a.th,{})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"N\xfamero de comando"}),(0,l.jsx)(a.td,{children:"1105"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Hilo seguro"}),(0,l.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},287030:function(e,a,n){n.d(a,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,a,n){n.d(a,{Z:function(){return o},a:function(){return r}});var i=n(667294);let l={},s=i.createContext(l);function r(e){let a=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);