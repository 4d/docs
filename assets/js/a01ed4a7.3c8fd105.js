"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58826"],{949853:function(e,n,t){t.r(n),t.d(n,{default:()=>I,frontMatter:()=>r,metadata:()=>A,assets:()=>o,toc:()=>a,contentTitle:()=>d});var A=JSON.parse('{"id":"commands-legacy/drag-window","title":"DRAG WINDOW","description":"DRAG WINDOW","source":"@site/versioned_docs/version-20-R7/commands-legacy/drag-window.md","sourceDirName":"commands-legacy","slug":"/commands/drag-window","permalink":"/docs/20-R7/commands/drag-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrag-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"drag-window","title":"DRAG WINDOW","slug":"/commands/drag-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current form window","permalink":"/docs/20-R7/commands/current-form-window"},"next":{"title":"ERASE WINDOW","permalink":"/docs/20-R7/commands/erase-window"}}'),i=t("785893"),s=t("250065");let r={id:"drag-window",title:"DRAG WINDOW",slug:"/commands/drag-window",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DRAG WINDOW"})}),"\n\n\n\n\n\n\n\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Does not require any parameters"}),(0,i.jsx)(n.th,{})]})})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The DRAG WINDOW command lets users drag the window on which they clicked following the movements of the mouse. Usually you call this command from within an object method of an object that can respond instantaneously to mouse clicks (i.e., invisible buttons)."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following form, shown here in the Form editor, contains a colored frame, above which are four invisible buttons for each side:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(371491).Z+"",width:"447",height:"365"})}),"\n",(0,i.jsx)(n.p,{children:"Each button has the following method:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0DRAG WINDOW\xa0//Start dragging window when clicked\n"})}),"\n",(0,i.jsx)(n.p,{children:"After executing the following project method:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$winRef:=Open form window("custom_drag";Modal form dialog box)\n\xa0DIALOG("custom_drag")\n\xa0CLOSE WINDOW\n'})}),"\n",(0,i.jsx)(n.p,{children:"You obtain a window similar to this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(718621).Z+"",width:"364",height:"268"})}),"\n",(0,i.jsx)(n.p,{children:"Then you can drag the window by clicking anywhere on the borders."}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"452"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function I(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},371491:function(e,n,t){t.d(n,{Z:function(){return A}});let A=t.p+"assets/images/pict2762756.en-6356202672745771291ed4654b1fe1f5.png"},718621:function(e,n,t){t.d(n,{Z:function(){return A}});let A="data:image/png;base64,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FXnt64t7vnD8ByszW3wyrWaFnkieIEQ8Lqjceuut4oNaUarmlyU+NXj+zdA1x+CWLS8+9I2GsowWbUitmQzJG3w6422XL18eGBi4dOmSaClvv/ve4PCZS5fmTHuqct516oLf/pdS+Z2f3n3wi3e1Hul6eJ4zZas1P/qPyy62GxxET8Tb1LP6XXfdJb1FcfNnVi/ce+j1uGdGDx84NX/ezaF7IsEr8x566Sfzv7/iidczXUMCteYgN1bzBSHieb29veLLi5K6r93/i0e2/Dr88NdbPvu08sRXluuXNdqxrv6//HuHnjj3yIYXnPgoKKjW7HazwTGEiLepx/g999zjQN9g2Xf/3KE8Mj/kEaXjz3s33hyaouifzmj9lY17O+Y/XXP/C6Pitak1c2M1b3BPxOOCyv79+0OHutSyJ8+efTLyILpI9dll0YfaLPETM6XW/NV33WoyOIyeiLeplwa1tbUO3anIHrVm7onkDXoinrd3715neiLZrXkTH87kC3oi3qaezx988EHnfoAjS0I1u914cAYh4mEfLbpGeef/P/nzX9XV1amdEQ99VWtWK9fqh/cVjI+PFxcXT01NFRYWvnE8qyeHV3Y3tra2ut0CHrb32PCuk28VLPqYcvVVbteSpn++Gzz5p68uuolBiRzR2Nh478asHkp3LCmYnJzs6ekZGBjgnoiHqUfge8Fgz/Hf/8/UP92uJT3XX3v1uqpSEiQ/ECLe9uCyCvWf21VgRuOeCAARQgSACCECQIQQASBCiAAQIUQAiBAiAEQIEQAihAgAEUIEgAghAkCEEAEgQogAECFEAIgQIgBECBEAIoQIABFCBIAIIQJAhBABIEKIABAhRACIECIARAgRACKECAARl/8CXmNjo9stAEDEzRDJ8p8gBvB+4HIGgAghAkCEEAEgQogAECFEAIgQIgBECBEAIoQIABFCBIAIIQJAhBABIEKIABAhRACIECIARAgRACKECAARQgSACCECQIQQASBCiAAQIUQAiBAiAEQIEQAihAgAEUIEgAghAkCEEAEgQogAECFEAIgQIgBECBEAIoQIABFCBIAIIQJAZFb8gzuWFLhdDwCPiYXI5OSk28UA8B4tRDo7O90uA4BXFTz22GNu1wDAw/4NipYCTZwXEYcAAAAASUVORK5CYII="},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var A=t(667294);let i={},s=A.createContext(i);function r(e){let n=A.useContext(s);return A.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),A.createElement(s.Provider,{value:n},e.children)}}}]);