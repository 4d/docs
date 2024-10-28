"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4581],{859447:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(474848),i=r(28453);const s={id:"web-get-body-part",title:"WEB GET BODY PART",slug:"/commands/web-get-body-part",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/web-get-body-part",title:"WEB GET BODY PART",description:"WEB GET BODY PART ( partie ; contenuPartie ; nomPartie ; typeMime ; nomFichier )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-body-part.md",sourceDirName:"commands-legacy",slug:"/commands/web-get-body-part",permalink:"/docs/fr/commands/web-get-body-part",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-body-part.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-get-body-part",title:"WEB GET BODY PART",slug:"/commands/web-get-body-part",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WA ZOOM OUT",permalink:"/docs/fr/commands/wa-zoom-out"},next:{title:"WEB Get body part count",permalink:"/docs/fr/commands/web-get-body-part-count"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET BODY PART"})," ( ",(0,t.jsx)(n.em,{children:"partie"})," ; ",(0,t.jsx)(n.em,{children:"contenuPartie"})," ; ",(0,t.jsx)(n.em,{children:"nomPartie"})," ; ",(0,t.jsx)(n.em,{children:"typeMime"})," ; ",(0,t.jsx)(n.em,{children:"nomFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"partie"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de partie"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"contenuPartie"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Contenu de la partie"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomPartie"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:'Nom de la variable "input"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeMime"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Type mime du fichier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomFichier"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nom du fichier post\xe9"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WEB GET BODY PART"}),', appel\xe9e dans le contexte d\u2019un process Web, permet d\u2019analyser la partie "corps" d\u2019une requ\xeate multi-part.']}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"partie"})," le num\xe9ro de la partie \xe0 analyser. Vous pouvez obtenir le nombre total de parties \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-get-body-part-count",children:"WEB Get body part count"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"contenuParti"}),"e r\xe9cup\xe8re le contenu de la partie. Lorsque les parties \xe0 r\xe9cup\xe9rer sont des fichiers, vous devez passer un param\xe8tre de type BLOB. Dans le cas de variables TEXT post\xe9es dans un formulaire Web, vous pouvez passer un param\xe8tre de type texte."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomPartie"})," r\xe9cup\xe8re le nom de la variable du champ input HTTP."]}),"\n",(0,t.jsxs)(n.p,{children:["Les param\xe8tres ",(0,t.jsx)(n.em,{children:"typeMime"})," et ",(0,t.jsx)(n.em,{children:"nomFichier"})," permettent de r\xe9cup\xe9rer le type Mime et le nom du fichier d\u2019origine, le cas \xe9ch\xe9ant. ",(0,t.jsx)(n.em,{children:"nomFichier"})," n\u2019est renseign\xe9 que dans le cas o\xf9 le fichier a \xe9t\xe9 post\xe9 dans ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.input,{type:"file"})}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"typeMime"})," et ",(0,t.jsx)(n.em,{children:"nomFichier"})," sont optionnels mais ne peuvent pas \xeatre pass\xe9s s\xe9par\xe9ment."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Dans le cadre d\u2019une requ\xeate multi-part, le premier tableau de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-get-variables",children:"WEB GET VARIABLES"})," retourne toutes les parties du formulaire, dans le m\xeame ordre que la commande ",(0,t.jsx)(n.strong,{children:"WEB GET BODY PART"}),". Vous pouvez l\u2019utiliser par exemple afin d\u2019obtenir directement la position d'une partie du formulaire."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Dans cet exemple, un formulaire Web permet de t\xe9l\xe9charger sur le serveur HTTP plusieurs images depuis un navigateur et de les afficher dans la page. Voici le formulaire Web :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(79022).A+"",width:"421",height:"236"})}),"\n",(0,t.jsx)(n.p,{children:"Voici le code la partie  de la page :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-HTML",children:'<body>\n\xa0\xa0\xa0 \xa0\xa0\xa0 <form enctype="multipart/form-data" action="/4DACTION/GetFile/" method="post">\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 Locate the picture files to upload: <br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 Picture file 1: <input name="file1" type="file"><br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 Picture file 2: <input name="file2" type="file"><br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 <input type="submit">\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \n\xa0\xa0\xa0 \xa0\xa0\xa0 </form> \xa0\xa0\xa0 \n\xa0\xa0\xa0 \xa0\xa0\xa0 <hr/>\n\xa0\xa0\xa0 \x3c!--4DSCRIPT/galleryInit--\x3e\n\xa0\xa0\xa0 \x3c!--4Dloop aFileNames--\x3e\n\xa0\xa0\xa0 \xa0\xa0\xa0 <img src="/photos/\x3c!--4Dvar aFileNames{aFileNames}--\x3e"/>\n\xa0\xa0\xa0 \x3c!--4Dendloop--\x3e\n</body>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Deux m\xe9thodes 4D sont appel\xe9es par la page :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"galleryInit au chargement (balise 4DSCRIPT), permettant d\u2019afficher les images pr\xe9sentes dans le dossier de destination."}),"\n",(0,t.jsx)(n.li,{children:"GetFile au moment de l\u2019envoi des donn\xe9es (url 4DACTION du formulaire multi-part), permettant de traiter l\u2019envoi."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Voici le code de la m\xe9thode galleryInit :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vDestinationFolder : Text\n\xa0ARRAY TEXT(aFileNames;0)\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\xa0//"DossierWeb/photos" par exemple\n\xa0DOCUMENT LIST($vDestinationFolder;aFileNames)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Voici le code de la m\xe9thode GetFile :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPartName;$vPartMimeType;$vPartFileName;$vDestinationFolder : Text\n\xa0var $vPartContentBlob : Blob\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\n\xa0For($i;1;WEB Get body part count)\xa0//pour chaque partie\n\xa0\xa0\xa0\xa0WEB GET BODY PART($i;$vPartContentBlob;$vPartName;$vPartMimeType;$vPartFileName)\n\xa0\xa0\xa0\xa0If($vPartFileName#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vDestinationFolder+$vPartFileName;$vPartContentBlob)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0WEB SEND HTTP REDIRECT("/")\xa0// retour \xe0 la page\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-get-body-part-count",children:"WEB Get body part count"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-get-variables",children:"WEB GET VARIABLES"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},79022:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/pict864606.fr-7ba5e81f53ebe6845e3b2b417be758d3.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(296540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);