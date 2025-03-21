"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["632"],{859417:function(e,n,i){i.r(n),i.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/start-monitoring-activity","title":"START MONITORING ACTIVITY","description":"START MONITORING ACTIVITY ( duracion {; fuente} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/start-monitoring-activity.md","sourceDirName":"commands-legacy","slug":"/commands/start-monitoring-activity","permalink":"/docs/es/commands/start-monitoring-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-monitoring-activity.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"start-monitoring-activity","title":"START MONITORING ACTIVITY","slug":"/commands/start-monitoring-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MACRO PARAMETER","permalink":"/docs/es/commands/set-macro-parameter"},"next":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/es/commands/stop-monitoring-activity"}}'),s=i("785893"),r=i("250065");let d={id:"start-monitoring-activity",title:"START MONITORING ACTIVITY",slug:"/commands/start-monitoring-activity",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," ( ",(0,s.jsx)(n.em,{children:"duracion"})," {; ",(0,s.jsx)(n.em,{children:"fuente"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"duracion"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Per\xedodo de tiempo (en segundos) antes de que comience el registro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fuente"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Origen de una operaci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," registra las operaciones que excedan una ",(0,s.jsx)(n.em,{children:"duracion"})," especificada en la memoria. Se puede invocar y ejecutar en un 4D remoto, 4D Server y en aplicaciones 4D autonomas (si ",(0,s.jsx)(n.em,{children:"fuente"})," no proviene de una actividad de red). Las actividades registradas se puede recuperar utilizando el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/monitored-activity",children:"Monitored activity"}),". Llame a ",(0,s.jsx)(n.a,{href:"/docs/es/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})," cuando desee detener la actividad de seguimiento."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"duracion"}),", pase un n\xfamero que defina un per\xedodo de tiempo antes de que comience el inicio de sesi\xf3n (en segundos, puede expresarse como un decimal) para la ejecuci\xf3n de una operaci\xf3n. Una vez que la ejecuci\xf3n de una operaci\xf3n excede la ",(0,s.jsx)(n.em,{children:"duracion"}),", la operaci\xf3n se grabar\xe1 en la memoria."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"fuente"})," define el tipo de actividad a monitorear. Valores posibles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Activity all"}),(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"Actividad de todas las fuentes (valor predeterminado)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Activity language"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Operaciones de ejecuci\xf3n del lenguaje"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Activity network"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Operaciones de peticiones de red"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Activity operations"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Operaciones de datos 4D"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": si los historiales de depuraci\xf3n se han detenido en el servidor 4D ",(0,s.jsx)(n.a,{href:"/docs/es/ServerWindow/overview",children:"Administration window"}),", ",(0,s.jsx)(n.strong,{children:"START MONITORING ACTIVITY"})," con Activity network reiniciar\xe1 los historiales."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Desea iniciar/detener la supervisi\xf3n y revisi\xf3n de los datos 4D y las actividades de depuraci\xf3n que duran m\xe1s de un milisegundo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $activities : Collection\n\xa0\n\xa0START MONITORING ACTIVITY(0.001;Activity operations+Activity language)\n\xa0\n\xa0$coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")\n\xa0\n\xa0\xa0//devuelve todas las operaciones de m\xe1s de 1 milisegundo de la actividad de datos 4D y el historial de depuraci\xf3n\n\xa0$activities:=Monitored activity\n\xa0\n\xa0$text:=JSON Stringify($activities.orderBy("startTime");*)\n\xa0TEXT TO DOCUMENT("result.txt";$text)\n\xa0\n\xa0\xa0//fin de la supervisi\xf3n de la actividad de datos 4D y del historial de depuraci\xf3n\n\xa0STOP MONITORING ACTIVITY()\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"result.txt:"})}),"\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.br,{}),"\n{",(0,s.jsx)(n.br,{}),'\n"activityKind": 4,',(0,s.jsx)(n.br,{}),'\n"activityDuration": 0.005,',(0,s.jsx)(n.br,{}),'\n"activityData": {',(0,s.jsx)(n.br,{}),'\n"message": "Exporting selection of entities in Persons as a collection: 400 of 401 entities",',(0,s.jsx)(n.br,{}),'\n"maxValue": 401,',(0,s.jsx)(n.br,{}),'\n"currentValue": 400,',(0,s.jsx)(n.br,{}),'\n"interruptible": true,',(0,s.jsx)(n.br,{}),'\n"remote": false,',(0,s.jsx)(n.br,{}),'\n"uuid": "4ED341FCF8BF40649C9A827EF794A688",',(0,s.jsx)(n.br,{}),'\n"taskId": -5,',(0,s.jsx)(n.br,{}),'\n"startTime": "2020-02-28 13:20:00:010",',(0,s.jsx)(n.br,{}),'\n"duration": 5,',(0,s.jsx)(n.br,{}),'\n"title": "Entities To Collection"',(0,s.jsx)(n.br,{}),"\n}",(0,s.jsx)(n.br,{}),"\n},",(0,s.jsx)(n.br,{}),"\n{",(0,s.jsx)(n.br,{}),'\n"activityKind": 1,',(0,s.jsx)(n.br,{}),'\n"activityDuration": 0.005,',(0,s.jsx)(n.br,{}),'\n"activityData": {',(0,s.jsx)(n.br,{}),'\n"sequenceNumber": 2514,',(0,s.jsx)(n.br,{}),'\n"elapsedTime": 5,',(0,s.jsx)(n.br,{}),'\n"processID": 7,',(0,s.jsx)(n.br,{}),'\n"uniqueProcessID": 14,',(0,s.jsx)(n.br,{}),'\n"stackLevel": 0,',(0,s.jsx)(n.br,{}),'\n"duration": 5056,',(0,s.jsx)(n.br,{}),'\n"kind": "Member",',(0,s.jsx)(n.br,{}),'\n"parameters": "firstname, lastname, address.*",',(0,s.jsx)(n.br,{}),'\n"functionName": "toCollection"',(0,s.jsx)(n.br,{}),"\n}",(0,s.jsx)(n.br,{}),"\n}",(0,s.jsx)(n.br,{}),"\n]"]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/monitored-activity",children:"Monitored activity"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1712"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return d}});var t=i(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);