"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98806],{48196:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>t});var n=r(474848),i=r(28453);const o={id:"wp-get-view-properties",title:"WP Get view properties",slug:"/WritePro/commands/wp-get-view-properties",displayed_sidebar:"docs"},l=void 0,a={id:"WritePro/commands-legacy/wp-get-view-properties",title:"WP Get view properties",description:"WP Get view properties (  ; wpArea* ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-view-properties.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-get-view-properties",permalink:"/docs/es/WritePro/commands/wp-get-view-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-view-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-get-view-properties",title:"WP Get view properties",slug:"/WritePro/commands/wp-get-view-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Get text",permalink:"/docs/es/WritePro/commands/wp-get-text"},next:{title:"WP Import document",permalink:"/docs/es/WritePro/commands/wp-import-document"}},d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const s={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"WP Get view properties"})," ( * ; ",(0,n.jsx)(s.em,{children:"wpArea"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe1metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Operador"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Si se especifica, wpArea es un nombre de objeto de formulario (cadena). Si se omite, wpArea es un campo de objeto o variable (documento)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wpArea"}),(0,n.jsx)(s.td,{children:"Text, Object"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Nombre del objeto del formulario (si se especifica *) o variable o campo del objeto 4D Write Pro (si se omite *)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resultado"}),(0,n.jsx)(s.td,{children:"Object"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Propiedades de la vista actual"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(s.p,{children:["El comando ",(0,n.jsx)(s.strong,{children:"WP Get view properties"})," devuelve las propiedades de la vista actual para el \xe1rea 4D Write Pro designada por ",(0,n.jsx)(s.em,{children:"wpArea"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Si pasa el par\xe1metro opcional ",(0,n.jsx)(s.em,{children:"*"}),", indica que ",(0,n.jsx)(s.em,{children:"wpArea"})," es un nombre de objeto de formulario (cadena). Si no pasa este par\xe1metro, indica que ",(0,n.jsx)(s.em,{children:"wpArea"})," es un documento 4D Write Pro (variable objeto o campo). Este comando solo se puede utilizar si ",(0,n.jsx)(s.em,{children:"wpArea"})," est\xe1 asociada con un objeto de formulario (es decir, se muestra en el forpara definir a qu\xe9 vista ir."]}),"\n",(0,n.jsx)(s.p,{children:"Las propiedades vista del \xe1rea 4D Write Pro se pueden definir:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"a nivel del formulario en la Lista de propiedades,"}),"\n",(0,n.jsxs)(s.li,{children:["din\xe1micamente durante la sesi\xf3n utilizando el comando ",(0,n.jsx)(s.a,{href:"/docs/es/WritePro/commands/wp-set-view-properties",children:"WP SET VIEW PROPERTIES"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Objeto devuelto"})}),"\n",(0,n.jsx)(s.p,{children:"El objeto devuelto contiene todas las propiedades de vista del \xe1rea 4D Write Pro, junto con su valor actual:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Constante"}),(0,n.jsx)(s.th,{children:"Valor"}),(0,n.jsx)(s.th,{children:"Comentario"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk display formula as symbol"}),(0,n.jsx)(s.td,{children:"displayFormulaAsSymbol"}),(0,n.jsxs)(s.td,{children:["Muestra las referencias de las f\xf3rmulas como un s\xedmbolo ",(0,n.jsx)(s.img,{src:r(945434).A+"",width:"14",height:"19"}),". S\xf3lo funciona si las f\xf3rmulas se muestran como referencias (ver wk visible references). Valores posibles: True/False"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk formula highlight"}),(0,n.jsx)(s.td,{children:"formulaHighlight"}),(0,n.jsx)(s.td,{children:"Modo de vista de resaltado de f\xf3rmulas. Valores posibles: wk references (por defecto): se resaltan las f\xf3rmulas que se muestran como referencias wk values: se resaltan las f\xf3rmulas mostradas como valores wk always: las f\xf3rmulas se resaltan siempre, sea cual sea su modo de visualizaci\xf3n wk never: las f\xf3rmulas no se resaltan nunca, sea cual sea su modo de visualizaci\xf3n El color de las f\xf3rmulas resaltadas puede ser definido por wk formula highlight color."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk formula highlight color"}),(0,n.jsx)(s.td,{children:"formulaHighlightColor"}),(0,n.jsx)(s.td,{children:'Color de las f\xf3rmulas resaltadas (ver wk formula highlight). Valores posibles: una cadena de color CSS ("#010101" o "#FFFFFF" o "rojo"). un valor entero largo de color 4D'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk page view mode"}),(0,n.jsx)(s.td,{children:"pageMode"}),(0,n.jsx)(s.td,{children:'Modo de visualizaci\xf3n del documento 4D Write Pro en el \xe1rea formulario en pantalla. Valores posibles (cadena): "draft": modo borrador con propiedades b\xe1sicas del documento "page": modo de visualizaci\xf3n m\xe1s completo, que incluye bordes de la p\xe1gina, orientaci\xf3n, m\xe1rgenes, saltos de pagina, encabezados y pies de p\xe1gina, etc. "embedded": modo de visualizaci\xf3n adaptado a las \xe1reas anidadas'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk resolution"}),(0,n.jsx)(s.td,{children:"dpi"}),(0,n.jsx)(s.td,{children:"Resoluci\xf3n de pantalla para los contenidos del \xe1rea 4D Write Pro. Valores posibles: wk auto (0) N\xfamero mayor que 1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk spell enable"}),(0,n.jsx)(s.td,{children:"spellEnabled"}),(0,n.jsx)(s.td,{children:"Activa la correcci\xf3n ortogr\xe1fica. Valores posibles: True/False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible background"}),(0,n.jsx)(s.td,{children:"visibleBackground"}),(0,n.jsx)(s.td,{children:"Muestra las im\xe1genes de fondo y el color de fondo (efecto visible solo en el modo de vista de p\xe1gina o anidado). Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible empty images"}),(0,n.jsx)(s.td,{children:"visibleEmptyImages"}),(0,n.jsx)(s.td,{children:"Muestra o exporta un rect\xe1ngulo negro por defecto para las im\xe1genes que no pueden ser cargadas o calculadas (im\xe1genes vac\xedas o en un formato no soportado). Valores posibles: True/False. Valor por defecto: True Si el valor es False, los elementos imagen que falten no se mostrar\xe1n en absoluto aunque tengan bordes, ancho, alto o fondo; esto puede afectar al dise\xf1o de la p\xe1gina para las im\xe1genes en l\xednea."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible footers"}),(0,n.jsx)(s.td,{children:"visibleFooters"}),(0,n.jsx)(s.td,{children:"Muestra los pies de p\xe1gina (efecto visible solo en el modo de visualizaci\xf3n de p\xe1gina). Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible headers"}),(0,n.jsx)(s.td,{children:"visibleHeaders"}),(0,n.jsx)(s.td,{children:"Muestra los encabezados (efecto visible solo en el modo de visualizaci\xf3n de p\xe1gina). Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible hidden characters"}),(0,n.jsx)(s.td,{children:"visibleHiddenChars"}),(0,n.jsx)(s.td,{children:"Muestra los caracteres invisibles. Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible horizontal ruler"}),(0,n.jsx)(s.td,{children:"visibleHorizontalRuler"}),(0,n.jsx)(s.td,{children:"Muestra la regla horizontal. Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible HTML WYSIWYG"}),(0,n.jsx)(s.td,{children:"htmlWYSIWIGEnabled"}),(0,n.jsx)(s.td,{children:"Activa la vista HTML WYSIWYG. Valores posibles: True/False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible page frames"}),(0,n.jsx)(s.td,{children:"visiblePageFrames"}),(0,n.jsx)(s.td,{children:"Muestra los marcos de p\xe1gina (efecto visible solo en el modo de visualizaci\xf3n de p\xe1gina). Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible references"}),(0,n.jsx)(s.td,{children:"visibleReferences"}),(0,n.jsx)(s.td,{children:"Muestra todas las expresiones 4D insertadas en el documento como referencias. Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk visible vertical ruler"}),(0,n.jsx)(s.td,{children:"visibleVerticalRuler"}),(0,n.jsx)(s.td,{children:"Muestra la regla vertical (efecto visible solo en el modo de visualizaci\xf3n de p\xe1gina). Valores posibles: Verdadero/Falso"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"wk zoom"}),(0,n.jsx)(s.td,{children:"zoom"}),(0,n.jsx)(s.td,{children:"Porcentaje de zoom para mostrar los contenidos del \xe1rea 4D Write Pro. Valores posibles: N\xfamero mayor que 1"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(s.p,{children:"En el \xe1rea de 4D Write Pro, desea mostrar las reglas solo en el modo p\xe1gina:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0var $viewProps : Object\n\xa0$viewProps:=WP Get view properties(*;"4DWPArea")\n\xa0If($viewProps.pageMode="page")\n\xa0\xa0\xa0\xa0$viewProps.visibleHorizontalRuler:=True\n\xa0\xa0\xa0\xa0$viewProps.visibleVerticalRuler:=True\n\xa0Else\n\xa0\xa0\xa0\xa0$viewProps.visibleHorizontalRuler:=False\n\xa0End if\n\xa0WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)\n'})}),"\n",(0,n.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/es/WritePro/commands/wp-set-view-properties",children:"WP SET VIEW PROPERTIES"})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},945434:(e,s,r)=>{r.d(s,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAIAAAAvYqvDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGTSURBVDhPY3z27BkDcYAJShMBSFCK5oDfX57dvnL79U92USVNZVl+dqgwGCBM/XBlWaGjkWVC76YjR47snVXmaKIbPOnkm99QabjSD0frXRLOui08c3nX3MZEW3EG0ejlZ/YU/651jF95D6Ya6IBn52Z4SCWsuAZiPnt2cYaH39xrDx8+BHGurU6V0qzdC2aDTL21deKvqjw7AZDOnx+fP3vJy/jr008Qj0HAuqTLoH/O4c9ANlDpgzObeLyMJMBSDA8OL9n76Nza2ZuufIAI8Nr6h+w6fwfIgrhVW0YaTDMwqPtkBSrZJFQnWohCRViZWd9++gZkAJUyM7NdfPAYIo4FfP72XllCCMgAKpU1D2RZuPM6IlRQwIvdC/f7mKkAWSAHKPhWOi6uWw0PFAT4fW9ZbgVba7wxK4gHCoZnzx4e6XcQ1slaevQWOFxA4P6JpbnGwjrFm6GB+AwRsb/fXFzdWtCw/o2IrAAzw9eXL/ltcxqbM+2kwCYCAUYi/P3l7ftvf5m5BIV5YGqgYIDTKwMDAJVMvdE9VEl9AAAAAElFTkSuQmCC"},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>a});var n=r(296540);const i={},o=n.createContext(i);function l(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);