"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31222"],{564912:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands/new-signal","title":"New signal","description":"New signal { ( description 4D.Signal","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands/new-signal.md","sourceDirName":"commands","slug":"/commands/new-signal","permalink":"/docs/fr/commands/new-signal","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-signal.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"new-signal","title":"New signal","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"KILL WORKER","permalink":"/docs/fr/commands/kill-worker"},"next":{"title":"Semaphore","permalink":"/docs/fr/commands/semaphore"}}'),r=s("785893"),t=s("250065");let l={id:"new-signal",title:"New signal",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New signal"})," { ( ",(0,r.jsx)(n.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Description du signal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"4D.Signal"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Object encapsulant le signal"})]})]})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"New signal"})," cr\xe9e un objet ",(0,r.jsx)(n.code,{children:"4D.Signal"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Un signal est un objet partag\xe9 qui peut \xeatre pass\xe9 en param\xe8tre depuis un worker ou un process \xe0 un autre worker ou process, de mani\xe8re \xe0 ce que :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"le worker/process appel\xe9 puisse mettre \xe0 jour l'objet signal apr\xe8s qu'un traitement sp\xe9cifique soit termin\xe9"}),"\n",(0,r.jsx)(n.li,{children:"le worker/process appelant puisse stopper son ex\xe9cution et attende jusqu'\xe0 ce que le signal soit mis \xe0 jour, sans consommer aucune ressource CPU."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Optionnellement, dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"description"}),", vous pouvez passer un texte personnalis\xe9 d\xe9crivant le signal. Ce texte peut \xe9galement \xeatre d\xe9fini apr\xe8s la cr\xe9ation du signal."]}),"\n",(0,r.jsxs)(n.p,{children:["Comme l'objet signal est un objet partag\xe9, il peut aussi \xeatre utilis\xe9 pour maintenir des propri\xe9t\xe9s utilisateur, y compris la propri\xe9t\xe9 ",(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})}),", via l'appel de la structure ",(0,r.jsx)(n.code,{children:"Use...End use"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,r.jsxs)(n.p,{children:["Un nouvel objet ",(0,r.jsx)(n.a,{href:"/docs/fr/API/SignalClass#signal-object",children:(0,r.jsx)(n.code,{children:"4D.Signal"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple type de worker qui d\xe9finit un signal :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("Ceci est mon premier signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //patienter 1 seconde au maximum\n\n If($signaled)\n    ALERT("myworker a termin\xe9 le travail. R\xe9sultat : "+$signal.myresult)\n Else\n    ALERT("myworker n\'a pas termin\xe9 en moins d\'1 seconde")\n End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["La m\xe9thode ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"doSomething"})})," est par exemple :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  //tout traitement\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //renvoi du r\xe9sultat\n End use\n $signal.trigger() // Le travail est termin\xe9\n"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1641"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);