"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31259"],{48056:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>h,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/qr-get-header-and-footer","title":"QR GET HEADER AND FOOTER","description":"QR GET HEADER AND FOOTER ( area ; selector ; leftTitle ; centerTitle ; rightTitle ; height {; picture {; pictAlignment}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/qr-get-header-and-footer.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-header-and-footer","permalink":"/docs/20-R8/commands/qr-get-header-and-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-header-and-footer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-header-and-footer","title":"QR GET HEADER AND FOOTER","slug":"/commands/qr-get-header-and-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get drop column","permalink":"/docs/20-R8/commands/qr-get-drop-column"},"next":{"title":"QR Get HTML template","permalink":"/docs/20-R8/commands/qr-get-html-template"}}'),i=t("785893"),s=t("250065");let d={id:"qr-get-header-and-footer",title:"QR GET HEADER AND FOOTER",slug:"/commands/qr-get-header-and-footer",displayed_sidebar:"docs"},l=void 0,h={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR GET HEADER AND FOOTER"})," ( ",(0,i.jsx)(n.em,{children:"area"})," ; ",(0,i.jsx)(n.em,{children:"selector"})," ; ",(0,i.jsx)(n.em,{children:"leftTitle"})," ; ",(0,i.jsx)(n.em,{children:"centerTitle"})," ; ",(0,i.jsx)(n.em,{children:"rightTitle"})," ; ",(0,i.jsx)(n.em,{children:"height"})," {; ",(0,i.jsx)(n.em,{children:"picture"})," {; ",(0,i.jsx)(n.em,{children:"pictAlignment"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"area"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Reference of the area"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"selector"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"1 = Header, 2 = Footer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"leftTitle"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Text displayed on the left side"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"centerTitle"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Text displayed in the middle"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rightTitle"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Text displayed on the right side"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Header or footer height"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"picture"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Picture to display"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pictAlignment"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Alignment attribute for the picture"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The QR GET HEADER AND FOOTER command retrieves the contents and size of the header or footer."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"selector"})," allows you to select the header or the footer:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if ",(0,i.jsx)(n.em,{children:"selector"})," equals 1, the header information will be retrieved;"]}),"\n",(0,i.jsxs)(n.li,{children:["if ",(0,i.jsx)(n.em,{children:"selector"})," equals 2, the footer information will be retrieved."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"leftTitle"}),", ",(0,i.jsx)(n.em,{children:"centerTitle"})," and ",(0,i.jsx)(n.em,{children:"rightTitle"})," returns the values for, respectively, the left, center and right header/footer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"height"})," returns the height of the header/footer, expressed in the unit selected for the report."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"picture"})," returns a picture that is displayed in the header or footer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"pictAlignment"})," is the alignment attribute for the picture displayed in the header/footer."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"pictAlignment"})," returns 1, the picture is aligned to the left."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"pictAlignment"})," returns 2, the picture is centered."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"pictAlignment"})," returns 3, the picture is aligned to the right."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass an invalid ",(0,i.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,i.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,i.jsx)(n.em,{children:"selector"})," value, the error -9852 will be generated."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following code retrieves the values of the header titles as well as the header size and displays them in alerts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0QR GET HEADER AND FOOTER(MyArea;1;$LeftText;$CenterText;$RightText;$height)\n\xa0Case of\n\xa0\xa0\xa0\xa0:($LeftText #"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The left title is "+Char(34)+$LeftText+Char(34))\n\xa0\xa0\xa0\xa0:($CenterText #"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The center title is "+Char(34)+$CenterText+Char(34))\n\xa0\xa0\xa0\xa0:($RightText #"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The right title is "+Char(34)+$RightText+Char(34))\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("No header title in this report.")\n\xa0End case\n\xa0ALERT("The height of the header is "+String($height))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/qr-set-header-and-footer",children:"QR SET HEADER AND FOOTER"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"775"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);