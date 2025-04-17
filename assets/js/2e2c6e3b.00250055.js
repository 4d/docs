"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74610"],{958212:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/resource-type-list","title":"RESOURCE TYPE LIST","description":"RESOURCE TYPE LIST ( resTypes {; resFile} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/resource-type-list.md","sourceDirName":"commands-legacy","slug":"/commands/resource-type-list","permalink":"/docs/commands/resource-type-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresource-type-list.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"resource-type-list","title":"RESOURCE TYPE LIST","slug":"/commands/resource-type-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE LIST","permalink":"/docs/commands/resource-list"},"next":{"title":"STRING LIST TO ARRAY","permalink":"/docs/commands/string-list-to-array"}}'),t=r("785893"),l=r("250065");let i={id:"resource-type-list",title:"RESOURCE TYPE LIST",slug:"/commands/resource-type-list",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"RESOURCE TYPE LIST"})," ( ",(0,t.jsx)(s.em,{children:"resTypes"})," {; ",(0,t.jsx)(s.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resTypes"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"List of available resource types"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFile"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Resource file reference number, or all open resource files, if omitted"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The RESOURCE TYPE LIST command populates the array ",(0,t.jsx)(s.em,{children:"resTypes"})," with the resource types of the resources present in the resource files currently open."]}),"\n",(0,t.jsxs)(s.p,{children:["If you pass a valid resource file reference number in the optional parameter ",(0,t.jsx)(s.em,{children:"resFile"}),", only the resources from that file are listed. If you do not pass the parameter ",(0,t.jsx)(s.em,{children:"resFile"}),", all the resources from the current open resource files are listed."]}),"\n",(0,t.jsxs)(s.p,{children:["You can predeclare the array ",(0,t.jsx)(s.em,{children:"resTypes"})," as a String or Text array before calling RESOURCE TYPE LIST. If you do not predeclare the array, the command creates ",(0,t.jsx)(s.em,{children:"resTypes"})," as a Text array."]}),"\n",(0,t.jsxs)(s.p,{children:["After the call, you can test the number of resource types found by applying the command ",(0,t.jsx)(s.a,{href:"/docs/commands/size-of-array",children:"Size of array"})," to the array ",(0,t.jsx)(s.em,{children:"resTypes"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(s.p,{children:["The following example populates the array ",(0,t.jsx)(s.em,{children:"atResType"})," with the resource types of the resources present in all the resource files currently open:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0RESOURCE TYPE LIST(atResType)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"The following example tells you if the Macintosh 4D structure file you are using contains old 4D plug-ins that will need to be updated in order to use the database on Windows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file(Structure file)\n\xa0RESOURCE TYPE LIST(atResType;$vhResFile)\n\xa0If(Find in array(atResType;"4DEX")>0)\n\xa0\xa0\xa0\xa0ALERT("This database contains old model Mac OS 4D plug-ins."+(Char(13)*2)+\n\xa0\xa0\xa0\xa0"You will have to update them for using this database on Windows.")\n\xa0End if\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The structure file is not the only file where old version plug-ins can be stored. The database can also include a Proc.Ext file."]}),"\n",(0,t.jsx)(s.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(s.p,{children:"The following project method returns the number of resources present in a resource file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// Count resources project method\n\xa0\xa0// Count resources ( Time ) -> Long\n\xa0\xa0// Count resources ( DocRef ) -> Number of resources\n\xa0\n #DECLARE($doc : Time) -> $result : Integer\n\xa0$result:=0\n\xa0RESOURCE TYPE LIST($atResType;$doc)\n\xa0For($vlElem;1;Size of array($atResType))\n\xa0\xa0\xa0\xa0RESOURCE LIST($atResType{$vlElem};$alResID;$atResName;$doc)\n\xa0\xa0\xa0\xa0$result:=$result+Size of array($alResID)\n\xa0End for\n"})}),"\n",(0,t.jsx)(s.p,{children:"Once this project method is implemented in a database, you can write:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$vhResFile:=Open resource file("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("The file \u201C"+Document+"\u201D contains "+String(Count resources($vhResFile))+" resource(s).")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResFile)\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/commands/resource-list",children:"RESOURCE LIST"})}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"499"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return o},a:function(){return i}});var n=r(667294);let t={},l=n.createContext(t);function i(e){let s=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);