"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14760"],{959487:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>r,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-object-to-font","title":"VP Object to font","description":"VP Object to font ( fontObj Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-object-to-font.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-object-to-font","permalink":"/docs/es/ViewPro/commands/vp-object-to-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-object-to-font.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-object-to-font","title":"VP Object to font"},"sidebar":"docs","previous":{"title":"O","permalink":"/docs/es/commands-legacy/O"},"next":{"title":"P","permalink":"/docs/es/commands-legacy/P"}}'),i=t("785893"),d=t("250065");let l={id:"vp-object-to-font",title:"VP Object to font"},c=void 0,o={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP Object to font"})," ( ",(0,i.jsx)(n.em,{children:"fontObj"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"font object"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Objeto fuente"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Fuente abreviada"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"VP Object to font"})," devuelve una cadena abreviada de fuente a partir de ",(0,i.jsx)(n.em,{children:"fontObj"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"fontObj"}),", pase un objeto que contenga las propiedades de la fuente. Se soportan las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{children:"Valores posibles"}),(0,i.jsx)(n.th,{children:"Obligatorio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"family"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Define la fuente."}),(0,i.jsx)(n.td,{children:'todo tipo de familia de fuentes est\xe1ndar o gen\xe9rica. Ej. "Arial", "Helvetica", "serif", "arial,sans-serif"'}),(0,i.jsx)(n.td,{children:"S\xed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Defines the size of the font. The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt"'}),(0,i.jsxs)(n.td,{children:["un n\xfamero con una de las siguientes unidades: ",(0,i.jsx)(n.li,{children:'"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmin", "vmax"'}),"o uno de los siguientes:",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size grande"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size grande"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size x large"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size xx large"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size small"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size smaller"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size x small"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font size xx small"})})]}),(0,i.jsx)(n.td,{children:"S\xed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"style"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Estilo de fuente."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font style italic"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font style oblique"})})]}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Especifica el tipo de letra en min\xfasculas."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font variant small caps"})})}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weight"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Define el grosor de la fuente."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 100"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 200"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 300"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 400"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 500"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 600"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 700"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 800"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight 900"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight bold"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight bolder"})}),(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk font weight lighter"})})]}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Este objeto puede crearse con el comando ",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['La cadena abreviada devuelta puede asignarse a la propiedad "font" de una celda con la funci\xf3n ',(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),", por ejemplo."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$cellStyle:=VP Get cell style($range)\n \n$font:=VP Font to object($cellStyle.font)\n$font.style:=vk font style oblique\n$font.variant:=vk font variant small caps\n$font.weight:=vk font weight bolder\n \n$cellStyle.font:=VP Object to font($font)\n//$cellStyle.font contains "bolder oblique small-caps 16pt arial"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},d=s.createContext(i);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);