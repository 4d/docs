"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73193],{894590:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>r,contentTitle:()=>a,default:()=>E,frontMatter:()=>d,metadata:()=>t,toc:()=>i});var o=n(474848),s=n(28453);const d={id:"drag-window",title:"DRAG WINDOW",slug:"/commands/drag-window",displayed_sidebar:"docs"},a=void 0,t={id:"commands-legacy/drag-window",title:"DRAG WINDOW",description:"DRAG WINDOW",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/drag-window.md",sourceDirName:"commands-legacy",slug:"/commands/drag-window",permalink:"/docs/pt/commands/drag-window",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrag-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"drag-window",title:"DRAG WINDOW",slug:"/commands/drag-window",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Current form window",permalink:"/docs/pt/commands/current-form-window"},next:{title:"ERASE WINDOW",permalink:"/docs/pt/commands/erase-window"}},r={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function I(e){const A={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A.p,{children:(0,o.jsx)(A.strong,{children:"DRAG WINDOW"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(A.table,{children:(0,o.jsx)(A.thead,{children:(0,o.jsxs)(A.tr,{children:[(0,o.jsx)(A.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,o.jsx)(A.th,{})]})})}),"\n",(0,o.jsx)(A.p,{children:(0,o.jsx)(A.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(A.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(A.p,{children:"O comando DRAG WINDOW permite arrastar a janela na qual o usu\xe1rio clica para seguindo os movimentos do mouse. Geralmente este comando se chama desde um m\xe9todo de objeto de um objeto que possa responder instantaneamente aos cliques do mouse (por exemplo um bot\xe3o invis\xedvel)."}),"\n",(0,o.jsx)(A.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(A.p,{children:"O seguinte formul\xe1rio, mostrado no editor de formul\xe1rios, cont\xe9m um fundo colorido, sobre a qual h\xe1 quatro bot\xf5es invis\xedveis para cada lado:"}),"\n",(0,o.jsx)(A.p,{children:(0,o.jsx)(A.img,{src:n(606288).A+"",width:"447",height:"365"})}),"\n",(0,o.jsx)(A.p,{children:"Cada bot\xe3o est\xe1 associado ao seguinte m\xe9todo:"}),"\n",(0,o.jsx)(A.pre,{children:(0,o.jsx)(A.code,{className:"language-4d",children:"\xa0DRAG WINDOW\xa0//Come\xe7a a arrastar a janela quando clicar\n"})}),"\n",(0,o.jsx)(A.p,{children:"Depois de executar o m\xe9todo de projeto abaixo:"}),"\n",(0,o.jsx)(A.pre,{children:(0,o.jsx)(A.code,{className:"language-4d",children:'\xa0Open form window("custom_drag";Modal form dialog box)\n\nDIALOG(["custom_drag")\n\nCLOSE WINDOW\n\n\n'})}),"\n",(0,o.jsx)(A.p,{children:"Pode obter uma janela parecida a esta:"}),"\n",(0,o.jsx)(A.p,{children:(0,o.jsx)(A.img,{src:n(936569).A+"",width:"364",height:"268"})}),"\n",(0,o.jsx)(A.p,{children:"Depois pode arrastar a janela clicando em qualquer das margens."}),"\n",(0,o.jsx)(A.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(A.p,{children:[(0,o.jsx)(A.a,{href:"/docs/pt/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,o.jsx)(A.br,{}),"\n",(0,o.jsx)(A.a,{href:"/docs/pt/commands/set-window-rect",children:"SET WINDOW RECT"})]})]})}function E(e={}){const{wrapper:A}={...(0,s.R)(),...e.components};return A?(0,o.jsx)(A,{...e,children:(0,o.jsx)(I,{...e})}):I(e)}},606288:(e,A,n)=>{n.d(A,{A:()=>o});const o=n.p+"assets/images/pict2762756.en-6356202672745771291ed4654b1fe1f5.png"},936569:(e,A,n)=>{n.d(A,{A:()=>o});const o="data:image/png;base64,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FXnt64t7vnD8ByszW3wyrWaFnkieIEQ8Lqjceuut4oNaUarmlyU+NXj+zdA1x+CWLS8+9I2GsowWbUitmQzJG3w6422XL18eGBi4dOmSaClvv/ve4PCZS5fmTHuqct516oLf/pdS+Z2f3n3wi3e1Hul6eJ4zZas1P/qPyy62GxxET8Tb1LP6XXfdJb1FcfNnVi/ce+j1uGdGDx84NX/ezaF7IsEr8x566Sfzv7/iidczXUMCteYgN1bzBSHieb29veLLi5K6r93/i0e2/Dr88NdbPvu08sRXluuXNdqxrv6//HuHnjj3yIYXnPgoKKjW7HazwTGEiLepx/g999zjQN9g2Xf/3KE8Mj/kEaXjz3s33hyaouifzmj9lY17O+Y/XXP/C6Pitak1c2M1b3BPxOOCyv79+0OHutSyJ8+efTLyILpI9dll0YfaLPETM6XW/NV33WoyOIyeiLeplwa1tbUO3anIHrVm7onkDXoinrd3715neiLZrXkTH87kC3oi3qaezx988EHnfoAjS0I1u914cAYh4mEfLbpGeef/P/nzX9XV1amdEQ99VWtWK9fqh/cVjI+PFxcXT01NFRYWvnE8qyeHV3Y3tra2ut0CHrb32PCuk28VLPqYcvVVbteSpn++Gzz5p68uuolBiRzR2Nh478asHkp3LCmYnJzs6ekZGBjgnoiHqUfge8Fgz/Hf/8/UP92uJT3XX3v1uqpSEiQ/ECLe9uCyCvWf21VgRuOeCAARQgSACCECQIQQASBCiAAQIUQAiBAiAEQIEQAihAgAEUIEgAghAkCEEAEgQogAECFEAIgQIgBECBEAIoQIABFCBIAIIQJAhBABIEKIABAhRACIECIARAgRACKECAARl/8CXmNjo9stAEDEzRDJ8p8gBvB+4HIGgAghAkCEEAEgQogAECFEAIgQIgBECBEAIoQIABFCBIAIIQJAhBABIEKIABAhRACIECIARAgRACKECAARQgSACCECQIQQASBCiAAQIUQAiBAiAEQIEQAihAgAEUIEgAghAkCEEAEgQogAECFEAIgQIgBECBEAIoQIABFCBIAIIQJAZFb8gzuWFLhdDwCPiYXI5OSk28UA8B4tRDo7O90uA4BXFTz22GNu1wDAw/4NipYCTZwXEYcAAAAASUVORK5CYII="},28453:(e,A,n)=>{n.d(A,{R:()=>a,x:()=>t});var o=n(296540);const s={},d=o.createContext(s);function a(e){const A=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function t(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(d.Provider,{value:A},e.children)}}}]);