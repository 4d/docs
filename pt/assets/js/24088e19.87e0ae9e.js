/*! For license information please see 24088e19.87e0ae9e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33422],{492548:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=o(474848),n=o(28453);const s={id:"compute",title:"$compute"},c=void 0,i={id:"REST/compute",title:"$compute",description:"Calcular em atributos espec\xedficos (por exemplo, Employee/salary/?$compute=sum) ou no caso de um atributo de objeto (por exemplo., Employee/objectAtt.property1/?$compute=sum)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/pt/20/REST/compute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/pt/20/REST/binary"},next:{title:"$distinct",permalink:"/docs/pt/20/REST/distinct"}},d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function a(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Calcular em atributos espec\xedficos (",(0,r.jsx)(t.em,{children:"por exemplo"}),", ",(0,r.jsx)(t.code,{children:"Employee/salary/?$compute=sum)"})," ou no caso de um atributo de objeto (",(0,r.jsx)(t.em,{children:"por exemplo."}),", Employee/objectAtt.property1/?$compute=sum)"]}),"\n",(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(t.p,{children:"Este par\xe2metro permite-lhe efetuar c\xe1lculos sobre os seus dados."}),"\n",(0,r.jsx)(t.p,{children:"Para efetuar um c\xe1lculo sobre um atributo, escreve-se o seguinte:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsx)(t.p,{children:"Se quiser passar um atributo de Objeto, tem de passar uma das suas propriedades. Por exemplo:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,r.jsx)(t.p,{children:"Pode utilizar qualquer uma das seguintes palavras-chave:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Palavra-chave"}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$all"}),(0,r.jsx)(t.td,{children:"Um objeto JSON que define todas as fun\xe7\xf5es para o atributo (m\xe9dia, contagem, m\xednimo, m\xe1ximo e soma para atributos do tipo N\xfamero e contagem, m\xednimo e m\xe1ximo para atributos do tipo Cadeia"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"average"}),(0,r.jsx)(t.td,{children:"Obter a m\xe9dia de um atributo num\xe9rico"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"count"}),(0,r.jsx)(t.td,{children:"Obter o n\xfamero total na cole\xe7\xe3o ou na classe de dados (em ambos os casos h\xe1 que especificar um atributo)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"Obter o valor m\xednimo num atributo num\xe9rico ou o valor mais baixo num atributo do tipo String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"Obter o valor m\xe1ximo num atributo num\xe9rico ou o valor mais alto num atributo do tipo String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sum"}),(0,r.jsx)(t.td,{children:"Obter a soma de um atributo num\xe9rico"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"Se quiser obter todos os c\xe1lculos para um atributo do tipo N\xfamero, pode escrever:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Resposta"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Se quiser obter todos os c\xe1lculos para um atributo do tipo String, pode escrever:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Resposta"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Se pretender obter apenas um c\xe1lculo num atributo, pode escrever o seguinte:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Resposta"}),":"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"235000"})}),"\n",(0,r.jsx)(t.p,{children:"Se pretender efetuar um c\xe1lculo num atributo de um objeto, pode escrever o seguinte:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,r.jsx)(t.p,{children:"Responsa:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"45"})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,o)=>{var r=o(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var r,s={},l=null,a=null;for(r in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:a,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>i});var r=o(296540);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);