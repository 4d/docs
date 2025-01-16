"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34070"],{11838:function(e,n,o){o.r(n),o.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>m,contentTitle:()=>c});var t=JSON.parse('{"id":"ViewPro/commands/vp-convert-from-4d-view","title":"VP Convert from 4D View","description":"VP Convert from 4D View ( 4DViewDocument Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-convert-from-4d-view.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-convert-from-4d-view","permalink":"/docs/pt/ViewPro/commands/vp-convert-from-4d-view","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-from-4d-view.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-convert-from-4d-view","title":"VP Convert from 4D View"},"sidebar":"docs","previous":{"title":"VP Combine ranges","permalink":"/docs/pt/ViewPro/commands/vp-combine-ranges"},"next":{"title":"VP Convert to picture","permalink":"/docs/pt/ViewPro/commands/vp-convert-to-picture"}}'),r=o("785893"),i=o("250065");let s={id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},c=void 0,d={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4}];function a(e){let n={blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Convert from 4D View"})," ( ",(0,r.jsx)(n.em,{children:"4DViewDocument"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4DViewDocument"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Documento 4D View"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto 4D View Pro"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"VP Convert from 4D View"})," permite que voc\xea converta um documento legado do 4D View em um objeto do 4D View Pro."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Esse comando n\xe3o exige que o plug-in legado do 4D View esteja instalado em seu ambiente."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"4DViewDocument"}),", passe uma vari\xe1vel ou campo BLOB que contenha o documento do 4D View a ser convertido. O comando retorna um objeto 4D View Pro no qual todas as informa\xe7\xf5es originalmente armazenadas no documento 4D View s\xe3o convertidas em atributos 4D View Pro."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser obter um objeto 4D View Pro de uma \xe1rea 4D View armazenada em um BLOB:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_OBJECT($vpObj)\n$vpObj:=VP Convert from 4D View($pvblob)\n"})})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return s}});var t=o(667294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);