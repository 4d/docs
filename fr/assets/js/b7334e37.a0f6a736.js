"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85823"],{356023:function(e,A,t){t.r(A),t.d(A,{default:()=>a,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/web-get-http-body","title":"WEB GET HTTP BODY","description":"WEB GET HTTP BODY ( corps )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-http-body.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-http-body","permalink":"/docs/fr/commands/web-get-http-body","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-http-body.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-http-body","title":"WEB GET HTTP BODY","slug":"/commands/web-get-http-body","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Get Current Session ID","permalink":"/docs/fr/commands/web-get-current-session-id"},"next":{"title":"WEB GET HTTP HEADER","permalink":"/docs/fr/commands/web-get-http-header"}}'),s=t("785893"),r=t("250065");let d={id:"web-get-http-body",title:"WEB GET HTTP BODY",slug:"/commands/web-get-http-body",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let A={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.strong,{children:"WEB GET HTTP BODY"})," ( ",(0,s.jsx)(A.em,{children:"corps"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(A.table,{children:[(0,s.jsx)(A.thead,{children:(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.th,{children:"Param\xe8tre"}),(0,s.jsx)(A.th,{children:"Type"}),(0,s.jsx)(A.th,{}),(0,s.jsx)(A.th,{children:"Description"})]})}),(0,s.jsx)(A.tbody,{children:(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"corps"}),(0,s.jsx)(A.td,{children:"Blob, Text"}),(0,s.jsx)(A.td,{children:"\u2190"}),(0,s.jsx)(A.td,{children:"Champ corps (Body) de la requ\xeate HTTP"})]})})]}),"\n",(0,s.jsx)(A.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(A.p,{children:["La commande ",(0,s.jsx)(A.strong,{children:"WEB GET HTTP BODY"})," retourne le corps (body) de la requ\xeate HTTP en cours de traitement. Le corps HTTP est retourn\xe9 tel quel, sans traitement ni analyse."]}),"\n",(0,s.jsxs)(A.p,{children:["Cette commande peut \xeatre appel\xe9e depuis la ",(0,s.jsx)(A.em,{children:"M\xe9thode base Sur authentification Web"}),", la ",(0,s.jsx)(A.a,{href:"/docs/fr/commands/qr-set-destination",children:"QR SET DESTINATION"})," ou toute m\xe9thode Web."]}),"\n",(0,s.jsxs)(A.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,s.jsx)(A.em,{children:"corps"})," une variable ou un champ de type BLOB ou Texte. Le type Texte sera g\xe9n\xe9ralement suffisant (le param\xe8tre ",(0,s.jsx)(A.em,{children:"corps"})," peut recevoir jusqu'\xe0 2 Go de texte)."]}),"\n",(0,s.jsx)(A.p,{children:"Cette commande permet par exemple d\u2019effectuer des recherches dans le corps des requ\xeates. Elle permet \xe9galement aux utilisateurs avanc\xe9s de mettre en place un serveur WebDAV au sein d\u2019une base 4D."}),"\n",(0,s.jsx)(A.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(A.p,{children:"Dans cet exemple, une requ\xeate simple est envoy\xe9e au serveur Web de 4D et le contenu du champ HTTP corps est visualis\xe9 dans le d\xe9bogueur. Voici le formulaire envoy\xe9 au serveur Web de 4D, ainsi que le code HTML correspondant :"}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{src:t(885237).Z+"",width:"808",height:"253"})}),"\n",(0,s.jsx)(A.p,{children:"Voici la m\xe9thode Test4D2004 :"}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-4d",children:'\xa0var $requete : Blob\n\xa0var $texteRequete : Text\n\xa0\n\xa0WEB GET HTTP BODY($requete)\n\xa0$texteRequete:=BLOB to text($requete;UTF8 text without length)\n\xa0WEB SEND FILE("page.html")\n'})}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.strong,{children:"Note :"})," Cette m\xe9thode a \xe9t\xe9 d\xe9clar\xe9e \u201CDisponible via les balises HTML et les URLs 4D (4DACTION...)\u201D dans ses propri\xe9t\xe9s."]}),"\n",(0,s.jsxs)(A.p,{children:['Lorsque le formulaire est soumis au serveur Web, la variable $texteRequete re\xe7oit le texte du champ body de la requ\xeate HTTP, soit "',(0,s.jsx)(A.em,{children:"vnom=Dupont"}),'".']}),"\n",(0,s.jsx)(A.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.a,{href:"/docs/fr/commands/web-get-body-part",children:"WEB GET BODY PART"}),(0,s.jsx)(A.br,{}),"\n",(0,s.jsx)(A.a,{href:"/docs/fr/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]}),"\n",(0,s.jsx)(A.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(A.table,{children:[(0,s.jsx)(A.thead,{children:(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.th,{}),(0,s.jsx)(A.th,{})]})}),(0,s.jsxs)(A.tbody,{children:[(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(A.td,{children:"814"})]}),(0,s.jsxs)(A.tr,{children:[(0,s.jsx)(A.td,{children:"Thread safe"}),(0,s.jsx)(A.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:A}={...(0,r.a)(),...e.components};return A?(0,s.jsx)(A,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},885237:function(e,A,t){t.d(A,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,A,t){t.d(A,{Z:function(){return i},a:function(){return d}});var n=t(667294);let s={},r=n.createContext(s);function d(e){let A=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:A},e.children)}}}]);