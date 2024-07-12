/*! For license information please see 51ff7ed8.4b9b4b79.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21237],{86119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(474848),s=t(28453);const r={id:"components",title:"Components"},i=void 0,a={id:"Concepts/components",title:"Components",description:"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.",source:"@site/versioned_docs/version-19/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/19/Concepts/components",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"components",title:"Components"},sidebar:"docs",previous:{title:"Interpreted and Compiled modes",permalink:"/docs/19/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/19/Concepts/plug-ins"}},c={},d=[{value:"Presentation",id:"presentation",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Principles",id:"principles",level:3},{value:"Scope of language commands",id:"scope-of-language-commands",level:2},{value:"Unusable commands",id:"unusable-commands",level:3},{value:"Sharing of project methods",id:"sharing-of-project-methods",level:2},{value:"Passing variables",id:"passing-variables",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Access to tables of the host project",id:"access-to-tables-of-the-host-project",level:2},{value:"Use of tables and fields",id:"use-of-tables-and-fields",level:2},{value:"Example",id:"example",level:3},{value:"Use of forms",id:"use-of-forms",level:2},{value:"Use of resources",id:"use-of-resources",level:2},{value:"Executing initialization code",id:"executing-initialization-code",level:2},{value:"Protection of components: compilation",id:"protection-of-components-compilation",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications."}),"\n",(0,o.jsx)(n.h2,{id:"presentation",children:"Presentation"}),"\n",(0,o.jsx)(n.h3,{id:"definitions",children:"Definitions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Matrix Project"}),": 4D project used for developing the component. The matrix project is a standard project with no specific attributes. A matrix project forms a single component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Host Project"}),": Application project in which a component is installed and used."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Component"}),": Matrix project, compiled or not, copied into the ",(0,o.jsx)(n.a,{href:"/docs/19/Project/architecture",children:(0,o.jsx)(n.code,{children:"Components"})})," folder of the host application and whose contents are used in the host application."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"principles",children:"Principles"}),"\n",(0,o.jsxs)(n.p,{children:["Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like ",(0,o.jsx)(n.a,{href:"/docs/19/Concepts/plug-ins",children:"plug-ins"})," according to the following principles:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A component consists of a regular 4D project file."}),"\n",(0,o.jsxs)(n.li,{children:["To install a component, you simply need to copy it into the ",(0,o.jsxs)(n.a,{href:"/docs/19/Project/architecture",children:[(0,o.jsx)(n.code,{children:"Components"})," folder of the project"]}),". You can use aliases or shortcuts."]}),"\n",(0,o.jsx)(n.li,{children:"A project can be both a \u201cmatrix\u201d and a \u201chost,\u201d in other words, a matrix project can itself use one or more components. However, a component cannot use \u201csub-components\u201d itself."}),"\n",(0,o.jsx)(n.li,{children:"A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, and so on. It cannot call database methods and triggers."}),"\n",(0,o.jsx)(n.li,{children:"You cannot use standard tables or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands."}),"\n",(0,o.jsx)(n.li,{children:"A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"scope-of-language-commands",children:"Scope of language commands"}),"\n",(0,o.jsxs)(n.p,{children:["Except for ",(0,o.jsx)(n.a,{href:"#unusable-commands",children:"Unusable commands"}),", a component can use any command of the 4D language."]}),"\n",(0,o.jsxs)(n.p,{children:["When commands are called from a component, they are executed in the context of the component, except for the ",(0,o.jsx)(n.code,{children:"EXECUTE METHOD"})," or ",(0,o.jsx)(n.code,{children:"EXECUTE FORMULA"})," command that use the context of the method specified by the command. Also note that the read commands of the \u201cUsers and Groups\u201d theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups)."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SET DATABASE PARAMETER"})," and ",(0,o.jsx)(n.code,{children:"Get database parameter"})," commands are an exception: their scope is global to the application. When these commands are called from a component, they are applied to the host application project."]}),"\n",(0,o.jsxs)(n.p,{children:["Furthermore, specific measures have been specified for the ",(0,o.jsx)(n.code,{children:"Structure file"})," and ",(0,o.jsx)(n.code,{children:"Get 4D folder"})," commands when they are used in the framework of components."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"COMPONENT LIST"})," command can be used to obtain the list of components that are loaded by the host project."]}),"\n",(0,o.jsx)(n.h3,{id:"unusable-commands",children:"Unusable commands"}),"\n",(0,o.jsx)(n.p,{children:"The following commands are not compatible for use within a component because they modify the structure file \u2014 which is open in read-only. Their execution in a component will generate the error -10511, \u201cThe CommandName command cannot be called from a component\u201d:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ON EVENT CALL"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Method called on event"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"SET PICTURE TO LIBRARY"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"REMOVE PICTURE FROM LIBRARY"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"SAVE LIST"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ARRAY TO LIST"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"EDIT FORM"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"CREATE USER FORM"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"DELETE USER FORM"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"CHANGE PASSWORD"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"EDIT ACCESS"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Set group properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Set user properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"DELETE USER"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"CHANGE LICENSES"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"BLOB TO USERS"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"SET PLUGIN ACCESS"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"Current form table"})," command returns ",(0,o.jsx)(n.code,{children:"Nil"})," when it is called in the context of a project form. Consequently, it cannot be used in a component."]}),"\n",(0,o.jsxs)(n.li,{children:["SQL data definition language commands (",(0,o.jsx)(n.code,{children:"CREATE TABLE"}),", ",(0,o.jsx)(n.code,{children:"DROP TABLE"}),", etc.) cannot be used on the component project. However, they are supported with external databases (see ",(0,o.jsx)(n.code,{children:"CREATE DATABASE"})," SQL command)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"sharing-of-project-methods",children:"Sharing of project methods"}),"\n",(0,o.jsx)(n.p,{children:"All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed by the component."}),"\n",(0,o.jsxs)(n.p,{children:["On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. These project methods can be called in the code of the host project (but they cannot be modified in the Method editor of the host project). These methods form ",(0,o.jsx)(n.strong,{children:"entry points"})," in the component."]}),"\n",(0,o.jsxs)(n.p,{children:["Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the ",(0,o.jsx)(n.strong,{children:"Shared by components and host project"})," box)."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(883549).A+"",width:"592",height:"146"})}),"\n",(0,o.jsxs)(n.p,{children:["Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the ",(0,o.jsx)(n.code,{children:"EXECUTE FORMULA"})," or ",(0,o.jsx)(n.code,{children:"EXECUTE METHOD"})," commands. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'// Host Method\ncomponent_method("host_method_name")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"// component_method\n C_TEXT($1)\n EXECUTE METHOD($1)\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["An interpreted host database that contains interpreted components can be compiled or syntax checked if it does not call methods of the interpreted component. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation.\nKeep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the ",(0,o.jsx)(n.code,{children:"EXECUTE METHOD"})," and ",(0,o.jsx)(n.code,{children:"EXECUTE FORMULA"})," commands."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"passing-variables",children:"Passing variables"}),"\n",(0,o.jsx)(n.p,{children:"The local, process and interprocess variables are not shared between components and host projects. The only way to modify component variables from the host project and vice versa is using pointers."}),"\n",(0,o.jsx)(n.p,{children:"Example using an array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"//In the host project:\n     ARRAY INTEGER(MyArray;10)\n     AMethod(->MyArray)\n\n//In the component, the AMethod project method contains:\n     APPEND TO ARRAY($1->;2)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Examples using variables:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"C_TEXT(myvariable)\ncomponent_method1(->myvariable)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"C_POINTER($p)\n$p:=component_method2(...)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Without a pointer, a component can still access the value of a host database variable (but not the variable itself) and vice versa:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'//In the host database\nC_TEXT($input_t)\n$input_t:="DoSomething"\ncomponent_method($input_t)\n// component_method gets "DoSomething" in $1 (but not the $input_t variable)\n'})}),"\n",(0,o.jsx)(n.p,{children:"When you use pointers to allow components and the host project to communicate, you need to take the following specificities into account:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Get pointer"})," command will not return a pointer to a variable of the host project if it is called from a component and vice versa."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The component architecture allows the coexistence, within the same interpreted project, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled project). In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.\nLet\u2019s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host project."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If component C defines the ",(0,o.jsx)(n.code,{children:"myCvar"})," variable, component I can access the value of this variable by using the pointer ",(0,o.jsx)(n.code,{children:"->myCvar"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If component I defines the ",(0,o.jsx)(n.code,{children:"myIvar"})," variable, component C cannot access this variable by using the pointer ",(0,o.jsx)(n.code,{children:"->myIvar"}),". This syntax causes an execution error."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The comparison of pointers using the ",(0,o.jsx)(n.code,{children:"RESOLVE POINTER"})," command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). The type of the variable can even be different in both contexts. If the ",(0,o.jsx)(n.code,{children:"myptr1"})," and ",(0,o.jsx)(n.code,{children:"myptr2"})," pointers each point to a variable, the following comparison will produce an incorrect result:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //This test returns True even though the variables are different\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this case, it is necessary to use the comparison of pointers:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"     If(myptr1=myptr2) //This test returns False\n"})}),"\n",(0,o.jsx)(n.h2,{id:"error-handling",children:"Error handling"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.a,{href:"/docs/19/Concepts/error-handling",children:"error-handling method"})," installed by the ",(0,o.jsx)(n.code,{children:"ON ERR CALL"})," command only applies to the running application. In the case of an error generated by a component, the ",(0,o.jsx)(n.code,{children:"ON ERR CALL"})," error-handling method of the host project is not called, and vice versa."]}),"\n",(0,o.jsx)(n.h2,{id:"access-to-tables-of-the-host-project",children:"Access to tables of the host project"}),"\n",(0,o.jsx)(n.p,{children:"Although components cannot use tables, pointers can allow host projects and components to communicate with each other. For example, here is a method that could be called from a component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'// calling a component method\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Within the component, the code of the ",(0,o.jsx)(n.code,{children:"methCreateRec"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"C_POINTER($1) //Pointer on a table in host project\nC_POINTER($2) //Pointer on a field in host project\nC_TEXT($3) // Value to insert\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"In the context of a component, 4D assumes that a reference to a table form is a reference to the host table form (as components can't have tables.)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"use-of-tables-and-fields",children:"Use of tables and fields"}),"\n",(0,o.jsxs)(n.p,{children:["A component cannot use the tables and fields defined in the 4D structure of the matrix project. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D project that is independent from the main 4D project, but that you can work with from the main 4D project. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL ",(0,o.jsx)(n.code,{children:"CREATE DATABASE"})," command."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"The following code is included in a component and performs three basic actions with an external database:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"creates the external database if it does not already exist,"}),"\n",(0,o.jsx)(n.li,{children:"adds data to the external database,"}),"\n",(0,o.jsx)(n.li,{children:"reads data from the external database."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Creating the external database:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) stores the data in an authorized directory\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n \n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n \n        USE DATABASE SQL_INTERNAL;\n \n End SQL\n'})}),"\n",(0,o.jsx)(n.p,{children:"Writing in the external database:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" $Ptr_1:=$2 // retrieves data from the host project through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n \n        USE DATABASE DATAFILE :[<>MyDatabase];\n \n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n \n        USE DATABASE SQL_INTERNAL;\n \n End SQL\n"})}),"\n",(0,o.jsx)(n.p,{children:"Reading from an external database:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" $Ptr_1:=$2 // accesses data of the host project through pointers\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n \n Begin SQL\n \n    USE DATABASE DATAFILE :[<>MyDatabase];\n \n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n \n    USE DATABASE SQL_INTERNAL;\n \n End SQL\n"})}),"\n",(0,o.jsx)(n.h2,{id:"use-of-forms",children:"Use of forms"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Only \u201cproject forms\u201d (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix project can be used by the component."}),"\n",(0,o.jsx)(n.li,{children:"A component can call table forms of the host project. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If a component uses the ",(0,o.jsx)(n.code,{children:"ADD RECORD"})," command, the current Input form of the host project will be displayed, in the context of the host project. Consequently, if the form includes variables, the component will not have access to it."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can publish component forms as subforms in the host projects. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["In the context of a component, any referenced project form must belong to the component. For example, inside a component, referencing a host project form using ",(0,o.jsx)(n.code,{children:"DIALOG"})," or ",(0,o.jsx)(n.code,{children:"Open form window"})," will throw an error."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"use-of-resources",children:"Use of resources"}),"\n",(0,o.jsx)(n.p,{children:"Components can use resources located in the Resources folder of the component."}),"\n",(0,o.jsx)(n.p,{children:"Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component."}),"\n",(0,o.jsx)(n.p,{children:"In a host project containing one or more components, each component as well as the host projects has its own \u201cresources string.\u201d Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project."}),"\n",(0,o.jsx)(n.h2,{id:"executing-initialization-code",children:"Executing initialization code"}),"\n",(0,o.jsx)(n.p,{children:"A component can execute 4D code automatically when opening or closing the host database, for example in order to load and/or save the preferences or user states related to the operation of the host database."}),"\n",(0,o.jsxs)(n.p,{children:["Executing initialization or closing code is done by means of the ",(0,o.jsx)(n.code,{children:"On Host Database Event"})," database method."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["For security reasons, you must explicitly authorize the execution of the ",(0,o.jsx)(n.code,{children:"On Host Database Event"})," database method in the host database in order to be able to call it. To do this, you must check the ",(0,o.jsx)(n.strong,{children:'Execute "On Host Database Event" method of the components'})," option on the Security page the Settings."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"protection-of-components-compilation",children:"Protection of components: compilation"}),"\n",(0,o.jsx)(n.p,{children:"By default, all the project methods of a matrix project installed as a component are potentially visible from the host project. In particular:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Their contents can be selected and copied in the preview area of the Explorer. They can also be viewed in the debugger. However, it's not possible to open them in the Method editor or modify them."}),"\n",(0,o.jsx)(n.li,{children:"The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To protect the project methods of a component effectively, simply compile the matrix project and provide it in the form of a .4dz file. When a compiled matrix project is installed as a component:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host project. However, their contents will not appear in the preview area and in the debugger."}),"\n",(0,o.jsx)(n.li,{children:"The other project methods of the matrix project will never appear."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var o=t(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,r={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},883549:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(296540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);