"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74791"],{586666:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"REST/dataClass","title":"dataClass","description":"Les noms de dataclass peuvent \xeatre utilis\xe9s directement dans les requ\xeates REST pour op\xe9rer avec des entit\xe9s, des s\xe9lections d\'entit\xe9s (entity selections) ou des fonctions de classe (class functions) de la dataclass.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/REST/dataClass.md","sourceDirName":"REST","slug":"/REST/dataClass","permalink":"/docs/fr/REST/dataClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FdataClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dataClass","title":"dataClass"},"sidebar":"docs","previous":{"title":"API (dataClass)","permalink":"/docs/fr/category/api-dataclass"},"next":{"title":"$asArray","permalink":"/docs/fr/REST/asArray"}}'),i=s("785893"),r=s("250065");let d={id:"dataClass",title:"dataClass"},a=void 0,l={},c=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"{dataClass}[{key}]",id:"dataclasskey",level:2},{value:"Description",id:"description-1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Description",id:"description-2",level:3},{value:"Exemple",id:"exemple-2",level:3}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Les noms de dataclass peuvent \xeatre utilis\xe9s directement dans les requ\xeates REST pour op\xe9rer avec des entit\xe9s, des s\xe9lections d'entit\xe9s (entity selections) ou des fonctions de classe (class functions) de la dataclass."}),"\n",(0,i.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Syntaxe"}),(0,i.jsx)(n.th,{children:"Exemple"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#dataClass",children:(0,i.jsx)(n.strong,{children:"{dataClass}"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/Employee"})}),(0,i.jsx)(n.td,{children:"Renvoie toutes les donn\xe9es (par d\xe9faut les 100 premi\xe8res entit\xe9s) de la dataclass"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#dataclasskey",children:(0,i.jsx)(n.strong,{children:"{dataClass}[{key}]"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/Employee[22]"})}),(0,i.jsx)(n.td,{children:"Renvoie les donn\xe9es de l'entit\xe9 sp\xe9cifique d\xe9finie par la cl\xe9 primaire de la dataclass"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,i.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,i.jsx)(n.td,{children:"Renvoie les donn\xe9es d'une entit\xe9 dans laquelle la valeur de l'attribut est d\xe9finie"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/REST/classFunctions#function-calls",children:(0,i.jsx)(n.strong,{children:"{dataClass}/{DataClassClassFunction}"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/City/getCity"})}),(0,i.jsx)(n.td,{children:"Ex\xe9cute une fonction de classe d'une dataclass"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/REST/classFunctions#function-calls",children:(0,i.jsx)(n.strong,{children:"{dataClass}/{EntitySelectionClassFunction}"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'/City/getPopulation/?$filter="ID<3"'})}),(0,i.jsx)(n.td,{children:"Ex\xe9cute une fonction de classe d'une s\xe9lection d'entit\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/REST/classFunctions#function-calls",children:(0,i.jsx)(n.strong,{children:"{dataClass}[{key}]/{EntityClassFunction}"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"City(2)/getPopulation"})}),(0,i.jsx)(n.td,{children:"Ex\xe9cute une fonction de classe d'une entit\xe9"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Les appels de fonction sont d\xe9tailles dans la section ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/classFunctions",children:"Appeler des fonctions de classe ORDA"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,i.jsxs)(n.p,{children:["Renvoie toutes les donn\xe9es (par d\xe9faut, les 100 premi\xe8res entit\xe9s) pour une dataclass sp\xe9cifique (par exemple, ",(0,i.jsx)(n.code,{children:"Soci\xe9t\xe9"}),")"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/top_$limit",children:(0,i.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Voici une description des donn\xe9es retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__entityModel"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nom de la dataclass."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__COUNT"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Nombre d'entit\xe9s dans la dataclass."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__SENT"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Nombre d'entit\xe9s envoy\xe9es par la requ\xeate REST. Ce nombre peut \xeatre le nombre total d'entit\xe9s s'il est inf\xe9rieur \xe0 la valeur d\xe9finie par ",(0,i.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__FIRST"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Num\xe9ro d'entit\xe9 \xe0 partir duquel la s\xe9lection commence. Soit 0 par d\xe9faut soit la valeur d\xe9finie par ",(0,i.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__ENTITIES"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Cette collection d'objets contient un objet pour chaque entit\xe9 avec tous ses attributs. Tous les attributs relationnels sont renvoy\xe9s en tant qu'objets avec un URI pour obtenir des informations concernant le parent."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Chaque entit\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__KEY"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Valeur de la cl\xe9 primaire d\xe9finie pour la dataclass."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__TIMESTAMP"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"Horodatage de la derni\xe8re modification de l'entit\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__STAMP"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Tampon interne qui est n\xe9cessaire lors de la modification des valeurs de l'entit\xe9 lors de l'utilisation de ",(0,i.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Par exemple :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,i.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Retourne toutes les donn\xe9es d'une dataclass sp\xe9cifique."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//plus d\'entit\xe9s ici \n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}[{key}]"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the data for the specific entity defined by the dataclass's primary key, ",(0,i.jsx)(n.em,{children:"e.g."}),", ",(0,i.jsx)(n.code,{children:"Company[22]"})," or ",(0,i.jsx)(n.code,{children:"Company[IT0911AB2200]"})]}),"\n",(0,i.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["En passant la dataclass et une cl\xe9, vous pouvez r\xe9cup\xe9rer toutes les informations publiques de cette entit\xe9. En passant la dataclass et une cl\xe9, vous pouvez r\xe9cup\xe9rer toutes les informations publiques de cette entit\xe9. Pour plus d'informations sur la d\xe9finition d'une cl\xe9 primaire, reportez-vous \xe0 la section ",(0,i.jsx)(n.strong,{children:"Modification de la cl\xe9 primaire"})," dans ",(0,i.jsx)(n.strong,{children:"l'\xe9diteur de mod\xe8le de donn\xe9es"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the data returned, refer to ",(0,i.jsx)(n.a,{href:"#dataclass",children:"{dataClass}"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Par exemple :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company(1)/name,address"})}),"\n",(0,i.jsxs)(n.p,{children:["Si vous souhaitez d\xe9velopper un attribut relationnel \xe0 l'aide de ",(0,i.jsx)(n.code,{children:"$expand"}),", vous devez l'indiquer comme suit :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company(1)/name,address,staff?$expand=staff"})}),"\n",(0,i.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"La requ\xeate suivante retourne toutes les donn\xe9es publiques de la dataclass Company dont la cl\xe9 est 1."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company[1]"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,i.jsx)(n.p,{children:"Renvoie les donn\xe9es d'une entit\xe9 dans laquelle la valeur de l'attribut est d\xe9finie"}),"\n",(0,i.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["En passant la ",(0,i.jsx)(n.em,{children:"dataClass"})," et un ",(0,i.jsx)(n.em,{children:"attribut"})," avec une valeur, vous pouvez r\xe9cup\xe9rer toutes les informations publiques de cette entit\xe9. La valeur est une valeur unique pour l'attribut, mais ce n'est pas la cl\xe9 primaire."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Par exemple :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,i.jsxs)(n.p,{children:["Si vous souhaitez utiliser un attribut relationnel \xe0 l'aide de ",(0,i.jsx)(n.a,{href:"/docs/fr/REST/attributes",children:"$attributes"}),", vous devez l'indiquer comme suit :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,i.jsx)(n.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:'La requ\xeate suivante retourne toutes les donn\xe9es publiques de l\'employ\xe9 nomm\xe9 "Jones".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);