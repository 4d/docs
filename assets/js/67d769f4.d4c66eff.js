"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28140],{819480:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(474848),a=s(28453);const r={id:"templates",title:"Template pages"},i=void 0,o={id:"WebServer/templates",title:"Template pages",description:"4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of transformation tags such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (``) into the HTML source code.",source:"@site/versioned_docs/version-19/WebServer/templates.md",sourceDirName:"WebServer",slug:"/WebServer/templates",permalink:"/docs/19/WebServer/templates",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"templates",title:"Template pages"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/19/WebServer/gettingStarted"},next:{title:"Processing HTTP requests",permalink:"/docs/19/WebServer/httpRequests"}},c={},d=[{value:"Tags for templates",id:"tags-for-templates",level:2},{value:"Tag parsing",id:"tag-parsing",level:2},{value:"Accessing 4D methods via the Web",id:"accessing-4d-methods-via-the-web",level:2},{value:"Prevention of malicious code insertion",id:"prevention-of-malicious-code-insertion",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of ",(0,n.jsx)(t.a,{href:"/docs/19/Tags/tags",children:"transformation tags"})," such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (",(0,n.jsx)(t.code,{children:"\x3c!--#4DTagName TagValue--\x3e"}),") into the HTML source code."]}),"\n",(0,n.jsx)(t.p,{children:"When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D processing."}),"\n",(0,n.jsx)(t.p,{children:"For example, if you write in an HTML page:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"Welcome to \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The value of the 4D variable ",(0,n.jsx)(t.em,{children:"vtSiteName"})," will be inserted in the HTML page."]}),"\n",(0,n.jsx)(t.h2,{id:"tags-for-templates",children:"Tags for templates"}),"\n",(0,n.jsx)(t.p,{children:"The following 4D tags are available:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"4DTEXT, to insert 4D variables and expressions as text,"}),"\n",(0,n.jsx)(t.li,{children:"4DHTML, to insert HTML code,"}),"\n",(0,n.jsx)(t.li,{children:"4DEVAL, to evaluate any 4D expression,"}),"\n",(0,n.jsx)(t.li,{children:"4DSCRIPT, to execute a 4D method,"}),"\n",(0,n.jsx)(t.li,{children:"4DINCLUDE, to include a page within another one,"}),"\n",(0,n.jsx)(t.li,{children:"4DBASE, to modify the default folder used by the 4DINCLUDE tag,"}),"\n",(0,n.jsx)(t.li,{children:"4DCODE, to insert 4D code,"}),"\n",(0,n.jsx)(t.li,{children:"4DIF, 4DELSE, 4DELSEIF and 4DENDIF, to insert conditions in the HTML code,"}),"\n",(0,n.jsx)(t.li,{children:"4DLOOP and 4DENDLOOP, to make loops in the HTML code,"}),"\n",(0,n.jsx)(t.li,{children:"4DEACH and 4DENDEACH, to loop in collections, entity selections, or object properties."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These tags are described in the ",(0,n.jsx)(t.a,{href:"/docs/19/Tags/tags",children:"Transformation Tags"})," page."]}),"\n",(0,n.jsx)(t.p,{children:"It is possible to mix tags. For example, the following HTML code is allowed:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n \n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tag-parsing",children:"Tag parsing"}),"\n",(0,n.jsx)(t.p,{children:"For optimization reasons, the parsing of the HTML source code is not carried out by the 4D Web server when HTML pages are called using simple URLs that are suffixed with \u201c.HTML\u201d or \u201c.HTM\u201d."}),"\n",(0,n.jsxs)(t.p,{children:["Parsing of the contents of template pages sent by 4D web server takes place when ",(0,n.jsx)(t.code,{children:"WEB SEND FILE"})," (.htm, .html, .shtm, .shtml), ",(0,n.jsx)(t.code,{children:"WEB SEND BLOB"})," (text/html type BLOB) or ",(0,n.jsx)(t.code,{children:"WEB SEND TEXT"}),' commands are called, as well as when sending pages called using URLs. In this last case, for reasons of optimization, pages that are suffixed with \u201c.htm\u201d and \u201c.html\u201d are NOT parsed. In order to "force" the parsing of HTML pages in this case, you must add the suffix \u201c.shtm\u201d or \u201c.shtml\u201d (for example, ',(0,n.jsx)(t.code,{children:"http://www.server.com/dir/page.shtm"}),"). An example of the use of this type of page is given in the description of the ",(0,n.jsx)(t.code,{children:"WEB GET STATISTICS"})," command. XML pages (.xml, .xsl) are also supported and always parsed by 4D."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also carry out parsing outside of the Web context when you use the ",(0,n.jsx)(t.code,{children:"PROCESS 4D TAGS"})," command."]}),"\n",(0,n.jsxs)(t.p,{children:["Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example ",(0,n.jsx)(t.code,{children:"4DHTML"}),"), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Action / Command"}),(0,n.jsx)(t.th,{children:"Content analysis of the sent pages"}),(0,n.jsx)(t.th,{children:"Support of $ syntax(*)"}),(0,n.jsx)(t.th,{children:"Character set used for parsing tags"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pages called via URLs"}),(0,n.jsx)(t.td,{children:"X, except for pages with \u201c.htm\u201d or \u201c.html\u201d extensions"}),(0,n.jsx)(t.td,{children:"X, except for pages with \u201c.htm\u201d or \u201c.html\u201d extensions"}),(0,n.jsx)(t.td,{children:'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"WEB SEND FILE"})}),(0,n.jsx)(t.td,{children:"X"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"WEB SEND TEXT"})}),(0,n.jsx)(t.td,{children:"X"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"No conversion necessary"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"WEB SEND BLOB"})}),(0,n.jsx)(t.td,{children:"X, if BLOB is of the \u201ctext/html\u201d type"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:'Use of charset set in the "Content-Type" header of the response. Otherwise, use of default character set for the HTTP server'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Inclusion by the ",(0,n.jsx)(t.code,{children:"\x3c!--#4DINCLUDE--\x3e"})," tag"]}),(0,n.jsx)(t.td,{children:"X"}),(0,n.jsx)(t.td,{children:"X"}),(0,n.jsx)(t.td,{children:'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"PROCESS 4D TAGS"})}),(0,n.jsx)(t.td,{children:"X"}),(0,n.jsx)(t.td,{children:"X"}),(0,n.jsx)(t.td,{children:"Text data: no conversion. BLOB data: automatic conversion from the Mac-Roman character set for compatibility"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags."}),"\n",(0,n.jsx)(t.h2,{id:"accessing-4d-methods-via-the-web",children:"Accessing 4D methods via the Web"}),"\n",(0,n.jsxs)(t.p,{children:["Executing a 4D method with ",(0,n.jsx)(t.code,{children:"4DEACH"}),", ",(0,n.jsx)(t.code,{children:"4DELSEIF"}),", ",(0,n.jsx)(t.code,{children:"4DEVAL"}),", ",(0,n.jsx)(t.code,{children:"4DHTML"}),", ",(0,n.jsx)(t.code,{children:"4DIF"}),", ",(0,n.jsx)(t.code,{children:"4DLOOP"}),", ",(0,n.jsx)(t.code,{children:"4DSCRIPT"}),", or ",(0,n.jsx)(t.code,{children:"4DTEXT"})," from a web request is subject to the ",(0,n.jsx)(t.a,{href:"/docs/19/WebServer/allowProject",children:"Available through 4D tags and URLs (4DACTION...)"})," attribute value defined in the properties of the method. If the attribute is not checked for the method, it can not be called from a web request."]}),"\n",(0,n.jsx)(t.h2,{id:"prevention-of-malicious-code-insertion",children:"Prevention of malicious code insertion"}),"\n",(0,n.jsx)(t.p,{children:"4D tags accept different types of data as parameters: text, variables, methods, command names, etc. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. However, your database code often works with data that was, at one time or another, introduced through an external source (user input, import, etc.)."}),"\n",(0,n.jsxs)(t.p,{children:["In this case, it is advisable to ",(0,n.jsx)(t.strong,{children:"not use"})," tags such as ",(0,n.jsx)(t.code,{children:"4DEVAL"})," or ",(0,n.jsx)(t.code,{children:"4DSCRIPT"}),", which evaluate parameters, directly with this sort of data."]}),"\n",(0,n.jsxs)(t.p,{children:["In addition, according to the ",(0,n.jsx)(t.a,{href:"/docs/19/Tags/tags#recursive-processing",children:"principle of recursion"}),", malicious code may itself include transformation tags. In this case, it is imperative to use the ",(0,n.jsx)(t.code,{children:"4DTEXT"}),' tag. Imagine, for example, a Web form field named "Name", where users must enter their name. This name is then displayed using a ',(0,n.jsx)(t.code,{children:"\x3c!--#4DHTML vName--\x3e"}),' tag in the page. If text of the "\x3c!--#4DEVAL QUIT 4D--\x3e" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the ',(0,n.jsx)(t.code,{children:"4DTEXT"}),' tag systematically in this case. Since this tag escapes the special HTML characters, any malicious recursive code that may have been inserted will not be reinterpreted. To refer to the previous example, the "Name" field will contain, in this case, "',(0,n.jsx)(t.code,{children:"&lt;!--#4DEVAL QUIT 4D--&gt;"}),'" which will not be transformed.']})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(296540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);