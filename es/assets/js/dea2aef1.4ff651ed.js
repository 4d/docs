"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58202],{242111:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>j,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=d(474848),r=d(28453);const t={id:"overview",title:"Generalidades"},o=void 0,i={id:"Events/overview",title:"Generalidades",description:"Los eventos formulario son eventos que pueden llevar a la ejecuci\xf3n del m\xe9todo de formulario y/o del o de los m\xe9todos objeto de formulario. Los eventos de formulario le permiten controlar el flujo de su aplicaci\xf3n y escribir c\xf3digo que se ejecuta s\xf3lo cuando ocurre un evento espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/es/19/Events/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"overview",title:"Generalidades"},sidebar:"docs",previous:{title:"\xc1rea Web",permalink:"/docs/es/19/FormObjects/propertiesWebArea"},next:{title:"On Activate",permalink:"/docs/es/19/Events/onActivate"}},l={},c=[{value:"Objeto evento",id:"objeto-evento",level:2},{value:"Eventos y m\xe9todos",id:"eventos-y-m\xe9todos",level:2},{value:"Tabla de llamadas",id:"tabla-de-llamadas",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Los eventos formulario son eventos que pueden llevar a la ejecuci\xf3n del m\xe9todo de formulario y/o del o de los m\xe9todos objeto de formulario. Los eventos de formulario le permiten controlar el flujo de su aplicaci\xf3n y escribir c\xf3digo que se ejecuta s\xf3lo cuando ocurre un evento espec\xedfico."}),"\n",(0,s.jsxs)(e.p,{children:["En su c\xf3digo, se controlan los eventos mediante el comando ",(0,s.jsx)(e.code,{children:"FORM Event"}),", que devuelve el evento disparado. Por ejemplo:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"//code of a button\nIf(FORM Event.code=On Clicked) \n// hacer algo cuando se presiona el bot\xf3n\nEnd if\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Cada formulario y cada objeto activo en el formulario puede escuchar un conjunto predefinido de eventos, pero s\xf3lo los eventos que habilit\xf3 a nivel del formulario y/o en cada nivel del objeto ocurrir\xe1n realmente."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"objeto-evento",children:"Objeto evento"}),"\n",(0,s.jsxs)(e.p,{children:["Cada evento es devuelto como un objeto por el comando ",(0,s.jsx)(e.code,{children:"FORM Event"}),". Por defecto, contiene las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Propiedad"}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"objectName"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Name of the object triggering the event - Not included if the event is triggered by the form"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Se devuelven propiedades adicionales cuando el evento se produce en objetos espec\xedficos. En particular:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Los ",(0,s.jsx)(e.a,{href:"/docs/es/19/FormObjects/listboxOverview#supported-form-events",children:"list box"})," y las ",(0,s.jsx)(e.a,{href:"/docs/es/19/FormObjects/listboxOverview#supported-form-events-1",children:"columnas de list box"})," devuelven las ",(0,s.jsx)(e.a,{href:"/docs/es/19/FormObjects/listboxOverview#additional-properties",children:"propiedades adicionales"})," tales como ",(0,s.jsx)(e.code,{children:"columnName"})," o ",(0,s.jsx)(e.code,{children:"isRowSelected"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Las ",(0,s.jsx)(e.a,{href:"/docs/es/19/FormObjects/viewProAreaOverview",children:"\xe1reas de View Pro"})," devuelven por ejemplo las propiedades ",(0,s.jsx)(e.code,{children:"sheetName"})," o ",(0,s.jsx)(e.code,{children:"action"})," en el objeto evento ",(0,s.jsx)(e.a,{href:"/docs/es/19/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"eventos-y-m\xe9todos",children:"Eventos y m\xe9todos"}),"\n",(0,s.jsx)(e.p,{children:"Cuando se produce un evento formulario, 4D realiza las siguientes acciones:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"En primer lugar, explora los objetos del formulario y llama al m\xe9todo objeto para todo objeto (asociado al evento) cuya propiedad de evento de objeto correspondiente haya sido seleccionada."}),"\n",(0,s.jsx)(e.li,{children:"Luego, llama al m\xe9todo formulario si la propiedad del evento formulario correspondiente ha sido seleccionada."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"No asuma que los m\xe9todos objeto, si los hay, ser\xe1n llamados en un orden particular. La regla general es que los m\xe9todos objeto siempre se llaman antes que el m\xe9todo formulario. Si un objeto es un subformulario, se llaman los m\xe9todos objeto del formulario lista del subformulario, y luego se llama al m\xe9todo formulario del formulario listado. 4D contin\xfaa llamando a los m\xe9todos objeto del formulario padre. En otras palabras, cuando un objeto es un subformulario, 4D utiliza la misma regla general para los m\xe9todos objeto y formulario dentro del objeto subformulario."}),"\n",(0,s.jsxs)(e.p,{children:["Excepto en los eventos ",(0,s.jsx)(e.a,{href:"/docs/es/19/Events/onLoad",children:"En carga"})," y ",(0,s.jsx)(e.a,{href:"/docs/es/19/Events/onUnload",children:"En descarga"})," (ver m\xe1s abajo), si la propiedad del evento formulario no est\xe1 seleccionada para un evento determinado, esto no impide las llamadas a los m\xe9todos objetos cuya misma propiedad de evento est\xe1 seleccionada. En otras palabras, la activaci\xf3n o desactivaci\xf3n de un evento a nivel de formulario no tiene ning\xfan efecto sobre las propiedades del evento del objeto."]}),"\n",(0,s.jsx)(e.p,{children:"El n\xfamero de objetos asociados a un evento depende de la naturaleza del mismo."}),"\n",(0,s.jsx)(e.h2,{id:"tabla-de-llamadas",children:"Tabla de llamadas"}),"\n",(0,s.jsx)(e.p,{children:"El n\xfamero de objetos asociados a un evento depende de la naturaleza del mismo."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Evento"}),(0,s.jsx)(e.th,{children:"M\xe9todo objeto"}),(0,s.jsx)(e.th,{children:"M\xe9todo formulario"}),(0,s.jsx)(e.th,{children:"Objetos"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Load"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Unload"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Validate"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Clicked"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Double Clicked"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Before Keystroke"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On After Keystroke"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On After Edit"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Getting Focus"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Losing Focus"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Activate"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Deactivate"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Outside Call"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Page Change"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Begin Drag Over"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Drop"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Drag Over"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Mouse Enter"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Mouse Move"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Mouse Leave"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Mouse Up"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Menu Selected"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Bound variable change"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Data Change"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Plug in Area"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Header"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Printing Detail"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Printing Break"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Printing Footer"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Close Box"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Display Detail"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Todos los objetos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Open Detail"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguna, excepto los list box"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Close Detail"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguna, excepto los list box"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Resize"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Selection Change"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Load Record"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Timer"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Ninguno"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Scroll"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Before Data Entry"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Column Moved"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Row Moved"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Column Resize"}),(0,s.jsx)(e.td,{children:"S\xed (List box y \xc1rea 4D View Pro)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Header Click"}),(0,s.jsx)(e.td,{children:"S\xed (List box y \xc1rea 4D View Pro)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Footer Click"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On After Sort"}),(0,s.jsx)(e.td,{children:"S\xed (List box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Long Click"}),(0,s.jsx)(e.td,{children:"S\xed (bot\xf3n)"}),(0,s.jsx)(e.td,{children:"S\xed"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Alternative Click"}),(0,s.jsx)(e.td,{children:"S\xed (Bot\xf3n y List box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Expand"}),(0,s.jsx)(e.td,{children:"S\xed (Lista jerarq. y list box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Collapse"}),(0,s.jsx)(e.td,{children:"S\xed (Lista jerarq. y list box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Delete Action"}),(0,s.jsx)(e.td,{children:"S\xed (Lista jerarq. y list box)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On URL Resource Loading"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Begin URL Loading"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On URL Loading Error"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On URL Filtering"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On End URL Loading"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Open External Link"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Window Opening Denied"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea Web)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On VP Range Changed"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea 4D View Pro)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On VP Ready"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea 4D View Pro)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"On Row Resize"}),(0,s.jsx)(e.td,{children:"S\xed (\xc1rea 4D View Pro)"}),(0,s.jsx)(e.td,{children:"Nunca"}),(0,s.jsx)(e.td,{children:"Objetos involucrados \xfanicamente"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Tenga siempre en cuenta que, para todo evento, se llama al m\xe9todo de un formulario o de un objeto si se selecciona la correspondiente propiedad del evento para el formulario o los objetos. La ventaja de desactivar los eventos en el entorno de dise\xf1o (utilizando la lista de propiedades del editor de formularios) es que puede reducir el n\xfamero de llamadas a los m\xe9todos y, por tanto, optimizar significativamente la velocidad de ejecuci\xf3n de sus formularios."}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["ATENCI\xd3N: los eventos ",(0,s.jsx)(e.a,{href:"/docs/es/19/Events/onLoad",children:"On Load"})," y ",(0,s.jsx)(e.a,{href:"/docs/es/19/Events/onUnload",children:"On Unload"})," se generan para los objetos si est\xe1n activados a la vez para los objetos y para el formulario al que pertenecen los objetos. Si los eventos est\xe1n activados s\xf3lo para los objetos, no se producir\xe1n; estos dos eventos tambi\xe9n deben estar activados a nivel del formulario."]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>o,x:()=>i});var s=d(296540);const r={},t=s.createContext(r);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);