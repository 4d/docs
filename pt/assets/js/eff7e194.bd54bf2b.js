"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88317"],{423447:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>i,contentTitle:()=>o});var a=JSON.parse('{"id":"REST/catalog","title":"$catalog","description":"O cat\xe1logo descreve todos os dataclasses e atributos dispon\xedveis na datastore.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$catalog.md","sourceDirName":"REST","slug":"/REST/catalog","permalink":"/docs/pt/20/REST/catalog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"catalog","title":"$catalog"},"sidebar":"docs","previous":{"title":"API (general)","permalink":"/docs/pt/20/category/api-general"},"next":{"title":"$directory","permalink":"/docs/pt/20/REST/directory"}}'),t=s("785893"),d=s("250065");let r={id:"catalog",title:"$catalog"},o=void 0,l={},i=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Atributo(s)",id:"atributos",level:3},{value:"Chave prim\xe1ria",id:"chave-prim\xe1ria",level:3},{value:"Exemplo",id:"exemplo-2",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"O cat\xe1logo descreve todos os dataclasses e atributos dispon\xedveis na datastore."}),"\n",(0,t.jsx)(n.h2,{id:"sintaxe-dispon\xedvel",children:"Sintaxe dispon\xedvel"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sintaxe"}),(0,t.jsx)(n.th,{children:"Exemplo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#catalog",children:(0,t.jsx)(n.strong,{children:"$catalog"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/$catalog"})}),(0,t.jsx)(n.td,{children:"Devolve uma lista dos valores de refer\xeancia do seu projecto juntamente com dois URIs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#catalogall",children:(0,t.jsx)(n.strong,{children:"$catalog/$all"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/$catalog/$all"})}),(0,t.jsx)(n.td,{children:"Devolve informa\xe7\xe3o sobre todos os dataclasses do seu projecto e os seus atributos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#catalogdataclass",children:(0,t.jsx)(n.strong,{children:"$catalog/{dataClass}"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/$catalog/Employee"})}),(0,t.jsx)(n.td,{children:"Retorna informa\xe7\xe3o sobre um dataclass e os seus atributos"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"catalog",children:"$catalog"}),"\n",(0,t.jsx)(n.p,{children:"Devolve uma lista dos dados do seu projecto juntamente com dois URIs: um para aceder \xe0 informa\xe7\xe3o sobre a sua estrutura e outro para recuperar os dados no dataclass"}),"\n",(0,t.jsx)(n.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["Quando chama ",(0,t.jsx)(n.code,{children:"$catalog"}),", \xe9 devolvida uma lista dos dataclasses juntamente com dois URIs para cada dataclass no datastore do seu projecto."]}),"\n",(0,t.jsxs)(n.p,{children:["Nesta lista apenas s\xe3o mostrados os dataclasses expostos para a datastore do seu projecto. Para mais informa\xe7\xf5es, consulte por favor ",(0,t.jsx)(n.a,{href:"/docs/pt/20/REST/configuration#exposing-tables-and-fields",children:(0,t.jsx)(n.strong,{children:"sec\xe7\xe3o de tabelas e campos de exposi\xe7\xe3o"})})," ."]}),"\n",(0,t.jsx)(n.p,{children:"Aqui est\xe1 uma descri\xe7\xe3o das propriedades devolvidas para cada dataclass na datastore do seu projecto:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nome da dataclass."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Um URI que lhe permite obter informa\xe7\xf5es sobre o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataURI"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Uma URI que lhe permite visualizar os dados no dataclass."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET  /rest/$catalog"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,t.jsx)(n.p,{children:"Devolve informa\xe7\xe3o sobre todos os dataclasses do seu projecto e os seus atributos"}),"\n",(0,t.jsx)(n.h3,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["Chamando ",(0,t.jsx)(n.code,{children:"$catalog/$all"})," pode reciber informa\xe7\xe3o detalhada sobre os atributos de cada uma das classes de dados do modelo ativo de projeto."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,t.jsx)(n.a,{href:"#catalogdataClass",children:(0,t.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n\n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path":\n'})}),"\n",(0,t.jsx)(n.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,t.jsx)(n.p,{children:"Retorna informa\xe7\xe3o sobre um dataclass e os seus atributos"}),"\n",(0,t.jsx)(n.h3,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["Calling ",(0,t.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})," for a specific dataclass will return the following information about the dataclass and the attributes it contains. Se quiser recuperar essa informa\xe7\xe3o para todas as classes de dados do armaz\xe9m de dados de seu projeto, use ",(0,t.jsx)(n.a,{href:"#catalogall",children:(0,t.jsx)(n.code,{children:"$catalog/$all"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A informa\xe7\xe3o que recupera diz respeito ao seguinte:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dataclass"}),"\n",(0,t.jsx)(n.li,{children:"Atributo(s)"}),"\n",(0,t.jsx)(n.li,{children:"M\xe9todo(s), caso exista(m)"}),"\n",(0,t.jsx)(n.li,{children:"Chave prim\xe1ria"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,t.jsx)(n.p,{children:"As seguintes propriedades s\xe3o devolvidas para um dataclass exposto:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nome da dataclass"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"collectionName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nome de uma selec\xe7\xe3o de entidade no dataclass"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableNumber"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"N\xfamero da tabela na base de dados 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["Alcance da classe de dados (lembre que s\xf3 s\xe3o mostradas as classes de dados cujo ",(0,t.jsx)(n.strong,{children:"Alcance"})," for p\xfablico)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataURI"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Um URI para os dados no dataclass"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"atributos",children:"Atributo(s)"}),"\n",(0,t.jsx)(n.p,{children:"Aqui est\xe3o as propriedades para cada atributo exposto que s\xe3o devolvidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"o nome de atributo."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kind"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Tipo de atributo (armazenamento ou relatedEntity)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fieldPos"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o do campo na tabela da base de dados)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\xc2mbito do atributo (apenas aparecer\xe3o os atributos cujo \xe2mbito seja P\xfablico)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indexed"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["Se algum ",(0,t.jsx)(n.strong,{children:"Index Kind"})," foi seleccionado, esta propriedade voltar\xe1 a ser verdadeira. Caso contr\xe1rio, esta propriedade n\xe3o aparece."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Tipo de atributo (booleano, blob, byte, data, dura\xe7\xe3o, imagem, long, long64, n\xfamero, string, uuid ou palavra) ou a classe de dados para um atributo de rela\xe7\xe3o N->1."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifying"}),(0,t.jsx)(n.td,{children:"Par\xe2metros"}),(0,t.jsx)(n.td,{children:"Esta propriedade retorna True se o atributo for a chave prim\xe1ria. Caso contr\xe1rio, esta propriedade n\xe3o aparece."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nome da rela\xe7\xe3o de um atributo relatedEntity ou relateEntities."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"foreignKey"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"foreignKey"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"inverseName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"inverseName"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"chave-prim\xe1ria",children:"Chave prim\xe1ria"}),"\n",(0,t.jsxs)(n.p,{children:["O objeto chave devolve o nome do atributo ",(0,t.jsx)(n.strong,{children:"name"})," definido como ",(0,t.jsx)(n.strong,{children:"chave prim\xe1ria"})," para a classe de dados."]}),"\n",(0,t.jsx)(n.h3,{id:"exemplo-2",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Pode recuperar a informa\xe7\xe3o relativa a uma classe de dados espec\xedfica."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name:\n'})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var a=s(667294);let t={},d=a.createContext(t);function r(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);