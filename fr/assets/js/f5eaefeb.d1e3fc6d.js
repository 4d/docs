"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72019"],{947942:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/execute-on-client","title":"EXECUTE ON CLIENT","description":"EXECUTE ON CLIENT ( nomClient ; nomM\xe9thode {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/execute-on-client.md","sourceDirName":"commands-legacy","slug":"/commands/execute-on-client","permalink":"/docs/fr/20-R8/commands/execute-on-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-on-client.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"execute-on-client","title":"EXECUTE ON CLIENT","slug":"/commands/execute-on-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELAY PROCESS","permalink":"/docs/fr/20-R8/commands/delay-process"},"next":{"title":"Execute on server","permalink":"/docs/fr/20-R8/commands/execute-on-server"}}'),r=s("785893"),l=s("250065");let i={id:"execute-on-client",title:"EXECUTE ON CLIENT",slug:"/commands/execute-on-client",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE ON CLIENT"})," ( ",(0,r.jsx)(n.em,{children:"nomClient"})," ; ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"})," {; ",(0,r.jsx)(n.em,{children:"param"}),"}{; ",(0,r.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomClient"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom d\u2019inscription du 4D Client"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomM\xe9thode"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de la m\xe9thode \xe0 ex\xe9cuter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Param\xe8tre(s) de la m\xe9thode"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"EXECUTE ON CLIENT"})," provoque l\u2019ex\xe9cution de la m\xe9thode ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"}),", avec, \xe9ventuellement, le(s) param\xe8tre(s) ",(0,r.jsx)(n.em,{children:"param1... paramN"}),", sur le ou les 4D Client inscrit(s) sous le nom ",(0,r.jsx)(n.em,{children:"nomClient"}),". Le nom d\u2019inscription du ou des 4D Client est d\xe9fini par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande peut \xeatre appel\xe9e depuis un 4D Client ou une proc\xe9dure stock\xe9e sur 4D Server.",(0,r.jsx)(n.br,{}),"\nSi la m\xe9thode admet des param\xe8tres, passez-les apr\xe8s le nom de la m\xe9thode."]}),"\n",(0,r.jsx)(n.p,{children:"L\u2019ex\xe9cution de la m\xe9thode sur le 4D Client s\u2019effectue dans un process cr\xe9\xe9 automatiquement sur le poste client, et portant le nom d\u2019inscription du 4D Client."}),"\n",(0,r.jsxs)(n.p,{children:["Si cette commande est appel\xe9e plusieurs fois de suite pour un m\xeame 4D Client, les ordres d\u2019ex\xe9cution seront empil\xe9s. Par cons\xe9quent, les m\xe9thodes seront trait\xe9es les unes \xe0 la suite des autres : les ex\xe9cutions sont asynchrones. Plus l\u2019empilement est grand, plus la \u201Ccharge de travail\u201D est grande pour le 4D Client. Vous pouvez conna\xeetre l\u2019\xe9tat de la charge de travail de chaque client \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," L\u2019empilement des ordres d\u2019ex\xe9cutions ne peut \xeatre modifi\xe9 ou stopp\xe9, sauf si le 4D Client est d\xe9sinscrit \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/unregister-client",children:"UNREGISTER CLIENT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Il est possible d\u2019ex\xe9cuter simultan\xe9ment la m\xeame m\xe9thode sur plusieurs ou sur la totalit\xe9 des 4D Clients inscrits : pour cela, passez le caract\xe8re joker (@) dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomClient"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez ex\xe9cuter sur le poste client \u201CClient1\u201D la m\xe9thode \u201CG\xe9n\xe9reNums\u201D, comportant trois param\xe8tres :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE ON CLIENT("Client1";"G\xe9n\xe9reNums";12;$a;"Text")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez que tous les clients inscrits ex\xe9cutent la m\xe9thode \u201CVideTemp\u201D :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE ON CLIENT("@";"VideTemp")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l\u2019exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si 4D Server a correctement re\xe7u la requ\xeate d\u2019ex\xe9cution d\u2019une m\xe9thode \u2014 cela ne garantit pas toutefois la bonne ex\xe9cution de la m\xe9thode sur le 4D Client."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/execute-on-server",children:"Execute on server"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/register-client",children:"REGISTER CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"651"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);