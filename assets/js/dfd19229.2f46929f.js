"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94771"],{781889:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-link","title":"WP SET LINK","description":"WP SET LINK ( targetObj ; linkObj )","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-set-link.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-link","permalink":"/docs/WritePro/commands/wp-set-link","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-link.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-link","title":"WP SET LINK","slug":"/WritePro/commands/wp-set-link","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET FRAME","permalink":"/docs/WritePro/commands/wp-set-frame"},"next":{"title":"WP SET TEXT","permalink":"/docs/WritePro/commands/wp-set-text"}}'),s=t("785893"),i=t("250065");let a={id:"wp-set-link",title:"WP SET LINK",slug:"/WritePro/commands/wp-set-link",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP SET LINK"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ; ",(0,s.jsx)(n.em,{children:"linkObj"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"linkObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Hyperlink value"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP SET LINK"})," applies a hyperlink reference to the ",(0,s.jsx)(n.em,{children:"targetObj"}),". Links to URLs, 4D methods, and bookmarks, are supported. The link triggers an action when the user clicks on it (or uses ",(0,s.jsx)(n.strong,{children:"Ctrl+click"})," on Windows or ",(0,s.jsx)(n.strong,{children:"Cmd+click"})," on macOS if the text is not read-only for opening URLs)."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"targetObj"}),", pass the 4D Write Pro object where the link will be applied. You can pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (table / row / paragraph / body / header / footer / section / subsection), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you pass a header, the entire contents of the header will be displayed as a hyperlink. When inserting links in your documents, 4D Write Pro applies the following rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you set a link to a ",(0,s.jsx)(n.em,{children:"targetObj"})," that contains several paragraphs, several separate links will be defined."]}),"\n",(0,s.jsxs)(n.li,{children:["If you set a link to a ",(0,s.jsx)(n.em,{children:"targetObj"})," that already contains link(s):\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["any existing links that are fully included in the ",(0,s.jsx)(n.em,{children:"targetObj"})," are removed and the new link is applied to the ",(0,s.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["if a link is partially selected (it intersects the ",(0,s.jsx)(n.em,{children:"targetObj"}),"), it is reduced so that the external part keeps the previous link and the new link is applied to the ",(0,s.jsx)(n.em,{children:"targetObj"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"linkObj"})," parameter, pass an object that describes the hyperlink. It must contain only one the following properties (except the parameter property which can be used in conjunction with the method property):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Hyperlink action"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Destination for a URL type hyperlink (encoded url)."}),(0,s.jsxs)(n.td,{children:["References a standard web address (http or https://",(0,s.jsx)(n.em,{children:"website"}),", mailto:",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.a,{href:"mailto:abc@xyz.com",children:"abc@xyz.com"}),","]})," etc.): opens the URL in the default application (usually a browser)References a file path (absolute or relative to the 4D structure file). When referencing a .4wp or .4w7 file (file://",(0,s.jsx)(n.em,{children:"filepath"})," or ",(0,s.jsx)(n.em,{children:"filepath/file.4wp"}),"): loads and replaces the current document. When referencing other file types, opens file in the system default application for the file type."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bookmark"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Bookmark name"}),(0,s.jsxs)(n.td,{children:["Accesses the specified bookmark in the current document. (See ",(0,s.jsx)(n.em,{children:"Bookmark commands"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"method"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Project method name - method must exist and be allowed with the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})," command."]}),(0,s.jsxs)(n.td,{children:["Executes the 4D method when clicked. The method automatically receives two parameters in $1 and $2:",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Description"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of 4D Write Pro area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"method"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of 4D method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"parameter"}),(0,s.jsx)(n.td,{children:"Text | Number"}),(0,s.jsxs)(n.td,{children:["User parameter sent to the method through the ",(0,s.jsx)(n.em,{children:"parameter"})," property (optional, see below)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsxs)(n.td,{children:["Range of the ",(0,s.jsx)(n.em,{children:"targetObj"})]})]})]})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parameter"}),(0,s.jsx)(n.td,{children:"Text | Number"}),(0,s.jsxs)(n.td,{children:["Used only with a ",(0,s.jsx)(n.em,{children:"method"})," type link, not mandatory if the method does not require parameter. Contains an additional parameter to send to the method."]}),(0,s.jsx)(n.td,{children:"Received in $2.parameter within the method"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["4D Write Pro accepts only valid (encoded) URLs. Special characters in links are not translated. If special characters are necessary, you must expressly encode them (",(0,s.jsx)(n.em,{children:"e.g."}),', %20 instead of " " for a space character). If the link is not valid, an error is generated.']}),"\n",(0,s.jsx)(n.li,{children:"Links to 4D methods are removed from 4D Write Pro documents when they are exported in HTML, MIME HTML, or .docx format."}),"\n",(0,s.jsxs)(n.li,{children:["If you want to remove a link from ",(0,s.jsx)(n.em,{children:"targetObj"}),", please refer to the ",(0,s.jsx)(n.em,{children:"Link commands"})," paragraph."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to add a link to your website in the footer area of your document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $footer : Object\n\xa0$footer:=WP Get footer(WPArea;1)\n\xa0WP SET TEXT($footer;"Please visit our website";wk replace)\n\xa0WP SET LINK($footer;New object("url";"http://www.4d.com"))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to create a table of contents with links using all of the bookmarks in your document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $i;$n;$p;$memoStart : Integer\n\xa0var $range;$link;$toc;$tocRange;$positionInfo;$target : Object\n\xa0var $text : Text\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea1;$_bookmarks)\xa0//find all the bookmarks\n\xa0\n\xa0$n:=Size of array($_bookmarks)\n\xa0If($n>0)\n\xa0\xa0\xa0\xa0$tocRange:=WP Text range(WParea1;wk start text;wk start text)\xa0//find the beginning of the text\n\xa0\xa0\xa0\xa0WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range)\xa0//add a page break before the text\n\xa0\n\xa0\xa0\xa0\xa0For($i;1;$n)\xa0// Insert the table of contents and links\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$range:=WP Bookmark range(WParea1;$_bookmarks{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$positionInfo:=WP Get position($range)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$memoStart:=$tocRange.end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$link:=New object("bookmark";$_bookmarks{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET LINK($target;$link)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:'You want to set a link to a 4D method on each "4D" string in the document:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $text,$find : Text\n\xa0var $p : Integer\n\xa0var $range;$link : Object\n\xa0\n\xa0$text:=WP Get text(wpArea;wk expressions as value)\xa0//retrieves all text in document\n\xa0\n\xa0$find:="4D"\xa0//target for link\n\xa0\n\xa0$p:=Position($find;$text)\xa0//loop through text to find all instances of the target\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$range:=WP Text range(wpArea;$p;$p+Length($find))\xa0//set the length of the target\n\xa0\xa0//create the link object\n\xa0\xa0\xa0\xa0$link:=New object("method";"myAlert";"parameter";"4D rocks!")\xa0//Don\'t forget to authorize with SET ALLOWED METHODS \xa0\n\xa0\n\xa0\xa0\xa0\xa0WP SET LINK($range;$link)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://blog.4d.com/links-in-4d-write-pro-documents/",children:"Blog: Links in 4D Write Pro documents"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-links",children:"WP Get links"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);