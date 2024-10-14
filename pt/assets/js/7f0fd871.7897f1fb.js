"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80362],{937719:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=n(474848),a=n(28453);const t={id:"components",title:"Componentes"},d=void 0,r={id:"Concepts/components",title:"Componentes",description:"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different databases. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D databases.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/pt/18/Concepts/components",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"components",title:"Componentes"},sidebar:"docs",previous:{title:"Modos interpretado e compilado",permalink:"/docs/pt/18/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/pt/18/Concepts/plug-ins"}},i={},c=[{value:"Defini\xe7\xf5es",id:"defini\xe7\xf5es",level:2},{value:"Prote\xe7\xe3o dos componentes: compila\xe7\xe3o",id:"prote\xe7\xe3o-dos-componentes-compila\xe7\xe3o",level:3},{value:"Partilhar os m\xe9todos de projeto",id:"partilhar-os-m\xe9todos-de-projeto",level:2},{value:"Passar vari\xe1veis",id:"passar-vari\xe1veis",level:2},{value:"Acesso a tabelas do banco de dados local",id:"acesso-a-tabelas-do-banco-de-dados-local",level:2},{value:"Escopo dos comandos de linguagem",id:"escopo-dos-comandos-de-linguagem",level:2},{value:"Comandos n\xe3o utiliz\xe1veis",id:"comandos-n\xe3o-utiliz\xe1veis",level:3},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Uso de formul\xe1rios",id:"uso-de-formul\xe1rios",level:2},{value:"Uso de tabelas e campos",id:"uso-de-tabelas-e-campos",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Uso de recursos",id:"uso-de-recursos",level:2},{value:"Ajuda on-line para componentes",id:"ajuda-on-line-para-componentes",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different databases. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D databases."}),"\n",(0,s.jsxs)(o.p,{children:["Criar e instalar componentes 4D \xe9 realizado diretamente a partir de 4D. Basically, components are managed like ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/plug-ins",children:"plug-ins"})," according to the following principles:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"A component consists of a regular structure file (compiled or not) having the standard architecture or in the form of a package (see .4dbase Extension)."}),"\n",(0,s.jsx)(o.li,{children:'To install a component in a database, you simply need to copy it into the "Components" folder of the database, placed next to the structure file or next to the 4D executable application.'}),"\n",(0,s.jsx)(o.li,{children:"A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, pictures from the library, and so on. N\xe3o pode chamar m\xe9todos de bancos de dados e triggers."}),"\n",(0,s.jsx)(o.li,{children:"N\xe3o \xe9 poss\xedvel utilizar tabelas standard ou ficheiros de dados em componentes 4D. Entretanto um componente n\xe3o pode criar ou usar tabelas, campos e arquivos de dados usando mecanismos de bancos de dados externos. S\xe3o bancos 4D independentes com as que se trabalha utilizando comandos SQL."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"defini\xe7\xf5es",children:"Defini\xe7\xf5es"}),"\n",(0,s.jsx)(o.p,{children:"The component management mechanisms in 4D require the implementation of the following terms and concepts:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Matrix Database"}),": 4D database used for developing the component. O banco de dados matriz \xe9 um banco de dados padr\xe3o sem atributos espec\xedficos. Uma base matriz forma um \xfanico componente. The matrix database is intended to be copied, compiled or not, into the Components folder of the 4D application or the database that will be using the component (host database)."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Host Database"}),": Database in which a component is installed and used."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Component"}),": Matrix database, compiled or not, copied into the Components folder of the 4D application or the host database and whose contents are used in the host databases."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:'It should be noted that a database can be both a \u201cmatrix\u201d and a \u201chost,\u201d in other words, a matrix database can itself use one or more components. No entanto, um componente n\xe3o pode utilizar ele pr\xf3prio "subcomponentes".'}),"\n",(0,s.jsx)(o.h3,{id:"prote\xe7\xe3o-dos-componentes-compila\xe7\xe3o",children:"Prote\xe7\xe3o dos componentes: compila\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"By default, all the project methods of a matrix database installed as a component are potentially visible from the host database. Em particular:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host database. Seu conte\xfado pode ser selecionado e copiado na \xe1rea de vista pr\xe9via do Explorador. Tamb\xe9m podem ser vistos no depurador. However, it is not possible to open them in the Method editor nor to modify them."}),"\n",(0,s.jsx)(o.li,{children:"The other project methods of the matrix database do not appear in the Explorer but they too can be viewed in the debugger of the host database."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"To protect the project methods of a component effectively, simply compile the matrix database and provide it in the form of a .4dc file (compiled database that does not contain the interpreted code). Quando um banco de dados matriz compilado \xe9 instalado como um componente:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host database. However, their contents will not appear in the preview area nor in the debugger."}),"\n",(0,s.jsx)(o.li,{children:"Os outros m\xe9todos projeto do banco de dados de matriz nunca aparecer\xe3o."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"partilhar-os-m\xe9todos-de-projeto",children:"Partilhar os m\xe9todos de projeto"}),"\n",(0,s.jsx)(o.p,{children:"All the project methods of a matrix database are by definition included in the component (the database is the component), which means that they can be called and executed by the component."}),"\n",(0,s.jsxs)(o.p,{children:["On the other hand, by default these project methods will not be visible, nor can they be called in the host database. In the matrix database, you must explicitly designate the methods that you want to share with the host database. These project methods can be called in the code of the host database (but they cannot be modified in the Method editor of the host database). Esses m\xe9todos formam ",(0,s.jsx)(o.strong,{children:"pontos de entrada"})," no componente."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Note:"})," Conversely, for security reasons, by default a component cannot execute project methods belonging to the host database. In certain cases, you may need to allow a component to access the project methods of your host database. To do this, you must explicitly designate the project methods of the host database that you want to make accessible to the components."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(300173).A+"",width:"592",height:"146"})}),"\n",(0,s.jsx)(o.h2,{id:"passar-vari\xe1veis",children:"Passar vari\xe1veis"}),"\n",(0,s.jsx)(o.p,{children:"The local, process and interprocess variables are not shared between components and host databases. The only way to access component variables from the host database and vice versa is using pointers."}),"\n",(0,s.jsx)(o.p,{children:"Exemplo usando um array:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"//Na base de dados do anfitri\xe3o:\n     ARRAY INTEGER(MyArray;10)\n     AMethod(->MyArray)\n\n//No componente, o m\xe9todo do projecto AMethod cont\xe9m:\n     APPEND TO ARRAY($1->;2)\n"})}),"\n",(0,s.jsx)(o.p,{children:"Exemplos usando vari\xe1veis:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_TEXT(myvariable)\n component_method1(->myvariable)\n C_POINTER($p)\n $p:=component_method2(...)\n"})}),"\n",(0,s.jsx)(o.p,{children:"When you use pointers to allow components and the host database to communicate, you need to take the following specificities into account:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"Get pointer"})," command will not return a pointer to a variable of the host database if it is called from a component and vice versa."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"The component architecture allows the coexistence, within the same interpreted database, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled database). Para utilizar apontadores neste caso, deve respeitar o seguinte princ\xedpio: o int\xe9rprete pode desconectar um ponteiro constru\xeddo em modo compilado; no entanto, em modo compilado, n\xe3o pode deconectar um ponteiro constru\xeddo em modo interpretado. Let\u2019s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host database."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Se o componente C definir a vari\xe1vel ",(0,s.jsx)(o.code,{children:"myCvar"})," , o componente I pode acessar ao valor desta vari\xe1vel utilizando o ponteiro ",(0,s.jsx)(o.code,{children:"->myCvar"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Se o componente I definir a vari\xe1vel ",(0,s.jsx)(o.code,{children:"myIvar"})," , o componente C n\xe3o pode acessar essa vari\xe1vel usando o ponteiro ",(0,s.jsx)(o.code,{children:"->myIvar"}),". Esta sintaxe causa um erro de execu\xe7\xe3o."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["The comparison of pointers using the ",(0,s.jsx)(o.code,{children:"RESOLVE POINTER"})," command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host database (or another component). O tipo da vari\xe1vel pode mesmo ser diferente em ambos os contextos. Se o ",(0,s.jsx)(o.code,{children:"myptr1"})," e ",(0,s.jsx)(o.code,{children:"myptr2"})," apontar cada ponto para uma vari\xe1vel, a compara\xe7\xe3o seguinte produzir\xe1 um resultado incorrecto:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //Este teste retorna True mesmo se as vari\xe1veis forem diferentes\n"})}),"\n",(0,s.jsx)(o.p,{children:"Neste caso \xe9 preciso usar a compara\xe7\xe3o de ponteiros:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     If(myptr1=myptr2) //Este teste retorna False\n"})}),"\n",(0,s.jsx)(o.h2,{id:"acesso-a-tabelas-do-banco-de-dados-local",children:"Acesso a tabelas do banco de dados local"}),"\n",(0,s.jsx)(o.p,{children:"Although components cannot use tables, pointers can permit host databases and components to communicate with each other. Por exemplo, aqui est\xe1 um m\xe9todo que pode ser chamado a partir de um componente:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'// chamar a um m\xe9todo componente\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Dentro do componente, o c\xf3digo do m\xe9todo ",(0,s.jsx)(o.code,{children:"methCreateRec"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"C_POINTER($1) //Pointer on a table in host database\nC_POINTER($2) //Pointer on a field in host database\nC_TEXT($3) // Value to insert\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n"})}),"\n",(0,s.jsx)(o.h2,{id:"escopo-dos-comandos-de-linguagem",children:"Escopo dos comandos de linguagem"}),"\n",(0,s.jsxs)(o.p,{children:["Exceto pelos ",(0,s.jsx)(o.a,{href:"#unusable-commands",children:"Comandos n\xe3o utiliz\xe1veis"}),", um componente n\xe3o pode usar qualquer comando da linguagem 4D."]}),"\n",(0,s.jsxs)(o.p,{children:["When commands are called from a component, they are executed in the context of the component, except for the ",(0,s.jsx)(o.code,{children:"EXECUTE METHOD"})," command that uses the context of the method specified by the command. Also note that the read commands of the \u201cUsers and Groups\u201d theme can be used from a component but will read the users and groups of the host database (a component does not have its own users and groups)."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"SET DATABASE PARAMETER"})," and ",(0,s.jsx)(o.code,{children:"Get database parameter"})," commands are an exception: their scope is global to the database. When these commands are called from a component, they are applied to the host database."]}),"\n",(0,s.jsxs)(o.p,{children:["Al\xe9m disso, medidas especificas foram criadas para os comandos ",(0,s.jsx)(o.code,{children:"Structure file"})," e ",(0,s.jsx)(o.code,{children:"Get 4D folder"})," quando utilizados no marco dos componentes."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"COMPONENT LIST"})," command can be used to obtain the list of components that are loaded by the host database."]}),"\n",(0,s.jsx)(o.h3,{id:"comandos-n\xe3o-utiliz\xe1veis",children:"Comandos n\xe3o utiliz\xe1veis"}),"\n",(0,s.jsx)(o.p,{children:"Os comandos abaixo n\xe3o s\xe3o compat\xedveis para seu uso dentro de um componente porque modificam o arquivo de estrutura - que est\xe1 aberto em apenas leitura. Their execution in a component will generate the error -10511, \u201cThe CommandName command cannot be called from a component\u201d:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"ON EVENT CALL"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"Method called on event"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"SET PICTURE TO LIBRARY"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"REMOVE PICTURE FROM LIBRARY"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"SAVE LIST"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"ARRAY TO LIST"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"EDIT FORM"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"CREATE USER FORM"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"DELETE USER FORM"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"CHANGE PASSWORD"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"EDIT ACCESS"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"Set group properties"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"Set user properties"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"DELETE USER"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"CHANGE LICENSES"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"BLOB TO USERS"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"SET PLUGIN ACCESS"})}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["O comando ",(0,s.jsx)(o.code,{children:"Current form table"})," devolve ",(0,s.jsx)(o.code,{children:"Nil"})," quando chamado no contexto de um formul\xe1rio projeto. Por isso n\xe3o pode ser usado em um componente."]}),"\n",(0,s.jsxs)(o.li,{children:["SQL data definition language commands (",(0,s.jsx)(o.code,{children:"CREATE TABLE"}),", ",(0,s.jsx)(o.code,{children:"DROP TABLE"}),", etc.) cannot be used on the component database. Entretanto s\xe3o compat\xedveis com bancos de dados externos (ver o comando SQL",(0,s.jsx)(o.code,{children:"CREATE DATABASE"}),")."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsxs)(o.p,{children:["An ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/error-handling",children:"error-handling method"})," installed by the ",(0,s.jsx)(o.code,{children:"ON ERR CALL"})," command only applies to the running database. In the case of an error generated by a component, the ",(0,s.jsx)(o.code,{children:"ON ERR CALL"})," error-handling method of the host database is not called, and vice versa."]}),"\n",(0,s.jsx)(o.h2,{id:"uso-de-formul\xe1rios",children:"Uso de formul\xe1rios"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'S\xf3 os "formul\xe1rios projeto" (formul\xe1rios que n\xe3o estejam associados a nenhuma tabela espec\xedfica) podem ser utilizados em um componente. Any project forms present in the matrix database can be used by the component.'}),"\n",(0,s.jsx)(o.li,{children:"Um componente pode chamar formul\xe1rios tabela do banco de dados local. Note que nesse caso \xe9 necess\xe1rio usar ponteiros ao inv\xe9s de nomes de tabelas entre colchetes [] para especificar os formul\xe1rios no c\xf3digo do componente."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Note:"})," If a component uses the ",(0,s.jsx)(o.code,{children:"ADD RECORD"})," command, the current Input form of the host database will be displayed, in the context of the host database. Consequently, if the form includes variables, the component will not have access to it."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Pode publicar formul\xe1rios componentes como subformul\xe1rios nos bancos de dados locais. Pode publicar formul\xe1rios componentes como subformul\xe1rios no banco de dados local Isso significa que pode desenvolver componentes oferecendo objetos gr\xe1ficos. Por exemplo, Widgets fornecidos por 4D s\xe3o baseados no uso de subformul\xe1rios em componentes."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"uso-de-tabelas-e-campos",children:"Uso de tabelas e campos"}),"\n",(0,s.jsxs)(o.p,{children:["A component cannot use the tables and fields defined in the 4D structure of the matrix database. Mas pode criar e usar bancos de dados externos e ent\xe3o usar suas tabelas e campos de acordo com suas necessidades. Pode criar e gerenciar bancos de dados externos usando SQL. An external database is a 4D database that is independent from the main 4D database, but that you can work with from the main 4D database. Usar um banco externo significa designar temporariamente esse banco de dados como o banco atual, em outras palavras, o banco alvo para as pesquisas SQL executadas por 4D. Pode criar bancos externos usando o comando SQL ",(0,s.jsx)(o.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"O c\xf3digo abaixo est\xe1 inclu\xeddo em um componente e realiza tr\xeas a\xe7\xf5es b\xe1sicas com um banco externo:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"cria o banco externo se n\xe3o existir ainda"}),"\n",(0,s.jsx)(o.li,{children:"adiciona dados ao banco externo,"}),"\n",(0,s.jsx)(o.li,{children:"l\xea dados do banco externo."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Cria o banco externo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) armazena os dados em um diret\xf3rio autorizado\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n'})}),"\n",(0,s.jsx)(o.p,{children:"Escrita no banco de dados externa:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $Ptr_1:=$2 // retrieves data from the host database through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,s.jsx)(o.p,{children:"Lendo de um banco externo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $Ptr_1:=$2 // accesses data of the host database through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,s.jsx)(o.h2,{id:"uso-de-recursos",children:"Uso de recursos"}),"\n",(0,s.jsx)(o.p,{children:"Os componentes podem utilizar recursos. In conformity with the resource management principle, if the component is of the .4dbase architecture (recommended architecture), the Resources folder must be placed inside this folder."}),"\n",(0,s.jsx)(o.p,{children:"Os mecanismos autom\xe1ticos est\xe3o operacionais: os arquivos XLIFF encontrados na pasta Recursos de um componente ser\xe3o carregados por este componente."}),"\n",(0,s.jsx)(o.p,{children:"In a host database containing one or more components, each component as well as the host databases has its own \u201cresources string.\u201d Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database."}),"\n",(0,s.jsx)(o.h2,{id:"ajuda-on-line-para-componentes",children:"Ajuda on-line para componentes"}),"\n",(0,s.jsx)(o.p,{children:"A specific mechanism has been implemented in order to allow developers to add on-line help to their components. O princ\xedpio \xe9 o mesmo que o previsto para os bancos de dados 4D:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,"}),"\n",(0,s.jsx)(o.li,{children:"The help file must be put next to the structure file of the component and have the same name as the structure file,"}),"\n",(0,s.jsx)(o.li,{children:"This file is then automatically loaded into the Help menu of the application with the title \u201cHelp for...\u201d followed by the name of the help file."}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},300173:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>r});var s=n(296540);const a={},t=s.createContext(a);function d(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);