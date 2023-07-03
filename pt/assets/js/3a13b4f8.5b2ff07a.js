"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"basics",title:"B\xe1sicos"},s=void 0,l={unversionedId:"Debugging/basics",id:"version-19-R8/Debugging/basics",title:"B\xe1sicos",description:"Os erros s\xe3o comuns. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/pt/19-R8/Debugging/basics",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"basics",title:"B\xe1sicos"},sidebar:"docs",previous:{title:"Etiquetas de transforma\xe7\xe3o",permalink:"/docs/pt/19-R8/Tags/tags"},next:{title:"Depurador",permalink:"/docs/pt/19-R8/Debugging/debugger"}},u={},c=[{value:"Tipos de erro",id:"tipos-de-erro",level:2},{value:"Erros de dactilografia",id:"erros-de-dactilografia",level:3},{value:"Erros de sintaxe",id:"erros-de-sintaxe",level:3},{value:"Environmental Errors",id:"environmental-errors",level:3},{value:"Erros de concep\xe7\xe3o ou de l\xf3gica",id:"erros-de-concep\xe7\xe3o-ou-de-l\xf3gica",level:3},{value:"Erros de execu\xe7\xe3o",id:"erros-de-execu\xe7\xe3o",level:3},{value:"Janela de erro sint\xe1ctico",id:"janela-de-erro-sint\xe1ctico",level:2},{value:"Depurador",id:"depurador",level:2},{value:"Rupturas",id:"rupturas",level:2}],p={toc:c};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",n({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Os erros s\xe3o comuns. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!"),(0,o.kt)("p",null,"The 4D development environment provides several debugging tools for all types of errors."),(0,o.kt)("h2",n({},{id:"tipos-de-erro"}),"Tipos de erro"),(0,o.kt)("h3",n({},{id:"erros-de-dactilografia"}),"Erros de dactilografia"),(0,o.kt)("p",null,"Typing errors are detected by the Code Editor. They are displayed in red and additional information is provided at the bottom of the window. Aqui est\xe1 um erro de dactilografia:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"break-point",src:r(39095).Z,width:"1824",height:"980"})),(0,o.kt)("p",null,"Such typing errors usually cause syntax errors (in the above image, the name of the table is unknown). You get the description of the error when you validate the line of code. When this occurs, fix the typing error and type Enter to validate the fix."),(0,o.kt)("h3",n({},{id:"erros-de-sintaxe"}),"Erros de sintaxe"),(0,o.kt)("p",null,"Some errors can be caught only when you execute the method. The ",(0,o.kt)("a",n({parentName:"p"},{href:"#syntax-error-window"}),"Syntax Error Window")," appears when an error occurs during code execution. Por exemplo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"syntax-error",src:r(42016).Z,width:"642",height:"552"})),(0,o.kt)("p",null,"Expand the ",(0,o.kt)("strong",{parentName:"p"},"Details")," area to display the last error and its number."),(0,o.kt)("h3",n({},{id:"environmental-errors"}),"Environmental Errors"),(0,o.kt)("p",null,"Occasionally, there may not be enough memory to create a BLOB. Or, when you access a document on disk, the document may not exist or may already be opened by another application. These environmental errors do not directly occur because of your code or the way you wrote it. Most of the time, these errors are easy to treat with an ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19-R8/Concepts/error-handling"}),"error catching method")," installed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command."),(0,o.kt)("h3",n({},{id:"erros-de-concep\xe7\xe3o-ou-de-l\xf3gica"}),"Erros de concep\xe7\xe3o ou de l\xf3gica"),(0,o.kt)("p",null,'These are generally the most difficult type of error to find. Except for typing errors, all the error types listed above are to a certain extent covered by the expression "Design or logic error". Utilize o depurador ',(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19-R8/Debugging/debugger"}))," para os detectar. Por exemplo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("em",{parentName:"li"},"syntax error")," may occur when you try to use a variable that is not yet initialized."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("em",{parentName:"li"},"environmental error")," can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.")),(0,o.kt)("p",null,"Design or logic errors also include such situations as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A record is not properly updated because, while calling ",(0,o.kt)("inlineCode",{parentName:"li"},"SAVE RECORD"),", you forgot to first test whether or not the record was locked."),(0,o.kt)("li",{parentName:"ul"},"A method does not do exactly what you expect, because the presence of an optional parameter is not tested.")),(0,o.kt)("p",null,"Sometimes the piece of code that displays the error may be different than the code that is actually the origin of the problem."),(0,o.kt)("h3",n({},{id:"erros-de-execu\xe7\xe3o"}),"Erros de execu\xe7\xe3o"),(0,o.kt)("p",null,"No modo Aplica\xe7\xe3o, pode obter erros que n\xe3o se v\xeaem no modo interpretado. Aqui est\xe1 um exemplo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"runtime-error",src:r(59407).Z,width:"662",height:"472"})),(0,o.kt)("p",null,"Para encontrar rapidamente a origem do problema, reabrir a vers\xe3o interpretada do ficheiro da estrutura, abrir o m\xe9todo e ir para a linha correspondente."),(0,o.kt)("h2",n({},{id:"janela-de-erro-sint\xe1ctico"}),"Janela de erro sint\xe1ctico"),(0,o.kt)("p",null,"A janela erro de sintaxe aparece automaticamente quando a execu\xe7\xe3o de um m\xe9todo \xe9 interrompida. Isto pode acontecer quando:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"um erro impede a continua\xe7\xe3o da execu\xe7\xe3o do c\xf3digo"),(0,o.kt)("li",{parentName:"ul"},"o m\xe9todo produz uma afirma\xe7\xe3o falsa (ver o comando ",(0,o.kt)("inlineCode",{parentName:"li"},"ASSERT"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"syntax-error",src:r(42016).Z,width:"642",height:"552"})),(0,o.kt)("p",null,'A \xe1rea de texto superior apresenta uma mensagem que descreve o erro. A \xe1rea de texto inferior mostra a linha que estava a ser executada quando ocorreu o erro; a \xe1rea onde ocorreu o erro \xe9 real\xe7ada. A sec\xe7\xe3o Detalhes expandidos cont\xe9m a "pilha" de erros relacionados com o processo.'),(0,o.kt)("p",null,"A janela de erro de sintaxe prop\xf5e v\xe1rias op\xe7\xf5es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Editar"),": P\xe1ra toda a execu\xe7\xe3o do m\xe9todo. 4D switches to the Design environment and the method with the error opens in the Code Editor, allowing you to fix it. Utilize esta op\xe7\xe3o quando reconhecer imediatamente o erro e puder corrigi-lo sem mais investiga\xe7\xf5es.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Trace"),": Entra no modo Trace/Debugger. \xc9 apresentada a janela ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19-R8/Debugging/debugger"}),"Debugger"),". If the current line has only executed partially, you may have to click the ",(0,o.kt)("strong",{parentName:"p"},"Trace")," button several times.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Continuar"),": A execu\xe7\xe3o continua. The line with the error may be partially executed, depending on where the error is located. Continue with caution: the error may prevent the rest of your method from executing properly. We recommend clicking ",(0,o.kt)("strong",{parentName:"p"},"Continue")," only if the error is in a trivial call (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"SET WINDOW TITLE"),") that does not prevent executing and testing the rest of your code."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the ",(0,o.kt)("strong",{parentName:"p"},"Continue")," button into an ",(0,o.kt)("strong",{parentName:"p"},"Ignore")," button. Hold down ",(0,o.kt)("strong",{parentName:"p"},"Alt")," (Windows) or ",(0,o.kt)("strong",{parentName:"p"},"Option")," (macOS) key and click the ",(0,o.kt)("strong",{parentName:"p"},"Continue")," button the first time it appears. The button label changes to ",(0,o.kt)("strong",{parentName:"p"},"Ignore")," if the dialog is called again for the same error.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Abort"),": Stops method execution and returns to the state before the method started executing:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If a form method or object method is executing in response to an event, it is stopped and you return to the form."),(0,o.kt)("li",{parentName:"ul"},"If the method is executing from within the Application environment, you return to that environment."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Copy"),": Copies the debugging information into the clipboard. The info describes the internal environment of the error (number, internal component, etc.). It is formatted as tabbed text.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Save..."),": Saves the contents of the syntax error window and the call chain in a ",(0,o.kt)("inlineCode",{parentName:"p"},".txt")," file."))),(0,o.kt)("h2",n({},{id:"depurador"}),"Depurador"),(0,o.kt)("p",null,"A common beginner mistake in dealing with error detection is to click ",(0,o.kt)("strong",{parentName:"p"},"Abort")," in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. N\xe3o fa\xe7a isso! You will save plenty of time and energy by always using the ",(0,o.kt)("strong",{parentName:"p"},"Debugger"),"."),(0,o.kt)("p",null,"The Debugger allows you to step through methods slowly. It displays all the information you need in order to understand why an error occurred. Once you have this information, you know how to fix the error."),(0,o.kt)("p",null,'Another reason to use the Debugger is for developing code. Sometimes you may write an algorithm that is more complex than usual. Despite all feelings of accomplishment, you can\'t be totally sure that your coding is 100% correct. Instead of running it "blind", you can use the ',(0,o.kt)("inlineCode",{parentName:"p"},"TRACE")," command at the beginning of your code, then execute it step by step to keep an eye on what happens."),(0,o.kt)("h2",n({},{id:"rupturas"}),"Rupturas"),(0,o.kt)("p",null,'In the debugging process, you may need to skip the tracing of some parts of the code until a certain line. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.'),(0,o.kt)("p",null,"These needs are covered by ",(0,o.kt)("strong",{parentName:"p"},"breakpoints")," and ",(0,o.kt)("strong",{parentName:"p"},"command catching")," features. They can be configured from the Code Editor, the debugger, or the Runtime Explorer."))}d.isMDXComponent=!0},59407:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},42016:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},39095:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"}}]);