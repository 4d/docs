"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63622"],{869826:function(e,n,o){o.r(n),o.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-copy-to-object","title":"VP Copy to object","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-copy-to-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-copy-to-object","permalink":"/docs/es/20-R6/ViewPro/commands/vp-copy-to-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-copy-to-object.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-copy-to-object","title":"VP Copy to object"},"sidebar":"docs","previous":{"title":"VP Convert to picture","permalink":"/docs/es/20-R6/ViewPro/commands/vp-convert-to-picture"},"next":{"title":"VP CREATE TABLE","permalink":"/docs/es/20-R6/ViewPro/commands/vp-create-table"}}'),t=o("785893"),r=o("250065");let i={id:"vp-copy-to-object",title:"VP Copy to object"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Copy to object"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object {; ",(0,t.jsx)(n.em,{children:"options"})," : Object} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto rango"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Opciones adicionales"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto devuelto. Contiene los datos copiados"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Copy to object"})," copia el contenido, estilo y f\xf3rmulas de ",(0,t.jsx)(n.em,{children:"rangeObj"})," a un objeto."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pase el rango de celdas con los valores, formato y f\xf3rmulas a copiar. Si ",(0,t.jsx)(n.em,{children:"rangeObj"})," es un rango combinado, s\xf3lo se utiliza el primero."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede pasar un par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"options"})," con las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"copy"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"True"})," (por defecto) para mantener los valores, el formato y las f\xf3rmulas copiados despu\xe9s de la ejecuci\xf3n del comando. ",(0,t.jsx)(n.em,{children:"False"})," para eliminarlos."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"copyOptions"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsxs)(n.td,{children:["Especifica lo que se copia o mueve. Valores posibles: ",(0,t.jsx)(n.p,{}),(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"vk clipboard options all"})," (por defecto)"]}),(0,t.jsx)(n.td,{children:"Copia todos los objetos de datos, incluidos los valores, el formato y las f\xf3rmulas."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk clipboard options formatting"})}),(0,t.jsx)(n.td,{children:"Copia s\xf3lo el formato."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk clipboard options formulas"})}),(0,t.jsx)(n.td,{children:"Copia s\xf3lo las f\xf3rmulas."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk clipboard options formulas and formatting"})}),(0,t.jsx)(n.td,{children:"Copia las f\xf3rmulas y el formato."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk clipboard options values"})}),(0,t.jsx)(n.td,{children:"Copia s\xf3lo los valores."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk clipboard options value and formatting"})}),(0,t.jsx)(n.td,{children:"Copia los valores y el formato."})]})]})}),(0,t.jsx)(n.p,{})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Se tienen en cuenta las opciones de pegado definidas en las ",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-workbook-options",children:"opciones del libro de trabajo"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"El comando devuelve un objeto que contiene los datos copiados."}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo de c\xf3digo primero almacena el contenido, los valores, el formato y las f\xf3rmulas de un rango a un objeto, y luego los pega en otro rango:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $originRange; $targetRange; $dataObject; $options : Object\n\n$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)\n\n$options:=New object\n$options.copy:=True\n$options.copyOptions:=vk clipboard options all\n\n$dataObject:=VP Copy to object($originRange; $options)\n\n$targetRange:=VP Cell("ViewProArea"; 4; 0)\nVP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-paste-from-object",children:"VP PASTE FROM OBJECT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-move-cells",children:"VP MOVE CELLS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-workbook-options",children:"VP Get workbook options"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var s=o(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);