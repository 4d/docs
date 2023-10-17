"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66356],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=o.createContext({}),l=function(e){var t=o.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,g=c["".concat(m,".").concat(u)]||c[u]||p[u]||n;return a?o.createElement(g,i(i({ref:t},d),{},{components:a})):o.createElement(g,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},781528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>d});a(667294);var o=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"pictures",title:"Imagens"},s=void 0,m={unversionedId:"FormEditor/pictures",id:"version-20/FormEditor/pictures",title:"Imagens",description:"4D inclui suporte espec\xedfico para imagens utilizadas nos seus formul\xe1rios.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/pt/20/FormEditor/pictures",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fpictures.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"pictures",title:"Imagens"},sidebar:"docs",previous:{title:"Folhas de estilo",permalink:"/docs/pt/20/FormEditor/stylesheets"},next:{title:"Editor de formul\xe1rios",permalink:"/docs/pt/20/FormEditor/overview"}},l={},d=[{value:"Formatos Nativos Suportados",id:"formatos-nativos-suportados",level:2},{value:"Formato de imagem n\xe3o dispon\xedvel",id:"formato-de-imagem-n\xe3o-dispon\xedvel",level:3},{value:"Imagens em alta resolu\xe7\xe3o",id:"imagens-em-alta-resolu\xe7\xe3o",level:2},{value:"Factor de escala",id:"factor-de-escala",level:3},{value:"DPI (macOS and Windows)",id:"dpi-macos-and-windows",level:3},{value:"Imagens em modo escuro (apenas macOS)",id:"imagens-em-modo-escuro-apenas-macos",level:2},{value:"Coordenadas do rato numa imagem",id:"coordenadas-do-rato-numa-imagem",level:2}],p={toc:d};function c(e){var{components:t}=e,i=n(e,["components"]);return(0,o.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"4D inclui suporte espec\xedfico para imagens utilizadas nos seus formul\xe1rios."),(0,o.kt)("h2",r({},{id:"formatos-nativos-suportados"}),"Formatos Nativos Suportados"),(0,o.kt)("p",null,"4D integra a gest\xe3o nativa dos formatos de imagem. Isso significa que imagens ser\xe3o mostradas e armazenadas em seu formato original, sem qualquer interpreta\xe7\xe3o em 4D. As funcionalidades espec\xedficas dos formatos diferentes (sombreado, \xe1reas transparentes, etc) ser\xe3o retidas quando forem copiadas e coladas, e ser\xe3o exibidas sem altera\xe7\xe3o. Essa compatibilidade nativa \xe9 v\xe1lida para todas as imagens armazenadas nos formul\xe1rios de 4D: ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/FormObjects/staticPicture"}),"imagens est\xe1ticas")," coladas no modo Desenho, imagens coladas em ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/FormObjects/inputOverview"}),"objetos de entrada")," em execu\xe7\xe3o, etc."),(0,o.kt)("p",null,"The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding. Em macOS, o formato pdf tamb\xe9m est\xe1 dispon\xedvel para codificar e decodificar."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A lista completa dos formatos suportados varia de acordo com o sistema operativo e os codecs personalizados que s\xe3o instalados nas m\xe1quinas. Para descobrir quais os codecs dispon\xedveis, deve utilizar o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"PICTURE CODEC LIST")," (ver tamb\xe9m a descri\xe7\xe3o do ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/Concepts/picture"}),"tipo de dados imagem"),").")),(0,o.kt)("h3",r({},{id:"formato-de-imagem-n\xe3o-dispon\xedvel"}),"Formato de imagem n\xe3o dispon\xedvel"),(0,o.kt)("p",null,"Um \xedcone espec\xedfico \xe9 exibido para imagens salvas em um formato que n\xe3o esteja dispon\xedvel no mecanismo. A extens\xe3o do formato faltante \xe9 mostrado na parte inferior do \xedcone:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(716201).Z,width:"136",height:"67"})),(0,o.kt)("p",null,"O \xedcone \xe9 usado automaticamente onde a imagem precisar ser exibida:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(962718).Z,width:"399",height:"223"})),(0,o.kt)("p",null,"O \xedcone indica que a imagem n\xe3o pode ser exibida ou manipulada localmente - mas pode ser salva sem altera\xe7\xe3o para que possa ser exibida em outros dispositivos. Por exemplo esse \xe9 o caso para imagens PDF em Windows ou para imagens no formato PICT."),(0,o.kt)("h2",r({},{id:"imagens-em-alta-resolu\xe7\xe3o"}),"Imagens em alta resolu\xe7\xe3o"),(0,o.kt)("p",null,"4D suporta imagens de alta resolu\xe7\xe3o tanto em plataformas MacOS como Windows. As imagens de alta resolu\xe7\xe3o podem ser definidas quer por factor de escala quer por dpi."),(0,o.kt)("h3",r({},{id:"factor-de-escala"}),"Factor de escala"),(0,o.kt)("p",null,"Os ecr\xe3s de alta resolu\xe7\xe3o t\xeam uma maior densidade de p\xedxeis do que os ecr\xe3s padr\xe3o tradicionais. Para que as imagens sejam renderizadas correctamente em ecr\xe3s de alta resolu\xe7\xe3o, o n\xfamero de pixels na imagem deve ser multiplicado pelo factor de escala *",(0,o.kt)("em",{parentName:"p"}," ("),"ou seja*, duas vezes maior, tr\xeas vezes maior, etc.)."),(0,o.kt)("p",null,'Ao utilizar imagens de alta resolu\xe7\xe3o, pode especificar o factor de escala adicionando "@nx" no nome da imagem (onde ',(0,o.kt)("em",{parentName:"p"},"n")," designa o factor de escala). No quadro abaixo, pode ver que o fator de escala est\xe1 indicado nos nomes das imagens de alta resolu\xe7\xe3o, ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",r({parentName:"em"},{href:"mailto:circle@2x.png"}),"circle@2x.png"))," e ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",r({parentName:"em"},{href:"mailto:circle@3x.png"}),"circle@3x.png")),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Display Type"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Factor de escala"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Exemplo"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Resolu\xe7\xe3o \u2018standard\u2019"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Densidade de pixel 1:1."),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("strong",{parentName:"td"},"1x"),(0,o.kt)("br",null),(0,o.kt)("img",{src:a(889317).Z,width:"152",height:"155"})," ",(0,o.kt)("em",{parentName:"td"},"circle.png"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Alta resolu\xe7\xe3o"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"A densidade de pixels aumentou por um factor de 2 ou 3."),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("table",null,(0,o.kt)("th",null,"2x"),(0,o.kt)("th",null,"3x"),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:a(410487).Z,width:"156",height:"152"}),(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",r({parentName:"em"},{href:"mailto:circle@2x.png"}),"circle@2x.png"))),(0,o.kt)("td",null,(0,o.kt)("img",{src:a(90303).Z,width:"156",height:"152"}),(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",r({parentName:"em"},{href:"mailto:circle@3x.png"}),"circle@3x.png"))))))))),(0,o.kt)("p",null,"As imagens de alta resolu\xe7\xe3o com a conven\xe7\xe3o @nx podem ser utilizadas nos seguintes objectos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/staticPicture"}),"Imagens est\xe1ticas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/buttonOverview"}),"Bot\xf5es"),"/",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/radiobuttonOverview"}),"radio"),"/",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/checkboxOverview"}),"caixas de verifica\xe7\xe3o")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/pictureButtonOverview"}),"Bot\xf5es imagem"),"/",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview"}),"Pop-ups imagem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/tabControl"}),"Tab controls")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-headers"}),"Cabe\xe7alhos de list box")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/Menus/properties#item-icon"}),"\xcdcones de menu"))),(0,o.kt)("p",null,"4D d\xe1 automaticamente prioridade \xe0s imagens com a resolu\xe7\xe3o mais alta. 4D automatically prioritizes pictures with the highest resolution. Mesmo que um comando ou propriedade especifique ",(0,o.kt)("em",{parentName:"p"},"circle.png"),", ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",r({parentName:"em"},{href:"mailto:circle@3x.png"}),"circle@3x.png"))," ser\xe1 utilizado (se existir)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note que a prioriza\xe7\xe3o da resolu\xe7\xe3o ocorre apenas para a apresenta\xe7\xe3o de imagens no ecr\xe3, n\xe3o havendo prioriza\xe7\xe3o autom\xe1tica durante a impress\xe3o.")),(0,o.kt)("h3",r({},{id:"dpi-macos-and-windows"}),"DPI (macOS and Windows)"),(0,o.kt)("p",null,"While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi",(0,o.kt)("em",{parentName:"p"},"(","*",")"),", and picture format:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Comportamento"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Soltar o pegar"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Se a imagem tiver:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"72dpi or 96dpi"),' - The picture is "',(0,o.kt)("a",r({parentName:"td"},{href:"/docs/pt/20/FormObjects/propertiesPicture#center--truncated-non-centered"}),"Center"),'" formatted and the object containing the picture has the same number of pixels.'),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"Other dpi"),' - The picture is "',(0,o.kt)("a",r({parentName:"td"},{href:"/docs/pt/20/FormObjects/propertiesPicture#scaled-to-fit"}),"Scaled to fit"),"\" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)")," ",(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"No dpi"),' - The picture is "',(0,o.kt)("a",r({parentName:"td"},{href:"/docs/pt/20/FormObjects/propertiesPicture#scaled-to-fit"}),"Scaled to fit"),'" formatted.')))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057"}),"Automatic Size")," (Form Editor context menu)"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Se o formato de apresenta\xe7\xe3o da imagem \xe9:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",r({parentName:"strong"},{href:"/docs/pt/20/FormObjects/propertiesPicture#scaled-to-fit"}),"Scaled"))," - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) ")," ",(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"Not scaled")," - The object containing the picture has the same number of pixels as the picture.")))))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(","*",") Normalmente, macOS = 72 dpi, Windows = 96 dpi")),(0,o.kt)("h2",r({},{id:"imagens-em-modo-escuro-apenas-macos"}),"Imagens em modo escuro (apenas macOS)"),(0,o.kt)("p",null,"You can define specific pictures and icons to be used instead of standard pictures when ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/FormEditor/propertiesForm#color-scheme"}),"forms use the dark scheme"),"."),(0,o.kt)("p",null,"Uma imagem em modo escuro \xe9 definida da seguinte forma:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'dark mode picture has the same name as the standard (light scheme) version with the suffix "',(0,o.kt)("inlineCode",{parentName:"li"},"_dark"),'"'),(0,o.kt)("li",{parentName:"ul"},"a imagem do modo escuro \xe9 guardada ao lado da vers\xe3o padr\xe3o.")),(0,o.kt)("p",null,"Em tempo de execu\xe7\xe3o, 4D carregar\xe1 automaticamente a imagem clara ou escura de acordo com o ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/1761.html"}),"esquema de cores do formul\xe1rio atual"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(656465).Z,width:"758",height:"246"})),(0,o.kt)("h2",r({},{id:"coordenadas-do-rato-numa-imagem"}),"Coordenadas do rato numa imagem"),(0,o.kt)("p",null,"4D permite recuperar as coordenadas locais do mouse em um ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/FormObjects/inputOverview"}),"objeto de entrada")," associado a uma ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#expression-type"}),"express\xe3o de imagem"),", no caso de que clique ou passe o cursor por cima, mesmo se n\xe3o tiver aplicado um deslocamento ou zoom na imagem. Esse mecanismo, similar ao de um mapa de imagens, pode ser utilizado, por exemplo, para manejar barras de bot\xf5es desloc\xe1veis ou a interface de um software de cartografia."),(0,o.kt)("p",null,"As coordenadas s\xe3o devolvidas nas ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html"}),"Vari\xe1veis de Sistema"),". ",(0,o.kt)("em",{parentName:"p"},"MouseX")," e",(0,o.kt)("em",{parentName:"p"},"MouseY"),". The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). Se o mouse estiver fora do sistema de coordenadas da imagem, se devolver\xe1 -1 em ",(0,o.kt)("em",{parentName:"p"},"MouseX")," e ",(0,o.kt)("em",{parentName:"p"},"MouseY"),"."),(0,o.kt)("p",null,"Pode obter o valor dessas vari\xe1veis como parte dos eventos formul\xe1rio ",(0,o.kt)("inlineCode",{parentName:"p"},"On Clicked"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Double Clicked"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mouse up"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mouse Enter"),", ou ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mouse Move"),"."))}c.isMDXComponent=!0},656465:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},716201:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},962718:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/picNoFormat2-297da65e134cd8d87329a06b22e84434.png"},889317:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},410487:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},90303:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"}}]);