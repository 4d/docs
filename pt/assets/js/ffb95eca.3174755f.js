/*! For license information please see ffb95eca.3174755f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41946],{942169:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=t(474848),s=t(28453);const n={id:"propertiesAction",title:"A\xe7\xe3o"},d=void 0,i={id:"FormObjects/propertiesAction",title:"A\xe7\xe3o",description:"---",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/FormObjects/properties_Action.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesAction",permalink:"/docs/pt/FormObjects/propertiesAction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Action.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"propertiesAction",title:"A\xe7\xe3o"},sidebar:"docs",previous:{title:"Lista de propriedades JSON",permalink:"/docs/pt/FormObjects/propertiesReference"},next:{title:"Anima\xe7\xe3o",permalink:"/docs/pt/FormObjects/propertiesAnimation"}},a={},c=[{value:"Arrast\xe1vel",id:"Arrast\xe1vel",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON",level:4},{value:"Objectos suportados",id:"Objectos-suportados",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4},{value:"Solt\xe1vel",id:"Solt\xe1vel",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-1",level:4},{value:"Objectos suportados",id:"Objectos-suportados-1",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m-1",level:4},{value:"Executar m\xe9todo objecto",id:"Executar-m\xe9todo-objecto",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-2",level:4},{value:"Objectos suportados",id:"Objectos-suportados-2",level:4},{value:"M\xe9todos",id:"M\xe9todos",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-3",level:4},{value:"Objectos suportados",id:"Objectos-suportados-3",level:4},{value:"Linhas m\xf3veis",id:"Linhas-m\xf3veis",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-4",level:4},{value:"Objectos suportados",id:"Objectos-suportados-4",level:4},{value:"Multi-seleccion\xe1vel",id:"Multi-seleccion\xe1vel",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-5",level:4},{value:"Objectos suportados",id:"Objectos-suportados-5",level:4},{value:"Orden\xe1vel",id:"Orden\xe1vel",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-6",level:4},{value:"Objectos suportados",id:"Objectos-suportados-6",level:4},{value:"A\xe7\xe3o padr\xe3o",id:"A\xe7\xe3o-padr\xe3o",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON-7",level:4},{value:"Objectos suportados",id:"Objectos-suportados-7",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Arrast\xe1vel",children:"Arrast\xe1vel"}),"\n",(0,o.jsx)(r.p,{children:"Controlar se e como o usu\xe1rio pode arrastar o objeto. Por defeito, n\xe3o \xe9 permitida qualquer opera\xe7\xe3o de arrastamento."}),"\n",(0,o.jsx)(r.p,{children:"Est\xe3o dispon\xedveis dois modos de arrastamento:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Personalizado"}),": en este modo, toda operaci\xf3n de arrastrar realizada en el objeto dispara el evento formulario ",(0,o.jsx)(r.code,{children:"On Begin Drag"})," en el contexto del objeto. Em seguida, a a\xe7\xe3o de arrastamento \xe9 gerida atrav\xe9s de um m\xe9todo.",(0,o.jsx)(r.br,{}),"\nIn custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. Este modo se basa en una combinaci\xf3n de propiedades, eventos y comandos espec\xedficos del tema ",(0,o.jsx)(r.code,{children:"Portapapeles"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Autom\xe1tico"}),": en este modo, 4D ",(0,o.jsx)(r.strong,{children:"copia"})," el texto o las im\xe1genes directamente desde el objeto formulario. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:",(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.img,{src:t(484488).A+"",width:"648",height:"158"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.img,{src:t(909800).A+"",width:"421",height:"27"}),"\nIn this mode, the ",(0,o.jsx)(r.code,{children:"On Begin Drag"}),' form event is NOT generated. Si quiere "forzar" el uso del arrastre personalizado mientras est\xe1 activado el arrastre autom\xe1tico, mantenga presionada la tecla ',(0,o.jsx)(r.strong,{children:"Alt"})," (Windows) o ",(0,o.jsx)(r.strong,{children:"Opci\xf3n"})," (macOS) durante la acci\xf3n. Esta op\xe7\xe3o n\xe3o est\xe1 dispon\xedvel para as imagens."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html",children:"Arrastrar y soltar"})," en el manual ",(0,o.jsx)(r.em,{children:"Lenguaje 4D"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"dragging"}),(0,o.jsx)(r.td,{children:"text"}),(0,o.jsx)(r.td,{children:'"none" (por padr\xe3o), "custom", "automatic" (exceto list box)'})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados",children:"Objectos suportados"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"\xc1reas 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})]}),"\n",(0,o.jsx)(r.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"#droppable",children:"Droppable"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Solt\xe1vel",children:"Solt\xe1vel"}),"\n",(0,o.jsx)(r.p,{children:"Control whether and how the object can be the destination of a drag and drop operation."}),"\n",(0,o.jsx)(r.p,{children:"H\xe1 dois modos de soltar em 4D:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Personalizado"}),": en este modo, cualquier operaci\xf3n de soltar realizada en el objeto activa los eventos formulario ",(0,o.jsx)(r.code,{children:"On Drag Over"})," y ",(0,o.jsx)(r.code,{children:"On Drop"})," en el contexto del objeto. Em seguida, a a\xe7\xe3o de largar \xe9 gerida atrav\xe9s de um m\xe9todo.",(0,o.jsx)(r.br,{}),"\nIn custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. Este modo se basa en una combinaci\xf3n de propiedades, eventos y comandos espec\xedficos del tema ",(0,o.jsx)(r.code,{children:"Portapapeles"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Autom\xe1tico"}),": en este modo, 4D gestiona autom\xe1ticamente, si es posible, la inserci\xf3n de los datos arrastrados de tipo texto o imagen que se sueltan sobre el objeto (los datos se pegan en el objeto). Los eventos ",(0,o.jsx)(r.code,{children:"On Drag Over"})," y ",(0,o.jsx)(r.code,{children:"On Drop"})," NO se generan. Por otra parte, se generan los eventos ",(0,o.jsx)(r.code,{children:"On After Edit"})," (durante el soltar) y ",(0,o.jsx)(r.code,{children:"On Data Change"})," (cuando el objeto pierde el foco)."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html",children:"Arrastrar y soltar"})," en el manual ",(0,o.jsx)(r.em,{children:"Lenguaje 4D"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"dropping"}),(0,o.jsx)(r.td,{children:"text"}),(0,o.jsx)(r.td,{children:'"none" (por padr\xe3o), "custom", "automatic" (exceto list box)'})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-1",children:"Objectos suportados"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"\xc1reas 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})]}),"\n",(0,o.jsx)(r.h4,{id:"Veja-tamb\xe9m-1",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"#draggable",children:"Draggable"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Executar-m\xe9todo-objecto",children:"Executar m\xe9todo objecto"}),"\n",(0,o.jsxs)(r.p,{children:["Cuando esta opci\xf3n est\xe1 activada, el m\xe9todo objeto se ejecuta con el evento ",(0,o.jsx)(r.code,{children:"On Data Change"})," ",(0,o.jsx)(r.em,{children:"en el mismo momento"})," en que el usuario cambia el valor del indicador. Cuando la opci\xf3n est\xe1 desactivada, el m\xe9todo se ejecuta ",(0,o.jsx)(r.em,{children:"tras"})," la modificaci\xf3n."]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"continuousExecution"}),(0,o.jsx)(r.td,{children:"boolean"}),(0,o.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-2",children:"Objectos suportados"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"M\xe9todos",children:"M\xe9todos"}),"\n",(0,o.jsx)(r.p,{children:'Refer\xeancia de um m\xe9todo ligado ao objeto. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method\u20144D calls it automatically when an event involves the object to which the object method is attached.'}),"\n",(0,o.jsx)(r.p,{children:"S\xe3o suportados v\xe1rios tipos de refer\xeancias de m\xe9todos:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a standard object method file path, i.e. that uses the following pattern:",(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.code,{children:"ObjectMethods/objectName.4dm"}),(0,o.jsx)(r.br,{}),"\n... where ",(0,o.jsx)(r.code,{children:"objectName"})," is the actual ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"object name"}),'. Este tipo de referencia indica que el archivo del m\xe9todo se encuentra en la ubicaci\xf3n por defecto ("sources/forms/',(0,o.jsx)(r.em,{children:"formName"}),'/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)']}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,o.jsx)(r.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.code,{children:"../../CustomMethods/myMethod.4dm"}),"\nYou can also use a filesystem:",(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.code,{children:"/RESOURCES/Buttons/bOK.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"method"}),(0,o.jsx)(r.td,{children:"text"}),(0,o.jsx)(r.td,{children:"Caminho de ficheiro padr\xe3o ou personalizado do m\xe9todo objeto, ou nome do m\xe9todo projeto"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-3",children:"Objectos suportados"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormEditor/forms",children:"Forms"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/subformOverview",children:"Subform"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Tab control"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Linhas-m\xf3veis",children:"Linhas m\xf3veis"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Array type list boxes"})}),"\n",(0,o.jsxs)(r.p,{children:["Autoriza a desloca\xe7\xe3o de linhas durante a execu\xe7\xe3o. Esta op\xe7\xe3o \xe9 selecionada por defeito. No est\xe1 disponible para los ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#selection-list-boxes",children:"list box de tipo selecci\xf3n"})," ni para los ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesHierarchy#hierarchical-list-box",children:"list box en modo jer\xe1rquico"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-4",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"movableRows"}),(0,o.jsx)(r.td,{children:"boolean"}),(0,o.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-4",children:"Objectos suportados"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#overview",children:"List Box"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Multi-seleccion\xe1vel",children:"Multi-seleccion\xe1vel"}),"\n",(0,o.jsxs)(r.p,{children:["Permite la selecci\xf3n de m\xfaltiples registros/opciones en una ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview",children:"lista jer\xe1rquica"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-5",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"selectionMode"}),(0,o.jsx)(r.td,{children:"text"}),(0,o.jsx)(r.td,{children:'"multiple", "single", "none"'})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-5",children:"Objectos suportados"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Orden\xe1vel",children:"Orden\xe1vel"}),"\n",(0,o.jsxs)(r.p,{children:["Permite ordenar los datos de las columnas haciendo clic en un encabezado ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"listbox"}),". Esta op\xe7\xe3o \xe9 selecionada por defeito. Os arrays de tipo imagem (colunas) n\xe3o podem ser ordenadas com esta funcionalidade."]}),"\n",(0,o.jsx)(r.p,{children:"In list boxes based on a selection of records, the standard sort function is available only:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Cuando la fuente de datos es ",(0,o.jsx)(r.em,{children:"Selecci\xf3n actual"}),","]}),"\n",(0,o.jsx)(r.li,{children:"With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type)."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns."}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-6",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"sortable"}),(0,o.jsx)(r.td,{children:"boolean"}),(0,o.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-6",children:"Objectos suportados"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"A\xe7\xe3o-padr\xe3o",children:"A\xe7\xe3o padr\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["Typical activities to be performed by active objects (",(0,o.jsx)(r.em,{children:"e.g."}),", letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. Se describen con detalle en la secci\xf3n ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"Acciones est\xe1ndar"})," de la ",(0,o.jsx)(r.em,{children:"manual de Dise\xf1o"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed."}),"\n",(0,o.jsxs)(r.p,{children:["Tambi\xe9n puede definir esta propiedad utilizando el comando ",(0,o.jsx)(r.code,{children:"OBJECT SET ACTION"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"Gram\xe1tica-JSON-7",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nome"}),(0,o.jsx)(r.th,{children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"action"}),(0,o.jsx)(r.td,{children:"string"}),(0,o.jsxs)(r.td,{children:["El nombre de una ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"acci\xf3n est\xe1ndar v\xe1lida"}),"."]})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"Objectos-suportados-7",children:"Objectos suportados"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Drop-down List"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Picture Pop-up Menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Tab control"})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var o=t(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,n={},c=null,l=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,o)&&!a.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:s,type:e,key:c,ref:l,props:n,_owner:i.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},474848:(e,r,t)=>{e.exports=t(221020)},484488:(e,r,t)=>{t.d(r,{A:()=>o});const o="data:image/png;base64,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"},909800:(e,r,t)=>{t.d(r,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAAbCAIAAABTBwdIAAAB/ElEQVR42u3cwU3DMBSAYYLYAAQjwD49dIOOUWUCxJ1hgAPiwALlzKmoSBULlEiVrPQ5dt008bPj/zsljhMe6OnZTkKqzXp1AQAFuNQOAAAiod4BKAX1DkAprrQD8Hl9edMOATHM5ovfny/tKCTSbwJEaiVd7xrvH5/aIWBcdb3UDsGJ9MuanVqp17vG49OzdggY0d/2WzsEH9IvX3Zqcf8OQCn617ubu4fAxpiqqtINACUj/RJ3sJ4V1WqzXjUtmzNeSD7zdKNJo91u528Z/EcAe6TfZMj7d6I89a5W6hO9cIzJUET6xXTkeYWZoLXrlyiCnaXNPst15RDN0NceAMW26WP6i9HS7LZzy3SwDwFtpN9kBD2fFbWpvWsfivwLdGZhJ1cWAr2RfnmR9c4zjxvWqBcHANuR+3eG+v04s6awx8nwi7BqQD+k3zSEvm+c5nSs806KBysIDIj0y06f9+9cc72T5oDRJoyuRGSwRQSkX1KC5nf7F/Hau52H2ttiY5Dpob2a2Le4eopt0dkemU230f7ayBjpNwEH9c6uSqYl8JCnv+v0k9jZIFrEY35Po+eaQCfSL3f8/yyAUqT+fZS6Xib+/QwAuUi63s3mC+0QUDSG24mp0nzRBFB3fXuvHQIGkNP3jQEtCX5iHmfieQWAUlDvAJSCegegFP8tyFk+nAzT1QAAAABJRU5ErkJggg=="},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>i});var o=t(296540);const s={},n=o.createContext(s);function d(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);