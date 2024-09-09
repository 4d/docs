/*! For license information please see 26d7d8a4.be81820e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88395],{602861:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(474848),n=t(28453);const l={id:"filter",title:"$filter"},i=void 0,a={id:"REST/filter",title:"$filter",description:"Permet de rechercher les donn\xe9es d'une dataclass ou d'une m\xe9thode (par exemple, $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/fr/20-R5/REST/filter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/fr/20-R5/REST/expand"},next:{title:"$format",permalink:"/docs/fr/20-R5/REST/format"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Utiliser un filtre simple",id:"utiliser-un-filtre-simple",level:3},{value:"Utiliser un filtre complexe",id:"utiliser-un-filtre-complexe",level:3},{value:"Utiliser la propri\xe9t\xe9 params",id:"utiliser-la-propri\xe9t\xe9-params",level:3},{value:"Attribut",id:"attribut",level:2},{value:"Comparateur",id:"comparateur",level:2},{value:"Exemples",id:"exemples",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Permet de rechercher les donn\xe9es d'une dataclass ou d'une m\xe9thode (par exemple, ",(0,s.jsx)(r.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Ce param\xe8tre vous permet de d\xe9finir le filtre de votre dataclass ou de votre m\xe9thode."}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-un-filtre-simple",children:"Utiliser un filtre simple"}),"\n",(0,s.jsx)(r.p,{children:"Un filtre est compos\xe9 des \xe9l\xe9ments suivants :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,s.jsxs)(r.p,{children:["Par exemple : ",(0,s.jsx)(r.code,{children:'$filter="firstName=john"'})," o\xf9 ",(0,s.jsx)(r.code,{children:"firstName"})," est l'",(0,s.jsx)(r.strong,{children:"attribut"}),", ",(0,s.jsx)(r.code,{children:"="})," est le ",(0,s.jsx)(r.strong,{children:"comparateur"})," et ",(0,s.jsx)(r.code,{children:"john"})," est la ",(0,s.jsx)(r.strong,{children:"valeur"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-un-filtre-complexe",children:"Utiliser un filtre complexe"}),"\n",(0,s.jsx)(r.p,{children:"Un filtre plus complexe est compos\xe9 des \xe9l\xe9ments suivants, qui joint deux requ\xeates:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,s.jsxs)(r.p,{children:["Par exemple : ",(0,s.jsx)(r.code,{children:'$filter="firstName=john AND salary>20000"'})," o\xf9 ",(0,s.jsx)(r.code,{children:"firstName"})," et ",(0,s.jsx)(r.code,{children:"salary"}),' sont les attributs de la dataclass "Employee".']}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-la-propri\xe9t\xe9-params",children:"Utiliser la propri\xe9t\xe9 params"}),"\n",(0,s.jsx)(r.p,{children:"Vous pouvez \xe9galement utiliser la propri\xe9t\xe9 params de 4D."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,s.jsxs)(r.p,{children:["Par exemple : ",(0,s.jsx)(r.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'"'}),' o\xf9 firstName et salary sont les attributs de la dataclass "Employee".']}),"\n",(0,s.jsxs)(r.p,{children:["Pour plus d'informations sur la fa\xe7on de rechercher des donn\xe9es dans 4D, reportez-vous \xe0 la ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R5/API/DataClassClass#query",children:"documentation de dataClass.query()"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Lorsque vous ins\xe9rez des guillemets (') ou des guillemets doubles (\"), vous devez les \xe9chapper en utilisant leur code de caract\xe8re :"}),"\n",(0,s.jsx)(r.li,{children:"Quotes ('): \\u0027"}),"\n",(0,s.jsx)(r.li,{children:'Guillemets doubles ("): \\u0022'}),"\n",(0,s.jsxs)(r.p,{children:["Par exemple, vous pouvez \xe9crire ce qui suit lors du passage d'une valeur avec un guillemet lors de l'utilisation de la propri\xe9t\xe9 ",(0,s.jsx)(r.em,{children:"params"})," :",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,s.jsxs)(r.p,{children:["Si vous passez la valeur directement, vous pouvez \xe9crire ce qui suit:\n",(0,s.jsx)(r.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"attribut",children:"Attribut"}),"\n",(0,s.jsxs)(r.p,{children:["Si l'attribut se trouve dans la m\xeame dataclass, vous pouvez simplement le passer directement (par exemple, ",(0,s.jsx)(r.code,{children:"firstName"}),"). Cependant, si vous souhaitez lancer une requ\xeate dans une autre dataclass, vous devez inclure le nom de l'attribut relationnel et le nom d'attribut, c'est-\xe0-dire le chemin d'acc\xe8s (par exemple, employeur.nom). Le nom d'attribut est sensible \xe0 la casse (",(0,s.jsx)(r.code,{children:"firstName"})," n'est pas \xe9gal \xe0 ",(0,s.jsx)(r.code,{children:"FirstName"}),")."]}),"\n",(0,s.jsx)(r.p,{children:'Vous pouvez \xe9galement rechercher des attributs de type Objet en utilisant la notation par points. Par exemple, si vous avez un attribut dont le nom est "objAttribute" avec la structure suivante :'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:"Vous pouvez rechercher dans l'objet en \xe9crivant ce qui suit :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:' GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,s.jsx)(r.h2,{id:"comparateur",children:"Comparateur"}),"\n",(0,s.jsx)(r.p,{children:"Le comparateur doit \xeatre l'une des valeurs suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Comparateur"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"="}),(0,s.jsx)(r.td,{children:"est \xe9gal \xe0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"!="}),(0,s.jsx)(r.td,{children:"diff\xe9rent de"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:">"}),(0,s.jsx)(r.td,{children:"sup\xe9rieur \xe0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"> ="}),(0,s.jsx)(r.td,{children:"sup\xe9rieur ou \xe9gal \xe0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"<"}),(0,s.jsx)(r.td,{children:"inf\xe9rieur \xe0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"<="}),(0,s.jsx)(r.td,{children:"inf\xe9rieur ou \xe9gal \xe0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"begin"}),(0,s.jsx)(r.td,{children:"commence avec"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"exemples",children:"Exemples"}),"\n",(0,s.jsx)(r.p,{children:'Dans l\'exemple suivant, nous recherchons tous les employ\xe9s dont le nom de famille commence par un "j" :'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,s.jsx)(r.p,{children:'Dans cet exemple, nous recherchons dans la dataclass "Employee" tous les employ\xe9s d\'une entreprise autre que Acmedont et dont le salaire est sup\xe9rieur \xe0 20 000 :'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,s.jsx)(r.p,{children:'Dans cet exemple, nous recherchons dans la dataclass "Person" toutes les personnes dont la propri\xe9t\xe9 num\xe9rique, de l\'attribut anotherobj de type Objet, est sup\xe9rieure \xe0 50 :'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,r,t)=>{var s=t(296540),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,l={},d=null,c=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,s)&&!o.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:c,props:l,_owner:a.current}}r.Fragment=l,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var s=t(296540);const n={},l=s.createContext(n);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);