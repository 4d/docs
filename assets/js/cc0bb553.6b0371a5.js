"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[144],{816183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(474848),i=t(28453);const s={id:"wp-insert-picture",title:"WP INSERT PICTURE",slug:"/WritePro/commands/wp-insert-picture",displayed_sidebar:"docs"},d=void 0,c={id:"WritePro/commands-legacy/wp-insert-picture",title:"WP INSERT PICTURE",description:"WP INSERT PICTURE ( targetObj ; picture ; mode {; rangeUpdate} )",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-insert-picture.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-insert-picture",permalink:"/docs/WritePro/commands/wp-insert-picture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-insert-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-insert-picture",title:"WP INSERT PICTURE",slug:"/WritePro/commands/wp-insert-picture",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP INSERT FORMULA",permalink:"/docs/WritePro/commands/wp-insert-formula"},next:{title:"WP Insert table",permalink:"/docs/WritePro/commands/wp-insert-table"}},l={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP INSERT PICTURE"})," ( ",(0,r.jsx)(n.em,{children:"targetObj"})," ; ",(0,r.jsx)(n.em,{children:"picture"})," ; ",(0,r.jsx)(n.em,{children:"mode"})," {; ",(0,r.jsx)(n.em,{children:"rangeUpdate"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Picture field or variable, or path to picture file on disk"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mode"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Insertion mode"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeUpdate"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Range update mode"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WP INSERT PICTURE"})," command inserts the ",(0,r.jsx)(n.em,{children:"picture"})," in the ",(0,r.jsx)(n.em,{children:"targetObj"})," according to the specified insertion ",(0,r.jsx)(n.em,{children:"mode"})," and ",(0,r.jsx)(n.em,{children:"rangeUpdate"})," parameter. The picture will be inserted as a character in the ",(0,r.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"targetObj"}),", pass:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a range, or"}),"\n",(0,r.jsx)(n.li,{children:"an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,r.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"picture"}),", you can pass:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a picture field or variable, or"}),"\n",(0,r.jsxs)(n.li,{children:["a file path (string) to a picture file stored on disk, in the system syntax.",(0,r.jsx)(n.br,{}),"\nIf you use a string, you can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you must indicate the file extension."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Any picture format supported by 4D can be used (see the ",(0,r.jsx)(n.em,{children:"Pictures"})," section). You can get the list of available picture formats using the ",(0,r.jsx)(n.a,{href:"/docs/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," command. If the ",(0,r.jsx)(n.em,{children:"picture"}),' encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.']}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"mode"})," parameter, pass one of the following constants to indicate the insertion mode to be used on the picture in the document:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk append"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Insert contents at end of target"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk prepend"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Insert contents at beginning of target"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk replace"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Replace target contents"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"targetObj"})," is a range, you can use the optional ",(0,r.jsx)(n.em,{children:"rangeUpdate"})," parameter to pass one of the following constants to specify whether or not the inserted picture is included in the resulting range:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk exclude from range"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Inserted contents not included in updated range"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk include in range"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Inserted contents included in updated range (default)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not pass a ",(0,r.jsx)(n.em,{children:"rangeUpdate"})," parameter, by default the inserted picture is included in the resulting range."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"targetObj"})," is not a range, ",(0,r.jsx)(n.em,{children:"rangeUpdate"})," is ignored."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"In the following example, a user selects the picture they want to insert into the range object and will be warned if this picture could not be inserted:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Get selection([EXAMPLES]wpDoc)\n\xa0\n\xa0var $fail : Boolean\n\xa0$fail:=False\n\xa0\n\xa0\xa0//ask user to choose a picture on the disk that they want to insert\n\xa0$imgRef:=Open document("")\n\xa0\xa0//if user does not cancel\n\xa0If(OK=1)\n\xa0\xa0//if the file is a supported picture file\n\xa0\xa0\xa0\xa0If(Is picture file(document))\n\xa0\xa0// insert picture selected by user\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT PICTURE($wpRange;document;wk replace)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$fail:=True\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$fail:=True\n\xa0End if\n\xa0\xa0//if the insertion failed, alert the user\n\xa0If($fail)\n\xa0\xa0\xa0\xa0ALERT("Picture insertion failed")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-document",children:"WP INSERT DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-picture-range",children:"WP Picture range"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(296540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);