"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3942"],{344856:function(e,n,s){s.r(n),s.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>d,assets:()=>i,toc:()=>m,contentTitle:()=>r});var d=JSON.parse('{"id":"commands/command-name","title":"Command name","description":"Command name ( command {; info {; theme}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands/command-name.md","sourceDirName":"commands","slug":"/commands/command-name","permalink":"/docs/es/commands/command-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcommand-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"command-name","title":"Command name","slug":"/commands/command-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Call chain","permalink":"/docs/es/commands/call-chain"},"next":{"title":"Copy parameters","permalink":"/docs/es/commands/copy-parameters"}}'),t=s("785893"),o=s("250065");let a={id:"command-name",title:"Command name",slug:"/commands/command-name",displayed_sidebar:"docs"},r=void 0,i={},m=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Command name"})," ( ",(0,t.jsx)(n.em,{children:"command"})," {; ",(0,t.jsx)(n.em,{children:"info"})," {; ",(0,t.jsx)(n.em,{children:"theme"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comando"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de comando"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Command property to evaluate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"theme"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Language theme of command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Localized command name"})]})]})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R9"}),(0,t.jsx)(n.td,{children:"Support of deprecated property"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Command name"})," command returns the name as well as (optionally) the properties of the command whose command number you pass in ",(0,t.jsx)(n.em,{children:"command"}),".The number of each command is indicated in the Explorer as well as in the Properties area of this documentation."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compatibility note:"})," A command name may vary from one 4D version to the next (commands renamed), this command was used in previous versions to designate a command directly by means of its number, especially in non-tokenized portions of code. This need has diminished over time as 4D continues to evolve because, for non-tokenized statements (formulas), 4D now provides a token syntax. This syntax allows you to avoid potential problems due to variations in command names as well as other elements such as tables, while still being able to type these names in a legible manner (for more information, refer to the ",(0,t.jsx)(n.em,{children:"Using tokens in formulas"})," section). Note also that the *",(0,t.jsx)(n.a,{href:"/docs/es/Preferences/methods#4d-programming-language-use-regional-system-settings",children:"Use regional system settings* option of the Preferences"})," allows you to continue using the French language in a French version of 4D."]}),"\n",(0,t.jsx)(n.p,{children:"Two optional parameters are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"info"}),": properties of the command. The returned value is a ",(0,t.jsx)(n.em,{children:"bit field"}),", where the following bits are meaningful:"]}),"\n",(0,t.jsxs)(n.li,{children:["First bit (bit 0): set to 1 if the command is ",(0,t.jsx)(n.a,{href:"/docs/es/Develop/preemptive-processes#thread-safe-vs-thread-unsafe-code",children:(0,t.jsx)(n.strong,{children:"thread-safe"})})," (i.e., compatible with execution in a preemptive process) and 0 if it is ",(0,t.jsx)(n.strong,{children:"thread-unsafe"}),". Only thread-safe commands can be used in ",(0,t.jsx)(n.a,{href:"/docs/es/Develop/preemptive-processes",children:"preemptive processes"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Second bit (bit 1): set to 1 if the command is ",(0,t.jsx)(n.strong,{children:"deprecated"}),", and 0 if it is not. A deprecated command will continue to work normally as long as it is supported, but should be replaced whenever possible and must no longer be used in new code. Deprecated commands in your code generate warnings in the ",(0,t.jsx)(n.a,{href:"/docs/es/code-editor/write-class-method#warnings-and-errors",children:"live checker and the compiler"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"theme"}),": name of the 4D language theme for the command."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Command name"})," command sets the ",(0,t.jsx)(n.em,{children:"OK"})," variable to 1 if ",(0,t.jsx)(n.em,{children:"command"})," corresponds to an existing command number, and to 0 otherwise. Note, however, that some existing commands have been disabled, in which case ",(0,t.jsx)(n.strong,{children:"Command name"})," returns an empty string (see last example)."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"The following code allows you to load all valid 4D commands in an array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $Lon_id : Integer\n\xa0var $Txt_command : Text\n\xa0ARRAY LONGINT($tLon_Command_IDs;0)\n\xa0ARRAY TEXT($tTxt_commands;0)\n\xa0\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Lon_id:=$Lon_id+1\n\xa0\xa0\xa0\xa0$Txt_command:=Command name($Lon_id)\n\xa0\xa0\xa0\xa0If(OK=1)\xa0//command number exists\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Length($Txt_command)>0)\xa0//command is not disabled\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($tTxt_commands;$Txt_command)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0Until(OK=0)\xa0//end of existing commands\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"In a form, you want a drop-down list populated with the basic summary report commands. In the object method for that drop-down list, you write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Before)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asCommand;4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asCommand{1}:=Command name(1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asCommand{2}:=Command name(2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asCommand{3}:=Command name(4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asCommand{4}:=Command name(3)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the English version of 4D, the drop-down list will read: Sum, Average, Min, and Max. In the French version*, the drop-down list will read: Somme, Moyenne, Min, and Max."}),"\n",(0,t.jsx)(n.p,{children:"*with a 4D application configured to use the French programming language (see compatibility note)"}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,t.jsxs)(n.p,{children:["You want to create a method that returns ",(0,t.jsx)(n.strong,{children:"True"})," if the command, whose number is passed as parameter, is thread-safe, and ",(0,t.jsx)(n.strong,{children:"False"})," otherwise."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Is_Thread_Safe project method\n\xa0#declare($command : Integer) : Boolean\n\xa0var $threadsafe : Integer\n\xa0var $name; $theme : Text\n\xa0$name:=Command name($command;$threadsafe;$theme)\n\xa0If($threadsafe ?? 0)\xa0//if the first bit is set to 1\n\xa0\xa0\xa0\xa0return True\n\xa0Else\n\xa0\xa0\xa0\xa0return False\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:'Then, for the "SAVE RECORD" command (53) for example, you can write:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$isSafe:=Is_Thread_Safe(53)\n\xa0\xa0// returns True\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,t.jsx)(n.p,{children:"You want to return a collection of all deprecated commands in your version of 4D."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $info; $Lon_id : Integer\nvar $Txt_command : Text\nvar $deprecated : Collection\n\nRepeat\n    $Lon_id:=$Lon_id+1\n    $Txt_command:=Command name($Lon_id;$info)\n    If($info ?? 1)\xa0//the second bit is set to 1\n            //then the command is deprecated\n        $deprecated.push($Txt_command)\n    End if\nUntil(OK=0)\xa0//end of existing commands\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"execute-formula.md",children:"EXECUTE FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/Develop/preemptive-processes",children:"Preemptive Processes"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"538"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var d=s(667294);let t={},o=d.createContext(t);function a(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);