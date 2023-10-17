"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21505],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"templates",title:"Template pages"},s=void 0,l={unversionedId:"WebServer/templates",id:"version-20-R2/WebServer/templates",title:"Template pages",description:"4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of transformation tags such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (``) into the HTML source code.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/WebServer/templates.md",sourceDirName:"WebServer",slug:"/WebServer/templates",permalink:"/docs/pt/20-R2/WebServer/templates",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"templates",title:"Template pages"},sidebar:"docs",previous:{title:"Desenvolvimento Web",permalink:"/docs/pt/20-R2/WebServer/gettingStarted"},next:{title:"Processamento de pedidos HTTP",permalink:"/docs/pt/20-R2/WebServer/httpRequests"}},p={},d=[{value:"Etiquetas para modelos",id:"etiquetas-para-modelos",level:2},{value:"An\xe1lise de etiquetas",id:"an\xe1lise-de-etiquetas",level:2},{value:"Aceder aos m\xe9todos 4D atrav\xe9s da Web",id:"aceder-aos-m\xe9todos-4d-atrav\xe9s-da-web",level:2},{value:"Preven\xe7\xe3o da inser\xe7\xe3o de c\xf3digo malicioso",id:"preven\xe7\xe3o-da-inser\xe7\xe3o-de-c\xf3digo-malicioso",level:2}],c={toc:d};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/Tags/tags"}),"transformation tags")," such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (",(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--#4DTagName TagValue--\x3e"),") into the HTML source code."),(0,n.kt)("p",null,"When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D processing."),(0,n.kt)("p",null,"Por exemplo, se escrever numa p\xe1gina HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<P>Welcome to \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n")),(0,n.kt)("p",null,"The value of the 4D variable ",(0,n.kt)("em",{parentName:"p"},"vtSiteName")," will be inserted in the HTML page."),(0,n.kt)("h2",r({},{id:"etiquetas-para-modelos"}),"Etiquetas para modelos"),(0,n.kt)("p",null,"Est\xe3o dispon\xedveis as seguintes etiquetas 4D:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4DTEXT, para inserir vari\xe1veis e express\xf5es 4D como texto,"),(0,n.kt)("li",{parentName:"ul"},"4DHTML, para inserir c\xf3digo HTML,"),(0,n.kt)("li",{parentName:"ul"},"4DEVAL, para avaliar qualquer express\xe3o 4D,"),(0,n.kt)("li",{parentName:"ul"},"4DSCRIPT, para executar um m\xe9todo 4D,"),(0,n.kt)("li",{parentName:"ul"},"4DINCLUDE, para incluir uma p\xe1gina dentro de outra,"),(0,n.kt)("li",{parentName:"ul"},"4DBASE, para modificar a pasta predefinida utilizada pela etiqueta 4DINCLUDE,"),(0,n.kt)("li",{parentName:"ul"},"4DCODE, to insert 4D code,"),(0,n.kt)("li",{parentName:"ul"},"4DIF, 4DELSE, 4DELSEIF and 4DENDIF, to insert conditions in the HTML code,"),(0,n.kt)("li",{parentName:"ul"},"4DLOOP e 4DENDLOOP, para criar loops no c\xf3digo HTML,"),(0,n.kt)("li",{parentName:"ul"},"4DEACH and 4DENDEACH, to loop in collections, entity selections, or object properties.")),(0,n.kt)("p",null,"These tags are described in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/Tags/tags"}),"Transformation Tags")," page."),(0,n.kt)("p",null,"\xc9 poss\xedvel combinar etiquetas. Por exemplo, \xe9 permitido o seguinte c\xf3digo HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n\n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n")),(0,n.kt)("h2",r({},{id:"an\xe1lise-de-etiquetas"}),"An\xe1lise de etiquetas"),(0,n.kt)("p",null,"For optimization reasons, the parsing of the HTML source code is not carried out by the 4D Web server when HTML pages are called using simple URLs that are suffixed with \u201c.HTML\u201d or \u201c.HTM\u201d."),(0,n.kt)("p",null,"Parsing of the contents of template pages sent by 4D web server takes place when ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," (.htm, .html, .shtm, .shtml), ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND BLOB")," (text/html type BLOB) or ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND TEXT"),' commands are called, as well as when sending pages called using URLs. In this last case, for reasons of optimization, pages that are suffixed with \u201c.htm\u201d and \u201c.html\u201d are NOT parsed. In order to "force" the parsing of HTML pages in this case, you must add the suffix \u201c.shtm\u201d or \u201c.shtml\u201d (for example, ',(0,n.kt)("inlineCode",{parentName:"p"},"http://www.server.com/dir/page.shtm"),"). An example of the use of this type of page is given in the description of the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET STATISTICS")," command. XML pages (.xml, .xsl) are also supported and always parsed by 4D."),(0,n.kt)("p",null,"You can also carry out parsing outside of the Web context when you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PROCESS 4D TAGS")," command."),(0,n.kt)("p",null,"Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),"), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"A\xe7\xe3o / Comando"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"An\xe1lise de conte\xfado das p\xe1ginas enviadas"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Suporte da sintaxe $(*)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Conjunto de caracteres utilizado para a an\xe1lise de etiquetas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"P\xe1ginas chamadas atrav\xe9s de URLs"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'X, exceto para p\xe1ginas com extens\xf5es ".htm" ou ".html'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'X, exceto para p\xe1ginas com extens\xf5es ".htm" ou ".html'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xe3o \xe9 necess\xe1ria qualquer convers\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'X, se o BLOB for do tipo "text/html'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Utiliza\xe7\xe3o do conjunto de caracteres definido no cabe\xe7alho "Content-Type" da resposta. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inclus\xe3o pela etiqueta ",(0,n.kt)("inlineCode",{parentName:"td"},"\x3c!--#4DINCLUDE--\x3e")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"PROCESS 4D TAGS")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text data: no conversion. BLOB data: automatic conversion from the Mac-Roman character set for compatibility")))),(0,n.kt)("p",null,"(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags."),(0,n.kt)("h2",r({},{id:"aceder-aos-m\xe9todos-4d-atrav\xe9s-da-web"}),"Aceder aos m\xe9todos 4D atrav\xe9s da Web"),(0,n.kt)("p",null,"Executing a 4D method with ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEACH"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DELSEIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DLOOP"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT")," from a web request is subject to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/WebServer/allowProject"}),"Available through 4D tags and URLs (4DACTION...)")," attribute value defined in the properties of the method. If the attribute is not checked for the method, it can not be called from a web request."),(0,n.kt)("h2",r({},{id:"preven\xe7\xe3o-da-inser\xe7\xe3o-de-c\xf3digo-malicioso"}),"Preven\xe7\xe3o da inser\xe7\xe3o de c\xf3digo malicioso"),(0,n.kt)("p",null,"4D tags accept different types of data as parameters: text, variables, methods, command names, etc. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. However, your database code often works with data that was, at one time or another, introduced through an external source (user input, import, etc.)."),(0,n.kt)("p",null,"In this case, it is advisable to ",(0,n.kt)("strong",{parentName:"p"},"not use")," tags such as ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", which evaluate parameters, directly with this sort of data."),(0,n.kt)("p",null,"In addition, according to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/Tags/tags#recursive-processing"}),"principle of recursion"),", malicious code may itself include transformation tags. In this case, it is imperative to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),' tag. Imagine, for example, a Web form field named "Name", where users must enter their name. This name is then displayed using a ',(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--#4DHTML vName--\x3e"),' tag in the page. Se o texto do "\\','" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the ',(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),' tag systematically in this case. Since this tag escapes the special HTML characters, any malicious recursive code that may have been inserted will not be reinterpreted. To refer to the previous example, the "Name" field will contain, in this case, "',(0,n.kt)("inlineCode",{parentName:"p"},"&lt;!--#4DEVAL QUIT 4D--&gt;"),'" which will not be transformed.'))}m.isMDXComponent=!0}}]);