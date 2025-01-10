"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14549"],{636832:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>l,assets:()=>o,toc:()=>a,contentTitle:()=>i});var l=JSON.parse('{"id":"ViewPro/commands/vp-export-to-blob","title":"VP EXPORT TO BLOB","description":"VP EXPORT TO BLOB ( vpAreaName Object )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-export-to-blob.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-to-blob","permalink":"/docs/es/20-R6/ViewPro/commands/vp-export-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-blob.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-export-to-blob","title":"VP EXPORT TO BLOB"},"sidebar":"docs","previous":{"title":"VP EXPORT DOCUMENT","permalink":"/docs/es/20-R6/ViewPro/commands/vp-export-document"},"next":{"title":"VP Export to object","permalink":"/docs/es/20-R6/ViewPro/commands/vp-export-to-object"}}'),r=t("785893"),s=t("250065");let d={id:"vp-export-to-blob",title:"VP EXPORT TO BLOB"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP EXPORT TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"paramObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paramObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de exportaci\xf3n"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP EXPORT TO BLOB"})," exporta el documento 4D View Pro ",(0,r.jsx)(n.em,{children:"vpAreaName"})," en un 4D.Blob seg\xfan las opciones ",(0,r.jsx)(n.em,{children:"paramObj"}),". El blob exportado est\xe1 disponible a trav\xe9s de la retrollamada de exportaci\xf3n. Exportar e importar \xe1reas de 4D View Pro como blogs es r\xe1pido y eficiente en memoria."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"paramObj"}),", puede pasar varias propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsxs)(n.td,{children:["(obligatorio) M\xe9todo de retrollamada que se lanzar\xe1 cuando la exportaci\xf3n haya finalizado. Ver ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Pasar un m\xe9todo de retrollamada (f\xf3rmula)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeAutoMergedCells"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluyen las celdas combinadas autom\xe1ticamente al guardar, por defecto=false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeBindingSource"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si incluir la fuente de vinculaci\xf3n al guardar, por defecto=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeCalcModelCache"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si desea incluir los datos adicionales de c\xe1lculo. Puede afectar a la velocidad de apertura del archivo, por defecto=false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeEmptyRegionCells"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluyen celdas vac\xedas (celdas sin datos o s\xf3lo con estilo) fuera del rango de datos utilizado, por defecto=true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluye la f\xf3rmula al guardar, por defecto=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluye el estilo al guardar, por defecto=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeUnusedNames"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluye el nombre personalizado no utilizado al guardar, por defecto=true."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|saveAsView|Boolean|Si aplicar la cadena de formato al valor exportado al guardar, por defecto=false.|"}),"\n",(0,r.jsx)(n.p,{children:"Los siguientes par\xe1metros se pueden utilizar en el m\xe9todo de retrollamada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Par\xe1metros"}),(0,r.jsx)(n.th,{style:{textAlign:"left"}}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param1"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"El nombre del objeto 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param2"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"4D.blob"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"El blob exportado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param3"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Referencia al par\xe1metro ",(0,r.jsx)(n.em,{children:"paramObj"})," del comando"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param4"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Un objeto devuelto por el m\xe9todo con un mensaje de estado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".success"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"True si exporta con \xe9xito, de lo contrario False."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".errorCode"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"integer"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"C\xf3digo de error."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Mensaje de error."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP EXPORT TO BLOB"})," es as\xedncrono. Debe crear un m\xe9todo de retrollamada (llamado ",(0,r.jsx)(n.em,{children:"VPBlobCallback"})," en nuestro ejemplo) para utilizar los resultados de la exportaci\xf3n."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//Exportar el documento VP\nVP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"//M\xe9todo VPBlobCallback\n#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)\nvar $myEntity : cs.myTableEntity\n\nIf ($status.success)\n   // Save the document in a table\n   $myEntity:=ds.myTable.new()\n   $myEntity.blob:=$data\n   $myEntity.save()\nEnd if\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-import-from-blob",children:"VP IMPORT FROM BLOB"})})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var l=t(667294);let r={},s=l.createContext(r);function d(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);