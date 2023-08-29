"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47901],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>u});var n=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?n.createElement(h,i(i({ref:o},c),{},{components:t})):n.createElement(h,i({ref:o},c))}));function u(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22308:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function r(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"components",title:"Componentes"},s=void 0,l={unversionedId:"Concepts/components",id:"version-19/Concepts/components",title:"Componentes",description:"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/pt/19/Concepts/components",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"components",title:"Componentes"},sidebar:"docs",previous:{title:"Modos interpretado e compilado",permalink:"/docs/pt/19/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/pt/19/Concepts/plug-ins"}},p={},c=[{value:"Apresenta\xe7\xe3o",id:"apresenta\xe7\xe3o",level:2},{value:"Defini\xe7\xf5es",id:"defini\xe7\xf5es",level:3},{value:"Princ\xedpios",id:"princ\xedpios",level:3},{value:"Escopo dos comandos de linguagem",id:"escopo-dos-comandos-de-linguagem",level:2},{value:"Comandos n\xe3o utiliz\xe1veis",id:"comandos-n\xe3o-utiliz\xe1veis",level:3},{value:"Partilhar os m\xe9todos de projeto",id:"partilhar-os-m\xe9todos-de-projeto",level:2},{value:"Passar vari\xe1veis",id:"passar-vari\xe1veis",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Acesso \xe0s tabelas do projeto local",id:"acesso-\xe0s-tabelas-do-projeto-local",level:2},{value:"Uso de tabelas e campos",id:"uso-de-tabelas-e-campos",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Uso de formul\xe1rios",id:"uso-de-formul\xe1rios",level:2},{value:"Uso de recursos",id:"uso-de-recursos",level:2},{value:"Execu\xe7\xe3o de c\xf3digo de inicializa\xe7\xe3o",id:"execu\xe7\xe3o-de-c\xf3digo-de-inicializa\xe7\xe3o",level:2},{value:"Prote\xe7\xe3o dos componentes: compila\xe7\xe3o",id:"prote\xe7\xe3o-dos-componentes-compila\xe7\xe3o",level:2}],d={toc:c};function m(e){var{components:o}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",a({},d,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications."),(0,n.kt)("h2",a({},{id:"apresenta\xe7\xe3o"}),"Apresenta\xe7\xe3o"),(0,n.kt)("h3",a({},{id:"defini\xe7\xf5es"}),"Defini\xe7\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Matrix Project"),": 4D project used for developing the component. O projeto matriz \xe9 um projeto standard sem atributos espec\xedficos. Um projeto matricial forma um componente \xfanico."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host Project"),": Application project in which a component is installed and used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Component"),": Matrix project, compiled or not, copied into the ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/pt/19/Project/architecture"}),(0,n.kt)("inlineCode",{parentName:"a"},"Components"))," folder of the host application and whose contents are used in the host application.")),(0,n.kt)("h3",a({},{id:"princ\xedpios"}),"Princ\xedpios"),(0,n.kt)("p",null,"Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/19/Concepts/plug-ins"}),"plug-ins")," according to the following principles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A component consists of a regular 4D project file."),(0,n.kt)("li",{parentName:"ul"},"To install a component, you simply need to copy it into the ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/pt/19/Project/architecture"}),(0,n.kt)("inlineCode",{parentName:"a"},"Components")," folder of the project"),". Pode usar pseud\xf3nimos ou atalhos."),(0,n.kt)("li",{parentName:"ul"},'A project can be both a \u201cmatrix\u201d and a \u201chost,\u201d in other words, a matrix project can itself use one or more components. No entanto, um componente n\xe3o pode utilizar ele pr\xf3prio "subcomponentes".'),(0,n.kt)("li",{parentName:"ul"},"A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, and so on. N\xe3o pode chamar m\xe9todos de bancos de dados e triggers."),(0,n.kt)("li",{parentName:"ul"},"N\xe3o \xe9 poss\xedvel utilizar tabelas standard ou ficheiros de dados em componentes 4D. Entretanto um componente n\xe3o pode criar ou usar tabelas, campos e arquivos de dados usando mecanismos de bancos de dados externos. S\xe3o bancos 4D independentes com as que se trabalha utilizando comandos SQL."),(0,n.kt)("li",{parentName:"ul"},"Um projecto anfitri\xe3o executado em modo interpretado pode utilizar componentes interpretados ou compilados. Um projecto anfitri\xe3o executado em modo compilado n\xe3o pode utilizar componentes interpretados. Por isso n\xe3o pode ser usado em um componente.")),(0,n.kt)("h2",a({},{id:"escopo-dos-comandos-de-linguagem"}),"Escopo dos comandos de linguagem"),(0,n.kt)("p",null,"Exceto pelos ",(0,n.kt)("a",a({parentName:"p"},{href:"#unusable-commands"}),"Comandos n\xe3o utiliz\xe1veis"),", um componente n\xe3o pode usar qualquer comando da linguagem 4D."),(0,n.kt)("p",null,"When commands are called from a component, they are executed in the context of the component, except for the ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE FORMULA")," command that use the context of the method specified by the command. Also note that the read commands of the \u201cUsers and Groups\u201d theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups)."),(0,n.kt)("p",null,"Os comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"Get database parameter")," s\xe3o uma exce\xe7\xe3o: seu alcance \xe9 global a aplica\xe7\xe3o. Quando esses comandos forem chamados de um componente, s\xe3o aplicados ao projecto de aplica\xe7\xe3o local."),(0,n.kt)("p",null,"Al\xe9m disso, medidas especificas foram criadas para os comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"Structure file")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"Get 4D folder")," quando utilizados no marco dos componentes."),(0,n.kt)("p",null,"O comando ",(0,n.kt)("inlineCode",{parentName:"p"},"COMPONENT LIST")," pode ser utilizado para obter a lista de componentes que carrega o projecto local."),(0,n.kt)("h3",a({},{id:"comandos-n\xe3o-utiliz\xe1veis"}),"Comandos n\xe3o utiliz\xe1veis"),(0,n.kt)("p",null,"Os comandos abaixo n\xe3oo s\xe3o compat\xedveis para seu uso dentro de um componente porque modificam o arquivo de estrutura - que est\xe1 aberto em apenas leitura. Their execution in a component will generate the error -10511, \u201cThe CommandName command cannot be called from a component\u201d:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ON EVENT CALL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Method called on event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET PICTURE TO LIBRARY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"REMOVE PICTURE FROM LIBRARY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SAVE LIST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ARRAY TO LIST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EDIT FORM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CREATE USER FORM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DELETE USER FORM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHANGE PASSWORD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EDIT ACCESS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Set group properties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Set user properties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DELETE USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHANGE LICENSES")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BLOB TO USERS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET PLUGIN ACCESS"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O comando ",(0,n.kt)("inlineCode",{parentName:"li"},"Current form table")," devolve ",(0,n.kt)("inlineCode",{parentName:"li"},"Nil")," quando chamado no contexto de um formul\xe1rio projeto. Por isso n\xe3o pode ser usado em um componente."),(0,n.kt)("li",{parentName:"ul"},"SQL data definition language commands (",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE TABLE"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"DROP TABLE"),", etc.) cannot be used on the component project. Entretanto s\xe3o compat\xedveis com bancos de dados externos (ver o comando SQL",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE"),").")),(0,n.kt)("h2",a({},{id:"partilhar-os-m\xe9todos-de-projeto"}),"Partilhar os m\xe9todos de projeto"),(0,n.kt)("p",null,"All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed by the component."),(0,n.kt)("p",null,"On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. These project methods can be called in the code of the host project (but they cannot be modified in the Method editor of the host project). These methods form ",(0,n.kt)("strong",{parentName:"p"},"entry points")," in the component."),(0,n.kt)("p",null,"Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the ",(0,n.kt)("strong",{parentName:"p"},"Shared by components and host project")," box)."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(5724).Z,width:"592",height:"146"})),(0,n.kt)("p",null,"Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE FORMULA")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD")," commands. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// M\xe9todo host\ncomponent_method("host_method_name")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"// component_method\n C_TEXT($1)\n EXECUTE METHOD($1)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"An interpreted host database that contains interpreted components can be compiled or syntax checked if it does not call methods of the interpreted component. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation. Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE FORMULA")," commands.")),(0,n.kt)("h2",a({},{id:"passar-vari\xe1veis"}),"Passar vari\xe1veis"),(0,n.kt)("p",null,"The local, process and interprocess variables are not shared between components and host projects. The only way to modify component variables from the host project and vice versa is using pointers."),(0,n.kt)("p",null,"Exemplo usando um array:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"//In the host project:\n     ARRAY INTEGER(MyArray;10)\n     AMethod(->MyArray)\n\n//In the component, the AMethod project method contains:\n     APPEND TO ARRAY($1->;2)\n")),(0,n.kt)("p",null,"Exemplos usando vari\xe1veis:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"C_TEXT(myvariable)\ncomponent_method1(->myvariable)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"C_POINTER($p)\n$p:=component_method2(...)\n")),(0,n.kt)("p",null,"Without a pointer, a component can still access the value of a host database variable (but not the variable itself) and vice versa:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'//In the host database C_TEXT($input_t)\n$input_t:="DoSomething"\ncomponent_method($input_t)\n// component_method gets "DoSomething" in $1 (but not the $input_t variable)\n')),(0,n.kt)("p",null,"When you use pointers to allow components and the host project to communicate, you need to take the following specificities into account:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Get pointer")," command will not return a pointer to a variable of the host project if it is called from a component and vice versa.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The component architecture allows the coexistence, within the same interpreted project, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled project). Para utilizar apontadores neste caso, deve respeitar o seguinte princ\xedpio: o int\xe9rprete pode desconectar um ponteiro constru\xeddo em modo compilado; no entanto, em modo compilado, n\xe3o pode deconectar um ponteiro constru\xeddo em modo interpretado. In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se o componente C definir a vari\xe1vel ",(0,n.kt)("inlineCode",{parentName:"p"},"myCvar")," , o componente I pode acessar ao valor desta vari\xe1vel utilizando o ponteiro ",(0,n.kt)("inlineCode",{parentName:"p"},"->myCvar"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se o componente I definir a vari\xe1vel ",(0,n.kt)("inlineCode",{parentName:"p"},"myIvar")," , o componente C n\xe3o pode acessar essa vari\xe1vel usando o ponteiro ",(0,n.kt)("inlineCode",{parentName:"p"},"->myIvar"),". Esta sintaxe causa um erro de execu\xe7\xe3o.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The comparison of pointers using the ",(0,n.kt)("inlineCode",{parentName:"p"},"RESOLVE POINTER")," command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). O tipo da vari\xe1vel pode mesmo ser diferente em ambos os contextos. Se o ",(0,n.kt)("inlineCode",{parentName:"p"},"myptr1")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"myptr2")," apontar cada ponto para uma vari\xe1vel, a compara\xe7\xe3o seguinte produzir\xe1 um resultado incorrecto:"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //Este teste retorna True mesmo se as vari\xe1veis forem diferentes\n")),(0,n.kt)("p",null,"Neste caso \xe9 preciso usar a compara\xe7\xe3o de ponteiros:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"     If(myptr1=myptr2) //Este teste retorna False\n")),(0,n.kt)("h2",a({},{id:"gest\xe3o-de-erros"}),"Gest\xe3o de erros"),(0,n.kt)("p",null,"An ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/19/Concepts/error-handling"}),"error-handling method")," installed by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command only applies to the running application. In the case of an error generated by a component, the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," error-handling method of the host project is not called, and vice versa."),(0,n.kt)("h2",a({},{id:"acesso-\xe0s-tabelas-do-projeto-local"}),"Acesso \xe0s tabelas do projeto local"),(0,n.kt)("p",null,"Apesar de os componentes n\xe3o poderem usar tabelas, ponteiros podem permitir que projetos locais e componentes se comuniquem entre si. Por exemplo, aqui est\xe1 um m\xe9todo que pode ser chamado a partir de um componente:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// chamar a um m\xe9todo componente\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n')),(0,n.kt)("p",null,"Dentro do componente, o c\xf3digo do m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"methCreateRec"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"C_POINTER($1) //Pointer on a table in host project C_POINTER($2) //Pointer on a field in host project C_TEXT($3) // Value to insert\n\n$tablepointer:=$1\n$fieldpointer:=$2 CREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3 SAVE RECORD($tablepointer->)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the context of a component, 4D assumes that a reference to a table form is a reference to the host table form (as components can't have tables.)")),(0,n.kt)("h2",a({},{id:"uso-de-tabelas-e-campos"}),"Uso de tabelas e campos"),(0,n.kt)("p",null,"A component cannot use the tables and fields defined in the 4D structure of the matrix project. Mas pode criar e usar bancos de dados externos e ent\xe3o usar suas tabelas e campos de acordo com suas necessidades. Pode criar e gerenciar bancos de dados externos usando SQL. Mas pode criar e usar bancos de dados externos e ent\xe3o usar suas tabelas e campos de acordo com suas necessidades. Usar um banco externo significa designar temporariamente esse banco de dados como o banco atual, em outras palavras, o banco alvo para as pesquisas SQL executadas por 4D. Pode criar bancos externos usando o comando SQL ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE"),"."),(0,n.kt)("h3",a({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"O c\xf3digo abaixo est\xe1 inclu\xeddo em um componente e realiza tr\xeas a\xe7\xf5es b\xe1sicas com um banco externo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cria o banco externo se n\xe3o existir ainda"),(0,n.kt)("li",{parentName:"ul"},"adiciona dados ao banco externo,"),(0,n.kt)("li",{parentName:"ul"},"l\xea dados do banco externo.")),(0,n.kt)("p",null,"Cria o banco externo:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) armazena os dados em um diret\xf3rio autorizado\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n')),(0,n.kt)("p",null,"Escrita no banco de dados externa:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $Ptr_1:=$2 // retrieves data from the host project through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,n.kt)("p",null,"Lendo de um banco externo:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $Ptr_1:=$2 // accesses data of the host project through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,n.kt)("h2",a({},{id:"uso-de-formul\xe1rios"}),"Uso de formul\xe1rios"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'S\xf3 os "formul\xe1rios projeto" (formul\xe1rios que n\xe3o estejam associados a nenhuma tabela espec\xedfica) podem ser utilizados em um componente. S\xf3 os "formul\xe1rios de projeto" (formul\xe1rios que n\xe3o estejam associados a nenhuma tabela espec\xedfica) podem ser utilizados em um componente.'),(0,n.kt)("li",{parentName:"ul"},"Um componente pode chamar formul\xe1rios tabela do projeto host. Note que nesse caso \xe9 necess\xe1rio usar ponteiros ao inv\xe9s de nomes de tabelas entre colchetes [] para especificar os formul\xe1rios no c\xf3digo do componente.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Se um componente utilizar o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"ADD RECORD"),", se mostrar\xe1 o formul\xe1rio de entrada atual do projeto local, no contexto do projeto local. Consequently, if the form includes variables, the component will not have access to it.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pode publicar formul\xe1rios componentes como subformul\xe1rios no projeto local. Pode publicar formul\xe1rios componentes como subformul\xe1rios no banco de dados local Isso significa que pode desenvolver componentes oferecendo objetos gr\xe1ficos. Por exemplo, Widgets fornecidos por 4D s\xe3o baseados no uso de subformul\xe1rios em componentes.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"No contexto de um componente, qualquer formul\xe1rio projeto referenciado deve pertencer a esse componente. Por exemplo, dentro de um componente, referenciando um formul\xe1rio de projecto anfitri\xe3o usando ",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"Open form window")," ir\xe1 lan\xe7ar um erro.")),(0,n.kt)("h2",a({},{id:"uso-de-recursos"}),"Uso de recursos"),(0,n.kt)("p",null,"Components can use resources located in the Resources folder of the component."),(0,n.kt)("p",null,"Mecanismos autom\xe1ticos s\xe3o operacionais: os arquivos XLIFF encontrados na pasta Resources de um componene ser\xe3o carregados por esse componente."),(0,n.kt)("p",null,"In a host project containing one or more components, each component as well as the host projects has its own \u201cresources string.\u201d Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project."),(0,n.kt)("h2",a({},{id:"execu\xe7\xe3o-de-c\xf3digo-de-inicializa\xe7\xe3o"}),"Execu\xe7\xe3o de c\xf3digo de inicializa\xe7\xe3o"),(0,n.kt)("p",null,"A component can execute 4D code automatically when opening or closing the host database, for example in order to load and/or save the preferences or user states related to the operation of the host database."),(0,n.kt)("p",null,"Executing initialization or closing code is done by means of the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Host Database Event")," database method."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For security reasons, you must explicitly authorize the execution of the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Host Database Event")," database method in the host database in order to be able to call it. To do this, you must check the ",(0,n.kt)("strong",{parentName:"p"},'Execute "On Host Database Event" method of the components')," option on the Security page the Settings.")),(0,n.kt)("h2",a({},{id:"prote\xe7\xe3o-dos-componentes-compila\xe7\xe3o"}),"Prote\xe7\xe3o dos componentes: compila\xe7\xe3o"),(0,n.kt)("p",null,"By default, all the project methods of a matrix project installed as a component are potentially visible from the host project. Em particular:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Seu conte\xfado pode ser selecionado e copiado na \xe1rea de vista pr\xe9via do Explorador. Tamb\xe9m podem ser vistos no depurador. However, it's not possible to open them in the Method editor or modify them."),(0,n.kt)("li",{parentName:"ul"},"The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project.")),(0,n.kt)("p",null,"To protect the project methods of a component effectively, simply compile the matrix project and provide it in the form of a .4dz file. Quando um projeto compilado usado como uma matriz \xe9 instalado como um componente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host project. However, their contents will not appear in the preview area and in the debugger."),(0,n.kt)("li",{parentName:"ul"},"Os outros m\xe9todos projeto do projeto matriz nunca aparecer\xe3o.")))}m.isMDXComponent=!0},5724:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"}}]);