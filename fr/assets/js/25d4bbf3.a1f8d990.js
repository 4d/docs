"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29309],{171874:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var n=i(474848),r=i(28453);const t={id:"pictures",title:"Images"},o=void 0,c={id:"FormEditor/pictures",title:"Images",description:"4D inclut une prise en charge sp\xe9cifique des images utilis\xe9es dans vos formulaires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/fr/FormEditor/pictures",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fpictures.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"pictures",title:"Images"},sidebar:"docs",previous:{title:"Feuilles de style (style sheets)",permalink:"/docs/fr/FormEditor/stylesheets"},next:{title:"\xc9diteur de formulaires",permalink:"/docs/fr/FormEditor/overview"}},d={},l=[{value:"Formats natifs pris en charge",id:"formats-natifs-pris-en-charge",level:2},{value:"Format d&#39;image non disponible",id:"format-dimage-non-disponible",level:3},{value:"Images de haute r\xe9solution",id:"images-de-haute-r\xe9solution",level:2},{value:"Facteur d&#39;\xe9chelle",id:"facteur-d\xe9chelle",level:3},{value:"DPI",id:"dpi",level:3},{value:"Images en mode sombre (macOS uniquement)",id:"images-en-mode-sombre-macos-uniquement",level:2},{value:"Coordonn\xe9es de la souris dans une image",id:"coordonn\xe9es-de-la-souris-dans-une-image",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"4D inclut une prise en charge sp\xe9cifique des images utilis\xe9es dans vos formulaires."}),"\n",(0,n.jsx)(s.h2,{id:"formats-natifs-pris-en-charge",children:"Formats natifs pris en charge"}),"\n",(0,n.jsxs)(s.p,{children:["4D int\xe8gre une gestion native des images. Cela signifie que les images sont affich\xe9es et stock\xe9es dans leur format d\u2019origine, sans interpr\xe9tation dans 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. Ce support natif est valable pour toutes les images stock\xe9es dans les formulaires 4D : ",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/staticPicture",children:"images statiques"})," coll\xe9es en mode D\xe9veloppement, images coll\xe9es dans des ",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/inputOverview",children:"objets de saisie"})," \xe0 l'ex\xe9cution,"]}),"\n",(0,n.jsx)(s.p,{children:"Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est \xe9galement disponible pour l'encodage et le d\xe9codage."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["La liste compl\xe8te des formats pris en charge varie en fonction du syst\xe8me d\u2019exploitation et des codecs personnalis\xe9s install\xe9s sur les postes. Pour savoir quels sont codecs disponibles, vous devez utiliser la commande ",(0,n.jsx)(s.code,{children:"PICTURE CODEC LIST"})," (voir aussi la description du ",(0,n.jsx)(s.a,{href:"/docs/fr/Concepts/picture",children:"type de donn\xe9es image"}),")."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"format-dimage-non-disponible",children:"Format d'image non disponible"}),"\n",(0,n.jsx)(s.p,{children:"Une ic\xf4ne sp\xe9cifique est affich\xe9e pour les images stock\xe9es dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'ic\xf4ne :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(948966).A+"",width:"136",height:"67"})}),"\n",(0,n.jsx)(s.p,{children:"L'ic\xf4ne est automatiquement utilis\xe9e partout o\xf9 l'image doit \xeatre affich\xe9e :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(404358).A+"",width:"392",height:"221"})}),"\n",(0,n.jsx)(s.p,{children:"Cette ic\xf4ne indique que l'image ne peut \xeatre ni affich\xe9e ni manipul\xe9e localement -- mais elle peut \xeatre stock\xe9e sans alt\xe9ration pour \xeatre affich\xe9e sur une autre machine. C'est le cas, par exemple, pour les images PDF sous Windows ou les images au format PICT."}),"\n",(0,n.jsx)(s.h2,{id:"images-de-haute-r\xe9solution",children:"Images de haute r\xe9solution"}),"\n",(0,n.jsx)(s.p,{children:"4D prend en charge des images haute r\xe9solution sur les plateformes macOS et Windows. Les images haute r\xe9solution peuvent \xeatre d\xe9finies par le facteur d'\xe9chelle ou le dpi."}),"\n",(0,n.jsx)(s.h3,{id:"facteur-d\xe9chelle",children:"Facteur d'\xe9chelle"}),"\n",(0,n.jsxs)(s.p,{children:["Les \xe9crans haute r\xe9solution ont une densit\xe9 de pixels plus \xe9lev\xe9e que les \xe9crans standard traditionnels. Pour que les images s'affichent correctement sur des \xe9crans haute r\xe9solution, le nombre de pixels de l'image doit \xeatre multipli\xe9 par le ",(0,n.jsx)(s.em,{children:"facteur d'\xe9chelle"})," (c'est-\xe0-dire deux fois plus grand, trois fois plus grand, etc.)."]}),"\n",(0,n.jsxs)(s.p,{children:["Lorsque vous utilisez des images haute r\xe9solution, vous pouvez sp\xe9cifier le facteur d'\xe9chelle en ajoutant \"@nx\" dans le nom de l'image (o\xf9 ",(0,n.jsx)(s.em,{children:"n"})," d\xe9signe le facteur d'\xe9chelle). Dans le tableau ci-dessous, vous constaterez que le facteur d'\xe9chelle est indiqu\xe9 dans les noms des images haute r\xe9solution, ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})," et ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type d'affichage"}),(0,n.jsx)(s.th,{children:"Facteur d'\xe9chelle"}),(0,n.jsx)(s.th,{children:"Exemple"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"R\xe9solution standard"}),(0,n.jsx)(s.td,{children:"densit\xe9 de pixel 1:1."}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"1x"}),(0,n.jsx)(s.br,{}),(0,n.jsx)(s.img,{src:i(348795).A+"",width:"152",height:"155"})," ",(0,n.jsx)(s.em,{children:"circle.png"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Haute r\xe9solution"}),(0,n.jsx)(s.td,{children:"Densit\xe9 de pixel augment\xe9e d'un facteur de 2 ou 3."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.table,{children:(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"2x"}),(0,n.jsx)(s.th,{children:"3x"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.img,{src:i(86816).A+"",width:"156",height:"152"}),(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})]}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.img,{src:i(964937).A+"",width:"156",height:"152"}),(0,n.jsx)(s.br,{}),(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})]})]})]})})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Les images haute r\xe9solution avec la convention @nx peuvent \xeatre utilis\xe9es dans les objets suivants :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/staticPicture",children:"Static pictures"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Boutons"}),"/",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"radio"}),"/",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"cases \xe0 cocher"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/pictureButtonOverview",children:"Boutons image"}),"/",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/picturePopupMenuOverview",children:"Pop-up image"})]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/tabControl",children:"Tab controls"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-headers",children:"List box headers"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/fr/Menus/properties#item-icon",children:"Menu icons"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["4D priorise automatiquement les images avec la r\xe9solution la plus \xe9lev\xe9e. 4D priorise automatiquement les images avec la r\xe9solution la plus \xe9lev\xe9e. M\xeame si une commande ou une propri\xe9t\xe9 sp\xe9cifie ",(0,n.jsx)(s.em,{children:"circle.png"}),", ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})," sera utilis\xe9 (le cas \xe9ch\xe9ant)."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"A noter que cette r\xe9solution se produit uniquement pour l'affichage des images \xe0 l'\xe9cran, aucune hi\xe9rarchisation automatique n'est effectu\xe9e lors de l'impression."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"dpi",children:"DPI"}),"\n",(0,n.jsxs)(s.p,{children:["Si 4D donne automatiquement la priorit\xe9 \xe0 la r\xe9solution la plus \xe9lev\xe9e, il existe cependant des diff\xe9rences de comportement en fonction de la r\xe9solution de l'\xe9cran et de l'image ",(0,n.jsx)(s.em,{children:"(*)"})," et du format de l'image :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Op\xe9ration"}),(0,n.jsx)(s.th,{children:"Comportement"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"D\xe9poser ou Coller"}),(0,n.jsxs)(s.td,{children:["If the picture has:",(0,n.jsxs)(s.ul,{children:[(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"72dpi or 96dpi"}),' - The picture is "',(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/propertiesPicture#center--truncated-non-centered",children:"Center"}),'" formatted and the object containing the picture has the same number of pixels.']}),(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Other dpi"}),' - The picture is "',(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled to fit"}),"\" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)"]})," ",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"No dpi"}),' - The picture is "',(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled to fit"}),'" formatted.']})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057",children:"Taille automatique"})," (menu contextuel de l'\xe9diteur de formulaires)"]}),(0,n.jsxs)(s.td,{children:["If the picture's display format  is:",(0,n.jsxs)(s.ul,{children:[(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled"})})," - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) "]})," ",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Not scaled"})," - The object containing the picture has the same number of pixels as the picture."]})]})]})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(*) Typically,  macOS = 72dpi, Windows = 96dpi"})}),"\n",(0,n.jsx)(s.h2,{id:"images-en-mode-sombre-macos-uniquement",children:"Images en mode sombre (macOS uniquement)"}),"\n",(0,n.jsxs)(s.p,{children:["Vous pouvez d\xe9finir des images et des ic\xf4nes sp\xe9cifiques qui seront utilis\xe9es \xe0 la place des images standard lorsque ",(0,n.jsx)(s.a,{href:"/docs/fr/FormEditor/propertiesForm#color-scheme",children:"les formulaires utilisent le mode sombre"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Une image en mode sombre est d\xe9finie comme suit :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["l'image du mode sombre porte le m\xeame nom que la version standard (mode clair) avec le suffixe \"",(0,n.jsx)(s.code,{children:"_sombre"}),'"']}),"\n",(0,n.jsx)(s.li,{children:"l'image en mode sombre est stock\xe9e \xe0 c\xf4t\xe9 de la version standard."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Au moment de l'ex\xe9cution, 4D charge automatiquement l'image en mode clair ou sombre, en fonction du ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/1761.html",children:"mode de couleurs du formulaire courant"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(544695).A+"",width:"758",height:"246"})}),"\n",(0,n.jsx)(s.h2,{id:"coordonn\xe9es-de-la-souris-dans-une-image",children:"Coordonn\xe9es de la souris dans une image"}),"\n",(0,n.jsxs)(s.p,{children:["4D lets you retrieve the local coordinates of the mouse in an ",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/inputOverview",children:"input object"})," associated with a ",(0,n.jsx)(s.a,{href:"/docs/fr/FormObjects/propertiesObject#expression-type",children:"picture expression"}),", in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. Ce m\xe9canisme, proche de celui d'une image map, peut \xeatre utilis\xe9 par exemple pour g\xe9rer les barres de bouton d\xe9filables ou bien l'interface de logiciels de cartographie."]}),"\n",(0,n.jsxs)(s.p,{children:["The coordinates are returned in the ",(0,n.jsx)(s.em,{children:"MouseX"})," and ",(0,n.jsx)(s.em,{children:"MouseY"})," ",(0,n.jsx)(s.a,{href:"/docs/fr/Concepts/variables#system-variables",children:"System Variables"}),". Les coordonn\xe9es sont exprim\xe9es en pixels par rapport \xe0 l'angle sup\xe9rieur gauche de l'image (0,0). Lorsque la souris se trouve en dehors du syst\xe8me de coordonn\xe9es de l'image, la valeur -1 est retourn\xe9e dans ",(0,n.jsx)(s.em,{children:"MouseX"})," et ",(0,n.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can get the value of these variables as part of the ",(0,n.jsx)(s.a,{href:"/docs/fr/Events/onClicked",children:(0,n.jsx)(s.code,{children:"On Clicked"})}),", ",(0,n.jsx)(s.a,{href:"/docs/fr/Events/onDoubleClicked",children:(0,n.jsx)(s.code,{children:"On Double Clicked"})}),", ",(0,n.jsx)(s.a,{href:"/docs/fr/Events/onMouseUp",children:(0,n.jsx)(s.code,{children:"On Mouse up"})}),", ",(0,n.jsx)(s.a,{href:"/docs/fr/Events/onMouseEnter",children:(0,n.jsx)(s.code,{children:"On Mouse Enter"})}),", or ",(0,n.jsx)(s.a,{href:"/docs/fr/Events/onMouseMove",children:(0,n.jsx)(s.code,{children:"On Mouse Move"})})," form events."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},544695:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},948966:(e,s,i)=>{i.d(s,{A:()=>n});const n="data:image/png;base64,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"},404358:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/picNoFormat2-ad015882b591ae364c3361325b40b6fe.png"},348795:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},86816:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},964937:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var n=i(296540);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);