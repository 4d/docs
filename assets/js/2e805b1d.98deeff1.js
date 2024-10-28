"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70430],{985442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(474848),s=n(28453);const i={id:"ldap-search",title:"LDAP Search",slug:"/commands/ldap-search",displayed_sidebar:"docs"},a=void 0,l={id:"commands-legacy/ldap-search",title:"LDAP Search",description:"LDAP Search ( dnRootEntry ; filter {; scope {; attributes {; attributesAsArray}}} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/ldap-search.md",sourceDirName:"commands-legacy",slug:"/commands/ldap-search",permalink:"/docs/commands/ldap-search",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-search.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ldap-search",title:"LDAP Search",slug:"/commands/ldap-search",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LDAP LOGOUT",permalink:"/docs/commands/ldap-logout"},next:{title:"LDAP SEARCH ALL",permalink:"/docs/commands/ldap-search-all"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"LDAP Search"})," ( ",(0,r.jsx)(t.em,{children:"dnRootEntry"})," ; ",(0,r.jsx)(t.em,{children:"filter"})," {; ",(0,r.jsx)(t.em,{children:"scope"})," {; ",(0,r.jsx)(t.em,{children:"attributes"})," {; ",(0,r.jsx)(t.em,{children:"attributesAsArray"}),"}}} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dnRootEntry"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Distinguished Name of root entry where search is to start"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"LDAP search filter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scope"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:'Scope of search: "base" (default), "one", or "sub"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Attribute(s) to fetch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributesAsArray"}),(0,r.jsx)(t.td,{children:"Boolean array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"True = force attributes to be returned as array; False = force attributes to be returned as a simple variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Key/value attributes"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"LDAP Search"})," command searches in the target LDAP server for the first occurrence matching the criteria defined. This command must be executed within a connection to an LDAP server opened with ",(0,r.jsx)(t.a,{href:"/docs/commands/ldap-login",children:"LDAP LOGIN"}),"; otherwise a 1003 error is returned."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"dnRootEntry"}),", pass the ",(0,r.jsx)(t.em,{children:"Distinguished Name"})," of the LDAP server root entry; the search will start at this entry."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"filter"}),", pass the LDAP search filter to execute. The filter string must be compliant with ",(0,r.jsx)(t.a,{href:"http://tools.ietf.org/search/rfc2254",children:"rfc2225"}),'. You can pass an empty string "" in order not to filter the search; the "*" is supported to search substrings.']}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"scope"}),', pass one of the following constants from the "',(0,r.jsx)(t.em,{children:"LDAP"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LDAP all levels"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"sub"}),(0,r.jsxs)(t.td,{children:["Search in the root entry level defined by ",(0,r.jsx)(t.em,{children:"dnRootEntry"})," and in all subsequent entries"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LDAP root and next"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"one"}),(0,r.jsxs)(t.td,{children:["Search in the root entry level defined by ",(0,r.jsx)(t.em,{children:"dnRootEntry"})," and in the directly subsequent entries on one level"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LDAP root only"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"base"}),(0,r.jsxs)(t.td,{children:["Search only in the root entry level defined by ",(0,r.jsx)(t.em,{children:"dnRootEntry"})," (default if omitted)"]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"attributes"}),", pass a text array which contains the list of all LDAP attributes to fetch from the matched entries. By default, if this parameter is omitted, all attributes are fetched."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Keep in mind that LDAP attribute names are case-sensitive. For more information on LDAP attributes, you can refer to ",(0,r.jsx)(t.a,{href:"https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx",children:"this page"})," that lists all available attributes for the MS Active directory."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, the command returns attributes as a collection if multiple results are found, or as a variable if a single result is found. The optional ",(0,r.jsx)(t.em,{children:"attributesAsArray"}),' parameter allows you to "force" returned attribute(s) to be formatted as a collection or as a variable for each attribute defined:']}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["When you pass ",(0,r.jsx)(t.strong,{children:"true"})," in an element, the corresponding element of the ",(0,r.jsx)(t.em,{children:"attributes"})," parameter will be returned in a collection. If a single value is found, the command returns a collection with a single element."]}),"\n",(0,r.jsxs)(t.li,{children:["When you pass ",(0,r.jsx)(t.strong,{children:"false"})," in an element, the corresponding element of the ",(0,r.jsx)(t.em,{children:"attributes"})," parameter will be returned in a simple variable. If multiple entries are found, the command returns only the first element."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:'You want to get the phone number of the user "smith" in the company directory:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes;"phoneNumber")\n\xa0LDAP LOGIN($url;$dn;$pwd)\n\xa0$filter:="cn=*smith*"\n\xa0$vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:'We want to get an array of all entries found for the "memberOf" attribute:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $entry : Object\n\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0ARRAY BOOLEAN($_tabAttributes_asArray;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0APPEND TO ARRAY($_tabAttributes;"memberOf")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;True)\n\xa0\n\xa0LDAP LOGIN($url;$login;$pwd;LDAP password plain text)\n\xa0$entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)\n\xa0LDAP LOGOUT\n\xa0\n\xa0ARRAY TEXT($_arrMemberOf;0)\n\xa0OB GET ARRAY($entry;"memberOf";$_arrMemberOf)\n\xa0\xa0// in $_arrMemberOf we have an array containing all entry groups\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"LDAP"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/ldap-search-all",children:"LDAP SEARCH ALL"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(296540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);