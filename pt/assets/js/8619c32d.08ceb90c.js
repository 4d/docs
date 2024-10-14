"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62151],{501736:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(474848),t=n(28453);const s={id:"vp-convert-to-picture",title:"VP Convert to picture"},i=void 0,c={id:"ViewPro/commands/vp-convert-to-picture",title:"VP Convert to picture",description:"VP Convert to picture ( vpObject Object} ) : Picture",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-convert-to-picture.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-convert-to-picture",permalink:"/docs/pt/ViewPro/commands/vp-convert-to-picture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-to-picture.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-convert-to-picture",title:"VP Convert to picture"},sidebar:"docs",previous:{title:"VP Convert from 4D View",permalink:"/docs/pt/ViewPro/commands/vp-convert-from-4d-view"},next:{title:"VP Copy to object",permalink:"/docs/pt/ViewPro/commands/vp-copy-to-object"}},d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Resultado",id:"resultado",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"VP Convert to picture"})," ( ",(0,r.jsx)(o.em,{children:"vpObject"})," : Object {; ",(0,r.jsx)(o.em,{children:"rangeObj"})," : Object} ) : Picture"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"vpObject"}),(0,r.jsx)(o.td,{children:"Object"}),(0,r.jsx)(o.td,{children:"->"}),(0,r.jsx)(o.td,{children:"Objeto 4D View Pro que cont\xe9m a \xe1rea a converter"}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"rangeObj"}),(0,r.jsx)(o.td,{children:"Object"}),(0,r.jsx)(o.td,{children:"->"}),(0,r.jsx)(o.td,{children:"Objeto intervalo"}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultados"}),(0,r.jsx)(o.td,{children:"Imagem"}),(0,r.jsx)(o.td,{children:"<-"}),(0,r.jsx)(o.td,{children:"Imagem SVG da \xe1rea"}),(0,r.jsx)(o.td,{})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.code,{children:"VP Convert to picture"})," converte o objeto ",(0,r.jsx)(o.em,{children:"vpObject"})," do 4D View Pro (ou o intervalo ",(0,r.jsx)(o.em,{children:"rangeObj"})," dentro de ",(0,r.jsx)(o.em,{children:"vpObject"}),") em uma imagem SVG."]}),"\n",(0,r.jsx)(o.p,{children:"Este comando \xe9 \xfatil, por exemplo:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"para incorporar um documento 4D View Pro em outro documento, como um documento 4D Write Pro"}),"\n",(0,r.jsx)(o.li,{children:"para imprimir um documento do 4D View Pro sem ter que carreg\xe1-lo em uma \xe1rea do 4D View Pro."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"vpObject"}),", passe o objeto 4D View Pro que voc\xea deseja converter. This object must have been previously parsed using ",(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," or saved using ",(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),"."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["SVG conversion process requires that expressions and formats (cf. ",(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/configuring#cell-format",children:"Cell Format"}),") included in the 4D View Pro area be evaluated at least once, so that they can be correctly exported. Se voc\xea converter um documento que n\xe3o foi avaliado anteriormente, as express\xf5es ou os formatos poder\xe3o ser renderizados de forma inesperada."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"rangeObj"}),", passe um intervalo de c\xe9lulas a ser convertido. Por padr\xe3o, se esse par\xe2metro for omitido, todo o conte\xfado do documento ser\xe1 convertido."]}),"\n",(0,r.jsx)(o.p,{children:"O conte\xfado do documento \xe9 convertido com rela\xe7\xe3o aos seus atributos de visualiza\xe7\xe3o, incluindo formatos (veja a observa\xe7\xe3o acima), visibilidade de cabe\xe7alhos, colunas e linhas. H\xe1 suporte para a convers\xe3o dos seguintes elementos:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Texto: estilo / fonte / tamanho / alinhamento / orienta\xe7\xe3o / rota\xe7\xe3o / formato"}),"\n",(0,r.jsx)(o.li,{children:"Fundo da c\xe9lula: cor / imagem"}),"\n",(0,r.jsx)(o.li,{children:"Borda das c\xe9lulas: espessura / cor / estilo"}),"\n",(0,r.jsx)(o.li,{children:"Fus\xe3o de c\xe9lulas"}),"\n",(0,r.jsx)(o.li,{children:"Imagens"}),"\n",(0,r.jsx)(o.li,{children:"Altura da linha"}),"\n",(0,r.jsx)(o.li,{children:"Largura da coluna"}),"\n",(0,r.jsx)(o.li,{children:"Colunas/linhas ocultas."}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["A visibilidade da linha quadriculada depende do atributo definido no documento com",(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"resultado",children:"Resultado"}),"\n",(0,r.jsx)(o.p,{children:"O comando devolve uma imagem em formato SVG."}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Pretende converter uma \xe1rea 4D View Pro em SVG, pr\xe9-visualizar o resultado e envi\xe1-lo para uma vari\xe1vel imagem:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'C_OBJECT($vpAreaObj)\nC_PICTURE($vPict)\n$vpAreaObj:=VP Export to object("ViewProArea")\n$vPict:=VP Convert to picture($vpAreaObj) //exportar toda a \xe1rea\n'})}),"\n",(0,r.jsx)(o.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var r=n(296540);const t={},s=r.createContext(t);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);