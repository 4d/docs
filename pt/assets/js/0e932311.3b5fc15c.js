"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27644"],{245602:function(e,o,r){r.r(o),r.d(o,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"ViewPro/commands/vp-export-to-object","title":"VP Export to object","description":"VP Export to object ( vpAreaName Object} ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-export-to-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-export-to-object","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-export-to-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-export-to-object","title":"VP Export to object"},"sidebar":"docs","previous":{"title":"VP EXPORT TO BLOB","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-export-to-blob"},"next":{"title":"F","permalink":"/docs/pt/20-R7/commands-legacy/F"}}'),t=r("785893"),s=r("250065");let d={id:"vp-export-to-object",title:"VP Export to object"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"VP Export to object"})," ( ",(0,t.jsx)(o.em,{children:"vpAreaName"})," : Text {; ",(0,t.jsx)(o.em,{children:"options"})," : Object} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"vpAreaName"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"->"}),(0,t.jsx)(o.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(o.td,{})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"options"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"->"}),(0,t.jsx)(o.td,{children:"Op\xe7\xf5es de exporta\xe7\xe3o"}),(0,t.jsx)(o.td,{})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultados"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"<-"}),(0,t.jsx)(o.td,{children:"Objecto 4D View Pro"}),(0,t.jsx)(o.td,{})]})]})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"VP Export to object"})," command  returns the 4D View Pro object attached to the 4D View Pro area ",(0,t.jsx)(o.em,{children:"vpAreaName"}),". Voc\xea pode usar esse comando, por exemplo, para armazenar a \xe1rea do 4D View Pro em um campo de objeto do banco de dados 4D."]}),"\n",(0,t.jsxs)(o.p,{children:["Em ",(0,t.jsx)(o.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(o.p,{children:["In the ",(0,t.jsx)(o.em,{children:"options"})," parameter, you can pass the following export options, if required:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Propriedade"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"includeFormatInfo"}),(0,t.jsx)(o.td,{children:"Par\xe2metros"}),(0,t.jsx)(o.td,{children:"True (padr\xe3o) para incluir informa\xe7\xf5es de formata\xe7\xe3o; caso contr\xe1rio, false. As informa\xe7\xf5es de formata\xe7\xe3o s\xe3o \xfateis em alguns casos, por exemplo, para exporta\xe7\xe3o para SVG. Por outro lado, a defini\xe7\xe3o dessa propriedade como False permite reduzir o tempo de exporta\xe7\xe3o."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"includeBindingSource"}),(0,t.jsx)(o.td,{children:"Par\xe2metros"}),(0,t.jsx)(o.td,{children:"True (padr\xe3o) para exportar os valores do contexto de dados atual como valores de c\xe9lula no objeto exportado (os contextos de dados em si n\xe3o s\xe3o exportados). Caso contr\xe1rio, false. Cell binding sempre \xe9 exportada."})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es sobre objetos 4D View Pro, consulte par\xe1grafo ",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/ViewPro/configuring#4d-view-pro-object",children:"4D View Pro"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(o.p,{children:'Voc\xea deseja obter a propriedade "version" da \xe1rea atual do 4D View Pro:'}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'var $vpAreaObj : Object\nvar $vpVersion : Number\n$vpAreaObj:=VP Export to object("vpArea")\n // $vpVersion:=OB Get($vpAreaObj;"version")\n$vpVersion:=$vpAreaObj.version\n'})}),"\n",(0,t.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(o.p,{children:"Pretende-se exportar a \xe1rea, excluindo a informa\xe7\xe3o de formata\xe7\xe3o:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'var $vpObj : Object\n$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))\n'})}),"\n",(0,t.jsx)(o.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-import-from-object",children:"VP IMPORT FROM OBJECT"})]})]})}function p(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return d}});var n=r(667294);let t={},s=n.createContext(t);function d(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);