"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90827],{337287:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var t=r(474848),s=r(28453);const d={id:"vp-find",title:"VP Find"},c=void 0,i={id:"ViewPro/commands/vp-find",title:"VP Find",description:"VP Find (  rangeObj Text ) Object ; searchValue Object } ) Object ; searchValue Object ; replaceValue Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-find.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-find",permalink:"/docs/20-R5/ViewPro/commands/vp-find",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-find.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-find",title:"VP Find"},sidebar:"docs",previous:{title:"F",permalink:"/docs/20-R5/commands/F"},next:{title:"VP Find table",permalink:"/docs/20-R5/ViewPro/commands/vp-find-table"}},l={},a=[{value:"Description",id:"description",level:4},{value:"Returned Object",id:"returned-object",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4}];function h(e){const n={br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Find"})," (  ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"searchValue"})," : Text ) : Object",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"VP Find"})," (  ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"searchValue"})," : Text ; ",(0,t.jsx)(n.em,{children:"searchCondition"})," : Object } ) : Object",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"VP Find"})," (  ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"searchValue"})," : Text ; ",(0,t.jsx)(n.em,{children:"searchCondition"})," : Object ; ",(0,t.jsx)(n.em,{children:"replaceValue"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Range object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"searchValue"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Search value"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"searchCondition"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Object containing search condition(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"replaceValue"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Replacement value"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Range object"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Find"})," command searches the ",(0,t.jsx)(n.em,{children:"rangeObj"})," for the ",(0,t.jsx)(n.em,{children:"searchValue"}),". Optional parameters can be used to refine the search and/or replace any results found."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"rangeObj"})," parameter, pass an object containing a range to search."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"searchValue"})," parameter lets you pass the text to search for within the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can pass the optional ",(0,t.jsx)(n.em,{children:"searchCondition"})," parameter to specify how the search is performed. The following properties are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"afterColumn"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsxs)(n.td,{children:["The number of the column just before the starting column of the search. If the ",(0,t.jsx)(n.em,{children:"rangeObj"})," is a combined range, the column number given must be from the first range. Default value: -1 (beginning of the ",(0,t.jsx)(n.em,{children:"rangeObj"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"afterRow"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsxs)(n.td,{children:["The number of the row just before the starting row of the search. If the ",(0,t.jsx)(n.em,{children:"rangeObj"})," is a combined range, the row number given must be from the first range. Default value: -1 (beginning of the ",(0,t.jsx)(n.em,{children:"rangeObj"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"all"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.li,{children:["True - All cells in ",(0,t.jsx)(n.em,{children:"rangeObj"})," corresponding to ",(0,t.jsx)(n.em,{children:"searchValue"})," are returned"]}),(0,t.jsxs)(n.li,{children:["False - (default value) Only the first cell in ",(0,t.jsx)(n.em,{children:"rangeObj"})," corresponding to ",(0,t.jsx)(n.em,{children:"searchValue"})," is returned"]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"flags"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find flag exact match"})}),(0,t.jsx)(n.td,{children:"The entire content of the cell must completely match the search value"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find flag ignore case"})}),(0,t.jsx)(n.td,{children:'Capital and lower-case letters are considered the same. Ex: "a" is the same as "A".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find flag none"})}),(0,t.jsx)(n.td,{children:"no search flags are considered (default)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find flag use wild cards"})}),(0,t.jsxs)(n.td,{children:["Wildcard characters (*,?) can be used in the search string. Wildcard characters can be used in any string comparison to match any number of characters:",(0,t.jsx)(n.li,{children:'* for zero or multiple characters (for example, searching for "bl*"  can find "bl", "black", or "blob")'}),(0,t.jsx)(n.li,{children:'? for a single character (for example, searching for "h?t" can find "hot", or "hit"'})]})]})]})}),"These flags can be combined. For example: ",(0,t.jsx)(n.code,{children:"$search.flags:=vk find flag use wild cards+vk find flag ignore case"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"order"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find order by columns"})}),(0,t.jsx)(n.td,{children:"The search is performed by columns. Each row of a column is searched before the search continues to the next column."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find order by rows"})}),(0,t.jsx)(n.td,{children:"The search is performed by rows. Each column of a row is searched before the search continues to the next row (default)"})]})]})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"target"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find target formula"})}),(0,t.jsx)(n.td,{children:"The search is performed in the cell formula"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find target tag"})}),(0,t.jsx)(n.td,{children:"The search is performed in the cell tag"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vk find target text"})}),(0,t.jsx)(n.td,{children:"The search is performed in the cell text (default)"})]})]})}),(0,t.jsxs)(n.p,{children:["These flags can be combined. For example:",(0,t.jsx)(n.code,{children:"$search.target:=vk find target formula+vk find target text"})]})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In the optional ",(0,t.jsx)(n.em,{children:"replaceValue"})," parameter, you can pass text to take the place of any instance of the text in ",(0,t.jsx)(n.em,{children:"searchValue"})," found in the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"returned-object",children:"Returned Object"}),"\n",(0,t.jsx)(n.p,{children:"The function returns a range object describing each search value that was found or replaced. An empty range object is returned if no results are found."}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:'To find the first cell containing the word "Total":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $range;$result : Object\n \n$range:=VP All("ViewProArea")\n \n$result:=VP Find($range;"Total")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:'To find "Total" and replace it with "Grand Total":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $range;$condition;$result : Object\n \n$range:=VP All("ViewProArea")\n \n$condition:=New object\n$condition.target:=vk find target text\n$condition.all:=True //Search entire document\n$condition.flags:=vk find flag exact match\n \n  // Replace the cells containing only \'Total\' in the current sheet with "Grand Total"\n\n\n$result:=VP Find($range;"Total";$condition;"Grand Total")\n \n  // Check for empty range object \nIf($result.ranges.length=0)\n    ALERT("No result found")\nElse\n    ALERT($result.ranges.length+" results found")\nEnd if\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(296540);const s={},d=t.createContext(s);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);