"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36031"],{427650:function(e,s,r){r.r(s),r.d(s,{default:()=>j,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"commands/theme/Printing_theme","title":"Impresiones","description":"|                                                                                                                   |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/theme/Printing.md","sourceDirName":"commands/theme","slug":"/commands/theme/Printing","permalink":"/docs/es/20-R7/commands/theme/Printing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FPrinting.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"Printing_theme","title":"Impresiones","slug":"/commands/theme/Printing"},"sidebar":"docs","previous":{"title":"WRITE PICTURE FILE","permalink":"/docs/es/20-R7/commands/write-picture-file"},"next":{"title":"ACCUMULATE","permalink":"/docs/es/20-R7/commands/accumulate"}}'),i=r("785893"),t=r("250065");let d={id:"Printing_theme",title:"Impresiones",slug:"/commands/theme/Printing"},c=void 0,l={},h=[];function o(e){let s={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.th,{})})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/accumulate",children:[(0,i.jsx)(s.strong,{children:"ACCUMULATE"})," ( ",(0,i.jsx)(s.em,{children:"objeto"})," {; ",(0,i.jsx)(s.em,{children:"objeto2"})," ; ... ; ",(0,i.jsx)(s.em,{children:"objetoN"}),"} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/blob-to-print-settings",children:[(0,i.jsx)(s.strong,{children:"BLOB to print settings"})," ( ",(0,i.jsx)(s.em,{children:"confImpr"})," {; ",(0,i.jsx)(s.em,{children:"params"}),"} ) : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/break-level",children:[(0,i.jsx)(s.strong,{children:"BREAK LEVEL"})," ( ",(0,i.jsx)(s.em,{children:"nivel"})," {; ",(0,i.jsx)(s.em,{children:"saltoPag"}),"} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/close-printing-job",children:(0,i.jsx)(s.strong,{children:"CLOSE PRINTING JOB"})}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-current-printer",children:[(0,i.jsx)(s.strong,{children:"Get current printer"}),"  : Text"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-print-marker",children:[(0,i.jsx)(s.strong,{children:"Get print marker"})," ( ",(0,i.jsx)(s.em,{children:"markNum"})," ) : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-print-option",children:[(0,i.jsx)(s.strong,{children:"GET PRINT OPTION"})," ( ",(0,i.jsx)(s.em,{children:"opcion"})," ; ",(0,i.jsx)(s.em,{children:"valor1"})," {; ",(0,i.jsx)(s.em,{children:"valor2"}),"} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-print-preview",children:[(0,i.jsx)(s.strong,{children:"Get print preview"}),"  : Boolean"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-printable-area",children:[(0,i.jsx)(s.strong,{children:"GET PRINTABLE AREA"})," ( ",(0,i.jsx)(s.em,{children:"altura"})," {; ",(0,i.jsx)(s.em,{children:"largo"}),"} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-printable-margin",children:[(0,i.jsx)(s.strong,{children:"GET PRINTABLE MARGIN"})," ( ",(0,i.jsx)(s.em,{children:"izquierda"})," ; ",(0,i.jsx)(s.em,{children:"superior"})," ; ",(0,i.jsx)(s.em,{children:"derecha"})," ; ",(0,i.jsx)(s.em,{children:"inferior"})," )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/get-printed-height",children:[(0,i.jsx)(s.strong,{children:"Get printed height"}),"  : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/is-in-print-preview",children:[(0,i.jsx)(s.strong,{children:"Is in print preview"}),"  : Boolean"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/level",children:[(0,i.jsx)(s.strong,{children:"Level"}),"  : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/open-printing-job",children:(0,i.jsx)(s.strong,{children:"OPEN PRINTING JOB"})}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/page-break",children:[(0,i.jsx)(s.strong,{children:"PAGE BREAK"})," {( * )}",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:"PAGE BREAK"})," {( > )}"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/print-form",children:[(0,i.jsx)(s.strong,{children:"Print form"})," ( {",(0,i.jsx)(s.em,{children:"tabla"})," ;} ",(0,i.jsx)(s.em,{children:"formulario"})," {; ",(0,i.jsx)(s.em,{children:"dataForm"}),"} {; ",(0,i.jsx)(s.em,{children:"area1"}),"{; ",(0,i.jsx)(s.em,{children:"area2"}),"}} ) : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:["[",(0,i.jsx)(s.strong,{children:"PRINT LABEL"})," ( {",(0,i.jsx)(s.em,{children:"tabla"})," }{;}{ ",(0,i.jsx)(s.em,{children:"doc"})," {; *"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/print-object",children:[(0,i.jsx)(s.strong,{children:"Print object"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"objeto"})," {; ",(0,i.jsx)(s.em,{children:"posX"})," {; ",(0,i.jsx)(s.em,{children:"posY"})," {; ",(0,i.jsx)(s.em,{children:"ancho"})," {; ",(0,i.jsx)(s.em,{children:"alto"}),"}}}} ) : Boolean"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/print-option-values",children:[(0,i.jsx)(s.strong,{children:"PRINT OPTION VALUES"})," ( ",(0,i.jsx)(s.em,{children:"opcion"})," ; ",(0,i.jsx)(s.em,{children:"arrayNoms"})," {; ",(0,i.jsx)(s.em,{children:"info1Array"})," {; ",(0,i.jsx)(s.em,{children:"info2Array"}),"}} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:["[",(0,i.jsx)(s.strong,{children:"PRINT RECORD"})," ( {",(0,i.jsx)(s.em,{children:"tabla"}),"}{;}{*"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:["[",(0,i.jsx)(s.strong,{children:"PRINT SELECTION"})," ( {",(0,i.jsx)(s.em,{children:"tabla"}),"}{;}{*"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/print-settings",children:[(0,i.jsx)(s.strong,{children:"PRINT SETTINGS"})," {( ",(0,i.jsx)(s.em,{children:"dialType"})," )}"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/print-settings-to-blob",children:[(0,i.jsx)(s.strong,{children:"Print settings to BLOB"})," ( ",(0,i.jsx)(s.em,{children:"confImp"})," ) : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/printers-list",children:[(0,i.jsx)(s.strong,{children:"PRINTERS LIST"})," ( ",(0,i.jsx)(s.em,{children:"arrayNoms"})," {; ",(0,i.jsx)(s.em,{children:"arrayNomsAlt"})," {; ",(0,i.jsx)(s.em,{children:"arrayModelos"}),"}} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/printing-page",children:[(0,i.jsx)(s.strong,{children:"Printing page"}),"  : Integer"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/set-current-printer",children:[(0,i.jsx)(s.strong,{children:"SET CURRENT PRINTER"})," ( ",(0,i.jsx)(s.em,{children:"nomImpr"})," )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/set-print-marker",children:[(0,i.jsx)(s.strong,{children:"SET PRINT MARKER"})," ( ",(0,i.jsx)(s.em,{children:"markNum"})," ; ",(0,i.jsx)(s.em,{children:"posicion"})," {; *} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/set-print-option",children:[(0,i.jsx)(s.strong,{children:"SET PRINT OPTION"})," ( ",(0,i.jsx)(s.em,{children:"opcion"})," ; ",(0,i.jsx)(s.em,{children:"valor1"})," {; ",(0,i.jsx)(s.em,{children:"valor2"}),"} )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/set-print-preview",children:[(0,i.jsx)(s.strong,{children:"SET PRINT PREVIEW"})," ( vista previa )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/set-printable-margin",children:[(0,i.jsx)(s.strong,{children:"SET PRINTABLE MARGIN"})," ( ",(0,i.jsx)(s.em,{children:"izquierda"})," ; ",(0,i.jsx)(s.em,{children:"superior"})," ; ",(0,i.jsx)(s.em,{children:"derecha"})," ; ",(0,i.jsx)(s.em,{children:"inferior"})," )"]}),(0,i.jsx)(s.br,{})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"/docs/es/20-R7/commands/subtotal",children:[(0,i.jsx)(s.strong,{children:"Subtotal"})," ( ",(0,i.jsx)(s.em,{children:"valores"})," {; ",(0,i.jsx)(s.em,{children:"saltoPag"}),"} ) : Real"]}),(0,i.jsx)(s.br,{})]})})]})]})}function j(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return d}});var n=r(667294);let i={},t=n.createContext(i);function d(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);