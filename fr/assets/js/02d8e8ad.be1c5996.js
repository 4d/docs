"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7652"],{182081:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/session-storage","title":"Session storage","description":"Session storage ( id ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/session-storage.md","sourceDirName":"commands-legacy","slug":"/commands/session-storage","permalink":"/docs/fr/commands/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsession-storage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session-storage","title":"Session storage","slug":"/commands/session-storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session info","permalink":"/docs/fr/commands/session-info"},"next":{"title":"UNREGISTER CLIENT","permalink":"/docs/fr/commands/unregister-client"}}'),i=n("785893"),r=n("250065");let o={id:"session-storage",title:"Session storage",slug:"/commands/session-storage",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Note",id:"note",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Session storage"})," ( ",(0,i.jsx)(s.em,{children:"id"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"id"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Unique identifier (UUID) of the session on the server"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Storage object of the session"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"Session storage"})," renvoie l'objet de stockage de la session dont l'identifiant unique a \xe9t\xe9 transmis dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"id"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Dans id, indiquez l'UUID de la session pour laquelle vous souhaitez obtenir le stockage. Il est automatiquement attribu\xe9 par le serveur et stock\xe9 dans la propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"https://developer.4d.com/docs/fr/API/SessionClass/#id",children:(0,i.jsx)(s.strong,{children:".id"})})," de l'",(0,i.jsx)(s.a,{href:"https://developer.4d.com/docs/fr/API/SessionClass/",children:"objet session"}),". Si la session n'existe pas sur le serveur, la commande renvoie ",(0,i.jsx)(s.strong,{children:"Null"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Vous pouvez obtenir les identifiants de session en utilisant la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/process-activity",children:"Process activity"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["L'objet renvoy\xe9 est la propri\xe9t\xe9 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://developer.4d.com/docs/fr/API/SessionClass/#storage",children:".storage"})})," de la session. Il s'agit d'un objet partag\xe9 utilis\xe9 pour stocker des informations accessibles \xe0 tous les processus de la session."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"Cette m\xe9thode modifie la valeur d'une propri\xe9t\xe9 \"settings\" stock\xe9e dans l'objet de stockage d'une session sp\xe9cifique :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//D\xe9finir le stockage pour une session\n\xa0\xa0// La propri\xe9t\xe9 de la m\xe9thode " Execute On Server " est d\xe9finie.\n\xa0\n\xa0#DECLARE($id Text;$text Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/commands/process-activity",children:"Process activity"})}),"\n",(0,i.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"1839"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var t=n(667294);let i={},r=t.createContext(i);function o(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);