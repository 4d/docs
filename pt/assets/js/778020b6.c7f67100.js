/*! For license information please see 778020b6.c7f67100.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95071],{451976:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var a=o(474848),i=o(28453);const s={id:"develop-plug-ins",title:"Plug-ins de desenvolvimento"},r=void 0,t={id:"Extensions/develop-plug-ins",title:"Plug-ins de desenvolvimento",description:"Porqu\xea a necessidade de um plug-in?",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/pt/20/Extensions/develop-plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"develop-plug-ins",title:"Plug-ins de desenvolvimento"},sidebar:"docs",previous:{title:"Componentes de desenvolvimento",permalink:"/docs/pt/20/Extensions/develop-components"},next:{title:"Web Applications",permalink:"/docs/pt/20/category/web-applications"}},l={},d=[{value:"Porqu\xea a necessidade de um plug-in?",id:"Porqu\xea-a-necessidade-de-um-plug-in",level:2},{value:"Por que a necessidade de um plug-in?",id:"Por-que-a-necessidade-de-um-plug-in",level:2},{value:"Nota importante",id:"Nota-importante",level:3},{value:"Como criar um plug-in?",id:"Como-criar-um-plug-in",level:2},{value:"Partilhar plug-ins",id:"Partilhar-plug-ins",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"Porqu\xea-a-necessidade-de-um-plug-in",children:"Porqu\xea a necessidade de um plug-in?"}),"\n",(0,a.jsx)(n.p,{children:"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."}),"\n",(0,a.jsx)(n.p,{children:"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."}),"\n",(0,a.jsx)(n.p,{children:"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. Os 4D Plug-ins multiplicam o poder e a produtividade da aplica\xe7\xe3o ou do usu\xe1rio."}),"\n",(0,a.jsx)(n.h2,{id:"Por-que-a-necessidade-de-um-plug-in",children:"Por que a necessidade de um plug-in?"}),"\n",(0,a.jsx)(n.p,{children:"Um plug-in \xe9 um peda\xe7o de c\xf3digo que 4D lan\xe7a no in\xedcio. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade."}),"\n",(0,a.jsx)(n.p,{children:"Normalmente, um plug-in faz coisas que:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"4D n\xe3o pode fazer (ou seja, tecnologia de plataforma espec\xedfica),"}),"\n",(0,a.jsx)(n.li,{children:"ser\xe1 muito dif\xedcil de escrever usando apenas 4D,"}),"\n",(0,a.jsx)(n.li,{children:"s\xf3 est\xe3o dispon\xedveis como Ponto de Entrada Plug-in"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Uma rotina ",(0,a.jsx)(n.strong,{children:"plug in"})," \xe9 uma rotina escrita em l\xedngua nativa (geralmente C ou C++) que provoca uma a\xe7\xe3o."]}),"\n",(0,a.jsxs)(n.li,{children:["Uma ",(0,a.jsx)(n.strong,{children:"\xe1rea externa"})," \xe9 uma parte de um formul\xe1rio que pode mostrar quase tudo e interagir com o usu\xe1rio quando necess\xe1rio."]}),"\n",(0,a.jsxs)(n.li,{children:["Um ",(0,a.jsx)(n.strong,{children:"processo externo"})," \xe9 um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os c\xf3digos de processo pertencem ao plug-in, 4D est\xe1 simplesmente presente para receber/enviar eventos para o processo."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"Nota-importante",children:"Nota importante"}),"\n",(0,a.jsxs)(n.p,{children:['Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e \xe1reas. N\xe3o h\xe1 praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in \xe9 uma pe\xe7a de c\xf3digo de "amostra". \xc9 o plug-in que funciona dentro do 4D, e n\xe3o o contr\xe1rio. Como pe\xe7a de c\xf3digo, \xe9 o anfitri\xe3o do 4D; n\xe3o \xe9 uma aplica\xe7\xe3o isolada. Partilha o tempo e a mem\xf3ria da CPU com 4D e outros plug-ins, portanto, deve ser um c\xf3digo bem educado, utilizando apenas o que \xe9 necess\xe1rio para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a ',(0,a.jsx)(n.code,{children:"PA_Yield()"})," para dar tempo ao planificador 4D, a menos que sua tarefa seja cr\xedtica tanto para ele quanto para a aplica\xe7\xe3o."]}),"\n",(0,a.jsx)(n.h2,{id:"Como-criar-um-plug-in",children:"Como criar um plug-in?"}),"\n",(0,a.jsxs)(n.p,{children:["4D fornece no GitHub um SDK plug-in de c\xf3digo aberto ",(0,a.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:"****"}),", contendo o API de Plugin 4D e o Assistente de Plugin 4D:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["o ",(0,a.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,a.jsx)(n.strong,{children:"4D Plugin API"})}),", escrito em C, acrescenta mais de 400 fun\xe7\xf5es que o ajudam a criar facilmente os seus pr\xf3prios plug-ins para adicionar novas funcionalidades \xe0 sua aplica\xe7\xe3o 4D. As fun\xe7\xf5es API Plug-in 4D gerem todas as interac\xe7\xf5es entre a aplica\xe7\xe3o 4D e o seu plug-in."]}),"\n",(0,a.jsxs)(n.li,{children:["O ",(0,a.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,a.jsx)(n.strong,{children:"4D Plugin Wizard"})})," \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"Partilhar-plug-ins",children:"Partilhar plug-ins"}),"\n",(0,a.jsxs)(n.p,{children:["Encorajamo-lo a apoiar a comunidade de programadores 4D partilhando os seus plug-ins, de prefer\xeancia na plataforma ",(0,a.jsx)(n.a,{href:"https://github.com/topics/4d-plugin",children:"GitHub"}),". We recommend that you use the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"4d-plugin"})})," topic to be correctly referenced."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},221020:(e,n,o)=>{var a=o(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var a,s={},d=null,u=null;for(a in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)r.call(n,a)&&!l.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:i,type:e,key:d,ref:u,props:s,_owner:t.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var a=o(296540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);