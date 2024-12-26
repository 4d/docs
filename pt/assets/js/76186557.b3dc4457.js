"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10721"],{905745:function(e,s,o){o.r(s),o.d(s,{metadata:()=>a,contentTitle:()=>d,default:()=>l,assets:()=>t,toc:()=>c,frontMatter:()=>n});var a=JSON.parse('{"id":"FormEditor/pictures","title":"Imagens","description":"4D inclui suporte espec\xedfico para imagens utilizadas nos seus formul\xe1rios.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/FormEditor/pictures.md","sourceDirName":"FormEditor","slug":"/FormEditor/pictures","permalink":"/docs/pt/19/FormEditor/pictures","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fpictures.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"pictures","title":"Imagens"},"sidebar":"docs","previous":{"title":"Folhas de estilo","permalink":"/docs/pt/19/FormEditor/stylesheets"},"next":{"title":"Lista de propriedades JSON","permalink":"/docs/pt/19/FormEditor/jsonReference"}}'),i=o("785893"),r=o("250065");let n={id:"pictures",title:"Imagens"},d=void 0,t={},c=[{value:"Formatos Nativos Compat\xedveis",id:"formatos-nativos-compat\xedveis",level:2},{value:"Formato de imagem n\xe3o dispon\xedvel",id:"formato-de-imagem-n\xe3o-dispon\xedvel",level:3},{value:"Imagens em alta resolu\xe7\xe3o",id:"imagens-em-alta-resolu\xe7\xe3o",level:2},{value:"Factor de escala",id:"factor-de-escala",level:3},{value:"DPI (macOS and Windows)",id:"dpi-macos-and-windows",level:3},{value:"Imagens em modo escuro (apenas macOS)",id:"imagens-em-modo-escuro-apenas-macos",level:2},{value:"Coordenadas do mouse numa imagem",id:"coordenadas-do-mouse-numa-imagem",level:2}];function m(e){let s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"4D inclui suporte espec\xedfico para imagens utilizadas nos seus formul\xe1rios."}),"\n",(0,i.jsx)(s.h2,{id:"formatos-nativos-compat\xedveis",children:"Formatos Nativos Compat\xedveis"}),"\n",(0,i.jsxs)(s.p,{children:["4D integra a gest\xe3o nativa dos formatos de imagem. Isso significa que imagens ser\xe3o mostradas e armazenadas em seu formato original, sem qualquer interpreta\xe7\xe3o em 4D. As funcionalidades espec\xedficas dos formatos diferentes (sombreado, \xe1reas transparentes, etc) ser\xe3o retidas quando forem copiadas e coladas, e ser\xe3o exibidas sem altera\xe7\xe3o. Essa compatibilidade nativa \xe9 v\xe1lida para todas as imagens armazenadas nos formul\xe1rios de 4D: ",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/staticPicture",children:"imagens est\xe1ticas"})," coladas no modo Desenho, imagens coladas em ",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"objetos de entrada"})," em execu\xe7\xe3o, etc."]}),"\n",(0,i.jsx)(s.p,{children:"Os formatos de imagem mais comuns s\xe3o compat\xedveis com ambas as plataformas: .jpeg, .gif, .png, .tiff, .bmp, etc. Em macOS, o formato pdf tamb\xe9m est\xe1 dispon\xedvel para codificar e decodificar."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["A lista completa dos formatos suportados varia de acordo com o sistema operativo e os codecs personalizados que s\xe3o instalados nas m\xe1quinas. Para descobrir quais os codecs dispon\xedveis, deve utilizar o comando ",(0,i.jsx)(s.code,{children:"PICTURE CODEC LIST"})," (ver tamb\xe9m a descri\xe7\xe3o do ",(0,i.jsx)(s.a,{href:"/docs/pt/19/Concepts/picture",children:"tipo de dados imagem"}),")."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"formato-de-imagem-n\xe3o-dispon\xedvel",children:"Formato de imagem n\xe3o dispon\xedvel"}),"\n",(0,i.jsx)(s.p,{children:"Um \xedcone espec\xedfico \xe9 exibido para imagens salvas em um formato que n\xe3o esteja dispon\xedvel no mecanismo. A extens\xe3o do formato faltante \xe9 mostrado na parte inferior do \xedcone:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:o(832307).Z+"",width:"136",height:"67"})}),"\n",(0,i.jsx)(s.p,{children:"O \xedcone \xe9 usado automaticamente onde a imagem precisar ser exibida:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:o(782427).Z+"",width:"399",height:"223"})}),"\n",(0,i.jsx)(s.p,{children:"O \xedcone indica que a imagem n\xe3o pode ser exibida ou manipulada localmente - mas pode ser salva sem altera\xe7\xe3o para que possa ser exibida em outros dispositivos. Por exemplo esse \xe9 o caso para imagens PDF em Windows ou para imagens no formato PICT."}),"\n",(0,i.jsx)(s.h2,{id:"imagens-em-alta-resolu\xe7\xe3o",children:"Imagens em alta resolu\xe7\xe3o"}),"\n",(0,i.jsx)(s.p,{children:"4D admite imagens de alta resolu\xe7\xe3o tanto em plataformas MacOS como Windows. As imagens de alta resolu\xe7\xe3o podem ser definidas quer por factor de escala quer por dpi."}),"\n",(0,i.jsx)(s.h3,{id:"factor-de-escala",children:"Factor de escala"}),"\n",(0,i.jsxs)(s.p,{children:["As telas de alta resolu\xe7\xe3o t\xeam uma densidade de pixels maior do que as telas padr\xe3o tradicionais. Para que as imagens sejam renderizadas correctamente em ecr\xe3s de alta resolu\xe7\xe3o, o n\xfamero de pixels na imagem deve ser multiplicado pelo factor de escala ** (",(0,i.jsx)(s.em,{children:"ou seja"}),", duas vezes maior, tr\xeas vezes maior, etc.)."]}),"\n",(0,i.jsxs)(s.p,{children:['Ao utilizar imagens de alta resolu\xe7\xe3o, pode especificar o factor de escala adicionando "@nx" no nome da imagem (onde ',(0,i.jsx)(s.em,{children:"n"})," designa o factor de escala). No quadro abaixo, pode ver que o fator de escala est\xe1 indicado nos nomes das imagens de alta resolu\xe7\xe3o, ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})," e ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Tipo de exibi\xe7\xe3o"}),(0,i.jsx)(s.th,{children:"Fator de Escala"}),(0,i.jsx)(s.th,{children:"Exemplo"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resolu\xe7\xe3o \u2018standard\u2019"}),(0,i.jsx)(s.td,{children:"Densidade de pixel 1:1."}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"1x"}),(0,i.jsx)(s.br,{}),(0,i.jsx)(s.img,{src:o(821378).Z+"",width:"152",height:"155"})," ",(0,i.jsx)(s.em,{children:"circle.png"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Alta resolu\xe7\xe3o"}),(0,i.jsx)(s.td,{children:"A densidade de pixels aumentou por um factor de 2 ou 3."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.table,{children:(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"2x"}),(0,i.jsx)(s.th,{children:"3x"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.img,{src:o(823871).Z+"",width:"156",height:"152"}),(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.img,{src:o(628213).Z+"",width:"156",height:"152"}),(0,i.jsx)(s.br,{}),(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})]})]})]})})})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"As imagens de alta resolu\xe7\xe3o com a conven\xe7\xe3o @nx podem ser utilizadas nos seguintes objectos:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/staticPicture",children:"Imagens est\xe1ticas"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Bot\xf5es"}),"/",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"radio"}),"/",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"caixas de verifica\xe7\xe3o"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Bot\xf5es imagem"}),"/",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Pop-ups imagem"})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Abas"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-headers",children:"Cabe\xe7alhos de list box"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/pt/19/Menus/properties#item-icon",children:"\xcdcones de menu"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["4D d\xe1 automaticamente prioridade \xe0s imagens com a resolu\xe7\xe3o mais alta. 4D d\xe1 automaticamente prioridade \xe0s imagens com a resolu\xe7\xe3o mais alta. Mesmo que um comando ou propriedade especifique ",(0,i.jsx)(s.em,{children:"circle.png"}),", ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})," ser\xe1 utilizado (se existir)."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Note que a prioriza\xe7\xe3o da resolu\xe7\xe3o ocorre apenas para a apresenta\xe7\xe3o de imagens no ecr\xe3, n\xe3o havendo prioriza\xe7\xe3o autom\xe1tica durante a impress\xe3o."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"dpi-macos-and-windows",children:"DPI (macOS and Windows)"}),"\n",(0,i.jsx)(s.p,{children:"Embora 4D priorize automaticamente a resolu\xe7\xe3o mais alta, h\xe1, no entanto, algumas diferen\xe7as de comportamento dependendo da tela e da imagem dpi*(*)*e do formato da imagem:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Opera\xe7\xe3o"}),(0,i.jsx)(s.th,{children:"Comportamento"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Soltar o pegar"}),(0,i.jsxs)(s.td,{children:["Se a imagem tiver:",(0,i.jsxs)(s.ul,{children:[(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"72dpi ou 96dpi"}),' - A imagem \xe9 "',(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/propertiesPicture#center--truncated-non-centered",children:"Center"}),'" formatada e o objeto que cont\xe9m a imagem tem o mesmo n\xfamero de p\xedxeis.']}),(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Outros dpi"}),' - A imagem est\xe1 formatada como "',(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled to fit"}),'" e o objeto que cont\xe9m a imagem \xe9 igual a (n\xfamero de pixels da imagem * dpi da tela) / (dpi da imagem)']})," ",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"No dpi"}),' - A imagem \xe9 formatada como "',(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled to fit"}),'".']})]})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057",children:"Tamanho autom\xe1tico"})," (menu contextual do Editor de formul\xe1rios)"]}),(0,i.jsxs)(s.td,{children:["Se o formato de apresenta\xe7\xe3o da imagem \xe9:",(0,i.jsxs)(s.ul,{children:[(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled"})})," - O objeto que cont\xe9m a imagem \xe9 redimensionado de acordo com (n\xfamero de pixels da imagem * dpi da tela) / (dpi da imagem) "]})," ",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"N\xe3o dimensionado"})," - O objeto que cont\xe9m a imagem tem o mesmo n\xfamero de pixels que a imagem."]})]})]})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"(*) Normalmente, macOS = 72 dpi, Windows = 96 dpi"})}),"\n",(0,i.jsx)(s.h2,{id:"imagens-em-modo-escuro-apenas-macos",children:"Imagens em modo escuro (apenas macOS)"}),"\n",(0,i.jsxs)(s.p,{children:["Voc\xea pode definir imagens e \xedcones espec\xedficos a serem usados no lugar das imagens padr\xe3o quando os formul\xe1rios ",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormEditor/propertiesForm#color-scheme",children:"usarem o esquema escuro"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Uma imagem em modo escuro \xe9 definida da seguinte forma:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:['A imagem do modo escuro tem o mesmo nome da vers\xe3o padr\xe3o (esquema claro) com o sufixo "',(0,i.jsx)(s.code,{children:"_dark"}),'"']}),"\n",(0,i.jsx)(s.li,{children:"a imagem do modo escuro \xe9 guardada ao lado da vers\xe3o padr\xe3o."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Em tempo de execu\xe7\xe3o, 4D carregar\xe1 automaticamente a imagem clara ou escura de acordo com o ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/1761.html",children:"esquema de cores do formul\xe1rio atual"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:o(315079).Z+"",width:"758",height:"246"})}),"\n",(0,i.jsx)(s.h2,{id:"coordenadas-do-mouse-numa-imagem",children:"Coordenadas do mouse numa imagem"}),"\n",(0,i.jsxs)(s.p,{children:["4D permite recuperar as coordenadas locais do mouse em um ",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"objeto de entrada"})," associado a uma ",(0,i.jsx)(s.a,{href:"/docs/pt/19/FormObjects/propertiesObject#expression-type",children:"express\xe3o de imagem"}),", no caso de que clique ou passe o cursor por cima, mesmo se n\xe3o tiver aplicado um deslocamento ou zoom na imagem. Esse mecanismo, similar ao de um mapa de imagens, pode ser utilizado, por exemplo, para manejar barras de bot\xf5es desloc\xe1veis ou a interface de um software de cartografia."]}),"\n",(0,i.jsxs)(s.p,{children:["As coordenadas s\xe3o retornadas na ",(0,i.jsx)(s.em,{children:"MouseX"})," e ",(0,i.jsx)(s.em,{children:"MouseY"})," ",(0,i.jsx)(s.a,{href:"/docs/pt/19/Concepts/variables#system-variables",children:"Vari\xe1veis de sistema"}),". As coordenadas s\xe3o expressas em p\xedxeis em rela\xe7\xe3o ao canto superior esquerdo da imagem (0,0). Se o mouse estiver fora do sistema de coordenadas da imagem, se devolver\xe1 -1 em ",(0,i.jsx)(s.em,{children:"MouseX"})," e ",(0,i.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Pode obter o valor dessas vari\xe1veis como parte dos eventos formul\xe1rio ",(0,i.jsx)(s.code,{children:"On Clicked"}),", ",(0,i.jsx)(s.code,{children:"On Double Clicked"}),", ",(0,i.jsx)(s.code,{children:"On Mouse up"}),", ",(0,i.jsx)(s.code,{children:"On Mouse Enter"}),", ou ",(0,i.jsx)(s.code,{children:"On Mouse Move"}),"."]})]})}function l(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},315079:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},832307:function(e,s,o){o.d(s,{Z:function(){return a}});let a="data:image/png;base64,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"},782427:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/picNoFormat2-297da65e134cd8d87329a06b22e84434.png"},821378:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},823871:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},628213:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"},250065:function(e,s,o){o.d(s,{Z:function(){return d},a:function(){return n}});var a=o(667294);let i={},r=a.createContext(i);function n(e){let s=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);