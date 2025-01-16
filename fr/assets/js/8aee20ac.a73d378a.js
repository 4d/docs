"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90992"],{990485:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/web-service-get-result","title":"WEB SERVICE GET RESULT","description":"WEB SERVICE GET RESULT ( valeurRetour {; nomRetour {; *}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-get-result.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-result","permalink":"/docs/fr/20-R7/commands/web-service-get-result","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-result.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-get-result","title":"WEB SERVICE GET RESULT","slug":"/commands/web-service-get-result","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE Get info","permalink":"/docs/fr/20-R7/commands/web-service-get-info"},"next":{"title":"WEB SERVICE SET OPTION","permalink":"/docs/fr/20-R7/commands/web-service-set-option"}}'),s=n("785893"),i=n("250065");let l={id:"web-service-get-result",title:"WEB SERVICE GET RESULT",slug:"/commands/web-service-get-result",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"WEB SERVICE GET RESULT"})," ( ",(0,s.jsx)(r.em,{children:"valeurRetour"})," {; ",(0,s.jsx)(r.em,{children:"nomRetour"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param\xe8tre"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"valeurRetour"}),(0,s.jsx)(r.td,{children:"Variable"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Valeur retourn\xe9e par le Web Service"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nomRetour"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Nom du param\xe8tre \xe0 r\xe9cup\xe9rer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"*"}),(0,s.jsx)(r.td,{children:"Operator"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Lib\xe9rer la m\xe9moire"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["La commande ",(0,s.jsx)(r.strong,{children:"WEB SERVICE GET RESULT"})," permet de r\xe9cup\xe9rer une valeur renvoy\xe9e par le Web Service \xe0 l\u2019issue du traitement effectu\xe9.Cette commande doit \xeatre utilis\xe9e uniquement apr\xe8s la commande ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"valeurRetour"})," re\xe7oit la valeur renvoy\xe9e par le Web Service. Passez dans ce param\xe8tre une variable 4D. Cette variable est g\xe9n\xe9ralement ",(0,s.jsx)(r.em,{children:"$0"}),", correspondant \xe0 la valeur retourn\xe9e par la m\xe9thode proxy. Il est toutefois possible d\u2019utiliser des variables interm\xe9diaires (vous devez utiliser des variables process uniquement)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note :"})," Chaque variable ou tableau 4D utilis\xe9(e) doit \xeatre pr\xe9alablement d\xe9clar\xe9(e) \xe0 l\u2019aide des commandes des th\xe8mes \u201CCompilateur\u201D et \u201CTableaux\u201D."]}),"\n",(0,s.jsxs)(r.p,{children:["Le param\xe8tre optionnel ",(0,s.jsx)(r.em,{children:"nomRetour"})," permet de sp\xe9cifier le nom du param\xe8tre \xe0 r\xe9cup\xe9rer. Toutefois, comme la plupart des Web Services retournent une seule valeur, ce param\xe8tre n\u2019est g\xe9n\xe9ralement pas n\xe9cessaire."]}),"\n",(0,s.jsxs)(r.p,{children:["Le param\xe8tre ",(0,s.jsx)(r.em,{children:"*"}),", optionnel, indique au programme de lib\xe9rer la m\xe9moire consacr\xe9e au traitement de la requ\xeate. Vous devez passer ce param\xe8tre apr\xe8s la r\xe9cup\xe9ration de la derni\xe8re valeur renvoy\xe9e par le Web Service."]}),"\n",(0,s.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(r.p,{children:"Imaginons un Web Service retournant l\u2019heure courante dans n\u2019importe quelle ville du monde. Les param\xe8tres re\xe7us par le Web Service sont le nom de la ville et le code du pays. Le Web Service retourne alors l\u2019heure correspondante. La m\xe9thode proxy d\u2019appel pourrait \xeatre de la forme suivante :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var $2 : Text\n\xa0var $0 : Time\n\xa0\n\xa0WEB SERVICE SET PARAMETER("ville";$1)\n\xa0WEB SERVICE SET PARAMETER("code_pays";$2)\n\xa0\n\xa0WEB SERVICE CALL("http://www.villesdumonde.com/WS";"WSHeures#Heure_ville";"Heure_ville";\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"http://www.villesdumonde.com/namespace/default")\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0WEB SERVICE GET RESULT($0;"retour";*)\xa0\n\xa0End if\n'})}),"\n",(0,s.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]}),"\n",(0,s.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(r.td,{children:"779"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return l}});var t=n(667294);let s={},i=t.createContext(s);function l(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);