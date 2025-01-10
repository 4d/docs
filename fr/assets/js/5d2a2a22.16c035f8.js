"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83906"],{231482:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>u,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"REST/compute","title":"$compute","description":"Calculez des attributs sp\xe9cifiques (par exemple, Employee/salary/?$compute=sum) ou dans le cas d\'un attribut Objet (par exemple, Employee/objectAtt.property1/?$compute=sum)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$compute.md","sourceDirName":"REST","slug":"/REST/compute","permalink":"/docs/fr/18/REST/compute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"compute","title":"$compute"},"sidebar":"docs","previous":{"title":"$binary","permalink":"/docs/fr/18/REST/binary"},"next":{"title":"$distinct","permalink":"/docs/fr/18/REST/distinct"}}'),r=n("785893"),i=n("250065");let l={id:"compute",title:"$compute"},c=void 0,u={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Calculez des attributs sp\xe9cifiques (par exemple, ",(0,r.jsx)(t.code,{children:"Employee/salary/?$compute=sum)"})," ou dans le cas d'un attribut Objet (par exemple, Employee/objectAtt.property1/?$compute=sum)"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Ce param\xe8tre vous permet de r\xe9aliser des calculs avec vos donn\xe9es."}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez effectuer un calcul avec un attribut, saisissez ce qui suit :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez passer un attribut Objet, vous devez passer l'une de ses propri\xe9t\xe9s. Par exemple :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,r.jsx)(t.p,{children:"Vous pouvez utiliser l'un des mots cl\xe9s suivants :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Mot-cl\xe9"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$all"}),(0,r.jsx)(t.td,{children:"Un objet JSON qui d\xe9finit toutes les fonctions de l'attribut (moyenne, nombre, min, max et somme pour les attributs de type Num\xe9rique et count, min et max pour les attributs de type Cha\xeene"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"average"}),(0,r.jsx)(t.td,{children:"Obtenir la moyenne d'un attribut num\xe9rique"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"count"}),(0,r.jsx)(t.td,{children:"Obtenir le nombre total dans la collection ou la dataclass (dans les deux cas, vous devez sp\xe9cifier un attribut)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"Obtenir la valeur minimale d'un attribut num\xe9rique ou la plus petite valeur d'un attribut de type Cha\xeene"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"Obtenir la valeur maximale d'un attribut num\xe9rique ou la plus grande valeur d'un attribut de type Cha\xeene"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sum"}),(0,r.jsx)(t.td,{children:"Obtenir la somme d'un attribut num\xe9rique"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez obtenir tous les calculs pour un attribut de type Num\xe9rique, vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez obtenir tous les calculs pour un attribut de type Cha\xeene, vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez obtenir un calcul avec un attribut, vous pouvez \xe9crire ce qui suit :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"235000"})}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez effectuer un calcul avec un attribut Objet, vous pouvez saisir ce qui suit :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,r.jsx)(t.p,{children:"R\xe9ponse :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"45"})})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);