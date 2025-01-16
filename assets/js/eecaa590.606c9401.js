"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53756"],{431647:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/compile-project","title":"Compile project","description":"Compile project {( {;}{options} )} : Object","source":"@site/versioned_docs/version-20-R7/commands-legacy/compile-project.md","sourceDirName":"commands-legacy","slug":"/commands/compile-project","permalink":"/docs/20-R7/commands/compile-project","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompile-project.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compile-project","title":"Compile project","slug":"/commands/compile-project","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Compiler","permalink":"/docs/20-R7/category/compiler"},"next":{"title":"IDLE","permalink":"/docs/20-R7/commands/idle"}}'),s=t("785893"),i=t("250065");let d={id:"compile-project",title:"Compile project",slug:"/commands/compile-project",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"options Parameter",id:"options-parameter",level:5},{value:"Function result",id:"function-result",level:5},{value:"variable objects",id:"variable-objects",level:6},{value:"code object",id:"code-object",level:6},{value:"Examples",id:"examples",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compile project"})," {( {",(0,s.jsx)(n.em,{children:"projectFile"}),"}{;}{",(0,s.jsx)(n.em,{children:"options"}),"} )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"projectFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:".4DProject file to compile"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object that specifies compilation options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Object containing information on the compilation status"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compile project"})," allows you to compile the current host project or the project specified in the ",(0,s.jsx)(n.em,{children:"projectFile"})," parameter. For more information on compilation, check the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/Project/compiler",children:"Compilation page"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the command uses the compiler options defined in the Structure Settings. You can override them by passing an ",(0,s.jsx)(n.em,{children:"options"})," parameter. The following syntaxes are supported:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compile project"}),"(): compiles the opened project using the options defined in the Structure Settings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compile project"}),"(",(0,s.jsx)(n.em,{children:"options"}),"): compiles the opened project. The ",(0,s.jsx)(n.em,{children:"options"})," defined override the Structure Settings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compile project"}),"(",(0,s.jsx)(n.em,{children:"projectFile"}),"): compiles the ",(0,s.jsx)(n.em,{children:"projectFile"})," 4DProject using the options defined in the Structure Settings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compile project"}),"(",(0,s.jsx)(n.em,{children:"projectFile"}),"; ",(0,s.jsx)(n.em,{children:"options"}),"): compiles the ",(0,s.jsx)(n.em,{children:"projectFile"})," 4DProject and the ",(0,s.jsx)(n.em,{children:"options"})," defined override the Structure Settings"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Binary databases cannot be compiled using this command."]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike the Compiler window, this command requires that you explicitly designate the component(s) to compile. When compiling a project with ",(0,s.jsx)(n.strong,{children:"Compile project"}),", you need to declare its components using the ",(0,s.jsx)(n.em,{children:"components"})," property of the ",(0,s.jsx)(n.em,{children:"options"})," parameter. Keep in mind that the components must already be compiled (binary components are supported)."]}),"\n",(0,s.jsxs)(n.p,{children:["The resulting compiled code will be stored in the DerivedData or Libraries folder of the project, depending on the ",(0,s.jsx)(n.em,{children:"targets"})," property of the ",(0,s.jsx)(n.em,{children:"options"})," parameter. If you want to create .4dz files, you still need to manually zip the compiled project or use the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/Desktop/building",children:"build application"})," feature."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an empty collection in ",(0,s.jsx)(n.em,{children:"targets"}),", ",(0,s.jsx)(n.strong,{children:"Compile project"})," will execute a syntax check without compiling."]}),"\n",(0,s.jsxs)(n.p,{children:["Compilation errors, if any, are returned as objects in the ",(0,s.jsx)(n.em,{children:"errors"})," collection."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You cannot call this command when another compilation is running (for example, a compilation launched from the Compilation window)."]}),"\n",(0,s.jsx)(n.h5,{id:"options-parameter",children:"options Parameter"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"options"})," parameter is an object. Here are the available compilation options:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"components"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"Collection of 4D.File objects to dependent components (must be already compiled)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"defaultTypeForButtons"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Possible value: Is real or Is longint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"defaultTypeForNumerics"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Possible value: Is real or Is longint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"generateSymbols"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"True to generate symbol information in the .symbols returned object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"generateSyntaxFile"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["True to generate a ",(0,s.jsx)(n.a,{href:"/docs/20-R7/settings/general",children:"syntax file for code completion"}),".md#generate-syntax-file-for-code-completion-when-compiled) in the \\Resources\\en.lproj folder of the project"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"generateTypingMethods"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:'"reset" or "append" to generate typing methods. If value is "append", existing variable declarations won\'t be modified (compiler window behavior). If value is "reset" existing variable declarations are removed beforehand.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"plugins"}),(0,s.jsx)(n.td,{children:"4D.Folder object"}),(0,s.jsxs)(n.td,{children:["Plug-ins folder to be used instead of the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/Project/architecture#plugins",children:"Plugins folder of the current project"}),". This property is only available with the ",(0,s.jsx)(n.em,{children:"projectFile"})," syntax."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targets"}),(0,s.jsx)(n.td,{children:"Collection of strings"}),(0,s.jsx)(n.td,{children:'Possible values: "x86_64_generic", "arm64_macOS_lib". Pass an empty collection to execute syntax check only'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"typeInference"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:['"all": The compiler deduces the types of all variables not explicitly declared, "locals": The compiler deduces the types of local variables not explicitly declared, "none": All variables must be explicitly declared in the code (legacy mode), "direct": All variables must be explicitly declared in the code (',(0,s.jsx)(n.a,{href:"/docs/20-R7/Project/compiler#enabling-direct-typing",children:"direct typing"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"warnings"}),(0,s.jsx)(n.td,{children:"Collection of objects"}),(0,s.jsx)(n.td,{children:"Defines the warnings state"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].major"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Warning main number, before the dot"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].minor"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Warning second number, after the dot"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].enabled"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Warning activation state"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the ",(0,s.jsx)(n.em,{children:"warnings"})," attribute is not defined in the ",(0,s.jsx)(n.em,{children:"options"})," object, the ",(0,s.jsx)(n.strong,{children:"Compile project"})," command uses the default warning generation statuses defined in the settings."]}),"\n",(0,s.jsx)(n.h5,{id:"function-result",children:"Function result"}),"\n",(0,s.jsxs)(n.p,{children:["The object returned by ",(0,s.jsx)(n.strong,{children:"Compile project"})," has up to three properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"True if the save action is successful, False otherwise."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"errors"}),(0,s.jsx)(n.td,{children:"Collection of objects"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Available only in case of error or warning"}),". Collection of objects describing compilation errors or warnings"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].isError"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Error if True, warning otherwise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].message"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Error message"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].code"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#code-object",children:"code object"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].line"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Line number of error in the code. For class methods, line number in the function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[].lineInFile"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:'Line number in the file (different from "line" for class methods, and takes into account the %attributes prefix line)'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"symbols"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Available only if generateSymbols option is set to True:"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".interprocessVariables"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"List of all interprocess variables"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".interprocessVariables.variables"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsxs)(n.td,{children:["Collection of ",(0,s.jsx)(n.a,{href:"#variable-objects",children:"variable objects"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".interprocessVariables.size"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".processVariables"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"List of all process variables"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".processVariables.variables"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsxs)(n.td,{children:["Collection of ",(0,s.jsx)(n.a,{href:"#variable-objects",children:"variable objects"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".processVariables.size"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".localVariables"}),(0,s.jsx)(n.td,{children:"Collection of objects"}),(0,s.jsx)(n.td,{children:"List of local variables per method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".localVariables[].code"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#code-object",children:"code object"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".localVariables[].variables"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsxs)(n.td,{children:["Collection of ",(0,s.jsx)(n.a,{href:"#variable-objects",children:"variable objects"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".methods"}),(0,s.jsx)(n.td,{children:"Collection of objects"}),(0,s.jsx)(n.td,{children:"List of methods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".methods[].code"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#code-object",children:"code object"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".methods[].callCount"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of times this method has been called"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".methods[].params"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"Collection of parameter types (Value type numerical codes)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:".methods[]. threadSafe"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Indicates if this method is thread safe"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"/docs/20-R7/Project/compiler#compilation-tools",children:"Compilation tools"}),"."]}),"\n",(0,s.jsx)(n.h6,{id:"variable-objects",children:"variable objects"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"interprocessVariables.variables"})," and ",(0,s.jsx)(n.code,{children:"processVariables.variables"})," contain objects with the following structure:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of the variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Type of the variable (like Value type command)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayDimension"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"For arrays only: 1 for mono dimension arrays, 2 for two-dimension arrays"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"For process and interprocess variables: descriptor of where the variable has been defined"})]})]})]}),"\n",(0,s.jsx)(n.h6,{id:"code-object",children:"code object"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"code"})," property in ",(0,s.jsx)(n.code,{children:"methods.code"})," and ",(0,s.jsx)(n.code,{children:"errors.code"})," is an object with the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.li,{children:['"projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the ',(0,s.jsx)(n.em,{children:"Execute on Server attribute"}),'), "executeFormula" (when executing a formula via ',(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/process-4d-tags",children:"PROCESS 4D TAGS"}),' or evaluation of a formula in a 4D Write Pro document), "class", "classFunction"']})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Method path (same format as ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/method-open-path",children:"METHOD OPEN PATH"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"file"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{children:"Method file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.strong,{children:["Returned depending on the value of the ",(0,s.jsx)(n.code,{children:"type"})," property:"]})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Project method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of the table (returned for a trigger, a table form method or a table form object method)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Form name (returned for a form method)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Form object name (returned for an object method)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"className"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Class name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"functionName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Class function name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"databaseMethod"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Database method index"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"To perform a syntax check only, pass an empty collection to the targets parameter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $status : Object\n var $options:={}\n $options.targets:=New collection //Empty collection for syntax checking\n $status:=Compile project($options)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Compile the current project using the compiler options of the Structure Settings only:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $status : Object\n $status:=Compile project\n"})}),"\n",(0,s.jsx)(n.p,{children:"On a Silicon Mac, compile the current project to ARM only:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $options:={}\n $options.targets:=New collection("arm64_macOS_lib")\n $status:=Compile project($options)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Compile a project other than the current project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $projectFile: 4D.File\n $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")\n $status:=Compile project($projectFile)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Compile a project and declare its component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $status : Object\n var $component : 4D.File\n var $options:={}\n $component:=Folder(fk documents folder).file("Components/myComponent.4dz")\n $options.components:=New collection($component)\n $status:=Compile project($options)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Disable warnings 518.1 and 518.2 when compiling your project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.warnings:=[]$options.warnings.push({major: 518; minor: 1; enabled: False})\n$options.warnings.push({major: 518; minor: 2; enabled: False})\nvar $result:=Compile project($options)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/build-application",children:"BUILD APPLICATION"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1760"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);