"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51844],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},543734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});t(667294);var o=t(603905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"develop-plug-ins",title:"Plug-ins de desenvolvimento"},l=void 0,s={unversionedId:"Extensions/develop-plug-ins",id:"version-20-R4/Extensions/develop-plug-ins",title:"Plug-ins de desenvolvimento",description:"Porqu\xea a necessidade de um plug-in?",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/pt/Extensions/develop-plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"develop-plug-ins",title:"Plug-ins de desenvolvimento"},sidebar:"docs",previous:{title:"Componentes de desenvolvimento",permalink:"/docs/pt/Extensions/develop-components"},next:{title:"Web Applications",permalink:"/docs/pt/category/web-applications"}},u={},p=[{value:"Porqu\xea a necessidade de um plug-in?",id:"porqu\xea-a-necessidade-de-um-plug-in",level:2},{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Nota importante",id:"nota-importante",level:3},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Partilhar plug-ins",id:"partilhar-plug-ins",level:2}],c={toc:p};function d(e){var{components:n}=e,t=r(e,["components"]);return(0,o.kt)("wrapper",a({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"porqu\xea-a-necessidade-de-um-plug-in"}),"Porqu\xea a necessidade de um plug-in?"),(0,o.kt)("p",null,"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."),(0,o.kt)("p",null,"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."),(0,o.kt)("p",null,"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. Os 4D Plug-ins multiplicam o poder e a produtividade da aplica\xe7\xe3o ou do usu\xe1rio."),(0,o.kt)("h2",a({},{id:"por-que-a-necessidade-de-um-plug-in"}),"Por que a necessidade de um plug-in?"),(0,o.kt)("p",null,"Um plug-in \xe9 um peda\xe7o de c\xf3digo que 4D lan\xe7a no in\xedcio. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade."),(0,o.kt)("p",null,"Normalmente, um plug-in faz coisas que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4D n\xe3o pode fazer (ou seja, tecnologia de plataforma espec\xedfica),"),(0,o.kt)("li",{parentName:"ul"},"ser\xe1 muito dif\xedcil de escrever usando apenas 4D,"),(0,o.kt)("li",{parentName:"ul"},"s\xf3 est\xe3o dispon\xedveis como Ponto de Entrada Plug-in")),(0,o.kt)("p",null,"Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Uma rotina ",(0,o.kt)("strong",{parentName:"li"},"plug in")," \xe9 uma rotina escrita em l\xedngua nativa (geralmente C ou C++) que provoca uma a\xe7\xe3o."),(0,o.kt)("li",{parentName:"ul"},"Uma ",(0,o.kt)("strong",{parentName:"li"},"\xe1rea externa")," \xe9 uma parte de um formul\xe1rio que pode mostrar quase tudo e interagir com o usu\xe1rio quando necess\xe1rio."),(0,o.kt)("li",{parentName:"ul"},"Um ",(0,o.kt)("strong",{parentName:"li"},"processo externo")," \xe9 um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os c\xf3digos de processo pertencem ao plug-in, 4D est\xe1 simplesmente presente para receber/enviar eventos para o processo.")),(0,o.kt)("h3",a({},{id:"nota-importante"}),"Nota importante"),(0,o.kt)("p",null,'Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e \xe1reas. N\xe3o h\xe1 praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in \xe9 uma pe\xe7a de c\xf3digo de "amostra". \xc9 o plug-in que funciona dentro do 4D, e n\xe3o o contr\xe1rio. Como pe\xe7a de c\xf3digo, \xe9 o anfitri\xe3o do 4D; n\xe3o \xe9 uma aplica\xe7\xe3o isolada. Partilha o tempo e a mem\xf3ria da CPU com 4D e outros plug-ins, portanto, deve ser um c\xf3digo bem educado, utilizando apenas o que \xe9 necess\xe1rio para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a ',(0,o.kt)("inlineCode",{parentName:"p"},"PA_Yield()")," para dar tempo ao planificador 4D, a menos que sua tarefa seja cr\xedtica tanto para ele quanto para a aplica\xe7\xe3o."),(0,o.kt)("h2",a({},{id:"como-criar-um-plug-in"}),"Como criar um plug-in?"),(0,o.kt)("p",null,"4D fornece no GitHub um SDK plug-in de c\xf3digo aberto ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/4d/4D-Plugin-SDK"}),"****"),", contendo o API de Plugin 4D e o Assistente de Plugin 4D:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"o ",(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"}),(0,o.kt)("strong",{parentName:"a"},"4D Plugin API")),", escrito em C, acrescenta mais de 400 fun\xe7\xf5es que o ajudam a criar facilmente os seus pr\xf3prios plug-ins para adicionar novas funcionalidades \xe0 sua aplica\xe7\xe3o 4D. As fun\xe7\xf5es API Plug-in 4D gerem todas as interac\xe7\xf5es entre a aplica\xe7\xe3o 4D e o seu plug-in."),(0,o.kt)("li",{parentName:"ul"},"O ",(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),(0,o.kt)("strong",{parentName:"a"},"4D Plugin Wizard"))," \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo.")),(0,o.kt)("h2",a({},{id:"partilhar-plug-ins"}),"Partilhar plug-ins"),(0,o.kt)("p",null,"Encorajamo-lo a apoiar a comunidade de programadores 4D partilhando os seus plug-ins, de prefer\xeancia na plataforma ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/topics/4d-plugin"}),"GitHub"),". We recommend that you use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"4d-plugin"))," topic to be correctly referenced."))}d.isMDXComponent=!0}}]);