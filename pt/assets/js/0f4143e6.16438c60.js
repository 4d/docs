"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72935"],{723718:function(e,r,s){s.r(r),s.d(r,{default:()=>j,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"commands/theme/Printing_theme","title":"Printing","description":"|                                                                                                                   |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/theme/Printing.md","sourceDirName":"commands/theme","slug":"/commands/theme/Printing","permalink":"/docs/pt/20-R8/commands/theme/Printing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FPrinting.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"Printing_theme","title":"Printing","slug":"/commands/theme/Printing"},"sidebar":"docs","previous":{"title":"WRITE PICTURE FILE","permalink":"/docs/pt/20-R8/commands/write-picture-file"},"next":{"title":"ACCUMULATE","permalink":"/docs/pt/20-R8/commands/accumulate"}}'),t=s("785893"),d=s("250065");let i={id:"Printing_theme",title:"Printing",slug:"/commands/theme/Printing"},c=void 0,l={},h=[];function o(e){let r={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{})})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/accumulate",children:[(0,t.jsx)(r.strong,{children:"ACCUMULATE"})," ( ",(0,t.jsx)(r.em,{children:"dados"})," {; ",(0,t.jsx)(r.em,{children:"dados2"})," ; ... ; ",(0,t.jsx)(r.em,{children:"dadosN"}),"} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/blob-to-print-settings",children:[(0,t.jsx)(r.strong,{children:"BLOB to print settings"})," ( ",(0,t.jsx)(r.em,{children:"confImpr"})," {; ",(0,t.jsx)(r.em,{children:"params"}),"} ) : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/break-level",children:[(0,t.jsx)(r.strong,{children:"BREAK LEVEL"})," ( ",(0,t.jsx)(r.em,{children:"nivel"})," {; ",(0,t.jsx)(r.em,{children:"saltoPagina"}),"} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/close-printing-job",children:(0,t.jsx)(r.strong,{children:"CLOSE PRINTING JOB"})}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-current-printer",children:[(0,t.jsx)(r.strong,{children:"Get current printer"}),"  : Text"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-print-marker",children:[(0,t.jsx)(r.strong,{children:"Get print marker"})," ( ",(0,t.jsx)(r.em,{children:"numeroMarc"})," ) : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-print-option",children:[(0,t.jsx)(r.strong,{children:"GET PRINT OPTION"})," ( ",(0,t.jsx)(r.em,{children:"op\xe7\xe3o"})," ; ",(0,t.jsx)(r.em,{children:"valor1"})," {; ",(0,t.jsx)(r.em,{children:"valor2"}),"} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-print-preview",children:[(0,t.jsx)(r.strong,{children:"Get print preview"}),"  : Boolean"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-printable-area",children:[(0,t.jsx)(r.strong,{children:"GET PRINTABLE AREA"})," ( ",(0,t.jsx)(r.em,{children:"altura"})," {; ",(0,t.jsx)(r.em,{children:"largura"}),"} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-printable-margin",children:[(0,t.jsx)(r.strong,{children:"GET PRINTABLE MARGIN"})," ( ",(0,t.jsx)(r.em,{children:"esquerda"})," ; ",(0,t.jsx)(r.em,{children:"superior"})," ; ",(0,t.jsx)(r.em,{children:"direita"})," ; ",(0,t.jsx)(r.em,{children:"inferior"})," )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/get-printed-height",children:[(0,t.jsx)(r.strong,{children:"Get printed height"}),"  : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/is-in-print-preview",children:[(0,t.jsx)(r.strong,{children:"Is in print preview"}),"  : Boolean"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/level",children:[(0,t.jsx)(r.strong,{children:"Level"}),"   : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/open-printing-job",children:(0,t.jsx)(r.strong,{children:"OPEN PRINTING JOB"})}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:["[",(0,t.jsx)(r.strong,{children:"PAGE BREAK"})," {( *"]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/print-form",children:[(0,t.jsx)(r.strong,{children:"Print form"})," ( {",(0,t.jsx)(r.em,{children:"aTable"})," ;} ",(0,t.jsx)(r.em,{children:"form"})," {; ",(0,t.jsx)(r.em,{children:"formData"}),"} {; ",(0,t.jsx)(r.em,{children:"areaStart"}),"{; ",(0,t.jsx)(r.em,{children:"areaEnd"}),"}} ) : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:["[",(0,t.jsx)(r.strong,{children:"PRINT LABEL"})," ( {",(0,t.jsx)(r.em,{children:"tabela"})," }{;}{ ",(0,t.jsx)(r.em,{children:"documento"})," {; *"]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/print-object",children:[(0,t.jsx)(r.strong,{children:"Print object"})," ( {* ;} ",(0,t.jsx)(r.em,{children:"objeto"})," {; ",(0,t.jsx)(r.em,{children:"posX"})," {; ",(0,t.jsx)(r.em,{children:"posY"})," {; ",(0,t.jsx)(r.em,{children:"largura"})," {; ",(0,t.jsx)(r.em,{children:"alto"}),"}}}} ) : Boolean"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/print-option-values",children:[(0,t.jsx)(r.strong,{children:"PRINT OPTION VALUES"})," ( ",(0,t.jsx)(r.em,{children:"op\xe7ao"})," ; ",(0,t.jsx)(r.em,{children:"arrayNoms"})," {; ",(0,t.jsx)(r.em,{children:"info1Array"})," {; ",(0,t.jsx)(r.em,{children:"info2Array"}),"}} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:["[",(0,t.jsx)(r.strong,{children:"PRINT RECORD"})," ( {",(0,t.jsx)(r.em,{children:"tabela"}),"}{;}{*"]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:["[",(0,t.jsx)(r.strong,{children:"PRINT SELECTION"})," ( {",(0,t.jsx)(r.em,{children:"tabela"}),"}{;}{*"]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/print-settings",children:[(0,t.jsx)(r.strong,{children:"PRINT SETTINGS"})," {( ",(0,t.jsx)(r.em,{children:"dialType"})," )}"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/print-settings-to-blob",children:[(0,t.jsx)(r.strong,{children:"Print settings to BLOB"})," ( ",(0,t.jsx)(r.em,{children:"confImpress"})," ) : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/printers-list",children:[(0,t.jsx)(r.strong,{children:"PRINTERS LIST"})," ( ",(0,t.jsx)(r.em,{children:"arrayNoms"})," {; ",(0,t.jsx)(r.em,{children:"altNomesArray"})," {; ",(0,t.jsx)(r.em,{children:"modelosArray"}),"}} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/printing-page",children:[(0,t.jsx)(r.strong,{children:"Printing page"}),"  : Integer"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/set-current-printer",children:[(0,t.jsx)(r.strong,{children:"SET CURRENT PRINTER"})," ( ",(0,t.jsx)(r.em,{children:"nomImpr"})," )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/set-print-marker",children:[(0,t.jsx)(r.strong,{children:"SET PRINT MARKER"})," ( ",(0,t.jsx)(r.em,{children:"markNum"})," ; ",(0,t.jsx)(r.em,{children:"posi\xe7ao"})," {; *} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/set-print-option",children:[(0,t.jsx)(r.strong,{children:"SET PRINT OPTION"})," ( ",(0,t.jsx)(r.em,{children:"op\xe7\xe3o"})," ; ",(0,t.jsx)(r.em,{children:"valor1"})," {; ",(0,t.jsx)(r.em,{children:"valor2"}),"} )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/set-print-preview",children:[(0,t.jsx)(r.strong,{children:"SET PRINT PREVIEW"})," ( ",(0,t.jsx)(r.em,{children:"vistaprevia"})," )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/set-printable-margin",children:[(0,t.jsx)(r.strong,{children:"SET PRINTABLE MARGIN"})," ( ",(0,t.jsx)(r.em,{children:"esquerda"})," ; ",(0,t.jsx)(r.em,{children:"superior"})," ; ",(0,t.jsx)(r.em,{children:"direita"})," ; ",(0,t.jsx)(r.em,{children:"inferior"})," )"]}),(0,t.jsx)(r.br,{})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R8/commands/subtotal",children:[(0,t.jsx)(r.strong,{children:"Subtotal"})," ( ",(0,t.jsx)(r.em,{children:"valores"})," {; ",(0,t.jsx)(r.em,{children:"saltoPag"}),"} ) : Real"]}),(0,t.jsx)(r.br,{})]})})]})]})}function j(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return i}});var n=s(667294);let t={},d=n.createContext(t);function i(e){let r=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);