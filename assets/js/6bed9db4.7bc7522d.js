"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6601],{189319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(474848),s=n(28453);const a={id:"wp-set-attributes",title:"WP SET ATTRIBUTES",slug:"/WritePro/commands/wp-set-attributes",displayed_sidebar:"docs"},i=void 0,c={id:"WritePro/commands-legacy/wp-set-attributes",title:"WP SET ATTRIBUTES",description:"WP SET ATTRIBUTES ( targetObj ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-set-attributes.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-set-attributes",permalink:"/docs/WritePro/commands/wp-set-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-set-attributes",title:"WP SET ATTRIBUTES",slug:"/WritePro/commands/wp-set-attributes",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Selection range",permalink:"/docs/WritePro/commands/wp-selection-range"},next:{title:"WP SET DATA CONTEXT",permalink:"/docs/WritePro/commands/wp-set-data-context"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," ( ",(0,r.jsx)(t.em,{children:"targetObj"})," ; ",(0,r.jsx)(t.em,{children:"attribName"})," ; ",(0,r.jsx)(t.em,{children:"attribValue"})," {; ",(0,r.jsx)(t.em,{children:"attribName2"})," ; ",(0,r.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"attribNameN"})," ; ",(0,r.jsx)(t.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Range or element or 4D Write Pro document"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of attribute to set"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribValue"}),(0,r.jsx)(t.td,{children:"Text, Number, Object, Collection, Picture, Date"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"New attribute value"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," command allows you to set the value of any attribute in a range, element or document. This command gives you access to any kind of 4D Write Pro internal attribute: character, paragraph, document, table, or image."]}),"\n",(0,r.jsx)(t.p,{children:"In the first parameter, you can pass :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"a range, or"}),"\n",(0,r.jsx)(t.li,{children:"an element (header / footer / body / table / row / paragraph / anchored or inline picture / section / subsection / style sheet), or"}),"\n",(0,r.jsx)(t.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"attribName"}),", pass the name of the attribute to set for the target and in ",(0,r.jsx)(t.em,{children:"attribValue"}),", pass the new value to set. For a comprehensive list of attributes to pass in ",(0,r.jsx)(t.em,{children:"attribName"}),", as well as their scope and respective values, please refer to the ",(0,r.jsx)(t.em,{children:"4D Write Pro Attributes"})," section."]}),"\n",(0,r.jsxs)(t.p,{children:["You can pass as many ",(0,r.jsx)(t.em,{children:"attribName"})," / ",(0,r.jsx)(t.em,{children:"attribValue"})," pairs as you want."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If you need to set multiple attributes for the same target, it is more optimized to use a single call to ",(0,r.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," with all attribute/value pairs, rather than calling ",(0,r.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," several times."]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"In this 4D Write Pro area, you selected a word:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(198444).A+"",width:"497",height:"286"})}),"\n",(0,r.jsx)(t.p,{children:"If you execute the following code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' $range:=WP Get selection(*;"WParea") //get the selected range\n \n  // set the shadow offset in pt for the selected text\n WP SET ATTRIBUTES($range;wk text shadow offset;1)\n  //set the paragraph padding\n WP SET ATTRIBUTES($range;wk padding;1)\n  //define a border of 10 pt\n WP SET ATTRIBUTES($range;wk border style;wk solid;wk border width;10)\n  //set the border colors\n WP SET ATTRIBUTES($range;wk border color;"blue";wk border color bottom;"#00FA9A";wk border color right;"#00FA9A")\n'})}),"\n",(0,r.jsx)(t.p,{children:"You get the following result:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(118506).A+"",width:"497",height:"416"})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"This example illustrates the use of wk inside and wk outside constants:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' $wpRange:=WP Get selection(writeProdoc)\n WP SET ATTRIBUTES($wpRange;wk border style+wk inside;wk dotted)\n WP SET ATTRIBUTES($wpRange;wk border style+wk outside;wk solid)\n WP SET ATTRIBUTES($wpRange;wk border color+wk outside;"#00FA9A")\n'})}),"\n",(0,r.jsx)(t.p,{children:"Assuming all of the contents were selected, the result is:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(365743).A+"",width:"519",height:"282"})}),"\n",(0,r.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.p,{children:"You want to set a background image for the document:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' var WParea : Object\n WParea:=WP New\n \n READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n \n WP SET ATTRIBUTES(WParea;wk background image;$picture)\n'})}),"\n",(0,r.jsx)(t.p,{children:"The result is:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(809772).A+"",width:"929",height:"1209"})}),"\n",(0,r.jsx)(t.p,{children:"You want to set a background image that covers the whole printable area:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' var WParea : Object\n WParea:=WP New\n \n READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n \n WP SET ATTRIBUTES(WParea;wk background image;$picture)\n WP SET ATTRIBUTES(WParea;wk background clip;wk paper box)\n WP SET ATTRIBUTES(WParea;wk background origin;wk paper box)\n'})}),"\n",(0,r.jsx)(t.p,{children:"The result is:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(438134).A+"",width:"930",height:"1208"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": The paper box value is only applicable to documents and sections."]}),"\n",(0,r.jsx)(t.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(t.p,{children:"You want to set tabs at varying intervals and designate a character as the leading character for the last tab:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' $tab1:=New object()\n $tab1[wk type]:=wk left\n $tab1[wk offset]:="3cm"\n $tab1[wk leading]:=""\n \n $tab2:=New object()\n $tab2[wk type]:=wk center\n $tab2[wk offset]:="8cm"\n $tab2[wk leading]:=""\n \n $tab3:=New object()\n $tab3[wk type]:=wk right\n $tab3[wk offset]:="12cm"\n $tab3[wk leading]:="."\n \n $_tabs:=New collection($tab1;$tab2;$tab3)\n WP SET ATTRIBUTES(wpArea;wk tabs;$_tabs)\n'})}),"\n",(0,r.jsx)(t.p,{children:"The result is:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(476832).A+"",width:"903",height:"280"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"4D Write Pro Attributes"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},198444:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pict2643639.en-bc19ba21b2a04a6458119054fbb3c295.png"},118506:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pict2643642.en-0233353f6bad20669469ae6fdbefc392.png"},365743:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pict2821715.en-7c7e1af2be6980c3402bb508c021fb75.png"},809772:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pict3514231.en-46d2c539799f5d0e85d2c69910adf85f.png"},438134:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pict3514233.en-e2399b1a60b8eff205d2192ae0493b08.png"},476832:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/pict4251559.en-0b3a188b2a5dbc3152eccb4ef3f4aee6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);