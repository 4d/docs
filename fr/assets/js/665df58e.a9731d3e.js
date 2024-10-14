"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47686],{365618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(474848),r=t(28453);const a={id:"atomic_$atonce",title:"$atomic/$atOnce"},i=void 0,o={id:"REST/atomic_$atonce",title:"$atomic/$atOnce",description:"Autorise les actions d'une requ\xeate REST \xe0 faire partie d'une transaction. Si aucune erreur n'est g\xe9n\xe9r\xe9e, la transaction est valid\xe9e. Sinon, la transaction est annul\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/fr/18/REST/atomic_$atonce",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/fr/18/REST/asArray"},next:{title:"$attributes",permalink:"/docs/fr/18/REST/attributes"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function u(e){const n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Autorise les actions d'une requ\xeate REST \xe0 faire partie d'une transaction. Si aucune erreur n'est g\xe9n\xe9r\xe9e, la transaction est valid\xe9e. Sinon, la transaction est annul\xe9e."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Lorsque plusieurs actions sont r\xe9unies, vous pouvez utiliser ",(0,s.jsx)(n.code,{children:"$atomic/$atOnce"})," pour vous assurer qu'aucune action ne se r\xe9alise si l'une d'elle \xe9choue. Vous pouvez utiliser ",(0,s.jsx)(n.code,{children:"$atomic"})," ou ",(0,s.jsx)(n.code,{children:"$atOnce"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Nous appelons la requ\xeate REST suivante dans une transaction."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Donn\xe9es POST"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Nous obtenons l'erreur suivante dans la deuxi\xe8me entit\xe9 ; la premi\xe8re entit\xe9 n'est donc pas sauvegard\xe9e :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"M\xeame si le salaire de la premi\xe8re entit\xe9 porte la valeur 45000, cette valeur n'a pas \xe9t\xe9 sauvegard\xe9e sur le serveur et le timestamp (__STAMP)* n'a pas \xe9t\xe9 modifi\xe9. Si nous rechargeons l'entit\xe9, la valeur pr\xe9c\xe9dente s'affichera."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(296540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);