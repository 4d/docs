"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78669],{556113:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(474848),s=r(28453);const i={id:"form-convert-to-dynamic",title:"FORM Convert to dynamic",slug:"/commands/form-convert-to-dynamic",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/form-convert-to-dynamic",title:"FORM Convert to dynamic",description:"FORM Convert to dynamic ( {tabla ;} nomFormulario ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-convert-to-dynamic.md",sourceDirName:"commands-legacy",slug:"/commands/form-convert-to-dynamic",permalink:"/docs/es/commands/form-convert-to-dynamic",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-convert-to-dynamic.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"form-convert-to-dynamic",title:"FORM Convert to dynamic",slug:"/commands/form-convert-to-dynamic",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Form",permalink:"/docs/es/commands/form"},next:{title:"FORM FIRST PAGE",permalink:"/docs/es/commands/form-first-page"}},t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FORM Convert to dynamic"})," ( {",(0,o.jsx)(n.em,{children:"tabla"})," ;} ",(0,o.jsx)(n.em,{children:"nomFormulario"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabla"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabla de formulario"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomFormulario"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:'Nombre de un proyecto "cl\xe1sico" o formulario tabla'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"nomFormulario convertido a formulario din\xe1mico"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"FORM Convert to dynamic"})," convierte el ",(0,o.jsx)(n.em,{children:"nomFormulario"})," (formulario cl\xe1sico) a un formulario din\xe1mico y lo devuelve en un objeto."]}),"\n",(0,o.jsxs)(n.p,{children:["Los ",(0,o.jsx)(n.em,{children:"formularios cl\xe1sicos"})," son formularios 4D almacenados dentro del archivo de estructura en formato binario. Los ",(0,o.jsx)(n.em,{children:"formularios din\xe1micos"})," son formularios cuyas estructuras se definen en un objeto 4D (o un archivo .json). Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"Formularios din\xe1micos"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si desea convertir un formulario de tabla, pase la tabla de formulario en el par\xe1metro ",(0,o.jsx)(n.em,{children:"tabla"})," y luego pase su nombre como una cadena en ",(0,o.jsx)(n.em,{children:"nomFormulario"}),". Para un formulario de proyecto, pase el nombre del formulario directamente en ",(0,o.jsx)(n.em,{children:"nomFormulario"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Para poder ejecutar el formulario directamente pasando el objeto resultante al comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"}),", ",(0,o.jsx)(n.strong,{children:"FORM Convert to dynamic"})," aplica reglas espec\xedficas al convertir el formulario:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Las referencias a listas se exportan por nombre en lugar de un puntero JSON que hace referencia al archivo lists.json."}),"\n",(0,o.jsx)(n.li,{children:"Las referencias a los filtros con nombre y a los formatos de visualizaci\xf3n con nombre (utilizando el car\xe1cter prefijo '|') se exportan por valor en lugar de un puntero JSON que hace referencia al archivo filters.json."}),"\n",(0,o.jsxs)(n.li,{children:['Dado que las im\xe1genes de la librer\xeda de im\xe1genes no son exportadas por el comando, los objetos que hacen referencia a una imagen de la librer\xeda de im\xe1genes a\xfan hacen referencia a la librer\xeda despu\xe9s de la conversi\xf3n. En su propiedad "icon", utilizan una url "pictlib: xx" especial, donde ',(0,o.jsx)(n.em,{children:"xx"})," es el ID en la librer\xeda."]}),"\n",(0,o.jsx)(n.li,{children:"Las im\xe1genes est\xe1ticas se convierten como propiedades objeto tipo imagen."}),"\n",(0,o.jsx)(n.li,{children:"Los objetos obsoletos se ignoran. Consulte el p\xe1rrafo para ver la lista de objetos o propiedades que no son soportadas en formularios din\xe1micos."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," las referencias al m\xe9todo de formulario y los m\xe9todos objeto de formulario se exportan con identificadores internos, que ser\xe1n v\xe1lidos solo en la base de datos actual mientras que los m\xe9todos ",(0,o.jsx)(n.em,{children:"nomFormulario"}),' no se modifiquen. Si desea utilizar el formulario exportado en otro contexto, debe asignar nombres de m\xe9todo de proyecto a la propiedad "m\xe9todo" del formulario u objeto de formulario (ver ejemplo).']}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Desea convertir un formulario cl\xe1sico, modificarlo y mostrarlo."}),"\n",(0,o.jsx)(n.p,{children:"El formulario original:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(507778).A+"",width:"499",height:"253"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $dynForm : Object\n\xa0$dynForm:=FORM Convert to dynamic("FormToConvert")\n\xa0$dynForm.pages[1].objects.TitleArea.stroke:="red"\n\xa0$dynForm.pages[1].objects.bOK.method:="myMethod"\xa0//asocia un m\xe9todo proyecto\n\xa0DIALOG($dynForm)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Si ejecuta el c\xf3digo:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(550904).A+"",width:"424",height:"251"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/export-structure-file",children:"Export structure file"})]})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},507778:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/pict3977360.en-0c0d5ff744828490012f7ba86aee899b.png"},550904:(e,n,r)=>{r.d(n,{A:()=>o});const o="data:image/png;base64,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"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var o=r(296540);const s={},i=o.createContext(s);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);