"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41713"],{449728:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-find","title":"VP Find","description":"VP Find (  rangeObj Text ) Object ; searchValue Object } ) Object ; searchValue Object ; replaceValue Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-find.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-find","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-find","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-find.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-find","title":"VP Find"},"sidebar":"docs","previous":{"title":"F","permalink":"/docs/fr/20-R7/commands-legacy/F"},"next":{"title":"VP Find table","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-find-table"}}'),s=r("785893"),d=r("250065");let c={id:"vp-find",title:"VP Find"},l=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2}];function h(e){let n={br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Find"})," (  ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"searchValue"})," : Text ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"VP Find"})," (  ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"searchValue"})," : Text ; ",(0,s.jsx)(n.em,{children:"searchCondition"})," : Object } ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"VP Find"})," (  ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"searchValue"})," : Text ; ",(0,s.jsx)(n.em,{children:"searchCondition"})," : Object ; ",(0,s.jsx)(n.em,{children:"replaceValue"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"searchValue"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valeur de recherche"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"searchCondition"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet contenant la/les condition(s) de recherche"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"replaceValue"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valeur de remplacement"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Find"})," command searches the ",(0,s.jsx)(n.em,{children:"rangeObj"})," for the ",(0,s.jsx)(n.em,{children:"searchValue"}),". Des param\xe8tres facultatifs peuvent \xeatre utilis\xe9s pour affiner la recherche et/ou remplacer les r\xe9sultats trouv\xe9s."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"rangeObj"})," parameter, pass an object containing a range to search."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"searchValue"})," parameter lets you pass the text to search for within the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass the optional ",(0,s.jsx)(n.em,{children:"searchCondition"})," parameter to specify how the search is performed. Les propri\xe9t\xe9s suivantes sont prises en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"afterColumn"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Le num\xe9ro de la colonne situ\xe9e juste avant la colonne de d\xe9part de la recherche. If the ",(0,s.jsx)(n.em,{children:"rangeObj"})," is a combined range, the column number given must be from the first range. Default value: -1 (beginning of the ",(0,s.jsx)(n.em,{children:"rangeObj"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"afterRow"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["Le num\xe9ro de la colonne situ\xe9e juste avant la colonne de d\xe9part de la recherche. If the ",(0,s.jsx)(n.em,{children:"rangeObj"})," is a combined range, the row number given must be from the first range. Default value: -1 (beginning of the ",(0,s.jsx)(n.em,{children:"rangeObj"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"all"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:["True - All cells in ",(0,s.jsx)(n.em,{children:"rangeObj"})," corresponding to ",(0,s.jsx)(n.em,{children:"searchValue"})," are returned"]}),(0,s.jsxs)(n.li,{children:["False - (default value) Only the first cell in ",(0,s.jsx)(n.em,{children:"rangeObj"})," corresponding to ",(0,s.jsx)(n.em,{children:"searchValue"})," is returned"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"flags"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag exact match"})}),(0,s.jsx)(n.td,{children:"The entire content of the cell must completely match the search value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag ignore case"})}),(0,s.jsx)(n.td,{children:'Capital and lower-case letters are considered the same. Ex: "a" is the same as "A".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag none"})}),(0,s.jsx)(n.td,{children:"no search flags are considered (default)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag use wild cards"})}),(0,s.jsxs)(n.td,{children:["Wildcard characters (*,?) can be used in the search string. Wildcard characters can be used in any string comparison to match any number of characters:",(0,s.jsx)(n.li,{children:'* for zero or multiple characters (for example, searching for "bl*"  can find "bl", "black", or "blob")'}),(0,s.jsx)(n.li,{children:'? for a single character (for example, searching for "h?t" can find "hot", or "hit"'})]})]})]})}),"These flags can be combined. For example: ",(0,s.jsx)(n.code,{children:"$search.flags:=vk find flag use wild cards+vk find flag ignore case"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"order"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find order by columns"})}),(0,s.jsx)(n.td,{children:"The search is performed by columns. Each row of a column is searched before the search continues to the next column."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find order by rows"})}),(0,s.jsx)(n.td,{children:"The search is performed by rows. Each column of a row is searched before the search continues to the next row (default)"})]})]})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"target"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find target formula"})}),(0,s.jsx)(n.td,{children:"The search is performed in the cell formula"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find target tag"})}),(0,s.jsx)(n.td,{children:"The search is performed in the cell tag"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find target text"})}),(0,s.jsx)(n.td,{children:"The search is performed in the cell text (default)"})]})]})}),(0,s.jsxs)(n.p,{children:["These flags can be combined. For example:",(0,s.jsx)(n.code,{children:"$search.target:=vk find target formula+vk find target text"})]})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"replaceValue"})," parameter, you can pass text to take the place of any instance of the text in ",(0,s.jsx)(n.em,{children:"searchValue"})," found in the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,s.jsx)(n.p,{children:"La fonction retourne un objet de plage d\xe9crivant chaque valeur de recherche trouv\xe9e ou remplac\xe9e. Un objet de plage vide est retourn\xe9 si aucun r\xe9sultat n'est trouv\xe9."}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:'Pour trouver la premi\xe8re cellule contenant le mot "Total" :'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $range;$result : Object\n \n$range:=VP All("ViewProArea")\n \n$result:=VP Find($range;"Total")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:'Pour trouver "Total" et le remplacer par "Grand Total" :'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $range;$condition;$result : Object\n \n$range:=VP All("ViewProArea")\n \n$condition:=New object\n$condition.target:=vk find target text\n$condition.all:=True //Search entire document\n$condition.flags:=vk find flag exact match\n \n  // Replace the cells containing only \'Total\' in the current sheet with "Grand Total"\n\n\n$result:=VP Find($range;"Total";$condition;"Grand Total")\n \n  // Check for empty range object \nIf($result.ranges.length=0)\n    ALERT("No result found")\nElse\n    ALERT($result.ranges.length+" results found")\nEnd if\n'})})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var t=r(667294);let s={},d=t.createContext(s);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);