"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2994"],{468295:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/get-resource","title":"GET RESOURCE","description":"GET RESOURCE ( resType ; resNum ; resDonn\xe9es {; resFichier} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource","permalink":"/docs/fr/20-R7/commands/get-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-resource","title":"GET RESOURCE","slug":"/commands/get-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE RESOURCE","permalink":"/docs/fr/20-R7/commands/get-picture-resource"},"next":{"title":"Get resource name","permalink":"/docs/fr/20-R7/commands/get-resource-name"}}'),t=r("785893"),d=r("250065");let i={id:"get-resource",title:"GET RESOURCE",slug:"/commands/get-resource",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Ind\xe9pendance de plate-forme",id:"ind\xe9pendance-de-plate-forme",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET RESOURCE"})," ( ",(0,t.jsx)(s.em,{children:"resType"})," ; ",(0,t.jsx)(s.em,{children:"resNum"})," ; ",(0,t.jsx)(s.em,{children:"resDonn\xe9es"})," {; ",(0,t.jsx)(s.em,{children:"resFichier"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resType"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Type de ressource (4 caract\xe8res)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resNum"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de ressource"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resDonn\xe9es"}),(0,t.jsx)(s.td,{children:"Blob"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Champ ou variable BLOB devant recevoir les donn\xe9es"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Contenu de la ressource"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFichier"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fichier de ressources ou Tous les fichiers de ressources ouverts si omis"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"GET RESOURCE"})," retourne dans le champ ou la variable BLOB ",(0,t.jsx)(s.em,{children:"resDonn\xe9es"})," le contenu de la ressource dont le type et le num\xe9ro sont pass\xe9s dans ",(0,t.jsx)(s.em,{children:"resType"})," et ",(0,t.jsx)(s.em,{children:"resNum"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important :"})," Vous devez passer une cha\xeene de 4 caract\xe8res dans ",(0,t.jsx)(s.em,{children:"resType"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si la ressource n'est pas trouv\xe9e, le param\xe8tre ",(0,t.jsx)(s.em,{children:"resDonn\xe9es"})," est laiss\xe9 inchang\xe9 et la variable OK prend la valeur 0 (z\xe9ro)."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressources valide dans ",(0,t.jsx)(s.em,{children:"resFichier"}),", la ressource sera recherch\xe9e dans ce fichier seulement. Si ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"}),", la premi\xe8re occurrence de la ressource trouv\xe9e en remontant la cha\xeene des fichiers de ressources sera retourn\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," La taille d'une ressource peut atteindre plusieurs m\xe9ga-octets."]}),"\n",(0,t.jsx)(s.h2,{id:"ind\xe9pendance-de-plate-forme",children:"Ind\xe9pendance de plate-forme"}),"\n",(0,t.jsxs)(s.p,{children:["Rappelez-vous que vous travaillez avec des ressources issues de Mac OS. Quelle que soit la plate-forme utilis\xe9e, les valeurs internes des ressources comme des entiers longs sont stock\xe9es avec l'ordre d'octets (\"byte ordering\") Mac OS. Sous Windows, pour les donn\xe9es des ressources standard (telles que les ressources listes de cha\xeenes et les ressources images) l'ordre des octets est automatiquement invers\xe9 (\"byte swapping\") si n\xe9cessaire. D'un autre c\xf4t\xe9, si vous cr\xe9ez et utilisez vos propres structures internes de donn\xe9es, c'est \xe0 vous d'effectuer l'inversion d'octets des donn\xe9es lorsque vous les extrayez d'un BLOB (par exemple en passant Macintosh byte ordering \xe0 une commande telle que ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/blob-to-longint",children:"BLOB to longint"}),")."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Reportez-vous \xe0 l'exemple de la commande ."}),"\n",(0,t.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"Si la ressource est trouv\xe9e, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0 (z\xe9ro)."}),"\n",(0,t.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["S'il n'y a pas assez de m\xe9moire disponible pour charger l'image, une erreur est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode de gestion d'erreurs install\xe9e par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Ressources"})}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"508"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return i}});var n=r(667294);let t={},d=n.createContext(t);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);