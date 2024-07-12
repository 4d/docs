/*! For license information please see da61e7a3.7afc7dc0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38305],{695555:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var o=r(474848),i=r(28453);const n={id:"shapesOverview",title:"Formas"},d=void 0,t={id:"FormObjects/shapesOverview",title:"Formas",description:"Las formas son objetos est\xe1ticos que pueden a\xf1adirse a los formularios 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormObjects/shapes_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/shapesOverview",permalink:"/docs/es/20/FormObjects/shapesOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fshapes_overview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"shapesOverview",title:"Formas"},sidebar:"docs",previous:{title:"Regla",permalink:"/docs/es/20/FormObjects/ruler"},next:{title:"Spinner",permalink:"/docs/es/20/FormObjects/spinner"}},a={},c=[{value:"Rect\xe1ngulo",id:"rect\xe1ngulo",level:2},{value:"Ejemplo JSON:",id:"ejemplo-json",level:4},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:4},{value:"L\xednea",id:"l\xednea",level:2},{value:"propiedad startPoint",id:"propiedad-startpoint",level:3},{value:"Ejemplos JSON:",id:"ejemplos-json",level:4},{value:"Propiedades soportadas",id:"propiedades-soportadas-1",level:4},{value:"\xd3valo",id:"\xf3valo",level:2},{value:"Ejemplo JSON:",id:"ejemplo-json-1",level:4},{value:"Propiedades soportadas",id:"propiedades-soportadas-2",level:4}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Las formas son ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/formObjectsOverview#active-and-static-objects",children:"objetos est\xe1ticos"})," que pueden a\xf1adirse a los formularios 4D."]}),"\n",(0,o.jsx)(s.p,{children:"Se ofrecen las siguientes formas b\xe1sicas:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"rect\xe1ngulos"}),"\n",(0,o.jsx)(s.li,{children:"l\xedneas"}),"\n",(0,o.jsx)(s.li,{children:"\xf3valos"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"rect\xe1ngulo",children:"Rect\xe1ngulo"}),"\n",(0,o.jsx)(s.p,{children:"Un rect\xe1ngulo est\xe1tico es un objeto decorativo para los formularios. Los rect\xe1ngulos se limitan a formas cuadradas."}),"\n",(0,o.jsxs)(s.p,{children:["El dise\xf1o de los rect\xe1ngulos se controla a trav\xe9s de muchas propiedades (color, grosor de l\xednea, patr\xf3n, etc.). En concreto, se puede definir la ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"redondez"})," de sus esquinas."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:r(838858).A+"",width:"98",height:"114"})}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'    "myRectangle": {\n        "type": "rectangle",    //define el tipo de objeto\n        "left": 60,             //posici\xf3n izquierda en el formulario  \n        "top": 160,             //posici\xf3n superior en el formulario \n        "width": 100,           //ancho del objeto\n        "height": 20,           //altura del objeto\n        "borderRadius": 20      //definir la redondez de las esquinas\n                }\n'})}),"\n",(0,o.jsx)(s.h4,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Abajo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#css-class",children:"Clase Css "})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Radio de la esquina"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Tipo de l\xednea punteada"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color",children:"Color de fondo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Color de l\xednea"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Ancho de l\xednea"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Arriba"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]}),"\n",(0,o.jsx)(s.h2,{id:"l\xednea",children:"L\xednea"}),"\n",(0,o.jsx)(s.p,{children:"Una l\xednea est\xe1tica es un objeto decorativo para los formularios, trazado entre dos tramas. Las l\xedneas pueden ser horizontales, verticales o de cualquier forma de \xe1ngulo."}),"\n",(0,o.jsx)(s.p,{children:"El dise\xf1o de las l\xedneas se controla a trav\xe9s de muchas propiedades (color, grosor de l\xednea, etc.)."}),"\n",(0,o.jsx)(s.h3,{id:"propiedad-startpoint",children:"propiedad startPoint"}),"\n",(0,o.jsxs)(s.p,{children:["La propiedad JSON ",(0,o.jsx)(s.code,{children:"startPoint"})," define a partir de qu\xe9 coordenada dibujar la l\xednea (ver ejemplo)."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["la propiedad ",(0,o.jsx)(s.code,{children:"startPoint"})," no est\xe1 expuesta en la lista de propiedades, donde la direcci\xf3n de dibujo de la l\xednea es visible."]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplos-json",children:"Ejemplos JSON:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "topLeft", //primera orientaci\xf3n\n        "strokeDashArray": "6 2" //punteado\n        }\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Result: ",(0,o.jsx)(s.img,{src:r(732413).A+"",width:"160",height:"120"})]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "bottomLeft", //segunda orientaci\xf3n\n        "strokeDashArray": "6 2" //dashed\n        }\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Result: ",(0,o.jsx)(s.img,{src:r(148646).A+"",width:"160",height:"120"})]}),"\n",(0,o.jsx)(s.h4,{id:"propiedades-soportadas-1",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Abajo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#css-class",children:"Clase Css "})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Tipo de l\xednea punteada"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Color de l\xednea"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Ancho de l\xednea"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(s.a,{href:"#startpoint-property",children:"startPoint"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Arriba"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]}),"\n",(0,o.jsx)(s.h2,{id:"\xf3valo",children:"\xd3valo"}),"\n",(0,o.jsxs)(s.p,{children:["Un \xf3valo est\xe1tico es un objeto decorativo para los formularios. Los objetos ovalados pueden utilizarse para dibujar formas circulares (cuando las propiedades ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"ancho"})," y ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"alto"})," son iguales)."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:r(237164).A+"",width:"75",height:"111"})}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo-json-1",children:"Ejemplo JSON:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'    "myOval": {\n        "type": "oval",     //define el tipo de objeto\n        "left": 60,         //posici\xf3n izquierda en el formulario\n        "top": 160,         //posici\xf3n superior en el formulario \n        "width": 100,       //ancho del objeto\n        "height": 20,       //altura del objeto\n        "fill": "blue"      //define el color de fondo\n                }\n'})}),"\n",(0,o.jsx)(s.h4,{id:"propiedades-soportadas-2",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Abajo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Tipo de l\xednea punteada"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color",children:"Color de fondo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Color de l\xednea"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Ancho de l\xednea"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Arriba"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var o=r(296540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var o,n={},c=null,l=null;for(o in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)d.call(s,o)&&!a.hasOwnProperty(o)&&(n[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===n[o]&&(n[o]=s[o]);return{$$typeof:i,type:e,key:c,ref:l,props:n,_owner:t.current}}s.Fragment=n,s.jsx=c,s.jsxs=c},474848:(e,s,r)=>{e.exports=r(221020)},732413:(e,s,r)=>{r.d(s,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANhSURBVHhe7dovTiRBGIZxboAk4QDjEDjECCQOzw0QSJJO5gbcgwQ5glOMQLQgQSAQJIgRe4R9N19n/4VZZruru6veen5iQmGfTH091XUAf99gisDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5uYM/PT01P2F0cwW+PX19ejo6O7urltjHLMFlrZtT05Orq6uPj4+un8htTkDy/v7++Xl5enp6fPzc/cvJDVz4LBarZbLZbdAUlkEltileexKLpfAst1utVczktPKKLBoJF9cXDCSE8orcGiaRr+gHh8fuzUGyDGwPDw8qPHb21u3Rl+ZBpaYxNqrGclD5Bs4XF9fM5KHyD2wMJKHKCCwaCQfHh5ycN1DGYFls9ksFov1et2tsZ9iAks8bemTkby/kgKH+/t7RvL+ygssjOT9FRlYYiRzcP2lUgNLHFzf3t52a3ym4MAhvsG8Z9yl+MCih2pG8i4OgYWRvItJYOFd8qd8Aoemac7OzroF/AILj12/MwwsXO/6yTOwMJKDbeDAu2TzwFL59S7/wBKTWHt1hSO5isDh5uamwpFcUWBZrVbHx8dVjeS6Ast6vdZIrufgurrA0rat9upKvsc1BpbtdqtP/Va2H8mVBg7aru1HctWBRXXV2Hgk1x5YtEsbH1wT+AelVeCmabq1EQL/Ek9em80mlh4I/IeXlxezkUzgv5mNZAJ/Ikayx8E1gXfSRn1+ft4tikXgfzF47CLw15bLZbkjmcBfK3okE3hfGsklHlwT+D+o7mKxKOt6F4H/Tzx2tW1bykgmcB9N05QykgncUykjmcD9FfEumcCDxMF1zt9jAg+V+fUuAqeR7fUuAieT50gmcEoxkrM6uCZwYnFwnc/1LgKPIp/3jAQeSybXuwg8ohxGMoHHNfu7ZAJPQRv1XNe7CDyRuR67CDyp6a93EXhS049kAs9gynfJBJ6H6k5zvYvAs5nmeheBZzb29S4Cz2/UkUzgLIz3LpnAuYiD6+TfYwJnZIzrXQTOTtrrXQTOUcKRTOBMxUgefnBN4HzFwfXA610Ezl08ecVnDwQuQO+6QmBzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ21wWGrYOD70yi0jKVpSuYAAAAAElFTkSuQmCC"},148646:(e,s,r)=>{r.d(s,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANZSURBVHhe7duhTitBFIfxvgOCpAJJgqhAkCAQlTg8AskbNGnCGyAqeYrKCpIKBB7ZpBJBUlHBI9y52TV34EJ358zOzH++nyCM/kLPducwgr5PiCKwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCF+Dj46P9rTsCiyNwvvb7/f39/cPDQ3vuhcCZ2m63V1dXNzc3IZ/PDoFz9PLycnJyEvi32yBwdpbL5fHxsfvZnsMQODvuM/nt7a09BCNwLpqh+/z83J6NEDgLhkPXQ+D0np6eDIeuh8CJzefzs7Mzw6HrIXBiLm3gN92fETgNN3Qnk8n7+3t7jobACUQduh4CD6p5vRx16HoIPBxXdzqdhr9e7oTAg3p9fW1/GwqBh+CG7vX1dXsYFoHjGn7oeggckdWdbggCx7LZbCK9Xu6EwBEN/0j1FYGNmSxSGSKwpRyGrofAZuLd6YYgsA3bRSpDBLZhu0hliMBBIi1SGSJwf3kOXQ+BexryTjcEgfuIvUhliMB9xF6kMkTgDgZbpDJE4EOVMnQ9BP5d8jvdEAT+RZJFKkME/l0Ot369Efi/Ei5SGSLwN4oeuh4C+zK80w1B4H9kskhliMC+oh+pviLwX7ktUhkisNrQ9dQeuIg73RBVB852kcpQ1YGzXaQyVGPg/BepDFUXeL1eaw9dT12BF4vF0dGR9tD1VBR4NptpvF7upIrA+/3e/SxokcqQfuDVanV6elrWIpUh8cCPj4+1DV2PbODdbnd7e1vh0PXIBr68vFR9vdyJYODmkUrs1q83tcBu6E6n0/YApcAM3W+JBN5sNufn5wzdrxQCu7rj8bie18udFB+YR6qfFRy4Gbrz+bw94zulBmboHqjIwKvViqF7oPICL5fLyl8vd1JS4OZ5qoZFKkPFBG6Grvtwbs84TBmBGbq9FRCYO90QuQeuc5HKUL6Ba16kMpRp4MoXqQzlGJihayivwNzpmssrMItU5nIJzK1fJFkEXiwWLFJFkjiw+8O9u7tj6MaTMvB2u724uGDoRpUssPuOW9X/6aaSLLDDI9UAUgbGAAgsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILK4NDFmj0R82ANRa+9ve+AAAAABJRU5ErkJggg=="},237164:(e,s,r)=>{r.d(s,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABvCAIAAAArEaqdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAdjSURBVHhe7ZxBSBtNFMd78NCDUMGDBQ+BCgYMKMSDlCBFWmihlgotWIjQICW01kNbPAQUcvAgVIjgQSk5iJTSgoUKFirk0IMHQUGhBUVEgohUSKGFHjz08H0/ug/pJtnN7GaTzKb+ThGzb95/Z+a9N7OTvfCz3jlX6H/OFfqfc4X+51xhGWxsbKRSqWg02tvbGwgEGv/AB/588OAB/1pfX5evVhLvFSLs+fPnLS0twWDw8ePHb9++3dzczGazp3/gA39++PDh2bNnXV1dzc3NIyMjFZXqpcJMJkP/XL58OZFIoOQ/BY6OjpLJZGtrazgc/vjxoxjyFG8U7uzsDA4Ooi2dTv/+/VvcV4ZLFhYW0DkwMPDlyxcx6hEeKFxcXGRM0hW/fv0Sl13BGJ6cnMTU3NycmPaCshSenJwMDw8z37a3t8XNstnd3WV+MiKOj4+lmfJwr/Dg4ODq1auxWKzMriuEziQOtbe37+3tSWNl4FIhbeMBfohTFYB0QhNbW1vSpFvcKEReW1vbzMyM+FIxaIJpWWbscazw+/fvpATiinhRYaampjo7O5nw0rxzHCuMx+M3b950kRJcQ9ShMJLmneNMIXGcsuvHjx/SeFUgkoVCoZcvX4oTDnGgcG1tjVnhYWJQZ39/v6mpaXV1VVxxgqpCcgO9R+UhbVadlZUV7q+L/KGq8MaNG6Ojo9JajZiYmCADi0PKKCmkJqZoJBFLUzWC8EaWevPmjbilhpJCCv8ajs+/YdlFGUDGEs8UKK2Qe0blWc30YE9PT4+j0ryEQu7WlStXuHNiXgM+f/7MlFGvAUoo5G5xz8S2NlBysM4SF0thp5D7RIDmnolhbSAnX7p06fDwUBy1xU4h9+n27dtiVTOGhoYSiYQ4aoudQkIzdYyY1Ay6kdmoElQtFRoTWuxpCcXq8vKyuGuNpcKRkZGxsTExpiVMoocPH4q71hRXSO/TgTUpstXJZrONjY0l00ZxhfQ+WV4saUwkEilZxBVXSO8zBsSMxszMzPT394vTFhRRSL/T+yzJxIzG5HI5XLXfdyyikH7XsI6x4vr167Ozs+J6MYoojMfjU1NTYkB75ufn7969K64Xo4hC1kqZTEYMaA8Bn7WBuF6MfIXkiYsXL1Z5r6kcWNbhsE2Nmq+QMo1iTa72Cd3d3TbFTb5CZu39+/flUp/w9OlTm8VUvkLCzPT0tFzqE9Lp9ODgoAgoIF+hv8KMAcGmo6NDBBRgUui7MGNgBBurvG9S6McwY0CwsdoRNyl89eoVA1ou8hUU0lYbcCaFfCkWi8lFviKRSIyPj4sMMyaFfG9iYkIu8hXJZNJq28ak8MWLF75YNBVCdWq13jcpjEajmuzeOwW3rZ6imhTeuXNnaWlJLvIV5PC+vj6RYcaksLe3V8P9XxVwG+dFhhmTQiqDr1+/ykW+Yn9/PxAIiAwzJoV8SfHEnW7gtpLChoYGfZ6iOeXCBZOWM/4xhfU/SoPBYJ1HmvrPFvWf8eu/aqPy9tFe8N+k02mlypsFSNWOVXqL6uppdna2zlfA9b+Lsba2FgqF5CJfYbPtbVJo7CZ6fva+0tg/ujAphHA4rO0JEyu2t7fb2tpEQAH5CuPxeBUO4XsLqWJgYEAEFJCvMJVKDQ0NyaU+YXR01MGTGQo83wUbZ0/XTk5OWCX6KNg4fkIKnZ2dPgo2jp9yA9nTR48QCTOOTypQ2UQiETGgPchzfNrEODF0dHQkNjQml8sxCQ8ODsT1YhRRCFSnvlhGMUTdnPqC9+/fd3V1iRmNYTYxp8RpC4orpEBtbm7WfFeKeeT+9CVQvmn+LJGAb3ME4wxLhaurq5o/02ceMZvEXWssFUIgENA29e/u7jKPmE3iqzV2CsfHx8k2YlIzYrHYkydPxFFb7BQeHx+3tLRsbm6KVW0wOtA+DZ5hpxDIiteuXRPD2sDIstpZK6SEQgY68ebTp09iWwPW19cZWepvXCihEObm5rTK/owpR796Lq0QWE+9fv1aWqgpKysrrJVUQugZSgrfvXvHWNXh4SmjqWSZloeSQujr66t5iUPYC4fD4pAyqgr39vaY3zX8MWkmk8EBF+/IUFUItNHU1EQukjarCEU28lRqtEIcKIRUKhUKhaq8T3V6etrd3W314KUkzhRCNBqt8lH3R48e2e/E2ONYIesxpnvVdgBYxbe3t5fzRiXHCmFnZ4dZUYXN/6WlpdbW1o2NDWnYFW4UAq1ya5mW4ksF4A6WLw9cKgTjVVFjY2OeVwIYJPdi3JN3t7lXCIeHh/fu3SPQefhjxWw2G4lEbt26pbg4KklZCg0Yq8a0LLMzuXx+fp6FH2FMTHuBBwpha2uLu07t6vrAEdVSMBikNvT8LZHeKDRYXl7u6OgIBAJ0wrdv38R3W3K53PT0NNqYddT3YshTvFRoQHE3PDzMuO3p6WElzuqZqQWGJOMz30kmk6z0GJOUEO5eAKWI9woNWMIhY3Jysr+/n+UlHdvwBz7wJ0MahQgruZ9bPpVSqA/nCv3PuUK/8/Pn/+Z22qNFQFV1AAAAAElFTkSuQmCC"},838858:(e,s,r)=>{r.d(s,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAByCAIAAAAnEZPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEkSURBVHhe7d2xDQMhEABBcAXff5V0gJOPbGRv/jMJkK6EdNnNtdbgn9d98pNMiUyJTIlMiUzJYSC4ruu+PdJxQjpn2nvfj4eZ8zxI+nSJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiW2Hn+q2Q775dIlMiUyJTIlMiUyJTMEYb82sGvDSbsgTAAAAAElFTkSuQmCC"},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>t});var o=r(296540);const i={},n=o.createContext(i);function d(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);