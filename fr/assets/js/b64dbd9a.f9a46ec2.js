"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92666"],{775838:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands/session-info","title":"Session info","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/session-info.md","sourceDirName":"commands","slug":"/commands/session-info","permalink":"/docs/fr/commands/session-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session-info","title":"Session info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session","permalink":"/docs/fr/commands/session"},"next":{"title":"Session storage","permalink":"/docs/fr/commands/session-storage"}}'),i=s("785893"),r=s("250065");let d={id:"session-info",title:"Session info",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R7"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session info"})," ( ",(0,i.jsx)(n.em,{children:"sessionId"})," : Integer ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionID"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"ID de session"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Informations sur la session"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"Session info"})," retourne un objet d\xe9crivant la session dont vous passez l'ID dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"sessionID"}),". Si vous transmettez une ",(0,i.jsx)(n.em,{children:"sessionID"})," invalide, la commande renvoie un objet nul."]}),"\n",(0,i.jsx)(n.p,{children:"L'objet retourn\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom de propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text (enum)"}),(0,i.jsx)(n.td,{children:'Type de session. Valeurs possibles : "remote", "storedProcedure", "rest"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nom d'utilisateur"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"machineName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nom de la machine distante"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"systemUserName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nom de la session syst\xe8me ouverte sur la machine distante"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IPAddress"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Adresse IP de la machine distante"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hostType"}),(0,i.jsx)(n.td,{children:"Text (enum)"}),(0,i.jsx)(n.td,{children:'Type d\'h\xf4te. Valeurs possibles : "windows", "mac", "browser"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"creationDateTime"}),(0,i.jsx)(n.td,{children:"Text (Date ISO 8601)"}),(0,i.jsx)(n.td,{children:"Date et heure de connexion de la machine distante"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"state"}),(0,i.jsx)(n.td,{children:"Text (enum)"}),(0,i.jsx)(n.td,{children:'\xc9tat de la session. Valeurs possibles : "active", "postponed", "sleeping"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"UUID de la session"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"persistentID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"ID persistant de la session"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Cette commande renvoie la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"/docs/fr/API/SessionClass#info",children:(0,i.jsx)(n.code,{children:".info"})})," de la session ",(0,i.jsx)(n.em,{children:"sessionID"}),". Pour obtenir des informations sur la session en cours, vous pouvez appeler directement ",(0,i.jsx)(n.code,{children:"Session.info"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Voici un exemple d'objet de sortie :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n    "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",\n    "userName": "Designer",\n    "machineName": "My Computer",\n    "systemUserName": "John Doe",\n    "IPAddress": "localhost",\n    "hostType": "mac",\n    "type": "remote",\n    "state": "active",\n    "creationDateTime: "2024-09-10T09:55:54.787Z",\n    "persistentID:"8FFDAE519F1F4DCDB81E8E8DB00AD101"\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\n var $session : Object\n var $id : Integer\n $session:=Session info($id)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/API/SessionClass",children:"Session"}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/process-info",children:"Process info"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);