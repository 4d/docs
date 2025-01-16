"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51562"],{840540:function(e,o,n){n.r(o),n.d(o,{default:()=>c,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>u,contentTitle:()=>t});var a=JSON.parse('{"id":"Extensions/develop-plug-ins","title":"Plug-ins de desenvolvimento","description":"Porqu\xea a necessidade de um plug-in?","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Extensions/develop-plug-ins.md","sourceDirName":"Extensions","slug":"/Extensions/develop-plug-ins","permalink":"/docs/pt/20-R7/Extensions/develop-plug-ins","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"develop-plug-ins","title":"Plug-ins de desenvolvimento"},"sidebar":"docs","previous":{"title":"Componentes de desenvolvimento","permalink":"/docs/pt/20-R7/Extensions/develop-components"},"next":{"title":"Web Applications","permalink":"/docs/pt/20-R7/category/web-applications"}}'),i=n("785893"),s=n("250065");let r={id:"develop-plug-ins",title:"Plug-ins de desenvolvimento"},t=void 0,d={},u=[{value:"Porqu\xea a necessidade de um plug-in?",id:"porqu\xea-a-necessidade-de-um-plug-in",level:2},{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Nota importante",id:"nota-importante",level:3},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Partilhar plug-ins",id:"partilhar-plug-ins",level:2}];function l(e){let o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"porqu\xea-a-necessidade-de-um-plug-in",children:"Porqu\xea a necessidade de um plug-in?"}),"\n",(0,i.jsx)(o.p,{children:"Embora 4D ofere\xe7a centenas de m\xe9todos integrados, para manipular objetos, registros e implementar a interface do usu\xe1rio, pode ser necess\xe1rio algum uso ou recurso especial (\xe0s vezes dependente da plataforma): algu\xe9m pode precisar de ODBC no Windows, ou pode precisar de servi\xe7os da Apple no macOS, enquanto outro ainda pode querer implementar ferramentas estat\xedsticas espec\xedficas, login em redes sociais, plataforma de pagamento, acesso a arquivos pela rede, uma interface de usu\xe1rio especial ou uma estrutura de imagem privada."}),"\n",(0,i.jsx)(o.p,{children:"\xc9 \xf3bvio que cobrir todas as \xe1reas dos sistemas operacionais macOS e Windows com comandos 4D certamente levaria a um produto com milhares de comandos e, em simult\xe2neo, a maioria dos usu\xe1rios n\xe3o teria necessidade de um conjunto t\xe3o grande de recursos. Al\xe9m disso, a cria\xe7\xe3o de uma ferramenta t\xe3o abrangente tornaria o ambiente 4D incrivelmente complexo e levaria meses de estudo para a maioria dos usu\xe1rios antes que resultados \xfateis pudesse ser esperados."}),"\n",(0,i.jsx)(o.p,{children:"A natureza modular do ambiente 4D permite a cria\xe7\xe3o de aplicativos b\xe1sicos, mas n\xe3o impede o desenvolvimento de sistemas altamente complexos. A arquitetura 4D Plug-in abre o ambiente 4D para qualquer tipo de aplica\xe7\xe3o ou usu\xe1rio. Os 4D Plug-ins multiplicam o poder e a produtividade da aplica\xe7\xe3o ou do usu\xe1rio."}),"\n",(0,i.jsx)(o.h2,{id:"por-que-a-necessidade-de-um-plug-in",children:"Por que a necessidade de um plug-in?"}),"\n",(0,i.jsx)(o.p,{children:"Um plug-in \xe9 um peda\xe7o de c\xf3digo que 4D lan\xe7a no in\xedcio. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade."}),"\n",(0,i.jsx)(o.p,{children:"Normalmente, um plug-in faz coisas que:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"4D n\xe3o pode fazer (ou seja, tecnologia de plataforma espec\xedfica),"}),"\n",(0,i.jsx)(o.li,{children:"ser\xe1 muito dif\xedcil de escrever usando apenas 4D,"}),"\n",(0,i.jsx)(o.li,{children:"s\xf3 est\xe3o dispon\xedveis como Ponto de Entrada Plug-in"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Uma ",(0,i.jsx)(o.strong,{children:"rotina de plug-ins"})," \xe9 uma rotina escrita em linguagem nativa (normalmente C ou C++) que causa uma a\xe7\xe3o."]}),"\n",(0,i.jsxs)(o.li,{children:["Uma ",(0,i.jsx)(o.strong,{children:"\xe1rea externa"})," \xe9 uma parte de um formul\xe1rio que pode exibir quase tudo e interagir com o usu\xe1rio quando necess\xe1rio."]}),"\n",(0,i.jsxs)(o.li,{children:["Um ",(0,i.jsx)(o.strong,{children:"processo externo"})," \xe9 um processo que \xe9 executado sozinho, geralmente em um loop, fazendo quase tudo o que deseja. Todos os c\xf3digos de processo pertencem ao plug-in, 4D est\xe1 simplesmente presente para receber/enviar eventos para o processo."]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"nota-importante",children:"Nota importante"}),"\n",(0,i.jsxs)(o.p,{children:['Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e \xe1reas. N\xe3o h\xe1 praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in \xe9 uma pe\xe7a de c\xf3digo de "amostra". \xc9 o plug-in que funciona dentro do 4D, e n\xe3o o contr\xe1rio. Como pe\xe7a de c\xf3digo, \xe9 o anfitri\xe3o do 4D; n\xe3o \xe9 uma aplica\xe7\xe3o isolada. Partilha o tempo e a mem\xf3ria da CPU com 4D e outros plug-ins, portanto, deve ser um c\xf3digo bem educado, utilizando apenas o que \xe9 necess\xe1rio para rodar. Por exemplo, em loops longos, um plug-in deve chamar ',(0,i.jsx)(o.code,{children:"PA_Yield()"})," para dar tempo ao agendador 4D, a menos que sua tarefa seja cr\xedtica para ele e para o aplicativo."]}),"\n",(0,i.jsx)(o.h2,{id:"como-criar-um-plug-in",children:"Como criar um plug-in?"}),"\n",(0,i.jsxs)(o.p,{children:["4D fornece no GitHub um [",(0,i.jsx)(o.strong,{children:"plug-in SDK"}),"] (",(0,i.jsx)(o.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:"https://github.com/4d/4D-Plugin-SDK"}),") de c\xf3digo aberto, contendo o 4D Plugin API e o 4D Plugin Wizard:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["o [",(0,i.jsx)(o.strong,{children:"4D Plugin API"}),"](",(0,i.jsx)(o.a,{href:"https://github",children:"https://github"}),". om/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito em C Adicione mais de 400 fun\xe7\xf5es que ajudam voc\xea a criar facilmente seus pr\xf3prios plug-ins para adicionar novas funcionalidades ao seu aplicativo 4D. As fun\xe7\xf5es API Plug-in 4D gerem todas as interac\xe7\xf5es entre a aplica\xe7\xe3o 4D e o seu plug-in."]}),"\n",(0,i.jsxs)(o.li,{children:["O [",(0,i.jsx)(o.strong,{children:"4D Plugin Wizard"}),"] (",(0,i.jsx)(o.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),") \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolver plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"partilhar-plug-ins",children:"Partilhar plug-ins"}),"\n",(0,i.jsxs)(o.p,{children:["Incentivamos voc\xea a apoiar a comunidade de desenvolvedores 4D compartilhando seus plug-ins, de prefer\xeancia na [plataforma GitHub] (",(0,i.jsx)(o.a,{href:"https://github.com/topics/4d-plugin",children:"https://github.com/topics/4d-plugin"}),"). Recomendamos que voc\xea use o t\xf3pico ",(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.code,{children:"4d-plugin"})})," para ser referenciado corretamente."]})]})}function c(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return t},a:function(){return r}});var a=n(667294);let i={},s=a.createContext(i);function r(e){let o=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);