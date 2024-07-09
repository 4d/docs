/*! For license information please see 002be103.d7d237d7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8418],{250485:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var r=d(474848),l=d(28453);const i={id:"onAfterEdit",title:"On After Edit"},s=void 0,t={id:"Events/onAfterEdit",title:"On After Edit",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                            | Definici\xf3n                                                                     |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Events/onAfterEdit.md",sourceDirName:"Events",slug:"/Events/onAfterEdit",permalink:"/docs/es/Events/onAfterEdit",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterEdit.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onAfterEdit",title:"On After Edit"},sidebar:"docs",previous:{title:"On Activate",permalink:"/docs/es/Events/onActivate"},next:{title:"On After Keystroke",permalink:"/docs/es/Events/onAfterKeystroke"}},c={},o=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Caso general",id:"Caso-general",level:3},{value:"4D View Pro",id:"4D-View-Pro",level:3},{value:"action = editChange",id:"action--editChange",level:4},{value:"action = valueChanged",id:"action--valueChanged",level:4},{value:"action = DragDropBlock",id:"action--DragDropBlock",level:4},{value:"action = DragFillBlock",id:"action--DragFillBlock",level:4},{value:"action = formulaChanged",id:"action--formulaChanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardPasted",level:4},{value:"Ejemplo",id:"Ejemplo",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Puede ser llamado por"}),(0,r.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"45"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formulario - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listOverview",children:"Lista Jer\xe1rquica"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"Lista de selecci\xf3n"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"Columna de lista de selecci\xf3n"})]}),(0,r.jsx)(n.td,{children:"El contenido del objeto introducible que tiene el foco acaba de ser modificado"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.h3,{id:"Caso-general",children:"Caso general"}),"\n",(0,r.jsx)(n.p,{children:"Este evento se puede utilizar para filtrar la entrada de datos en los objetos editables por teclado en el nivel m\xe1s bajo."}),"\n",(0,r.jsxs)(n.p,{children:["Cuando se utiliza, este evento se genera despu\xe9s de cada cambio realizado en el contenido de un objeto editable, independientemente de la acci\xf3n que haya provocado la modificaci\xf3n, ",(0,r.jsx)(n.em,{children:"es decir"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Acciones de edici\xf3n est\xe1ndar que modifican el contenido como pegar, cortar, borrar o cancelar;"}),"\n",(0,r.jsx)(n.li,{children:"Soltar un valor (acci\xf3n similar a pegar);"}),"\n",(0,r.jsxs)(n.li,{children:["Toda entrada de teclado realizada por el usuario; en este caso, el evento ",(0,r.jsx)(n.code,{children:"On After Edit"})," se genera despu\xe9s de los eventos [",(0,r.jsx)(n.code,{children:"On Before Keystroke"}),"](onBeforeKeystroke. d) y ",(0,r.jsx)(n.a,{href:"/docs/es/Events/onAfterKeystroke",children:(0,r.jsx)(n.code,{children:"On After Keystroke"})}),", si se utilizan."]}),"\n",(0,r.jsxs)(n.li,{children:["Cualquier modificaci\xf3n realizada mediante un comando del lenguaje que simule una acci\xf3n del usuario (es decir, ",(0,r.jsx)(n.code,{children:"POST KEY"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Dentro del evento ",(0,r.jsx)(n.code,{children:"On After Edit"}),", los datos de texto que se ingresan son devueltos por el comando ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page655.html",children:(0,r.jsx)(n.code,{children:"Get edited text"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"4D-View-Pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["El objeto devuelto por el comando ",(0,r.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entero largo"}),(0,r.jsx)(n.td,{children:"On After Edit"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On After Edit"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["En funci\xf3n del valor de la propiedad ",(0,r.jsx)(n.code,{children:"action"}),", el ",(0,r.jsx)(n.a,{href:"/docs/es/Events/overview#event-object",children:"objeto evento"})," contendr\xe1 propiedades adicionales."]}),"\n",(0,r.jsx)(n.h4,{id:"action--editChange",children:"action = editChange"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editingText"}),(0,r.jsx)(n.td,{children:"variant"}),(0,r.jsx)(n.td,{children:"El valor proveniente del editor actual"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"action--valueChanged",children:"action = valueChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oldValue"}),(0,r.jsx)(n.td,{children:"variant"}),(0,r.jsx)(n.td,{children:"Valor de la celda antes de la modificaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"newValue"}),(0,r.jsx)(n.td,{children:"variant"}),(0,r.jsx)(n.td,{children:"Valor de la celda luego de la modificaci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"action--DragDropBlock",children:"action = DragDropBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fromRange"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas fuente (que se arrastra)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"toRange"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de la celda de destino (ubicaci\xf3n de soltar)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"copy"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Indica si el rango fuente se copia o no"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"insert"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Indica si el rango fuente se inserta o no"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"action--DragFillBlock",children:"action = DragFillBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillRange"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Gama utilizada para el relleno"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoFillType"}),(0,r.jsx)(n.td,{children:"entero largo"}),(0,r.jsxs)(n.td,{children:["Valor utilizado para el llenado.",(0,r.jsx)(n.li,{children:"0: las celdas se llenan con todos los datos (valores, formato y f\xf3rmulas)"}),(0,r.jsx)(n.li,{children:"1: las celdas se llenan con datos secuenciales autom\xe1ticamente"}),(0,r.jsx)(n.li,{children:"2: las celdas se llenan solo con formato"}),(0,r.jsx)(n.li,{children:"3: las celdas se llenan con valores pero no con formato"}),(0,r.jsx)(n.li,{children:"4: los valores se eliminan de las celdas"}),(0,r.jsx)(n.li,{children:"5: las celdas se llenan autom\xe1ticamente"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fillDirection"}),(0,r.jsx)(n.td,{children:"entero largo"}),(0,r.jsxs)(n.td,{children:["Direcci\xf3n del llenado.",(0,r.jsx)(n.li,{children:"0: se llenan las celdas a la izquierda"}),(0,r.jsx)(n.li,{children:"1: se llenan las celdas a la derecha"}),(0,r.jsx)(n.li,{children:"2: se llenan las celdas de arriba"}),(0,r.jsx)(n.li,{children:"3: se llenan las celdas de abajo"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"action--formulaChanged",children:"action = formulaChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"La f\xf3rmula introducida"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"action--clipboardPasted",children:"action = clipboardPasted"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pasteOption"}),(0,r.jsx)(n.td,{children:"entero largo"}),(0,r.jsxs)(n.td,{children:["Especifica lo que se pega en el portapapeles:",(0,r.jsx)(n.li,{children:"0: todo es pegado (valores, formato y f\xf3rmulas)"}),(0,r.jsx)(n.li,{children:"1: solo los valores se pegan"}),(0,r.jsx)(n.li,{children:"2: solo el formato se pega"}),(0,r.jsx)(n.li,{children:"3: solo las f\xf3rmulas se pegan"}),(0,r.jsx)(n.li,{children:"4: los valores y el formato se pegan (no las f\xf3rmulas)"}),(0,r.jsx)(n.li,{children:"5: las f\xf3rmulas y el formato se pegan (no los valores)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pasteData"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsxs)(n.td,{children:["Los datos del portapapeles a pegar",(0,r.jsx)(n.li,{children:'"text" (texto): el texto del portapapeles'}),(0,r.jsx)(n.li,{children:'"html" (texto): el HTML del portapapeles'})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Aqu\xed hay un ejemplo de manejo de un evento ",(0,r.jsx)(n.code,{children:"On After Edit"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"El ejemplo anterior podr\xeda generar un objeto evento como este:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,d)=>{var r=d(296540),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,d){var r,i={},o=null,a=null;for(r in void 0!==d&&(o=""+d),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:l,type:e,key:o,ref:a,props:i,_owner:t.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},474848:(e,n,d)=>{e.exports=d(221020)},28453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>t});var r=d(296540);const l={},i=r.createContext(l);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);