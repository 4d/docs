"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96135"],{317694:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var l=JSON.parse('{"id":"ViewPro/commands/vp-export-to-blob","title":"VP EXPORT TO BLOB","description":"VP EXPORT TO BLOB ( vpAreaName Object )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-export-to-blob.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-to-blob","permalink":"/docs/ViewPro/commands/vp-export-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-export-to-blob","title":"VP EXPORT TO BLOB"},"sidebar":"docs","previous":{"title":"VP EXPORT DOCUMENT","permalink":"/docs/ViewPro/commands/vp-export-document"},"next":{"title":"VP Export to object","permalink":"/docs/ViewPro/commands/vp-export-to-object"}}'),s=n("785893"),r=n("250065");let d={id:"vp-export-to-blob",title:"VP EXPORT TO BLOB"},i=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP EXPORT TO BLOB"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(t.em,{children:"paramObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"paramObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Export options"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP EXPORT TO BLOB"})," command exports the ",(0,s.jsx)(t.em,{children:"vpAreaName"})," 4D View Pro document in a 4D.Blob according to the ",(0,s.jsx)(t.em,{children:"paramObj"})," options. The exported blob is available through the export callback. Exporting and importing 4D View Pro areas as blobs is fast and memory-efficient."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"paramObj"}),", you can pass several properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"formula"}),(0,s.jsx)(t.td,{children:"4D.Function"}),(0,s.jsxs)(t.td,{children:["(mandatory) Callback method to be launched when the export has completed. See ",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeAutoMergedCells"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include the automatically merged cells when saving, default=false."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeBindingSource"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include the binding source when saving, default=true."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeCalcModelCache"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include the extra data of calculation. Can impact the speed of opening the file, default=false."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeEmptyRegionCells"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include any empty cells(cells with no data or only style) outside the used data range, default=true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeFormulas"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include the formula when saving, default=true."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeStyles"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include the style when saving, default=true."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"includeUnusedNames"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to include the unused custom name when saving, default=true."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"saveAsView"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to apply the format string to exporting value when saving, default=false."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The following parameters can be used in the callback method:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"param1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the 4D View Pro object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"param2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"4D.blob"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The exported blob"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"param3"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["A reference to the command's ",(0,s.jsx)(t.em,{children:"paramObj"})," parameter"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"param4"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"An object returned by the method with a status message"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:".success"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True if export with success, False otherwise."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:".errorCode"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Error code."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Error message."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["The command ",(0,s.jsx)(t.code,{children:"VP EXPORT TO BLOB"})," is asynchronous. You must create a callback method (named ",(0,s.jsx)(t.em,{children:"VPBlobCallback"})," in our example) to use the export results."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'//Export the VP document\nVP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"//VPBlobCallback method\n#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)\nvar $myEntity : cs.myTableEntity\n\nIf ($status.success)\n   // Save the document in a table\n   $myEntity:=ds.myTable.new()\n   $myEntity.blob:=$data\n   $myEntity.save()\nEnd if\n\n"})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-import-from-blob",children:"VP IMPORT FROM BLOB"})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var l=n(667294);let s={},r=l.createContext(s);function d(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);