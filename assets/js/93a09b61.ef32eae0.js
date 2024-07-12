/*! For license information please see 93a09b61.ef32eae0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94250],{519095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>A,toc:()=>c});var s=r(474848),t=r(28453);const i={id:"string",title:"String"},a=void 0,A={id:"Concepts/string",title:"String",description:"String is a generic term that stands for:",source:"@site/versioned_docs/version-20-R5/Concepts/dt_string.md",sourceDirName:"Concepts",slug:"/Concepts/string",permalink:"/docs/20-R5/Concepts/string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_string.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"string",title:"String"},sidebar:"docs",previous:{title:"Pointer",permalink:"/docs/20-R5/Concepts/pointer"},next:{title:"Time",permalink:"/docs/20-R5/Concepts/time"}},d={},c=[{value:"String literals",id:"string-literals",level:2},{value:"Escape sequences",id:"escape-sequences",level:3},{value:"String operators",id:"string-operators",level:2},{value:"String comparisons",id:"string-comparisons",level:2},{value:"Wilcard character (@)",id:"wilcard-character-",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Character Reference Symbols",id:"character-reference-symbols",level:2},{value:"Advanced note about invalid character reference",id:"advanced-note-about-invalid-character-reference",level:3},{value:"Example",id:"example",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"String is a generic term that stands for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Text fields or variables: a Text field, variable, or expression may contain from 0 to 2 GB of text."}),"\n",(0,s.jsx)(n.li,{children:"Alphanumeric fields: an Alphanumeric field may contain from 0 to 255 characters (limit set when field is defined)."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"string-literals",children:"String literals"}),"\n",(0,s.jsx)(n.p,{children:'A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'"Add Records"\n"No records found."\n"Invoice"\n'})}),"\n",(0,s.jsx)(n.p,{children:'An empty string is specified by two quotation marks with nothing between them ("").'}),"\n",(0,s.jsx)(n.h3,{id:"escape-sequences",children:"Escape sequences"}),"\n",(0,s.jsx)(n.p,{children:"The following escape sequences can be used within strings:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Escape sequence"}),(0,s.jsx)(n.th,{children:"Character replaced"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\\n"}),(0,s.jsx)(n.td,{children:"LF (Line feed)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\\t"}),(0,s.jsx)(n.td,{children:"HT (Tab)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\\r"}),(0,s.jsx)(n.td,{children:"CR (Carriage return)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\\|\\ (Backslash)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'\\"'}),(0,s.jsx)(n.td,{children:'" (Quotation marks)'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' The \\ (backslash) character is used as a separator in pathnames under Windows. You must therefore use a double backslash \\\\ in paths when you want to have a backslash in front of a character used in one of the escape sequences recognized by 4D (e.g. "C:\\\\MyDocuments\\\\New.txt").']}),"\n",(0,s.jsx)(n.h2,{id:"string-operators",children:"String operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Concatenation"}),(0,s.jsx)(n.td,{children:"String + String"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:'"abc" + "def"'}),(0,s.jsx)(n.td,{children:'"abcdef"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Repetition"}),(0,s.jsx)(n.td,{children:"String * Number"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:'"ab" * 3'}),(0,s.jsx)(n.td,{children:'"ababab"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Equality"}),(0,s.jsx)(n.td,{children:"String = String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"abc" = "abc"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"abc" = "abd"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inequality"}),(0,s.jsx)(n.td,{children:"String # String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"abc" # "abd"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"abc" # "abc"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than"}),(0,s.jsx)(n.td,{children:"String > String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"abd" > "abc"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"abc" > "abc"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than"}),(0,s.jsx)(n.td,{children:"String < String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"abc" < "abd"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"abc" < "abc"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than or equal to"}),(0,s.jsx)(n.td,{children:"String >= String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"abd" >= "abc"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"abc" >= "abd"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than or equal to"}),(0,s.jsx)(n.td,{children:"String <= String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"abc" <= "abd"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"abd" <= "abc"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Contains keyword"}),(0,s.jsx)(n.td,{children:"String % String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'"Alpha Bravo" % "Bravo"'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'"Alpha Bravo" % "ravo"'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture % String"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'Picture_expr % "Mer"'}),(0,s.jsx)(n.td,{children:"True (*)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'(*) If the keyword "Mer" is associated with the picture stored in the picture expression (field or variable).'}),"\n",(0,s.jsx)(n.h2,{id:"string-comparisons",children:"String comparisons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Strings are compared on a character-by-character basis (except in the case of searching by ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Concepts/string#keywords",children:"keywords"}),", see below)."]}),"\n",(0,s.jsxs)(n.li,{children:['When strings are compared, the case of the characters is ignored; thus, "a"="A" returns ',(0,s.jsx)(n.code,{children:"TRUE"}),". To test if the case of two characters is different, compare their character codes. For example, the following expression returns ",(0,s.jsx)(n.code,{children:"FALSE"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'Character code("A")=Character code("a") // because 65 is not equal to 97\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When strings are compared, diacritical characters are compared using the system character comparison table of your computer. For example, the following expressions return ",(0,s.jsx)(n.code,{children:"TRUE"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     "n"="\xf1"\n     "n"="\xd1"\n     "A"="\xe5"\n      // and so on\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," String comparison takes into account specificities of the language ",(0,s.jsx)(n.strong,{children:"defined for the 4D data file"})," (which is not always the same as the language defined for the system)."]}),"\n",(0,s.jsx)(n.h3,{id:"wilcard-character-",children:"Wilcard character (@)"}),"\n",(0,s.jsxs)(n.p,{children:["The 4D language supports ",(0,s.jsx)(n.strong,{children:"@"})," as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is ",(0,s.jsx)(n.code,{children:"TRUE"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'"abcdefghij"="abc@"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is ",(0,s.jsx)(n.code,{children:"FALSE"}),", because the @ is considered only as a one character in the first operand:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'    "abc@"="abcdefghij"\n'})}),"\n",(0,s.jsxs)(n.p,{children:['The wildcard means "one or more characters or nothing". The following expressions are ',(0,s.jsx)(n.code,{children:"TRUE"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     "abcdefghij"="abcdefghij@"\n     "abcdefghij"="@abcdefghij"\n     "abcdefghij"="abcd@efghij"\n     "abcdefghij"="@abcdefghij@"\n     "abcdefghij"="@abcde@fghij@"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return ",(0,s.jsx)(n.code,{children:"FALSE"}),". The following expression is ",(0,s.jsx)(n.code,{children:"FALSE"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'"abcdefghij"="abc@@fg"\n'})}),"\n",(0,s.jsx)(n.p,{children:"When the comparison operator is or contains a < or > symbol, only comparison with a single wildcard located at the end of the operand is supported:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     "abcd"<="abc@" // Valid comparison\n     "abcd"<="abc@ef" //Not a valid comparison\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to execute comparisons or queries using @ as a character (and not as a wildcard), you need to use the ",(0,s.jsx)(n.code,{children:"Character code(At sign)"})," instruction. Imagine, for example, that you want to know if a string ends with the @ character. The following expression (if $vsValue is not empty) is always ",(0,s.jsx)(n.code,{children:"TRUE"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'($vsValue[[Length($vsValue)]]="@")\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following expression will be evaluated correctly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"(Character code($vsValue[[Length($vsValue)]])#64)  \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," A 4D option in the Design environment allows you to define how the @ character is interpreted when it is included in a character string."]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsxs)(n.p,{children:['Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The ',(0,s.jsx)(n.strong,{children:"%"})," operator always returns ",(0,s.jsx)(n.code,{children:"False"})," if the query concerns several words or only part of a word (for example, a syllable). The \u201cwords\u201d are character strings surrounded by \u201cseparators,\u201d which are spaces and punctuation characters and dashes. An apostrophe, like in \u201cToday's\u201d, is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     "Alpha Bravo Charlie"%"Bravo" // Returns True\n     "Alpha Bravo Charlie"%"vo" // Returns False\n     "Alpha Bravo Charlie"%"Alpha Bravo" // Returns False\n     "Alpha,Bravo,Charlie"%"Alpha" // Returns True\n     "Software and Computers"%"comput@" // Returns True\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["4D uses the ICU library for comparing strings (using ",(0,s.jsx)(n.code,{children:"<>=#"})," operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: ",(0,s.jsx)(n.a,{href:"http://www.unicode.org/reports/tr29/#Word_Boundaries",children:"http://www.unicode.org/reports/tr29/#Word_Boundaries"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"In the Japanese version, instead of ICU, 4D uses Mecab by default for detecting keywords."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"character-reference-symbols",children:"Character Reference Symbols"}),"\n",(0,s.jsx)(n.p,{children:"The character reference symbols: [[...]]"}),"\n",(0,s.jsx)(n.p,{children:"These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable, string variable, or field."}),"\n",(0,s.jsx)(n.p,{children:"If the character reference symbols appear on the left side of the assignment operator (:=), a character is assigned to the referenced position in the string. For example, if vsName is not an empty string, the following line sets the first character of vsName to uppercase:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'If(vsName#"")\n    vsName[[1]]:=Uppercase(vsName[[1]])\nEnd if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//The following example tests if the last character of vtText is an At sign "@"\n If(vtText#"")\n    If(Character code(Substring(vtText;Length(vtText);1))=At sign)\n  //...\n    End if\n End if\n \n  //Using the character reference syntax, you would write in a simpler manner:\n If(vtText#"")\n    If(Character code(vtText[[Length(vtText)]])=At sign)\n  // ...\n    End if\n End if\n'})}),"\n",(0,s.jsx)(n.h3,{id:"advanced-note-about-invalid-character-reference",children:"Advanced note about invalid character reference"}),"\n",(0,s.jsx)(n.p,{children:"When you use the character reference symbols, you must address existing characters in the string in the same way you address existing elements of an array. For example if you address the 20th character of a string variable, this variable MUST contain at least 20 characters."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Failing to do so, in interpreted mode, does not cause a syntax error."}),"\n",(0,s.jsx)(n.li,{children:"Failing to do so, in compiled mode (with no options), may lead to memory corruption, if, for instance, you write a character beyond the end of a string or a text."}),"\n",(0,s.jsx)(n.li,{children:"Failing to do so, in compiled mode, causes an error with the option Range Checking On. For example, executing the following code:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'//Very bad and nasty thing to do, boo!\n vsAnyText:=""\n vsAnyText[[1]]:="A"\n'})}),"\n",(0,s.jsx)(n.p,{children:"will trigger the Runtime Error shown here:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:r(806829).A+"",width:"642",height:"332"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following project method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //Capitalize_text project method\n  //Capitalize_text ( Text ) -> Text\n  //Capitalize_text ( Source text ) -> Capitalized text\n \n $0:=$1\n $vlLen:=Length($0)\n If($vlLen>0)\n    $0[[1]]:=Uppercase($0[[1]])\n    For($vlChar;1;$vlLen-1)\n       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)\n          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])\n       End if\n    End for\n End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"For example, the line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'ALERT(Capitalize_text("hello, my name is jane doe and i\'m running for president!"))\n'})}),"\n",(0,s.jsx)(n.p,{children:"displays the alert shown here:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:r(445172).A+"",width:"512",height:"282"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,i={},c=null,o=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:o,props:i,_owner:A.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},445172:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,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"},806829:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/Syntax_Error.en-9839a6b23f8e4a167fb902c93d5e8c08.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>A});var s=r(296540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function A(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);