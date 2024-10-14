"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93420],{420327:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=s(474848),t=s(28453);const a={id:"identifiers",title:"Identifiers"},i=void 0,c={id:"Concepts/identifiers",title:"Identifiers",description:"This section describes the conventions and rules for naming various elements in the 4D language (variables, object properties, tables, forms, etc.).",source:"@site/versioned_docs/version-19/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/19/Concepts/identifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"identifiers",title:"Identifiers"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/19/Concepts/plug-ins"},next:{title:"Pathnames",permalink:"/docs/19/Concepts/paths"}},o={},l=[{value:"Arrays",id:"arrays",level:2},{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Object properties",id:"object-properties",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Project methods",id:"project-methods",level:2},{value:"Tables and Fields",id:"tables-and-fields",level:2},{value:"Variables",id:"variables",level:2},{value:"Other names",id:"other-names",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section describes the conventions and rules for naming various elements in the 4D language (variables, object properties, tables, forms, etc.)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"arrays",children:"Arrays"}),"\n",(0,r.jsxs)(n.p,{children:["Array names follow the same rules as ",(0,r.jsx)(n.a,{href:"#variables",children:"variables"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,r.jsx)(n.p,{children:"The name of a class can contain up to 31 characters."}),"\n",(0,r.jsxs)(n.p,{children:["A class name must be compliant with standard ",(0,r.jsx)(n.a,{href:"#object-properties",children:"property naming rules"})," for dot notation."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Giving the same name to a class and a ",(0,r.jsx)(n.a,{href:"#tables",children:"database table"})," is not recommended, in order to prevent any conflict."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.p,{children:["Function names must be compliant with standard ",(0,r.jsx)(n.a,{href:"#object-properties",children:"property naming rules"})," for dot notation."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"}),' Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"object-properties",children:"Object properties"}),"\n",(0,r.jsxs)(n.p,{children:["The name of an object property (also called object ",(0,r.jsx)(n.em,{children:"attribute"}),") can contain up to 255 characters."]}),"\n",(0,r.jsxs)(n.p,{children:["Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules ",(0,r.jsxs)(n.strong,{children:["if you want to use the ",(0,r.jsx)(n.a,{href:"/docs/19/Concepts/object#object-properties",children:"dot notation"})]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'A property name must begin with a letter, an underscore, or a dollar "$".'}),"\n",(0,r.jsx)(n.li,{children:'Thereafter, the name can include any letter, digit, the underscore character ("_"), or the dollar character ("$").'}),"\n",(0,r.jsx)(n.li,{children:"Property names are case sensitive."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:['Starting an object property name with an underscore character ("_") will exclude the property from the autocompletion features in the 4D code editor. For example, if you declare ',(0,r.jsx)(n.code,{children:"$o._myPrivateProperty"}),", it will not be proposed in the code editor when you type in ",(0,r.jsx)(n.code,{children:'"$o. "'}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["See also ",(0,r.jsx)(n.a,{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6",children:"ECMA Script standard"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.strong,{children:"string notation"})," within square brackets, property names can contain any characters (ex: ",(0,r.jsx)(n.code,{children:'myObject["1. First property"]'}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["Parameter names must start with a ",(0,r.jsx)(n.code,{children:"$"})," character and follow the same rules as ",(0,r.jsx)(n.a,{href:"#variables",children:"variable names"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n"})}),"\n",(0,r.jsx)(n.h2,{id:"project-methods",children:"Project methods"}),"\n",(0,r.jsx)(n.p,{children:"The name of a project method name contain up to 31 characters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A project method name must begin with a letter, a digit, or an underscore"}),"\n",(0,r.jsx)(n.li,{children:'Thereafter, the name can include any letter or digit, the underscore character ("_"), or the space character.'}),"\n",(0,r.jsxs)(n.li,{children:["Do not use reserved names, i.e. 4D command names (",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", etc), keywords (",(0,r.jsx)(n.code,{children:"If"}),", ",(0,r.jsx)(n.code,{children:"For"}),", etc.), or constant names (",(0,r.jsx)(n.code,{children:"Euro"}),", ",(0,r.jsx)(n.code,{children:"Black"}),", ",(0,r.jsx)(n.code,{children:"Friday"}),", etc.)."]}),"\n",(0,r.jsx)(n.li,{children:"Project method names are case insensitive."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use uppercase characters for naming your methods; however if a method returns a value, capitalize the first character of its name. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["When you call a method, you just type its name. However, some 4D built-in commands, such as ",(0,r.jsx)(n.code,{children:"ON EVENT CALL"}),", as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //This command expects a method (function) or formula\nQUERY BY FORMULA([aTable];Special query)\n //This command expects a method (procedure) or statement\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n //But this command expects a method name\nON EVENT CALL("HANDLE EVENTS")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"tables-and-fields",children:"Tables and Fields"}),"\n",(0,r.jsx)(n.p,{children:"You designate a table by placing its name between brackets: [...]. You designate a field by first specifying the table to which it belongs (the field name immediately follows the table name)."}),"\n",(0,r.jsx)(n.p,{children:"A table name and field name can contain up to 31 characters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'A table or field name must begin with a letter, an underscore, or a dollar ("$")'}),"\n",(0,r.jsx)(n.li,{children:'Thereafter, the name can include alphabetic characters, numeric characters, the space character, and the underscore character ("_").'}),"\n",(0,r.jsxs)(n.li,{children:["Do not use reserved names, i.e. 4D command names (",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", etc), keywords (",(0,r.jsx)(n.code,{children:"If"}),", ",(0,r.jsx)(n.code,{children:"For"}),", etc.), or constant names (",(0,r.jsx)(n.code,{children:"Euro"}),", ",(0,r.jsx)(n.code,{children:"Black"}),", ",(0,r.jsx)(n.code,{children:"Friday"}),", etc.)."]}),"\n",(0,r.jsx)(n.li,{children:"Additional rules must be respected when the database must be handled via SQL: only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted, and the name must not include any SQL keywords (command, attribute, etc.)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Giving the same name to a table and a ",(0,r.jsx)(n.a,{href:"#classes",children:"class"})," is not recommended, in order to prevent any conflict."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,r.jsxs)(n.p,{children:["The name of a variable can be up to 31 characters, not including the scope symbols (",(0,r.jsx)(n.code,{children:"$"})," or ",(0,r.jsx)(n.code,{children:"<>"}),")."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['A variable name must begin with a letter, an underscore, or a dollar ("$") for ',(0,r.jsx)(n.a,{href:"/docs/19/Concepts/parameters",children:"parameters"})," and ",(0,r.jsx)(n.a,{href:"/docs/19/Concepts/variables#local-variables",children:"local variables"}),", or ",(0,r.jsx)(n.code,{children:"<>"})," for ",(0,r.jsx)(n.a,{href:"/docs/19/Concepts/variables#interprocess-variables",children:"interprocess variables"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A digit as first character is allowed but not recommended, and is not supported by the ",(0,r.jsxs)(n.a,{href:"/docs/19/Concepts/variables#using-the-var-keyword",children:[(0,r.jsx)(n.code,{children:"var"})," declaration syntax"]}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Thereafter, the name can include any letter or digit, and the underscore character ("_").'}),"\n",(0,r.jsxs)(n.li,{children:["Space character is allowed but not recommended, and is not supported by the ",(0,r.jsxs)(n.a,{href:"/docs/19/Concepts/variables#using-the-var-keyword",children:[(0,r.jsx)(n.code,{children:"var"})," declaration syntax"]}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Do not use reserved names, i.e. 4D command names (",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", etc), keywords (",(0,r.jsx)(n.code,{children:"If"}),", ",(0,r.jsx)(n.code,{children:"For"}),", etc.), or constant names (",(0,r.jsx)(n.code,{children:"Euro"}),", ",(0,r.jsx)(n.code,{children:"Black"}),", ",(0,r.jsx)(n.code,{children:"Friday"}),", etc.)."]}),"\n",(0,r.jsx)(n.li,{children:"Variable names are case insensitive."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'For($vlRecord;1;100) //local variable\n$vsMyString:="Hello there" //local variable\nvar $vName; $vJob : Text //local variales \nIf(bValidate=1) //process variable\n<>vlProcessID:=Current process() //interprocess variable\n'})}),"\n",(0,r.jsx)(n.h2,{id:"other-names",children:"Other names"}),"\n",(0,r.jsxs)(n.p,{children:["In the 4D language, several elements have their names handled as strings: ",(0,r.jsx)(n.strong,{children:"forms"}),", ",(0,r.jsx)(n.strong,{children:"form objects"}),", ",(0,r.jsx)(n.strong,{children:"named selections"}),", ",(0,r.jsx)(n.strong,{children:"processes"}),", ",(0,r.jsx)(n.strong,{children:"sets"}),", ",(0,r.jsx)(n.strong,{children:"menu bars"}),", etc."]}),"\n",(0,r.jsxs)(n.p,{children:["Such string names can contain up to 255 characters, not including the ",(0,r.jsx)(n.code,{children:"$"})," or ",(0,r.jsx)(n.code,{children:"<>"})," characters (if any)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"String names can contain any characters."}),"\n",(0,r.jsx)(n.li,{children:"String names are case insensitive."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'DIALOG([Storage];"Note box"+String($vlStage))\nOBJECT SET FONT(*;"Binfo";"Times")\nUSE NAMED SELECTION([Customers];"Closed")//Process Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection\n //Starting the global process "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Starting the local process "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\nCREATE SET([Customers];"Customer Orders")//Process set\nUSE SET("<>Deleted Records") //Interprocess set\nIf(Records in set("$Selection"+String($i))>0) //Client set\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(296540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);