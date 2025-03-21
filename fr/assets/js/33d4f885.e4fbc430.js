"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14590"],{433767:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/on-drop-database-method","title":"On Drop database method","description":"On Drop database method","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-drop-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-drop-database-method","permalink":"/docs/fr/20-R7/commands/on-drop-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-drop-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-drop-database-method","title":"On Drop database method","slug":"/commands/on-drop-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Startup database method","permalink":"/docs/fr/20-R7/commands/on-backup-startup-database-method"},"next":{"title":"On Exit database method","permalink":"/docs/fr/20-R7/commands/on-exit-database-method"}}'),d=s("785893"),o=s("250065");let a={id:"on-drop-database-method",title:"On Drop database method",slug:"/commands/on-drop-database-method",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function l(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"On Drop database method"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h2,{id:""}),"\n",(0,d.jsxs)(n.p,{children:["La ",(0,d.jsx)(n.strong,{children:"On Drop database method"})," est disponible dans les applications 4D en mode local ou distant."]}),"\n",(0,d.jsx)(n.p,{children:"Cette m\xe9thode base est ex\xe9cut\xe9e automatiquement en cas de d\xe9poser d\u2019objets dans l\u2019application 4D en-dehors de tout contexte de formulaire ou dialogue. Diff\xe9rents types de d\xe9poser sont pris en charge en fonction de la plate-forme et de l'application :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Action"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Plate-forme"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Commentaire"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"D\xe9poser dans une zone vide de la fen\xeatre MDI"}),(0,d.jsx)(n.td,{children:"Windows"}),(0,d.jsxs)(n.td,{children:["Non pris en charge lorsque la base est ex\xe9cut\xe9e en mode SDI car il n'y a pas de fen\xeatre MDI dans ce contexte (cf. section ",(0,d.jsx)(n.em,{children:"Mode SDI sous Windows"}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"D\xe9poser dans l'ic\xf4ne 4D dans le Dock"}),(0,d.jsx)(n.td,{children:"macOS"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"D\xe9poser dans l'ic\xf4ne 4D sur le Bureau du syst\xe8me"}),(0,d.jsx)(n.td,{children:"Windows(*) & macOS"}),(0,d.jsxs)(n.td,{children:["La ",(0,d.jsx)(n.strong,{children:"On Drop database method"})," est appel\xe9e uniquement si l\u2019application est d\xe9j\xe0 lanc\xe9e, sauf dans le cas des applications fusionn\xe9es avec 4D Desktop. Dans ce cas, la m\xe9thode base est appel\xe9e m\xeame lorsqu\u2019elle n\u2019est pas lanc\xe9e. Ce principe permet de d\xe9finir des signatures de documents personnalis\xe9es."]})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"(*) Non pris en charge avec 4D Developer version 64 bits sous Windows car provoque l'ouverture d'une nouvelle instance de l'application (comportement syst\xe8me)."}),"\n",(0,d.jsxs)(n.p,{children:["Sur Mac, il est n\xe9cessaire de maintenir les touches ",(0,d.jsx)(n.strong,{children:"Option"}),"+",(0,d.jsx)(n.strong,{children:"Commande"})," enfonc\xe9es pendant le d\xe9poser afin que la m\xe9thode base soit appel\xe9e."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Cet exemple permet d\u2019ouvrir un document 4D Write d\xe9pos\xe9 en-dehors de tout formulaire :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode base Sur D\xe9poser\n\xa0fichierD\xe9pos\xe9:=Get file from pasteboard(1)\n\xa0If(Position(".4W7";fichierD\xe9pos\xe9)=Length(fichierD\xe9pos\xe9)-3)\n\xa0\xa0\xa0\xa0zexterne:=Open external window(100;100;500;500;0;fichierD\xe9pos\xe9;"_4D Write")\n\xa0\xa0\xa0\xa0WR OPEN DOCUMENT(zexterne;fichierD\xe9pos\xe9)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"Glisser-D\xe9poser"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let d={},o=t.createContext(d);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);