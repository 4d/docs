"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39766"],{838305:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"Zones Web","description":"Les zones Web (Web Areas) peuvent afficher tout type de contenu Web \xe0 l\u2019int\xe9rieur de vos formulaires : pages HTML au contenu statique ou dynamique, fichiers, images, JavaScript, etc. Le moteur de rendu de la zone web d\xe9pend de la plate-forme d\'ex\xe9cution de l\'application et de l\'option moteur de rendu s\xe9lectionn\xe9e .","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/fr/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"webAreaOverview","title":"Zones Web"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/fr/FormObjects/text"},"next":{"title":"Zone 4D View Pro","permalink":"/docs/fr/FormObjects/viewProAreaOverview"}}'),i=s("785893"),t=s("250065");let o={id:"webAreaOverview",title:"Zones Web"},d=void 0,a={},l=[{value:"Propri\xe9t\xe9s sp\xe9cifiques",id:"propri\xe9t\xe9s-sp\xe9cifiques",level:2},{value:"Variables associ\xe9es",id:"variables-associ\xe9es",level:3},{value:"Moteur de rendu Web",id:"moteur-de-rendu-web",level:3},{value:"Acc\xe9der aux m\xe9thodes 4D",id:"acc\xe9der-aux-m\xe9thodes-4d",level:3},{value:"Objet $4d",id:"objet-4d",level:3},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Actions standard",id:"actions-standard",level:2},{value:"Ev\xe9nements formulaire",id:"ev\xe9nements-formulaire",level:2},{value:"Notes d&#39;utilisation des zones Web",id:"notes-dutilisation-des-zones-web",level:2},{value:"Interface utilisateur",id:"interface-utilisateur",level:3},{value:"Sous-formulaires",id:"sous-formulaires",level:3},{value:"Conflit Zone Web et serveur Web (Windows)",id:"conflit-zone-web-et-serveur-web-windows",level:3},{value:"Insertion du protocole (macOS)",id:"insertion-du-protocole-macos",level:3},{value:"Acc\xe8s \xe0 l\u2019inspecteur web",id:"acc\xe8s-\xe0-linspecteur-web",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2},{value:"4DCEFParameters.json",id:"4dcefparametersjson",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Fichier par d\xe9faut",id:"fichier-par-d\xe9faut",level:4},{value:"Exemple de d\xe9sactivation d&#39;un commutateur par d\xe9faut",id:"exemple-de-d\xe9sactivation-dun-commutateur-par-d\xe9faut",level:4},{value:"Exemple pour Autoplay",id:"exemple-pour-autoplay",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Les zones Web (Web Areas) peuvent afficher tout type de contenu Web \xe0 l\u2019int\xe9rieur de vos formulaires : pages HTML au contenu statique ou dynamique, fichiers, images, JavaScript, etc. Le moteur de rendu de la zone web d\xe9pend de la plate-forme d'ex\xe9cution de l'application et de l'option ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu"})," s\xe9lectionn\xe9e ."]}),"\n",(0,i.jsxs)(n.p,{children:["Il est possible de cr\xe9er plusieurs zones web dans un m\xeame formulaire. Notez toutefois que l'utilisation des zones web doit respecter ",(0,i.jsx)(n.a,{href:"#web-area-rules",children:"plusieurs r\xe8gles"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Several dedicated ",(0,i.jsx)(n.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,i.jsx)(n.a,{href:"../category/web-area",children:"language commands"})," as well as generic and specific ",(0,i.jsx)(n.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of web areas. Des variables sp\xe9cifiques permettent d\u2019\xe9changer des informations entre la zone et l\u2019environnement 4D."]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s-sp\xe9cifiques",children:"Propri\xe9t\xe9s sp\xe9cifiques"}),"\n",(0,i.jsx)(n.h3,{id:"variables-associ\xe9es",children:"Variables associ\xe9es"}),"\n",(0,i.jsx)(n.p,{children:"Deux variables sp\xe9cifiques sont automatiquement associ\xe9es \xe0 chaque zone web :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#url",children:(0,i.jsx)(n.code,{children:"URL"})})," --pour contr\xf4ler l'URL affich\xe9e par la zone web"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#progression",children:(0,i.jsx)(n.code,{children:"Progression"})})," -- pour contr\xf4ler le pourcentage de chargement de la page affich\xe9e dans la zone web."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Depuis 4D v19 R5, la variable Progression n'est plus mise \xe0 jour dans les zones Web utilisant le ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview#web-rendering-engine",children:"moteur de rendu syst\xe8me Windows"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"moteur-de-rendu-web",children:"Moteur de rendu Web"}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez choisir entre ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"deux moteurs de rendu"})," pour la zone web, en fonction des sp\xe9cificit\xe9s de votre application."]}),"\n",(0,i.jsx)(n.p,{children:"La s\xe9lection du moteur de rendu Web int\xe9gr\xe9 vous permet d'appeler des m\xe9thodes 4D \xe0 partir de la zone Web et de vous assurer que les fonctionnalit\xe9s sur macOS et Windows sont similaires. La s\xe9lection du moteur de rendu syst\xe8me est recommand\xe9e lorsque la zone web est connect\xe9e \xe0 Internet car elle b\xe9n\xe9ficie toujours des derni\xe8res mises \xe0 jour de s\xe9curit\xe9."}),"\n",(0,i.jsx)(n.h3,{id:"acc\xe9der-aux-m\xe9thodes-4d",children:"Acc\xe9der aux m\xe9thodes 4D"}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#access-4d-methods",children:"Acc\xe8s aux m\xe9thodes 4D"})," est s\xe9lectionn\xe9e, vous pouvez appeler des m\xe9thodes 4D \xe0 partir d'une zone web."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cette propri\xe9t\xe9 n'est disponible que si la zone web ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"utilise le moteur de rendu web int\xe9gr\xe9"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Pour des raisons de s\xe9curit\xe9, puisqu'elle permet d'ex\xe9cuter du code 4D, cette option ne doit \xeatre activ\xe9e que pour les pages de confiance, telles que les pages g\xe9n\xe9r\xe9es par l'application."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"objet-4d",children:"Objet $4d"}),"\n",(0,i.jsxs)(n.p,{children:["Le ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu web int\xe9gr\xe9"})," de 4D fournit \xe0 la zone un objet JavaScript nomm\xe9 $4d que vous pouvez associer \xe0 n'importe quelle m\xe9thode de projet 4D \xe0 l'aide de la notation objet \".\""]}),"\n",(0,i.jsxs)(n.p,{children:["Par exemple, pour appeler la m\xe9thode 4D ",(0,i.jsx)(n.code,{children:"HelloWorld"}),", il suffit d'ex\xe9cuter l'instruction suivante :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.HelloWorld();\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["JavaScript is case sensitive so it is important to note that the object is named ",(0,i.jsx)(n.strong,{children:"$4d"}),' (with a lowercase "d").']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"La syntaxe des appels aux m\xe9thodes 4D est la suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"param1...paramN"})," : Vous pouvez passer autant de param\xe8tres que n\xe9cessaire \xe0 la m\xe9thode 4D.\nCes param\xe8tres peuvent \xeatre de n'importe quel type pris en charge par JavaScript (cha\xeene, num\xe9rique, tableau, objet)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"function(result)"}),' : Fonction \xe0 passer comme dernier argument. Cette fonction "callback" est appel\xe9e de mani\xe8re synchrone une fois que la m\xe9thode 4D a fini de s\'ex\xe9cuter. Elle re\xe7oit le param\xe8tre ',(0,i.jsx)(n.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"}),": Execution result of the 4D method. Ce r\xe9sultat peut \xeatre de n'importe quel type pris en charge par JavaScript (cha\xeene, num\xe9rique, tableau, objet)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, 4D travaille en UTF-8. Lorsque vous retournez du texte contenant des caract\xe8res \xe9tendus, tels que des caract\xe8res avec des accents, assurez-vous que l'encodage de la page affich\xe9 dans la zone Web est d\xe9clar\xe9 en UTF-8, sinon les caract\xe8res risquent de ne pas \xeatre retourn\xe9s correctement. Dans ce cas, ajoutez la ligne suivante dans la page HTML pour d\xe9clarer l'encodage :\n",(0,i.jsx)(n.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["Consid\xe9rons une m\xe9thode projet 4D nomm\xe9e ",(0,i.jsx)(n.code,{children:"today"})," qui ne re\xe7oit pas de param\xe8tres et qui retourne la date courante dans une cha\xeene."]}),"\n",(0,i.jsxs)(n.p,{children:["Code 4D de la m\xe9thode ",(0,i.jsx)(n.code,{children:"today"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE : Text\n return String(Current date;System date long)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Dans la zone web, la m\xe9thode 4D peut \xeatre appel\xe9e avec la syntaxe suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,i.jsx)(n.p,{children:"The 4D method does not receive any parameters but it does return the result to the callback function called by 4D after the execution of the method. Nous souhaitons afficher la date dans la page HTML qui est charg\xe9e par la zone web."}),"\n",(0,i.jsx)(n.p,{children:"Voici le code de la page HTML :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(result)\n{\n    var curDate = result;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["The 4D project method ",(0,i.jsx)(n.code,{children:"calcSum"})," receives parameters and returns their sum:"]}),"\n",(0,i.jsxs)(n.p,{children:["Code 4D de la m\xe9thode ",(0,i.jsx)(n.code,{children:"calcSum"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE (... : Real) -> $sum : Real \n  // receives n Real type parameters\n  // and returns a Real\n var $i; $n : Integer\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,i.jsx)(n.p,{children:"Le code d'ex\xe9cution JavaScript dans la zone web est le suivant :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)\n    {\n        var result = theSum // result is 262.5\n    });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"actions-standard",children:"Actions standard"}),"\n",(0,i.jsxs)(n.p,{children:["Quatre actions standard sp\xe9cifiques sont disponibles pour g\xe9rer automatiquement les zones web : ",(0,i.jsx)(n.code,{children:"Open Back URL"}),", ",(0,i.jsx)(n.code,{children:"Open Forward URL"}),", ",(0,i.jsx)(n.code,{children:"Refresh Current URL"})," et ",(0,i.jsx)(n.code,{children:"Stop Loading URL"}),". Ces actions peuvent \xeatre associ\xe9es \xe0 des boutons ou des commandes de menu et permettre une impl\xe9mentation rapide d'interfaces Web basiques. These actions are described in ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html",children:"Standard actions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ev\xe9nements-formulaire",children:"Ev\xe9nements formulaire"}),"\n",(0,i.jsx)(n.p,{children:"Des \xe9v\xe9nements formulaire sp\xe9cifiques sont destin\xe9s \xe0 la gestion programm\xe9e des zones web, concernant notamment l'activation des liens :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onBeginUrlLoading",children:(0,i.jsx)(n.code,{children:"On Begin URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onUrlResourceLoading",children:(0,i.jsx)(n.code,{children:"On URL Resource Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onEndUrlLoading",children:(0,i.jsx)(n.code,{children:"On End URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onUrlLoadingError",children:(0,i.jsx)(n.code,{children:"On URL Loading Error"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onUrlFiltering",children:(0,i.jsx)(n.code,{children:"On URL Filtering"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onOpenExternalLink",children:(0,i.jsx)(n.code,{children:"On Open External Link"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"En outre, les zones web prennent en charge les \xe9v\xe9nements formulaire g\xe9n\xe9riques suivants :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onLoad",children:(0,i.jsx)(n.code,{children:"On Load"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onUnload",children:(0,i.jsx)(n.code,{children:"On Unload"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onGettingFocus",children:(0,i.jsx)(n.code,{children:"On Getting Focus"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fr/Events/onLosingFocus",children:(0,i.jsx)(n.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notes-dutilisation-des-zones-web",children:"Notes d'utilisation des zones Web"}),"\n",(0,i.jsx)(n.h3,{id:"interface-utilisateur",children:"Interface utilisateur"}),"\n",(0,i.jsx)(n.p,{children:"Lors de l\u2019ex\xe9cution du formulaire, l\u2019utilisateur dispose des fonctions d\u2019interface standard des navigateurs dans la zone web, ce qui lui permet d\u2019interagir avec les autres zones du formulaire :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Commandes du menu Edition"}),": lorsque la zone web a le focus, les commandes du menu ",(0,i.jsx)(n.strong,{children:"Edition"})," peuvent \xeatre utilis\xe9es pour effectuer des actions telles que copier, coller, tout s\xe9lectionner, etc. selon la s\xe9lection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Menu contextuel"})," : Il est possible d'utiliser le ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesEntry#context-menu",children:"menu contextuel"})," standard du syst\xe8me avec la zone web. Display of the context menu can be controlled using the ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/wa-set-preference",children:(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Glisser-d\xe9poser"})," : L'utilisateur peut glisser et d\xe9poser du texte, des images et des documents dans la zone web ou entre une zone web et les objets du formulaire 4D, en fonction des propri\xe9t\xe9s des objets 4D.\nPour des raisons de s\xe9curit\xe9, le changement du contenu d'une zone web via le glisser-d\xe9poser d'un fichier ou d'un URL n'est pas autoris\xe9 par d\xe9faut. Dans ce cas, le curseur affiche une ic\xf4ne \"interdit\" ",(0,i.jsx)(n.img,{src:s(275307).Z+"",width:"26",height:"28"}),". Vous devez utiliser l'instruction ",(0,i.jsx)(n.code,{children:'WA SET PREFERENCE(* ; "warea";WA enable URL drop;True)'}),' pour afficher une ic\xf4ne "drop" et g\xe9n\xe9rer l\'\xe9v\xe9nement ',(0,i.jsx)(n.a,{href:"/docs/fr/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})}),". In this event, you can call the ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/wa-open-url",children:(0,i.jsx)(n.code,{children:"WA OPEN URL"})})," command or set the ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#url",children:"URL variable"})," in response to a user drop."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Les fonctions de glisser-d\xe9poser d\xe9crites ci-dessus ne sont pas prises en charge dans les zones web utilisant le ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu du syst\xe8me macOS"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sous-formulaires",children:"Sous-formulaires"}),"\n",(0,i.jsx)(n.p,{children:"Pour des raisons li\xe9es aux m\xe9canismes de redessinement des fen\xeatres, l'insertion d'une zone web dans un sous-formulaire est soumise aux contraintes suivantes :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le sous-formulaire ne doit pas pouvoir d\xe9filer,"}),"\n",(0,i.jsx)(n.li,{children:"Les limites de la zone web ne doivent pas d\xe9passer de la zone du sous-formulaire"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"La superposition d'une zone web au dessus ou en-dessous d'autres objets formulaires n'est pas prise en charge."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conflit-zone-web-et-serveur-web-windows",children:"Conflit Zone Web et serveur Web (Windows)"}),"\n",(0,i.jsx)(n.p,{children:"Sous Windows, il est d\xe9conseill\xe9 d\u2019acc\xe9der via une zone web au serveur Web de l\u2019application 4D contenant la zone car cette configuration peut provoquer un conflit paralysant l\u2019application. Bien entendu, un 4D distant peut acc\xe9der au serveur Web du 4D Server, mais pas \xe0 son propre serveur web."}),"\n",(0,i.jsx)(n.h3,{id:"insertion-du-protocole-macos",children:"Insertion du protocole (macOS)"}),"\n",(0,i.jsxs)(n.p,{children:['Les URLs manipul\xe9s par programmation dans les zones web sous macOS doivent d\xe9buter par le protocole. Par exemple, vous devez passer la cha\xeene "',(0,i.jsx)(n.a,{href:"http://www.monsite.fr",children:"http://www.monsite.fr"}),'" et non uniquement "',(0,i.jsx)(n.a,{href:"http://www.monsite.fr",children:"www.monsite.fr"}),'".']}),"\n",(0,i.jsx)(n.h2,{id:"acc\xe8s-\xe0-linspecteur-web",children:"Acc\xe8s \xe0 l\u2019inspecteur web"}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez visualiser et utiliser un inspecteur web dans les zones web de vos formulaires ou dans les zones web hors \xe9cran. Il permet d\u2019analyser le code et les flux d\u2019information des pages web."}),"\n",(0,i.jsxs)(n.p,{children:["Pour afficher l'inspecteur Web, vous pouvez soit ex\xe9cuter la commande ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"}),", soit utiliser le menu contextuel de la zone Web."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Ex\xe9cuter la commande ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})]}),(0,i.jsx)(n.br,{}),"\nCette commande peut \xeatre utilis\xe9e directement avec les zones web \xe0 l'\xe9cran (objet formulaire) et hors \xe9cran."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Utiliser le menu contextuel de la zone web"}),(0,i.jsx)(n.br,{}),"\nCette fonction ne peut \xeatre utilis\xe9e qu'avec les zones web \xe0 l'\xe9cran et n\xe9cessite que les conditions suivantes soient remplies :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["le ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesEntry#context-menu",children:"menu contextuel"})," de la zone web est activ\xe9"]}),"\n",(0,i.jsx)(n.li,{children:"l'utilisation de l'inspecteur est express\xe9ment autoris\xe9e dans la zone via la d\xe9claration suivante :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Avec le ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu syst\xe8me de Windows"}),", une modification de cette pr\xe9f\xe9rence n\xe9cessite la prise en compte d'une action de navigation dans la zone (par exemple, un rafra\xeechissement de la page)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, refer to the description of the ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/wa-set-preference",children:(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque vous avez effectu\xe9 les r\xe9glages d\xe9crits ci-dessus, vous disposez de nouvelles options telles que ",(0,i.jsx)(n.strong,{children:"Inspecter l'\xe9l\xe9ment"})," dans le menu contextuel de la zone. Lorsque vous s\xe9lectionnez cette option, le d\xe9bogueur de la zone web est alors affich\xe9."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Pour une description d\xe9taill\xe9e des fonctionnalit\xe9s de ce d\xe9bogueur, veuillez vous reporter \xe0 la documentation du moteur de rendu web utilis\xe9."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Style de ligne de bordure"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesEntry#context-menu",children:"Menu contextuel"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Taille horizontale"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesAction#method",children:"M\xe9thode"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesObject#object-name",children:"Nom de l'objet"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Utiliser un moteur de rendu Web int\xe9gr\xe9"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou expression"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Taille verticale"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]}),"\n",(0,i.jsx)(n.h2,{id:"4dcefparametersjson",children:"4DCEFParameters.json"}),"\n",(0,i.jsx)(n.p,{children:"Le fichier 4DCEFParameters.json est un fichier de configuration qui permet de personnaliser les param\xe8tres CEF afin de g\xe9rer le comportement des zones web dans les applications 4D."}),"\n",(0,i.jsxs)(n.p,{children:["Des ",(0,i.jsx)(n.a,{href:"#default-file",children:"commutateurs par d\xe9faut"})," sont fournis, mais vous pouvez les surcharger en utilisant un fichier 4DCEFParameters.json personnalis\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"Lors de la phase de d\xe9veloppement (en utilisant l'application 4D), cr\xe9ez un fichier 4DCEFParameters.json \xe0 l'emplacement suivant :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows : ",(0,i.jsx)(n.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D\\4DCEFParameters.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["macOS : ",(0,i.jsx)(n.code,{children:"$HOME/Library/Application Support/4D/4DCEFParameters.json"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Avant de g\xe9n\xe9rer une application finale, ajoutez le fichier personnalis\xe9 4DCEFParameters.json au dossier Resources du projet."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["L'ajout d'un fichier 4DCEFParameters.json personnalis\xe9 peut avoir un impact sur toutes les zones Web int\xe9gr\xe9es \xe0 4D, y compris les ",(0,i.jsx)(n.a,{href:".../ViewPro/configuring.md#form-area-properties",children:"zones 4D View Pro"}),". Il incombe au d\xe9veloppeur de veiller \xe0 ce que les commutateurs personnalis\xe9s ne d\xe9stabilisent pas l'application 4D."]})}),"\n",(0,i.jsx)(n.p,{children:"Le format du fichier 4DCEFParameters.json est le suivant :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "switches":{\n     "key":value\n  },\n  "macOS":{\n    "switches": {\n     "key":value\n    }\n  },\n  "windows": {\n    "switches": {\n     "key":value\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"La structure du fichier 4DCEFParameters.json contient :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"switches"})," : une liste de commutateurs CEF et leurs valeurs correspondantes appliqu\xe9s \xe0 la fois sur macOS et Windows."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"macOS.switches"})," : commutateurs CEF sp\xe9cifiques \xe0 macOS."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"windows.switches"})," : Commutateurs CEF sp\xe9cifiques \xe0 Windows."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Les commutateurs du fichier personnalis\xe9 sont prioritaires. En cas de duplication de commutateurs dans le m\xeame fichier, les commutateurs d\xe9finis dans la sous-section sp\xe9cifique \xe0 la plateforme ("macOS.switches" ou "windows.switches") sont prioritaires et utilis\xe9s pour la configuration.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"La liste des commutateurs pris en charge \xe9volue constamment et est g\xe9r\xe9e par l'\xe9quipe de d\xe9veloppement de CEF. Pour obtenir des informations sur les commutateurs disponibles, vous devez vous r\xe9f\xe9rer \xe0 la communaut\xe9 des d\xe9veloppeurs CEF."})}),"\n",(0,i.jsx)(n.h3,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsx)(n.h4,{id:"fichier-par-d\xe9faut",children:"Fichier par d\xe9faut"}),"\n",(0,i.jsx)(n.p,{children:"Le fichier 4DCEFParameters.json par d\xe9faut contient les commutateurs suivants :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "enable-media-stream":true,\n     "enable-print-preview":true\n  },\n  "macOS":{\n    "switches": {\n      "use-mock-keychain": true\n    }\n  },\n  "windows": {\n    "switches": {\n      "disable-features": "WinUseBrowserSpellChecker"\n    }\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-de-d\xe9sactivation-dun-commutateur-par-d\xe9faut",children:"Exemple de d\xe9sactivation d'un commutateur par d\xe9faut"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches": {\n    "disable-javascript": true,\n    "disable-web-security": true\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-pour-autoplay",children:"Exemple pour Autoplay"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "autoplay-policy": "no-user-gesture-required"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area",children:"Sp\xe9cifiez vos propres param\xe8tres pour initialiser la zone web int\xe9gr\xe9e (article de blog)"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},275307:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let i={},t=r.createContext(i);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);