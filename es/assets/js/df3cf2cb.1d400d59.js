/*! For license information please see df3cf2cb.1d400d59.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18292],{116257:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(474848),i=n(28453);const o={id:"pictures",title:"Im\xe1genes"},r=void 0,c={id:"FormEditor/pictures",title:"Im\xe1genes",description:"4D soporta espec\xedficamente las im\xe1genes utilizadas en sus formularios.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/es/20/FormEditor/pictures",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fpictures.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"pictures",title:"Im\xe1genes"},sidebar:"docs",previous:{title:"Hojas de estilo",permalink:"/docs/es/20/FormEditor/stylesheets"},next:{title:"Editor de formularios",permalink:"/docs/es/20/FormEditor/overview"}},d={},l=[{value:"Formatos nativos soportados",id:"Formatos-nativos-soportados",level:2},{value:"Formato de imagen no disponible",id:"Formato-de-imagen-no-disponible",level:3},{value:"Im\xe1genes de alta resoluci\xf3n",id:"Im\xe1genes-de-alta-resoluci\xf3n",level:2},{value:"Factor de escala",id:"Factor-de-escala",level:3},{value:"DPI",id:"DPI",level:3},{value:"Im\xe1genes en modo oscuro (s\xf3lo en macOS)",id:"Im\xe1genes-en-modo-oscuro-s\xf3lo-en-macOS",level:2},{value:"Coordenadas del rat\xf3n en una imagen",id:"Coordenadas-del-rat\xf3n-en-una-imagen",level:2}];function t(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"4D soporta espec\xedficamente las im\xe1genes utilizadas en sus formularios."}),"\n",(0,a.jsx)(s.h2,{id:"Formatos-nativos-soportados",children:"Formatos nativos soportados"}),"\n",(0,a.jsxs)(s.p,{children:["4D integra la gesti\xf3n nativa de los formatos de imagen. Esto significa que las im\xe1genes se mostrar\xe1n y almacenar\xe1n en su formato original, sin ninguna interpretaci\xf3n en 4D. Las especificidades de los diferentes formatos (sombreado, \xe1reas transparentes, etc.) se mantendr\xe1n cuando se copien y peguen, y se mostrar\xe1n sin alteraciones. Este soporte nativo es v\xe1lido para todas las im\xe1genes almacenadas en los formularios de 4D: ",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/staticPicture",children:"im\xe1genes est\xe1ticas"})," pegadas en el modo Dise\xf1o, im\xe1genes pegadas en ",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/inputOverview",children:"objetos de entrada"})," en ejecuci\xf3n, etc."]}),"\n",(0,a.jsx)(s.p,{children:"Los formatos de imagen m\xe1s comunes son soportados en ambas plataformas: .jpeg, .gif, .png, .tiff, .bmp, etc. En macOS, el formato .pdf tambi\xe9n est\xe1 disponible para su codificaci\xf3n y descodificaci\xf3n."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["La lista completa de formatos soportados var\xeda seg\xfan el sistema operativo y los c\xf3decs personalizados que est\xe9n instalados en las m\xe1quinas. Para saber qu\xe9 c\xf3decs est\xe1n disponibles, debe utilizar el comando ",(0,a.jsx)(s.code,{children:"PICTURE CODEC LIST"})," (ver tambi\xe9n la descripci\xf3n de ",(0,a.jsx)(s.a,{href:"/docs/es/20/Concepts/picture",children:"tipo de datos imagen"}),")."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"Formato-de-imagen-no-disponible",children:"Formato de imagen no disponible"}),"\n",(0,a.jsx)(s.p,{children:"Se muestra un icono espec\xedfico para las im\xe1genes guardadas en un formato que no est\xe1 disponible en la m\xe1quina. La extensi\xf3n del formato que falta se muestra en la parte inferior del icono:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(863483).A+"",width:"136",height:"67"})}),"\n",(0,a.jsx)(s.p,{children:"El icono se utiliza autom\xe1ticamente en todos los lugares en los que se pretende visualizar la imagen:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(108673).A+"",width:"392",height:"221"})}),"\n",(0,a.jsx)(s.p,{children:"Este icono indica que la imagen no puede ser visualizada o manipulada localmente, pero puede ser guardada sin alteraciones para que pueda ser visualizada en otras m\xe1quinas. Este es el caso, por ejemplo, para las im\xe1genes PDF en Windows, o las im\xe1genes en formato PICT."}),"\n",(0,a.jsx)(s.h2,{id:"Im\xe1genes-de-alta-resoluci\xf3n",children:"Im\xe1genes de alta resoluci\xf3n"}),"\n",(0,a.jsx)(s.p,{children:"4D soporta im\xe1genes de alta resoluci\xf3n tanto en plataformas macOS como Windows. Las im\xe1genes de alta resoluci\xf3n pueden definirse por el factor de escala o dpi."}),"\n",(0,a.jsx)(s.h3,{id:"Factor-de-escala",children:"Factor de escala"}),"\n",(0,a.jsxs)(s.p,{children:["Las pantallas de alta resoluci\xf3n tienen una mayor densidad de p\xedxeles que las pantallas est\xe1ndar tradicionales. Para que las im\xe1genes se muestren correctamente en pantallas de alta resoluci\xf3n, el n\xfamero de p\xedxeles de la imagen debe multiplicarse por el ",(0,a.jsx)(s.em,{children:"factor de escala"})," (",(0,a.jsx)(s.em,{children:"es decir"}),", dos veces m\xe1s grande, tres veces m\xe1s grande, etc.)."]}),"\n",(0,a.jsxs)(s.p,{children:['Cuando se utilizan im\xe1genes de alta resoluci\xf3n, se puede especificar el factor de escala a\xf1adiendo "@nx" en el nombre de la imagen (donde ',(0,a.jsx)(s.em,{children:"n"})," designa el factor de escala). En la tabla siguiente, puede ver que el factor de escala se indica en los nombres de las im\xe1genes de alta resoluci\xf3n, ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})," y ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Tipo de visualizaci\xf3n"}),(0,a.jsx)(s.th,{children:"Factor de escala"}),(0,a.jsx)(s.th,{children:"Ejemplo"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Resoluci\xf3n est\xe1ndar"}),(0,a.jsx)(s.td,{children:"densidad de pixel 1:1."}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"1x"}),(0,a.jsx)(s.br,{}),(0,a.jsx)(s.img,{src:n(832146).A+"",width:"152",height:"155"})," ",(0,a.jsx)(s.em,{children:"circle.png"})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Alta resoluci\xf3n"}),(0,a.jsx)(s.td,{children:"La densidad de p\xedxeles se ha multiplicado por 2 o 3."}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.table,{children:(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"2x"}),(0,a.jsx)(s.th,{children:"3x"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.img,{src:n(922857).A+"",width:"156",height:"152"}),(0,a.jsx)(s.em,{children:(0,a.jsx)(s.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})]}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.img,{src:n(245651).A+"",width:"156",height:"152"}),(0,a.jsx)(s.br,{}),(0,a.jsx)(s.em,{children:(0,a.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})]})]})]})})})]})]})]}),"\n",(0,a.jsx)(s.p,{children:"Las im\xe1genes de alta resoluci\xf3n con la convenci\xf3n @nx pueden utilizarse en los siguientes objetos:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/staticPicture",children:"Im\xe1genes est\xe1ticas"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/buttonOverview",children:"Botones"}),"/",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"radio"}),"/",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"casillas de selecci\xf3n"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/pictureButtonOverview",children:"Botones imagen"}),"/",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/picturePopupMenuOverview",children:"imagen Pop-up"})]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/tabControl",children:"Pesta\xf1as"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/listboxOverview#list-box-headers",children:"Encabezados de list box"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/20/Menus/properties#item-icon",children:"Iconos del men\xfa"})}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["4D prioriza autom\xe1ticamente las im\xe1genes con mayor resoluci\xf3n. 4D prioriza autom\xe1ticamente las im\xe1genes con mayor resoluci\xf3n. Incluso si un comando o propiedad especifica ",(0,a.jsx)(s.em,{children:"circle.png"}),", se utilizar\xe1 ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})," (si existe)."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Tenga en cuenta que la priorizaci\xf3n de la resoluci\xf3n s\xf3lo se produce para la visualizaci\xf3n de im\xe1genes en pantalla, no se realiza una priorizaci\xf3n autom\xe1tica al imprimir."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"DPI",children:"DPI"}),"\n",(0,a.jsx)(s.p,{children:"Aunque 4D prioriza autom\xe1ticamente la resoluci\xf3n m\xe1s alta, existen, sin embargo, algunas diferencias de comportamiento en funci\xf3n de los ppp de la pantalla y de la imagen*(*)*, y del formato de la imagen:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Operaci\xf3n"}),(0,a.jsx)(s.th,{children:"Comportamiento"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Soltar o pegar"}),(0,a.jsxs)(s.td,{children:["Si la imagen tiene:",(0,a.jsxs)(s.ul,{children:[(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"72dpi o 96dpi"}),' - La imagen tiene el formato "',(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesPicture#center--truncated-non-centered",children:"Center"}),'" y el objeto que contiene la imagen tiene el mismo n\xfamero de p\xedxeles.']}),(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Otro dpi"}),' - La imagen tiene el formato "{Escalada para encajar](FormObjects/properties_Picture.md#scaled-to-fit)" y el objeto que contiene la imagen es igual a (n\xfamero de p\xedxeles de la imagen * dpi de la pantalla) / (dpi de la imagen)']})," ",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Sin dpi"}),' - La imagen tiene el formato "{Escala para ajustar](FormObjects/properties_Picture.md#scaled-to-fit)".']})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057",children:"Tama\xf1o autom\xe1tico"})," (men\xfa contextual del editor de formularios)"]}),(0,a.jsxs)(s.td,{children:["Si el formato de visualizaci\xf3n de la imagen es:",(0,a.jsxs)(s.ul,{children:[(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled"})})," - El objeto que contiene la imagen se redimensiona seg\xfan (n\xfamero de p\xedxeles de la imagen * dpi de la pantalla) / (dpide la imagen) "]})," ",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Sin escalar"})," - El objeto que contiene la imagen tiene el mismo n\xfamero de p\xedxeles que la imagen."]})]})]})]})]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"(*) Generalmente, macOS = 72 dpi, Windows = 96 dpi"})}),"\n",(0,a.jsx)(s.h2,{id:"Im\xe1genes-en-modo-oscuro-s\xf3lo-en-macOS",children:"Im\xe1genes en modo oscuro (s\xf3lo en macOS)"}),"\n",(0,a.jsxs)(s.p,{children:["Puede definir im\xe1genes e iconos espec\xedficos que se utilizar\xe1n en lugar de las im\xe1genes est\xe1ndar cuando ",(0,a.jsx)(s.a,{href:"/docs/es/20/FormEditor/propertiesForm#color-scheme",children:"los formularios utilicen el esquema oscuro"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Una imagen en modo oscuro se define de la siguiente manera:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:['la imagen en modo oscuro tiene el mismo nombre que la versi\xf3n est\xe1ndar (modo claro) con el sufijo "',(0,a.jsx)(s.code,{children:"_dark"}),'"']}),"\n",(0,a.jsx)(s.li,{children:"la imagen en modo oscuro se almacena junto a la versi\xf3n est\xe1ndar."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["En tiempo de ejecuci\xf3n, 4D cargar\xe1 autom\xe1ticamente la imagen clara u oscura seg\xfan el ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/1761.html",children:"modo de colores de formulario actual"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(956356).A+"",width:"758",height:"246"})}),"\n",(0,a.jsx)(s.h2,{id:"Coordenadas-del-rat\xf3n-en-una-imagen",children:"Coordenadas del rat\xf3n en una imagen"}),"\n",(0,a.jsxs)(s.p,{children:["4D permite recuperar las coordenadas locales del rat\xf3n en un ",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/inputOverview",children:"objeto de entrada"})," asociado a una ",(0,a.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesObject#expression-type",children:"expresi\xf3n de imagen"}),", en caso de que se haga clic o se pase por encima, incluso si se ha aplicado un desplazamiento o zoom a la imagen. Este mecanismo, similar al de un mapa de im\xe1genes, puede utilizarse, por ejemplo, para manejar barras de botones desplazables o la interfaz de un software de cartograf\xeda."]}),"\n",(0,a.jsxs)(s.p,{children:["Las coordenadas se devuelven en las ",(0,a.jsx)(s.em,{children:"MouseX"})," and ",(0,a.jsx)(s.em,{children:"MouseY"})," ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html",children:"Variables Sistema"}),". Las coordenadas se expresan en p\xedxeles con respecto a la esquina superior izquierda de la imagen (0,0). Si el rat\xf3n est\xe1 fuera del sistema de coordenadas de la imagen, se devuelve -1 en ",(0,a.jsx)(s.em,{children:"MouseX"})," y ",(0,a.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Puede obtener el valor de estas variables como parte de los eventos formulario ",(0,a.jsx)(s.a,{href:"/docs/es/20/Events/onClicked",children:(0,a.jsx)(s.code,{children:"On Clicked"})}),", ",(0,a.jsx)(s.a,{href:"/docs/es/20/Events/onDoubleClicked",children:(0,a.jsx)(s.code,{children:"On Double Clicked"})}),", ",(0,a.jsx)(s.a,{href:"/docs/es/20/Events/onMouseUp",children:(0,a.jsx)(s.code,{children:"On Mouse up"})}),", ",(0,a.jsx)(s.a,{href:"/docs/es/20/Events/onMouseEnter",children:(0,a.jsx)(s.code,{children:"On Mouse Enter"})}),", o ",(0,a.jsx)(s.a,{href:"/docs/es/20/Events/onMouseMove",children:(0,a.jsx)(s.code,{children:"On Mouse Move"})}),"."]})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},221020:(e,s,n)=>{var a=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var a,o={},l=null,t=null;for(a in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(t=s.ref),s)r.call(s,a)&&!d.hasOwnProperty(a)&&(o[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:i,type:e,key:l,ref:t,props:o,_owner:c.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},956356:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},863483:(e,s,n)=>{n.d(s,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAABDCAIAAADI99pyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA1ZSURBVHhe7ZwLTFP3HscXpSBF0GVZpsmiy41jcSivyUOE8H5EomxOBClccTxEFJSXtGCLTnncxeg1JNdMmYv37hX16jYTo+KU91sFBjieQltKS6FgsvHaBe/39JwxKKWtbJTT7Hxz0pT/Oef3//X36e//+//LOeeVF4xoKQYMTcWAoakYMDSVKpiSH4XlTd2Lt1VUNz8KjW742+Za3umKup9U9tJng2/wEH7CW/issvfP3R429lDRnyFVMF2SQcXQYqpfPrpv36SZ2aSFxc+ffjoklVLttJJUCt/gIfyEt/CZal8EIdpt4gEq+jOkCuaZZHBoaHgRNTT0/NmzCX//KTMzbL9cuDAsk6GR2rvkgicyGbwi3YOf8HZR3YPttl46gIEUiuetrRSbVatGzp4dlkhowQY+SCTwB15RVFpb4S21d3FEJzAQ2LS3TwQGTrHZU6tXj5w581wsXuwQaBFcEovhCfyBV/ANHurBJZqBgRCI7u6JoKCpFSsQi1/On38uFC4ZGzgjFMIHgsqKFfAKvunHGfqBgdCTUDixc+eUqemUuTlGds1sFAqFTCYTi8UiHdTX1zc4iM+iw4chqaCumJvDE/gDrwjf9CJagoHQmUQyERBAjGmYC+TnPxeJ1AYFVIRC4a1bt+Lj4yMiIsI1av/+/ZcuXWptbR0YGKDOn0+YjIhE6JcoeBjBAgL0XPDoCkYphGbC15dgY24+8o9/PO/tnRua3t7erKystLQ0vJ7QJhzD4/EOHDjQ0dGBvKFMzBWo9PaiRyJXQMXXl/ha6Fe0BkNILJ7YsYOoNxYWI6dOEXPo2SosLDxy5AgVeN3E5/PBBkQpE3MllaIv9EjUlR074APVrkfRHgx6FYnGg4OJvAGb7GxEjdqlFAKdkZFBRlx37du3r7OzE6f39/fX1NQ8nKGy+/eH+HyCCpuNftH73DTVg2gPBsLA0tMzFhIyqaw3cj7/9o0bqCvE8lihSExMXAAYFKSWlhbYxnQgKioKRkglx8d/vXXrhIkJ+kKP6HdJqECGAAZSKKRPn9ZbWU0YG/9qYvKNs3NtcbFicLCrqyshIQFDExVvncXlcn/44QekCwDHxcWh9mQJBKcyMm77+4+zWOPGxugLPWqYCi62DAMMCnVXR8fRiIjmjRsRuDEWa4jH625qOpaWhmI+t+wLBILjx49nZmbiFdjmHoBGDodTW1uLvImOjj6ZlZWTkVHo4wMksI9e0FdXZycykvJA7zIAMBKJ5NGjR7m5ueFhYXnp6Q3W1hMsFuZL9zw8spKSAIEKtnLSBRiYoaGEbN++3dPT08/PLzg4OCkpCSkCWtRxSoFNcnLyoUOH9oaE5PJ49729x0xMYBn20Us4h3PmzJmGhgaseyg/9Cu6g5HL5VeuXEH4UEgQWXy1c7ncx3Z2iOCoick9X988LheNZKBTU1PBY+vWrU5OTi4uLj4+Pm5ubs5KARIyA9hIKqRgkH/8eHZaGuzAGmzCMuzDIHYhFw8fPnz58mWMeJQ3ehTdwWAxiNnwzC87Oew8sbVFHDHy3PH3RygR39jYWHt7e1dXVwC4ePFiWVlZVVVVZWXljRs30tPTAwICsDcoKAiAp0c2EjMswA6swSYsk5hJoV9kVXNzM+WNHkV3MLdv31b5mpPKzsxs2LyZZHPX1zcxMtLWxsbDw+PmzZv19fU/zhZGpPLy8oiICKSOv78/DIINQYXHQ66QVGANNinrM4SDYZPyRo+iO5iCggIUcCpIs3U6M7Nl40bEdGz58n+tWePn6lpaWkqhUCcUKgxNdnZ2qDoCPh8YHnh64nRssANrlN3ZQu/wgfJGjzJgMBCiSYxpRkajLFbrhx821dVREOZRXV0dqDg4OPCPHStxcyNyxcgIFuajAjFg1EszGEiQlHT9jTdGly37H5sti43VzAZj2hdffOFsY3PTympMOYLVODhgQKNsqRMDRr20gvl7RISnnV21o+OkqSk26cGDBJvGRgqFihob6ysrC958c3T5cqQLzpqe1M0nBox6aQWD6Zazk1Pxd98N7NkzyWaDjSwurrm6Wg2bxsbmmhrsRaKMGhnVbNmilQrEgFEvrWDc3d2xRikpKmquqFC8/z6RNyYm/VFRzVVVs9iASlUV2rF3ZPny71977cTRo1qpQAwY9dIKxtfXFyvKoqIiIvSVlQMhIQg9Uqc/MhJ/oqoQVBoa8B4tREqZmFx7/XWXTZu4x45RJjSKAaNeWsHs2bMHsyyU9Om0kIeHT65YMWlmhvxoqahoqq/HK5ErZmZol+3dG+DiYmNtreNv0gwY9dIKJiUlxcnJ6ciRI0+ePCHZNNXWyjkcYkzDPO3AgaeFhXgly09/WNj333yDpegHH3yg42/SDBj10goGe728vLy9ve/du9f4W1EBm4HQUIKNqemopSX5Rh4S8ri8PCYmBhnG5XKp87WJAaNeWsFABw8exHo+MDCwurr6dzZ1dZgLTLFYL155Ba+DQUGYKJ8/f97GxgZlScd0gRgw6qULGIFAEBoa6ujoCDZlZWVqwcgCA/+Zl4dBb9u2bWp/fJtPDBj10gUMhFjv3bv3vffeQzacPn26qqhIjmWNqek4izW8fv2YkRHe/HftWj83Nx2vp5kWA0a9dASDWOOw6OhoD3d3F1vbG+vW/apcr1xcs2aXg0PB2rVY6mMrtbc/jckYA+aP6/PPP9cFDKksVI6UlNuWlqPLlo0ZG1/dsGGHm5ufl1dMcHCxiwv5D8pKZ+ccHk+XpSUp9P7ZZ59R3uhRdAdz//59HUsC+f+VGgeHCQxcxsblLi6n0tIyMzJwuoDPz+Vy0UL+nEz+cKkjG5xeWFhIeaNH0R1MW1sb1iiYRGkuDIhyHpf72NaWDH2pq6tKWuA9WtBOYsORWn8oQ4/oNzExsaOjg/JGj6I7mMHBwQcPHsTGxmrKG4EgNz29ZssWRBylpcjdPVttIcnKQjv24hgcieNx1sxrOVQEKihaSNkluVaG7mCggYGB9vb2b7/99t9qdeXKf/LzS5ArLNYUlvrx8V9fvkztUifsxTHEVZYsFs7CubBA7Zut69evt7S0aL/8fHFkAGA0SXlN/lh0NHEB7cqVo6mpKhfQqpdUiiNxPM7CucQF4/T7bAYOpq9vPCyMuI0GVJKT515yPq9kMhxPsMFaJywMdqh22siQwfT1ETcCgAqbPcrjvdz9KzhSIsFZRKqZmhKX9NOMjcGCQa6QtwCYmY18/PFChiPlMIhzyVuTiAv76cTGAMHAD7F4nMOhqGRnE9fkL2zipFDgXFig2HA4xK0w9PichgZGeV8kQQUjmIUFkSsLpkKKZIO8sbAg6g2Hs5T34s6QQYFBELu7x0NCCCrm5qN8PjGC/fEgwqxIBGvkTbCwr7dbkzXIcMAgfF1dxK3MymdTjJ44ofaWTF3U09MjkUiwbITwnriktrFR3t0Nm6Rx9IK+lpaNgYAhc2X3brIYjOTkEIV6oQ5FRkaePHmyv7+/t7d39+7d69evt7a27urshE1YJksX+lravDEEMMpb/cZDQ8mv80he3nyrSOXTcYj7/7BcV7mZH+/Rgna88fb2TkxMRNJUVFS89dZbV69eRd7gLOI4qRT2yY7QI1HAluhj0x4MetV4c+y0EFnyeozy8vKzZ88WFBR0d3eT4cZrV1fXpUuXzp07V11d7enpCTDt7e0XLlxAunz55Zc4kTRCCGwwT2NujtUibbeTT6uvry8uLm7nzp2bNm1CTmB0srOzQ/3ArsePH9vY2OBPHx8fe3v7DRs2JCQk3LlzB8ew2ex33303PT2dNEJJJmNuJ9ckTJa0PoBhWhiaUDxWr15dUlKC962trYh7WlqaSCQ6evQowCBF0F5aWrpy5cpDhw4hn8Bm3bp1NTU1qvf8Mw9gmFfoTLdHlkwLQf/oo4+Cg4PlcuL5bqgoOTk5rq6uDQ0N27Zt++STT8iqg71+fn5kjXn48OHbb7+N0Q/tlJVpKX8XYB5ZMlvo6WUe8kMKgY6JiUlNTaX+Vv5bGkmDovLOO+989dVXVOvwMPghhzD0FRUVWVpaznsnH6aCzEN+fpdyZryAx2IBTFRU1K5du8ivP15TUlK2b9+OjEGK8Hi86XYvLy9kjHYwEMmGeSwWEYiXfJCcUChEToAKtH///ldfffXWrVtisbi4uBjDVH5+PqbCmKThPWoP6s21a9dWrVp1+PBhncBAcOmv/iA5hODlH7149+5dR0fHuro6gEHxR5FHXbG1td28eXN4eHhHRwfmym1tbVhIWllZod3DwwMJhKFMKpViIoAp2dOnTylb8wk+/HUfvYhiu6CHlWKuhdnws2fPAAbFw9/fv7GxEVW9qqoKuYKCj2PwigOwnER7U1MTpmFAhVkAGjHQ4TDSlCbBk7/ow0rl8rF9kcTHtrD4+eLFYanO/4v8TQCDGrMDy47Fk1QG34j1jZkZvIXPVPsiSFcwP4kHe/qHhIu2ibrF/QlJCmc36bl8kahPZa8uW6tQwj2ZHZOQrNL+527wDR7CT3gLn1X2/okbot0k1AEMI5qIAUNTMWBoKgYMTcWAoaVevPg/p3TJ84D8sRcAAAAASUVORK5CYII="},108673:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/picNoFormat2-ad015882b591ae364c3361325b40b6fe.png"},832146:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},922857:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},245651:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var a=n(296540);const i={},o=a.createContext(i);function r(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);