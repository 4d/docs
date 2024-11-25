"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28611"],{524300:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"REST/compute","title":"$compute","description":"C\xe1lculo de atributos espec\xedficos (e., Employee/salary/?$compute=sum) o en el caso de un atributo Objeto (por ejemplo, Employee/objectAtt.property1/?$compute=sum)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$compute.md","sourceDirName":"REST","slug":"/REST/compute","permalink":"/docs/es/REST/compute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compute","title":"$compute"},"sidebar":"docs","previous":{"title":"$clean","permalink":"/docs/es/REST/clean"},"next":{"title":"$distinct","permalink":"/docs/es/REST/distinct"}}'),s=t("785893"),o=t("250065");let i={id:"compute",title:"$compute"},c=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["C\xe1lculo de atributos espec\xedficos (",(0,s.jsx)(n.em,{children:"e."}),", ",(0,s.jsx)(n.code,{children:"Employee/salary/?$compute=sum)"})," o en el caso de un atributo Objeto (",(0,s.jsx)(n.em,{children:"por ejemplo"}),", Employee/objectAtt.property1/?$compute=sum)"]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Este par\xe1metro le permite realizar c\xe1lculos sobre sus datos."}),"\n",(0,s.jsx)(n.p,{children:"Si desea realizar un c\xe1lculo sobre un atributo, escriba lo siguiente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,s.jsx)(n.p,{children:"Si desea pasar un atributo Objeto, debe pasar una de sus propiedades. Por ejemplo:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,s.jsx)(n.p,{children:"Puede utilizar cualquiera de las siguientes palabras claves:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Palabras clave"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$all"}),(0,s.jsx)(n.td,{children:"Un objeto JSON que define todas las funciones del atributo (promedio, recuento, m\xednimo, m\xe1ximo y suma para los atributos de tipo Number y count, m\xednimo y m\xe1ximo para los atributos de tipo String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"average"}),(0,s.jsx)(n.td,{children:"Obtener la media de un atributo num\xe9rico"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"Obtener el n\xfamero total en la colecci\xf3n o en la clase de datos (en ambos casos hay que especificar un atributo)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"min"}),(0,s.jsx)(n.td,{children:"Obtener el valor m\xednimo de un atributo num\xe9rico o el valor m\xe1s bajo en un atributo de tipo String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"max"}),(0,s.jsx)(n.td,{children:"Obtener el valor m\xe1ximo de un atributo num\xe9rico o el valor m\xe1s alto en un atributo de tipo String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sum"}),(0,s.jsx)(n.td,{children:"Obtener la suma de un atributo num\xe9rico"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Si desea obtener todos los c\xe1lculos de un atributo de tipo N\xfamero, puede escribir:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si desea obtener todos los c\xe1lculos de un atributo de tipo String, puede escribir:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si desea obtener un c\xe1lculo con un atributo, escriba lo siguiente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"235000"})}),"\n",(0,s.jsx)(n.p,{children:"Si desea realizar un c\xe1lculo con un atributo Objeto, escriba lo siguiente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,s.jsx)(n.p,{children:"Respuesta:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"45"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);