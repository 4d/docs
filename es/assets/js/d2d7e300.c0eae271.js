/*! For license information please see d2d7e300.c0eae271.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22682],{67524:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var o=s(474848),i=s(28453);const a={id:"progressIndicator",title:"Indicador de progreso"},t=void 0,n={id:"FormObjects/progressIndicator",title:"Indicador de progreso",description:'Un indicador de progreso (tambi\xe9n llamado "term\xf3metro") est\xe1 dise\xf1ado para mostrar o definir gr\xe1ficamente los valores num\xe9ricos o fecha/hora.',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/es/FormObjects/progressIndicator",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"progressIndicator",title:"Indicador de progreso"},sidebar:"docs",previous:{title:"\xc1rea de plug-in",permalink:"/docs/es/FormObjects/pluginAreaOverview"},next:{title:"Bot\xf3n radio",permalink:"/docs/es/FormObjects/radiobuttonOverview"}},d={},c=[{value:"Utilizar los indicadores",id:"utilizar-los-indicadores",level:2},{value:"El term\xf3metro por defecto",id:"el-term\xf3metro-por-defecto",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas-1",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:'Un indicador de progreso (tambi\xe9n llamado "term\xf3metro") est\xe1 dise\xf1ado para mostrar o definir gr\xe1ficamente los valores num\xe9ricos o fecha/hora.'}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(744973).A+"",width:"288",height:"45"})}),"\n",(0,o.jsx)(r.h2,{id:"utilizar-los-indicadores",children:"Utilizar los indicadores"}),"\n",(0,o.jsx)(r.p,{children:"Los indicadores se pueden utilizar tanto para visualizar como para definir valores. Por ejemplo, si a un indicador de progreso se le da un valor por un m\xe9todo, muestra el valor. Si el usuario arrastra el punto indicador, el valor cambia. El valor puede utilizarse en otro objeto, como un campo o un objeto introducible o no introducible."}),"\n",(0,o.jsx)(r.p,{children:"La variable asociada al indicador controla la visualizaci\xf3n. Puede introducir y utilizar lo valores del indicador utilizando m\xe9todos. Por ejemplo, un m\xe9todo para un campo o un objeto introducible podr\xeda utilizarse para controlar un indicador de progreso:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:" vTherm:=[Employees]Salary\n"})}),"\n",(0,o.jsx)(r.p,{children:"Este m\xe9todo asigna el valor del campo Salary a la variable vTherm. Este m\xe9todo se adjuntar\xe1 al campo Salario."}),"\n",(0,o.jsx)(r.p,{children:"Por el contrario, puede utilizar el indicador para controlar el valor de un campo. El usuario arrastra el indicador para definir el valor. En este caso el m\xe9todo se convierte en:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:" [Employees]Salary:=vTherm\n"})}),"\n",(0,o.jsx)(r.p,{children:"El m\xe9todo asigna el valor del indicador al campo Salario. A medida que el usuario arrastra el indicador, el valor del campo Salario cambia."}),"\n",(0,o.jsx)(r.h2,{id:"el-term\xf3metro-por-defecto",children:"El term\xf3metro por defecto"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(281009).A+"",width:"53",height:"176"})}),"\n",(0,o.jsx)(r.p,{children:"El term\xf3metro es el indicador b\xe1sico de progreso."}),"\n",(0,o.jsx)(r.p,{children:"Puede mostrar barras de term\xf3metros horizontales o verticales. Esto viene determinado por la forma del objeto que se dibuja."}),"\n",(0,o.jsx)(r.p,{children:"Dispone de m\xfaltiples opciones gr\xe1ficas: valores m\xednimos/m\xe1ximos, graduaciones, pasos."}),"\n",(0,o.jsx)(r.h3,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," -",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#display-graduation",children:"Mostrar graduaci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAction#execute-object-method",children:"Ejecutar m\xe9todo objeto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"}),' (s\xf3lo "integer", "number", "date", o "time") - ',(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Alto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#italic",children:"It\xe1lica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#graduation-step",children:"Paso de graduaci\xf3n"})," -",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesHelp#help-tip",children:"Ayuda"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#label-location",children:"Ubicaci\xf3n de la etiqueta"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#maximum",children:"M\xe1ximo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#minimum",children:"M\xednimo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#number-format",children:"Formato num\xe9rico"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#step",children:"Paso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable o Expresi\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]}),"\n",(0,o.jsx)(r.h2,{id:"barber-shop",children:"Barber shop"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(633259).A+"",width:"280",height:"40"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Barber shop"})," es una variante del term\xf3metro por defecto. Para activar esta variante, es necesario definir la propiedad ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#barber-shop",children:"Barber shop"}),"."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:'En JSON, basta con eliminar la propiedad "max" del objeto term\xf3metro por defecto para activar la variante Barber shop.'}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["La Barber shop muestra una animaci\xf3n continua, como la ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/spinner",children:"spinner"}),". Estos term\xf3metros se utilizan generalmente para indicar al usuario que el programa est\xe1 en proceso de realizar una operaci\xf3n larga. Cuando se selecciona esta variante term\xf3metro, ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale",children:"las propiedades de la escala gr\xe1fica"})," no est\xe1n disponibles."]}),"\n",(0,o.jsxs)(r.p,{children:["Cuando se ejecuta el formulario, el objeto no se anima. La animaci\xf3n se gestiona pasando un valor a su ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"variable o expresi\xf3n asociada"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"1 = Iniciar animaci\xf3n,"}),"\n",(0,o.jsx)(r.li,{children:"0 = Detener la animaci\xf3n."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"propiedades-soportadas-1",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," -",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#enterable",children:"Editable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAction#execute-object-method",children:"Ejecutar m\xe9todo objeto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"}),' (s\xf3lo "entero", "n\xfamero", "fecha" o "hora") - ',(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesHelp#help-tip",children:"Consejo de ayuda"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tama\xf1o horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#italic",children:"Cursiva"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tama\xf1o vertical"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/ruler",children:"rulers"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/stepper",children:"steppers"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,s)=>{var o=s(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var o,a={},c=null,l=null;for(o in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)t.call(r,o)&&!d.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:i,type:e,key:c,ref:l,props:a,_owner:n.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},474848:(e,r,s)=>{e.exports=s(221020)},633259:(e,r,s)=>{s.d(r,{A:()=>o});const o=s.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},281009:(e,r,s)=>{s.d(r,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},744973:(e,r,s)=>{s.d(r,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>n});var o=s(296540);const i={},a=o.createContext(i);function t(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);