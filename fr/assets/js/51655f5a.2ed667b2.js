"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5078"],{185220:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/blob-to-print-settings","title":"BLOB to print settings","description":"BLOB to print settings ( paramImpression {; param} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-to-print-settings.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-print-settings","permalink":"/docs/fr/commands/blob-to-print-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-print-settings.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-print-settings","title":"BLOB to print settings","slug":"/commands/blob-to-print-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCUMULATE","permalink":"/docs/fr/commands/accumulate"},"next":{"title":"BREAK LEVEL","permalink":"/docs/fr/commands/break-level"}}'),t=n("785893"),i=n("250065");let a={id:"blob-to-print-settings",title:"BLOB to print settings",slug:"/commands/blob-to-print-settings",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Windows / OS X",id:"windows--os-x",level:5},{value:"Compatibilit\xe9 avec les commandes 4D Pack",id:"compatibilit\xe9-avec-les-commandes-4d-pack",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"BLOB to print settings"})," ( ",(0,t.jsx)(s.em,{children:"paramImpression"})," {; ",(0,t.jsx)(s.em,{children:"param"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"paramImpression"}),(0,t.jsx)(s.td,{children:"Blob"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"BLOB contenant les param\xe8tres d\u2019impression"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"param"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"0=Utilise les valeurs sauvegard\xe9es pour le nombre de copies et la plage d'impression, 1=R\xe9initialise aux valeurs par d\xe9faut"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Code d'\xe9tat : 1=Op\xe9ration r\xe9ussie, 0=Pas d'imprimante courante, -1=Param\xe8tres incorrects, 2=L'imprimante a chang\xe9"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"BLOB to print settings"})," remplace les param\xe8tres d\u2019impression courants de 4D par les param\xe8tres stock\xe9s dans le BLOB ",(0,t.jsx)(s.em,{children:"paramImpression"}),". Ce BLOB doit avoir \xe9t\xe9 g\xe9n\xe9r\xe9 par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-settings-to-blob",children:"Print settings to BLOB"})," ou par la commande de 4D Pack  (voir ci-dessous)."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"param"}),' permet de d\xe9finir la fa\xe7on de g\xe9rer les param\xe8tres de base "nombre de copies" et "plage d\'impression" :']}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"si vous passez 0 ou omettez ce param\xe8tre, les valeurs stock\xe9es dans le BLOB sont utilis\xe9es pour l'impression."}),"\n",(0,t.jsx)(s.li,{children:'si vous passez 1, les valeurs sont r\xe9initialis\xe9es aux valeurs par d\xe9faut : le nombre de copies est fix\xe9 \xe0 1, et la plage d\'impression est fix\xe9e \xe0 "toutes les pages".'}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Les param\xe8tres d'impression s'appliquent aux ",(0,t.jsx)(s.a,{href:"/docs/fr/settings/compatibility",children:"param\xe8tres courants de l'impression 4D"})," jusqu'\xe0 ce qu'une commande telle que ",(0,t.jsx)(s.em,{children:"_o_PAGE SETUP"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"})," ou ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," sans le param\xe8tre > les modifie. Les param\xe8tres fix\xe9s sont utilis\xe9s plus particuli\xe8rement par les commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-label",children:"PRINT LABEL"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-record",children:"PRINT RECORD"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-form",children:"Print form"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/qr-report",children:"QR REPORT"}),", ainsi que par les commandes d'impression dans les menus de 4D, y compris ceux de l'environnement D\xe9veloppement."]}),"\n",(0,t.jsxs)(s.p,{children:["Les commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-label",children:"PRINT LABEL"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-record",children:"PRINT RECORD"})," doivent \xeatre appel\xe9es avec le param\xe8tre ",(0,t.jsx)(s.em,{children:">"})," (si applicable) de fa\xe7on \xe0 ce que les param\xe8tres d\xe9finis par ",(0,t.jsx)(s.strong,{children:"BLOB to print settings"})," soient gard\xe9s."]}),"\n",(0,t.jsx)(s.p,{children:"La commande retourne un des codes d'\xe9tat suivants :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"-1 : le BLOB est incorrect."}),"\n",(0,t.jsx)(s.li,{children:"0 : aucune imprimante courante n'est s\xe9lectionn\xe9e (dans ce cas, la commande ne fait rien)."}),"\n",(0,t.jsx)(s.li,{children:"1 : le BLOB a \xe9t\xe9 correctement charg\xe9."}),"\n",(0,t.jsxs)(s.li,{children:["2 : le BLOB a \xe9t\xe9 correctement charg\xe9 mais le nom de l'imprimante courante a chang\xe9 (*).",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Note :"})," le code (2) est toujours retourn\xe9 si le BLOB a \xe9t\xe9 cr\xe9e avec la commande de 4D Pack , m\xeame si le nom de l'imprimante n'a pas chang\xe9, car cette information n'est pas pr\xe9sente dans les BLOBs de 4D Pack."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"(*) Les param\xe8tres d\xe9pendent de l'imprimante courante s\xe9lectionn\xe9e au moment o\xf9 le BLOB a \xe9t\xe9 stock\xe9. Appliquer ces param\xe8tres \xe0 une autre imprimante sera pris en charge si les deux imprimantes sont du m\xeame mod\xe8le. Si les imprimantes sont diff\xe9rentes, seuls les param\xe8tres communs seront restaur\xe9s."}),"\n",(0,t.jsx)(s.h5,{id:"windows--os-x",children:"Windows / OS X"}),"\n",(0,t.jsxs)(s.p,{children:["Le BLOB ",(0,t.jsx)(s.em,{children:"paramImpression"})," peut \xeatre sauvegard\xe9 et lu sur les deux plate-formes. Toutefois, m\xeame si certains param\xe8tres d'impression sont communs, d'autres sont sp\xe9cifiques \xe0 la plate-forme et d\xe9pendent du pilote d'impression et des versions de l'OS. Si le m\xeame BLOB ",(0,t.jsx)(s.em,{children:"paramImpression"})," est partag\xe9 entre les deux plate-formes, vous pouvez perdre des informations.*"]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous utilisez un environnement h\xe9t\xe9rog\xe8ne, pour restaurer le maximum de param\xe8tres d'impression disponibles pour chaque plate-forme (et pas seulement la partie commune), il est recommand\xe9 de g\xe9rer deux BLOBs ",(0,t.jsx)(s.em,{children:"paramImpression"}),", un pour chaque plate-forme."]}),"\n",(0,t.jsx)(s.h5,{id:"compatibilit\xe9-avec-les-commandes-4d-pack",children:"Compatibilit\xe9 avec les commandes 4D Pack"}),"\n",(0,t.jsxs)(s.p,{children:["Les BLOBs de param\xe8tres d'impression g\xe9n\xe9r\xe9s avec la commande 4D Pack  peuvent \xeatre charg\xe9s et utilis\xe9s par la commande ",(0,t.jsx)(s.strong,{children:"BLOB to print settings"}),". Notez toutefois que s'ils sont stock\xe9s avec ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-settings-to-blob",children:"Print settings to BLOB"}),", ils sont convertis et ne pourront plus \xeatre ouvert avec . La commande ",(0,t.jsx)(s.strong,{children:"BLOB to print settings"})," stocke davantage d'informations que la commande ."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Vous voulez appliquer des param\xe8tres d'impression pr\xe9c\xe9demment stock\xe9s sur disque au dialogue d'impression de 4D :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0var curSettings : Blob\n\xa0DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)\n\xa0\xa0//current4Dsettings a \xe9t\xe9 cr\xe9\xe9 avec la commande Param\xe8tres impression vers BLOB\n\xa0$err:=BLOB to print settings(curSettings;0)\n\xa0Case of\n\xa0\xa0\xa0\xa0:($err=1)\n\xa0\xa0//tout est OK\n\xa0\xa0\xa0\xa0:($err=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("L\'imprimante a chang\xe9. \\n\\nV\xe9rifiez les param\xe8tres d\'impression.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PRINT SETTINGS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:($err=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Il n\'y a pas d\'imprimante courante.")\n\xa0\xa0\xa0\xa0:($err=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Fichier de param\xe8tres invalide.")\n\xa0End case\n'})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-settings-to-blob",children:"Print settings to BLOB"})}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"1434"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return a}});var r=n(667294);let t={},i=r.createContext(t);function a(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);