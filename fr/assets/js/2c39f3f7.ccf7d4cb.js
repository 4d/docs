"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13009"],{604057:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"API/WebFormClass","title":"WebForm","description":"La classe WebForm contient des fonctions et des propri\xe9t\xe9s permettant de g\xe9rer vos composants de webforms Qodly. Cette classe est d\xe9crite en d\xe9tail dans la documentation de Qodly.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/API/WebFormClass.md","sourceDirName":"API","slug":"/API/WebFormClass","permalink":"/docs/fr/20-R7/API/WebFormClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"WebFormClass","title":"WebForm"},"sidebar":"docs","previous":{"title":"SystemWorker","permalink":"/docs/fr/20-R7/API/SystemWorkerClass"},"next":{"title":"WebFormItem","permalink":"/docs/fr/20-R7/API/WebFormItemClass"}}'),t=s("785893"),i=s("250065");let d={id:"WebFormClass",title:"WebForm"},l=void 0,o={},c=[{value:"Commandes et fonctions",id:"commandes-et-fonctions",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Description",id:"description",level:4},{value:".disableState()",id:"disablestate",level:3},{value:"Description",id:"description-1",level:4},{value:".enableState()",id:"enablestate",level:3},{value:"Description",id:"description-2",level:4},{value:"Exemple",id:"exemple",level:4},{value:".setError()",id:"seterror",level:3},{value:"Description",id:"description-3",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Description",id:"description-4",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Description",id:"description-5",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Description",id:"description-6",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Description",id:"description-7",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["La classe ",(0,t.jsx)(n.code,{children:"WebForm"})," contient des fonctions et des propri\xe9t\xe9s permettant de g\xe9rer vos composants de webforms Qodly. Cette classe est d\xe9crite en d\xe9tail dans la ",(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass",children:"documentation de Qodly"}),"."]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R6"}),(0,t.jsx)(n.td,{children:"Ajout de enableState() et disableState()"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R2"}),(0,t.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"commandes-et-fonctions",children:"Commandes et fonctions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:["[",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:".componentName"})})," : ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/API/WebFormItemClass",children:"4D.WebFormItem"}),"](#componentname)",(0,t.jsx)(n.br,{}),"objets disponibles directement en tant que propri\xe9t\xe9s"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#disablestate",children:[(0,t.jsx)(n.strong,{children:".disableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string)"]}),(0,t.jsx)(n.br,{}),"d\xe9sactive le rendu de l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," dans le formulaire web courant"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#enablestate",children:[(0,t.jsx)(n.strong,{children:".enableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string )"]}),(0,t.jsx)(n.br,{}),"active le rendu de l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," dans le formulaire web courant"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#seterror",children:[(0,t.jsx)(n.strong,{children:".setError"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),(0,t.jsx)(n.br,{}),"envoie ",(0,t.jsx)(n.em,{children:"msg"})," en tant que message d'erreur vers le formulaire web"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#setmessage",children:[(0,t.jsx)(n.strong,{children:".setMessage"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),(0,t.jsx)(n.br,{}),"envoie ",(0,t.jsx)(n.em,{children:"msg"})," en tant que message d'information au formulaire web"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#setwarning",children:[(0,t.jsx)(n.strong,{children:".setWarning"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),(0,t.jsx)(n.br,{}),"envoie ",(0,t.jsx)(n.em,{children:"msg"})," en tant que message d'avertissement au formulaire web"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#web-form",children:[(0,t.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),(0,t.jsx)(n.br,{})," renvoie un objet proxy ",(0,t.jsx)(n.code,{children:"4D.WebForm"})," qui vous permet d'interagir avec le formulaire web"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#web-event",children:[(0,t.jsx)(n.strong,{children:"Web Event"})," : object"]}),(0,t.jsx)(n.br,{}),"renvoie un objet contenant des informations sur un \xe9v\xe9nement d\xe9clench\xe9 li\xe9 \xe0 un composant de formulaire web"]})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"componentname",children:(0,t.jsx)(n.em,{children:".componentName"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:".componentName"})})," : ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/API/WebFormItemClass",children:"4D.WebFormItem"})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Les composants des webforms sont des objets disponibles directement en tant que propri\xe9t\xe9s de ces webforms."}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la description de ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname",children:[(0,t.jsx)(n.code,{children:".componentName"})," dans la documentation de Qodly"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"disablestate",children:".disableState()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".disableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"state"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Nom de l'\xe9tat \xe0 d\xe9sactiver dans le formulaire web"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.code,{children:".disableState()"})," d\xe9sactive le rendu de l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," dans le formulaire web courant."]}),"\n",(0,t.jsx)(n.p,{children:"Cette fonction ne fait rien si :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," n'est actuellement pas activ\xe9 dans le formulaire web,"]}),"\n",(0,t.jsxs)(n.li,{children:["l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," n'existe pas pour le formulaire web."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ",(0,t.jsx)(n.a,{href:"#enablestate",children:"activez"})," ou d\xe9sactivez plusieurs \xe9tats dans la m\xeame fonction utilisateur, toutes les modifications sont envoy\xe9es en m\xeame temps au client une fois que la fonction se termine."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations sur les \xe9tats des pages Qodly, veuillez consulter ",(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/pageLoaders/states",children:"developer.qodly.com"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"enablestate",children:".enableState()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".enableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"state"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Nom de l'\xe9tat \xe0 activer sur le formulaire web"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.code,{children:".enableState()"})," active le rendu de l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," dans le formulaire web courant."]}),"\n",(0,t.jsx)(n.p,{children:"Cette fonction ne fait rien si :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," a d\xe9j\xe0 \xe9t\xe9 activ\xe9 sur le formulaire web,"]}),"\n",(0,t.jsxs)(n.li,{children:["l'",(0,t.jsx)(n.em,{children:"\xe9tat"})," n'existe pas pour le formulaire web."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous activez ou ",(0,t.jsx)(n.a,{href:"#disablestate",children:"d\xe9sactivez"})," plusieurs \xe9tats dans la m\xeame fonction utilisateur, toutes les modifications sont envoy\xe9es en m\xeame temps au client une fois que la fonction se termine."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations sur les \xe9tats des pages Qodly, veuillez consulter ",(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/pageLoaders/states",children:"developer.qodly.com"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:'Vous activez un \xe9tat sp\xe9cifique appel\xe9 "wrongCredentials" en cas d\'erreur sur votre page de connexion :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'Function authenticationError()\n	If (Session.info.type#"remote")\n		Web Form.enableState("wrongCredentials")\n	End if\n'})}),"\n",(0,t.jsx)(n.h3,{id:"seterror",children:".setError()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".setError"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"msg"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Message d'erreur \xe0 afficher dans le webform"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.code,{children:".setError()"})," envoie ",(0,t.jsx)(n.em,{children:"msg"})," en tant que message d'erreur vers le formulaire web."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror",children:["description de la fonction ",(0,t.jsx)(n.code,{children:".setError()"})," dans la documentation de Qodly"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"setmessage",children:".setMessage()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".setMessage"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"msg"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Message d'information \xe0 afficher dans le webform"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.code,{children:".setMessage()"})," envoie ",(0,t.jsx)(n.em,{children:"msg"})," en tant que message d'information au formulaire web."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage",children:["description de la m\xe9thode ",(0,t.jsx)(n.code,{children:".setMessage()"})," dans la documentation de Qodly"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"setwarning",children:".setWarning()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".setWarning"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"msg"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Message d'avertissement \xe0 afficher dans le webform"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.code,{children:".setWarning()"})," envoie ",(0,t.jsx)(n.em,{children:"msg"})," en tant que message d'avertissement au formulaire web."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning",children:["description de la m\xe9thode ",(0,t.jsx)(n.code,{children:".setWarning()"})," dans la documentation de Qodly"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"web-form",children:"Web Form"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"4D.WebForm"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsxs)(n.td,{children:["Nouvel objet proxy ",(0,t.jsx)(n.code,{children:"WebForm"})]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"Web Form"}),"  renvoie un objet proxy ",(0,t.jsx)(n.code,{children:"4D.WebForm"})," qui vous permet d'interagir avec le formulaire web."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webform",children:["description de la commande ",(0,t.jsx)(n.code,{children:"webForm"})," dans la documentation de Qodly"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"web-event",children:"Web Event"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Web Event"})," : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"object"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"Web Event"})," renvoie un objet contenant des informations sur un \xe9v\xe9nement d\xe9clench\xe9 li\xe9 \xe0 un composant de formulaire web."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent",children:["description de la commande ",(0,t.jsx)(n.code,{children:"webEvent"})," dans la documentation de Qodly"]}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);