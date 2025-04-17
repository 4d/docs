"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40539"],{696798:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"REST/info","title":"$info","description":"Renvoie des informations sur les entity sets actuellement stock\xe9s dans le cache de 4D Server ainsi que sur les sessions utilisateur","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/REST/$info.md","sourceDirName":"REST","slug":"/REST/info","permalink":"/docs/fr/REST/info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24info.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"info","title":"$info"},"sidebar":"docs","previous":{"title":"$catalog","permalink":"/docs/fr/REST/catalog"},"next":{"title":"$singleton","permalink":"/docs/fr/REST/singleton"}}'),i=s("785893"),r=s("250065");let d={id:"info",title:"$info"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Exemple",id:"exemple",level:2}];function a(e){let n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Renvoie des informations sur les entity sets actuellement stock\xe9s dans le cache de 4D Server ainsi que sur les sessions utilisateur"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"En appelant cette requ\xeate pour votre projet, vous r\xe9cup\xe9rez des informations dans les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cacheSize"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Taille du cache du serveur 4D."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usedCache"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"La quantit\xe9 de cache du serveur 4D utilis\xe9e."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entitySetCount"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Nombre d'entity sets."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entitySet"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Une collection dans laquelle chaque objet contient des informations sur chaque entity set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ProgressInfo"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Une collection contenant des informations sur les indicateurs de progression."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionInfo"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Une collection dans laquelle chaque objet contient des informations sur chaque session utilisateur."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privileges"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:'Un objet avec une propri\xe9t\xe9 "privileges" (collection d\'objets). Chaque objet de la collection a une propri\xe9t\xe9 "privilege" avec le nom d\'un privil\xe8ge de la session utilisateur comme valeur.'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"entityset",children:"entitySet"}),"\n",(0,i.jsx)(n.p,{children:"Pour chaque s\xe9lection d'entit\xe9s stock\xe9 dans le cache de 4D Server, les informations retourn\xe9es sont les suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Un UUID qui r\xe9f\xe9rence l'entity set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataClass"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nom de la dataclass."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"selectionSize"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Nombre d'entit\xe9s dans l'entity set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sorted"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsxs)(n.td,{children:["Retourne vrai si l'ensemble a \xe9t\xe9 tri\xe9 (\xe0 l'aide de ",(0,i.jsx)(n.code,{children:"$orderby"}),") ou faux s'il n'est pas tri\xe9."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refreshed"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"Date de la cr\xe9ation ou de la derni\xe8re utilisation de l'entity set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expires"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsxs)(n.td,{children:["Date d'expiration de l'entity set (cette date/heure change chaque fois que l'entity set est actualis\xe9). La diff\xe9rence entre refreshed et expires est le timeout pour un entity set. Cette valeur correspond soit \xe0 deux heures par d\xe9faut, soit \xe0 la valeur que vous avez d\xe9finie \xe0 l'aide de ",(0,i.jsx)(n.code,{children:"$timeout"}),"."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pour plus d'informations sur la cr\xe9ation d'un entity set, reportez-vous \xe0 ",(0,i.jsx)(n.code,{children:"$method=entityset"}),". Si vous souhaitez supprimer la s\xe9lection d'entit\xe9s du cache de 4D Server, utilisez ",(0,i.jsx)(n.code,{children:"$method=release"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["4D cr\xe9e \xe9galement ses propres entity sets \xe0 des fins d'optimisation, de sorte que ceux que vous cr\xe9ez avec ",(0,i.jsx)(n.code,{children:"$method=entityset"})," ne soient pas les seuls \xe0 \xeatre retourn\xe9s."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IMPORTANT"}),"\nSi votre projet est en ",(0,i.jsx)(n.strong,{children:"mode d'acc\xe8s administrateur contr\xf4l\xe9"}),", vous devez d'abord vous connecter au projet en tant qu'utilisateur du groupe Admin."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sessioninfo",children:"sessionInfo"}),"\n",(0,i.jsxs)(n.p,{children:["Pour chaque session utilisateur, les informations suivantes sont retourn\xe9es dans la collection ",(0,i.jsx)(n.em,{children:"sessionInfo"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Un UUID qui r\xe9f\xe9rence la session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nom de l'utilisateur qui lance la session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lifeTime"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"La dur\xe9e d'une session utilisateur en secondes (3600 par d\xe9faut)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expiration"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"Date et heure d'expiration courante de la session utilisateur."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Retourne des informations sur les entity sets stock\xe9s dans le cache de 4D Server ainsi que sur les sessions utilisateur:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/$info"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [\n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Les informations de l'indicateur de progression r\xe9pertori\xe9es apr\xe8s les s\xe9lections d'entit\xe9s sont utilis\xe9es en interne par 4D."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);