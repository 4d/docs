"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44520"],{698940:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>l});var o=JSON.parse('{"id":"REST/filter","title":"$filter","description":"Permite consultar los datos de una clase de datos o de un m\xe9todo (p. ej., $filter=\\"firstName!=\'\' AND salary>30000\\")","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/REST/$filter.md","sourceDirName":"REST","slug":"/REST/filter","permalink":"/docs/pt/20-R8/REST/filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"filter","title":"$filter"},"sidebar":"docs","previous":{"title":"$expand","permalink":"/docs/pt/20-R8/REST/expand"},"next":{"title":"$format","permalink":"/docs/pt/20-R8/REST/format"}}'),t=s("785893"),n=s("250065");let i={id:"filter",title:"$filter"},l=void 0,a={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Utilizar um filtro simples",id:"utilizar-um-filtro-simples",level:3},{value:"Utilizar um filtro complexo",id:"utilizar-um-filtro-complexo",level:3},{value:"Utilizar a propriedade params",id:"utilizar-a-propriedade-params",level:3},{value:"Atributo",id:"atributo",level:2},{value:"Comparador",id:"comparador",level:2},{value:"Exemplos",id:"exemplos",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Permite consultar los datos de una clase de datos o de un m\xe9todo ",(0,t.jsx)(r.em,{children:"(p. ej."}),", ",(0,t.jsx)(r.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(r.p,{children:"Este par\xe2metro permite-lhe definir o filtro para a sua dataclass ou m\xe9todo."}),"\n",(0,t.jsx)(r.h3,{id:"utilizar-um-filtro-simples",children:"Utilizar um filtro simples"}),"\n",(0,t.jsx)(r.p,{children:"Um filtro \xe9 composto pelos seguintes elementos:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,t.jsxs)(r.p,{children:["Por ejemplo: ",(0,t.jsx)(r.code,{children:'$filter="firstName=john"'})," donde ",(0,t.jsx)(r.code,{children:"firstName"})," es el ",(0,t.jsx)(r.strong,{children:"atributo"}),", ",(0,t.jsx)(r.code,{children:"="})," es el ",(0,t.jsx)(r.strong,{children:"comparador"})," y ",(0,t.jsx)(r.code,{children:"john"})," es el ",(0,t.jsx)(r.strong,{children:"valor"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"utilizar-um-filtro-complexo",children:"Utilizar um filtro complexo"}),"\n",(0,t.jsx)(r.p,{children:"A more complex filter is composed of the following elements, which joins two queries:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,t.jsxs)(r.p,{children:["Por ejemplo: ",(0,t.jsx)(r.code,{children:'$filter="firstName=john AND salary>20000"'})," donde ",(0,t.jsx)(r.code,{children:"firstName"})," y ",(0,t.jsx)(r.code,{children:"salary"})," son atributos de la clase de datos Employee."]}),"\n",(0,t.jsx)(r.h3,{id:"utilizar-a-propriedade-params",children:"Utilizar a propriedade params"}),"\n",(0,t.jsx)(r.p,{children:"Tamb\xe9m pode usar a propriedade params de 4D."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,t.jsxs)(r.p,{children:["Por ejemplo: ",(0,t.jsx)(r.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\''})," donde firstName y salary son los atributos de la clase de datos Employee."]}),"\n",(0,t.jsxs)(r.p,{children:["Para m\xe1s informaci\xf3n sobre c\xf3mo consultar datos en 4D, consulte la documentaci\xf3n de ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/API/DataClassClass#query",children:"dataClass.query()"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Ao inserir aspas (') ou aspas duplas (\"), deve escapar-lhes utilizando o seu c\xf3digo de caracteres:"}),"\n",(0,t.jsx)(r.li,{children:"Aspas ('): \\u0027"}),"\n",(0,t.jsx)(r.li,{children:"Quotes ('): \\u0027 Double quotes (\"): \\u0022"}),"\n",(0,t.jsxs)(r.p,{children:["For example, you can write the following when passing a value with a quote when using the ",(0,t.jsx)(r.em,{children:"params"})," property:",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass the value directly, you can write the following:\n",(0,t.jsx)(r.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"atributo",children:"Atributo"}),"\n",(0,t.jsxs)(r.p,{children:["Si el atributo est\xe1 en la misma clase de datos, puede pasarlo directamente (",(0,t.jsx)(r.em,{children:"p. ej."}),", ",(0,t.jsx)(r.code,{children:"firstName"}),"). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (",(0,t.jsx)(r.em,{children:"por ejemplo"}),", nombre.empleador). El nombre del atributo distingue entre may\xfasculas y min\xfasculas (",(0,t.jsx)(r.code,{children:"firstName"})," no es igual a ",(0,t.jsx)(r.code,{children:"FirstName"}),")."]}),"\n",(0,t.jsx)(r.p,{children:'Tamb\xe9m \xe9 poss\xedvel consultar atributos do tipo Object utilizando a nota\xe7\xe3o de ponto. Por exemplo, se tiver um atributo cujo nome \xe9 "objAttribute" com a seguinte estrutura:'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\xc9 poss\xedvel pesquisar no objeto escrevendo o seguinte:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:' GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,t.jsx)(r.h2,{id:"comparador",children:"Comparador"}),"\n",(0,t.jsx)(r.p,{children:"O comparador deve ser um dos seguintes valores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Comparador"}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"="}),(0,t.jsx)(r.td,{children:"\xe9 igual a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"!="}),(0,t.jsx)(r.td,{children:"diferente de"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:">"}),(0,t.jsx)(r.td,{children:"maior que"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"> ="}),(0,t.jsx)(r.td,{children:"maior ou igual a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"<"}),(0,t.jsx)(r.td,{children:"menor que"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"<="}),(0,t.jsx)(r.td,{children:"menor que ou igual a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"begin"}),(0,t.jsx)(r.td,{children:"come\xe7a com"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,t.jsx)(r.p,{children:'No exemplo seguinte, procuramos todos os empregados cujo apelido come\xe7a por "j":'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Nesse exemplo pesquisamos na classe de dados Empregado todos os empregados cujo sal\xe1rio seja superior a  20.000 e que n\xe3o trabalhem para uma empresa chamada Acme:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Neste exemplo, buscamos na classe de dados Person todas as pessoas cuja propriedade n\xfamero no atributo anotherobj de tipo Object for maior que 50:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return l},a:function(){return i}});var o=s(667294);let t={},n=o.createContext(t);function i(e){let r=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);