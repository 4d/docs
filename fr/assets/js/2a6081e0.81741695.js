"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27904],{950523:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(474848),t=s(28453);const o={id:"shapesOverview",title:"Formes"},n=void 0,d={id:"FormObjects/shapesOverview",title:"Formes",description:"Les formes sont des objets statiques qui peuvent \xeatre ajout\xe9es \xe0 des formes 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/shapes_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/shapesOverview",permalink:"/docs/fr/20/FormObjects/shapesOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fshapes_overview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"shapesOverview",title:"Formes"},sidebar:"docs",previous:{title:"R\xe8gle",permalink:"/docs/fr/20/FormObjects/ruler"},next:{title:"Spinner",permalink:"/docs/fr/20/FormObjects/spinner"}},c={},l=[{value:"Rectangle",id:"rectangle",level:2},{value:"Exemple JSON :",id:"exemple-json-",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:4},{value:"Ligne",id:"ligne",level:2},{value:"propri\xe9t\xe9 startPoint",id:"propri\xe9t\xe9-startpoint",level:3},{value:"Exemple JSON :",id:"exemple-json--1",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge-1",level:4},{value:"Ovale",id:"ovale",level:2},{value:"Exemple JSON :",id:"exemple-json--2",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge-2",level:4}];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Les formes sont des ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/formObjectsOverview#active-and-static-objects",children:"objets statiques"})," qui peuvent \xeatre ajout\xe9es \xe0 des formes 4D."]}),"\n",(0,i.jsx)(r.p,{children:"Les formes 4D prennent en charge les formes basiques suivantes :"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"rectangles"}),"\n",(0,i.jsx)(r.li,{children:"lignes"}),"\n",(0,i.jsx)(r.li,{children:"ovales"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"rectangle",children:"Rectangle"}),"\n",(0,i.jsx)(r.p,{children:"Un rectangle statique est un objet d\xe9coratif contenu dans les formulaires. Les rectangles sont limit\xe9s \xe0 des formes carr\xe9es."}),"\n",(0,i.jsxs)(r.p,{children:["Les rectangles sont cr\xe9\xe9s \xe0 l'aide de plusieurs propri\xe9t\xe9s (couleur, \xe9paisseur de ligne, motif, etc.). L'",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"arrondi"}),", en particulier, des coins du rectangle peuvent \xeatre d\xe9finis."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(657358).A+"",width:"98",height:"114"})}),"\n",(0,i.jsx)(r.h4,{id:"exemple-json-",children:"Exemple JSON :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'    "myRectangle": {\n        "type": "rectangle",    //d\xe9finit le type d\'objet\n        "left": 60,             //position sur la gauche du formulaire\n        "top": 160,             //position en haut du formulaire\n        "width": 100,           //largeur de l\'objet \n        "height": 20,           //hauteur de l\'objet\n        "borderRadius": 20      //d\xe9finit le rayon d\'arrondi\n                }\n'})}),"\n",(0,i.jsx)(r.h4,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Dotted Line Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Line Color"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Line Width"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(r.h2,{id:"ligne",children:"Ligne"}),"\n",(0,i.jsx)(r.p,{children:"Une ligne statique est un objet d\xe9coratif pour les formulaires, entre deux trac\xe9s. Les lignes peuvent \xeatre horizontales, verticales ou de toute forme d'angle."}),"\n",(0,i.jsx)(r.p,{children:"Les lignes sont cr\xe9\xe9es \xe0 l'aide de plusieurs propri\xe9t\xe9s (couleur, \xe9paisseur de ligne, etc.)."}),"\n",(0,i.jsx)(r.h3,{id:"propri\xe9t\xe9-startpoint",children:"propri\xe9t\xe9 startPoint"}),"\n",(0,i.jsxs)(r.p,{children:["La propri\xe9t\xe9 JSON ",(0,i.jsx)(r.code,{children:"startPoint"})," d\xe9finit \xe0 partir de quelle coordonn\xe9e la ligne peut \xeatre dessin\xe9e (voir l'exemple)."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["la propri\xe9t\xe9 ",(0,i.jsx)(r.code,{children:"startPoint"})," n'est pas expos\xe9e dans la liste des propri\xe9t\xe9s, o\xf9 la direction du dessin de ligne est visible."]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"exemple-json--1",children:"Exemple JSON :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "topLeft", //premi\xe8re orientation\n        "strokeDashArray": "6 2" //pointill\xe9\n        }\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Result: ",(0,i.jsx)(r.img,{src:s(359337).A+"",width:"160",height:"120"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "bottomLeft", //deuxi\xe8me orientation\n        "strokeDashArray": "6 2" //pointill\xe9\n        }\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Result: ",(0,i.jsx)(r.img,{src:s(268626).A+"",width:"160",height:"120"})]}),"\n",(0,i.jsx)(r.h4,{id:"propri\xe9t\xe9s-prises-en-charge-1",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"Css Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Type de pointill\xe9"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionnement horizontal"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Couleur du trait"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#line-width",children:"\xc9paisseur du trait"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Nom"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,i.jsx)(r.a,{href:"#startpoint-property",children:"startPoint"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionnement vertical"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]}),"\n",(0,i.jsx)(r.h2,{id:"ovale",children:"Ovale"}),"\n",(0,i.jsxs)(r.p,{children:["Un ovale statique est un objet d\xe9coratif contenu dans les formulaires. Les objets de forme ovale peuvent \xeatre utilis\xe9s pour dessiner des formes circulaires (lorsque les propri\xe9t\xe9s ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"largeur"})," et ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"hauteur"})," sont identiques)."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(477152).A+"",width:"75",height:"111"})}),"\n",(0,i.jsx)(r.h4,{id:"exemple-json--2",children:"Exemple JSON :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'    "myOval": {\n        "type": "oval",    //d\xe9finit le type d\'objet\n        "left": 60,             //position sur la gauche du formulaire\n        "top": 160,             //position en haut du formulaire\n        "width": 100,           //largeur de l\'objet \n        "height": 20,           //hauteur de l\'objet\n        "borderRadius": 20      //d\xe9finit la couleur de fond\n                }\n'})}),"\n",(0,i.jsx)(r.h4,{id:"propri\xe9t\xe9s-prises-en-charge-2",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#dotted-line-type",children:"Dotted Line Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Line Color"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Line Width"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},359337:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANhSURBVHhe7dovTiRBGIZxboAk4QDjEDjECCQOzw0QSJJO5gbcgwQ5glOMQLQgQSAQJIgRe4R9N19n/4VZZruru6veen5iQmGfTH091XUAf99gisDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5uYM/PT01P2F0cwW+PX19ejo6O7urltjHLMFlrZtT05Orq6uPj4+un8htTkDy/v7++Xl5enp6fPzc/cvJDVz4LBarZbLZbdAUlkEltileexKLpfAst1utVczktPKKLBoJF9cXDCSE8orcGiaRr+gHh8fuzUGyDGwPDw8qPHb21u3Rl+ZBpaYxNqrGclD5Bs4XF9fM5KHyD2wMJKHKCCwaCQfHh5ycN1DGYFls9ksFov1et2tsZ9iAks8bemTkby/kgKH+/t7RvL+ygssjOT9FRlYYiRzcP2lUgNLHFzf3t52a3ym4MAhvsG8Z9yl+MCih2pG8i4OgYWRvItJYOFd8qd8Aoemac7OzroF/AILj12/MwwsXO/6yTOwMJKDbeDAu2TzwFL59S7/wBKTWHt1hSO5isDh5uamwpFcUWBZrVbHx8dVjeS6Ast6vdZIrufgurrA0rat9upKvsc1BpbtdqtP/Va2H8mVBg7aru1HctWBRXXV2Hgk1x5YtEsbH1wT+AelVeCmabq1EQL/Ek9em80mlh4I/IeXlxezkUzgv5mNZAJ/Ikayx8E1gXfSRn1+ft4tikXgfzF47CLw15bLZbkjmcBfK3okE3hfGsklHlwT+D+o7mKxKOt6F4H/Tzx2tW1bykgmcB9N05QykgncUykjmcD9FfEumcCDxMF1zt9jAg+V+fUuAqeR7fUuAieT50gmcEoxkrM6uCZwYnFwnc/1LgKPIp/3jAQeSybXuwg8ohxGMoHHNfu7ZAJPQRv1XNe7CDyRuR67CDyp6a93EXhS049kAs9gynfJBJ6H6k5zvYvAs5nmeheBZzb29S4Cz2/UkUzgLIz3LpnAuYiD6+TfYwJnZIzrXQTOTtrrXQTOUcKRTOBMxUgefnBN4HzFwfXA610Ezl08ecVnDwQuQO+6QmBzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ21wWGrYOD70yi0jKVpSuYAAAAAElFTkSuQmCC"},268626:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANZSURBVHhe7duhTitBFIfxvgOCpAJJgqhAkCAQlTg8AskbNGnCGyAqeYrKCpIKBB7ZpBJBUlHBI9y52TV34EJ358zOzH++nyCM/kLPducwgr5PiCKwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCF+Dj46P9rTsCiyNwvvb7/f39/cPDQ3vuhcCZ2m63V1dXNzc3IZ/PDoFz9PLycnJyEvi32yBwdpbL5fHxsfvZnsMQODvuM/nt7a09BCNwLpqh+/z83J6NEDgLhkPXQ+D0np6eDIeuh8CJzefzs7Mzw6HrIXBiLm3gN92fETgNN3Qnk8n7+3t7jobACUQduh4CD6p5vRx16HoIPBxXdzqdhr9e7oTAg3p9fW1/GwqBh+CG7vX1dXsYFoHjGn7oeggckdWdbggCx7LZbCK9Xu6EwBEN/0j1FYGNmSxSGSKwpRyGrofAZuLd6YYgsA3bRSpDBLZhu0hliMBBIi1SGSJwf3kOXQ+BexryTjcEgfuIvUhliMB9xF6kMkTgDgZbpDJE4EOVMnQ9BP5d8jvdEAT+RZJFKkME/l0Ot369Efi/Ei5SGSLwN4oeuh4C+zK80w1B4H9kskhliMC+oh+pviLwX7ktUhkisNrQ9dQeuIg73RBVB852kcpQ1YGzXaQyVGPg/BepDFUXeL1eaw9dT12BF4vF0dGR9tD1VBR4NptpvF7upIrA+/3e/SxokcqQfuDVanV6elrWIpUh8cCPj4+1DV2PbODdbnd7e1vh0PXIBr68vFR9vdyJYODmkUrs1q83tcBu6E6n0/YApcAM3W+JBN5sNufn5wzdrxQCu7rj8bie18udFB+YR6qfFRy4Gbrz+bw94zulBmboHqjIwKvViqF7oPICL5fLyl8vd1JS4OZ5qoZFKkPFBG6Grvtwbs84TBmBGbq9FRCYO90QuQeuc5HKUL6Ba16kMpRp4MoXqQzlGJihayivwNzpmssrMItU5nIJzK1fJFkEXiwWLFJFkjiw+8O9u7tj6MaTMvB2u724uGDoRpUssPuOW9X/6aaSLLDDI9UAUgbGAAgsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILK4NDFmj0R82ANRa+9ve+AAAAABJRU5ErkJggg=="},477152:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,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"},657358:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAByCAIAAAAnEZPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEkSURBVHhe7d2xDQMhEABBcAXff5V0gJOPbGRv/jMJkK6EdNnNtdbgn9d98pNMiUyJTIlMiUzJYSC4ruu+PdJxQjpn2nvfj4eZ8zxI+nSJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiW2Hn+q2Q775dIlMiUyJTIlMiUyJTMEYb82sGvDSbsgTAAAAAElFTkSuQmCC"},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>d});var i=s(296540);const t={},o=i.createContext(t);function n(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);