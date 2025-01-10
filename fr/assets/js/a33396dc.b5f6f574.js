"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32544"],{135513:function(e,t,s){s.r(t),s.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>n,assets:()=>i,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"REST/REST_requests","title":"A propos des requ\xeates REST","description":"Les structures suivantes sont prises en charge par les requ\xeates REST :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/REST_requests.md","sourceDirName":"REST","slug":"/REST/REST_requests","permalink":"/docs/fr/19/REST/REST_requests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"REST_requests","title":"A propos des requ\xeates REST"},"sidebar":"docs","previous":{"title":"Appeler des fonctions de classe ORDA","permalink":"/docs/fr/19/REST/classFunctions"},"next":{"title":"$catalog","permalink":"/docs/fr/19/REST/catalog"}}'),r=s("785893"),d=s("250065");let a={id:"REST_requests",title:"A propos des requ\xeates REST"},l=void 0,i={},o=[{value:"Statut et r\xe9ponse REST",id:"statut-et-r\xe9ponse-rest",level:2},{value:"Statut de la requ\xeate",id:"statut-de-la-requ\xeate",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:3}];function u(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Les structures suivantes sont prises en charge par les requ\xeates REST :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"URI"}),(0,r.jsx)(t.th,{children:"Resource (Input)"}),(0,r.jsx)(t.th,{children:"/? or &{filter} (Output)"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"http://{servername}:{port}/rest/"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/dataClass",children:"{dataClass}"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/filter",children:"$filter"}),", ",(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/attributes",children:"$attributes"}),", ",(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/skip",children:"$skip"}),", ",(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/method",children:"$method=..."}),"..."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/dataClass",children:"{dataClass}"}),"/",(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/method",children:"$method=..."})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/attributes",children:"$attributes"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Alors que toutes les requ\xeates REST doivent contenir les param\xe8tres URI et Resource, les filtres d'Output (qui filtrent les donn\xe9es retourn\xe9es) sont facultatifs."}),"\n",(0,r.jsx)(t.p,{children:"Comme pour tous les URI, le premier param\xe8tre est d\xe9limit\xe9 par un \xab?\xbb et tous les param\xe8tres suivants par un \xab&\xbb. Par exemple :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Vous pouvez placer toutes les valeurs entre guillemets en cas de doute. Par exemple, dans notre exemple ci-dessus, nous aurions pu saisir la valeur du nom de famille entre guillemets simples \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Les param\xe8tres vous permettent de manipuler des donn\xe9es dans des dataclass de votre projet 4D. Outre la r\xe9cup\xe9ration de donn\xe9es \xe0 l'aide des m\xe9thodes HTTP ",(0,r.jsx)(t.code,{children:"GET"}),", vous pouvez \xe9galement ajouter, mettre \xe0 jour et supprimer des entit\xe9s d'une dataclass \xe0 l'aide des m\xe9thodes HTTP ",(0,r.jsx)(t.code,{children:"POST"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Si vous souhaitez que les donn\xe9es soient retourn\xe9es dans un tableau au lieu d'un JSON, utilisez le param\xe8tre ",(0,r.jsx)(t.a,{href:"/docs/fr/19/REST/asArray",children:(0,r.jsx)(t.code,{children:"$asArray"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"statut-et-r\xe9ponse-rest",children:"Statut et r\xe9ponse REST"}),"\n",(0,r.jsx)(t.p,{children:"\xc0 chaque requ\xeate REST, le serveur retourne l'\xe9tat et une r\xe9ponse (avec ou sans erreur)."}),"\n",(0,r.jsx)(t.h3,{id:"statut-de-la-requ\xeate",children:"Statut de la requ\xeate"}),"\n",(0,r.jsx)(t.p,{children:"Avec chaque requ\xeate REST, vous obtenez le statut et la r\xe9ponse. Voici quelques exemples de statuts :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Statut"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"Requ\xeate non trait\xe9e (le serveur n'est peut-\xeatre pas \xe9t\xe9 lanc\xe9)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200 OK"}),(0,r.jsx)(t.td,{children:"Requ\xeate trait\xe9e sans erreur."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"401 Unauthorized"}),(0,r.jsx)(t.td,{children:"Erreur d'autorisation (v\xe9rifiez les autorisations de l'utilisateur)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"402 No session"}),(0,r.jsx)(t.td,{children:"Nombre maximal de sessions ayant \xe9t\xe9 atteint."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"404 Not Found"}),(0,r.jsx)(t.td,{children:"La data n'est pas accessible via REST ou bien l'ensemble d'entit\xe9s n'existe pas."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"500 Internal Server Error"}),(0,r.jsx)(t.td,{children:"Erreur lors du traitement de la requ\xeate REST."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,r.jsx)(t.p,{children:"La r\xe9ponse (au format JSON) varie en fonction de la requ\xeate."}),"\n",(0,r.jsx)(t.p,{children:"Si une erreur survient, elle sera envoy\xe9e avec la r\xe9ponse du serveur ou bien ce sera la r\xe9ponse du serveur."})]})}function c(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return a}});var n=s(667294);let r={},d=n.createContext(r);function a(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);