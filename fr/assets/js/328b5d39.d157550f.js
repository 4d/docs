/*! For license information please see 328b5d39.d157550f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12085],{349361:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=s(474848),r=s(28453);const t={id:"SignalClass",title:"Signal"},l=void 0,d={id:"API/SignalClass",title:"Signal",description:"Les signaux sont des outils fournis par le langage 4D pour g\xe9rer les interactions et \xe9viter les conflits entre les process dans une application multiprocessus. Les signaux vous permettent de vous assurer qu'un ou plusieurs process attendront la fin d'une t\xe2che sp\xe9cifique avant de poursuivre leur ex\xe9cution. Tout process peut attendre et/ou lib\xe9rer un signal.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/fr/19/API/SignalClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/fr/19/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/fr/19/API/SMTPTransporterClass"}},a={},c=[{value:"Objet signal",id:"objet-signal",level:3},{value:"Travailler avec des signaux",id:"travailler-avec-des-signaux",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Sommaire",id:"sommaire",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple-1",level:4},{value:".description",id:"description-1",level:2},{value:"Description",id:"description-2",level:4},{value:".signaled",id:"signaled",level:2},{value:"Description",id:"description-3",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Description",id:"description-4",level:4},{value:".wait()",id:"wait",level:2},{value:"Description",id:"description-5",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Les signaux sont des outils fournis par le langage 4D pour g\xe9rer les interactions et \xe9viter les conflits entre les process dans une application multiprocessus. Les signaux vous permettent de vous assurer qu'un ou plusieurs process attendront la fin d'une t\xe2che sp\xe9cifique avant de poursuivre leur ex\xe9cution. Tout process peut attendre et/ou lib\xe9rer un signal."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Les s\xe9maphores peuvent \xe9galement \xeatre utilis\xe9s pour g\xe9rer les interactions. Les s\xe9maphores permettent de s'assurer que deux ou plusieurs process ne modifient pas la m\xeame ressource (fichier, enregistrement...) au m\xeame moment. Seul le process qui a pos\xe9 le s\xe9maphore peut le retirer."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"objet-signal",children:"Objet signal"}),"\n",(0,i.jsx)(n.p,{children:"Un signal est un objet partag\xe9 qui doit \xeatre pass\xe9 comme param\xe8tre aux commandes qui appellent ou cr\xe9ent des workers ou des process."}),"\n",(0,i.jsxs)(n.p,{children:["Un objet ",(0,i.jsx)(n.code,{children:"4D.Signal"})," contient les m\xe9thodes et propri\xe9t\xe9s int\xe9gr\xe9es suivantes :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#wait",children:(0,i.jsx)(n.code,{children:".wait()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#trigger",children:(0,i.jsx)(n.code,{children:".trigger()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signaled",children:(0,i.jsx)(n.code,{children:".signaled"})})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#description",children:(0,i.jsx)(n.code,{children:".description"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Tout worker/process appelant la m\xe9thode ",(0,i.jsx)(n.code,{children:".wait()"})," suspend son ex\xe9cution jusqu'\xe0 ce que la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"})," soit mise \xe0 true. Lorsque vous \xeates en attente d'un signal, le process appelant n'utilise pas de CPU. Cela peut \xeatre tr\xe8s int\xe9ressant pour les performances des applications multiprocess. La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"})," devient est mise \xe0 True lorsqu'un worker/processus appelle la m\xe9thode ",(0,i.jsx)(n.code,{children:".trigger()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A noter que pour \xe9viter les situations de blocage, la m\xe9thode ",(0,i.jsx)(n.code,{children:".wait()"})," peut \xe9galement revenir apr\xe8s qu'un d\xe9lai d'attente d\xe9fini ait \xe9t\xe9 atteint."]}),"\n",(0,i.jsxs)(n.p,{children:["Les objets signal sont cr\xe9\xe9s \xe0 l'aide de la commande ",(0,i.jsx)(n.a,{href:"#new-signal",children:"New signal"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"travailler-avec-des-signaux",children:"Travailler avec des signaux"}),"\n",(0,i.jsxs)(n.p,{children:["Dans 4D, vous cr\xe9ez un nouvel objet signal en appelant la commande ",(0,i.jsx)(n.a,{href:"#new-signal",children:(0,i.jsx)(n.code,{children:"New signal"})}),". Une fois cr\xe9\xe9, ce signal doit \xeatre pass\xe9 en param\xe8tre aux commandes ",(0,i.jsx)(n.code,{children:"New process"})," ou ",(0,i.jsx)(n.code,{children:"CALL WORKER"})," afin qu'elles puissent le modifier lorsqu'elles ont termin\xe9 la t\xe2che que vous souhaitez attendre."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"signal.wait()"})," doit \xeatre appel\xe9 par le worker/process qui a besoin qu'un autre worker/process termine une t\xe2che pour pouvoir continuer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"signal.trigger()"})," doit \xeatre appel\xe9 par le worker/process qui a termin\xe9 son ex\xe9cution afin de lib\xe9rer tous les autres."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(626616).A+"",width:"813",height:"324"})}),"\n",(0,i.jsxs)(n.p,{children:["Une fois qu'un signal a \xe9t\xe9 lib\xe9r\xe9 par un appel \xe0 ",(0,i.jsx)(n.code,{children:"signal.trigger()"}),", il ne peut plus \xeatre r\xe9utilis\xe9. Si vous souhaitez d\xe9finir un autre signal, vous devez \xe0 nouveau appeler la commande ",(0,i.jsx)(n.code,{children:"New signal"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Etant donn\xe9 qu'un objet signal est un ",(0,i.jsx)(n.a,{href:"/docs/fr/19/Concepts/shared",children:"objet partag\xe9"}),", vous pouvez l'utiliser pour retourner les r\xe9sultats des workers/process appel\xe9s, \xe0 condition de ne pas oublier d'\xe9crire les valeurs dans une structure ",(0,i.jsx)(n.code,{children:"Use...End use"})," (voir exemple)."]}),"\n",(0,i.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n\n  // Cr\xe9ation d\'un signal\n $signal:=New signal\n\n  // appel du process principal et ex\xe9cution de la m\xe9thode OpenForm\n CALL WORKER(1;"OpenForm";$signal)\n  // autre calcul\n ...\n  // Attente de la fin du process\n $signaled:=$signal.wait()\n\n  // Traitement des r\xe9sultats\n $calc:=$signal.result+...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["M\xe9thode ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"OpenForm"})})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Ouvrir le form\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // Ajout d\'un nouvel attribut \xe0 votre objet partag\xe9 $signal pour passer votre r\xe9sultat \xe0 l\'autre process :\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // Envoyer le signal au process en attente\n $signal.trigger()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#description",children:[(0,i.jsx)(n.strong,{children:".description"})," : Text"]}),"\xa0\xa0\xa0\xa0contient une description personnalis\xe9e de l'objet ",(0,i.jsx)(n.code,{children:"Signal"}),"."]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#signaled",children:[(0,i.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\xa0\xa0\xa0\xa0contient l'\xe9tat courant de l'objet ",(0,i.jsx)(n.code,{children:"Signal"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"#trigger",children:(0,i.jsx)(n.strong,{children:".trigger( )"})}),"\xa0\xa0\xa0\xa0met la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:"signaled"})," de l'objet signal \xe0 ",(0,i.jsx)(n.strong,{children:"true"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#wait",children:[(0,i.jsx)(n.strong,{children:".wait"}),"( { ",(0,i.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean "]}),"\xa0\xa0\xa0\xa0place le process courant en attente jusqu'\xe0 ce que la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"})," de l'objet signal devienne ",(0,i.jsx)(n.strong,{children:"true"})," ou que le ",(0,i.jsx)(n.em,{children:"timeout"})," optionnel expire"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"new-signal",children:"New signal"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"New signal"})," { ( ",(0,i.jsx)(n.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Description du signal"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"4D.Signal"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Object encapsulant le signal"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"New"})," cr\xe9e un objet ",(0,i.jsx)(n.code,{children:"4D.Signal"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Un signal est un objet partag\xe9 qui peut \xeatre pass\xe9 en param\xe8tre depuis un worker ou un process \xe0 un autre worker ou process, de mani\xe8re \xe0 ce que :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"le worker/process appel\xe9 puisse mettre \xe0 jour l'objet signal apr\xe8s qu'un traitement sp\xe9cifique soit termin\xe9"}),"\n",(0,i.jsx)(n.li,{children:"le worker/process appelant puisse stopper son ex\xe9cution et attende jusqu'\xe0 ce que le signal soit mis \xe0 jour, sans consommer aucune ressource CPU."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Optionnellement, dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"description"}),", vous pouvez passer un texte personnalis\xe9 d\xe9crivant le signal. Ce texte peut \xe9galement \xeatre d\xe9fini apr\xe8s la cr\xe9ation du signal."]}),"\n",(0,i.jsxs)(n.p,{children:["Comme l'objet signal est un objet partag\xe9, il peut aussi \xeatre utilis\xe9 pour maintenir des propri\xe9t\xe9s utilisateur, y compris la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"#description",children:(0,i.jsx)(n.code,{children:".description"})}),", via l'appel de la structure ",(0,i.jsx)(n.code,{children:"Use...End use"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,i.jsxs)(n.p,{children:["Un nouvel objet ",(0,i.jsx)(n.a,{href:"#signal-object",children:(0,i.jsx)(n.code,{children:"4D.Signal"})}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Voici un exemple type de worker qui d\xe9finit un signal :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //patienter 1 seconde au maximum\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker has not finished in less than 1s")\n End if\n'})}),"\n",(0,i.jsxs)(n.p,{children:["La m\xe9thode ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"doSomething"})})," est par exemple :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //retourner le r\xe9sulat\n $signal.trigger() // L'op\xe9ration est termin\xe9e\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description-1",children:".description"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".description"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".description"})," contient une description personnalis\xe9e de l'objet ",(0,i.jsx)(n.code,{children:"Signal"}),".."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".description"})," peut \xeatre d\xe9finie \xe0 la cr\xe9ation de l'objet signal ou \xe0 tout moment. Notez que comme l'objet ",(0,i.jsx)(n.code,{children:"Signal"})," est un objet partag\xe9, tout acc\xe8s en mode \xe9criture \xe0 la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".description"})," doit \xeatre encadr\xe9 par les mots-cl\xe9s ",(0,i.jsx)(n.code,{children:"Use...End use"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est en ",(0,i.jsx)(n.strong,{children:"lecture-\xe9criture"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"signaled",children:".signaled"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"})," contient l'\xe9tat courant de l'objet ",(0,i.jsx)(n.code,{children:"Signal"}),". Lorsque le signal est cr\xe9\xe9, ",(0,i.jsx)(n.code,{children:".signaled"})," est ",(0,i.jsx)(n.strong,{children:"False"}),". Elle devient ",(0,i.jsx)(n.strong,{children:"True"})," lorsque la fonction ",(0,i.jsx)(n.code,{children:".trigger( )"})," est appel\xe9e sur l'objet."]}),"\n",(0,i.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 est en ",(0,i.jsx)(n.strong,{children:"lecture seule"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"trigger",children:".trigger()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:".trigger( )"})}),"\n",(0,i.jsx)(n.p,{children:"| Param\xe8tres | Type |  | Description                                            |\n| ---------- | ---- |::| ------------------------------------------------------ |\n|            |      |  | Ne requiert aucun param\xe8tre|"}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:".trigger()"})," met la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:"signaled"})," de l'objet signal \xe0 ",(0,i.jsx)(n.strong,{children:"true"})," et r\xe9veille tous les workers ou process qui attendent ce signal."]}),"\n",(0,i.jsxs)(n.p,{children:["Si le signal est d\xe9j\xe0 dans l'\xe9tat signaled (i.e., la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:"signaled"})," est d\xe9j\xe0 ",(0,i.jsx)(n.strong,{children:"true"}),"), la fonction ne fait rien."]}),"\n",(0,i.jsx)(n.h2,{id:"wait",children:".wait()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".wait"}),"( { ",(0,i.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timeout"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"D\xe9lai d'attente maximum du signal en secondes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsxs)(n.td,{children:["Etat de la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"})]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:".wait()"})," place le process courant en attente jusqu'\xe0 ce que la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"})," de l'objet signal devienne ",(0,i.jsx)(n.strong,{children:"true"})," ou que le ",(0,i.jsx)(n.em,{children:"timeout"})," optionnel expire."]}),"\n",(0,i.jsxs)(n.p,{children:["Pour pr\xe9venir tout code bloquant, vous pouvez passez un temps d'attente maximum en secondes dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"timeout"})," (les d\xe9cimales sont accept\xe9es)."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attention"})," : L'appel de ",(0,i.jsx)(n.code,{children:".wait( )"})," sans ",(0,i.jsx)(n.em,{children:"timeout"})," dans le process principal de 4D n'est pas recommand\xe9 car il pourrait geler l'ensemble de l'application 4D."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction retourne la valeur de la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".signaled"}),". Evaluer cette valeur permet de savoir si la fonction a retourn\xe9 \xe0 cause de l'appel de ",(0,i.jsx)(n.code,{children:".trigger( )"})," (",(0,i.jsx)(n.code,{children:".signaled"})," est ",(0,i.jsx)(n.strong,{children:"true"}),") ou si le ",(0,i.jsx)(n.em,{children:"timeout"})," a expir\xe9 (",(0,i.jsx)(n.code,{children:".signaled"})," est ",(0,i.jsx)(n.strong,{children:"false"}),")."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["L'\xe9tat d'un process qui attend un signal est ",(0,i.jsx)(n.code,{children:"En attente d'un marqueur interne"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var i=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var i,t={},c=null,o=null;for(i in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)l.call(n,i)&&!a.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:o,props:t,_owner:d.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},626616:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(296540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);