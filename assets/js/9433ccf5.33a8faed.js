"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17825"],{119160:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/set-database-localization","title":"SET DATABASE LOCALIZATION","description":"SET DATABASE LOCALIZATION ( languageCode {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-database-localization.md","sourceDirName":"commands-legacy","slug":"/commands/set-database-localization","permalink":"/docs/commands/set-database-localization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-database-localization.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-database-localization","title":"SET DATABASE LOCALIZATION","slug":"/commands/set-database-localization","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND MESSAGE TO REMOTE USER","permalink":"/docs/commands/send-message-to-remote-user"},"next":{"title":"SET DATABASE PARAMETER","permalink":"/docs/commands/set-database-parameter"}}'),s=t("785893"),r=t("250065");let o={id:"set-database-localization",title:"SET DATABASE LOCALIZATION",slug:"/commands/set-database-localization",displayed_sidebar:"docs"},l=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"})," ( ",(0,s.jsx)(n.em,{children:"languageCode"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"languageCode"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Language selector"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Scope of command"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The SET DATABASE LOCALIZATION command is used to modify the current language of the database for the current session."}),"\n",(0,s.jsxs)(n.p,{children:["The current language of the database lets you specify the .lproj folder where the program will look for the localized elements of the application (text and pictures). By default, 4D automatically determines the current language according to the contents of the ",(0,s.jsx)(n.strong,{children:"Resources"})," folder and the system environment (see the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/get-database-localization",children:"Get database localization"})," command). SET DATABASE LOCALIZATION can be used to modify the default current language."]}),"\n",(0,s.jsx)(n.p,{children:"The command does not modify the language of forms that are already loaded, only elements displayed after the command is called will take the new configuration into account."}),"\n",(0,s.jsxs)(n.p,{children:["Pass the language to be used for the application in ",(0,s.jsx)(n.em,{children:"languageCode"}),', expressed in the standard specified by RFC 3066, ISO639 and ISO3166. Typically, you must pass "fr" for French, "es" for Spanish, "en-us" for American English, and so on. For more information about this standard, please refer to ',(0,s.jsx)(n.em,{children:"Appendix B: XLIFF architecture"})," in the ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the command applies to all the databases and components that are open, for all the processes. The optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, if passed, specifies that the command must only apply to the database that called it. This parameter can be used more particularly to specify separately the language of the database and that of a component."]}),"\n",(0,s.jsxs)(n.p,{children:["If the command has been executed correctly, the ",(0,s.jsx)(n.em,{children:"OK"})," system variable is set to 1; otherwise, it is set to 0."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' In accordance with the RFC, the command uses the "-" (dash) to separate the language code and the region code, for example "fr-ca" or "en-us". On the other hand, the "lproj" folders of the ',(0,s.jsx)(n.strong,{children:"Resources"}),' folder use the "_" (underscore), for example "fr_ca.lproj" or "en_us.lproj".']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," With 4D Server, the languages available are those located on the remote machine that called the command. You must therefore make sure that the ",(0,s.jsx)(n.strong,{children:"Resources"})," folders are synchronized."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"We want to set French as the interface language:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE LOCALIZATION("fr")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:'The interface of your application uses the static string ":xliff:shopping". The XLIFF files contain more particularly the following information:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FR folder:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:' <trans-unit id="15" resname="Shopping">  \n<source>Shopping</source>  \n<target>Faire les courses</target>  \n</trans-unit>  \n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FR_CA folder:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:' <trans-unit id="15" resname="Shopping">  \n<source>Shopping</source>  \n<target>Magasiner</target>  \n</trans-unit>  \n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE LOCALIZATION("fr")\n\xa0\xa0//the string ":xliff:shopping" displays "Faire les courses"\n\xa0SET DATABASE LOCALIZATION("fr-ca")\n\xa0\xa0//the string ":xliff:shopping" displays "Magasiner"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/get-database-localization",children:"Get database localization"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1104"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var a=t(667294);let s={},r=a.createContext(s);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);