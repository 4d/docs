"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9027"],{128217:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/start-monitoring-activity","title":"START MONITORING ACTIVITY","description":"START MONITORING ACTIVITY ( dura\xe7\xe3o {; fonte} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/start-monitoring-activity.md","sourceDirName":"commands-legacy","slug":"/commands/start-monitoring-activity","permalink":"/docs/pt/commands/start-monitoring-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-monitoring-activity.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"start-monitoring-activity","title":"START MONITORING ACTIVITY","slug":"/commands/start-monitoring-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MACRO PARAMETER","permalink":"/docs/pt/commands/set-macro-parameter"},"next":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/pt/commands/stop-monitoring-activity"}}'),i=t("785893"),s=t("250065");let d={id:"start-monitoring-activity",title:"START MONITORING ACTIVITY",slug:"/commands/start-monitoring-activity",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," ( ",(0,i.jsx)(n.em,{children:"dura\xe7\xe3o"})," {; ",(0,i.jsx)(n.em,{children:"fonte"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dura\xe7\xe3o"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Dura\xe7\xe3o de tempo (em segundos) antes do inicio do logging"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fonte"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Origem da opera\xe7\xe3o"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"O comando START MONITORING ACTIVITY"}),"grava opera\xe7\xf5es que excedem uma ",(0,i.jsx)(n.em,{children:"dura\xe7\xe3o"})," especifica na mem\xf3ria. Pode ser chamada e executada em 4D remote, 4D Server e aplica\xe7\xf5es standalone 4D (se ",(0,i.jsx)(n.em,{children:"fonte"})," n\xe3o for uma atividade de rede). Atividade registradas podem ser recuperadas usando o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/monitored-activity",children:"Monitored activity"}),". Chame ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})," quando quiser parar a atividade de monitora\xe7\xe3o."]}),"\n",(0,i.jsxs)(n.p,{children:["No par\xe2metro ",(0,i.jsx)(n.em,{children:"dura\xe7\xe3o"}),", passe um n\xfamero definindo um per\xedodo de tempo antes do loggin (em segundos, pode expresso como um decimal) para a execu\xe7\xe3o das opera\xe7\xf5es. Quando a execu\xe7\xe3o de uma opera\xe7\xe3o exceder a ",(0,i.jsx)(n.em,{children:"dura\xe7\xe3o,"})," a opera\xe7\xe3o vai ser registrada na mem\xf3ria."]}),"\n",(0,i.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,i.jsx)(n.em,{children:"fonte"})," define o tipo de atividade a monitorar. Valores poss\xedveis:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Activity all"}),(0,i.jsx)(n.td,{children:"-1"}),(0,i.jsx)(n.td,{children:"Atividades de todos as fontes (valor normal)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Activity language"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Opera\xe7\xf5es de execu\xe7\xe3o de Linguagem"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Activity network"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Opera\xe7\xf5es de peti\xe7\xe3o de network"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Activity operations"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Opera\xe7\xf5es de dados 4D"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": se os hist\xf3ricos de depura\xe7\xe3o tiverem sido parados no servidor 4D ",(0,i.jsx)(n.a,{href:"/docs/pt/ServerWindow/overview",children:"Administration window"}),", ",(0,i.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," com Activity network reiniciar\xe1 os hist\xf3ricos."]}),"\n",(0,i.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"Se quiser iniciar/parar o monitoramento e revis\xe3o de dados 4D e atividades de depura\xe7\xe3o que demoram mais que um milissegundo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $activities : Collection\n\xa0\n\xa0START MONITORING ACTIVITY(0.001;Activity operations+Activity language)\n\xa0\n\xa0$coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")\n\xa0\n\xa0\xa0//retorna todas as opera\xe7\xf5es maiores que 1 milissegundo da atividade de dados 4D e o hist\xf3rico de depura\xe7\xe3o\n\xa0$activities:=Monitored activity\n\xa0\n\xa0$text:=JSON Stringify($activities.orderBy("startTime");*)\n\xa0TEXT TO DOCUMENT("result.txt";$text)\n\xa0\n\xa0\xa0//para o monitoramento de atividade de dados 4D e do hist\xf3rico de depura\xe7\xe3o\n\xa0STOP MONITORING ACTIVITY()\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"result.txt:"})}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.br,{}),"\n{",(0,i.jsx)(n.br,{}),'\n"activityKind": 4,',(0,i.jsx)(n.br,{}),'\n"activityDuration": 0.005,',(0,i.jsx)(n.br,{}),'\n"activityData": {',(0,i.jsx)(n.br,{}),'\n"message": "Exporting selection of entities in Persons as a collection: 400 of 401 entities",',(0,i.jsx)(n.br,{}),'\n"maxValue": 401,',(0,i.jsx)(n.br,{}),'\n"currentValue": 400,',(0,i.jsx)(n.br,{}),'\n"interruptible": true,',(0,i.jsx)(n.br,{}),'\n"remote": false,',(0,i.jsx)(n.br,{}),'\n"uuid": "4ED341FCF8BF40649C9A827EF794A688",',(0,i.jsx)(n.br,{}),'\n"taskId": -5,',(0,i.jsx)(n.br,{}),'\n"startTime": "2020-02-28 13:20:00:010",',(0,i.jsx)(n.br,{}),'\n"duration": 5,',(0,i.jsx)(n.br,{}),'\n"title": "Entities To Collection"',(0,i.jsx)(n.br,{}),"\n}",(0,i.jsx)(n.br,{}),"\n},",(0,i.jsx)(n.br,{}),"\n{",(0,i.jsx)(n.br,{}),'\n"activityKind": 1,',(0,i.jsx)(n.br,{}),'\n"activityDuration": 0.005,',(0,i.jsx)(n.br,{}),'\n"activityData": {',(0,i.jsx)(n.br,{}),'\n"sequenceNumber": 2514,',(0,i.jsx)(n.br,{}),'\n"elapsedTime": 5,',(0,i.jsx)(n.br,{}),'\n"processID": 7,',(0,i.jsx)(n.br,{}),'\n"uniqueProcessID": 14,',(0,i.jsx)(n.br,{}),'\n"stackLevel": 0,',(0,i.jsx)(n.br,{}),'\n"duration": 5056,',(0,i.jsx)(n.br,{}),'\n"kind": "Member",',(0,i.jsx)(n.br,{}),'\n"parameters": "firstname, lastname, address.*",',(0,i.jsx)(n.br,{}),'\n"functionName": "toCollection"',(0,i.jsx)(n.br,{}),"\n}",(0,i.jsx)(n.br,{}),"\n}",(0,i.jsx)(n.br,{}),"\n]"]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/commands/monitored-activity",children:"Monitored activity"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,i.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"1712"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);