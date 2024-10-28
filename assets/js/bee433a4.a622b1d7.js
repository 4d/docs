"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52094],{305209:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=s(474848),n=s(28453);const t={id:"wp-get-view-properties",title:"WP Get view properties",slug:"/WritePro/commands/wp-get-view-properties",displayed_sidebar:"docs"},l=void 0,d={id:"WritePro/commands-legacy/wp-get-view-properties",title:"WP Get view properties",description:"WP Get view properties (  ; wpArea* ) -> Function result",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-get-view-properties.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-get-view-properties",permalink:"/docs/WritePro/commands/wp-get-view-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-view-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-get-view-properties",title:"WP Get view properties",slug:"/WritePro/commands/wp-get-view-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Get text",permalink:"/docs/WritePro/commands/wp-get-text"},next:{title:"WP Import document",permalink:"/docs/WritePro/commands/wp-import-document"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const r={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"WP Get view properties"})," ( * ; ",(0,i.jsx)(r.em,{children:"wpArea"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"*"}),(0,i.jsx)(r.td,{children:"Operator"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable (document)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wpArea"}),(0,i.jsx)(r.td,{children:"String, Object"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Function result"}),(0,i.jsx)(r.td,{children:"Object"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Current view properties"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.strong,{children:"WP Get view properties"})," command returns the current view properties for the 4D Write Pro area designated by ",(0,i.jsx)(r.em,{children:"wpArea"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If you pass the optional ",(0,i.jsx)(r.em,{children:"*"})," parameter, you indicate that ",(0,i.jsx)(r.em,{children:"wpArea"})," is a form object name (string). If you do not pass this parameter, you indicate that ",(0,i.jsx)(r.em,{children:"wpArea"})," is a 4D Write Pro document (object variable or field). This command can only be used if the ",(0,i.jsx)(r.em,{children:"wpArea"})," is associated with a form object (",(0,i.jsx)(r.em,{children:"i.e."})," it is displayed in the form), on any form page. If the 4D Write Pro document is displayed in several form objects, it is necessary to use the ",(0,i.jsx)(r.em,{children:"*"})," parameter to define which view to address."]}),"\n",(0,i.jsx)(r.p,{children:"The view properties of the 4D Write Pro area can be defined:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"at the form level in the Property List,"}),"\n",(0,i.jsxs)(r.li,{children:["dynamically during the session using the ",(0,i.jsx)(r.a,{href:"/docs/WritePro/commands/wp-set-view-properties",children:"WP SET VIEW PROPERTIES"})," command."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Returned object"})}),"\n",(0,i.jsx)(r.p,{children:"The returned object contains all view properties of the 4D Write Pro area, along with their current value:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Constant"}),(0,i.jsx)(r.th,{children:"Value"}),(0,i.jsx)(r.th,{children:"Comment"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk display formula as symbol"}),(0,i.jsx)(r.td,{children:"displayFormulaAsSymbol"}),(0,i.jsxs)(r.td,{children:["Displays formula references as a ",(0,i.jsx)(r.img,{src:s(52426).A+"",width:"14",height:"19"})," symbol. Works only if formulas are displayed as references (see wk visible references). Possible values: True/False"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk formula highlight"}),(0,i.jsx)(r.td,{children:"formulaHighlight"}),(0,i.jsx)(r.td,{children:"Formula highlight view mode. Possible values: wk references (default): Formulas displayed as references are highlighted wk values: Formulas displayed as values are highlighted wk always: Formulas are always highlighted, whatever their display mode wk never: Formulas are never highlighted, whatever their display mode Highlighted formula color can be set by wk formula highlight color."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk formula highlight color"}),(0,i.jsx)(r.td,{children:"formulaHighlightColor"}),(0,i.jsx)(r.td,{children:'Color of highlighted formulas (see wk formula highlight). Possible values: a CSS color string ("#010101" or "#FFFFFF" or "red"). a 4D color longint value'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk page view mode"}),(0,i.jsx)(r.td,{children:"pageMode"}),(0,i.jsx)(r.td,{children:'Mode for displaying the 4D Write Pro document in the form area onscreen. Possible values (string): "draft": draft mode with basic document properties "page": most complete view mode, which includes page outlines, orientation, margins, breaks, headers and footers, etc. "embedded": view mode suitable for embedded areas'})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk resolution"}),(0,i.jsx)(r.td,{children:"dpi"}),(0,i.jsx)(r.td,{children:"Screen resolution for the contents of the 4D Write Pro area. Possible values: wk auto (0) Number greater than 1"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk spell enable"}),(0,i.jsx)(r.td,{children:"spellEnabled"}),(0,i.jsx)(r.td,{children:"Enables the auto spellcheck. Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible background"}),(0,i.jsx)(r.td,{children:"visibleBackground"}),(0,i.jsx)(r.td,{children:"Displays both background images and background color (visible effect in Page or Embedded view mode only). Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible empty images"}),(0,i.jsx)(r.td,{children:"visibleEmptyImages"}),(0,i.jsx)(r.td,{children:"Displays or exports a default black rectangle for images that cannot be loaded or computed (empty images or images in an unsupported format). Possible values: True/False. Default value: True If value is False, missing image elements will not be displayed at all even if they have borders, width, height, or background; this may impact the page layout for inline images."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible footers"}),(0,i.jsx)(r.td,{children:"visibleFooters"}),(0,i.jsx)(r.td,{children:"Displays or exports the footers (for display, visible effect in Page view mode only). Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible headers"}),(0,i.jsx)(r.td,{children:"visibleHeaders"}),(0,i.jsx)(r.td,{children:"Displays or exports the headers (for display, visible effect in Page view mode only). Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible hidden characters"}),(0,i.jsx)(r.td,{children:"visibleHiddenChars"}),(0,i.jsx)(r.td,{children:"Displays invisible characters. Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible horizontal ruler"}),(0,i.jsx)(r.td,{children:"visibleHorizontalRuler"}),(0,i.jsx)(r.td,{children:"Displays the horizontal ruler. Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible HTML WYSIWYG"}),(0,i.jsx)(r.td,{children:"htmlWYSIWIGEnabled"}),(0,i.jsx)(r.td,{children:"Enables the HTML WYSIWYG view by removing proprietary 4D Write Pro HTML/CSS tags. Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible page frames"}),(0,i.jsx)(r.td,{children:"visiblePageFrames"}),(0,i.jsx)(r.td,{children:"Displays the page frames (visible effect in Page view mode only). Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible references"}),(0,i.jsx)(r.td,{children:"visibleReferences"}),(0,i.jsx)(r.td,{children:"Displays or exports all 4D expressions inserted in the document as references. Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk visible vertical ruler"}),(0,i.jsx)(r.td,{children:"visibleVerticalRuler"}),(0,i.jsx)(r.td,{children:"Displays the vertical ruler (visible effect in Page view mode only). Possible values: True/False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"wk zoom"}),(0,i.jsx)(r.td,{children:"zoom"}),(0,i.jsx)(r.td,{children:"Zoom percentage for displaying the contents of the 4D Write Pro area. Possible values: Number greater than 1"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.p,{children:"In the 4D Write Pro area, you want to display the rulers only in page mode:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0var $viewProps : Object\n\xa0$viewProps:=WP Get view properties(*;"4DWPArea")\n\xa0If($viewProps.pageMode="page")\n\xa0\xa0\xa0\xa0$viewProps.visibleHorizontalRuler:=True\n\xa0\xa0\xa0\xa0$viewProps.visibleVerticalRuler:=True\n\xa0Else\n\xa0\xa0\xa0\xa0$viewProps.visibleHorizontalRuler:=False\n\xa0End if\n\xa0WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)\n'})}),"\n",(0,i.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/WritePro/commands/wp-set-view-properties",children:"WP SET VIEW PROPERTIES"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},52426:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAIAAAAvYqvDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGTSURBVDhPY3z27BkDcYAJShMBSFCK5oDfX57dvnL79U92USVNZVl+dqgwGCBM/XBlWaGjkWVC76YjR47snVXmaKIbPOnkm99QabjSD0frXRLOui08c3nX3MZEW3EG0ejlZ/YU/651jF95D6Ya6IBn52Z4SCWsuAZiPnt2cYaH39xrDx8+BHGurU6V0qzdC2aDTL21deKvqjw7AZDOnx+fP3vJy/jr008Qj0HAuqTLoH/O4c9ANlDpgzObeLyMJMBSDA8OL9n76Nza2ZuufIAI8Nr6h+w6fwfIgrhVW0YaTDMwqPtkBSrZJFQnWohCRViZWd9++gZkAJUyM7NdfPAYIo4FfP72XllCCMgAKpU1D2RZuPM6IlRQwIvdC/f7mKkAWSAHKPhWOi6uWw0PFAT4fW9ZbgVba7wxK4gHCoZnzx4e6XcQ1slaevQWOFxA4P6JpbnGwjrFm6GB+AwRsb/fXFzdWtCw/o2IrAAzw9eXL/ltcxqbM+2kwCYCAUYi/P3l7ftvf5m5BIV5YGqgYIDTKwMDAJVMvdE9VEl9AAAAAElFTkSuQmCC"},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var i=s(296540);const n={},t=i.createContext(n);function l(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);