"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48260"],{4595:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-position","title":"WP Get position","description":"WP Get position ( targetObj {; layout} ) : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-get-position.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-position","permalink":"/docs/20-R8/WritePro/commands/wp-get-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-position","title":"WP Get position","slug":"/WritePro/commands/wp-get-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get page count","permalink":"/docs/20-R8/WritePro/commands/wp-get-page-count"},"next":{"title":"WP Get section","permalink":"/docs/20-R8/WritePro/commands/wp-get-section"}}'),i=t("785893"),s=t("250065");let a={id:"wp-get-position",title:"WP Get position",slug:"/WritePro/commands/wp-get-position",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Get position"})," ( ",(0,i.jsx)(n.em,{children:"targetObj"})," {; ",(0,i.jsx)(n.em,{children:"layout"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"targetObj"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"layout"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D Write Pro document layout used for evaluation: 0 (default)=4D Write Pro layout, 1=HTML WYSIWYG"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Position information"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WP Get position"})," command returns an object describing the current position of ",(0,i.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"targetObj"})," parameter, you can pass:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a range, or"}),"\n",(0,i.jsx)(n.li,{children:"an element (table / row / paragraph / body / header / footer / picture / section / subsection / text box), or"}),"\n",(0,i.jsx)(n.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The command returns the position information in an object with the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Property name"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"section"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Number of the first section which intersects ",(0,i.jsx)(n.em,{children:"targetObj"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"page"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Number of the first page which intersects ",(0,i.jsx)(n.em,{children:"targetObj"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"column"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Index of the first column which intersects ",(0,i.jsx)(n.em,{children:"targetObj"})," (1-based)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"line"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Index of the first line which intersects ",(0,i.jsx)(n.em,{children:"targetObj"})," (relative to the column - or page if none column - 1-based)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"position"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Position in the line of the first character of ",(0,i.jsx)(n.em,{children:"targetObj"})," (1-based)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bounds"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsxs)(n.td,{children:["Coordinates of the bounding rectangle of the ",(0,i.jsx)(n.em,{children:"targetObj"}),", expressed in current document unit and relatively to the top left corner of the ",(0,i.jsx)(n.em,{children:"page"}),". Padding and border sizes (if any) are taken into account; margins and rulers are not taken into account."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"top"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Top coordinate of the rectangle"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"left"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Left coordinate of the rectangle"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bottom"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Bottom coordinate of the rectangle"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"right"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Right coordinate of the rectangle"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rangeHeight"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["Height of the bounding rectangle of the ",(0,i.jsx)(n.em,{children:"targetObj"}),". This value can be different from ",(0,i.jsx)(n.em,{children:"bounds.bottom-bounds.top"})," if the ",(0,i.jsx)(n.em,{children:"targetObj"})," extends over several columns (see example 4)"]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"targetObj"})," is an empty range, ",(0,i.jsx)(n.strong,{children:"WP Get position"})," returns the position information at range start. Note that in case of an empty range of the default type (text), the range height (",(0,i.jsx)(n.em,{children:"rangeHeight"})," or ",(0,i.jsx)(n.em,{children:"bounds.bottom"}),"-",(0,i.jsx)(n.em,{children:"bounds.top"}),") is the cursor height and the range width (",(0,i.jsx)(n.em,{children:"bounds.right"}),"-",(0,i.jsx)(n.em,{children:"bounds.left"}),") is 1 pixel.",(0,i.jsx)(n.br,{}),"\nIf ",(0,i.jsx)(n.em,{children:"targetObj"})," is text in a header or footer, ",(0,i.jsx)(n.strong,{children:"WP Get position"})," returns the position information where the header and footer is displayed in the first section/page.",(0,i.jsx)(n.br,{}),"\nIf ",(0,i.jsx)(n.em,{children:"targetObj"})," is an anchored image (that can be replicated on several pages), ",(0,i.jsx)(n.strong,{children:"WP Get position"})," returns the position information where the image is anchored in the first section/page.",(0,i.jsx)(n.br,{}),"\nIf ",(0,i.jsx)(n.em,{children:"targetObj"})," is a subsection, ",(0,i.jsx)(n.strong,{children:"WP Get position"})," returns the position information of the first page of the parent section."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"layout"})," parameter can be used to set the HTML wysiwyg view for the ",(0,i.jsx)(n.em,{children:"targetObj"}),' evaluation. You can pass one of the following constants from the "4D Write Pro" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk 4D Write Pro layout"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Standard 4D Write Pro layout, which can include some specific style attributes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk html wysiwyg"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"In this layout, any 4D Write Pro advanced attributes which are not compliant with all browsers are removed (e.g. columns, double underlines...)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"layout"})," is omitted, the 4D Write Pro layout is used by default."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes about performance"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The same viewing settings as for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-print",children:"WP PRINT"})," command are used with ",(0,i.jsx)(n.strong,{children:"WP Get position"}),":\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"headers: visible"}),"\n",(0,i.jsx)(n.li,{children:"footers: visible"}),"\n",(0,i.jsx)(n.li,{children:"expressions: computed and displayed"}),"\n",(0,i.jsxs)(n.li,{children:["page mode: page or draft (HTML wysiwyg view as defined by the command)",(0,i.jsx)(n.br,{}),"\nIf ",(0,i.jsx)(n.em,{children:"targetObj"}),' is displayed in a 4D Write Pro form area, make sure that viewing settings of the area match the command viewing settings to get consistent information. Note also that if these settings are different in the area, 4D Write Pro will have to "clone" the document to calculate the layout at each call of the command, which can be time consuming. For performance reasons, it is recommended in this case to build the document offline and to copy it to the form object area only when the build is complete.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["This command should not be called within events that are frequently generated (such as On After Edit) since ",(0,i.jsx)(n.em,{children:"result.rangeHeight"})," for example could require time consuming rendering calculations that have to be done at each event call."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"You want to know the page number of a range:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $range;$rangePosition : Object\n\xa0$range:=WP Text range(WParea)\xa0//range from user selection\n\xa0$rangePosition:=WP Get position($range;wk 4D Write Pro layout)\n\xa0ALERT("First page number in selection is "+String($rangePosition.page))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"You want to set to blue color the text in the first and last pages of the document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $nbPages : Integer\n\xa0var $body : Object\n\xa0var $_paragraphs : Collection\n\xa0\n\xa0$nbPages:=WP Get page count([DOC]Sample)\n\xa0$body:=WP Get body([DOC]Sample)\n\xa0$_paragraphs:=WP Get elements($body;wk type paragraph)\n\xa0For each($paragraph;$_paragraphs)\n\xa0\xa0\xa0\xa0$info:=WP Get position($paragraph)\n\xa0\xa0\xa0\xa0If($info.page=1)|($info.page=$nbPages)\xa0//first and last page paragraphs in blue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($paragraph;wk text color;"blue")\n\xa0\xa0\xa0\xa0Else\xa0//other pages paragraphs in black\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($paragraph;wk text color;"black")\n\xa0\xa0\xa0\xa0End if\n\xa0End for each\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.p,{children:"While building a document, you want to avoid paragraph splits:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var WParea;$body : Object\n\xa0var $_paragraphs : Collection\n\xa0WParea:=WP New\n\xa0\n\xa0$body:=WP Get body([DOC]Sample)\n\xa0$_paragraphs:=WP Get elements($body;wk type paragraph)\n\xa0\n\xa0For each($paragraph;$_paragraphs)\n\xa0\xa0\xa0\xa0$insert:=WP New($paragraph)\n\xa0\n\xa0\xa0//memorize current range and page number\n\xa0\xa0\xa0\xa0$rangeBefore:=WP Text range(WParea;wk end text;wk end text)\n\xa0\xa0\xa0\xa0$info:=WP Get position($rangeBefore)\n\xa0\xa0\xa0\xa0$memoPage:=$info.page\n\xa0\n\xa0\xa0//insert the contents, keep the range untouched\n\xa0\xa0\xa0\xa0WP INSERT DOCUMENT($rangeBefore;$insert;wk append;wk exclude from range)\n\xa0\n\xa0\xa0//check the position after insertion\n\xa0\xa0\xa0\xa0$rangeAfter:=WP Text range(WParea;wk end text;wk end text)\n\xa0\xa0\xa0\xa0$info:=WP Get position($rangeAfter)\n\xa0\n\xa0\xa0\xa0\xa0If($memoPage#$info.page)\xa0// if the page has changed, insert a page break\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT BREAK($rangeBefore;wk page break;wk replace)\n\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End for each\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsxs)(n.p,{children:["The following examples illustrate the returned bounding rectangle coordinates, depending on the ",(0,i.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$default:=WP Text range(WPArea)\xa0//default (text) range\n\xa0$textCoordinates:=WP Get position($default)\xa0//red dotted line\n\xa0\n\xa0$paragraph:=WP Create paragraph range($default)\xa0//paragraph range\n\xa0$paraCoordinates:=WP Get position($paragraph)\xa0// green dotted line\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(934752).Z+"",width:"800",height:"421"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Red dotted line:"})," ",(0,i.jsx)(n.em,{children:"$textCoordinates object values"}),"\n",(0,i.jsx)(n.em,{children:"Green dotted line: $"})," ",(0,i.jsx)(n.em,{children:"paraCoordinates object values"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," In case of a display on several columns, the ",(0,i.jsx)(n.em,{children:"rangeHeight"})," property (plain lines) could be larger than ",(0,i.jsx)(n.em,{children:"bounds.bottom"}),"-",(0,i.jsx)(n.em,{children:"bounds.top"})," (dotted lines):"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(70997).Z+"",width:"567",height:"427"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-print",children:"WP PRINT"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},934752:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4096405.en-06494b17daf4c188448c7a627e5e83c7.png"},70997:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4096411.en-392fb0a306ecaaf16fc2ed9654286496.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(667294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);