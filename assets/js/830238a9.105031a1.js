"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96667"],{984134:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/qr-set-destination","title":"QR SET DESTINATION","description":"QR SET DESTINATION ( area ; type {; specifics} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-set-destination.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-destination","permalink":"/docs/commands/qr-set-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-destination","title":"QR SET DESTINATION","slug":"/commands/qr-set-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET BORDERS","permalink":"/docs/commands/qr-set-borders"},"next":{"title":"QR SET DOCUMENT PROPERTY","permalink":"/docs/commands/qr-set-document-property"}}'),r=t("785893"),i=t("250065");let d={id:"qr-set-destination",title:"QR SET DESTINATION",slug:"/commands/qr-set-destination",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR SET DESTINATION"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"type"})," {; ",(0,r.jsx)(n.em,{children:"specifics"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of the report"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"specifics"}),(0,r.jsx)(n.td,{children:"Text, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Specifics linked to the output type"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"QR SET DESTINATION"})," command sets the output ",(0,r.jsx)(n.em,{children:"type"})," of the report for the area whose reference was passed in ",(0,r.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"type"})," parameter, you can pass one of the constants of the ",(0,r.jsx)(n.em,{children:"QR Output Destination"})," theme. The contents of the ",(0,r.jsx)(n.em,{children:"specifics"})," parameter depends on the value of ",(0,r.jsx)(n.em,{children:"type"}),". The following table describes the values that can be passed in both ",(0,r.jsx)(n.em,{children:"type"})," and ",(0,r.jsx)(n.em,{children:"specifics"})," parameters:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr HTML file"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"specifics"}),": Pathname to the file."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr printer"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"specifics"}),': "*" to remove the print dialog boxes']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr text file"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"specifics"}),": Pathname to the file."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"qr printer"}),' (1): If you pass a string containing a star ("*") in the ',(0,r.jsx)(n.em,{children:"specifics"})," parameter, no dialog box will be displayed during printing and the current print settings will be used automatically. This setting is necessary when you want to print the report on the server."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"qr text file"})," (2): If you pass an empty string in the ",(0,r.jsx)(n.em,{children:"specifics"})," parameter, a Save file dialog is displayed; otherwise the file is saved at the location indicated by the path.",(0,r.jsx)(n.br,{}),"\nThe default field delimiter is the tab character (code 9). The default record delimiter is the carriage return character (code 13). You can change these defaults by assigning values to the two delimiter system variables: FldDelimit and RecDelimit. If under Windows, FldDelimit equals 13, a char 10 (line feed) will be appended after the carriage return. Be aware that these variables are used by other commands such as ",(0,r.jsx)(n.a,{href:"/docs/commands/import-text",children:"IMPORT TEXT"})," for example. Changing them for the Quick Report editor, changes them everywhere in the application."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"qr HTML file"})," (5): An HTML file is created using the template set by ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-set-html-template",children:"QR SET HTML TEMPLATE"}),". For detailed information on how the translation is performed, please refer to the Design Reference manual."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,r.jsx)(n.br,{}),"\nIf the value of the destination ",(0,r.jsx)(n.em,{children:"type"})," is incorrect, the error -9852 will be generated."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'The following code sets the destination as being the text file "Mydoc.txt" and executes the Quick Report:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QR SET DESTINATION(MyArea;qr text file;"MyDoc.txt")\n\xa0QR RUN(MyArea)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-destination",children:"QR GET DESTINATION"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"745"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);