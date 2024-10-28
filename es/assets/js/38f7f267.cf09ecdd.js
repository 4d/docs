"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94362],{656518:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=i(474848),d=i(28453);const s={id:"action-info",title:"Action info",slug:"/commands/action-info",displayed_sidebar:"docs"},o=void 0,c={id:"commands-legacy/action-info",title:"Action info",description:"Action info ( action {; objetivo} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/action-info.md",sourceDirName:"commands-legacy",slug:"/commands/action-info",permalink:"/docs/es/commands/action-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faction-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"action-info",title:"Action info",slug:"/commands/action-info",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"4D",permalink:"/docs/es/commands/4d"},next:{title:"Call chain",permalink:"/docs/es/commands/call-chain"}},t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function r(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Action info"})," ( ",(0,a.jsx)(n.em,{children:"action"})," {; ",(0,a.jsx)(n.em,{children:"objetivo"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"action"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre o patr\xf3n de acci\xf3n est\xe1ndar incluyendo el par\xe1metro si es necesario"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objetivo"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Define el objetivo de la acci\xf3n para obtener informaci\xf3n: forma principal o forma actual"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Objeto que contiene el estado de la acci\xf3n como propiedades booleanas: isEnabled, isVisible, isChecked, isMixed, isUnknownState"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"Action info"})," devuelve diferente informaci\xf3n, incluida la disponibilidad y el estado, sobre la ",(0,a.jsx)(n.em,{children:"accion"})," definida en el ",(0,a.jsx)(n.em,{children:"objetivo"}),", de acuerdo con el contexto de la aplicaci\xf3n actual."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"accion"}),", pase el nombre de la acci\xf3n est\xe1ndar a verificar. Puede ser una cadena o una constante del tema ",(0,a.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),". Puede ser una cadena o una constante del tema ",(0,a.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),". Algunas acciones aceptan un elemento objetivo y par\xe1metros. En este caso, debe utilizar el patr\xf3n solicitado, por ejemplo ",(0,a.jsx)(n.em,{children:'"gotoPage?value=2"'})," or ",(0,a.jsx)(n.em,{children:"paragraph/backgroundPositionV?value=top."})]}),"\n",(0,a.jsxs)(n.p,{children:["La lista detallada de acciones se ofrece en la secci\xf3n ",(0,a.jsx)(n.em,{children:"Acciones est\xe1ndar"})," del manual de ",(0,a.jsx)(n.em,{children:"Dise\xf1o 4D"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," Tambi\xe9n se ofrecen acciones espec\xedficas adicionales para los documentos 4D Write Pro. Se detallan en la secci\xf3n ",(0,a.jsx)(n.em,{children:"Utilizar las acciones est\xe1ndar 4D Write Pro"})," del manual de referencia de 4D Write Pro."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar en ",(0,a.jsx)(n.em,{children:"objetivo"})," el contexto del formulario en el que se debe ejecutar la ",(0,a.jsx)(n.em,{children:"accion"}),", si est\xe1 disponible. Puede utilizar una de las siguientes constantes del tema ",(0,a.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"}),(0,a.jsx)(n.th,{children:"Comentario"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ak current form"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"El formulario actual es el formulario donde se llam\xf3 la acci\xf3n. Podr\xeda ser el formulario principal o un formulario tipo paleta delante del formulario principal del proceso actual."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ak main form"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"El formulario principal es el documento m\xe1s adelante o el formulario di\xe1logo del proceso, excluyendo cualquier ventana flotante o emergente."})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," si se omite el ",(0,a.jsx)(n.em,{children:"objetivo"}),", se utiliza por defecto el contexto ak current form."]}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"Action info"})," devuelve informaci\xf3n en forma de un objeto que contiene las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Propiedad"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Tipo"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"activado"}),(0,a.jsx)(n.td,{children:"Booleano"}),(0,a.jsx)(n.td,{children:"true si se puede invocar la acci\xf3n, false en caso contrario"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"estado"}),(0,a.jsx)(n.td,{children:"Cadena"}),(0,a.jsxs)(n.td,{children:["El valor puede ser una de las siguientes cadenas:",(0,a.jsx)(n.table,{children:(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:'"seleccionada"'}),(0,a.jsx)(n.td,{children:'la acci\xf3n est\xe1 seleccionada, lo que significa que la propiedad est\xe1 definida. Ejemplo: el texto seleccionado est\xe1 en negrita, la propiedad "estado" de la acci\xf3n est\xe1ndar ak font bold contiene "seleccionado"'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:'"no seleccionado"'}),(0,a.jsx)(n.td,{children:' la acci\xf3n est\xe1ndar no est\xe1 seleccionada, lo que significa que la propiedad no est\xe1 definida. Ejemplo: el texto seleccionado no est\xe1 en negrita, la propiedad "estado" de la acci\xf3n est\xe1ndar ak font bold contiene "no seleccionado". '})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:'"combinada"'}),(0,a.jsx)(n.td,{children:'la acci\xf3n es combinada, lo que significa que la propiedad est\xe1 parcialmente definida. Ejemplo: arte del texto seleccionado est\xe1 en "negrita", la propiedad "estado" de la acci\xf3n est\xe1ndar ak font bold contiene "combinada".'})]})]})})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"t\xedtulo"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:'Nombre actual localizado de la etiqueta de acci\xf3n. Ejemplo: "Deshacer, "Pegar", etc. para la versi\xf3n en ingl\xe9s.'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"visible"}),(0,a.jsx)(n.td,{children:"Booleano"}),(0,a.jsx)(n.td,{children:"true si la acci\xf3n es visible en el formulario"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Cadena"}),(0,a.jsxs)(n.td,{children:['Valor actual de la cadena de par\xe1metros de acci\xf3n (si existe). Por ejemplo, si la acci\xf3n est\xe1ndar es "fontSize?value=10pt", la propiedad ',(0,a.jsx)(n.em,{children:"valor"}),' contiene "10pt"']})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Si no se puede determinar el estado de la acci\xf3n (por ejemplo, si no se afecta a ning\xfan objeto o comando de men\xfa), el comando devuelve un objeto nulo (indefinido)."}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Desea saber si la acci\xf3n copiar est\xe1 disponible (es decir, si se han seleccionado algunos datos):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $actionInfo : Object\n\xa0var $isEnabled : Boolean\n\xa0$actionInfo:=Action info(ak copy)\n\xa0If(Not(Undefined($actionInfo.enabled)))\xa0//la acci\xf3n es definida en el proceso\n\xa0\xa0\xa0\xa0If(OB Get($actionInfo;"enabled"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//la acci\xf3n copiar est\xe1 disponible\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/invoke-action",children:"INVOKE ACTION"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var a=i(296540);const d={},s=a.createContext(d);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);