"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85119],{655186:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=o(474848),a=o(28453);const s={id:"plug-ins",title:"Plug-ins"},t=void 0,r={id:"Concepts/plug-ins",title:"Plug-ins",description:"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando plug-ins ao seu ambiente de desenvolvimento 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/pt/18/Concepts/plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Componentes",permalink:"/docs/pt/18/Concepts/components"},next:{title:"Identificadores",permalink:"/docs/pt/18/Concepts/identifiers"}},l={},d=[{value:"Porqu\xea a necessidade de um plug-in?",id:"porqu\xea-a-necessidade-de-um-plug-in",level:2},{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Nota importante",id:"nota-importante",level:3},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Como instalar um plug-in?",id:"como-instalar-um-plug-in",level:2}];function u(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando ",(0,i.jsx)(n.strong,{children:"plug-ins"})," ao seu ambiente de desenvolvimento 4D."]}),"\n",(0,i.jsx)(n.h2,{id:"porqu\xea-a-necessidade-de-um-plug-in",children:"Porqu\xea a necessidade de um plug-in?"}),"\n",(0,i.jsx)(n.p,{children:"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."}),"\n",(0,i.jsx)(n.p,{children:"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."}),"\n",(0,i.jsx)(n.p,{children:"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. Os 4D Plug-ins multiplicam o poder e a produtividade da aplica\xe7\xe3o ou do usu\xe1rio."}),"\n",(0,i.jsx)(n.h2,{id:"por-que-a-necessidade-de-um-plug-in",children:"Por que a necessidade de um plug-in?"}),"\n",(0,i.jsx)(n.p,{children:"Um plug-in \xe9 um peda\xe7o de c\xf3digo que 4D lan\xe7a no in\xedcio. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade."}),"\n",(0,i.jsx)(n.p,{children:"Normalmente, um plug-in faz coisas que:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"4D n\xe3o pode fazer (ou seja, tecnologia de plataforma espec\xedfica),"}),"\n",(0,i.jsx)(n.li,{children:"ser\xe1 muito dif\xedcil de escrever usando apenas 4D,"}),"\n",(0,i.jsx)(n.li,{children:"s\xf3 est\xe3o dispon\xedveis como Ponto de Entrada Plug-in"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Uma rotina ",(0,i.jsx)(n.strong,{children:"plug in"})," \xe9 uma rotina escrita em l\xedngua nativa (geralmente C ou C++) que provoca uma a\xe7\xe3o."]}),"\n",(0,i.jsxs)(n.li,{children:["Uma ",(0,i.jsx)(n.strong,{children:"\xe1rea externa"})," \xe9 uma parte de um formul\xe1rio que pode mostrar quase tudo e interagir com o usu\xe1rio quando necess\xe1rio."]}),"\n",(0,i.jsxs)(n.li,{children:["Um ",(0,i.jsx)(n.strong,{children:"processo externo"})," \xe9 um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os c\xf3digos de processo pertencem ao plug-in, 4D est\xe1 simplesmente presente para receber/enviar eventos para o processo."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nota-importante",children:"Nota importante"}),"\n",(0,i.jsxs)(n.p,{children:['Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e \xe1reas. N\xe3o h\xe1 praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in \xe9 uma pe\xe7a de c\xf3digo de "amostra". \xc9 o plug-in que funciona dentro do 4D, e n\xe3o o contr\xe1rio. Como pe\xe7a de c\xf3digo, \xe9 o anfitri\xe3o do 4D; n\xe3o \xe9 uma aplica\xe7\xe3o isolada. Partilha o tempo e a mem\xf3ria da CPU com 4D e outros plug-ins, portanto, deve ser um c\xf3digo bem educado, utilizando apenas o que \xe9 necess\xe1rio para rodar. For example, in long loops, a plug-in should call ',(0,i.jsx)(n.code,{children:"PA_Yield()"})," to give time to the 4D scheduler unless its task is critical for both it and the database."]}),"\n",(0,i.jsx)(n.h2,{id:"como-criar-um-plug-in",children:"Como criar um plug-in?"}),"\n",(0,i.jsxs)(n.p,{children:["4D fornece no GitHub um SDK plug-in de c\xf3digo aberto ",(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:"****"}),", contendo o API de Plugin 4D e o Assistente de Plugin 4D:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["o ",(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,i.jsx)(n.strong,{children:"4D Plugin API"})}),", escrito em C, acrescenta mais de 400 fun\xe7\xf5es que o ajudam a criar facilmente os seus pr\xf3prios plug-ins para adicionar novas funcionalidades \xe0 sua aplica\xe7\xe3o 4D. As fun\xe7\xf5es API Plug-in 4D gerem todas as interac\xe7\xf5es entre a aplica\xe7\xe3o 4D e o seu plug-in."]}),"\n",(0,i.jsxs)(n.li,{children:["O ",(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,i.jsx)(n.strong,{children:"4D Plugin Wizard"})})," \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"como-instalar-um-plug-in",children:"Como instalar um plug-in?"}),"\n",(0,i.jsx)(n.p,{children:"You install plug-ins in the 4D environment by copying their files into the appropriate folder."}),"\n",(0,i.jsxs)(n.p,{children:["\u201cPluginName.bundle\u201d folders contain both Windows and macOS versions of 4D plug-ins. Their specific internal architecture lets 4D Server load the appropriate version according to the platform where the client machine will be run. To install a plug-in in your environment, you just need to put the \u201cPluginName.bundle\u201d folder or package concerned into the desired ",(0,i.jsx)(n.strong,{children:"PlugIns"})," folder."]}),"\n",(0,i.jsx)(n.p,{children:"Voc\xea pode colocar a pasta PlugIns em dois locais diferentes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ao n\xedvel da aplica\xe7\xe3o 4D execut\xe1vel, ou seja:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No Windows: junto ao ficheiro .exe"}),"\n",(0,i.jsxs)(n.li,{children:["Under macOS: at the first level of the Contents folder inside the application package.",(0,i.jsx)(n.br,{}),"\nIn this case, plug-ins are available in every database opened by this application."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"No mesmo n\xedvel do arquivo de estrutura do banco de dados. Nesse caso, os plug-ins s\xf3 est\xe3o dispon\xedveis nesse banco de dados espec\xedfico."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A escolha do ubica\xe7\xe3o depende de como voc\xea deseja usar o plug-in."}),"\n",(0,i.jsx)(n.p,{children:"If the same plug-in is placed in both locations, 4D will only load the one located next to the structure. In an application that is compiled and merged using 4D Volume Desktop, if there are several instances of the same plug-in present, this will prevent the application from opening."}),"\n",(0,i.jsx)(n.p,{children:"Os plug-ins s\xe3o carregados por 4D quando a aplica\xe7\xe3o for lan\xe7ada, pelo que ter\xe1 de abandonar a sua aplica\xe7\xe3o 4D antes de os instalar. Ent\xe3o abra seu banco de dados com 4D. If any plug-in requires a specific license for use, it will be loaded but not available for use."})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>r});var i=o(296540);const a={},s=i.createContext(a);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);