"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4905"],{333946:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/st-set-plain-text","title":"ST SET PLAIN TEXT","description":"ST SET PLAIN TEXT ( { ;} object ; newText {; startSel {; endSel*}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/st-set-plain-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-plain-text","permalink":"/docs/commands/st-set-plain-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-plain-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-plain-text","title":"ST SET PLAIN TEXT","slug":"/commands/st-set-plain-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET OPTIONS","permalink":"/docs/commands/st-set-options"},"next":{"title":"ST SET TEXT","permalink":"/docs/commands/st-set-text"}}'),i=n("785893"),r=n("250065");let d={id:"st-set-plain-text",title:"ST SET PLAIN TEXT",slug:"/commands/st-set-plain-text",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"ST SET PLAIN TEXT"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"newText"})," {; ",(0,i.jsx)(t.em,{children:"startSel"})," {; ",(0,i.jsx)(t.em,{children:"endSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,i.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(t.br,{}),"Variable or field (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"newText"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Text to insert"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"startSel"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Start of selection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"endSel"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"End of selection"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ST SET PLAIN TEXT command inserts the text passed in the ",(0,i.jsx)(t.em,{children:"newText"})," parameter into the styled text field or variable designated by the ",(0,i.jsx)(t.em,{children:"object"})," parameter. This command only applies to the plain text of the",(0,i.jsx)(t.em,{children:"object"})," parameter, without modifying any style tags that it contains."]}),"\n",(0,i.jsxs)(t.p,{children:["Unlike the ",(0,i.jsx)(t.a,{href:"/docs/commands/st-set-text",children:"ST SET TEXT"})," command, ST SET PLAIN TEXT only inserts plain text. You must not pass text with style tags in ",(0,i.jsx)(t.em,{children:"newText"}),". If it contains the <, > or & characters, they are considered as standard characters and converted into HTML entities:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"'&' is converted to &"}),"\n",(0,i.jsx)(t.li,{children:"'<' is converted to <"}),"\n",(0,i.jsx)(t.li,{children:"'>' is converted to >"}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:""}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). During execution, when the object has the focus, the command only applies to the object being edited and not to its data source (field or variable). The changes are only transferred to the source (and to any other objects using this same source) when the object being edited is validated either by losing the focus or with the ",(0,i.jsx)(t.strong,{children:"Enter"})," key. When the object does not have the focus, the command applies directly to the data source and the changes are immediately transferred to any other objects using the same source.",(0,i.jsx)(t.br,{}),"\nIf you omit the ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable and you pass a field or variable reference instead of a string. The command applies directly to the field or variable and changes are immediately transferred to all the objects using this source, including the object with the focus."]}),"\n",(0,i.jsx)(t.h5,{id:"-1"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.em,{children:"newText"}),", pass the plain text to be inserted."]}),"\n",(0,i.jsxs)(t.p,{children:["The optional ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," parameters let you designate a selection of text in ",(0,i.jsx)(t.em,{children:"object"}),". The ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," values give a selection of plain text, without taking any style tags found in the text into account. The action of the command varies according to the optional ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you omit ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"}),", ST SET PLAIN TEXT replaces all the text of the ",(0,i.jsx)(t.em,{children:"object"})," by ",(0,i.jsx)(t.em,{children:"newText"}),","]}),"\n",(0,i.jsxs)(t.li,{children:["If you only pass ",(0,i.jsx)(t.em,{children:"startSel"})," or if the values of ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," are equal, ST SET PLAIN TEXT inserts the ",(0,i.jsx)(t.em,{children:"newText"})," text into ",(0,i.jsx)(t.em,{children:"object"})," beginning at ",(0,i.jsx)(t.em,{children:"startSel"}),","]}),"\n",(0,i.jsxs)(t.li,{children:["If you pass both ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"}),", ST SET PLAIN TEXT replaces the plain text set by these limits with the ",(0,i.jsx)(t.em,{children:"newText"})," text."]}),"\n",(0,i.jsxs)(t.li,{children:["You can pass 0 in ",(0,i.jsx)(t.em,{children:"endSel"})," to designate automatically the last character of the text (pass 1 in ",(0,i.jsx)(t.em,{children:"startSel"})," to designate the first character of the text)."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["4D provides predefined constants that you can use to automatically designate the limits of the selection in the ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"}),' parameters. These constants are available in the "',(0,i.jsx)(t.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST End highlight"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"-1001"}),(0,i.jsx)(t.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST End text"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Designates last character of text contained in object"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST Start highlight"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"-1000"}),(0,i.jsx)(t.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST Start text"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["(*) You must pass an object name in ",(0,i.jsx)(t.em,{children:"object"})," to be able to use this constant. If you pass a field or variable reference, the command is applied to all the text of the object."]}),"\n",(0,i.jsxs)(t.p,{children:["The style of the first character replaced will be used for all of the ",(0,i.jsx)(t.em,{children:"newText"})," text."]}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.em,{children:"startSel"})," is greater than ",(0,i.jsx)(t.em,{children:"endSel"})," (except when ",(0,i.jsx)(t.em,{children:"endSel"})," value is 0, see above), the text is not modified and the OK variable is set to 0."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Given the following rich text (multi-style) variable:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(231406).Z+"",width:"278",height:"44"})}),"\n",(0,i.jsxs)(t.p,{children:['You want to insert company names that are stored in a text field. These names can contain, for example, the "&" character. In this case, you will need to use the ',(0,i.jsx)(t.a,{href:"/docs/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0ST SET PLAIN TEXT(myStyledText;[Company]Name;33;34)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here is the result:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(593956).Z+"",width:"278",height:"45"})}),"\n",(0,i.jsx)(t.p,{children:"Here is the plain text contained in the variable:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(722906).Z+"",width:"278",height:"69"})}),"\n",(0,i.jsx)(t.p,{children:"You can see that the inserted text was enclosed within an additional pair of style tags. These tags correspond to the style of the characters before they were inserted. This mechanism is a way of guaranteeing the correct display of rich text fields in all cases."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you had used the ",(0,i.jsx)(t.a,{href:"/docs/commands/st-set-text",children:"ST SET TEXT"}),' command in this case, 4D would not have inserted anything because the presence of the non-encoded "&" character would prevent the interpretation of the style tags found in the variable. For more information, refer to the description of this command.']}),"\n",(0,i.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(t.p,{children:"After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags)."}),"\n",(0,i.jsx)(t.p,{children:"In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities."}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/st-get-plain-text",children:"ST Get plain text"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/st-set-text",children:"ST SET TEXT"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1136"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Modifies variables"}),(0,i.jsx)(t.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},231406:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAAsCAIAAAAvuQBnAAAFKklEQVR42u2c4VHcMBCFTSYNQAlcCVACpAMoID+gBPiX/ORK4GaSArgKEiiBK4ErAUpw3twji5BkSbZ8HBzvm4GR16u1LPS8si2z8+PXn0YIMZSv+Pn5/dummyHEh+Tn779fNt0GIT42kpAQVbxIaOc1rn3TjVwjlWdn1cvjhJ4DgoDFYgH/w8NDs6AMC+xr7rOR8cbbh2vJqyzUOryTsxJdHBwcnJycQDDT6RSb+I0yLLBvummfjB+//lAzzWsJ2aZrt1qeZ43RPYp7UM/THDyfdPxsrdAhGyrqUxgnGrZvEOPx8ZH2+/t7FmDxfC4uLnZ3d7Hr6Ojo4eHBM6LgHuLm5gYKxK6rq6vr6+vdFTC6DrDAh7UQEGG5a39///b2NgyFAnZZ29hmWLyzwykglB0uGhlGu0C4p1N4CtGYAEZswsftZPQMN62LokA+PSQUjqd6o3f+6epd5cpaA0JlD1TYD4ODGPaXjv6xuRcjCaOHww5GjC0aAQrYtEOjbLJEXdbicKfx7OyMtVCAEYPVBjeMGKxuKDNaM7CX1d2mWmT3cNHIlKIZTclunMQpRGPiuGwbC4xvXURdsYui+BJy6auB9CjJVu/amz36MN1WXgLG7ZyaS48Nl2gKYqrxjDYQGdBViBnDsmfk+APIHhiplhyi1ZkkKWDmATeBdB06jMzTgYVZJezG7KWzK6bn6RndnOmRykLRv2WXxhLGqFtWQqFniRiG1RoQqjBOtHMGSCjRb+ks1NXVWYUUOvAijRswXtcTnhyU4SyuV2ROI7lp07N0nGGtbQLaDnpLKLG31yCridMWiGFYrfJQA+LUSKir07L3QuvOQuViw8BtVokolHovSQNMxjjpskyYiJONmc1CaSCfge+FEk9mm4KHszWPgEevlXYe5cnkWI83vTjn5+fNaqaOmQmn77QYHGqz2Wy5XNoTcDMC2ywE8efzebO6ljerQYzfCM5QCeh/d3dXeMRoZD61h+Z5spaRConGZMNg4YPNaL8dHx+n4pZnodZJcFH1F3o2Bdf40LOw3LdWE1yfSkJlzz3hUN6B6X5j5nFvqTnFh911s5le+ESON/phq6JlFvgwgHc17f+ZlT0waJIJhOXwviLqH42MHMsRzxOPPpHrG7Nd3Z7ByFMzo/sks+0G8tnBj9bIiSxMgK6e+zKZTHBRh8K36c2V1siJt8De+vOlzaabMzJfN90A8TGoyT81dd8/ykJCVCEJCVGFJCREFe9OQnbruVgsMs/jB9EVVivTxTDe3eMEu/V0v4QZkTWFFZ+W5yy0XC5xbWYGmEwmfIvscnl5ube3xze1cPaMKNDCCPP5HCMVu6bT6Ww221vBt9qFDt5XaNlabAzduhqDQtfHbXYUt2LhCoz0R4pKbtsPVydE14F7b7hHXDOfdYi+YE7Uiq5Ot1rhUvzoOoPosoCoT+ssa+gVQWwZr5aZhuvAjfWtVkw4ZD3dcnR1erYBLoUCaILVOn0jiG3iZZkpZzuYodm3ey5PT0+h0aZz0c03hi20CdVmGyM+Fc8SOj09bVbrL5hbPKJLYj3PaMU3I8yTG2yM+FQ8Syi9an30NfOj0291egXt6h+zSKLiBd4Lda0DN8ZdM1/iwCklF/Nna7Wx1elRTzdsmLW8DBad/jYd6a4rB0Zrie1AHzsMQVlIGPrYoTfSj/CQhPoh/QgPSUiIKiQhIaqQhISoQhISogpJSIgqJCEhqpCEhKhCEhKiCklIiCokISGqkISEqEISEqIKSUiIKv4B4AeEyax3xvoAAAAASUVORK5CYII="},593956:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAAtCAIAAADk5dPCAAAF5klEQVR42u2c21HjShCGxRYJQAg4BDsEOBmYAM6DHQK87T5CCFC1GwBEsCtCsEOAEEwIc/7yX9sMc5dGvojTX9VS43FPz0X61Rq5tSfff/5uFEXpyyn+/fj3n0MPQ1FGyY9ff74degyKMm5UQopSxYeETj5j1x96kDukcnbSvNyPb9nDibBcLs/Pz3nIrq+v397eCsfAvtbr9dXVlVMZ4+XlZTKZwAZ/US7s4uvz/edvswVlYyEfnfovRuXseqySb9l7qS8vL9Hk9fUV5bZtUb64uOg6frv39ADOzs5gsNls8Bflcs9fGMin242cH6PqK+Wr5vP1OBgM7coS/yWturpK16T9DOJEYCjgX8gJRxRyEvvn5+fZbIYYdX9///j4eL4FlbFREcYlsbShhFjPciG3t7cMlSjYM5IRSl8w4FdiibgKG1ZiYIVhdq+URyHbYKhKuybbPFaubNXDVbajwnXo7YQwCoHpdLparZzFvLu7Y8QANzc3VBfDlHTkr89isbAtbVBP5eArhr4E4hnDQOFhC0dlj5B9MaaJ5dPTk1iiL/qhJWZqjgnI55OEbNLHvgnF6CZ5Q5KVULrcz2DAVuVT7ro4vS89OKt4hhEGIpO8cDjKyVraiGIhM/Zu4ogH0QArHQ3bZerTsWQllANdmePDlVBsLeypBjWWqAyaZSXkW5aIoV+rHq4K/QQXp4eEEusGcG6JkKiiXUiI+kFkYF8Ia01yR5TuIlHpTBazk5tGFI5NSJ0llPg2axDz39WPKRBDv1blrnr4qZGQKYC3SYXC6CEhqcEdo5zi6DRoY5f7RSGHtm0R+pqCxxh7pvPjBCHxZLYpeDhb8wh48FZp40GezA71eNfxw0fMfJyAW51mG4UG6ciHnrGbtx8krNfr9/d3+Tifz1nJTT8/8tR/3CIfg4glmvPhAT7yWQKEx51Sp8cYe6I8Chkr1AavPYWWTcE13rcsLHdt1XgX4xJX2bknDMoXMLtu2I3wNOW5xS2K6RKFuHHnHj3WSpC+YI/4g4/o1AlEomF8K5W46zvbgkJ6hLRsrH3dZrOx+80+xtgzkM8J/mmOnKL0Q3PkFKUWlZCiVKESUpQqVEKKUoVKSFGqGJOEjid//nhG0nXA9tsNAxJzO65V6sfpoQeg7AP5+WU2m+3C/47cjoKPKCQZ6XZKeTZNPZZIjzJqZGXhEG75lbyw5We88+d2/uCNvzR2Ruxk4wc9pzPks1MI+gSoxEfnLQA/P1+I+dndmnd6uyHbKjg7/6jFXhnMvsDit8q+7RLs6MAwO4FZgw8PD0wp52/D6TT1dCL9YrFgK/5kPp1O27Y1f1PWmekkrqRShmH+Jn3J79m2Z7u7oOd0hnx2CkGfTD/BqCRFxUTy84WgH/s3+2HXvN/bDYlWwdn5Ry2WzWDK8s39r5p4HknQwwH5SDMNZviVJwgmDpKcN6vVCkeIqVyxw8kURp5M9iuZie6CntMZ8tkpJHw6lsH8fBvfj7C7NU8YlMw9PbvsAJyldgomJABHOaOUUHAJKo+WXeZlbD6f89KVsLTfLnbOyHLP6Qz57BTKR9t42B0F/QSHsYs1N9USCs5OJWSzvyhUfuCZU8gQZN/FdXJCYhny/c7IbBTySYxtp2s+lISCI1QJ2Xy87ODkmfMxQHmaus9yueSWlJLgwYBzukpAe+68S3oMeq7MkA/65MBQg223VAbz89N+Ym3r13xw0rMbEJyL8G9CcW8EyMsO3N022wggO5DyNHUps8DdsKSs885KHhg0BVdEf18RtA96TmfIZ6cQ9Gm22zOm99uVfn6+EPMjDLvmJQYlbzekZxdbsSb0Hxv4xk0kgDj1QWP7vA222j87edmBDxxNxRVlMpngsoeNuOzClS/PSKPQ0b3sID8F4Kqm+vn/MFL9kOGzE2rWYrzrqNQw6uN+XFFIUUaHSkhRqlAJKUoVKiFFqUIlpChVqIQUpQqVkKJUoRJSlCpUQopShUpIUapQCSlKFSohRalCJaQoVaiEFKWK/wCNlzzhCL36aQAAAABJRU5ErkJggg=="},722906:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);