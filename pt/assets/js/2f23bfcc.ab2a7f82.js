/*! For license information please see 2f23bfcc.ab2a7f82.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66692],{726660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=r(474848),s=r(28453);const o={id:"shapesOverview",title:"Formas"},n=void 0,d={id:"FormObjects/shapesOverview",title:"Formas",description:"Las formas son objetos est\xe1ticos que pueden a\xf1adirse a los formularios 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormObjects/shapes_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/shapesOverview",permalink:"/docs/pt/FormObjects/shapesOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fshapes_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"shapesOverview",title:"Formas"},sidebar:"docs",previous:{title:"Regra",permalink:"/docs/pt/FormObjects/ruler"},next:{title:"Spinner",permalink:"/docs/pt/FormObjects/spinner"}},c={},a=[{value:"Ret\xe2ngulo",id:"ret\xe2ngulo",level:2},{value:"JSON Exemplo",id:"json-exemplo",level:4},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:4},{value:"Linha",id:"linha",level:2},{value:"propriedade startPoint",id:"propriedade-startpoint",level:3},{value:"Exemplos JSON",id:"exemplos-json",level:4},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis-1",level:4},{value:"Oval",id:"oval",level:2},{value:"JSON Exemplo",id:"json-exemplo-1",level:4},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis-2",level:4}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Las formas son ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/formObjectsOverview#active-and-static-objects",children:"objetos est\xe1ticos"})," que pueden a\xf1adirse a los formularios 4D."]}),"\n",(0,i.jsx)(t.p,{children:"As formas 4D suportam as seguintes formas b\xe1sicas:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"ret\xe2ngulos"}),"\n",(0,i.jsx)(t.li,{children:"linhas"}),"\n",(0,i.jsx)(t.li,{children:"ovals"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ret\xe2ngulo",children:"Ret\xe2ngulo"}),"\n",(0,i.jsx)(t.p,{children:"Um ret\xe2ngulo est\xe1tico \xe9 um objeto decorativo para os formul\xe1rios. Os rect\xe2ngulos s\xe3o limitados a formas quadradas."}),"\n",(0,i.jsxs)(t.p,{children:["O desenho dos ret\xe2ngulos \xe9 controlado atrav\xe9s de muitas propriedades (cor, espessura da linha, padr\xe3o, etc.). En concreto, se puede definir la ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"redondez"})," de sus esquinas."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(324305).A+"",width:"98",height:"114"})}),"\n",(0,i.jsx)(t.h4,{id:"json-exemplo",children:"JSON Exemplo"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\t"myRectangle": {\n\t\t"type": "rectangle",\t//define the type of object\n\t\t"left": 60,\t\t\t\t//left position on the form  \n\t\t"top": 160,\t\t\t\t//top position on the form \n\t\t"width": 100,\t\t\t//width of the object\n\t\t"height": 20,\t\t\t//height of the object\n\t\t"borderRadius": 20\t\t//define the roundness of the corners\n                }\n'})}),"\n",(0,i.jsx)(t.h4,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Dotted Line Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color",children:"Fill Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Line Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Line Width"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(t.h2,{id:"linha",children:"Linha"}),"\n",(0,i.jsx)(t.p,{children:"Uma linha est\xe1tica \xe9 um objeto decorativo para os formul\xe1rios, desenhado entre duas tramas. As linhas podem ser horizontais, verticais ou de qualquer forma angular."}),"\n",(0,i.jsx)(t.p,{children:"O desenho das linhas \xe9 controlado atrav\xe9s de muitas propriedades (cor, espessura da linha, etc.)."}),"\n",(0,i.jsx)(t.h3,{id:"propriedade-startpoint",children:"propriedade startPoint"}),"\n",(0,i.jsxs)(t.p,{children:["La propiedad JSON ",(0,i.jsx)(t.code,{children:"startPoint"})," define a partir de qu\xe9 coordenada dibujar la l\xednea (ver ejemplo)."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["la propiedad ",(0,i.jsx)(t.code,{children:"startPoint"})," no est\xe1 expuesta en la lista de propiedades, donde la direcci\xf3n de dibujo de la l\xednea es visible."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"exemplos-json",children:"Exemplos JSON"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'\t"myLine": {\n\t\t"type": "line",\t               \n\t\t"left": 20,\n\t\t"top": 40,\n\t\t"width": 100,\n\t\t"height": 80,\n\t\t"startPoint": "topLeft", //first direction\n\t\t"strokeDashArray": "6 2" //dashed\n\t\t}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Resultado:\n",(0,i.jsx)(t.img,{src:r(118762).A+"",width:"160",height:"120"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'\t"myLine": {\n\t\t"type": "line",\t               \n\t\t"left": 20,\n\t\t"top": 40,\n\t\t"width": 100,\n\t\t"height": 80,\n\t\t"startPoint": "bottomLeft", //2nd direction\n\t\t"strokeDashArray": "6 2" //dashed\n\t\t}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Resultado:\n",(0,i.jsx)(t.img,{src:r(67745).A+"",width:"160",height:"120"})]}),"\n",(0,i.jsx)(t.h4,{id:"propriedades-compat\xedveis-1",children:"Propriedades compat\xedveis"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Dotted Line Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Line Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Line Width"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(t.a,{href:"#startpoint-property",children:"startPoint"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(t.h2,{id:"oval",children:"Oval"}),"\n",(0,i.jsxs)(t.p,{children:["Uma oval est\xe1tica \xe9 um objeto decorativo para formas. Los objetos ovalados pueden utilizarse para dibujar formas circulares (cuando las propiedades ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"ancho"})," y ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"alto"})," son iguales)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(382913).A+"",width:"75",height:"111"})}),"\n",(0,i.jsx)(t.h4,{id:"json-exemplo-1",children:"JSON Exemplo"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\t"myOval": {\n\t\t"type": "oval",\t\t//define the type of object\n\t\t"left": 60,\t\t\t//left position on the form  \n\t\t"top": 160,\t\t\t//top position on the form \n\t\t"width": 100,\t\t//width of the object\n\t\t"height": 20,\t\t//height of the object\n\t\t"fill": "blue"\t\t//define the background color\n                }\n'})}),"\n",(0,i.jsx)(t.h4,{id:"propriedades-compat\xedveis-2",children:"Propriedades compat\xedveis"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Dotted Line Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color",children:"Fill Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Line Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Line Width"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(t.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,t,r)=>{var i=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var i,o={},a=null,p=null;for(i in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(p=t.ref),t)n.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:s,type:e,key:a,ref:p,props:o,_owner:d.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},118762:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANhSURBVHhe7dovTiRBGIZxboAk4QDjEDjECCQOzw0QSJJO5gbcgwQ5glOMQLQgQSAQJIgRe4R9N19n/4VZZruru6veen5iQmGfTH091XUAf99gisDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5uYM/PT01P2F0cwW+PX19ejo6O7urltjHLMFlrZtT05Orq6uPj4+un8htTkDy/v7++Xl5enp6fPzc/cvJDVz4LBarZbLZbdAUlkEltileexKLpfAst1utVczktPKKLBoJF9cXDCSE8orcGiaRr+gHh8fuzUGyDGwPDw8qPHb21u3Rl+ZBpaYxNqrGclD5Bs4XF9fM5KHyD2wMJKHKCCwaCQfHh5ycN1DGYFls9ksFov1et2tsZ9iAks8bemTkby/kgKH+/t7RvL+ygssjOT9FRlYYiRzcP2lUgNLHFzf3t52a3ym4MAhvsG8Z9yl+MCih2pG8i4OgYWRvItJYOFd8qd8Aoemac7OzroF/AILj12/MwwsXO/6yTOwMJKDbeDAu2TzwFL59S7/wBKTWHt1hSO5isDh5uamwpFcUWBZrVbHx8dVjeS6Ast6vdZIrufgurrA0rat9upKvsc1BpbtdqtP/Va2H8mVBg7aru1HctWBRXXV2Hgk1x5YtEsbH1wT+AelVeCmabq1EQL/Ek9em80mlh4I/IeXlxezkUzgv5mNZAJ/Ikayx8E1gXfSRn1+ft4tikXgfzF47CLw15bLZbkjmcBfK3okE3hfGsklHlwT+D+o7mKxKOt6F4H/Tzx2tW1bykgmcB9N05QykgncUykjmcD9FfEumcCDxMF1zt9jAg+V+fUuAqeR7fUuAieT50gmcEoxkrM6uCZwYnFwnc/1LgKPIp/3jAQeSybXuwg8ohxGMoHHNfu7ZAJPQRv1XNe7CDyRuR67CDyp6a93EXhS049kAs9gynfJBJ6H6k5zvYvAs5nmeheBZzb29S4Cz2/UkUzgLIz3LpnAuYiD6+TfYwJnZIzrXQTOTtrrXQTOUcKRTOBMxUgefnBN4HzFwfXA610Ezl08ecVnDwQuQO+6QmBzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ21wWGrYOD70yi0jKVpSuYAAAAAElFTkSuQmCC"},67745:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANZSURBVHhe7duhTitBFIfxvgOCpAJJgqhAkCAQlTg8AskbNGnCGyAqeYrKCpIKBB7ZpBJBUlHBI9y52TV34EJ358zOzH++nyCM/kLPducwgr5PiCKwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCF+Dj46P9rTsCiyNwvvb7/f39/cPDQ3vuhcCZ2m63V1dXNzc3IZ/PDoFz9PLycnJyEvi32yBwdpbL5fHxsfvZnsMQODvuM/nt7a09BCNwLpqh+/z83J6NEDgLhkPXQ+D0np6eDIeuh8CJzefzs7Mzw6HrIXBiLm3gN92fETgNN3Qnk8n7+3t7jobACUQduh4CD6p5vRx16HoIPBxXdzqdhr9e7oTAg3p9fW1/GwqBh+CG7vX1dXsYFoHjGn7oeggckdWdbggCx7LZbCK9Xu6EwBEN/0j1FYGNmSxSGSKwpRyGrofAZuLd6YYgsA3bRSpDBLZhu0hliMBBIi1SGSJwf3kOXQ+BexryTjcEgfuIvUhliMB9xF6kMkTgDgZbpDJE4EOVMnQ9BP5d8jvdEAT+RZJFKkME/l0Ot369Efi/Ei5SGSLwN4oeuh4C+zK80w1B4H9kskhliMC+oh+pviLwX7ktUhkisNrQ9dQeuIg73RBVB852kcpQ1YGzXaQyVGPg/BepDFUXeL1eaw9dT12BF4vF0dGR9tD1VBR4NptpvF7upIrA+/3e/SxokcqQfuDVanV6elrWIpUh8cCPj4+1DV2PbODdbnd7e1vh0PXIBr68vFR9vdyJYODmkUrs1q83tcBu6E6n0/YApcAM3W+JBN5sNufn5wzdrxQCu7rj8bie18udFB+YR6qfFRy4Gbrz+bw94zulBmboHqjIwKvViqF7oPICL5fLyl8vd1JS4OZ5qoZFKkPFBG6Grvtwbs84TBmBGbq9FRCYO90QuQeuc5HKUL6Ba16kMpRp4MoXqQzlGJihayivwNzpmssrMItU5nIJzK1fJFkEXiwWLFJFkjiw+8O9u7tj6MaTMvB2u724uGDoRpUssPuOW9X/6aaSLLDDI9UAUgbGAAgsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILK4NDFmj0R82ANRa+9ve+AAAAABJRU5ErkJggg=="},382913:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,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"},324305:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAByCAIAAAAnEZPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEkSURBVHhe7d2xDQMhEABBcAXff5V0gJOPbGRv/jMJkK6EdNnNtdbgn9d98pNMiUyJTIlMiUzJYSC4ruu+PdJxQjpn2nvfj4eZ8zxI+nSJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiW2Hn+q2Q775dIlMiUyJTIlMiUyJTMEYb82sGvDSbsgTAAAAAElFTkSuQmCC"},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var i=r(296540);const s={},o=i.createContext(s);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);