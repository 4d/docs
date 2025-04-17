"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35792"],{239684:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/monitored-activity","title":"Monitored activity","description":"Monitored activity  : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/monitored-activity.md","sourceDirName":"commands-legacy","slug":"/commands/monitored-activity","permalink":"/docs/fr/20-R8/commands/monitored-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmonitored-activity.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"monitored-activity","title":"Monitored activity","slug":"/commands/monitored-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOBILE APP REFRESH SESSIONS","permalink":"/docs/fr/20-R8/commands/mobile-app-refresh-sessions"},"next":{"title":"OPEN URL","permalink":"/docs/fr/20-R8/commands/open-url"}}'),r=t("785893"),i=t("250065");let d={id:"monitored-activity",title:"Monitored activity",slug:"/commands/monitored-activity",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"activityKind = langage de l&#39;activit\xe9 (1)",id:"activitykind--langage-de-lactivit\xe9-1",level:3},{value:"Propri\xe9t\xe9s suppl\xe9mentaires",id:"propri\xe9t\xe9s-suppl\xe9mentaires",level:2},{value:"activityKind = activit\xe9 r\xe9seau (2)",id:"activitykind--activit\xe9-r\xe9seau-2",level:3},{value:"activityKind = op\xe9rations de l&#39;activit\xe9 (4)",id:"activitykind--op\xe9rations-de-lactivit\xe9-4",level:3},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Monitored activity"}),"  : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Param\xe8tre"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"R\xe9sultat"}),(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Collection d'activit\xe9s suivies"})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["La commande ",(0,r.jsx)(e.strong,{children:"Monitored activity"})," retourne une collection d'objets d\xe9crivant les op\xe9rations enregistr\xe9es selon les sp\xe9cifications d\xe9finies par la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"}),". Elle peut \xeatre appel\xe9e et ex\xe9cut\xe9e sur un 4D distant, 4D Server ou des applications 4D autonomes (si ",(0,r.jsx)(e.em,{children:"source"})," n'est pas issu de l'activit\xe9 r\xe9seau)."]}),"\n",(0,r.jsx)(e.p,{children:"Les objets de la collection retourn\xe9e poss\xe8dent les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Propri\xe9t\xe9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"activityKind"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsxs)(e.td,{children:["Le type d'activit\xe9 enregistr\xe9e :",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.br,{}),"                        ",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Constante"}),(0,r.jsx)(e.td,{children:"Valeur"}),(0,r.jsx)(e.td,{children:"Comment"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity language"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Op\xe9rations d'ex\xe9cution du langage"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity network"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Op\xe9rations de requ\xeates r\xe9seau."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity operations"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"Op\xe9ration de donn\xe9es 4D."})]})]})]})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"activityDuration"}),(0,r.jsx)(e.td,{children:"Re\xe9e"}),(0,r.jsx)(e.td,{children:"Dur\xe9e de l'activit\xe9 exprim\xe9e en secondes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"activityData"}),(0,r.jsx)(e.td,{children:"Objet"}),(0,r.jsxs)(e.td,{children:["Objet(s) contenant des propri\xe9t\xe9s sp\xe9cifiques selon le type d'activit\xe9 enregistr\xe9e (",(0,r.jsx)(e.em,{children:"activityKind"}),"). Dans certains cas, plusieurs objets peuvent \xeatre retourn\xe9s pour la m\xeame op\xe9ration. Dans ce cas, les objets auront le m\xeame UUID. Les propri\xe9t\xe9s suppl\xe9mentaires de ces objets sont d\xe9crites dans les sections ci-dessous."]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"activitykind--langage-de-lactivit\xe9-1",children:"activityKind = langage de l'activit\xe9 (1)"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note :"})," L'objet ",(0,r.jsx)(e.em,{children:"activityData"})," utilise les informations d\xe9finies par la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," pour ",(0,r.jsx)(e.em,{children:"4DDebugLog.txt (standard)"})," (le cas \xe9ch\xe9ant), sinon, elle utilise un mode par d\xe9faut. Le lancement de l'enregistrement des requ\xeates durant l'ex\xe9cution de la commande ",(0,r.jsx)(e.strong,{children:"Monitored activity"})," aura une incidence sur les r\xe9sultats retourn\xe9s."]}),"\n",(0,r.jsxs)(e.p,{children:["Objet ",(0,r.jsx)(e.em,{children:"activityData"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Propri\xe9t\xe9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sequenceNumber"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Num\xe9ro d'op\xe9ration unique et s\xe9quentiel dans la session d'historique."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"elapsedTime"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Temps \xe9coul\xe9 depuis le lancement du journal de d\xe9bogage (exprim\xe9 en millisecondes)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"processID"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"ID du process"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"uniqueProcessID"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"ID unique du process"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"stackLevel"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Niveau de stack"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"duration"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Dur\xe9e de l'op\xe9ation (exprim\xe9e en microsecondes)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"kind"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsxs)(e.td,{children:["Le type d'op\xe9ration enregistr\xe9. Valeurs possibles :",(0,r.jsx)(e.br,{}),' "command" "method" "Message" "pluginMessage" "pluginCommand" "pluginCallback" "pluginEvent" "task" "member"']})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"propri\xe9t\xe9s-suppl\xe9mentaires",children:"Propri\xe9t\xe9s suppl\xe9mentaires"}),"\n",(0,r.jsxs)(e.p,{children:["Les propri\xe9t\xe9s suppl\xe9mentaires suivantes sont retourn\xe9es dans l'objet ",(0,r.jsx)(e.em,{children:"activityData"})," selon le type d'op\xe9ration :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Propri\xe9t\xe9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"commandName"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"commande"}),(0,r.jsx)(e.td,{children:"Nom de commande"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"commandNumber"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"commande"}),(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"connectionUUID"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"task"}),(0,r.jsx)(e.td,{children:"UUID de la machine cliente"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"formEvent"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"commande"}),(0,r.jsx)(e.td,{children:"Nom de l'\xe9v\xe9nement formulaire"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"formMethod"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"command"}),(0,r.jsx)(e.td,{children:"M\xe9thode formulaire"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"functionName"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"member"}),(0,r.jsx)(e.td,{children:"Nom de la m\xe9thode membre ORDA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"memberMethod"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"command"}),(0,r.jsx)(e.td,{children:"Cha\xeene localis\xe9e de la m\xe9thode membre pour appeler l'objet 4D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"method"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"command"}),(0,r.jsx)(e.td,{children:"Noms localis\xe9s des commandes et fonctions 4D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"parameters"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsxs)(e.td,{children:["command",(0,r.jsx)(e.br,{}),"member",(0,r.jsx)(e.br,{}),"message",(0,r.jsx)(e.br,{}),"method",(0,r.jsx)(e.br,{}),"pluginCommand",(0,r.jsx)(e.br,{}),"pluginEvent",(0,r.jsx)(e.br,{}),"task"]}),(0,r.jsx)(e.td,{children:"Param\xe8tres pass\xe9s dans l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"pluginCommandName"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsxs)(e.td,{children:["pluginCommand",(0,r.jsx)(e.br,{}),"pluginEvent"]}),(0,r.jsx)(e.td,{children:"Nom de la commande du plug-in"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"pluginCommandNumber"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsxs)(e.td,{children:["pluginCommand",(0,r.jsx)(e.br,{}),"pluginEvent",(0,r.jsx)(e.br,{}),"pluginMessage"]}),(0,r.jsx)(e.td,{children:"Nim\xe9ro de la commande du plug-in"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"pluginExternalCall"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"pluginCallback"}),(0,r.jsx)(e.td,{children:"Appel du point d'entr\xe9e du plug-in SDK"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"pluginMessageName"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"pluginMessage"}),(0,r.jsx)(e.td,{children:"Valeurs possibles : PackMsgServerDeInit PackMsgServerDisposeData PackMsgServerWriteData PackMsgServerReadData PackMsgServerKillClient PackMsgServerNewClient PackMsgServerInit PackMsgProcessDeInit PackMsgProcessInit PackMsgClientDeInit PackMsgClientInit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"pluginName"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsxs)(e.td,{children:["pluginCallback",(0,r.jsx)(e.br,{}),"pluginCommand",(0,r.jsx)(e.br,{}),"pluginEvent",(0,r.jsx)(e.br,{}),"pluginMessage"]}),(0,r.jsx)(e.td,{children:"Nom du plug-in"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"activitykind--activit\xe9-r\xe9seau-2",children:"activityKind = activit\xe9 r\xe9seau (2)"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Si le journal de d\xe9bogage a \xe9t\xe9 stopp\xe9 sur la ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/ServerWindow/overview",children:"Administration window"})," de 4D Server, la commande ",(0,r.jsx)(e.strong,{children:"Monitored activity"})," ne retourne rien. Si le journal est relanc\xe9 sur le serveur ou \xe0 l'aide de la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"})," avec Activity network, ",(0,r.jsx)(e.strong,{children:"Monitored activity"})," reprendra la g\xe9n\xe9ration des informations de l'activit\xe9 r\xe9seau."]}),"\n",(0,r.jsxs)(e.li,{children:["L'objet ",(0,r.jsx)(e.em,{children:"activityData"})," utilise les informations d\xe9finies par la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," pour ",(0,r.jsx)(e.em,{children:"4DRequestsLog.txt"})," (le cas \xe9ch\xe9ant), sinon, elle utilise un mode par d\xe9faut. Le lancement de l'enregistrement des requ\xeates durant l'ex\xe9cution de la commande ",(0,r.jsx)(e.strong,{children:"Monitored activity"})," aura une incidence sur les r\xe9sultats retourn\xe9s."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["L'objet ",(0,r.jsx)(e.em,{children:"activityData"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Propri\xe9t\xe9"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sequenceNumber"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Num\xe9ro d'op\xe9ration unique et s\xe9quentiel dans la session d'historique."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"time"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:'Date et heure au format ISO 8601 : ("YYYY-MM-DDTHH:MM:SS.sss")'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"systemID"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"ID du syst\xe8me"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"component"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"Signature du composant (par exemple '4SQLS' ou 'dbmg')"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"processInfoIndex"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsxs)(e.td,{children:['Correspond au champ "index" dans le fichier d\'historique ',(0,r.jsx)(e.em,{children:"4DRequestsLog_ProcessInfo.txt"}),", et permet de relier une requ\xeate \xe0 un process"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"request"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsxs)(e.td,{children:["ID de requ\xeate pour les messages c/s, les requ\xeates SQL, ou les messages ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/log-event",children:"LOG EVENT"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"bytesIn"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Nombre d'octets re\xe7us"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"bytesOut"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Nombre d'octets envoy\xe9s"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"execDuration"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsxs)(e.td,{children:["En fonction de l'emplacement de leur g\xe9n\xe9ration :server_duration . ",(0,r.jsx)(e.br,{}),"OU,exec_duration lorsqu'il est g\xe9n\xe9r\xe9 sur le serveur  --Temps en microsecondes pris par le serveur pour traiter la requ\xeate.  ."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"writeDuration"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Temps en microsecondes pris pour envoyer :La requ\xeate (lorsqu'elle est ex\xe9cut\xe9e sur le client).La r\xe9ponse (lorsqu'elle est ex\xe9cut\xe9e sur le serveur)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"serverDuration"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsx)(e.td,{children:"Dur\xe9e de la communication client/serveur"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"taskKind"}),(0,r.jsx)(e.td,{children:"texte"}),(0,r.jsx)(e.td,{children:"Pr\xe9emprtif ou coop\xe9ratif (respectivement 'p' ou 'c')"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rtt"}),(0,r.jsx)(e.td,{children:"entier long"}),(0,r.jsxs)(e.td,{children:["Temps en microsecondes pris par le client pour envoyer la requ\xeate et pour qu'elle soit re\xe7ue par le serveur. Mesur\xe9 uniquement lorsque la couche r\xe9seau ServerNet est utilis\xe9e, retourne 0 lorsque l'ancienne couche r\xe9seau est utilis\xe9e.Dans les versions ant\xe9rieures \xe0 Windows 10 ou Windows Server 2016, l'appel retournera la valeur 0.",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.br,{}),(0,r.jsx)(e.br,{})]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"activitykind--op\xe9rations-de-lactivit\xe9-4",children:"activityKind = op\xe9rations de l'activit\xe9 (4)"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note :"})," L'objet ",(0,r.jsx)(e.em,{children:"activityData"})," et l'objet retourn\xe9 par la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/activity-snapshot",children:"ACTIVITY SNAPSHOT"})," sont similaires, except\xe9 que ",(0,r.jsx)(e.em,{children:"activityData"})," est soumis \xe0 un seuil et que les op\xe9rations termin\xe9es sont retourn\xe9es :"]}),"\n",(0,r.jsxs)(e.p,{children:["L'objet ",(0,r.jsx)(e.em,{children:"activityData"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Propri\xe9t\xe9"})}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"message"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Description de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"maxValue"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"Nombre maximal d'it\xe9rations de l'op\xe9ration (valeur=-1 pour les op\xe9rations non it\xe9ratives)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"remote-"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"Op\xe9ration client / serveur. Valeurs possibles : true, false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"uuid"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"UUID de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"taskId"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"Identifiant 4D interne du process d'origine"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"startTime"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:'Heure de d\xe9but de l\'op\xe9ration au format ISO 8601 ("YYYY-MM-DDTHH:MM:SS.sss")'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"duration"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"Dur\xe9e totale (exprim\xe9e en millisecondes) de l'ex\xe9cution de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"title"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Informations suppl\xe9mentaires de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"extraInfo"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsxs)(e.td,{children:["Informations SQL suppl\xe9mentaires (le cas \xe9ch\xe9ant) :",(0,r.jsx)(e.br,{}),(0,r.jsx)(e.br,{})," extraInfo.SQL_Query (text): La requ\xeate SQL extraInfo.SQL_User (text): Utilisateur authentifi\xe9 sur le serveur SQL"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dbContextInfo"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"Informations contextuelles de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"host_name"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Nom de l'h\xf4te ayant lanc\xe9 l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"user_name"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Nom de l'utilisateur 4D dont la session a lanc\xe9 l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"task_name"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Nom du process ayant lanc\xe9 l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"task_id"}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"ID du process ayant lanc\xe9 l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"client_uid"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"(op\xe9ration en c/s uniquement) UUID de la machine cliente ayant lanc\xe9 l'op\xe9ration dans la base de donn\xe9es"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"is_remote_context"}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"(op\xe9ration en c/s uniquement) Indique si l'op\xe9ration a \xe9t\xe9 lanc\xe9e par le serveur via une proc\xe9dure stock\xe9e (valeur=0) ou par un client (valeur=1)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"user4d_id"}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"ID de l'utilisateur 4D sur la machine cliente"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"user4d_alias"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsxs)(e.td,{children:["Alias d\xe9fini pour l'utilisateur 4D. Voir ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/set-user-alias",children:"SET USER ALIAS"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"client_version"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsxs)(e.td,{children:["Valeur de cha\xeene encod\xe9e qui exprime le num\xe9ro de version de l'environnement 4D retourn\xe9 par la commande ",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/application-version",children:"Application version"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dbOperationDetails"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"Informations sur les appels d'op\xe9rations vers le moteur de base de donn\xe9es"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"table"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Nom de la table dans l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"field"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Nom du champ de la table dans l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"queryPlan"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Plan de requ\xeate pour l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"operationType"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Type d'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"sortParameters"}),(0,r.jsx)(e.td,{children:"collection"}),(0,r.jsx)(e.td,{children:"Crit\xe8re de tri"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"subOperations"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"collection"}),(0,r.jsx)(e.td,{children:"collection d'objets activytData contenant des informations sur les op\xe9rations subordonn\xe9es dans l'op\xe9ration courante."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].message"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Libell\xe9 des op\xe9rations"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].maxValue"}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"Nombre maximal d'it\xe9rations pour l'op\xe9ration (valeur=-1 pour les op\xe9rations non it\xe9ratives)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].remote"}),(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"Op\xe9rations client / serveur (0=true, 1=false)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].uuid"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"UUID de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].taskId"}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"Identifiant 4D interne du process d'origine"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].startTime"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:'Heure de d\xe9but de l\'op\xe9ration au format ISO 8601 ("YYYY-MM-DDTHH:MM:SS.sss")'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].duration"}),(0,r.jsx)(e.td,{children:"longint"}),(0,r.jsx)(e.td,{children:"Dur\xe9e totale (exprim\xe9e en millisecondes) de l'ex\xe9cution de l'op\xe9ration"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].title"}),(0,r.jsx)(e.td,{children:"text"}),(0,r.jsx)(e.td,{children:"Informations suppl\xe9mentaires sur l'op\xe9raiton"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[ ].extraInfo"}),(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"Informations SQL suppl\xe9mentaires (le cas \xe9ch\xe9ant) : [ ].extraInfo.SQL_Query (text): La requ\xeate SQL [ ].extraInfo.SQL_User (text): Utilisateur authentifi\xe9 sur le serveur SQL"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(e.p,{children:["Voir l'exemple de ",(0,r.jsxs)(e.strong,{children:[(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"}),"."]})]}),"\n",(0,r.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/fr/20-R8/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,r.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(e.td,{children:"1713"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);