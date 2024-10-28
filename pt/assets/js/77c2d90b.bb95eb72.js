"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79069],{440868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(474848),r=t(28453);const s={id:"compute",title:"$compute"},c=void 0,i={id:"REST/compute",title:"$compute",description:"C\xe1lculo de atributos espec\xedficos (e., Employee/salary/?$compute=sum) o en el caso de un atributo Objeto (por ejemplo, Employee/objectAtt.property1/?$compute=sum)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/pt/REST/compute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$clean",permalink:"/docs/pt/REST/clean"},next:{title:"$distinct",permalink:"/docs/pt/REST/distinct"}},d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["C\xe1lculo de atributos espec\xedficos (",(0,o.jsx)(n.em,{children:"e."}),", ",(0,o.jsx)(n.code,{children:"Employee/salary/?$compute=sum)"})," o en el caso de un atributo Objeto (",(0,o.jsx)(n.em,{children:"por ejemplo"}),", Employee/objectAtt.property1/?$compute=sum)"]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"Este par\xe2metro permite-lhe efetuar c\xe1lculos sobre os seus dados."}),"\n",(0,o.jsx)(n.p,{children:"Para efetuar um c\xe1lculo sobre um atributo, escreve-se o seguinte:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,o.jsx)(n.p,{children:"Se quiser passar um atributo de Objeto, tem de passar uma das suas propriedades. Por exemplo:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/objectAtt.property1/?$compute=$all"})}),"\n",(0,o.jsx)(n.p,{children:"Pode utilizar qualquer uma das seguintes palavras-chave:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Palavra-chave"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$all"}),(0,o.jsx)(n.td,{children:"Um objeto JSON que define todas as fun\xe7\xf5es para o atributo (m\xe9dia, contagem, m\xednimo, m\xe1ximo e soma para atributos do tipo N\xfamero e contagem, m\xednimo e m\xe1ximo para atributos do tipo Cadeia"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"average"}),(0,o.jsx)(n.td,{children:"Obter a m\xe9dia de um atributo num\xe9rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"count"}),(0,o.jsx)(n.td,{children:"Obter o n\xfamero total na cole\xe7\xe3o ou na classe de dados (em ambos os casos h\xe1 que especificar um atributo)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"min"}),(0,o.jsx)(n.td,{children:"Obter o valor m\xednimo num atributo num\xe9rico ou o valor mais baixo num atributo do tipo String"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"max"}),(0,o.jsx)(n.td,{children:"Obter o valor m\xe1ximo num atributo num\xe9rico ou o valor mais alto num atributo do tipo String"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sum"}),(0,o.jsx)(n.td,{children:"Obter a soma de um atributo num\xe9rico"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser obter todos os c\xe1lculos para um atributo do tipo N\xfamero, pode escrever:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=$all"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Se quiser obter todos os c\xe1lculos para um atributo do tipo String, pode escrever:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/firstName/?$compute=$all"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Se pretender obter apenas um c\xe1lculo num atributo, pode escrever o seguinte:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/salary/?$compute=sum"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"235000"})}),"\n",(0,o.jsx)(n.p,{children:"Se pretender efetuar um c\xe1lculo num atributo de um objeto, pode escrever o seguinte:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/objectAttribute.property1/?$compute=sum"})}),"\n",(0,o.jsx)(n.p,{children:"Responsa:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"45"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(296540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);