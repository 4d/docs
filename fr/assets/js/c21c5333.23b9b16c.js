"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["434"],{678903:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"commands/process-activity","title":"Process activity","description":"Process activity () ObjectProcess activity ( sessionID ) Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/process-activity.md","sourceDirName":"commands","slug":"/commands/process-activity","permalink":"/docs/fr/20-R7/commands/process-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-activity","title":"Process activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process aborted","permalink":"/docs/fr/20-R7/commands/process-aborted"},"next":{"title":"Process info","permalink":"/docs/fr/20-R7/commands/process-info"}}'),i=n("785893"),t=n("250065");let o={id:"process-activity",title:"Process activity",displayed_sidebar:"docs"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Process activity"})," () : Object",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:"Process activity"})," ( ",(0,i.jsx)(s.em,{children:"options"})," ) : Object",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:"Process activity"})," ( ",(0,i.jsx)(s.em,{children:"sessionID"})," ) : Object",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:"Process activity"})," ( ",(0,i.jsx)(s.em,{children:"sessionID"})," ; ",(0,i.jsx)(s.em,{children:"options"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tres"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"sessionID"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"ID de session"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"options"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Options de retour"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Aper\xe7u des process en cours d'ex\xe9cution et/ou (4D Server uniquement) des sessions utilisateur"})]})]})]}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"20 R7"}),(0,i.jsx)(s.td,{children:"Support of sessionID parameter"})]})})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.La commande ",(0,i.jsx)(s.strong,{children:"Process activity"})," retourne une vue instantan\xe9e des pocess en cours d'ex\xe9cution et/ou (4D Server uniquement) de sessions utilisateur connect\xe9es \xe0 un moment donn\xe9. Cette commande retourne tous les process, y compris les process internes qui ne sont pas accessibles par la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/commands/process-info",children:"Process info"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Par d\xe9faut, lorsqu'elle est utilis\xe9e sans aucun param\xe8tre, ",(0,i.jsx)(s.strong,{children:"Process activity"})," renvoie un objet contenant les propri\xe9t\xe9s suivantes :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'"processes", une collection de tous les process'}),"\n",(0,i.jsx)(s.li,{children:'"sessions" (4D Server uniquement), une collection de toutes les sessions'}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Sur 4D Server, vous pouvez filtrer les informations \xe0 retourner en utilisant les param\xe8tres facultatifs ",(0,i.jsx)(s.em,{children:"sessionID"})," et ",(0,i.jsx)(s.em,{children:"options"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Si vous passez un identifiant de session utilisateur dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"sessionID"}),", la commande retourne uniquement les informations relatives \xe0 cette session. Par d\xe9faut, si le param\xe8tre ",(0,i.jsx)(s.em,{children:"options"})," est omis, l'objet retourn\xe9 contient une collection avec tous les process li\xe9s \xe0 la session et une collection avec un seul objet d\xe9crivant la session. Si vous passez un identifiant de session invalide, un objet ",(0,i.jsx)(s.strong,{children:"null"})," est retourn\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:["Vous pouvez s\xe9lectionner la ou les collection(s) \xe0 renvoyer en passant l'une des constantes suivantes dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"options"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Constante"}),(0,i.jsx)(s.th,{children:"Valeur"}),(0,i.jsx)(s.th,{children:"Commentaire"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Processes and sessions"}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:'Renvoie les listes "process" et "sessions" (valeur par d\xe9faut)'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Processes only"}),(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:'Retourne uniquement la liste "process"'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Sessions only"}),(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:'Retourne uniquement la liste "sessions"'})]})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Lorsqu'elle est ex\xe9cut\xe9e sur 4D en mode local ou distant, ",(0,i.jsx)(s.code,{children:"Process activity"})," renvoie toujours la liste des process en cours d'ex\xe9cution (les param\xe8tres ",(0,i.jsx)(s.em,{children:"sessionID"})," et ",(0,i.jsx)(s.em,{children:"options"})," sont ignor\xe9s)."]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Sessions"})}),"\n",(0,i.jsxs)(s.p,{children:["La propri\xe9t\xe9 \"sessions\" contient une collection d'objets d\xe9crivant toutes les sessions en cours d'ex\xe9cution sur le serveur. Pour une description des propri\xe9t\xe9s de l'objet session, veuillez vous r\xe9f\xe9rer \xe0 la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/commands/session-info",children:(0,i.jsx)(s.code,{children:"Session info"})}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Vous pouvez obtenir l'objet d'une session en utilisant la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/commands/session",children:"Session"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Process activity"})," renvoie les sessions des clients distants, les sessions des proc\xe9dures stock\xe9es et les sessions REST, mais pas les sessions Web (limitation)."]}),"\n"]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Processes"})}),"\n",(0,i.jsxs)(s.p,{children:['La propri\xe9t\xe9 "processes" contient une collection d\'objets process d\xe9crivant tous les process en cours. Pour une description des propri\xe9t\xe9s des objets process, veuillez vous r\xe9f\xe9rer \xe0 la commande ',(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/commands/process-info",children:(0,i.jsx)(s.code,{children:"Process info"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Sur le serveur, la commande ",(0,i.jsx)(s.code,{children:"Process activity"}),' renvoie une propri\xe9t\xe9 "session" suppl\xe9mentaire :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Propri\xe9t\xe9 suppl\xe9mentaire"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"session"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsxs)(s.td,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/API/SessionClass#info",children:(0,i.jsx)(s.code,{children:".info"})})," de la session dans laquelle le process est en cours d'ex\xe9cution. ",(0,i.jsx)(s.em,{children:"Undefined"})," si le param\xe8tre ",(0,i.jsx)(s.code,{children:"Processes only"})," est pass\xe9."]}),(0,i.jsx)(s.td,{})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(s.p,{children:"Vous souhaitez obtenir la collection de toutes les sessions utilisateurs :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//To be executed on the server\n\xa0\n\xa0var $o : Object\n\xa0var $i : Integer\n vat $processName;$userName : Text\n\n\xa0\n $o:=Process activity //Get process & session info\n For($i;0;($o.processes.length)-1) //Iterate over the "processes" collection\n    $processName:=$o.processes[$i].name\n    $userName:=String($o.processes[$i].session.userName) // Easy access to userName\n  //use String because session object might be undefined\n End for\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(s.p,{children:"Vous souhaitez obtenir tous les process li\xe9s \xe0 la session courante :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"  // \xe0 ex\xe9cuter sur le serveur\n \n var $sessionID : Text:=Session.id\n var $o : Object\n \n $o:=Process activity($sessionID ;Processes only)\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/commands/session-storage",children:"Session storage"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/commands/web-get-server-info",children:"WEB Get server info"})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var r=n(667294);let i={},t=r.createContext(i);function o(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);