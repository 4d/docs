"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15113],{991937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var a=s(474848),l=s(28453);const o={id:"vp-create-table",title:"VP CREATE TABLE"},c=void 0,r={id:"ViewPro/commands/vp-create-table",title:"VP CREATE TABLE",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-create-table.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-create-table",permalink:"/docs/es/20-R6/ViewPro/commands/vp-create-table",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-create-table.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-create-table",title:"VP CREATE TABLE"},sidebar:"docs",previous:{title:"VP Copy to object",permalink:"/docs/es/20-R6/ViewPro/commands/vp-copy-to-object"},next:{title:"D",permalink:"/docs/es/20-R6/commands/D"}},d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Lanzamiento"}),(0,a.jsx)(n.th,{children:"Modificaciones"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"19 R8"}),(0,a.jsxs)(n.td,{children:["Soporte de opciones de tema: ",(0,a.jsx)(n.code,{children:"bandColumns"}),", ",(0,a.jsx)(n.code,{children:"bandRows"}),", ",(0,a.jsx)(n.code,{children:"highlightFirstColumn"}),", ",(0,a.jsx)(n.code,{children:"highlightLastColumn"}),", ",(0,a.jsx)(n.code,{children:"theme"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"19 R7"}),(0,a.jsxs)(n.td,{children:["Soporte de la opci\xf3n ",(0,a.jsx)(n.code,{children:"allowAutoExpand"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"19 R6"}),(0,a.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VP CREATE TABLE"})," ( ",(0,a.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,a.jsx)(n.em,{children:"tableName"})," : Text {; ",(0,a.jsx)(n.em,{children:"source"})," : Text} {; ",(0,a.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableOptions} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metros"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"rangeObj"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Objeto rango"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tableName"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Nombre de la tabla"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"source"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Nombre de la propiedad del contexto de datos a mostrar en la tabla"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"options"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/classes#tableoptions",children:"cs.ViewPro.TableOptions"})}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Opciones adicionales"}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.code,{children:"VP CREATE TABLE"})," crea una tabla en el rango especificado. Puede crear una tabla en un rango de celdas para facilitar la gesti\xf3n y el an\xe1lisis de un grupo de datos relacionados. Una tabla suele contener datos relacionados en filas y columnas, y aprovecha un ",(0,a.jsx)(n.a,{href:"vp-set-data-context",children:"contexto de datos"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(171641).A+"",width:"1078",height:"324"})}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"rangeObj"}),", pase el rango de celdas donde se crear\xe1 la tabla."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"tableName"}),", introduzca un nombre para la tabla. El nombre debe:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ser \xfanico en la hoja"}),"\n",(0,a.jsx)(n.li,{children:"incluir al menos 5 caracteres"}),"\n",(0,a.jsx)(n.li,{children:"no incluir espacios o empezar con un n\xfamero"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"source"}),", puede pasar un nombre de propiedad de un ",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-data-context",children:"data context"})," para mostrar sus datos en la tabla. Esto vincula la tabla al contexto de datos. Cuando se actualiza el contexto de los datos, los datos mostrados en la tabla se actualizan en consecuencia. La propiedad ",(0,a.jsx)(n.em,{children:"source"})," debe contener una colecci\xf3n de objetos y cada elemento representa una fila."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si no especifica una ",(0,a.jsx)(n.em,{children:"source"}),", el comando crea una tabla vac\xeda con el tama\xf1o definido en ",(0,a.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Si la ",(0,a.jsx)(n.em,{children:"source"})," especificada no se puede mostrar completamente en el documento, no se crea ninguna tabla."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"options"}),", pase un objeto de la clase ",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/classes#tableoptions",children:(0,a.jsx)(n.code,{children:"cs.ViewPro.TableOptions"})})," que contenga las propiedades de la tabla a definir."]}),"\n",(0,a.jsxs)(n.p,{children:["Dentro del objeto ",(0,a.jsx)(n.em,{children:"options"}),", la colecci\xf3n ",(0,a.jsx)(n.em,{children:"tableColumns"})," determina la estructura de las columnas de la tabla. La longitud de la colecci\xf3n ",(0,a.jsx)(n.em,{children:"tableColumns"})," debe ser igual al recuento de columnas del rango:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Cuando el conteo de columnas en ",(0,a.jsx)(n.em,{children:"rangeObj"})," excede el n\xfamero de columnas en ",(0,a.jsx)(n.em,{children:"tableColumns"}),", la tabla se llena con columnas vac\xedas adicionales."]}),"\n",(0,a.jsxs)(n.li,{children:["Cuando la cuenta de columnas en ",(0,a.jsx)(n.em,{children:"rangeObj"})," es inferior al n\xfamero de ",(0,a.jsx)(n.em,{children:"tableColumns"}),", la tabla muestra un n\xfamero de columnas que coinciden con el recuento de columnas del rango."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa una ",(0,a.jsx)(n.em,{children:"source"})," pero no la opci\xf3n ",(0,a.jsx)(n.em,{children:"tableColumn"}),", el comando genera las columnas autom\xe1ticamente. En este caso, ",(0,a.jsx)(n.em,{children:"rangeObj"})," debe ser un rango de celdas. De lo contrario, se utilizar\xe1 la primera celda del rango. Cuando se generan columnas autom\xe1ticamente, se aplican las siguientes reglas:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Si los datos pasados al comando son una colecci\xf3n de objetos, los nombres de las propiedades se utilizan como t\xedtulos de las columnas. Por ejemplo:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'([{ LastName: \\"Freehafer\\", FirstName: \\"Nancy\\"},{ LastName: \\"John\\", FirstName: \\"Doe\\"})\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Aqu\xed los t\xedtulos de las columnas ser\xedan ",(0,a.jsx)(n.code,{children:"LastName"})," y ",(0,a.jsx)(n.code,{children:"FirstName"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Si los datos pasados al comando son una colecci\xf3n de valores escalares, deben contener una colecci\xf3n de subcolecciones:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"La colecci\xf3n de primer nivel contiene subcolecciones de valores. Cada subcolecci\xf3n define una l\xednea. Pasa una colecci\xf3n vac\xeda para saltar una l\xednea. El n\xfamero de valores de la primera subcolecci\xf3n determina cu\xe1ntas columnas se crean."}),"\n",(0,a.jsx)(n.li,{children:"Los \xedndices de las subcolecciones se utilizan como t\xedtulos de las columnas."}),"\n",(0,a.jsxs)(n.li,{children:["Cada subcolecci\xf3n define los valores de las celdas para la l\xednea. Los valores pueden ser ",(0,a.jsx)(n.code,{children:"Integer"}),", ",(0,a.jsx)(n.code,{children:"Real"}),", ",(0,a.jsx)(n.code,{children:"Boolean"}),", ",(0,a.jsx)(n.code,{children:"Text"}),", ",(0,a.jsx)(n.code,{children:"Date"}),", ",(0,a.jsx)(n.code,{children:"Null"}),", ",(0,a.jsx)(n.code,{children:"Time"})," o ",(0,a.jsx)(n.code,{children:"Picture"}),". Un valor ",(0,a.jsx)(n.code,{children:"Time"})," debe ser un objeto que contenga un atributo time, tal y como se describe en ",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Esto s\xf3lo funciona cuando se generan columnas autom\xe1ticamente. No puede utilizar una colecci\xf3n de datos escalares con la opci\xf3n ",(0,a.jsx)(n.em,{children:"tableColumns"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Para crear una tabla utilizando un contexto de datos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'// Define un contexto de datos\nvar $data : Object\n\n$data:=New object()\n$data.people:=New collection()\n$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))\n$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))\n\n\nVP SET DATA CONTEXT("ViewProArea"; $data)\n\n// Define las columnas de la tabla\nvar $options : cs.ViewPro.TableOptions\n\n$options:=cs.ViewPro.TableOptions.new()\n$options.tableColumns:=New collection()\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))\n$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))\n\n// Crea una tabla de la colecci\xf3n "people"\nVP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Aqu\xed est\xe1 el resultado:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(171641).A+"",width:"1078",height:"324"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-table-column-index",children:"VP Get table column index"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-remove-table",children:"VP REMOVE TABLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},171641:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/vp-create-table-58d4f5dc15eb48b9682accf08d7b8926.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var a=s(296540);const l={},o=a.createContext(l);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);