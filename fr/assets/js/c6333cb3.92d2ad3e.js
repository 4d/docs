"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39032"],{901829:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"WritePro/commands/wp-add-picture","title":"WP Add picture","description":"WP Add picture ( wpDoc {; picture} ) ObjectWP Add picture ( wpDoc {; pictureFileObj} ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands/wp-add-picture.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-add-picture","permalink":"/docs/fr/WritePro/commands/wp-add-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-add-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-add-picture","title":"WP Add picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"4D Write Pro Commands","permalink":"/docs/fr/WritePro/commands/command-index"},"next":{"title":"WP Bookmark range","permalink":"/docs/fr/WritePro/commands/wp-bookmark-range"}}'),r=t("785893"),c=t("250065");let s={id:"wp-add-picture",title:"WP Add picture",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Add picture"})," ( ",(0,r.jsx)(n.em,{children:"wpDoc"})," {; ",(0,r.jsx)(n.em,{children:"picture"}),"} ) : Object",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"WP Add picture"})," ( ",(0,r.jsx)(n.em,{children:"wpDoc"})," {; ",(0,r.jsx)(n.em,{children:"picturePath"}),"} ) : Object",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"WP Add picture"})," ( ",(0,r.jsx)(n.em,{children:"wpDoc"})," {; ",(0,r.jsx)(n.em,{children:"pictureFileObj"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wpDoc"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picturePath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Picture path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pictureFileObj"}),(0,r.jsx)(n.td,{children:"4D.File"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D.File object representing a picture file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Object referencing the picture"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WP Add picture"})," command anchors the picture passed as parameter at a fixed location within the specified ",(0,r.jsx)(n.em,{children:"wpDoc"})," and returns its reference. The returned reference can then be passed to the ",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," command to move the picture to any location in ",(0,r.jsx)(n.em,{children:"wpDoc"})," (page, section, header, footer, etc.) with a defined layer, size, etc."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"wpDoc"}),", pass the name of a 4D Write Pro document object."]}),"\n",(0,r.jsx)(n.p,{children:"For the optional second parameter, you can pass either:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In ",(0,r.jsx)(n.em,{children:"picture"}),":  A 4D picture"]}),"\n",(0,r.jsxs)(n.li,{children:["In ",(0,r.jsx)(n.em,{children:"picturePath"}),":  A string containing a path to a picture file stored on disk (system syntax). You can pass a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you need to indicate the file extension."]}),"\n",(0,r.jsxs)(n.li,{children:["In ",(0,r.jsx)(n.em,{children:"PictureFileObj"}),": a ",(0,r.jsx)(n.code,{children:"4D.File"})," object representing a picture file."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Any picture format ",(0,r.jsx)(n.a,{href:"/docs/fr/FormEditor/pictures#native-formats-supported",children:"supported by 4D"})," can be used. You can get the list of available picture formats using the ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),' command. If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.']})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"picture"})," is omitted, a valid picture reference is returned, and an empty image is added. This allows you to then call ",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," with the wk image expression selector to fill the image with a 4D expression. If the expression can not be evaluated or does not return a valid picture, an empty image (default black frame image) is displayed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, the added picture is:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Embedded behind the text"}),"\n",(0,r.jsx)(n.li,{children:"Displayed at the top left corner of the paper box"}),"\n",(0,r.jsx)(n.li,{children:"Shown on all pages"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The location, layer (inline, in front/behind text), visibility, and any properties of picture can be modified using the ",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," command, or via standard actions (see ",(0,r.jsx)(n.em,{children:"Using 4D Write Pro standard actions"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-selection-range",children:"WP Selection range"})," command returns a ",(0,r.jsx)(n.em,{children:"picture reference"})," object if an anchored picture is selected and a ",(0,r.jsx)(n.em,{children:"range object"})," if an inline picture is selected. You can determine if a selected object is a picture object by checking the ",(0,r.jsx)(n.code,{children:"wk type"})," attribute:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value = 2"}),": The selected object is a picture object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value = 0"}),": The selected object is a range object."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to add a picture with default settings using a filepath."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $obPict : Object\n $obPict:=WP Add picture(myDoc;"/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result is:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(238006).Z+"",width:"913",height:"379"})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to add a resized picture, centered and anchored to the header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $obImage : Object\n var $myPictureFile : 4D.File\n\n $myPictureFile:=File("/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")\n $obImage:=WP Add picture(myDoc;$myPictureFile)\n WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)\n WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)\n WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)\n WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result is:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(254244).Z+"",width:"920",height:"381"})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"You want to use a field expression to add an anchored image to a document displaying some text from the database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' QUERY([Flowers];[Flowers]Common_Name="tulip")\n WP SET TEXT(myDoc;[Flowers]Description;wk append) //insert text\n var $obImage : Object\n $obImage:=WP Add picture(myDoc)\n WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(313257).Z+"",width:"683",height:"249"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-delete-picture",children:"WP DELETE PICTURE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-picture-range",children:"WP Picture range"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},238006:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict3617325.en-271cc136ed83c0878d079d3ac862783c.png"},254244:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict3617351.en-0a827201644b2395e4d18eae13c2e2f8.png"},313257:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pict3841719.en-31adce57bbdfc0d229b675581d891804.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(667294);let r={},c=i.createContext(r);function s(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);