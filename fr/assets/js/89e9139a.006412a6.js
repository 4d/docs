"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76622],{502730:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(474848),s=i(28453);const l={id:"documentation",title:"Documenter un projet"},o=void 0,r={id:"Project/documentation",title:"Documenter un projet",description:"In application projects, you can document your methods as well as your forms, tables, or fields. La cr\xe9ation d'une documentation est particuli\xe8rement appropri\xe9e pour les projets d\xe9velopp\xe9s par plusieurs programmeurs et s'inscrit g\xe9n\xe9ralement dans les bonnes pratiques en mati\xe8re de programmation. La documentation peut contenir la description d'un \xe9l\xe9ment ainsi que toute information n\xe9cessaire pour comprendre comment l'\xe9l\xe9ment fonctionne dans l'application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Project/documentation.md",sourceDirName:"Project",slug:"/Project/documentation",permalink:"/docs/fr/19/Project/documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdocumentation.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"documentation",title:"Documenter un projet"},sidebar:"docs",previous:{title:"Architecture d'un projet",permalink:"/docs/fr/19/Project/architecture"},next:{title:"Compilation",permalink:"/docs/fr/19/Project/compiler"}},d={},c=[{value:"Fichiers documentation",id:"fichiers-documentation",level:2},{value:"Nom du fichier de documentation",id:"nom-du-fichier-de-documentation",level:3},{value:"Architecture des fichiers de documentation",id:"architecture-des-fichiers-de-documentation",level:3},{value:"Documentation dans l&#39;Explorateur",id:"documentation-dans-lexplorateur",level:2},{value:"Visualiser la documentation",id:"visualiser-la-documentation",level:3},{value:"Modifier le fichier documentation",id:"modifier-le-fichier-documentation",level:3},{value:"Visualiser la documentation dans l&#39;\xe9diteur de code",id:"visualiser-la-documentation-dans-l\xe9diteur-de-code",level:2},{value:"D\xe9finition du fichier de documentation",id:"d\xe9finition-du-fichier-de-documentation",level:2},{value:"Prise en charge du markdown",id:"prise-en-charge-du-markdown",level:3},{value:"Exemple",id:"exemple",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In application projects, you can document your methods as well as your forms, tables, or fields. La cr\xe9ation d'une documentation est particuli\xe8rement appropri\xe9e pour les projets d\xe9velopp\xe9s par plusieurs programmeurs et s'inscrit g\xe9n\xe9ralement dans les bonnes pratiques en mati\xe8re de programmation. La documentation peut contenir la description d'un \xe9l\xe9ment ainsi que toute information n\xe9cessaire pour comprendre comment l'\xe9l\xe9ment fonctionne dans l'application."}),"\n",(0,t.jsx)(n.p,{children:"Les \xe9l\xe9ments de projet suivants peuvent \xeatre document\xe9s :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"M\xe9thodes (m\xe9thodes base, m\xe9thodes composant, m\xe9thodes projet, m\xe9thodes formulaire, m\xe9thodes 4D Mobile, triggers et classes)"}),"\n",(0,t.jsx)(n.li,{children:"Formulaires"}),"\n",(0,t.jsx)(n.li,{children:"Tables et champs"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Vos fichiers de documentation sont \xe9crits dans la syntaxe Markdown (fichiers .md) \xe0 l'aide de n'importe quel \xe9diteur prenant en charge le Markdown. Ils sont stock\xe9s en tant que fichiers ind\xe9pendants dans votre dossier Project."}),"\n",(0,t.jsx)(n.p,{children:"La documentation s'affiche dans la zone d'aper\xe7u (panneau de droite) de l'Explorateur :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(862575).A+"",width:"841",height:"590"})}),"\n",(0,t.jsxs)(n.p,{children:["Il peut \xe9galement \xeatre partiellement expos\xe9 en tant que ",(0,t.jsx)(n.a,{href:"#viewing-documentation-in-the-code-editor",children:"conseils de l'\xe9diteur de code"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fichiers-documentation",children:"Fichiers documentation"}),"\n",(0,t.jsx)(n.h3,{id:"nom-du-fichier-de-documentation",children:"Nom du fichier de documentation"}),"\n",(0,t.jsxs)(n.p,{children:["Les fichiers de documentation ont le m\xeame nom que l'\xe9l\xe9ment auquel ils sont rattach\xe9s, avec l'extension \".md\". Par exemple, le fichier de documentation rattach\xe9 \xe0 la m\xe9thode projet ",(0,t.jsx)(n.code,{children:"myMethod.4dm"})," sera nomm\xe9 ",(0,t.jsx)(n.code,{children:"myMethod.md"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Dans l'Explorateur, 4D affiche automatiquement le fichier de documentation avec le m\xeame nom que l'\xe9l\xe9ment s\xe9lectionn\xe9 (voir ci-dessous)."}),"\n",(0,t.jsx)(n.h3,{id:"architecture-des-fichiers-de-documentation",children:"Architecture des fichiers de documentation"}),"\n",(0,t.jsxs)(n.p,{children:["Tous les fichiers de documentation sont stock\xe9s dans le dossier ",(0,t.jsx)(n.code,{children:"Documentation"}),", situ\xe9 au premier niveau du dossier Package."]}),"\n",(0,t.jsxs)(n.p,{children:["L'architecture du dossier ",(0,t.jsx)(n.code,{children:"Documentation"})," est la suivante :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Documentation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Classes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"myClass.md"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DatabaseMethods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"onStartup.md"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Formulaires"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"loginDial.md"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"myMethod.md"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"TableForms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"input.md"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Triggers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"table1.md"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Un formulaire projet et sa m\xe9thode de formulaire projet partagent le m\xeame fichier de documentation pour le formulaire et la m\xe9thode."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Un formulaire table et sa m\xe9thode de formulaire table partagent le m\xeame fichier de documentation pour le formulaire et la m\xe9thode."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Renommer ou supprimer un \xe9l\xe9ment document\xe9 dans votre projet renomme ou supprime \xe9galement le fichier Markdown associ\xe9 \xe0 l'\xe9l\xe9ment."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"documentation-dans-lexplorateur",children:"Documentation dans l'Explorateur"}),"\n",(0,t.jsx)(n.h3,{id:"visualiser-la-documentation",children:"Visualiser la documentation"}),"\n",(0,t.jsx)(n.p,{children:"Pour afficher la documentation dans la fen\xeatre de l'Explorateur :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Assurez-vous que la zone d'aper\xe7u est affich\xe9e."}),"\n",(0,t.jsx)(n.li,{children:"S\xe9lectionnez l'\xe9l\xe9ment document\xe9 dans la liste de l'Explorateur."}),"\n",(0,t.jsxs)(n.li,{children:["Cliquez sur le bouton ",(0,t.jsx)(n.strong,{children:"Documentation"})," situ\xe9 sous la zone d'aper\xe7u."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(235922).A+"",width:"218",height:"68"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Si aucun fichier de documentation n'a \xe9t\xe9 trouv\xe9 pour l'\xe9l\xe9ment s\xe9lectionn\xe9, un bouton ",(0,t.jsx)(n.strong,{children:"Cr\xe9er"})," s'affiche (voir ci-dessous)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sinon, s'il existe un fichier de documentation pour l'\xe9l\xe9ment s\xe9lectionn\xe9, le contenu est affich\xe9 dans la zone. Le contenu n'est pas directement modifiable dans le volet."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"modifier-le-fichier-documentation",children:"Modifier le fichier documentation"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez cr\xe9er et/ou modifier un fichier de documentation Markdown \xe0 partir de la fen\xeatre de l'Explorateur pour l'\xe9l\xe9ment s\xe9lectionn\xe9."}),"\n",(0,t.jsx)(n.p,{children:"S'il n'y a pas de fichier de documentation pour l'\xe9l\xe9ment s\xe9lectionn\xe9, vous pouvez :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["cliquez sur le bouton ",(0,t.jsx)(n.strong,{children:"Cr\xe9er"})," dans le volet ",(0,t.jsx)(n.code,{children:"Documentation"})," ou,"]}),"\n",(0,t.jsxs)(n.li,{children:["choisissez l'option ",(0,t.jsx)(n.strong,{children:"Modifier la documentation..."})," dans le menu contextuel ou le menu d'options de l'Explorateur."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(133787).A+"",width:"277",height:"150"})}),"\n",(0,t.jsx)(n.p,{children:"4D cr\xe9e automatiquement un fichier .md nomm\xe9 correctement avec un mod\xe8le de base \xe0 l'emplacement appropri\xe9 et l'ouvre avec votre \xe9diteur Markdown par d\xe9faut."}),"\n",(0,t.jsxs)(n.p,{children:["Si un fichier de documentation existe d\xe9j\xe0 pour l'\xe9l\xe9ment s\xe9lectionn\xe9, vous pouvez l'ouvrir avec votre \xe9diteur Markdown en choisissant l'option ",(0,t.jsx)(n.strong,{children:"Modifier la documentation..."})," dans le menu contextuel ou le menu d'options de l'Explorateur."]}),"\n",(0,t.jsx)(n.h2,{id:"visualiser-la-documentation-dans-l\xe9diteur-de-code",children:"Visualiser la documentation dans l'\xe9diteur de code"}),"\n",(0,t.jsx)(n.p,{children:"L'\xe9diteur de code 4D affiche une partie de la documentation d'une m\xe9thode dans son info-bulle."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(781852).A+"",width:"737",height:"169"})}),"\n",(0,t.jsxs)(n.p,{children:["If a file named ",(0,t.jsx)(n.code,{children:"\\&#060;MethodName&#062;.md"})," exists in ",(0,t.jsx)(n.code,{children:"\\&#060;package&#062;/documentation"})," folder, the code editor displays (by priority):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tout texte saisi dans une balise HTML ",(0,t.jsx)(n.code,{children:"comment"})," (",(0,t.jsx)(n.em,{children:"\x3c!-- command documentation --\x3e"}),") en haut du fichier markdown."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ou, si aucune balise de ",(0,t.jsx)(n.code,{children:"commentaire"})," html n'est utilis\xe9e, la premi\xe8re phrase apr\xe8s une balise ",(0,t.jsx)(n.code,{children:"# Description"})," du fichier markdown.",(0,t.jsx)(n.br,{}),"\nDans ce cas, la premi\xe8re ligne contient le ",(0,t.jsx)(n.strong,{children:"prototype"})," de la m\xe9thode, g\xe9n\xe9r\xe9 automatiquement par le parseur du code 4D."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Sinon, l'\xe9diteur de code affiche ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv18R2/4D/18-R2/Writing-a-method.300-4824019.en.html#4618226",children:"le bloc de commentaire en haut du code de la m\xe9thode"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"d\xe9finition-du-fichier-de-documentation",children:"D\xe9finition du fichier de documentation"}),"\n",(0,t.jsxs)(n.p,{children:["4D utilise un mod\xe8le de base pour cr\xe9er de nouveaux fichiers de documentation. Ce mod\xe8le propose des fonctionnalit\xe9s sp\xe9cifiques qui vous permettent ",(0,t.jsx)(n.a,{href:"#viewing-documentation-in-the-code-editor",children:"d'afficher des informations dans l'\xe9diteur de code"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Cependant, vous pouvez utiliser toutes les ",(0,t.jsx)(n.a,{href:"#supported-markdown",children:"balises Markdown prises en charge"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"De nouveaux fichiers de documentation sont cr\xe9\xe9s avec les contenus par d\xe9faut suivants :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(868484).A+"",width:"302",height:"204"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ligne"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'"\x3c!-- Type your summary here --\x3e"'}),(0,t.jsxs)(n.td,{children:["Commentaire HTML. Utilis\xe9 en priorit\xe9 comme description de m\xe9thode dans les ",(0,t.jsx)(n.a,{href:"#viewing-documentation-in-the-code-editor",children:"infobulles de l'\xe9diteur de code"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"## Description"}),(0,t.jsx)(n.td,{children:"Titre de niveau 2 en Markdown. La premi\xe8re phrase qui suit cette balise est utilis\xe9e comme description d'une m\xe9thode dans les infobulles de l'\xe9diteur de code si le commentaire HTML n'est pas utilis\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"## Example"}),(0,t.jsx)(n.td,{children:"Titre de niveau 2, vous pouvez utiliser cette zone pour afficher un exemple de code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["`",(0,t.jsx)(n.code,{children:"4D <br/>Ins\xe9rez votre exemple ici \\`"})]}),(0,t.jsx)(n.td,{children:"Utilis\xe9 pour formater des exemples de code 4D (utilise la biblioth\xe8que highlight.js)"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"prise-en-charge-du-markdown",children:"Prise en charge du markdown"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La balise de titre est prise en charge :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Title 1\n## Title 2\n### Title 3\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les balises de style (italique, gras, barr\xe9) sont prises en charge :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"_italic_\n**bold**\n**_bold/italic_**\n~~strikethrough~~\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La balise de bloc de code (```4d ... ```) est prise en charge avec le formatage du code 4D :"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["`",(0,t.jsx)(n.code,{children:'4d   C_TEXT($txt)   $txt:="Hello world!"   \\`'})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La balise de tableau est prise en charge :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"| Parameter | Type   | Description  |\n| --------- | ------ | ------------ |\n| wpArea    | String |Write pro area|\n| toolbar   | String |Toolbar name  |\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La balise de lien est prise en charge :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// Case 1\nLa [documentation](https://doc.4d.com) de la commande ...\n\n// Case 2\n[4D blog][1]\n\n[1]: https://blog.4d.com\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les balises d'image sont prises en charge :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'![image info](pictures/image.png)\n\n![logo 4D](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")\n\n[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.4d.com",children:(0,t.jsx)(n.img,{src:"https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png",alt:"logo blog 4D avec lien",title:"4D blog logo"})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, consultez le ",(0,t.jsx)(n.a,{href:"https://guides.github.com/features/mastering-markdown/",children:"guide Markdown de GitHub"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Dans le fichier ",(0,t.jsx)(n.code,{children:"WP SwitchToolbar.md"}),", vous pouvez \xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"| Parameter | Type   | in/out | Description |\n| --------- | ------ | ------ | ----------- |\n| size      | Longint | in | Logo style selector (1 to 5)  |\n| logo      | Picture | out | Selected logo |\n\n\n## Description\n\nCette m\xe9thode retourne un logo de taille sp\xe9cifique, selon la valeur du param\xe8tre *size*.\n1 = smallest size, 5 = largest size.\n\n## Exemple\n\nC_PICTURE($logo)\nC_LONGINT($size)\n\n//Obtenir le plus grand logo\n$logo:=GetLogo(5)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Explorer view: ",(0,t.jsx)(n.img,{src:i(862575).A+"",width:"841",height:"590"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Code editor view: ",(0,t.jsx)(n.img,{src:i(108429).A+"",width:"447",height:"74"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},781852:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/codeEditor_Comments-e5e986df997c051b9a2ce531e8cb17da.png"},235922:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},133787:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},868484:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS4AAADMCAYAAADNu05+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AABanSURBVHhe7Z1Lr9zE1ob3X9j/g39BZsxAYhjBGCkzJogx+hRlEiYozCKhHEUJSsJRECAQEtckEMKdCAi3sMnmbBBhkkkG/vqtctnL5XK3293t7up+Hmltt8vlunmtt8vebnvv+++/LzAMw3KyvR9++KHAMAzLyZxw/fjjj25lWcvPP/+8+OCDD4o333xzJabyU+nY9tkqj7V89NatW739muXmLPf0586dO24l2CLrH330UXHt2rXizz//LO7fv790Ozo6SqZj22urOubyUfmqfLbLn1nfzPWGcC26vH37trOUk2DYppp89rvvvuvt5yzXv9zTn59++smtLLrUN1fKMTBs0+3DDz/s7ecs17/c059lmK5F/PHHH0mnwLBNt99++6344osvkr6NbZ454fr5558rG7p+8+bNpENgWC4mH15WPLC+2vU9mzjUPv744+Lvv/9OOgOG5WLyYflyysexzbK9X375pVjEdLHs66+/TjoChuVm8mX5dMrXsc0xJ1y//vqrWxmyfPfdd5MOgGG5mny6r/+zXM9yT390YVLLYH3X9S9kTdtSBx/DcjX5tHw79nfWN2e9IVzzLue9/UEX1h599NHijTfeaG17+eWXi6effro4PDxsbQum/Z977jmXR6bPSkvl7WNqh+oN6ypTbbDt0+e9vb3KUm2f12w/UtuxYfbPP/8Uv//+eytdN7DOO9by7b5xwHL85Z7+3L17163Ms9R/YOa9O14BK2F44YUXGulBMNYpXPr8yCOPFCdOnGgJ1zLEyhrCtRp77bXXiscff7x45513qrR79+4Vzz//fPHMM8+40wybf5rJtz/77LPe8cBy3OWe/gwx3beVOuDTTAF7+vRpJ1yffPJJlS5hUJoNZqWFWY7ERftqtqZ1CYx+Z6b82i+khTJVhkTQ7h/q0ueQrv3ttrB9HuEKbVfbQhtUbig/5FO6titdbbN9xZZjOsXTF89jjz3mxEvfzs8++6xbf/XVV92MLLVfl8nHU76Prd+ccGl6HazPuu4yHnL7Q5hpXLp0qQrqMHP69NNPq2BWkNtZWRA6O1MJ4hSERwISytQypGufJ554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"},108429:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},862575:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/explorer_Doc-2553e939f64b465e1e4b0f7c84418ff7.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(296540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);