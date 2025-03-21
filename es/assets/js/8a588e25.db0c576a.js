"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24937"],{388030:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/compile-project","title":"Compile project","description":"Compile project {( {;}{options} )} : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/compile-project.md","sourceDirName":"commands","slug":"/commands/compile-project","permalink":"/docs/es/commands/compile-project","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcompile-project.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"compile-project","title":"Compile project","slug":"/commands/compile-project","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Compilador","permalink":"/docs/es/commands/theme/Compiler"},"next":{"title":"IDLE","permalink":"/docs/es/commands/idle"}}'),t=s("785893"),i=s("250065");let d={id:"compile-project",title:"Compile project",slug:"/commands/compile-project",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Par\xe1metro options",id:"par\xe1metro-options",level:3},{value:"Resultado",id:"resultado",level:3},{value:"variable objects",id:"variable-objects",level:2},{value:"code object",id:"code-object",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compile project"})," {( {",(0,t.jsx)(n.em,{children:"projectFile"}),"}{;}{",(0,t.jsx)(n.em,{children:"options"}),"} )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"projectFile"}),(0,t.jsx)(n.td,{children:"4D.File"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:".4DProject file to compile"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Object that specifies compilation options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Object containing information on the compilation status"})]})]})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R8"}),(0,t.jsxs)(n.td,{children:["Support of ",(0,t.jsx)(n.code,{children:"type"}),' "formObjectExpression"']})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compile project"})," permite compilar el proyecto local actual o el proyecto especificado en el par\xe1metro ",(0,t.jsx)(n.em,{children:"projectFile"}),". Para m\xe1s informaci\xf3n sobre compilaci\xf3n, consultr la ",(0,t.jsx)(n.a,{href:"/docs/es/Project/compiler",children:"p\xe1gina de compilaci\xf3n"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the command uses the compiler options defined in the Structure Settings. You can override them by passing an ",(0,t.jsx)(n.em,{children:"options"})," parameter. Se soportan las siguientes sintaxis:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(): compiles the opened project using the options defined in the Structure Settings"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(",(0,t.jsx)(n.em,{children:"options"}),"): compiles the opened project. The ",(0,t.jsx)(n.em,{children:"options"})," defined override the Structure Settings"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(",(0,t.jsx)(n.em,{children:"projectFile"}),"): compiles the ",(0,t.jsx)(n.em,{children:"projectFile"})," 4DProject using the options defined in the Structure Settings"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compile project"}),"(",(0,t.jsx)(n.em,{children:"projectFile"}),"; ",(0,t.jsx)(n.em,{children:"options"}),"): compiles the ",(0,t.jsx)(n.em,{children:"projectFile"})," 4DProject and the ",(0,t.jsx)(n.em,{children:"options"})," defined override the Structure Settings"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Binary databases cannot be compiled using this command."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the Compiler window, this command requires that you explicitly designate the component(s) to compile. When compiling a project with ",(0,t.jsx)(n.strong,{children:"Compile project"}),", you need to declare its components using the ",(0,t.jsx)(n.em,{children:"components"})," property of the ",(0,t.jsx)(n.em,{children:"options"})," parameter. Keep in mind that the components must already be compiled (binary components are supported)."]}),"\n",(0,t.jsxs)(n.p,{children:["The resulting compiled code will be stored in the DerivedData or Libraries folder of the project, depending on the ",(0,t.jsx)(n.em,{children:"targets"})," property of the ",(0,t.jsx)(n.em,{children:"options"})," parameter. If you want to create .4dz files, you still need to manually zip the compiled project or use the ",(0,t.jsx)(n.a,{href:"/docs/es/Desktop/building",children:"build application"})," feature."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass an empty collection in ",(0,t.jsx)(n.em,{children:"targets"}),", ",(0,t.jsx)(n.strong,{children:"Compile project"})," will execute a syntax check without compiling."]}),"\n",(0,t.jsxs)(n.p,{children:["Compilation errors, if any, are returned as objects in the ",(0,t.jsx)(n.em,{children:"errors"})," collection."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," You cannot call this command when another compilation is running (for example, a compilation launched from the Compilation window)."]}),"\n",(0,t.jsx)(n.h3,{id:"par\xe1metro-options",children:"Par\xe1metro options"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"options"})," parameter is an object. Here are the available compilation options:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propiedad"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"components"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection of 4D.File objects to dependent components (must be already compiled)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defaultTypeForButtons"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Possible value: Is real or Is longint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defaultTypeForNumerics"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Possible value: Is real or Is longint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"generateSymbols"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True to generate symbol information in the .symbols returned object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"generateSyntaxFile"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["True para generar un ",(0,t.jsx)(n.a,{href:"/docs/es/settings/general",children:"archivo de sintaxis para la finalizaci\xf3n del c\xf3digo"}),".md#generate-syntax-file-for-code-completion-when en-compiled) en la carpeta \\Resources\\en.lproj del proyecto"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"generateTypingMethods"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:'"reset" or "append" to generate typing methods. If value is "append", existing variable declarations won\'t be modified (compiler window behavior). If value is "reset" existing variable declarations are removed beforehand.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"plugins"}),(0,t.jsx)(n.td,{children:"Objeto 4D.Folder"}),(0,t.jsxs)(n.td,{children:["Carpeta de Plug-ins a usar en lugar de ",(0,t.jsx)(n.a,{href:"/docs/es/Project/architecture#plugins",children:"Carpeta de Plug-ins del proyecto actual"}),". This property is only available with the ",(0,t.jsx)(n.em,{children:"projectFile"})," syntax."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targets"}),(0,t.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,t.jsx)(n.td,{children:'Possible values: "x86_64_generic", "arm64_macOS_lib". Pass an empty collection to execute syntax check only'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeInference"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:['"all": el compilador deduce los tipos de todas las variables no declaradas expl\xedcitamente, "locals": el compilador deduce los tipos de variables locales no declaradas expl\xedcitamente, "none": todas las variables deben ser expl\xedcitamente declaradas en el c\xf3digo (modo antiguo), "direct": todas las variables deben ser expl\xedcitamente declaradas en el c\xf3digo (',(0,t.jsx)(n.a,{href:"/docs/es/Project/compiler#enabling-direct-typing",children:"escritura directa"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"warnings"}),(0,t.jsx)(n.td,{children:"Colecci\xf3n de objetos"}),(0,t.jsx)(n.td,{children:"Defines the warnings state"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].major"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Warning main number, before the dot"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].minor"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Warning second number, after the dot"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].enabled"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Warning activation state"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," When the ",(0,t.jsx)(n.em,{children:"warnings"})," attribute is not defined in the ",(0,t.jsx)(n.em,{children:"options"})," object, the ",(0,t.jsx)(n.strong,{children:"Compile project"})," command uses the default warning generation statuses defined in the settings."]}),"\n",(0,t.jsx)(n.h3,{id:"resultado",children:"Resultado"}),"\n",(0,t.jsxs)(n.p,{children:["The object returned by ",(0,t.jsx)(n.strong,{children:"Compile project"})," has up to three properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propiedad"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True si la acci\xf3n guardar tiene \xe9xito, false en caso contrario."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors"}),(0,t.jsx)(n.td,{children:"Colecci\xf3n de objetos"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Available only in case of error or warning"}),". Collection of objects describing compilation errors or warnings"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].isError"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Error if True, warning otherwise"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Mensaje de error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#code-object",children:"objeto c\xf3digo"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].line"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Line number of error in the code. For class methods, line number in the function"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[].lineInFile"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:'Line number in the file (different from "line" for class methods, and takes into account the %attributes prefix line)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Available only if generateSymbols option is set to True:"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.interprocessVariables"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"List of all interprocess variables"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.interprocessVariables.variables"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsxs)(n.td,{children:["Colecci\xf3n de ",(0,t.jsx)(n.a,{href:"#variable-objects",children:"objetos variables"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.interprocessVariables.size"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.processVariables"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"List of all process variables"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.processVariables.variables"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsxs)(n.td,{children:["Colecci\xf3n de ",(0,t.jsx)(n.a,{href:"#variable-objects",children:"objetos variables"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.processVariables.size"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.localVariables"}),(0,t.jsx)(n.td,{children:"Colecci\xf3n de objetos"}),(0,t.jsx)(n.td,{children:"List of local variables per method"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.localVariables[].code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#code-object",children:"objeto c\xf3digo"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.localVariables[].variables"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsxs)(n.td,{children:["Colecci\xf3n de ",(0,t.jsx)(n.a,{href:"#variable-objects",children:"objetos variables"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods"}),(0,t.jsx)(n.td,{children:"Colecci\xf3n de objetos"}),(0,t.jsx)(n.td,{children:"Lista de m\xe9todos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[].code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#code-object",children:"objeto c\xf3digo"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[].callCount"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of times this method has been called"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[].params"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection of parameter types (Value type numerical codes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbols.methods[]. threadSafe"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"Indicates if this method is thread safe"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Para obtener m\xe1s informaci\xf3n, consulte ",(0,t.jsx)(n.a,{href:"/docs/es/Project/compiler#compilation-tools",children:"Herramientas de compilaci\xf3n"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"variable-objects",children:"variable objects"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"interprocessVariables.variables"})," and ",(0,t.jsx)(n.code,{children:"processVariables.variables"})," contain objects with the following structure:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propiedad"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Name of the variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Type of the variable (like Value type command)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayDimension"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"For arrays only: 1 for mono dimension arrays, 2 for two-dimension arrays"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"For process and interprocess variables: descriptor of where the variable has been defined"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"code-object",children:"code object"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"code"})," property in ",(0,t.jsx)(n.code,{children:"methods.code"})," and ",(0,t.jsx)(n.code,{children:"errors.code"})," is an object with the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propiedad"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:['"projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the ',(0,t.jsx)(n.em,{children:"Execute on Server attribute"}),'), "executeFormula" (when executing a formula via ',(0,t.jsx)(n.a,{href:"/docs/es/commands/process-4d-tags",children:"PROCESS 4D TAGS"}),' or evaluation of a formula in a 4D Write Pro document), "class", "classFunction", "formObjectExpression" (for errors occuring in expressions associated to form objects)']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["Method path (same format as ",(0,t.jsx)(n.a,{href:"/docs/es/commands/method-open-path",children:"METHOD OPEN PATH"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file"}),(0,t.jsx)(n.td,{children:"4D.File"}),(0,t.jsx)(n.td,{children:"Method file"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.strong,{children:["Returned depending on the value of the ",(0,t.jsx)(n.code,{children:"type"})," property:"]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"methodName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"M\xe9todos proyecto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Number of the table (returned for a trigger, a table form method or a table form object method)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Form name (returned for a form method)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Form object name (returned for an object method)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propertyName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Form object property name (returned for a form object expression)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"className"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nombre de la clase"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"functionName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nombre de la funci\xf3n de clase"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"databaseMethod"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"Database method index"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,t.jsx)(n.p,{children:"To perform a syntax check only, pass an empty collection to the targets parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var $status : Object\n var $options:={}\n $options.targets:=New collection //Empty collection for syntax checking\n $status:=Compile project($options)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Compile the current project using the compiler options of the Structure Settings only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var $status : Object\n $status:=Compile project\n"})}),"\n",(0,t.jsx)(n.p,{children:"On a Silicon Mac, compile the current project to ARM only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $options:={}\n $options.targets:=New collection("arm64_macOS_lib")\n $status:=Compile project($options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Compile a project other than the current project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $projectFile: 4D.File\n $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")\n $status:=Compile project($projectFile)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Compile a project and declare its component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $component : 4D.File\n var $options:={}\n $component:=Folder(fk documents folder).file("Components/myComponent.4dz")\n $options.components:=New collection($component)\n $status:=Compile project($options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Disable warnings 518.1 and 518.2 when compiling your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.warnings:=[]\n$options.warnings.push({major: 518; minor: 1; enabled: False})\n$options.warnings.push({major: 518; minor: 2; enabled: False})\nvar $result:=Compile project($options)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/build-application",children:"BUILD APPLICATION"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1760"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);