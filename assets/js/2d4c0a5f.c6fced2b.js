"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10671"],{472049:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/ldap-search-all","title":"LDAP SEARCH ALL","description":"LDAP SEARCH ALL ( dnRootEntry ; arrResult ; filter {; scope {; attributes {; attributesAsArray}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/ldap-search-all.md","sourceDirName":"commands-legacy","slug":"/commands/ldap-search-all","permalink":"/docs/commands/ldap-search-all","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-search-all.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ldap-search-all","title":"LDAP SEARCH ALL","slug":"/commands/ldap-search-all","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LDAP Search","permalink":"/docs/commands/ldap-search"},"next":{"title":"Language","permalink":"/docs/category/language"}}'),s=n("785893"),a=n("250065");let i={id:"ldap-search-all",title:"LDAP SEARCH ALL",slug:"/commands/ldap-search-all",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"LDAP SEARCH ALL"})," ( ",(0,s.jsx)(t.em,{children:"dnRootEntry"})," ; ",(0,s.jsx)(t.em,{children:"arrResult"})," ; ",(0,s.jsx)(t.em,{children:"filter"})," {; ",(0,s.jsx)(t.em,{children:"scope"})," {; ",(0,s.jsx)(t.em,{children:"attributes"})," {; ",(0,s.jsx)(t.em,{children:"attributesAsArray"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dnRootEntry"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Distinguished Name of root entry where search is to start"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arrResult"}),(0,s.jsx)(t.td,{children:"Object array"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Result of the search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filter"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"LDAP search filter"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scope"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:'Scope of the search: "base" (default), "one", or "sub"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attributes"}),(0,s.jsx)(t.td,{children:"Text array"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Attribute(s) to fetch"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attributesAsArray"}),(0,s.jsx)(t.td,{children:"Boolean array"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"True = force attributes to be returned as array; false = force attributes to be returned as a simple variable"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"LDAP SEARCH ALL"})," command searches in the target LDAP server for all occurrences matching the criteria defined. This command must be executed within a connection to an LDAP server opened with ",(0,s.jsx)(t.a,{href:"/docs/commands/ldap-login",children:"LDAP LOGIN"}),"; otherwise a 1003 error is returned."]}),"\n",(0,s.jsx)(t.p,{children:"Note that LDAP servers usually impose a maximum number of entries that can be received from a search. For example, Microsoft Active directory limits this number to 1000 entries by default."}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"dnRootEntry"}),", pass the ",(0,s.jsx)(t.em,{children:"Distinguished Name"})," of the LDAP server root entry; the search will start at this entry."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"arrResult"}),", pass an object array that will be filled with all matching entries; in this array, each element is an object containing attribute/value pairs returned for a matching entry. You can use the ",(0,s.jsx)(t.em,{children:"attributes"})," parameter to define the attributes to be returned."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"filter"}),", pass the LDAP search filter to execute. The filter string must be compliant with ",(0,s.jsx)(t.a,{href:"http://tools.ietf.org/search/rfc2254",children:"rfc2225"}),'. You can pass an empty string "" in order not to filter the search; the "*" is supported to search substrings.']}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"scope"}),', pass one of the following constants from the "',(0,s.jsx)(t.em,{children:"LDAP"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LDAP all levels"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"sub"}),(0,s.jsxs)(t.td,{children:["Search in the root entry level defined by ",(0,s.jsx)(t.em,{children:"dnRootEntry"})," and in all subsequent entries"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LDAP root and next"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"one"}),(0,s.jsxs)(t.td,{children:["Search in the root entry level defined by ",(0,s.jsx)(t.em,{children:"dnRootEntry"})," and in the directly subsequent entries on one level"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LDAP root only"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"base"}),(0,s.jsxs)(t.td,{children:["Search only in the root entry level defined by ",(0,s.jsx)(t.em,{children:"dnRootEntry"})," (default if omitted)"]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"attributes"}),", pass a text array which contains the list of all LDAP attributes to fetch from the matched entries. By default, if this parameter is omitted, all attributes are fetched."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Keep in mind that LDAP attribute names are case-sensitive. For more information on LDAP attributes, you can refer to ",(0,s.jsx)(t.a,{href:"https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx",children:"this page"})," that lists all available attributes for the MS Active directory."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the command returns attributes as an array if multiple results are found, or as a variable if a single result is found. The optional ",(0,s.jsx)(t.em,{children:"attributesAsArray"}),' parameter allows you to "force" the attribute(s) returned to be formatted as an array or as a variable for each attribute defined:']}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When you pass ",(0,s.jsx)(t.strong,{children:"true"})," in an element, the corresponding element of the ",(0,s.jsx)(t.em,{children:"attributes"})," parameter will be returned in an array. If a single value is found, the command returns an array with a single element."]}),"\n",(0,s.jsxs)(t.li,{children:["When you pass ",(0,s.jsx)(t.strong,{children:"false"})," in an element, the corresponding element of the ",(0,s.jsx)(t.em,{children:"attributes"})," parameter will be returned in a simple variable. If multiple entries are found, the command returns only the first element."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:'We want to get the phone number of all users named "smith" in the company directory:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0ARRAY BOOLEAN($_tabAttributes_asArray;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0APPEND TO ARRAY($_tabAttributes;"telephoneNumber")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0ARRAY OBJECT($_entry;0)\n\xa0\n\xa0LDAP LOGIN($url;$myLogin;$pwd)\n\xa0$filter:="cn=*smith*"\n\xa0LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\n\xa0\n\xa0\n\xa0\xa0//$_entry will contain for example\n\xa0\xa0// $_entry{1} = {"cn":"John Smith","telephoneNumber":"01 40 87 00 00"}\n\xa0\xa0// $_entry{2} = {"cn":"Adele Smith","telephoneNumber":"01 40 87 00 01"}\n\xa0\xa0// $_entry{3} = {"cn":"Adrian Smith","telephoneNumber":"01 23 45 67 89"}\n\xa0\xa0// ...\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(t.p,{children:["These examples illustrate the use of the ",(0,s.jsx)(t.em,{children:"attributesAsArray"})," parameter:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($_entry;0)\n\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0ARRAY BOOLEAN($_tabAttributes_asArray;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0APPEND TO ARRAY($_tabAttributes;"memberOf")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;True)\n\xa0\n\xa0LDAP LOGIN($url;$login;$pwd;LDAP password plain text)\n\xa0LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)\n\xa0LDAP LOGOUT\n\xa0\n\xa0ARRAY TEXT($_arrMemberOf;0)\n\xa0OB GET ARRAY($_entry{1};"memberOf";$_arrMemberOf)\n\xa0\xa0// in $_arrMemberOf we have an array containing all groups of the entry\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0ARRAY BOOLEAN($_tabAttributes_asArray;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0APPEND TO ARRAY($_tabAttributes;"memberOf")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0\n\xa0LDAP LOGIN($url;$login;$pwd;LDAP password plain text)\n\xa0LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)\n\xa0LDAP LOGOUT\n\xa0\n\xa0$memberOf:=OB Get($_entry{1};"memberOf")\n\xa0\xa0// in $memberOf we have a variable containing the first group of the entry\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"LDAP"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/ldap-search",children:"LDAP Search"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1329"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var r=n(667294);let s={},a=r.createContext(s);function i(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);