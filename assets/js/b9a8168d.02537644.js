"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5964"],{57118:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/qr-set-header-and-footer","title":"QR SET HEADER AND FOOTER","description":"QR SET HEADER AND FOOTER ( area ; selector ; leftTitle ; centerTitle ; rightTitle ; height {; picture {; pictAlignment}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-set-header-and-footer.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-header-and-footer","permalink":"/docs/commands/qr-set-header-and-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-header-and-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-header-and-footer","title":"QR SET HEADER AND FOOTER","slug":"/commands/qr-set-header-and-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET DOCUMENT PROPERTY","permalink":"/docs/commands/qr-set-document-property"},"next":{"title":"QR SET HTML TEMPLATE","permalink":"/docs/commands/qr-set-html-template"}}'),s=t("785893"),i=t("250065");let d={id:"qr-set-header-and-footer",title:"QR SET HEADER AND FOOTER",slug:"/commands/qr-set-header-and-footer",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR SET HEADER AND FOOTER"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"selector"})," ; ",(0,s.jsx)(n.em,{children:"leftTitle"})," ; ",(0,s.jsx)(n.em,{children:"centerTitle"})," ; ",(0,s.jsx)(n.em,{children:"rightTitle"})," ; ",(0,s.jsx)(n.em,{children:"height"})," {; ",(0,s.jsx)(n.em,{children:"picture"})," {; ",(0,s.jsx)(n.em,{children:"pictAlignment"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"1 = Header, 2 = Footer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"leftTitle"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Text displayed on the left side"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"centerTitle"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Text displayed in the middle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rightTitle"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Text displayed on the right side"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Header or footer height"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"picture"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Picture to display"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pictAlignment"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Alignment attribute for the picture"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The QR SET HEADER AND FOOTER command sets the contents and size of the header or footer."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"selector"})," selects the header or the footer:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"selector"})," is 1, the header is affected;"]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"selector"})," is 2, the footer is affected."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"leftTitle"}),", ",(0,s.jsx)(n.em,{children:"centerTitle"})," and ",(0,s.jsx)(n.em,{children:"rightTitle"})," are the values for, respectively, the left, center and right header/footer."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"height"})," is the height of the header/footer, expressed in the unit selected for the quick report."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"picture"})," is a picture that will be displayed in the header or footer."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"pictAlignment"})," is the alignment attribute for the picture passed in ",(0,s.jsx)(n.em,{children:"picture"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"pictAlignment"})," is 1, the picture is aligned to the left."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"pictAlignment"})," is 2, the picture is centered."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"pictAlignment"})," is 3, the picture is aligned to the right."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an invalid ",(0,s.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,s.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,s.jsx)(n.em,{children:"selector"})," value, the error -9852 will be generated."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following statement places the title \u201CCenter title\u201D in the header for the Quick Report in MyArea and sets the header height to 200 points:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QR SET HEADER AND FOOTER(MyArea;1;"";"Center title";"";200)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/qr-get-header-and-footer",children:"QR GET HEADER AND FOOTER"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"774"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);