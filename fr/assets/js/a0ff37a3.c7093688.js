"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47350"],{591621:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/start-monitoring-activity","title":"START MONITORING ACTIVITY","description":"START MONITORING ACTIVITY ( duree {; source} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/start-monitoring-activity.md","sourceDirName":"commands-legacy","slug":"/commands/start-monitoring-activity","permalink":"/docs/fr/20-R7/commands/start-monitoring-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-monitoring-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"start-monitoring-activity","title":"START MONITORING ACTIVITY","slug":"/commands/start-monitoring-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MACRO PARAMETER","permalink":"/docs/fr/20-R7/commands/set-macro-parameter"},"next":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/fr/20-R7/commands/stop-monitoring-activity"}}'),r=t("785893"),i=t("250065");let d={id:"start-monitoring-activity",title:"START MONITORING ACTIVITY",slug:"/commands/start-monitoring-activity",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," ( ",(0,r.jsx)(n.em,{children:"duree"})," {; ",(0,r.jsx)(n.em,{children:"source"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"duree"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Dur\xe9e (en secondes) avant l'ouverture d'une session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Origine d'une op\xe9ration"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," enregistre les op\xe9rations qui d\xe9passent une certaine ",(0,r.jsx)(n.em,{children:"dur\xe9e"})," dans la m\xe9moire. Elle peut \xeatre appel\xe9e et ex\xe9cut\xe9e sur un 4D distant, 4D Server et sur des applications 4D autonomes (si ",(0,r.jsx)(n.em,{children:"source"})," n'est pas issu d'une activit\xe9 de r\xe9seau). Les activit\xe9s enregistr\xe9es peuvent \xeatre r\xe9cup\xe9r\xe9es \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/monitored-activity",children:"Monitored activity"}),". Appelez ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})," lorsque vous souhaitez stopper le suivi."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"dur\xe9e"}),", passez un nombre d\xe9finissant la dur\xe9e d'ex\xe9cution (en secondes, peut \xeatre exprim\xe9e sous forme d\xe9cimale) d'une op\xe9ration avant l'ouverture d'une session. Une fois que l'ex\xe9cution d'une op\xe9ration d\xe9passe cette dur\xe9e, l'op\xe9ration est enregistr\xe9e dans la m\xe9moire."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"source"})," d\xe9finit le type d'activit\xe9 \xe0 suivre. Valeurs possibles :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Activity all"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"Activit\xe9s de toutes les sources (valeur par d\xe9faut)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Activity language"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Op\xe9rations d'ex\xe9cution du langage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Activity network"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Op\xe9rations de requ\xeates r\xe9seau."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Activity operations"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Op\xe9ration de donn\xe9es 4D."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," : Si le journal de d\xe9bogage a \xe9t\xe9 stopp\xe9 sur la ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/graph-settings",children:"GRAPH SETTINGS"})," de 4D Server, la commande ",(0,r.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," relancera le journal avec Activity network."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez lancer/arr\xeater le suivi et revoir les activit\xe9s de donn\xe9es 4D et de d\xe9bogage ayant dur\xe9 plus d'une milliseconde :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $activities : Collection\n\xa0\n\xa0START MONITORING ACTIVITY(0.001;Activity operations+Activity language)\n\xa0\n\xa0$coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")\n\xa0\n\xa0\xa0//retourne toutes les op\xe9rations de plus d\'1 milliseconde issues des activit\xe9s de donn\xe9es 4D et du journal de d\xe9bogage\n\xa0$activities:=Monitored activity\n\xa0\n\xa0$text:=JSON Stringify($activities.orderBy("startTime");*)\n\xa0TEXT TO DOCUMENT("result.txt";$text)\n\xa0\n\xa0\xa0//met fin au suivi de l\'activit\xe9 de donn\xe9es 4D et du journal de d\xe9bogage\n\xa0STOP MONITORING ACTIVITY()\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"result.txt :"})}),"\n",(0,r.jsxs)(n.p,{children:["[",(0,r.jsx)(n.br,{}),"\n{",(0,r.jsx)(n.br,{}),'\n"activityKind": 4,',(0,r.jsx)(n.br,{}),'\n"activityDuration": 0.005,',(0,r.jsx)(n.br,{}),'\n"activityData": {',(0,r.jsx)(n.br,{}),'\n"message": "Exporting selection of entities in Persons as a collection: 400 of 401 entities",',(0,r.jsx)(n.br,{}),'\n"maxValue": 401,',(0,r.jsx)(n.br,{}),'\n"currentValue": 400,',(0,r.jsx)(n.br,{}),'\n"interruptible": true,',(0,r.jsx)(n.br,{}),'\n"remote": false,',(0,r.jsx)(n.br,{}),'\n"uuid": "4ED341FCF8BF40649C9A827EF794A688",',(0,r.jsx)(n.br,{}),'\n"taskId": -5,',(0,r.jsx)(n.br,{}),'\n"startTime": "2020-02-28 13:20:00:010",',(0,r.jsx)(n.br,{}),'\n"duration": 5,',(0,r.jsx)(n.br,{}),'\n"title": "Entities To Collection"',(0,r.jsx)(n.br,{}),"\n}",(0,r.jsx)(n.br,{}),"\n},",(0,r.jsx)(n.br,{}),"\n{",(0,r.jsx)(n.br,{}),'\n"activityKind": 1,',(0,r.jsx)(n.br,{}),'\n"activityDuration": 0.005,',(0,r.jsx)(n.br,{}),'\n"activityData": {',(0,r.jsx)(n.br,{}),'\n"sequenceNumber": 2514,',(0,r.jsx)(n.br,{}),'\n"elapsedTime": 5,',(0,r.jsx)(n.br,{}),'\n"processID": 7,',(0,r.jsx)(n.br,{}),'\n"uniqueProcessID": 14,',(0,r.jsx)(n.br,{}),'\n"stackLevel": 0,',(0,r.jsx)(n.br,{}),'\n"duration": 5056,',(0,r.jsx)(n.br,{}),'\n"kind": "Member",',(0,r.jsx)(n.br,{}),'\n"parameters": "firstname, lastname, address.*",',(0,r.jsx)(n.br,{}),'\n"functionName": "toCollection"',(0,r.jsx)(n.br,{}),"\n}",(0,r.jsx)(n.br,{}),"\n}",(0,r.jsx)(n.br,{}),"\n]"]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/monitored-activity",children:"Monitored activity"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1712"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);