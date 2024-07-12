/*! For license information please see 57c55d7e.381f5d0d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46724],{429788:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var s=o(474848),t=o(28453);const i={id:"progressIndicator",title:"Indicador de progresso"},a=void 0,n={id:"FormObjects/progressIndicator",title:"Indicador de progresso",description:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/pt/FormObjects/progressIndicator",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"progressIndicator",title:"Indicador de progresso"},sidebar:"docs",previous:{title:"\xc1rea Plug-in",permalink:"/docs/pt/FormObjects/pluginAreaOverview"},next:{title:"Bot\xe3o r\xe1dio",permalink:"/docs/pt/FormObjects/radiobuttonOverview"}},d={},c=[{value:"Utilizar os indicadores",id:"utilizar-os-indicadores",level:2},{value:"Term\xf3metro predefinido",id:"term\xf3metro-predefinido",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis-1",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.'}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:o(472821).A+"",width:"288",height:"45"})}),"\n",(0,s.jsx)(r.h2,{id:"utilizar-os-indicadores",children:"Utilizar os indicadores"}),"\n",(0,s.jsx)(r.p,{children:"Os indicadores podem ser utilizados para visualizar ou definir valores. Por exemplo, se um indicador de progresso recebe um valor por um m\xe9todo, ele exibe o valor. Se o usu\xe1rio arrastar o ponto indicador, o valor muda. The value can be used in another object such as a field or an enterable or non-enterable object."}),"\n",(0,s.jsx)(r.p,{children:"A vari\xe1vel associada ao indicador controla a visualiza\xe7\xe3o. O usu\xe1rio coloca valores no c\xf3digo ou utiliza valores do c\xf3digo atrav\xe9s de m\xe9todos. For example, a method for a field or enterable object could be used to control a progress indicator:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:" $vTherm:=[Employees]Salary\n"})}),"\n",(0,s.jsx)(r.p,{children:"Este m\xe9todo atribui o valor do campo Salary \xe0 vari\xe1vel $vTherm. Este m\xe9todo seria anexado ao campo Sal\xe1rio."}),"\n",(0,s.jsx)(r.p,{children:"Por outro lado, \xe9 poss\xedvel utilizar o indicador para controlar o valor num campo. O usu\xe1rio arrasta o indicador para definir o valor. Neste caso, o m\xe9todo torna-se:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:" [Employees]Salary:=$vTherm\n"})}),"\n",(0,s.jsx)(r.p,{children:"O m\xe9todo atribui o valor do c\xf3digo ao campo Salary. \xc0 medida que o usu\xe1rio arrasta o indicador, o valor no campo Sal\xe1rio muda."}),"\n",(0,s.jsx)(r.h2,{id:"term\xf3metro-predefinido",children:"Term\xf3metro predefinido"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:o(34569).A+"",width:"53",height:"176"})}),"\n",(0,s.jsx)(r.p,{children:"O term\xf3metro \xe9 o indicador b\xe1sico de progresso."}),"\n",(0,s.jsx)(r.p,{children:"\xc9 poss\xedvel apresentar barras de term\xf4metros horizontais ou verticais. Isto \xe9 determinado pela forma do objeto que desenha."}),"\n",(0,s.jsx)(r.p,{children:"Est\xe3o dispon\xedveis v\xe1rias op\xe7\xf5es gr\xe1ficas: valores m\xednimos/m\xe1ximos, gradua\xe7\xf5es, passos."}),"\n",(0,s.jsx)(r.h3,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," -",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#display-graduation",children:"Display graduation"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font",children:"Font"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#graduation-step",children:"Graduation step"})," -",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#label-location",children:"Label Location"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#maximum",children:"Maximum"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#minimum",children:"Minimum"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#step",children:"Step"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,s.jsx)(r.h2,{id:"barber-shop",children:"Barber shop"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:o(771683).A+"",width:"280",height:"40"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Barber shop"})," es una variante del term\xf3metro por defecto. Para activar esta variante, es necesario definir la propiedad ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#barber-shop",children:"Barber shop"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.'}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["La Barber shop muestra una animaci\xf3n continua, como la ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"spinner"}),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. Cuando se selecciona esta variante term\xf3metro, ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale",children:"las propiedades de la escala gr\xe1fica"})," no est\xe1n disponibles."]}),"\n",(0,s.jsxs)(r.p,{children:["Quando o formul\xe1rio \xe9 executado, o objeto n\xe3o \xe9 animado. La animaci\xf3n se gestiona pasando un valor a su ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"variable o expresi\xf3n asociada"}),":"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"1 = Iniciar a anima\xe7\xe3o,"}),"\n",(0,s.jsx)(r.li,{children:"0 = Parar a anima\xe7\xe3o."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"propriedades-compat\xedveis-1",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," -",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font",children:"Font"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,s.jsx)(r.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"rulers"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"steppers"})}),"\n"]})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},221020:(e,r,o)=>{var s=o(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var s,i={},c=null,p=null;for(s in void 0!==o&&(c=""+o),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,s)&&!d.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:p,props:i,_owner:n.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},474848:(e,r,o)=>{e.exports=o(221020)},771683:(e,r,o)=>{o.d(r,{A:()=>s});const s=o.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},34569:(e,r,o)=>{o.d(r,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},472821:(e,r,o)=>{o.d(r,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="},28453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>n});var s=o(296540);const t={},i=s.createContext(t);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);