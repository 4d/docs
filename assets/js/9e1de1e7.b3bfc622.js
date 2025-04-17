"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96043"],{269246:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/st-set-text","title":"ST SET TEXT","description":"ST SET TEXT ( { ;} object ; newText {; startSel {; endSel*}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/st-set-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-text","permalink":"/docs/20-R8/commands/st-set-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-set-text","title":"ST SET TEXT","slug":"/commands/st-set-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET PLAIN TEXT","permalink":"/docs/20-R8/commands/st-set-plain-text"},"next":{"title":"Subrecords","permalink":"/docs/20-R8/commands/theme/Subrecords"}}'),i=n("785893"),r=n("250065");let d={id:"st-set-text",title:"ST SET TEXT",slug:"/commands/st-set-text",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"ST SET TEXT"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"newText"})," {; ",(0,i.jsx)(t.em,{children:"startSel"})," {; ",(0,i.jsx)(t.em,{children:"endSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,i.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(t.br,{}),"Text field or variable (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"newText"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Text to insert"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"startSel"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Start of selection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"endSel"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"End of selection"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ST SET TEXT command inserts the text passed in the ",(0,i.jsx)(t.em,{children:"newText"})," parameter into the styled text field or variable designated by the ",(0,i.jsx)(t.em,{children:"object"})," parameter. This command only applies to the plain text of the object parameter, without modifying any style tags that it contains. It can be used to modify, by programming, styled text displayed on screen."]}),"\n",(0,i.jsx)(t.h3,{id:""}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). During execution, when the object has the focus, the command only applies to the object being edited and not to its data source (field or variable). The changes are only transferred to the source (and to any other objects using this same source) when the object being edited is validated either by losing the focus or with the ",(0,i.jsx)(t.strong,{children:"Enter"})," key. When the object does not have the focus, the command applies directly to the data source and the changes are immediately transferred to any other objects using the same source.",(0,i.jsx)(t.br,{}),"\nIf you omit the ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable and you pass a field or variable reference instead of a string. The command applies directly to the field or variable and changes are immediately transferred to all the objects using this source, including the object with the focus."]}),"\n",(0,i.jsx)(t.h3,{id:"-1"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.em,{children:"newText"}),", pass the text to be inserted. The ST SET TEXT command is intended for working with rich text (multistyle) containing ",(0,i.jsxs)(t.span,{children:[" type tags. In all other cases (more particularly, when working with plain text that contains the <, > or & characters), you must use the ",(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),' command. If you pass plain text containing the <, > or & characters to the ST SET TEXT command, it does nothing. This is necessary behavior because if you insert a string such as "a<b" directly into rich text, it will distort the internal analysis of the ',(0,i.jsxs)(t.span,{children:[' tags. In this case, "<" characters must be encoded beforehand as "<", which can be done using the ',(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," command (see also the example of this command)."]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The optional ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," parameters let you designate a selection of text in ",(0,i.jsx)(t.em,{children:"object"}),". The ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," values give a selection of plain text, without taking any style tags found in the text into account. The action of the command varies according to the optional ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you omit ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"}),", ST SET TEXT replaces all the text of the ",(0,i.jsx)(t.em,{children:"object"})," by ",(0,i.jsx)(t.em,{children:"newText"}),","]}),"\n",(0,i.jsxs)(t.li,{children:["If you only pass ",(0,i.jsx)(t.em,{children:"startSel"})," or if the values of ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," are equal, ST SET TEXT inserts the ",(0,i.jsx)(t.em,{children:"newText"})," text into object beginning at ",(0,i.jsx)(t.em,{children:"startSel"}),","]}),"\n",(0,i.jsxs)(t.li,{children:["If you pass both ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"}),", ST SET TEXT replaces the plain text set by these limits with the ",(0,i.jsx)(t.em,{children:"newText"})," text."]}),"\n",(0,i.jsxs)(t.li,{children:["You can pass 0 in ",(0,i.jsx)(t.em,{children:"endSel"})," to designate automatically the last character of the text (pass 1 in ",(0,i.jsx)(t.em,{children:"startSel"})," to designate the first character of the text)."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["4D provides predefined constants so that you can designate the selection limits automatically in the ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"}),' parameters. These constants are found in the "',(0,i.jsx)(t.em,{children:"Multistyle Text"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST End highlight"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"-1001"}),(0,i.jsx)(t.td,{children:"Designates last character of current text selection in object (*)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST End text"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Designates last character of text contained in object"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST Start highlight"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"-1000"}),(0,i.jsx)(t.td,{children:"Designates first character of current text selection in object (*)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ST Start text"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Designates first character of text contained in object"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["(*) You must pass an object name in ",(0,i.jsx)(t.em,{children:"object"})," to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If ",(0,i.jsx)(t.em,{children:"startSel"})," is greater than ",(0,i.jsx)(t.em,{children:"endSel"})," (except if ",(0,i.jsx)(t.em,{children:"endSel"})," value is 0, see above), the text is not modified and the OK variable is set to 0."]}),"\n",(0,i.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(t.p,{children:"After this command is executed, the OK variable is set to 1 if no error occurred; otherwise, it is set to 0. This is the case more particularly when style tags are not evaluated properly (incorrect or missing tags)."}),"\n",(0,i.jsx)(t.p,{children:"In the case of an error, the variable is not changed. When an error occurs on a variable when text is being evaluated, 4D transforms the text into plain text; as a result, the <, > and & characters are converted into HTML entities."}),"\n",(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(t.p,{children:"You want to replace the styled text selected by the user with the contents of a variable."}),"\n",(0,i.jsx)(t.p,{children:"Here is the selected text:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(924048).Z+"",width:"460",height:"51"})}),"\n",(0,i.jsx)(t.p,{children:"The following contents are stored in the field:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(297592).Z+"",width:"403",height:"55"})}),"\n",(0,i.jsx)(t.p,{children:"After executing this code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0vtempo:="Demonstration"\n\xa0GET HIGHLIGHT([Products]Notes;vStart;vEnd)\n\xa0ST SET TEXT([Products]Notes;vtemp;vStart;vEnd)\n'})}),"\n",(0,i.jsx)(t.p,{children:"The field and its contents are as follows:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(122345).Z+"",width:"453",height:"45"})," ",(0,i.jsx)(t.img,{src:n(607962).Z+"",width:"403",height:"76"})]}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(t.p,{children:["Refer to the example of the ",(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," command."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/st-get-plain-text",children:"ST Get plain text"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/st-get-text",children:"ST Get text"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1115"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Modifies variables"}),(0,i.jsx)(t.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},924048:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAAzCAIAAACVCq+pAAAFVElEQVR42u2dva4VNxCAz4lSI4pIqdKnTslrpOAN0vAOEU8Q0VDlYYCCUCClhpoKdCMhXiA5wmJj+Wc8a3vs9d7vE0J7vGN77J2d4+Ofude7j+8uAABgw3ezFQAAODM4WQAAQ3CyAACGfD9bgR28fPFqtgoAACG/Pv7tn0/vc3dXcrI3Xr95O1sFAID/efr0d1lgMSd7449nf85WAfrzy5O/BtTy9/NHsxsKZ+PL5w+yAHOyAACG4GRDrl/Zm2W21kOVGVDFbci5yqizwmDk0kZqcijT3aVzY0eNVDjtZH/48efbvyBFKEW+a8HVo0tp28W/X9FnqatIUMCox2ZxvhZ14ZqisUBnutM73E6B6U2rY7052cs3e8p9rKAxezvTFaBpg9m6pd16cyVPb9pCJZuSdbJ3H9/dxqd30aFbf9Dq7roU97+f4sv4iZvMXacTva7rnbFu33W+EQeScaKfN1lC8HR9ybjMXEoyl1+FIJBsSK7Jgc5J/ZN3t2uhrlxRSTWCjDkZR25+wE9362OB5C1xS9kW0GIZoT83MxDsREgXnlEdSjMO5P1cxdchp16dPcRVX3ZarFD7JW9+xf6vfkc6sm8kG3hG9zFwx0mZji5VoPhU5EeVsw9ZMlf1JXLTRSsRBHLVWRiKpq7iLc3T8e86nxi7SD/dTdRuMnHidh2X5mcM+vzy7cd7cB1/iebS/Yu4wJb+F8w4aEVsuhqb7GIPyaJGWuysGpVIC1/OORpV3OJznUnFM1kdu88fV2qKnfVDJlevrH9wV9lSYTjcoioE9OqounKq7aGLVnWWWVdjr/KLFEaydYPQ2DVv/rrvFIFD7qOJk+WLztMrm+b3eTy+68sqOw0uZg+9V7F9F2wd1k9/dUwWvpKetPtUrJJZDz74kTJFBzvi37D6eYMKxhxV6NUzhy222iaLtZs+/dUp75NtnDTI5W0ps9pn7TWspY1G1t+/W9dSu91Cwrj1aENaoQfstuVZf2fL9jCydut3cMw7vm8kGzjcbUzqzwYkZYKtBV26xv/oLuLEpGQue50OxRmfulzJlY1GnRu7NydZ3Dagwa1WbQtW/m4B/2CCckgb5NJnjFuXs5/tMQUL6+1dkdMkUKO9nF61J5s80mJn1ajkOvjHewsvX7x6/eZtLnaBxTfS0iPZtfQndgFMof0d+fL5w4OHPwlRuDhWm2UhD3VK/QGsGfOOLHniK0n3zlrdQ62lP2NMGM+Yd4SRLACAIUs62fE7ojTHKCeqBwCHZUknO5KRHnNXXb5wi5LKvHGYqPbAUQD3AZxsgSVmNi0OHQJAFxZe+NobqSjOIgccSh5iyYXzSVa6S584BFdSk2S8LjnSVS6UlN9wzXbXIAqJL6/pWID7yapOtiJS0UUXgkiWSTplOWxgrrTk8f/4oGqyrtxJFU236LtU/zhwqQA5Vp0u6PImdwnDM9KnKI+QT2/IsPhGAMdn1ZFskuI6jGahRpapXpuKKR6xPeCyUk7nA6oKcBBO5WSLUdOLIYhkmb1BjFpiFy0UxGshVQHGs+p0QRHl2z4s1NYRvE8XHdyfeNCI6aeDAU7MqiPZithamhBEskzybq7SithF/o/xorbKSMlxmKgu/b+3YwHuLUs62eLGgF0Z46CC8UffD+oLrPjrHcndBTn5oKKcvEYNfV0VVehlAM7Hkk4WdjElyCb7CgAcONnzM8XZ4WEBHKdd+AIAOAI4WQAAQ3CyAACG4GQBAAzByQIAGIKTBQAwBCcLAGAIThYAwBCcLACAIThZAABDcLIAAIbgZAEADMHJAgAYgpMFADAEJwsAYAhOFgDAkP8AlFw+Xl9vXMoAAAAASUVORK5CYII="},297592:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},122345:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcUAAAAtCAIAAABQw+eIAAAFiElEQVR42u2cTW7VMBDHE8QRkLgC92HBDTgG6gkQew4DLBALLlDWrIqKhLhAeWogNePx5G97HMfp/6eqei+xPR+2J/548Xx7cz0RQgip5klvBQgh5CQ87a0AxMcPn3qrQAghkpevXv/88W39OkY8vfD5y9feKhBCyANXV2/ElWHi6YW37973VoEQQv7y+9d3cYXrp4QQ4gPj6QPzPblZemu9qzKHspdkUdC87dL21GSUhifj6bPnLy5/4oqR377bgjnApbT1w909eJYyQYYCjTzWC9CiOaK34g9aVeY6jjmVfnCsoLWjdfdMCwVGWj+d/lVG6msBldnr6a7AQUxbEy899hxuOYEVYb34mtPdOS0UUOLp7c31ZdR5G/3OPxyKLneXK8v/8EqYJry4prl1eolg8chS0+vTJmwBse/ExTCvWoJwepgyLjN1Rc0VijASqIakTBY6q/qrd9fPhqxUUaoaImMqjVqnYUhV9YnTG7UsMtrphQiRRfgBz1Wgklr7WfZOwKwIqREDsNOJ9GGuzc6bUq+s9caip8z+ZYOOT0UQXL6KyKumcYyeBrFz1ZFs6hmbcq6dMiV6iiKyITpVrFr+9H/TcR87ILI2byG1g+szBU08zBtfXD/HT7tU34vTi9mo+jRNlZPKJQxBVIpdUWBv6qlveLW4tRidTlgRdzSkB+XqM2lNVC3Kt3/p+1FLHCxwMUJNeF0HL2Idx3HoHo4WkWJ7TVtScm39xV3QUmOQW6PqofwG3hUBfQeVDouX2mXlFLfeplolx6dlQ8s4Cq+h2XeOv2C7suOCd/e19qamhT43BmWOEptatD6ks6wYvYob6e9VbFk5yORyatlWnfej1KDpvmwK0uuxry6xnYZ4WodP/Isl7mDUlDP5NRZGR+HIlVXcg5DV+allW7V+f1o560/lrSmzuO3m1srQW8y2/uHdMkub/tjFGEEcfEh1ZAwbxbrqPkJdsFtvl2pFx6citq4jzXA6r6YRm/suHgy/xr4LIwVysViHzRXMslzqEn6lzpXuTaUs2wNVUeWGM3FchMi1mVG1wl4EiEXYuXJVyiJVuFBGbG17VVzKkzUllz2wN6WrJvv2LxlPRdQLv6YCop0GuZLrNceLZdsLqVx2aZsXjVCLWIGbYAi1ZcWf7ZibW36u7chnxNKCqkEqq0alensrlclSFe9HIiVYDtg18NZi6wxKj+H7pgpDT/ZPoD8hg3KGeOoeO0YPRqPrT8ignCGeEkLIEThhPBXvtBWXUJ+mhV3g9cewZ03I0ThVPD1rENnTrixZ4v3L1kLjLXV1k52QXpwqnp513XAIu2qUHMJAQjYZLJ6mBkTgHD9+93/NqI591M9qgYYIO4sqxUhjaKsKzdIn9IahiZo4vphyi6qkXRcr4a8F5+gki03HEtKUwc4/rWF2PUhGzThvna8zYQfn2GnUc4nULJv6zNrL+OpP9mJZqbdTELfgLsXrtzgjIV4MNj4tOx5ps0xEFp6xxiJfE1qA/2C7ryFezYMQnEc0Pt0HZM2hspDiLaOYzbdgDzhTvgMOJyWkC4ynzthDoRk4OMdOg5SA67MmQGbue7syh4FUJSdmsPn+5HE8UpmsAsCOvdtxVkcINC46hOc628nwpVtC6nlE41P3g5pSJ/oYIpCDc+w06t2U0IITd8LZ9Ka24AG98eFGlZ7PdRoh+zBkPEVOPAJ3kIoPasLPgkISIIf3ZB29A573k3uukuHArOOC1ELKTqLKOiGMG1OkKUPG093g1rAXvjMDXCirj+wJ46kFe6MXXTzJ6iM7M95+FCGEHBPGU0II8YHxlBBCfGA8JYQQHxhPCSHEB8ZTQgjxgfGUEEJ8YDwlhBAfGE8JIcQHxlNCCPGB8ZQQQnxgPCWEEB/+ABRKNc20zKNlAAAAAElFTkSuQmCC"},607962:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);