"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99843"],{532831:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>t});var r=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"Zones Web","description":"Les zones Web (Web Areas) peuvent afficher tout type de contenu Web \xe0 l\u2019int\xe9rieur de vos formulaires : pages HTML au contenu statique ou dynamique, fichiers, images, JavaScript, etc. Le moteur de rendu de la zone web d\xe9pend de la plate-forme d\u2019ex\xe9cution de l\u2019application et de l\'option de moteur de rendu s\xe9lectionn\xe9e.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/fr/20/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"webAreaOverview","title":"Zones Web"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/fr/20/FormObjects/text"},"next":{"title":"Zone 4D View Pro","permalink":"/docs/fr/20/FormObjects/viewProAreaOverview"}}'),i=s("785893"),o=s("250065");let t={id:"webAreaOverview",title:"Zones Web"},d=void 0,a={},l=[{value:"Propri\xe9t\xe9s sp\xe9cifiques",id:"propri\xe9t\xe9s-sp\xe9cifiques",level:2},{value:"Variables associ\xe9es",id:"variables-associ\xe9es",level:3},{value:"Moteur de rendu Web",id:"moteur-de-rendu-web",level:3},{value:"Acc\xe9der aux m\xe9thodes 4D",id:"acc\xe9der-aux-m\xe9thodes-4d",level:3},{value:"Objet $4d",id:"objet-4d",level:3},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Actions standard",id:"actions-standard",level:2},{value:"Ev\xe9nements formulaire",id:"ev\xe9nements-formulaire",level:2},{value:"Notes d&#39;utilisation des zones Web",id:"notes-dutilisation-des-zones-web",level:2},{value:"Interface utilisateur",id:"interface-utilisateur",level:3},{value:"Sous-formulaires",id:"sous-formulaires",level:3},{value:"Conflit Zone Web et serveur Web (Windows)",id:"conflit-zone-web-et-serveur-web-windows",level:3},{value:"Insertion du protocole (macOS)",id:"insertion-du-protocole-macos",level:3},{value:"Acc\xe8s \xe0 l\u2019inspecteur web",id:"acc\xe8s-\xe0-linspecteur-web",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Les zones Web (Web Areas) peuvent afficher tout type de contenu Web \xe0 l\u2019int\xe9rieur de vos formulaires : pages HTML au contenu statique ou dynamique, fichiers, images, JavaScript, etc. Le moteur de rendu de la zone web d\xe9pend de la plate-forme d\u2019ex\xe9cution de l\u2019application et de ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"l'option de moteur de rendu"})," s\xe9lectionn\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:["Il est possible de cr\xe9er plusieurs zones web dans un m\xeame formulaire. A noter cependant que l'utilisation de zones web est soumise \xe0 ",(0,i.jsx)(n.a,{href:"#web-area-rules",children:"quelques limitations"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Plusieurs ",(0,i.jsx)(n.a,{href:"#standard-actions",children:"actions standard"}),", de nombreuses ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"commandes de langage"})," et ",(0,i.jsx)(n.a,{href:"#form-events",children:"\xe9v\xe9nements formulaires"})," g\xe9n\xe9riques et d\xe9di\xe9s permettent au d\xe9veloppeur de contr\xf4ler le fonctionnement des zones web. Des variables sp\xe9cifiques permettent d\u2019\xe9changer des informations entre la zone et l\u2019environnement 4D."]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s-sp\xe9cifiques",children:"Propri\xe9t\xe9s sp\xe9cifiques"}),"\n",(0,i.jsx)(n.h3,{id:"variables-associ\xe9es",children:"Variables associ\xe9es"}),"\n",(0,i.jsx)(n.p,{children:"Deux variables sp\xe9cifiques sont automatiquement associ\xe9es \xe0 chaque zone web :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#url",children:(0,i.jsx)(n.code,{children:"URL"})})," -- pour contr\xf4ler l\u2019URL affich\xe9 par la zone web"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#progression",children:(0,i.jsx)(n.code,{children:"Progression"})})," -- pour contr\xf4ler le pourcentage de chargement de la page affich\xe9e dans la zone web."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\xc0 partir de 4D v19 R5, la variable de Progression n'est plus mise \xe0 jour dans les zones Web utilisant le ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/webAreaOverview#web-rendering-engine",children:"moteur de rendu du syst\xe8me Windows"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"moteur-de-rendu-web",children:"Moteur de rendu Web"}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez choisir entre ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"deux moteurs de rendus"})," pour la zone web, en fonction des sp\xe9cificit\xe9s de votre application."]}),"\n",(0,i.jsx)(n.p,{children:"La s\xe9lection du moteur de rendu Web int\xe9gr\xe9 vous permet d'appeler des m\xe9thodes 4D \xe0 partir de la zone Web et de vous assurer que les fonctionnalit\xe9s sur macOS et Windows sont similaires. La s\xe9lection du moteur de rendu syst\xe8me est recommand\xe9e lorsque la zone web est connect\xe9e \xe0 Internet car elle b\xe9n\xe9ficie toujours des derni\xe8res mises \xe0 jour de s\xe9curit\xe9."}),"\n",(0,i.jsx)(n.h3,{id:"acc\xe9der-aux-m\xe9thodes-4d",children:"Acc\xe9der aux m\xe9thodes 4D"}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#access-4d-methods",children:"Acc\xe8s m\xe9thodes 4D"})," est coch\xe9e, vous pouvez appeler des m\xe9thodes 4D \xe0 partir d'une zone web."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cette propri\xe9t\xe9 n'est disponible que si la zone web ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"utilise le moteur de rendu web int\xe9gr\xe9"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"For security reasons since it allows executing 4D code, this option should only be enabled for pages you trust, such as pages generated by the application."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"objet-4d",children:"Objet $4d"}),"\n",(0,i.jsxs)(n.p,{children:["Le ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu Web int\xe9gr\xe9 4D"})," fournit \xe0 la zone un objet JavaScript nomm\xe9 $4d que vous pouvez associer \xe0 n'importe quelle m\xe9thode projet 4D \xe0 l'aide de la notation objet \".\"."]}),"\n",(0,i.jsxs)(n.p,{children:["Par exemple, pour appeler la m\xe9thode 4D ",(0,i.jsx)(n.code,{children:"HelloWorld"}),", vous devez simplement ex\xe9cuter la d\xe9claration suivante :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-codeJS",children:"$4d.HelloWorld();\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'JavaScript est sensible \xe0 la casse. Il est donc important de noter que l\'objet est nomm\xe9 $4d (avec un "d" minuscule).'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe des appels aux m\xe9thodes 4D est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-codeJS",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"param1...paramN"})," : Vous pouvez passer autant de param\xe8tres que vous le souhaitez dans la m\xe9thode 4D. Ces param\xe8tres peuvent \xeatre de n'importe quel type pris en charge par JavaScript (cha\xeene, num\xe9rique, tableau, objet)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"function(result)"}),' : Fonction \xe0 passer comme dernier argument. Cette fonction "callback" est appel\xe9e de mani\xe8re sychronis\xe9e une fois que la m\xe9thode 4D a fini de s\'ex\xe9cuter. Elle re\xe7oit le param\xe8tre ',(0,i.jsx)(n.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"}),": R\xe9sultat de l'ex\xe9cution de la m\xe9thode 4D, retourn\xe9e dans l'expression \"$0\". Ce r\xe9sultat peut \xeatre de n'importe quel type pris en charge par JavaScript (cha\xeene, num\xe9rique, tableau, objet). Vous pouvez utiliser la commande ",(0,i.jsx)(n.code,{children:"C_OBJECT"})," pour retourner les objets."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, 4D op\xe8re en UTF-8. Lorsque vous retournez du texte contenant des caract\xe8res \xe9tendus, tels que des caract\xe8res avec des accents, assurez-vous que l'encodage de la page affich\xe9 dans la zone Web est d\xe9clar\xe9 en UTF-8, sinon les caract\xe8res risquent de ne pas \xeatre retourn\xe9s correctement. In this case, add the following line in the HTML page to declare the encoding: ",(0,i.jsx)(n.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["Consid\xe9rons une m\xe9thode projet 4D nomm\xe9e ",(0,i.jsx)(n.code,{children:"today"})," qui ne re\xe7oit pas de param\xe8tres et qui retourne la date courante dans une cha\xeene."]}),"\n",(0,i.jsxs)(n.p,{children:["Code 4D de la m\xe9thode ",(0,i.jsx)(n.code,{children:"today"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Dans la zone web, la m\xe9thode 4D peut \xeatre appel\xe9e avec la syntaxe suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,i.jsx)(n.p,{children:"La m\xe9thode 4D ne re\xe7oit aucun param\xe8tre mais elle retourne la valeur $0 \xe0 la fonction callback appel\xe9e par 4D apr\xe8s avoir ex\xe9cut\xe9 la m\xe9thode. Nous souhaitons afficher la date dans la page HTML qui est charg\xe9e par la zone web."}),"\n",(0,i.jsx)(n.p,{children:"Voici le code de la page HTML :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["La m\xe9thode projet 4D ",(0,i.jsx)(n.code,{children:"calcSum"})," re\xe7oit des param\xe8tres (",(0,i.jsx)(n.code,{children:"$1...$n"}),") et retourne leur somme dans ",(0,i.jsx)(n.code,{children:"$0"})," :"]}),"\n",(0,i.jsxs)(n.p,{children:["Code 4D de la m\xe9thode ",(0,i.jsx)(n.code,{children:"calcSum"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" C_REAL(${1}) // re\xe7oit n param\xe8tres de type REEL\n C_REAL($0) // retourne un R\xe9el\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,i.jsx)(n.p,{children:"Le code d'ex\xe9cution JavaScript dans la zone web est le suivant :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // le r\xe9sultat est 262.5\n    });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"actions-standard",children:"Actions standard"}),"\n",(0,i.jsxs)(n.p,{children:["Quatre actions standard sont disponibles pour g\xe9rer automatiquement les zones Web : ",(0,i.jsx)(n.code,{children:"Open Back URL"}),", ",(0,i.jsx)(n.code,{children:"Open Forward URL"}),", ",(0,i.jsx)(n.code,{children:"Refresh Current URL"})," et ",(0,i.jsx)(n.code,{children:"Stop Loading URL"}),". Ces actions peuvent \xeatre associ\xe9es \xe0 des boutons ou des commandes de menu et permettre une impl\xe9mentation rapide d'interfaces Web basiques. Ces actions sont d\xe9crites dans ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"Actions standard"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ev\xe9nements-formulaire",children:"Ev\xe9nements formulaire"}),"\n",(0,i.jsx)(n.p,{children:"Des \xe9v\xe9nements formulaire sp\xe9cifiques sont destin\xe9s \xe0 la gestion programm\xe9e des zones web, concernant notamment l'activation des liens :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onBeginUrlLoading",children:(0,i.jsx)(n.code,{children:"On Begin URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onUrlResourceLoading",children:(0,i.jsx)(n.code,{children:"On URL Resource Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onEndUrlLoading",children:(0,i.jsx)(n.code,{children:"On End URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onUrlLoadingError",children:(0,i.jsx)(n.code,{children:"On URL Loading Error"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onUrlFiltering",children:(0,i.jsx)(n.code,{children:"On URL Filtering"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onOpenExternalLink",children:(0,i.jsx)(n.code,{children:"On Open External Link"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"En outre, les zones web prennent en charge les \xe9v\xe9nements formulaire g\xe9n\xe9riques suivants :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onLoad",children:(0,i.jsx)(n.code,{children:"On Load"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onUnload",children:(0,i.jsx)(n.code,{children:"On Unload"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onGettingFocus",children:(0,i.jsx)(n.code,{children:"On Getting Focus"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onLosingFocus",children:(0,i.jsx)(n.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notes-dutilisation-des-zones-web",children:"Notes d'utilisation des zones Web"}),"\n",(0,i.jsx)(n.h3,{id:"interface-utilisateur",children:"Interface utilisateur"}),"\n",(0,i.jsx)(n.p,{children:"Lors de l\u2019ex\xe9cution du formulaire, l\u2019utilisateur dispose des fonctions d\u2019interface standard des navigateurs dans la zone web, ce qui lui permet d\u2019interagir avec les autres zones du formulaire :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Commandes Edit menu"})," : lorsque la zone web a le focus, les commandes du menu ",(0,i.jsx)(n.strong,{children:"Edit"})," permettent d\u2019effectuer les actions de copier, coller, tout s\xe9lectionner, etc., en fonction de la s\xe9lection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Le menu contextuel"})," : il est possible d'utiliser le ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#context-menu",children:"menu contextuel"})," standard du syst\xe8me avec la zone web. L\u2019affichage de ce menu peut \xe9galement \xeatre contr\xf4l\xe9 via la commande ",(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Glisser-d\xe9poser"})," : l\u2019utilisateur peut effectuer des glisser-d\xe9poser de textes, d\u2019images ou de documents \xe0 l\u2019int\xe9rieur d\u2019une zone web ou entre une zone web et les objets des formulaires 4D, en fonction des propri\xe9t\xe9s des objets 4D. Pour des raisons de s\xe9curit\xe9, le changement du contenu d'une zone web via le glisser-d\xe9poser d'un fichier ou d'un URL n'est pas autoris\xe9 par d\xe9faut. Dans ce cas, le curseur affiche une ic\xf4ne d'interdiction ",(0,i.jsx)(n.img,{src:s(911627).Z+"",width:"26",height:"28"}),". Vous devez utiliser l'instruction ",(0,i.jsx)(n.code,{children:'WA SET PREFERENCE(*;"warea";WA enable URL drop;True)'}),' pour afficher une ic\xf4ne "drop" et g\xe9n\xe9rer l\'\xe9v\xe9nement ',(0,i.jsx)(n.a,{href:"/docs/fr/20/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})}),". Dans cet \xe9v\xe9nement, vous pouvez appeler la commande ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:(0,i.jsx)(n.code,{children:"WA OPEN URL"})})," ou d\xe9finir la ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#url",children:"variable URL"})," en r\xe9ponse \xe0 un d\xe9p\xf4t utilisateur."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Les fonctions de glisser-d\xe9poser d\xe9crites ci-dessus ne sont pas prises en charge dans les zones Web utilisant le ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu du syst\xe8me macOS"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sous-formulaires",children:"Sous-formulaires"}),"\n",(0,i.jsx)(n.p,{children:"Pour des raisons li\xe9es aux m\xe9canismes de redessinement des fen\xeatres, l'insertion d'une zone web dans un sous-formulaire est soumise aux contraintes suivantes :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le sous-formulaire ne doit pas pouvoir d\xe9filer,"}),"\n",(0,i.jsx)(n.li,{children:"Les limites de la zone web ne doivent pas d\xe9passer de la zone du sous-formulaire"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"La superposition d'une zone web au dessus ou en-dessous d'autres objets formulaires n'est pas prise en charge."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conflit-zone-web-et-serveur-web-windows",children:"Conflit Zone Web et serveur Web (Windows)"}),"\n",(0,i.jsx)(n.p,{children:"Sous Windows, il est d\xe9conseill\xe9 d\u2019acc\xe9der via une zone web au serveur Web de l\u2019application 4D contenant la zone car cette configuration peut provoquer un conflit paralysant l\u2019application. Bien entendu, un 4D distant peut acc\xe9der au serveur Web du 4D Server, mais pas \xe0 son propre serveur web."}),"\n",(0,i.jsx)(n.h3,{id:"insertion-du-protocole-macos",children:"Insertion du protocole (macOS)"}),"\n",(0,i.jsxs)(n.p,{children:['Les URLs manipul\xe9s par programmation dans les zones web sous macOS doivent d\xe9buter par le protocole. Par exemple, vous devez passer la cha\xeene "',(0,i.jsx)(n.a,{href:"http://www.monsite.fr",children:"http://www.monsite.fr"}),'" et non uniquement "',(0,i.jsx)(n.a,{href:"http://www.monsite.fr",children:"www.monsite.fr"}),'".']}),"\n",(0,i.jsx)(n.h2,{id:"acc\xe8s-\xe0-linspecteur-web",children:"Acc\xe8s \xe0 l\u2019inspecteur web"}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez visualiser et utiliser un inspecteur web dans les zones web de vos formulaires ou dans les zones web hors \xe9cran. Il permet d\u2019analyser le code et les flux d\u2019information des pages web."}),"\n",(0,i.jsxs)(n.p,{children:["Pour afficher l'inspecteur web, vous pouvez soit ex\xe9cuter la commande ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"}),", soit utiliser le menu contextuel de la zone web."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Execute the ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,i.jsx)(n.br,{})," This command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use the web area context menu"}),(0,i.jsx)(n.br,{})," This feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["le ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#context-menu",children:"menu contextuel"})," de la zone Web est activ\xe9"]}),"\n",(0,i.jsx)(n.li,{children:"l'utilisation de l'inspecteur est express\xe9ment autoris\xe9e dans la zone via la d\xe9claration suivante :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'    WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Avec le ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu du syst\xe8me Windows"}),", une modification de cette pr\xe9f\xe9rence n\xe9cessite une action de navigation dans la zone (par exemple, un rafra\xeechissement de la page) pour \xeatre prise en compte."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque les param\xe9trages d\xe9crits ci-dessus sont effectu\xe9s, vous disposez de nouvelles options telles que ",(0,i.jsx)(n.strong,{children:"Inspect Element"})," dans le menu contextuel de la zone. Lorsque vous s\xe9lectionnez cette option, le d\xe9bogueur de la zone web est alors affich\xe9."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Pour une description d\xe9taill\xe9e des fonctionnalit\xe9s de ce d\xe9bogueur, veuillez vous reporter \xe0 la documentation du moteur de rendu web utilis\xe9."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Style de la bordure"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"CSS Class"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#context-menu",children:"Menu contextuel"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dim. horizontal"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesAction#method",children:"M\xe9thode"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Nom"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Utiliser le moteur de rendu Web int\xe9gr\xe9"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou expression"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dim. vertical"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},911627:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var r=s(667294);let i={},o=r.createContext(i);function t(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);