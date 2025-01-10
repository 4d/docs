"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75577"],{30543:function(e,a,o){o.r(a),o.d(a,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>t,toc:()=>u,contentTitle:()=>d});var n=JSON.parse('{"id":"Concepts/plug-ins","title":"Plug-ins","description":"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando plug-ins ao seu ambiente de desenvolvimento 4D.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/plug-ins.md","sourceDirName":"Concepts","slug":"/Concepts/plug-ins","permalink":"/docs/pt/18/Concepts/plug-ins","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"plug-ins","title":"Plug-ins"},"sidebar":"docs","previous":{"title":"Componentes","permalink":"/docs/pt/18/Concepts/components"},"next":{"title":"Identificadores","permalink":"/docs/pt/18/Concepts/identifiers"}}'),s=o("785893"),i=o("250065");let r={id:"plug-ins",title:"Plug-ins"},d=void 0,t={},u=[{value:"Porqu\xea a necessidade de um plug-in?",id:"porqu\xea-a-necessidade-de-um-plug-in",level:2},{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Nota importante",id:"nota-importante",level:3},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Como instalar um plug-in?",id:"como-instalar-um-plug-in",level:2}];function l(e){let a={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando ",(0,s.jsx)(a.strong,{children:"plug-ins"})," ao seu ambiente de desenvolvimento 4D."]}),"\n",(0,s.jsx)(a.h2,{id:"porqu\xea-a-necessidade-de-um-plug-in",children:"Porqu\xea a necessidade de um plug-in?"}),"\n",(0,s.jsx)(a.p,{children:"Embora 4D ofere\xe7a centenas de m\xe9todos integrados, para manipular objetos, registros e implementar a interface do usu\xe1rio, pode ser necess\xe1rio algum uso ou recurso especial (\xe0s vezes dependente da plataforma): algu\xe9m pode precisar de ODBC no Windows, ou pode precisar de servi\xe7os da Apple no macOS, enquanto outro ainda pode querer implementar ferramentas estat\xedsticas espec\xedficas, login em redes sociais, plataforma de pagamento, acesso a arquivos pela rede, uma interface de usu\xe1rio especial ou uma estrutura de imagem privada."}),"\n",(0,s.jsx)(a.p,{children:"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."}),"\n",(0,s.jsx)(a.p,{children:"A natureza modular do ambiente 4D permite a cria\xe7\xe3o de aplicativos b\xe1sicos, mas n\xe3o impede o desenvolvimento de sistemas altamente complexos. A arquitetura 4D Plug-in abre o ambiente 4D para qualquer tipo de aplica\xe7\xe3o ou usu\xe1rio. Os 4D Plug-ins multiplicam o poder e a produtividade da aplica\xe7\xe3o ou do usu\xe1rio."}),"\n",(0,s.jsx)(a.h2,{id:"por-que-a-necessidade-de-um-plug-in",children:"Por que a necessidade de um plug-in?"}),"\n",(0,s.jsx)(a.p,{children:"Um plug-in \xe9 um peda\xe7o de c\xf3digo que 4D lan\xe7a no in\xedcio. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade."}),"\n",(0,s.jsx)(a.p,{children:"Normalmente, um plug-in faz coisas que:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"4D n\xe3o pode fazer (ou seja, tecnologia de plataforma espec\xedfica),"}),"\n",(0,s.jsx)(a.li,{children:"ser\xe1 muito dif\xedcil de escrever usando apenas 4D,"}),"\n",(0,s.jsx)(a.li,{children:"s\xf3 est\xe3o dispon\xedveis como Ponto de Entrada Plug-in"}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Uma rotina ",(0,s.jsx)(a.strong,{children:"plug in"})," \xe9 uma rotina escrita em l\xedngua nativa (geralmente C ou C++) que provoca uma a\xe7\xe3o."]}),"\n",(0,s.jsxs)(a.li,{children:["Uma ",(0,s.jsx)(a.strong,{children:"\xe1rea externa"})," \xe9 uma parte de um formul\xe1rio que pode mostrar quase tudo e interagir com o usu\xe1rio quando necess\xe1rio."]}),"\n",(0,s.jsxs)(a.li,{children:["Um ",(0,s.jsx)(a.strong,{children:"processo externo"})," \xe9 um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os c\xf3digos de processo pertencem ao plug-in, 4D est\xe1 simplesmente presente para receber/enviar eventos para o processo."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"nota-importante",children:"Nota importante"}),"\n",(0,s.jsxs)(a.p,{children:['Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e \xe1reas. N\xe3o h\xe1 praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in \xe9 uma pe\xe7a de c\xf3digo de "amostra". \xc9 o plug-in que funciona dentro do 4D, e n\xe3o o contr\xe1rio. Como pe\xe7a de c\xf3digo, \xe9 o anfitri\xe3o do 4D; n\xe3o \xe9 uma aplica\xe7\xe3o isolada. Partilha o tempo e a mem\xf3ria da CPU com 4D e outros plug-ins, portanto, deve ser um c\xf3digo bem educado, utilizando apenas o que \xe9 necess\xe1rio para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a ',(0,s.jsx)(a.code,{children:"PA_Yield()"})," para dar tempo ao planificador 4D, a menos que sua tarefa seja cr\xedtica tanto para ele quanto para o banco de dados."]}),"\n",(0,s.jsx)(a.h2,{id:"como-criar-um-plug-in",children:"Como criar um plug-in?"}),"\n",(0,s.jsxs)(a.p,{children:["4D fornece no GitHub um SDK plug-in de c\xf3digo aberto ",(0,s.jsx)(a.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:"****"}),", contendo o API de Plugin 4D e o Assistente de Plugin 4D:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["o ",(0,s.jsx)(a.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,s.jsx)(a.strong,{children:"4D Plugin API"})}),", escrito em C, acrescenta mais de 400 fun\xe7\xf5es que o ajudam a criar facilmente os seus pr\xf3prios plug-ins para adicionar novas funcionalidades \xe0 sua aplica\xe7\xe3o 4D. As fun\xe7\xf5es API Plug-in 4D gerem todas as interac\xe7\xf5es entre a aplica\xe7\xe3o 4D e o seu plug-in."]}),"\n",(0,s.jsxs)(a.li,{children:["O ",(0,s.jsx)(a.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,s.jsx)(a.strong,{children:"4D Plugin Wizard"})})," \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"como-instalar-um-plug-in",children:"Como instalar um plug-in?"}),"\n",(0,s.jsx)(a.p,{children:"Voc\xea instala plug-ins no ambiente 4D copiando seus arquivos para a pasta apropriada."}),"\n",(0,s.jsxs)(a.p,{children:['As pastas "PluginName.bundle" cont\xeam vers\xf5es Windows e macOS de plugins 4D. Sua arquitetura interna espec\xedfica permite que 4D Server carregue a vers\xe3o apropriada conforme a plataforma onde a m\xe1quina do cliente ser\xe1 executada. Para instalar um plug-in em seu ambiente, voc\xea s\xf3 precisa colocar a pasta "PluginName.bundle" ou pacote em quest\xe3o na pasta ',(0,s.jsx)(a.strong,{children:"PlugIns"})," desejada."]}),"\n",(0,s.jsx)(a.p,{children:"Voc\xea pode colocar a pasta PlugIns em dois locais diferentes:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Ao n\xedvel da aplica\xe7\xe3o 4D execut\xe1vel, ou seja:\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"No Windows: junto ao ficheiro .exe"}),"\n",(0,s.jsxs)(a.li,{children:["No macOS: no primeiro n\xedvel da pasta Contents no pacote da aplica\xe7\xe3o.",(0,s.jsx)(a.br,{}),"\nNeste caso, os plugins e os componentes est\xe3o dispon\xedveis em cada banco de dados aberto por esta aplica\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.li,{children:"No mesmo n\xedvel do arquivo de estrutura do banco de dados. Nesse caso, os plug-ins s\xf3 est\xe3o dispon\xedveis nesse banco de dados espec\xedfico."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"A escolha do ubica\xe7\xe3o depende de como voc\xea deseja usar o plug-in."}),"\n",(0,s.jsx)(a.p,{children:"Se o mesmo plug-in for colocado em ambos os locais, 4D s\xf3 carregar\xe1 o localizado ao lado da estrutura. Em uma aplica\xe7\xe3o compilada e fundida usando 4D Volume Desktop, se houver v\xe1rias inst\xe2ncias do mesmo plug-in presente, isso impedir\xe1 que a aplica\xe7\xe3o seja aberta."}),"\n",(0,s.jsx)(a.p,{children:"Os plug-ins s\xe3o carregados por 4D quando a aplica\xe7\xe3o for lan\xe7ada, pelo que ter\xe1 de abandonar a sua aplica\xe7\xe3o 4D antes de os instalar. Ent\xe3o abra seu banco de dados com 4D. Se qualquer plug-in necessitar de uma licen\xe7a espec\xedfica para utiliza\xe7\xe3o, ser\xe1 carregado, mas n\xe3o estar\xe1 dispon\xedvel para utiliza\xe7\xe3o."})]})}function c(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return d},a:function(){return r}});var n=o(667294);let s={},i=n.createContext(s);function r(e){let a=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);