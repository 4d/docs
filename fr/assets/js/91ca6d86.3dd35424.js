"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24333"],{460766:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>d});var l=JSON.parse('{"id":"FormEditor/stylesheets","title":"Feuilles de style (style sheets)","description":"Une feuille de style regroupe une combinaison d\u2019attributs d\'objets formulaire \u2014  allant des attributs de texte \xe0 quasiment tous les attributs d\'objet disponibles.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/FormEditor/createStylesheet.md","sourceDirName":"FormEditor","slug":"/FormEditor/stylesheets","permalink":"/docs/fr/20-R7/FormEditor/stylesheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2FcreateStylesheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"stylesheets","title":"Feuilles de style (style sheets)"},"sidebar":"docs","previous":{"title":"Formulaires","permalink":"/docs/fr/20-R7/FormEditor/forms"},"next":{"title":"Images","permalink":"/docs/fr/20-R7/FormEditor/pictures"}}'),i=n("785893"),t=n("250065");let r={id:"stylesheets",title:"Feuilles de style (style sheets)"},d=void 0,c={},o=[{value:"Cr\xe9ation ou modification d&#39;une feuille de style",id:"cr\xe9ation-ou-modification-dune-feuille-de-style",level:2},{value:"Fichiers feuilles de style",id:"fichiers-feuilles-de-style",level:2},{value:"Architecture des feuilles de style",id:"architecture-des-feuilles-de-style",level:2},{value:"S\xe9lecteurs de feuilles de style",id:"s\xe9lecteurs-de-feuilles-de-style",level:2},{value:"Type d&#39;objet",id:"type-dobjet",level:3},{value:"Nom d&#39;objet",id:"nom-dobjet",level:3},{value:"Class",id:"class",level:3},{value:"Tous les objets",id:"tous-les-objets",level:3},{value:"Attributs sp\xe9cifiques",id:"attributs-sp\xe9cifiques",level:3},{value:"Syntaxes prises en charge",id:"syntaxes-prises-en-charge",level:4},{value:"Exemples",id:"exemples",level:4},{value:"D\xe9clarations de feuilles de style",id:"d\xe9clarations-de-feuilles-de-style",level:2},{value:"Media Queries",id:"media-queries",level:3},{value:"Exemple",id:"exemple",level:5},{value:"Attributs d&#39;objets",id:"attributs-dobjets",level:3},{value:"Correspondance d&#39;attributs",id:"correspondance-dattributs",level:4},{value:"Valeurs d&#39;attributs sp\xe9cifiques",id:"valeurs-dattributs-sp\xe9cifiques",level:4},{value:"Ordre de priorit\xe9",id:"ordre-de-priorit\xe9",level:2},{value:"JSON vs Feuille de style",id:"json-vs-feuille-de-style",level:3},{value:"Feuilles de style multiples",id:"feuilles-de-style-multiples",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Une feuille de style regroupe une combinaison d\u2019attributs d'objets formulaire \u2014  allant des attributs de texte \xe0 quasiment tous les attributs d'objet disponibles."}),"\n",(0,i.jsx)(s.p,{children:"Outre l\u2019harmonisation de l\u2019interface de vos applications, l\u2019usage de feuilles de style a trois avantages majeurs :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Gain de temps en d\xe9veloppement : pour chaque objet, vous d\xe9finissez en une seule op\xe9ration un ensemble de param\xe9trages."}),"\n",(0,i.jsx)(s.li,{children:"Facilit\xe9 de maintenance : les feuilles de styles ont la propri\xe9t\xe9 de modifier l\u2019apparence de tous les objets qui les utilisent. Changer, par exemple, la taille de la police dans une feuille de style changera la taille de la police pour tous les objets qui utilisent cette feuille de style."}),"\n",(0,i.jsx)(s.li,{children:"Contr\xf4le du d\xe9veloppement multi-plate-forme : les feuilles de style peuvent s'appliquer aux deux plate-formes macOS et Windows, ou bien \xe0 l'une d'elles uniquement. Lorsqu'une feuille de style est appliqu\xe9e, 4D utilise automatiquement la feuille de style appropri\xe9e."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"cr\xe9ation-ou-modification-dune-feuille-de-style",children:"Cr\xe9ation ou modification d'une feuille de style"}),"\n",(0,i.jsx)(s.p,{children:'Vous cr\xe9ez des feuilles de styles \xe0 partir d\'un \xe9diteur de feuilles de styles de votre choix, en sauvegardant le fichier sous une extension ".css" dans le dossier "/SOURCES" du projet.'}),"\n",(0,i.jsxs)(s.p,{children:["La Bo\xeete \xe0 Outils comporte une page ",(0,i.jsx)(s.strong,{children:"Style"})," qui est un raccourci pour cr\xe9er et modifier l'une des trois feuilles de style nomm\xe9es en fonction de la plate-forme."]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Ouvrez la page ",(0,i.jsx)(s.strong,{children:"Styles"})," en choisissant ",(0,i.jsx)(s.strong,{children:"Bo\xeete \xe0 outils > Feuilles de style"})," dans le menu D\xe9veloppement ou en cliquant sur l'ic\xf4ne ",(0,i.jsx)(s.strong,{children:"Bo\xeete outils"})," dans la barre d'outils de 4D."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(471537).Z+"",width:"787",height:"582"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["S\xe9lectionnez le type de feuille de style \xe0 cr\xe9er et cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"Cr\xe9er"})," ou ",(0,i.jsx)(s.strong,{children:"Modifier"})," : ",(0,i.jsx)(s.img,{src:n(430546).Z+"",width:"116",height:"23"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"La feuille de style s'ouvrira dans votre \xe9diteur de texte par d\xe9faut."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"fichiers-feuilles-de-style",children:"Fichiers feuilles de style"}),"\n",(0,i.jsx)(s.p,{children:"4D accepte trois fichiers feuilles de style sp\xe9cifiques :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Feuille de style"}),(0,i.jsx)(s.th,{children:"Plate-forme"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"styleSheets.css"}),(0,i.jsx)(s.td,{children:"Feuille de style globale par d\xe9faut pour macOS et Windows"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"styleSheets_mac.css"}),(0,i.jsx)(s.td,{children:"Pour d\xe9finir des styles d'attributs sp\xe9cifiques de macOS uniquement"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"styleSheets_windows.css"}),(0,i.jsx)(s.td,{children:"Pour d\xe9finir des styles d'attributs sp\xe9cifiques pour Windows uniquement"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:['Ces fichiers sont stock\xe9s dans le dossier "/SOURCES" du projet. Ils sont \xe9galement accessibles directement via le ',(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/FormEditor/overview#css-preview",children:"CSS Preview"})," dans la barre d'outils de l'\xe9diteur de formulaires."]}),"\n",(0,i.jsx)(s.h2,{id:"architecture-des-feuilles-de-style",children:"Architecture des feuilles de style"}),"\n",(0,i.jsx)(s.p,{children:"Bien qu'elles soient adapt\xe9es pour r\xe9pondre aux besoins sp\xe9cifiques des formulaires 4D, les feuilles de style pour les projets d'application suivent g\xe9n\xe9ralement la syntaxe et la grammaire des CSS2."}),"\n",(0,i.jsx)(s.p,{children:"Chaque r\xe8gle de style d'une feuille de style contient deux parties :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["un ",(0,i.jsx)(s.em,{children:"s\xe9lecteur"}),' - Un s\xe9lecteur d\xe9finit o\xf9 appliquer le style. 4D prend en charge les s\xe9lecteurs "object type", "object name", "class", "all objects", et "attribute value".']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["une ",(0,i.jsx)(s.em,{children:"d\xe9claration"})," - La d\xe9claration d\xe9finit le style \xe0 appliquer. Plusieurs lignes de d\xe9claration peuvent \xeatre regroup\xe9es pour former un bloc de d\xe9claration. Chaque ligne d'un bloc de d\xe9claration CSS doit se terminer par un point-virgule et l'int\xe9gralit\xe9 du bloc doit \xeatre entour\xe9e d'accolades."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"s\xe9lecteurs-de-feuilles-de-style",children:"S\xe9lecteurs de feuilles de style"}),"\n",(0,i.jsx)(s.h3,{id:"type-dobjet",children:"Type d'objet"}),"\n",(0,i.jsx)(s.p,{children:"Le type d'objet d\xe9finit le type d'objet \xe0 styler et correspond au s\xe9lecteur d'\xe9l\xe9ment CSS."}),"\n",(0,i.jsx)(s.p,{children:"Sp\xe9cifiez le type d'objet, puis entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Le type d'objet correspond \xe0 la propri\xe9t\xe9 JSON ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/FormObjects/propertiesObject#type",children:" type"})," des objets de formulaire."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Dans l'exemple suivant, tous les objets du type ",(0,i.jsx)(s.em,{children:"bouton"})," afficheront du texte dans la police Helvetica Neue, d'une taille de 20 pixels :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:'Pour appliquer le m\xeame style \xe0 plusieurs types d\u2019objets, sp\xe9cifiez les types d\'objets s\xe9par\xe9s par une "," puis, entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"text, input {\n  text-align: left;\n  stroke: grey;\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"nom-dobjet",children:"Nom d'objet"}),"\n",(0,i.jsxs)(s.p,{children:["Le nom de l'objet correspond au ",(0,i.jsx)(s.strong,{children:"s\xe9lecteur d'ID"})," CSS et d\xe9finit un objet sp\xe9cifique \xe0 styler, puisque que ce nom est unique dans le formulaire."]}),"\n",(0,i.jsx)(s.p,{children:"D\xe9signez l'objet avec le caract\xe8re \"#\" avant le nom de l'objet, puis entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."}),"\n",(0,i.jsx)(s.p,{children:"Dans l'exemple suivant, le texte de l'objet portant le nom \"okButton\" sera affich\xe9 dans la police Helvetica Neue, avec une taille de 20 pixels :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"class",children:"Class"}),"\n",(0,i.jsxs)(s.p,{children:["Class correspond au ",(0,i.jsx)(s.strong,{children:"s\xe9lecteur class"})," CSS et d\xe9finit un objet le style de tous les objets formulaires de l'attribut ",(0,i.jsx)(s.code,{children:"class"}),"."]}),"\n",(0,i.jsx)(s.p,{children:'Vous pouvez sp\xe9cifier les classes \xe0 utiliser avec un caract\xe8re "." suivi du nom de la classe et, entre accolades, d\xe9clarer le(s) style(s) \xe0 appliquer.'}),"\n",(0,i.jsxs)(s.p,{children:["Dans l'exemple suivant, le texte de tous les objets de la classe ",(0,i.jsx)(s.code,{children:"okButtons"})," sera affich\xe9 dans la police Helvetica Neue, avec une taille de 20 pixels, align\xe9e au centre :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:'Pour indiquer qu\'un style doit \xeatre appliqu\xe9 uniquement \xe0 des objets de type diff\xe9rent, sp\xe9cifiez le type suivi de "." et du nom de la classe, puis d\xe9clarez entre accolades le(s) style(s) \xe0 appliquer.'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"text.center {\n  text-align: center;\n  stroke: red;\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Dans la description du formulaire 4D, vous associez un nom de classe \xe0 un objet \xe0 l'aide de l'attribut ",(0,i.jsx)(s.code,{children:"class"}),'. Cet attribut contient un ou plusieurs noms de "class", s\xe9par\xe9s par un espace :']}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'class: "okButtons important"       \n'})}),"\n",(0,i.jsx)(s.h3,{id:"tous-les-objets",children:"Tous les objets"}),"\n",(0,i.jsxs)(s.p,{children:['Le caract\xe8re "*" correspond au ',(0,i.jsx)(s.strong,{children:"s\xe9lecteur universel"})," CSS et indique que le style qui suit sera appliqu\xe9 \xe0 tous les objets du formulaire."]}),"\n",(0,i.jsx)(s.p,{children:"Indiquez qu'un style doit s'appliquer \xe0 tous les objets de formulaire avec le caract\xe8re \"*\", puis, entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."}),"\n",(0,i.jsx)(s.p,{children:"Dans l'exemple suivant, tous les objets auront un fond gris :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"* {\n  fill: gray;\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"attributs-sp\xe9cifiques",children:"Attributs sp\xe9cifiques"}),"\n",(0,i.jsxs)(s.p,{children:["Les styles correspondent aux ",(0,i.jsx)(s.strong,{children:"s\xe9lecteurs d'attributs"})," et peuvent s'appliquer \xe0 tous les objets du formulaire avec un attribut sp\xe9cifique."]}),"\n",(0,i.jsx)(s.p,{children:"Sp\xe9cifiez l'attribut entre parenth\xe8ses, puis entre accolades, d\xe9clarez le(s) style(s) \xe0 appliquer."}),"\n",(0,i.jsx)(s.h4,{id:"syntaxes-prises-en-charge",children:"Syntaxes prises en charge"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Syntaxe"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"[attribute]"}),(0,i.jsxs)(s.td,{children:["les objets ayant un ",(0,i.jsx)(s.code,{children:"attribute"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'[attribute="valeur"]'}),(0,i.jsxs)(s.td,{children:["les objets dont la valeur de l'",(0,i.jsx)(s.code,{children:"attribute"}),' correspond \xe0 la "valeur" indiqu\xe9e']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'[attribute~="valeur"]'}),(0,i.jsxs)(s.td,{children:["les objets dont la valeur de ",(0,i.jsx)(s.code,{children:"attribute"}),' correspond \xe0 la "valeur" pr\xe9sente dans une liste de mots s\xe9par\xe9s par des espaces']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:'[attribute|="valeur"]'}),(0,i.jsxs)(s.td,{children:["les objets dont ",(0,i.jsx)(s.code,{children:"attribute"}),' contient une valeur qui commence par celle de "valeur"']})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsxs)(s.p,{children:["Tous les objets ayant l'attribut ",(0,i.jsx)(s.code,{children:"borderStyle"})," auront des lignes violettes :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[borderStyle]\n{\n     stroke: purple;\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:'Tous les objets de type texte ayant un attribut text dont la valeur est "Hello" auront des lettres bleues :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"text[text=Hello]\n{\n     stroke: blue;\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:'Tous les objets ayant un attribut text dont la valeur est "Hello" auront des traits bleus :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[text~=Hello]\n{\n     stroke: blue;\n}\n\n"})}),"\n",(0,i.jsx)(s.p,{children:'Tous les objets de type texte ayant un attribut text dont la valeur commence par "Hello" auront des lettres jaunes :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"text[text|=Hello]\n{\n     stroke: yellow;\n\n\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"d\xe9clarations-de-feuilles-de-style",children:"D\xe9clarations de feuilles de style"}),"\n",(0,i.jsx)(s.h3,{id:"media-queries",children:"Media Queries"}),"\n",(0,i.jsx)(s.p,{children:"Les Media queries sont utilis\xe9es pour appliquer des sch\xe9mas de couleurs \xe0 une application."}),"\n",(0,i.jsxs)(s.p,{children:["Une requ\xeate m\xe9dia est compos\xe9e d'une fonctionnalit\xe9 m\xe9dia et d'une valeur (",(0,i.jsx)(s.code,{children:"\\<fonctionnalit\xe9 m\xe9dia>:\\<valeur>"}),")."]}),"\n",(0,i.jsx)(s.p,{children:"Fonctionnalit\xe9s m\xe9dia disponibles :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"prefers-color-scheme"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Expressions de fonctionnalit\xe9 m\xe9dia disponibles :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"light"}),(0,i.jsx)(s.br,{}),"Pour utiliser un sch\xe9ma de couleur clair"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dark"}),(0,i.jsx)(s.br,{}),"Pour utiliser un sch\xe9ma de couleur sombre"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Les sch\xe9mas de couleurs sont pris en charge sur macOS uniquement."}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"Cette CSS d\xe9finit une combinaison de couleurs pour le texte et l'arri\xe8re-plan du texte dans le sch\xe9ma clair (par d\xe9faut) et une autre combinaison lorsque le sch\xe9ma sombre est s\xe9lectionn\xe9 :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"@media (prefers-color-scheme: light) {\n .textScheme {\n   fill: LightGrey;\n   stroke: Black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .textScheme {\n    fill: DarkSlateGray;\n    stroke: LightGrey;\n  }\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"attributs-dobjets",children:"Attributs d'objets"}),"\n",(0,i.jsx)(s.p,{children:"La majorit\xe9 des attributs d'objet formulaire peuvent \xeatre d\xe9finis dans une feuille de style, \xe0 l'exception des attributs suivants :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"method"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"type"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"class"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"event"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"choiceList"}),", ",(0,i.jsx)(s.code,{children:"excludedList"}),", ",(0,i.jsx)(s.code,{children:"labels"}),", ",(0,i.jsx)(s.code,{children:"list"}),", ",(0,i.jsx)(s.code,{children:"requiredList"})," (list type)"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Les attributs d'objet formulaire peuvent \xeatre d\xe9clar\xe9s avec leur ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/FormObjects/propertiesReference",children:"nom JSON"})," en tant qu'attributs CSS (\xe0 l'exclusion des types d'objet, m\xe9thodes, \xe9v\xe9nements et listes)."]}),"\n",(0,i.jsx)(s.h4,{id:"correspondance-dattributs",children:"Correspondance d'attributs"}),"\n",(0,i.jsx)(s.p,{children:"Les attributs r\xe9pertori\xe9s ci-dessous peuvent accepter le nom 4D ou le nom CSS."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"4D"}),(0,i.jsx)(s.th,{children:"CSS"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"borderStyle"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"border-style"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fill"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"background-color"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fontFamily"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"font-family"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fontSize"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"font-size"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fontStyle"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"font-style"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fontWeight"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"font-weight"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"stroke"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"color"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"textAlign"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"text-align"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"textDecoration"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"text-decoration"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"verticalAlign"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"vertical-align"})})]})]})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Les valeurs sp\xe9cifiques \xe0 4D (",(0,i.jsx)(s.em,{children:"par exemple"}),", ",(0,i.jsx)(s.code,{children:"sunken"}),") ne sont pas prises en charge lors de l'utilisation de noms d'attribut CSS."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"valeurs-dattributs-sp\xe9cifiques",children:"Valeurs d'attributs sp\xe9cifiques"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Pour les attributs ",(0,i.jsx)(s.code,{children:"icon"}),", ",(0,i.jsx)(s.code,{children:"picture"}),", et ",(0,i.jsx)(s.code,{children:"customBackgroundPicture"})," qui prennent en charge un chemin vers une image, la syntaxe est la suivante :"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* chemin absolu */\nicon: url("edit.png"); /* chemin relatif vers le fichier du formulaire */\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Pour ",(0,i.jsx)(s.code,{children:"fill"}),", ",(0,i.jsx)(s.code,{children:"stroke"})," , ",(0,i.jsx)(s.code,{children:"alternateFill"})," , ",(0,i.jsx)(s.code,{children:"horizontalLineStroke"})," et ",(0,i.jsx)(s.code,{children:"verticalLineStroke"}),", trois syntaxes sont prises en charge :"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Nom la couleur CSS : ",(0,i.jsx)(s.code,{children:"fill: red;"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Valeur hexad\xe9cimale : ",(0,i.jsx)(s.code,{children:"fill: #FF0000;"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["fonction ",(0,i.jsx)(s.code,{children:"rgb()"})," : ",(0,i.jsx)(s.code,{children:"fill:rgb(255,0,0)"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Si une cha\xeene utilise des caract\xe8res interdits en CSS, vous pouvez l'entourer de guillemets simples ou doubles. Par exemple :"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["une r\xe9f\xe9rence xliff : ",(0,i.jsx)(s.code,{children:'tooltip: ":xliff:CommonMenuFile";'})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["un datasource avec l'expression de champ : ",(0,i.jsx)(s.code,{children:'dataSource: "[Table_1:1]ID:1";'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"ordre-de-priorit\xe9",children:"Ordre de priorit\xe9"}),"\n",(0,i.jsx)(s.p,{children:"Les projets 4D hi\xe9rarchisent les d\xe9finitions de style en conflit, d'abord par la d\xe9finition du formulaire, puis par les feuilles de style."}),"\n",(0,i.jsx)(s.h3,{id:"json-vs-feuille-de-style",children:"JSON vs Feuille de style"}),"\n",(0,i.jsx)(s.p,{children:"Si un attribut est d\xe9fini dans la description du formulaire JSON et dans une feuille de style, 4D utilisera la valeur du fichier JSON."}),"\n",(0,i.jsxs)(s.p,{children:["Pour remplacer ce comportement, la valeur du style doit \xeatre suivie d'une d\xe9claration ",(0,i.jsx)(s.code,{children:"! Important"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Exemple 1"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Description du formulaire JSON"}),(0,i.jsx)(s.th,{children:"Feuille de style"}),(0,i.jsx)(s.th,{children:"4D affiche"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"text": "Button",'})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"text: Edit;"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"Button"'})})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Exemple 2"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Description du formulaire JSON"}),(0,i.jsx)(s.th,{children:"Feuille de style"}),(0,i.jsx)(s.th,{children:"4D affiche"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"text": "Button",'})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"text: Edit !important;"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"Edit"'})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"feuilles-de-style-multiples",children:"Feuilles de style multiples"}),"\n",(0,i.jsx)(s.p,{children:"A l'ex\xe9cution, 4D hi\xe9rarchise automatiquement les feuilles de style dans l'ordre suivant :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Le formulaire 4D chargera d\u2019abord le fichier CSS par d\xe9faut ",(0,i.jsx)(s.code,{children:"/SOURCES/styleSheets.css"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Il chargera ensuite le fichier CSS pour la plate-forme courante ",(0,i.jsx)(s.code,{children:"/SOURCES/styleSheets__mac.css"})," ou ",(0,i.jsx)(s.code,{children:"/SOURCES/styleSheets_windows.css"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"S'il existe, il chargera alors un fichier CSS sp\xe9cifique d\xe9fini dans le formulaire JSON :"}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"un fichier pour les deux plates-formes :"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'"css": "<path>" \n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"ou une liste de fichiers pour les deux plates-formes :"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'"css": [\n     "<path1>",\n     "<path2>" \n      ],\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"ou une liste de fichiers par plate-forme :"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n'})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Les chemins de fichiers peuvent \xeatre relatifs ou absolus."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Les chemins relatifs sont r\xe9solus par rapport au fichier de description de formulaire JSON."}),"\n",(0,i.jsxs)(s.li,{children:["Pour des raisons de s\xe9curit\xe9, seuls les chemins filesystem sont accept\xe9s pour les chemins absolus. (",(0,i.jsx)(s.em,{children:"ex :"}),', "/RESOURCES", "/DATA")']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(s.p,{children:["Voir la pr\xe9sentation vid\xe9o ",(0,i.jsx)(s.a,{href:"https://www.youtube.com/watch?v=3Hk4FUQENyQ",children:(0,i.jsx)(s.strong,{children:"CSS pour les formulaires 4D"})}),"."]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},430546:function(e,s,n){n.d(s,{Z:function(){return l}});let l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},471537:function(e,s,n){n.d(s,{Z:function(){return l}});let l=n.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var l=n(667294);let i={},t=l.createContext(i);function r(e){let s=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);