"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72054"],{86376:function(e,r,o){o.r(r),o.d(r,{default:()=>l,frontMatter:()=>a,metadata:()=>s,assets:()=>n,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"FormObjects/progressIndicator","title":"Indicador de progresso","description":"Um indicador de progresso (tamb\xe9m chamado \\"term\xf4metro\\") foi projetado para exibir ou definir graficamente valores num\xe9ricos, ou de data/hora.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/FormObjects/progressIndicator.md","sourceDirName":"FormObjects","slug":"/FormObjects/progressIndicator","permalink":"/docs/pt/FormObjects/progressIndicator","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"progressIndicator","title":"Indicador de progresso"},"sidebar":"docs","previous":{"title":"\xc1rea Plug-in","permalink":"/docs/pt/FormObjects/pluginAreaOverview"},"next":{"title":"Bot\xe3o r\xe1dio","permalink":"/docs/pt/FormObjects/radiobuttonOverview"}}'),i=o("785893"),t=o("250065");let a={id:"progressIndicator",title:"Indicador de progresso"},d=void 0,n={},c=[{value:"Utilizar os indicadores",id:"utilizar-os-indicadores",level:2},{value:"Term\xf3metro predefinido",id:"term\xf3metro-predefinido",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis-1",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function p(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:'Um indicador de progresso (tamb\xe9m chamado "term\xf4metro") foi projetado para exibir ou definir graficamente valores num\xe9ricos, ou de data/hora.'}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:o(972191).Z+"",width:"288",height:"45"})}),"\n",(0,i.jsx)(r.h2,{id:"utilizar-os-indicadores",children:"Utilizar os indicadores"}),"\n",(0,i.jsx)(r.p,{children:"Os indicadores podem ser utilizados para visualizar ou definir valores. Por exemplo, se um indicador de progresso recebe um valor por um m\xe9todo, ele exibe o valor. Se o usu\xe1rio arrastar o ponto indicador, o valor muda. O valor pode ser usado em outro objeto, como um campo ou um objeto digit\xe1vel, ou n\xe3o digit\xe1vel."}),"\n",(0,i.jsx)(r.p,{children:"A vari\xe1vel associada ao indicador controla a visualiza\xe7\xe3o. O usu\xe1rio coloca valores no c\xf3digo ou utiliza valores do c\xf3digo atrav\xe9s de m\xe9todos. Por exemplo, um m\xe9todo para um campo ou objeto digit\xe1vel poderia ser usado para controlar um indicador de progresso:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:" $vTherm:=[Employees]Salary\n"})}),"\n",(0,i.jsx)(r.p,{children:"Este m\xe9todo atribui o valor do campo Salary \xe0 vari\xe1vel $vTherm. Este m\xe9todo seria anexado ao campo Sal\xe1rio."}),"\n",(0,i.jsx)(r.p,{children:"Por outro lado, \xe9 poss\xedvel utilizar o indicador para controlar o valor num campo. O usu\xe1rio arrasta o indicador para definir o valor. Neste caso, o m\xe9todo torna-se:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:" [Employees]Salary:=$vTherm\n"})}),"\n",(0,i.jsx)(r.p,{children:"O m\xe9todo atribui o valor do c\xf3digo ao campo Salary. \xc0 medida que o usu\xe1rio arrasta o indicador, o valor no campo Sal\xe1rio muda."}),"\n",(0,i.jsx)(r.h2,{id:"term\xf3metro-predefinido",children:"Term\xf3metro predefinido"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:o(549e3).Z+"",width:"53",height:"176"})}),"\n",(0,i.jsx)(r.p,{children:"O term\xf3metro \xe9 o indicador b\xe1sico de progresso."}),"\n",(0,i.jsx)(r.p,{children:"\xc9 poss\xedvel apresentar barras de term\xf4metros horizontais ou verticais. Isto \xe9 determinado pela forma do objeto que desenha."}),"\n",(0,i.jsx)(r.p,{children:"Est\xe3o dispon\xedveis v\xe1rias op\xe7\xf5es gr\xe1ficas: valores m\xednimos/m\xe1ximos, gradua\xe7\xf5es, passos."}),"\n",(0,i.jsx)(r.h3,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," -",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#display-graduation",children:"Display graduation"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font",children:"Font"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#graduation-step",children:"Graduation step"})," -",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#label-location",children:"Label Location"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#maximum",children:"Maximum"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#minimum",children:"Minimum"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#step",children:"Step"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(r.h2,{id:"barber-shop",children:"Barber shop"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:o(375884).Z+"",width:"280",height:"40"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Barber shop"})," \xe9 uma variante do term\xf4metro predefinido. Para activar esta variante, es necesario definir la propiedad ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#barber-shop",children:"Barber shop"}),"."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:'No c\xf3digo JSON, basta remover a propriedade "max" de um objeto term\xf4metro padr\xe3o para ativar a variante Barber shop.'}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["La Barber shop muestra una animaci\xf3n continua, como la ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"spinner"}),". Esses term\xf4metros s\xe3o geralmente usados para indicar ao usu\xe1rio que o programa est\xe1 em processo de execu\xe7\xe3o de uma opera\xe7\xe3o longa. Cuando se selecciona esta variante term\xf3metro, ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale",children:"las propiedades de la escala gr\xe1fica"})," no est\xe1n disponibles."]}),"\n",(0,i.jsxs)(r.p,{children:["Quando o formul\xe1rio \xe9 executado, o objeto n\xe3o \xe9 animado. La animaci\xf3n se gestiona pasando un valor a su ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"variable o expresi\xf3n asociada"}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"1 = Iniciar a anima\xe7\xe3o,"}),"\n",(0,i.jsx)(r.li,{children:"0 = Parar a anima\xe7\xe3o."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"propriedades-compat\xedveis-1",children:"Propriedades compat\xedveis"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," -",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font",children:"Font"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(r.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"rulers"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"steppers"})}),"\n"]})]})}function l(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},375884:function(e,r,o){o.d(r,{Z:function(){return s}});let s=o.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},549e3:function(e,r,o){o.d(r,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},972191:function(e,r,o){o.d(r,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return a}});var s=o(667294);let i={},t=s.createContext(i);function a(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);