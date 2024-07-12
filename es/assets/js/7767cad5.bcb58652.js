/*! For license information please see 7767cad5.bcb58652.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92145],{814694:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=r(474848),d=r(28453);const o={id:"vp-run-offscreen-area",title:"VP Run offscreen area"},a=void 0,t={id:"ViewPro/commands/vp-run-offscreen-area",title:"VP Run offscreen area",description:"VP Run offscreen area ( parameters Mixed",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-run-offscreen-area.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-run-offscreen-area",permalink:"/docs/es/20-R5/ViewPro/commands/vp-run-offscreen-area",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-run-offscreen-area.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-run-offscreen-area",title:"VP Run offscreen area"},sidebar:"docs",previous:{title:"VP ROW AUTOFIT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-row-autofit"},next:{title:"S",permalink:"/docs/es/20-R5/commands/S"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Run offscreen area"})," ( ",(0,s.jsx)(n.em,{children:"parameters"})," : Object) : Mixed"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parameters"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto que contiene los atributos del \xe1rea fuera de pantalla"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Mixed"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsxs)(n.td,{children:["propiedad ",(0,s.jsx)(n.code,{children:".result"})," del objeto ",(0,s.jsx)(n.code,{children:".onEvent"}),", o Null si no devuelve ning\xfan valor"]}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP Run offscreen area"})," crea un \xe1rea fuera de pantalla en la memoria que puede ser utilizada para procesar comandos y funciones del \xe1rea 4D View Pro."]}),"\n",(0,s.jsxs)(n.p,{children:["En el objeto ",(0,s.jsx)(n.em,{children:"parameters"}),", pase una de las siguientes propiedades opcionales. Estas propiedades estar\xe1n disponibles a trav\xe9s del comando ",(0,s.jsx)(n.code,{children:"This"})," dentro del m\xe9todo ",(0,s.jsx)(n.code,{children:"onEvent"})," y har\xe1n referencia a la instancia:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'El nombre del \xe1rea fuera de la pantalla. Si se omite o es null, se asigna un nombre gen\xe9rico (por ejemplo, "OffscreenArea1").'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onEvent"}),(0,s.jsx)(n.td,{children:"objet (f\xf3rmula)"}),(0,s.jsxs)(n.td,{children:["Un m\xe9todo retro llamada que se lanzar\xe1 cuando el \xe1rea fuera de la pantalla est\xe9 lista. It can be either:",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.code,{children:"onEvent"})," function of a class, or"]}),(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.code,{children:"Formula"})," object"]}),"By default, the callback method is called on the ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onVpReady",children:(0,s.jsx)(n.code,{children:"On VP Ready"})}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onLoad",children:(0,s.jsx)(n.code,{children:"On Load"})}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onUnload",children:(0,s.jsx)(n.code,{children:"On Unload"})}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onVpRangeChanged",children:(0,s.jsx)(n.code,{children:"On VP Range Changed"})}),", or ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onTimer",children:(0,s.jsx)(n.code,{children:"On Timer"})})," events. The callback method can be used to access the ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/configuring#4d-view-pro-form-object-variable",children:"4D View Pro form object variable"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autoQuit"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True (default value) if the command must stop the formula execution when the ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})})," or ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})})," events occur. If false, you must use the ",(0,s.jsx)(n.code,{children:"CANCEL"})," or ",(0,s.jsx)(n.code,{children:"ACCEPT"})," commands in the ",(0,s.jsx)(n.em,{children:"onEvent"})," callback method."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Tiempo m\xe1ximo (expresado en segundos) antes de que el \xe1rea se cierre autom\xe1ticamente si no se genera ning\xfan evento. Si se fija en 0, no se aplica ninguna limitaci\xf3n. Valor por defecto: 60"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result"}),(0,s.jsx)(n.td,{children:"mixto"}),(0,s.jsx)(n.td,{children:"Resultado del procesamiento (si hay)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<customProperty>"})}),(0,s.jsx)(n.td,{children:"mixto"}),(0,s.jsxs)(n.td,{children:["Todo atributo personalizado que est\xe9 disponible en el m\xe9todo de retrollamada ",(0,s.jsx)(n.em,{children:"onEvent"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"La siguiente propiedad es a\xf1adida autom\xe1ticamente por el comando si es necesario:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeoutReached"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"A\xf1adido con el valor true si se ha excedido el tiempo de espera"})]})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["El \xe1rea fuera de pantalla solo est\xe1 disponible durante la ejecuci\xf3n del comando ",(0,s.jsx)(n.code,{children:"VP Run offscreen area"}),". Se destruir\xe1 autom\xe1ticamente una vez finalizada la ejecuci\xf3n."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes comandos se pueden utilizar en el m\xe9todo de retrollamada:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ACCEPT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"CANCEL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET TIMER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WA Evaluate JavaScript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Quiere crear un \xe1rea 4D View Pro fuera de la pantalla y obtener el valor de una celda:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// cs.OffscreenArea class declaration \nClass constructor ($path : Text)\n This.filePath:=$path\n \n// This function will be called on each event of the offscreen area \nFunction onEvent()\n Case of\n  :(FORM Event.code=On VP Ready)\n      VP IMPORT DOCUMENT(This.area;This.filePath)\n       This.result:=VP Get value(VP Cell(This.area;6;22))\n \n       ALERT("The G23 cell contains the value: "+String(This.result))\n End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo de retrollamada ",(0,s.jsx)(n.em,{children:"OffscreenArea"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Quiere cargar un documento grande fuera de la pantalla, esperar a que todos los c\xe1lculos se completen y exportarlo como PDF:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//cs.OffscreenArea class declaration\nClass constructor($pdfPath : Text)\n This.pdfPath:=$pdfPath\n This.autoQuit:=False\n This.isWaiting:=False\n \nFunction onEvent()\n Case of\n     :(FORM Event.code=On VP Ready)\n // Document import\n   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)\n         This.isWaiting:=True\n \n // Start a timer to verify if all calculations are finished.\n // If during this period the "On VP Range Changed" is thrown, the timer will be restarted\n // The time must be defined according to the computer configuration.\n   SET TIMER(60)\n \n  :(FORM Event.code=On VP Range Changed)\n // End of calculation detected. Restarts the timer\n         If(This.isWaiting)\n           SET TIMER(60)\n         End if\n \n  :(FORM Event.code=On Timer)\n // To be sure to not restart the timer if you call others 4D View command after this point\n         This.isWaiting:=False\n \n\n\n // Stop the timer\n   SET TIMER(0)\n \n // Start the PDF export\n        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))\n \n     :(FORM Event.code=On URL Loading Error)\n\n         CANCEL \n End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo de retrollamada ",(0,s.jsx)(n.em,{children:"OffscreenArea"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n \n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-end-of-document-loading/",children:"Blog post: End of document loading"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var s=r(296540),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,o={},c=null,l=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,s)&&!i.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:d,type:e,key:c,ref:l,props:o,_owner:t.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>t});var s=r(296540);const d={},o=s.createContext(d);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);