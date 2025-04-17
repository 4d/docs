"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31433"],{336107:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands/compile-project","title":"Compile project","description":"Compile project {( {;}{options} )} : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands/compile-project.md","sourceDirName":"commands","slug":"/commands/compile-project","permalink":"/docs/fr/commands/compile-project","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcompile-project.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"compile-project","title":"Compile project","slug":"/commands/compile-project","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Compilateur","permalink":"/docs/fr/commands/theme/Compiler"},"next":{"title":"IDLE","permalink":"/docs/fr/commands/idle"}}'),t=s("785893"),i=s("250065");let d={id:"compile-project",title:"Compile project",slug:"/commands/compile-project",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Param\xe8tre options",id:"param\xe8tre-options",level:3},{value:"R\xe9sultat",id:"r\xe9sultat",level:3},{value:"Objets variables",id:"objets-variables",level:2},{value:"Objet code",id:"objet-code",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compile project"})," {( {",(0,t.jsx)(n.em,{children:"projectFile"}),"}{;}{",(0,t.jsx)(n.em,{children:"options"}),"} )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"projectFile"}),(0,t.jsx)(n.td,{children:"4D.File"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Fichier .4DProject \xe0 compiler"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet qui sp\xe9cifie les options de compilation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objet contenant des informations sur le statut de compilation"})]})]})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R8"}),(0,t.jsxs)(n.td,{children:["Prise en charge du ",(0,t.jsx)(n.code,{children:"type"}),' "formObjectExpression"']})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compile project"})," vous permet de compiler le projet h\xf4te courant ou le projet sp\xe9cifi\xe9 dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"projectFile"}),". Pour plus d'informations sur la compilation, consultez la ",(0,t.jsx)(n.a,{href:"/docs/fr/Project/compiler",children:"page Compilation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, la commande utilise les options du compilateur d\xe9finies dans les Param\xe8tres de structure. Vous pouvez les remplacer en passant un param\xe8tre ",(0,t.jsx)(n.em,{children:"options"}),". Les syntaxes suivantes sont prises en charge :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"() : compile le projet ouvert \xe0 l'aide des options d\xe9finies dans les param\xe8tres de structure"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(",(0,t.jsx)(n.em,{children:"options"}),") : compile le projet ouvert. Les ",(0,t.jsx)(n.em,{children:"options"})," d\xe9finies remplacent les param\xe8tres de structure"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(",(0,t.jsx)(n.em,{children:"projectFile"}),") : compile le projet 4D ",(0,t.jsx)(n.em,{children:"projectFile"})," en utilisant les options d\xe9finies dans les param\xe8tres de structure"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(",(0,t.jsx)(n.em,{children:"projectFile"}),"; ",(0,t.jsx)(n.em,{children:"options"}),") : compile le projet 4D ",(0,t.jsx)(n.em,{children:"projectFile"})," et les ",(0,t.jsx)(n.em,{children:"options"})," d\xe9finies remplacent les param\xe8tres de structure"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"**Note :**Les bases de donn\xe9es binaires ne peuvent pas \xeatre compil\xe9es avec cette commande."}),"\n",(0,t.jsxs)(n.p,{children:["Contrairement \xe0 la fen\xeatre du Compilateur, cette commande n\xe9cessite que vous d\xe9signiez explicitement le ou les composants \xe0 compiler. Lors de la compilation d'un projet avec ",(0,t.jsx)(n.strong,{children:"Compile project"}),", vous devez d\xe9clarer ses composants \xe0 l'aide de la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"components"})," du param\xe8tre ",(0,t.jsx)(n.em,{children:"options"}),". A noter que les composants doivent d\xe9j\xe0 \xeatre compil\xe9s (les composants binaires sont pris en charge)."]}),"\n",(0,t.jsxs)(n.p,{children:["Le code compil\xe9 r\xe9sultant sera stock\xe9 dans le dossier DerivedData ou Libraries du projet, en fonction de la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"targets"})," du param\xe8tre ",(0,t.jsx)(n.em,{children:"options"}),". Si vous souhaitez cr\xe9er des fichiers .4dz, vous devez toujours compresser manuellement le projet compil\xe9 ou utiliser la fonctionnalit\xe9 ",(0,t.jsx)(n.a,{href:"/docs/fr/Desktop/building",children:"build application"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez une collection vide dans ",(0,t.jsx)(n.em,{children:"targets"}),", ",(0,t.jsx)(n.strong,{children:"Compile project"})," ex\xe9cutera une v\xe9rification syntaxique sans compiler."]}),"\n",(0,t.jsxs)(n.p,{children:["Les erreurs de compilation, le cas \xe9ch\xe9ant, sont retourn\xe9es sous forme d'objets dans la collection ",(0,t.jsx)(n.em,{children:"errors"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Vous ne pouvez pas appeler cette commande quand une autre compilation est en cours d'ex\xe9cution (par exemple, une compilation lanc\xe9e depuis la fen\xeatre de compilation)."]}),"\n",(0,t.jsx)(n.h3,{id:"param\xe8tre-options",children:"Param\xe8tre options"}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"options"})," est un objet. Voici les options de compilation disponibles :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"components"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection d'objets 4D.File vers des composants d\xe9pendants (doit \xeatre d\xe9j\xe0 compil\xe9)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defaultTypeForButtons"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Valeur possible : Is real ou Is longint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defaultTypeForNumerics"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Valeur possible : Is real ou Is longint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"generateSymbols"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True pour g\xe9n\xe9rer des informations sur les symboles dans l'objet .symbols renvoy\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"generateSyntaxFile"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["Vrai pour g\xe9n\xe9rer un ",(0,t.jsx)(n.a,{href:"/docs/fr/settings/general#generate-syntax-file-for-code-completion-when-compiled",children:"fichier de syntaxe pour la compl\xe9tion de code"})," dans le dossier \\Resources\\en.lproj du projet"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"generateTypingMethods"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:'"reset" ou "append" pour g\xe9n\xe9rer des m\xe9thodes de typage. Si la valeur est "append", les d\xe9clarations de variables existantes ne seront pas modifi\xe9es (comportement de la fen\xeatre du compilateur). Si la valeur est "reset", les d\xe9clarations de variables existantes seront supprim\xe9es au pr\xe9alable.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"plugins"}),(0,t.jsx)(n.td,{children:"4D.Folder object"}),(0,t.jsxs)(n.td,{children:["Dossier de plug-ins \xe0 utiliser \xe0 la place du ",(0,t.jsx)(n.a,{href:"/docs/fr/Project/architecture#plugins",children:"Dossier de plug-ins du projet courant"}),". Cette propri\xe9t\xe9 n'est disponible qu'avec la syntaxe ",(0,t.jsx)(n.em,{children:"projectFile"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targets"}),(0,t.jsx)(n.td,{children:"Collection de cha\xeenes"}),(0,t.jsx)(n.td,{children:'Valeurs possibles : "x86_64_generic", "arm64_macOS_lib". Passez une collection vide pour ex\xe9cuter la v\xe9rification syntaxique uniquement'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeInference"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:['"all" : Le compilateur d\xe9duit les types de toutes les variables non explicitement d\xe9clar\xe9es, "locals" : Le compilateur d\xe9duit le type des variables locales non d\xe9clar\xe9es explicitement, "none" : Toutes les variables doivent \xeatre explicitement d\xe9clar\xe9es dans le code (mode legacy), "direct" : Toutes les variables doivent \xeatre explicitement d\xe9clar\xe9es dans le code (',(0,t.jsx)(n.a,{href:"/docs/fr/Project/compiler#enabling-direct-typing",children:"direct typing"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"warnings"}),(0,t.jsx)(n.td,{children:"Collection d'objets"}),(0,t.jsx)(n.td,{children:"D\xe9finit le statut des warnings"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].major"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Num\xe9ro principal du warning, avant le point"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].minor"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Num\xe9ro secondaire du warning, apr\xe8s le point"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].enabled"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Statut d'activation du warning"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Lorsque l'attribut ",(0,t.jsx)(n.em,{children:"warnings"})," n'est pas d\xe9fini dans l'objet ",(0,t.jsx)(n.em,{children:"options"}),", la commande ",(0,t.jsx)(n.strong,{children:"Compile project"})," utilise les statuts de g\xe9n\xe9ration de warnings par d\xe9faut d\xe9finis dans les param\xe8tres."]}),"\n",(0,t.jsx)(n.h3,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,t.jsxs)(n.p,{children:["L'objet renvoy\xe9 par ",(0,t.jsx)(n.strong,{children:"Compile project"})," poss\xe8de jusqu'\xe0 trois propri\xe9t\xe9s :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Vrai si la sauvegarde a \xe9t\xe9 effectu\xe9e avec succ\xe8s, sinon faux."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors"}),(0,t.jsx)(n.td,{children:"Collection d'objets"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Disponible uniquement en cas d'erreur ou de warning"}),". Collection d'objets d\xe9crivant les erreurs de compilation ou les warnings"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].isError"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Erreur si True, sinon warning"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Message d'erreur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#code-object",children:"objet code"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].line"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de ligne de l'erreur dans le code. Pour les m\xe9thodes de classe, le num\xe9ro de ligne dans la fonction"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].lineInFile"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:'Num\xe9ro de ligne dans le fichier (diff\xe9rent de "line" pour les m\xe9thodes de classe, et prend en compte la ligne de pr\xe9fixe %attributes)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Disponible uniquement si l'option generateSymbols est fix\xe9e \xe0 True :"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.interprocessVariables"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Liste de toutes les variables interprocessus"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.interprocessVariables.variables"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsxs)(n.td,{children:["Collection d'",(0,t.jsx)(n.a,{href:"#objets-variables",children:"objets variables"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.interprocessVariables.size"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.processVariables"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Liste de toutes les variables process"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.processVariables.variables"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsxs)(n.td,{children:["Collection d'",(0,t.jsx)(n.a,{href:"#objets-variables",children:"objets variables"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.processVariables.size"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.localVariables"}),(0,t.jsx)(n.td,{children:"Collection d'objets"}),(0,t.jsx)(n.td,{children:"Liste des variables locales par m\xe9thode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.localVariables[].code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#code-object",children:"objet code"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.localVariables[].variables"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsxs)(n.td,{children:["Collection d'",(0,t.jsx)(n.a,{href:"#objets-variables",children:"objets variables"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods"}),(0,t.jsx)(n.td,{children:"Collection d'objets"}),(0,t.jsx)(n.td,{children:"Liste des m\xe9thodes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[].code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#code-object",children:"objet code"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[].callCount"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Nombre de fois o\xf9 cette m\xe9thode a \xe9t\xe9 appel\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[].params"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection de types de param\xe8tres (codes num\xe9riques des types de valeurs)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[]. threadSafe"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["Indique si cette m\xe9thode est ",(0,t.jsx)(n.em,{children:"thread safe"})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, voir ",(0,t.jsx)(n.a,{href:"/docs/fr/Project/compiler#compilation-tools",children:"Outils de compilation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"objets-variables",children:"Objets variables"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"interprocessVariables.variables"})," et ",(0,t.jsx)(n.code,{children:"processVariables.variables"})," contiennent des objets ayant la structure suivante :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom de la variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Type de la variable (comme la commande Value type)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayDimension"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Pour les tableaux uniquement : 1 pour les tableaux mono-dimensionnels, 2 pour les tableaux bidimensionnels"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Pour les variables process et interprocess : description de l'endroit o\xf9 la variable a \xe9t\xe9 d\xe9finie"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"objet-code",children:"Objet code"}),"\n",(0,t.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,t.jsx)(n.code,{children:"code"})," dans ",(0,t.jsx)(n.code,{children:"methods.code"})," et ",(0,t.jsx)(n.code,{children:"errors.code"})," est un objet avec les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:['"projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (lors de l\'appel d\'une m\xe9thode projet avec l\'attribut ',(0,t.jsx)(n.em,{children:"Execute on Server"}),"), \"executeFormula\" (lors de l'ex\xe9cution d'une formule via ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/process-4d-tags",children:"PROCESS 4D TAGS"}),' ou de l\'\xe9valuation d\'une formule dans un document 4D Write Pro), "class", "classFunction", "formObjectExpression" (pour les erreurs survenant dans les expressions associ\xe9es \xe0 des objets formulaire)']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["Chemin d'acc\xe8s de la m\xe9thode (m\xeame format que ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/method-open-path",children:(0,t.jsx)(n.code,{children:"METHOD OPEN PATH"})}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file"}),(0,t.jsx)(n.td,{children:"4D.File"}),(0,t.jsx)(n.td,{children:"Fichier de m\xe9thode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.strong,{children:["Retourn\xe9 en fonction de la valeur de la propri\xe9t\xe9 ",(0,t.jsx)(n.code,{children:"type"}),":"]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"methodName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"M\xe9thode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de la table (retourn\xe9 pour un trigger, une m\xe9thode formulaire table ou une m\xe9thode objet de formulaire table)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom du formulaire (renvoy\xe9 pour une m\xe9thode de formulaire)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom de l'objet du formulaire (renvoy\xe9 pour une m\xe9thode objet)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propertyName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 de l'objet du formulaire (renvoy\xe9 pour une expression de l'objet du formulaire)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"className"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom de classe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"functionName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nom de la fonction de classe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databaseMethod"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Indice de m\xe9thode base"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,t.jsx)(n.p,{children:"Pour effectuer un contr\xf4le de syntaxe uniquement, passez une collection vide au param\xe8tre targets :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var $status : Object\n var $options:={}\n $options.targets:=New collection //Collection vide pour le contr\xf4le syntaxique\n $status:=Compile project($options)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Compilez le projet courant en utilisant uniquement les options de compilateur d\xe9finies dans les Param\xe8tres de Structure :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var $status : Object\n $status:=Compile project\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sur un Mac Silicon, compilez le projet courant uniquement pour ARM :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $options:={}\n $options.targets:=New collection("arm64_macOS_lib")\n $status:=Compile project($options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Compilez un projet autre que le projet courant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $projectFile: 4D.File\n $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")\n $status:=Compile project($projectFile)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Compilez un projet et d\xe9clarez son composant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $component : 4D.File\n var $options:={}\n $component:=Folder(fk documents folder).file("Components/myComponent.4dz")\n $options.components:=New collection($component)\n $status:=Compile project($options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"D\xe9sactivez les warnings 518.1 et 518.2 lors de la compilation de votre projet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.warnings:=[]\n$options.warnings.push({major: 518; minor: 1; enabled: False})\n$options.warnings.push({major: 518; minor: 2; enabled: False})\nvar $result:=Compile project($options)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/build-application",children:"BUILD APPLICATION"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1760"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);