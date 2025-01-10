"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41794"],{816787:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/compare-strings","title":"Compare strings","description":"Compare strings ( aString ; bString {; options} ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/compare-strings.md","sourceDirName":"commands-legacy","slug":"/commands/compare-strings","permalink":"/docs/commands/compare-strings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompare-strings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compare-strings","title":"Compare strings","slug":"/commands/compare-strings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Character code","permalink":"/docs/commands/character-code"},"next":{"title":"CONVERT FROM TEXT","permalink":"/docs/commands/convert-from-text"}}'),t=s("785893"),r=s("250065");let a={id:"compare-strings",title:"Compare strings",slug:"/commands/compare-strings",displayed_sidebar:"docs"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compare strings"})," ( ",(0,t.jsx)(n.em,{children:"aString"})," ; ",(0,t.jsx)(n.em,{children:"bString"})," {; ",(0,t.jsx)(n.em,{children:"options"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aText"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"String to compare"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bText"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"String to compare"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Comparison rule(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Result of string comparison"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Compare strings"})," command returns a negative, zero, or positive value depending on if ",(0,t.jsx)(n.em,{children:"aString"})," is evaluated as lower, equal, or higher than ",(0,t.jsx)(n.em,{children:"bString"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"aString"})," parameter, pass a text value."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"bString"})," parameter, pass a text value to be compared to ",(0,t.jsx)(n.em,{children:"aString"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.strong,{children:"Compare strings"}),' functions as if the "<" (less than) operator is used. (See ',(0,t.jsx)(n.em,{children:"String operators"}),"). This can be modified with the ",(0,t.jsx)(n.em,{children:"options"})," parameter. You can pass one or a combination of the following constants from the ",(0,t.jsx)(n.em,{children:"Strings"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sk case insensitive"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:['Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however "a" is not considered the same as "\xe0" . By default, 4D string comparison is case insensitive. Can be combined with: sk char codes OR sk diacritic insensitive sk whole word (',(0,t.jsx)(n.a,{href:"/docs/commands/position",children:"Position"})," command only) This constant implies the use of the following constants (which can also be combined for improved readability): sk kana insensitive sk width insensitive sk strict"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sk char codes"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:'Strings are compared according to character codes. Current data language settings are not taken into account during the comparison. Can be combined with: sk case insensitive Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # \xe2lph\xe0)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sk diacritic insensitive"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsxs)(n.td,{children:['Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "\xe0". Can be combined with: sk case insensitive sk whole word (',(0,t.jsx)(n.a,{href:"/docs/commands/position",children:"Position"})," command only) This constant implies the use of the following constants (which can also be combined for improved readability): sk kana insensitive sk width insensitive sk strict"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sk kana insensitive"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsxs)(n.td,{children:['For Japanese language. Controls the distinction between Hiragana and Katakana syllables. From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in 4D is to ignore the difference (kana insensitive). For example, "\u3042" is considered the same as "\u30A2". The sk strict option performs a kana sensitive comparison. sk kana insensitive can be used to partially relax the rule to be kana insensitive. ',(0,t.jsx)(n.strong,{children:"Note:"})," The data language must be set to Japanese to use this option. For all other languages, the option is ignored and ",(0,t.jsx)(n.a,{href:"/docs/commands/compare-strings",children:"Compare strings"})," will work as if sk strict was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect). Can be combined with: sk case insensitive sk diacritic insensitive This constant implies the use of the following constants (which can also be combined for improved readability): sk width insensitive sk strict"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sk strict"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Strings are compared for exact matches according to the current data language. In most cases, capitalization and diacritical marks of letters are taken into account during the comparison. Can be combined with: sk case insensitive sk diacritic insensitive sk kana insensitive This constant implies the use of the following constant (which can also be combined for improved readability): sk width insensitive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sk width insensitive"}),(0,t.jsx)(n.td,{children:"16"}),(0,t.jsxs)(n.td,{children:['For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in ',(0,t.jsx)(n.a,{href:"http://www.unicode.org/reports/tr11/",children:"Unicode Standard Annex #11"}),'. From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in 4D. For example, "\uFF71" is considered the same as "\u30A2". The sk strict option performs a width sensitive comparison. ',(0,t.jsx)(n.strong,{children:"Notes:"})," The data language must be set to Japanese to use this option. For all other languages, the option is ignored and ",(0,t.jsx)(n.a,{href:"/docs/commands/compare-strings",children:"Compare strings"})," will work as if sk strict was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect). This option is ignored by the ",(0,t.jsx)(n.a,{href:"/docs/commands/position",children:"Position"})," function. Unicode width insensitive collation is asymmetric and impossible to locate by position or length. Can be combined with: sk case insensitive sk diacritic insensitive sk kana insensitive This constant implies the use of the following constant (which can also be combined for improved readability): sk strict"]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For information about defining the data language, see the section in the ",(0,t.jsx)(n.em,{children:"Design Reference"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," You cannot use the @ wildcard character with ",(0,t.jsx)(n.strong,{children:"Compare strings"}),". For example, if you pass ",(0,t.jsx)(n.em,{children:'"abc@"'})," in ",(0,t.jsx)(n.em,{children:"aString"})," or ",(0,t.jsx)(n.em,{children:"bString"})," the command will actually evaluate the ",(0,t.jsx)(n.em,{children:'"abc@"'}),' string and not an "abc" string plus any character.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returned value"})}),"\n",(0,t.jsx)(n.p,{children:"The command returns the following longint values:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Value"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"aString"})," is lower than ",(0,t.jsx)(n.em,{children:"bString"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"aString"})," is equal to ",(0,t.jsx)(n.em,{children:"bString"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"aString"})," is higher ",(0,t.jsx)(n.em,{children:"bString"})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"You want to compare the following strings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$string1:="alpha Bravo charlie Delta Echo Fox-Trot"\n\xa0$string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"\n\xa0\n\xa0\xa0//compare the strings using the character code\n\xa0$result:=Compare strings($string1;$string2;sk char codes)\n\xa0\xa0// $result = 1\n\xa0\n\xa0\xa0//compare the strings using the character code but ignoring any capitalization\n\xa0$result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)\n\xa0\xa0// $result = 0\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["The following examples illustrate the specific impact of options in ",(0,t.jsx)(n.strong,{children:"Japanese data language context"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//default is kana insensitive\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F")\xa0// equal\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F";sk strict)\xa0// not equal\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F";sk kana insensitive)\xa0// equal\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//default is\xa0case insensitive\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D")\xa0// equal\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D";sk strict)\xa0// not equal\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D";sk case insensitive)\xa0// equal\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//default is\xa0diacritic sensitive when the data language is set to Japanese (different to all other languages)\n\xa0$result:=Compare strings("ete";"\xe9t\xe9")\xa0// equal in non-Japanese data language\n\xa0$result:=Compare strings("ete";"\xe9t\xe9")\xa0// not equal in Japanese data language\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044")\xa0// not equal\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044";sk strict)\xa0// not equal\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044";sk diacritic insensitive)\xa0// equal\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"}),' The "Sorting order appropriate for searching" setting (see ) has an impact on the ',(0,t.jsx)(n.strong,{children:"Compare strings"}),' command. In particular, the "Katakana-Hiragana Prolonged Sound Mark" or "\u9577\u97F3\u8A18\u53F7" will be interpreted differently. The setting also has an impact on "Japanese Iteration Marks" such as "\u309D" or "\u309E". For example:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$result:=Compare strings("\u3044\u3059\u305A";"\u3044\u3059\u309E")\xa0// equal if setting is disabled\n\xa0$result:=Compare strings("\u3044\u3059\u305A";"\u3044\u3059\u309E")\xa0// not equal if setting is enabled\n\xa0$result:=Compare strings("\u30E9\u30FC\u30E1\u30F3";"\uFF97\uFF70\uFF92\uFF9D")\xa0// equal if setting is enabled\n\xa0$result:=Compare strings("\u30E9\u30FC\u30E1\u30F3";&NBSP;"\uFF97\uFF70\uFF92\uFF9D")\xa0// not equal if setting is disabled\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/commands/position",children:"Position"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1756"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var i=s(667294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);