"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83689"],{818663:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/reduce-selection","title":"REDUCE SELECTION","description":"REDUCE SELECTION ( {aTable ;} number )","source":"@site/versioned_docs/version-20-R9/commands-legacy/reduce-selection.md","sourceDirName":"commands-legacy","slug":"/commands/reduce-selection","permalink":"/docs/commands/reduce-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freduce-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"reduce-selection","title":"REDUCE SELECTION","slug":"/commands/reduce-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records in selection","permalink":"/docs/commands/records-in-selection"},"next":{"title":"SCAN INDEX","permalink":"/docs/commands/scan-index"}}'),t=r("785893"),d=r("250065");let i={id:"reduce-selection",title:"REDUCE SELECTION",slug:"/commands/reduce-selection",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"REDUCE SELECTION"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;} ",(0,t.jsx)(n.em,{children:"number"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table for which to reduce the selection, or Default table, if omitted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Number of records to keep selected"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"REDUCE SELECTION"})," creates a new selection of records for ",(0,t.jsx)(n.em,{children:"aTable"}),". The command reduces the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," to the first ",(0,t.jsx)(n.em,{children:"number"})," records. ",(0,t.jsx)(n.strong,{children:"REDUCE SELECTION"})," is applied to the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," in the current process. It changes the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," for the current process; the first record of the new selection is the current record."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If the statement ",(0,t.jsx)(n.strong,{children:"REDUCE SELECTION"}),"(aTable;0) is executed, there is no longer any selection nor any current records in the table."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following example first finds the correct statistics for a worldwide contest among the dealers in over 20 countries. For each country, the 3 best dealers who have sold product worth more than $50,000 and who are among the 100 best dealers in the world are awarded a prize. With a few lines of code, this complex request can be executed by using indexed searches:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE EMPTY SET([Dealers];"Winners")\xa0// Create an empty set\n\xa0SCAN INDEX([Dealers]Sales amount;100;<)\xa0// Scan from the end of the index\n\xa0CREATE SET([Dealers];"100 best Dealers")\xa0// Put the selected records in a set\n\xa0For($Country;1;Records in table([Countries]))\xa0// For each Country\n\xa0\xa0// Search for the dealers in this country\n\xa0\xa0\xa0\xa0QUERY([Dealers];[Dealers]Country=[Countries]Name;*)\xa0// ...who sold for more than $50,000\n\xa0\xa0\xa0\xa0QUERY([Dealers];&;[Dealers]Sales amount>=50000)\n\xa0\xa0\xa0\xa0CREATE SET([Dealers];"WinnerDealers")\xa0// Put them in a set\n\xa0\xa0// They should be in the group of 100 best dealers\n\xa0\xa0\xa0\xa0INTERSECTION("WinnerDealers";"100 best Dealers";"WinnerDealers")\n\xa0\xa0\xa0\xa0USE SET("WinnerDealers")\xa0// Potential winners for the country\n\xa0\xa0// Sort them by the results in descending order\n\xa0\xa0\xa0\xa0ORDER BY([Dealers];[Dealers]Sales amount;<)\n\xa0\xa0\xa0\xa0REDUCE SELECTION([Dealers];3)\xa0// Take the 3 best Dealers\n\xa0\xa0\xa0\xa0CREATE SET([Dealers];"WinnerDealers")\xa0// The winners for the country\n\xa0\xa0// Put them in the worldwide winners list\n\xa0\xa0\xa0\xa0UNION("WinnerDealers";"TheWinners";"TheWinners")\n\xa0End for\n\xa0CLEAR SET("100 best Dealers")\xa0// Don\'t need this set anymore\n\xa0CLEAR SET("WinnerDealers")\xa0// Don\'t need this set anymore\n\xa0USE SET("The Winners")\xa0// Here you have the Winners\n\xa0CLEAR SET("The Winners")\xa0// Don\'t need this set anymore\n\xa0OUTPUT FORM([Dealers];"Prize letter")\xa0// Select the letter\n\xa0PRINT SELECTION([Dealers])\xa0// Print the letters\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/scan-index",children:"SCAN INDEX"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Sets"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"351"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Changes current record"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Changes current selection"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);