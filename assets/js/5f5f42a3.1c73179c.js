"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74225],{971884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(474848),i=t(28453);const r={id:"number",title:"Number (Real, Longint, Integer)"},d=void 0,l={id:"Concepts/number",title:"Number (Real, Longint, Integer)",description:"Number is a generic term that stands for:",source:"@site/versioned_docs/version-20-R6/Concepts/dt_number.md",sourceDirName:"Concepts",slug:"/Concepts/number",permalink:"/docs/20-R6/Concepts/number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"number",title:"Number (Real, Longint, Integer)"},sidebar:"docs",previous:{title:"Null and Undefined",permalink:"/docs/20-R6/Concepts/null-undefined"},next:{title:"Object",permalink:"/docs/20-R6/Concepts/object"}},h={},o=[{value:"Number literals",id:"number-literals",level:2},{value:"Number operators",id:"number-operators",level:2},{value:"Modulo",id:"modulo",level:3},{value:"Longint division",id:"longint-division",level:3},{value:"Real comparison",id:"real-comparison",level:3},{value:"Precedence",id:"precedence",level:3},{value:"Bitwise operators",id:"bitwise-operators",level:2},{value:"Notes",id:"notes",level:4},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Number is a generic term that stands for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Real field, variable or expression. The range for the Real data type is \xb11.7e\xb1308 (13 significant digits)."}),"\n",(0,s.jsx)(n.li,{children:"Long Integer field, variable or expression. The range for the Long Integer data type (4-byte Integer) is -2^31..(2^31)-1."}),"\n",(0,s.jsx)(n.li,{children:"Integer field, array or expression. The range for the Integer data type (2-byte Integer) is -32,768..32,767 (2^15..(2^15)-1)."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Integer field values are automatically converted in Long integers when used in the 4D Language."]}),"\n",(0,s.jsx)(n.p,{children:"You can assign any Number data type to another; 4D does the conversion, truncating or rounding if necessary. However, when values are out of range, the conversion will not return a valid value. You can mix Number data types in expressions."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In the 4D Language Reference manual, no matter the actual data type, the Real, Integer, and Long Integer parameters in command descriptions are denoted as number, except when marked otherwise."]}),"\n",(0,s.jsx)(n.h2,{id:"number-literals",children:"Number literals"}),"\n",(0,s.jsx)(n.p,{children:"A numeric literal constant is written as a real number. Here are some examples of numeric constants:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'The default decimal separator is a period (.), regardless of the system language. If you have checked the "Use regional system settings" option in the Methods Page of the Preferences, you must use the separator defined in your system.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Negative numbers are specified with the minus sign (-). For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,s.jsx)(n.h2,{id:"number-operators",children:"Number operators"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Addition"}),(0,s.jsx)(n.td,{children:"Number + Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"2 + 3"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Subtraction"}),(0,s.jsx)(n.td,{children:"Number - Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"3 \u2013 2"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Multiplication"}),(0,s.jsx)(n.td,{children:"Number * Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"5 * 2"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Division"}),(0,s.jsx)(n.td,{children:"Number / Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"5 / 2"}),(0,s.jsx)(n.td,{children:"2.5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Longint division"}),(0,s.jsx)(n.td,{children:"Number \\ Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"5 \\ 2"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modulo"}),(0,s.jsx)(n.td,{children:"Number % Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"5 % 2"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Exponentiation"}),(0,s.jsx)(n.td,{children:"Number ^ Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"2 ^ 3"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Equality"}),(0,s.jsx)(n.td,{children:"Number = Number"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"10 = 10"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"10 = 11"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inequality"}),(0,s.jsx)(n.td,{children:"Number # Number"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"10 #11"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"10 # 10"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than"}),(0,s.jsx)(n.td,{children:"Number > Number"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"11 > 10"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"10 > 11"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than"}),(0,s.jsx)(n.td,{children:"Number < Number"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"10 < 11"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"11 < 10"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than or equal to"}),(0,s.jsx)(n.td,{children:"Number >= Number"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"11 >= 10"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"10 >= 11"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than or equal to"}),(0,s.jsx)(n.td,{children:"Number <= Number"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"10 <= 11"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"11 <= 10"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"modulo",children:"Modulo"}),"\n",(0,s.jsx)(n.p,{children:"The modulo operator % divides the first number by the second number and returns a whole number remainder. Here are some examples:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"10 % 2 returns 0 because 10 is evenly divided by 2."}),"\n",(0,s.jsx)(n.li,{children:"10 % 3 returns 1 because the remainder is 1."}),"\n",(0,s.jsx)(n.li,{children:"10.5 % 2 returns 0 because the remainder is not a whole number."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The modulo operator % returns significant values with numbers that are in the Long Integer range (from minus 2^31 to 2^31 minus one). To calculate the modulo with numbers outside of this range, use the [",(0,s.jsx)(n.code,{children:"Mod"}),"(",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page98.html",children:"https://doc.4d.com/4dv20/help/command/en/page98.html"}),")] command."]})}),"\n",(0,s.jsx)(n.h3,{id:"longint-division",children:"Longint division"}),"\n",(0,s.jsx)(n.p,{children:"The longint division operator \\ returns significant values with integer numbers only."}),"\n",(0,s.jsx)(n.h3,{id:"real-comparison",children:"Real comparison"}),"\n",(0,s.jsxs)(n.p,{children:["To compare two reals for equality, the 4D language actually compares the absolute value of the difference with ",(0,s.jsx)(n.em,{children:"epsilon"}),". See the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page623.html",children:(0,s.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})})," command."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for ",(0,s.jsx)(n.em,{children:"epsilon"})," and does not take the ",(0,s.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})," setting into account."]})}),"\n",(0,s.jsx)(n.h3,{id:"precedence",children:"Precedence"}),"\n",(0,s.jsx)(n.p,{children:"The order in which an expression is evaluated is called precedence. 4D has a strict left-to-right precedence, in which algebraic order is not observed. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,s.jsx)(n.p,{children:"returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35."}),"\n",(0,s.jsx)(n.p,{children:"To override the left-to-right precedence, you MUST use parentheses. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,s.jsx)(n.p,{children:"returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23."}),"\n",(0,s.jsx)(n.p,{children:"Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses\u2014the compiler detects a missing parenthesis as a syntax error."}),"\n",(0,s.jsx)(n.h2,{id:"bitwise-operators",children:"Bitwise operators"}),"\n",(0,s.jsxs)(n.p,{children:["The bitwise operators operates on ",(0,s.jsx)(n.strong,{children:"Long Integer"})," expressions or values."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If you pass an Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left."}),"\n",(0,s.jsxs)(n.p,{children:["Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means ",(0,s.jsx)(n.strong,{children:"True"})," and a bit equal to 0 means ",(0,s.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Operator"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise AND"}),(0,s.jsx)(n.td,{children:"&"}),(0,s.jsx)(n.td,{children:"Long & Long"}),(0,s.jsx)(n.td,{children:"Long"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise OR (inclusive)"}),(0,s.jsx)(n.td,{children:"|"}),(0,s.jsx)(n.td,{children:"Long | Long"}),(0,s.jsx)(n.td,{children:"Long"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise OR (exclusive)"}),(0,s.jsx)(n.td,{children:"^ |"}),(0,s.jsx)(n.td,{children:"Long ^ | Long"}),(0,s.jsx)(n.td,{children:"Long"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Left Bit Shift"}),(0,s.jsx)(n.td,{children:"<<"}),(0,s.jsx)(n.td,{children:"Long << Long"}),(0,s.jsx)(n.td,{children:"Long (see note 1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Right Bit Shift"}),(0,s.jsx)(n.td,{children:">>"}),(0,s.jsx)(n.td,{children:"Long >> Long"}),(0,s.jsx)(n.td,{children:"Long (see note 1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Set"}),(0,s.jsx)(n.td,{children:"?+"}),(0,s.jsx)(n.td,{children:"Long ?+ Long"}),(0,s.jsx)(n.td,{children:"Long (see note 2)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Clear"}),(0,s.jsx)(n.td,{children:"?-"}),(0,s.jsx)(n.td,{children:"Long ?- Long"}),(0,s.jsx)(n.td,{children:"Long (see note 2)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Test"}),(0,s.jsx)(n.td,{children:"??"}),(0,s.jsx)(n.td,{children:"Long ?? Long"}),(0,s.jsx)(n.td,{children:"Boolean (see note 2)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["For the ",(0,s.jsx)(n.code,{children:"Left Bit Shift"})," and ",(0,s.jsx)(n.code,{children:"Right Bit Shift"})," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant."]}),"\n",(0,s.jsxs)(n.li,{children:["For the ",(0,s.jsx)(n.code,{children:"Bit Set"}),", ",(0,s.jsx)(n.code,{children:"Bit Clear"})," and ",(0,s.jsx)(n.code,{children:"Bit Test"})," operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following table lists the bitwise operators and their effects:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise AND"}),(0,s.jsxs)(n.td,{children:["Each resulting bit is the logical AND of the bits in the two operands. Here is the logical AND table:",(0,s.jsx)(n.li,{children:"1 & 1 --\x3e 1"}),(0,s.jsx)(n.li,{children:"0 & 1 --\x3e 0"}),(0,s.jsx)(n.li,{children:"1 & 0 --\x3e 0"}),(0,s.jsx)(n.li,{children:"0 & 0 --\x3e 0"}),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise OR (inclusive)"}),(0,s.jsxs)(n.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,s.jsx)(n.li,{children:"1 | 1 --\x3e 1"}),(0,s.jsx)(n.li,{children:"0 | 1 --\x3e 1"}),(0,s.jsx)(n.li,{children:"1 | 0 --\x3e 1"}),(0,s.jsx)(n.li,{children:"0 | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise OR (exclusive)"}),(0,s.jsxs)(n.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,s.jsx)(n.li,{children:"1 ^ | 1 --\x3e 0"}),(0,s.jsx)(n.li,{children:"0 ^ | 1 --\x3e 1"}),(0,s.jsx)(n.li,{children:"1 ^ | 0 --\x3e 1"}),(0,s.jsx)(n.li,{children:"0 ^ | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Left Bit Shift"}),(0,s.jsxs)(n.td,{children:["The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. ",(0,s.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Right Bit Shift"}),(0,s.jsxs)(n.td,{children:["The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.",(0,s.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Set"}),(0,s.jsx)(n.td,{children:"The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Clear"}),(0,s.jsx)(n.td,{children:"The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Test"}),(0,s.jsx)(n.td,{children:"Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Example"}),(0,s.jsx)(n.th,{children:"Result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise AND"}),(0,s.jsx)(n.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,s.jsx)(n.td,{children:"0x0000FF00"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise OR (inclusive)"}),(0,s.jsx)(n.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,s.jsx)(n.td,{children:"0xFF00FFFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bitwise OR (exclusive)"}),(0,s.jsx)(n.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,s.jsx)(n.td,{children:"0xFF0000FF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Left Bit Shift"}),(0,s.jsx)(n.td,{children:"0x0000FFFF << 8"}),(0,s.jsx)(n.td,{children:"0x00FFFF00"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Right Bit Shift"}),(0,s.jsx)(n.td,{children:"0x0000FFFF >> 8"}),(0,s.jsx)(n.td,{children:"0x000000FF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Set"}),(0,s.jsx)(n.td,{children:"0x00000000 ?+ 16"}),(0,s.jsx)(n.td,{children:"0x00010000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Clear"}),(0,s.jsx)(n.td,{children:"0x00010000 ?- 16"}),(0,s.jsx)(n.td,{children:"0x00000000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bit Test"}),(0,s.jsx)(n.td,{children:"0x00010000 ?? 16"}),(0,s.jsx)(n.td,{children:"True"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(296540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);