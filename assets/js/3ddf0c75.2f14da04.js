"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97648"],{927920:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/drop-position","title":"Drop position","description":"Drop position {( columnNumber | pictPosY )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/drop-position.md","sourceDirName":"commands-legacy","slug":"/commands/drop-position","permalink":"/docs/commands/drop-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrop-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"drop-position","title":"Drop position","slug":"/commands/drop-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Drag and Drop","permalink":"/docs/category/drag-and-drop"},"next":{"title":"SET DRAG ICON","permalink":"/docs/commands/set-drag-icon"}}'),r=t("785893"),i=t("250065");let s={id:"drop-position",title:"Drop position",slug:"/commands/drop-position",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Drop position"})," {( columnNumber | pictPosY )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnNumber | pictPosY"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"List box column number (-1 if the drop occurs beyond the last column) or Position of Y coordinate in picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u2022 Number (list box) or \u2022 Position (hierarchical list) or \u2022 Position in string (text/combo box/4D Write Pro area) of destination item or \u2022 -1 if drop occurred beyond the last list item \u2022 Position of X coordinate in picture"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The Drop position command can be used to find out the location, in a \u201Ccomplex\u201D destination object, where an object has been (dragged and) dropped."}),"\n",(0,r.jsx)(n.p,{children:"Typically, you will use Drop position when handling a drag and drop event that occurred over a list box, a hierarchical list, a text or picture field, or a 4D Write Pro area."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the destination object is a list box, the command returns a row number. In this case, the command also returns the column number where the drop took place in the optional ",(0,r.jsx)(n.em,{children:"columnNumber"})," parameter."]}),"\n",(0,r.jsx)(n.li,{children:"If the destination object is a hierarchical list, the command returns an item position."}),"\n",(0,r.jsxs)(n.li,{children:["If the destination object is a text type variable or field, or a combo box, the command returns a character position within the string.",(0,r.jsx)(n.br,{}),"\nIn all the above cases, the command may return -1 if the source object has been dropped beyond the last element or the last item of the destination object."]}),"\n",(0,r.jsxs)(n.li,{children:["If the destination object is a picture type variable or field, the command returns the horizontal location of the click and, in the optional ",(0,r.jsx)(n.em,{children:"pictPosY"})," parameter, the vertical location of the click. The values returned are expressed in pixels and in relation to the local coordinate system."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you call Drop position when handling an event that is not a drag-and-drop event and that occurred over a list box, a combo box, a hierarchical list, a text, a picture, or a 4D Write Pro area, the command returns -1."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," A form object accepts dropped data if its ",(0,r.jsx)(n.strong,{children:"Droppable"})," property has been selected. Also, its object method must be activated for On Drag Over and/or On Drop, in order to process these events."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"In the following example, a list of amounts paid must be broken down per month and per person. This is carried out by drag and drop between two list boxes:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(323876).Z+"",width:"751",height:"280"})}),"\n",(0,r.jsx)(n.p,{children:"The right (source) list box object method contains the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Begin Drag Over)\xa0//event must be selected for the list box\n\xa0\xa0\xa0\xa0var $tomove : Blob\n\xa0\xa0\xa0\xa0var $val : Text\n\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LBPaid";$col;$row)\n\xa0\xa0\xa0\xa0$val:=PaidCol{$row}\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB($val;$tomove)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("mydrag";$tomove)\xa0//use a custom key\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"The left (destination) list box object method contains the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Drag Over)\xa0//event must be selected for the list box\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $toGet : Blob\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $rownum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$rownum:=Drop position($colnum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("mydrag";$toGet)\xa0//get data\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Pasteboard data size("mydrag")>0)&($colnum#1))\xa0//If data are in the pasteboard\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=0\xa0//we would accept the drop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=-1\xa0//The drop is refused\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Drop)\xa0//event must be selected for the list box\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $toGet : Blob\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $rownum;$val : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$rownum:=Drop position($colnum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("mydrag";$toGet)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($toGet;$val)\xa0//get the value\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Pasteboard data size("mydrag")>0))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($colnum=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\xa0//Adding of dropped values\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0John{$rownum}:=John{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Mark{$rownum}:=Mark{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Peter{$rownum}:=Peter{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(PaidCol;Find in array(PaidCol;$val))\xa0//Update source listbox\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Drag and Drop"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"608"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},323876:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/pict4091260.en-1dd251c85d0af3d5a601963d1fc874f0.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var o=t(667294);let r={},i=o.createContext(r);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);