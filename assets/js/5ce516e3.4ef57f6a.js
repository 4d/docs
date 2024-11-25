"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33172"],{269953:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>c});var i=JSON.parse('{"id":"WritePro/commands-legacy/wp-add-picture","title":"WP Add picture","description":"WP Add picture ( wpDoc {; picture} ) : Object","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-add-picture.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-add-picture","permalink":"/docs/WritePro/commands/wp-add-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-add-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-add-picture","title":"WP Add picture","slug":"/WritePro/commands/wp-add-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"4D Write Pro Commands","permalink":"/docs/WritePro/commands/command-index"},"next":{"title":"WP Bookmark range","permalink":"/docs/WritePro/commands/wp-bookmark-range"}}'),r=t("785893"),s=t("250065");let c={id:"wp-add-picture",title:"WP Add picture",slug:"/WritePro/commands/wp-add-picture",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Add picture"})," ( ",(0,r.jsx)(n.em,{children:"wpDoc"})," {; ",(0,r.jsx)(n.em,{children:"picture"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wpDoc"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:"Picture, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Picture or Picture path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Object referencing the picture"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WP Add picture"})," command anchors ",(0,r.jsx)(n.em,{children:"picture"})," at a fixed location within the ",(0,r.jsx)(n.em,{children:"wpDoc"})," and returns its reference. The returned reference can then be passed to the ",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," command to move ",(0,r.jsx)(n.em,{children:"picture"})," to any location in ",(0,r.jsx)(n.em,{children:"wpDoc"})," (page, section, header, footer, etc.) with a defined layer, size, etc."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"wpDoc"}),", pass the name of a 4D Write Pro document object."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"picture"})," parameter, you can pass:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"either a 4D picture,"}),"\n",(0,r.jsxs)(n.li,{children:["or a string containing a path to a picture file stored on disk, expressed using the system syntax.",(0,r.jsx)(n.br,{}),"\nYou can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you need to indicate the file extension."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": Any picture format supported by 4D can be used (see the ",(0,r.jsx)(n.em,{children:"Pictures"})," section). You can get the list of available picture formats using the ",(0,r.jsx)(n.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),' command. If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.']}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"picture"})," is omitted, you will obtain a valid picture reference and an empty image will be added. This allows you to then call the ",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," command with the wk image expression selector to use a 4D expression to fill the image. If the expression can not be evaluated or does not return a valid 4D picture, an empty image (default black frame image) will be displayed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, the added picture is:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"embedded behind the text,"}),"\n",(0,r.jsx)(n.li,{children:"displayed at the top left corner of the paper box,"}),"\n",(0,r.jsx)(n.li,{children:"displayed on all pages."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The location, layer (inline, in front/behind text), visibility, and any properties of ",(0,r.jsx)(n.em,{children:"picture"})," can be modified using the ",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," command, or via standard actions (see ",(0,r.jsx)(n.em,{children:"Using 4D Write Pro standard actions"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-selection-range",children:"WP Selection range"})," command returns a ",(0,r.jsx)(n.em,{children:"picture reference"})," object if a an anchored picture is selected and a ",(0,r.jsx)(n.em,{children:"range"})," object if an inline picture is selected. You can check if a selected object is a picture object with the wk type attribute. If the value = 2, then it is a picture object, otherwise it is a range object (value = 0)."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to add a picture with default settings using a filepath."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $obPict : Object\n\xa0$obPict:=WP Add picture(myDoc;"C:\\\\Users\\\\John.Doe\\\\Pictures\\\\Sunrise.jpg")\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result is:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(341e3).Z+"",width:"913",height:"379"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to add a resized picture, centered and anchored to the header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $obImage : Object\n\xa0$obImage:=WP Add picture(myDoc;"C:\\\\Users\\\\John.Doe\\\\Pictures\\\\Saved Pictures\\\\Sunrise.jpg")\n\xa0WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)\n\xa0WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)\n\xa0WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)\n\xa0WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result is:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(347165).Z+"",width:"920",height:"381"})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"You want to use a field expression to add an anchored image to a document displaying some text from the database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Flowers];[Flowers]Common_Name="tulip")\n\xa0WP SET TEXT(myDoc;[Flowers]Description;wk append)\xa0//insert text\n\xa0var $obImage : Object\n\xa0$obImage:=WP Add picture(myDoc)\n\xa0WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(574523).Z+"",width:"683",height:"249"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Handling pictures"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-delete-picture",children:"WP DELETE PICTURE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-picture-range",children:"WP Picture range"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},341e3:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict3617325.en-271cc136ed83c0878d079d3ac862783c.png"},347165:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict3617351.en-0a827201644b2395e4d18eae13c2e2f8.png"},574523:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict3841719.en-31adce57bbdfc0d229b675581d891804.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var i=t(667294);let r={},s=i.createContext(r);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);