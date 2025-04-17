"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2011"],{310206:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"REST/{dataClass}","title":"{dataClass}","description":"Les noms de dataclass peuvent \xeatre utilis\xe9s directement dans les requ\xeates REST pour op\xe9rer avec des entit\xe9s, des s\xe9lections d\'entit\xe9s (entity selections) ou des m\xe9thodes de la dataclass.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/{dataClass}.md","sourceDirName":"REST","slug":"/REST/{dataClass}","permalink":"/docs/fr/18/REST/{dataClass}","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%7BdataClass%7D.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"{dataClass}","title":"{dataClass}"},"sidebar":"docs","previous":{"title":"$upload","permalink":"/docs/fr/18/REST/upload"},"next":{"title":"$asArray","permalink":"/docs/fr/18/REST/asArray"}}'),l=s("785893"),r=s("250065");let d={id:"{dataClass}",title:"{dataClass}"},a=void 0,i={},o=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"{dataClass}({key})",id:"dataclasskey",level:2},{value:"Description",id:"description-1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Description",id:"description-2",level:3},{value:"Exemple",id:"exemple-2",level:3},{value:"{dataClass}/{method} and {dataClass}({key})/{method}",id:"dataclassmethod-and-dataclasskeymethod",level:2},{value:"Description",id:"description-3",level:3},{value:"Configuration 4D",id:"configuration-4d",level:3},{value:"Passer des param\xe8tres \xe0 une m\xe9thode",id:"passer-des-param\xe8tres-\xe0-une-m\xe9thode",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Port\xe9e de la table",id:"port\xe9e-de-la-table",level:4},{value:"Port\xe9e enregistrement courant",id:"port\xe9e-enregistrement-courant",level:4},{value:"Port\xe9e de la s\xe9lection courante",id:"port\xe9e-de-la-s\xe9lection-courante",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Les noms de dataclass peuvent \xeatre utilis\xe9s directement dans les requ\xeates REST pour op\xe9rer avec des entit\xe9s, des s\xe9lections d'entit\xe9s (entity selections) ou des m\xe9thodes de la dataclass."}),"\n",(0,l.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Syntaxe"}),(0,l.jsx)(n.th,{children:"Exemple"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#dataclass",children:(0,l.jsx)(n.strong,{children:"{dataClass}"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/Employee"})}),(0,l.jsx)(n.td,{children:"Renvoie toutes les donn\xe9es (par d\xe9faut les 100 premi\xe8res entit\xe9s) de la dataclass"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#dataclasskey",children:(0,l.jsx)(n.strong,{children:"{dataClass}({key})"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/Employee(22)"})}),(0,l.jsx)(n.td,{children:"Renvoie les donn\xe9es de l'entit\xe9 sp\xe9cifique d\xe9finie par la cl\xe9 primaire de la dataclass"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,l.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,l.jsx)(n.td,{children:"Renvoie les donn\xe9es d'une entit\xe9 dans laquelle la valeur de l'attribut est d\xe9finie"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#dataclassmethod-and-dataclasskeymethod",children:(0,l.jsx)(n.strong,{children:"{dataClass}/{method}"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/Employee/getHighSalaries"})}),(0,l.jsx)(n.td,{children:"Ex\xe9cute une m\xe9thode projet et retourne un objet ou une collection (la m\xe9thode projet doit \xeatre expos\xe9e)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#dataclassmethod-and-dataclasskeymethod",children:(0,l.jsx)(n.strong,{children:"{dataClass}({key})/{method}"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/Employee(22)/getAge"})}),(0,l.jsx)(n.td,{children:"Renvoie une valeur bas\xe9e sur une m\xe9thode d'entit\xe9"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,l.jsxs)(n.p,{children:["Renvoie toutes les donn\xe9es (par d\xe9faut, les 100 premi\xe8res entit\xe9s) pour une dataclass sp\xe9cifique (par exemple, ",(0,l.jsx)(n.code,{children:"Soci\xe9t\xe9"}),")"]}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque vous appelez ce param\xe8tre dans votre requ\xeate REST, les 100 premi\xe8res entit\xe9s sont renvoy\xe9es, sauf si vous avez sp\xe9cifi\xe9 une valeur \xe0 l'aide de ",(0,l.jsx)(n.a,{href:"/docs/fr/18/REST/top_$limit",children:(0,l.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Voici une description des donn\xe9es retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__entityModel"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Nom de la dataclass."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__COUNT"}),(0,l.jsx)(n.td,{children:"Number"}),(0,l.jsx)(n.td,{children:"Nombre d'entit\xe9s dans la dataclass."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__SENT"}),(0,l.jsx)(n.td,{children:"Number"}),(0,l.jsxs)(n.td,{children:["Nombre d'entit\xe9s envoy\xe9es par la requ\xeate REST. Ce nombre peut \xeatre le nombre total d'entit\xe9s s'il est inf\xe9rieur \xe0 la valeur d\xe9finie par ",(0,l.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__FIRST"}),(0,l.jsx)(n.td,{children:"Number"}),(0,l.jsxs)(n.td,{children:["Num\xe9ro d'entit\xe9 \xe0 partir duquel la s\xe9lection commence. Soit 0 par d\xe9faut soit la valeur d\xe9finie par ",(0,l.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__ENTITIES"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"Cette collection d'objets contient un objet pour chaque entit\xe9 avec tous ses attributs. Tous les attributs relationnels sont renvoy\xe9s en tant qu'objets avec un URI pour obtenir des informations concernant le parent."})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Chaque entit\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__KEY"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Valeur de la cl\xe9 primaire d\xe9finie pour la dataclass."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__TIMESTAMP"}),(0,l.jsx)(n.td,{children:"Date"}),(0,l.jsx)(n.td,{children:"Horodatage de la derni\xe8re modification de l'entit\xe9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"__STAMP"}),(0,l.jsx)(n.td,{children:"Number"}),(0,l.jsxs)(n.td,{children:["Tampon interne qui est n\xe9cessaire lors de la modification des valeurs de l'entit\xe9 lors de l'utilisation de ",(0,l.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,l.jsx)(n.a,{href:"/docs/fr/18/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Par exemple :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,l.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Retourne toutes les donn\xe9es d'une dataclass sp\xe9cifique."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//plus d\'entit\xe9s ici \n    ]\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}({key})"}),"\n",(0,l.jsxs)(n.p,{children:["Renvoie les donn\xe9es de l'entit\xe9 sp\xe9cifique d\xe9finie par la cl\xe9 primaire de la dataclass, par exemple, ",(0,l.jsx)(n.code,{children:'Company (22) ou Company ("IT0911AB2200")'})]}),"\n",(0,l.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["En passant la dataclass et une cl\xe9, vous pouvez r\xe9cup\xe9rer toutes les informations publiques de cette entit\xe9. En passant la dataclass et une cl\xe9, vous pouvez r\xe9cup\xe9rer toutes les informations publiques de cette entit\xe9. Pour plus d'informations sur la d\xe9finition d'une cl\xe9 primaire, reportez-vous \xe0 la section ",(0,l.jsx)(n.strong,{children:"Modification de la cl\xe9 primaire"})," dans ",(0,l.jsx)(n.strong,{children:"l'\xe9diteur de mod\xe8le de donn\xe9es"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous souhaitez indiquer les attributs \xe0 retourner, d\xe9finissez-les \xe0 l'aide de la syntaxe suivante ",(0,l.jsx)(n.a,{href:"/docs/fr/18/REST/manData##selecting-attributes-to-get",children:"{attribut1, attribut2, ...}"}),". Par exemple :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company(1)/name,address"})}),"\n",(0,l.jsxs)(n.p,{children:["Si vous souhaitez d\xe9velopper un attribut relationnel \xe0 l'aide de ",(0,l.jsx)(n.code,{children:"$expand"}),", vous devez l'indiquer comme suit :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company(1)/name,address,staff?$expand=staff"})}),"\n",(0,l.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"La requ\xeate suivante retourne toutes les donn\xe9es publiques de la dataclass Company dont la cl\xe9 est 1."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company(1)"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,l.jsx)(n.p,{children:"Renvoie les donn\xe9es d'une entit\xe9 dans laquelle la valeur de l'attribut est d\xe9finie"}),"\n",(0,l.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["En passant la ",(0,l.jsx)(n.em,{children:"dataClass"})," et un ",(0,l.jsx)(n.em,{children:"attribut"})," avec une valeur, vous pouvez r\xe9cup\xe9rer toutes les informations publiques de cette entit\xe9. La valeur est une valeur unique pour l'attribut, mais ce n'est pas la cl\xe9 primaire."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,l.jsxs)(n.p,{children:["Si vous souhaitez indiquer les attributs \xe0 retourner, d\xe9finissez-les \xe0 l'aide de la syntaxe suivante ",(0,l.jsx)(n.a,{href:"/docs/fr/18/REST/manData##selecting-attributes-to-get",children:"{attribut1, attribut2, ...}"}),". Par exemple :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,l.jsxs)(n.p,{children:["Si vous souhaitez utiliser un attribut relationnel \xe0 l'aide de ",(0,l.jsx)(n.a,{href:"/docs/fr/18/REST/attributes",children:"$attributes"}),", vous devez l'indiquer comme suit :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,l.jsx)(n.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:'La requ\xeate suivante retourne toutes les donn\xe9es publiques de l\'employ\xe9 nomm\xe9 "Jones".'}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})}),"\n",(0,l.jsx)(n.h2,{id:"dataclassmethod-and-dataclasskeymethod",children:"{dataClass}/{method} and {dataClass}({key})/{method}"}),"\n",(0,l.jsx)(n.p,{children:"Retourne un objet ou une collection bas\xe9e sur une m\xe9thode projet."}),"\n",(0,l.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Les m\xe9thodes projet sont appel\xe9es via une dataclass (table) ou une entit\xe9 (enregistrement) et doivent retourner un objet ou une collection."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"POST  /rest/Employee/getHighSalaries"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"POST  /rest/Employee(52)/getFullName"})}),"\n",(0,l.jsx)(n.h3,{id:"configuration-4d",children:"Configuration 4D"}),"\n",(0,l.jsx)(n.p,{children:"Pour \xeatre appel\xe9e dans une requ\xeate REST, une m\xe9thode doit :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'avoir \xe9t\xe9 d\xe9clar\xe9e "Disponible via le serveur REST" dans 4D,'}),"\n",(0,l.jsxs)(n.li,{children:["avoir sa table principale et sa port\xe9e d\xe9finies en cons\xe9quence :\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Table"})," : la table 4D (c'est-\xe0-dire dataclass) sur laquelle la m\xe9thode est appel\xe9e. La table doit \xeatre ",(0,l.jsx)(n.a,{href:"/docs/fr/18/REST/configuration#exposing-tables-and-fields",children:"expos\xe9e \xe0 REST"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Port\xe9e"})," : Ce param\xe8tre est utile lorsque la m\xe9thode utilise le langage classique de 4D et doit donc avoir un contexte de base de donn\xe9es c\xf4t\xe9 serveur.\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"**Table ** - pour les m\xe9thodes appliqu\xe9es \xe0 la table enti\xe8re (dataclass)"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Current record"})," -for methods applied to the current record (entity) using the ",(0,l.jsx)(n.code,{children:"\\{dataClass\\}(key)/{method}"})," syntax."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"S\xe9lection courante"})," - pour les m\xe9thodes appliqu\xe9es \xe0 la s\xe9lection courante"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"alt-text",src:s(863779).Z+"",width:"552",height:"557"})}),"\n",(0,l.jsx)(n.h3,{id:"passer-des-param\xe8tres-\xe0-une-m\xe9thode",children:"Passer des param\xe8tres \xe0 une m\xe9thode"}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez \xe9galement passer des param\xe8tres \xe0 une m\xe9thode dans un POST."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"POST  /rest/Employee/addEmployee"})}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez POSTER des donn\xe9es dans le corps de la requ\xeate, par exemple :"}),"\n",(0,l.jsx)(n.p,{children:'["John","Smith"]'}),"\n",(0,l.jsx)(n.h3,{id:"exemples",children:"Exemples"}),"\n",(0,l.jsx)(n.h4,{id:"port\xe9e-de-la-table",children:"Port\xe9e de la table"}),"\n",(0,l.jsxs)(n.p,{children:["Appel d'une m\xe9thode ",(0,l.jsx)(n.code,{children:"getAverage"})," :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"sur la table [Employee]"}),"\n",(0,l.jsxs)(n.li,{children:["avec la port\xe9e ",(0,l.jsx)(n.strong,{children:"Table"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' //getAverage  \nALL RECORDS([Employee])\n$0:=New object("ageAverage";Average([Employee]age))\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"POST  /rest/Employee/getAverage"})}),"\n",(0,l.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "result": {\n        "ageAverage": 44.125\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"port\xe9e-enregistrement-courant",children:"Port\xe9e enregistrement courant"}),"\n",(0,l.jsxs)(n.p,{children:["Appel d'une m\xe9thode ",(0,l.jsx)(n.code,{children:"getFullName"})," :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"sur la table [Employee]"}),"\n",(0,l.jsxs)(n.li,{children:["avec la port\xe9e de ",(0,l.jsx)(n.strong,{children:"Enregistrement courant"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' //getFullName  \n$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"POST  /rest/Employee(3)/getFullName"})}),"\n",(0,l.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "result": {\n        "fullName": "John Smith"\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"port\xe9e-de-la-s\xe9lection-courante",children:"Port\xe9e de la s\xe9lection courante"}),"\n",(0,l.jsxs)(n.p,{children:["Appel d'une m\xe9thode ",(0,l.jsx)(n.code,{children:"updateSalary"})," :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"sur la table [Employee]"}),"\n",(0,l.jsxs)(n.li,{children:["avec la port\xe9e de ",(0,l.jsx)(n.strong,{children:"S\xe9lection courante"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' //updateSalary  \nC_REAL($1;$vCount)\nREAD WRITE([Employee])\n$vCount:=0\nFIRST RECORD([Employee])\nWhile (Not(End selection([Employee]))  \n [Employee]salary:=[Employee]salary * $1\n    SAVE RECORD([Employee])\n    $vCount:=$vCount+1\n    NEXT RECORD([Employee])\nEnd while \nUNLOAD RECORD([Employee])\n$0:=New object("updates";$vCount)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'POST  /rest/Employee/updateSalary/?$filter="salary<1500"'})}),"\n",(0,l.jsx)(n.p,{children:"POST data (in the request body): [1.5]"}),"\n",(0,l.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "result": {\n        "updated": 42\n    }\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},863779:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/MethodProp-81c3e8a0e2bb72d44d9ac3e5d10d4a7f.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let l={},r=t.createContext(l);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);