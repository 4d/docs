"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80068"],{215977:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/resize-form-window","title":"RESIZE FORM WINDOW","description":"RESIZE FORM WINDOW ( largura ; altura )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/resize-form-window.md","sourceDirName":"commands-legacy","slug":"/commands/resize-form-window","permalink":"/docs/pt/commands/resize-form-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresize-form-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"resize-form-window","title":"RESIZE FORM WINDOW","slug":"/commands/resize-form-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDUCE RESTORE WINDOW","permalink":"/docs/pt/commands/reduce-restore-window"},"next":{"title":"SET WINDOW DOCUMENT ICON","permalink":"/docs/pt/commands/set-window-document-icon"}}'),a=o("785893"),d=o("250065");let s={id:"resize-form-window",title:"RESIZE FORM WINDOW",slug:"/commands/resize-form-window",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"RESIZE FORM WINDOW"})," ( ",(0,a.jsx)(n.em,{children:"largura"})," ; ",(0,a.jsx)(n.em,{children:"altura"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"largura"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Pixels a adicionar ou remover da largura da janela do formul\xe1rio atual"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"altura"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Pixels a adicionar ou remover da altura da janela do formul\xe1rio atual"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"O comando RESIZE FORM WINDOW permite modificar o tamanho da janela do formul\xe1rio atual."}),"\n",(0,a.jsxs)(n.p,{children:["Passe o n\xfamero de p\xedxels que desejar adicionar ao tamanho da janela atual nos par\xe2metros ",(0,a.jsx)(n.em,{children:"largura e altura"}),". Passe 0 no par\xe2metro que n\xe3o queira modificar. Para reduzir o tamanho, passe um valor negativo nos par\xe2metros largura e altura."]}),"\n",(0,a.jsx)(n.p,{children:"Este comando produce exactamente o mesmo resultado que um redimensionamento manual utilizando a casilla de redimensionamento (se o tipo de janela lo permite). Por conseguinte, o comando considera as propriedades de redimensionamento dos objetos e as limita\xe7\xf5es de tamanho definidas nas propriedades do formul\xe1rio. Se, por exemplo, o comando redimensiona a janela a um tamanho superior ao m\xe1ximo do formul\xe1rio, o comando n\xe3o tem efeito."}),"\n",(0,a.jsxs)(n.p,{children:["Por favor note que este comportamento \xe9 diferente do comportamento do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/set-window-rect",children:"SET WINDOW RECT"}),", o qual n\xe3o considera as propriedades do formul\xe1rio nem seu conte\xfado quando redimensionar a janela. Igualmente, note que este comando n\xe3o necessariamente modifica o tamanho do formul\xe1rio. Para modificar o tamanho de um formul\xe1rio por programa\xe7\xe3o, por favor consulte a descri\xe7\xe3o do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/form-set-size",children:"FORM SET SIZE"})]}),"\n",(0,a.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(n.p,{children:"Dada a janela abaixo (os campos e o marco tem a propriedade de dimensionamento horizontal \u201CAumentar\u201D):"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(760250).Z+"",width:"395",height:"284"})}),"\n",(0,a.jsx)(n.p,{children:"Depois da execu\xe7\xe3o desta linha:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0RESIZE FORM WINDOW(25;0)\n"})}),"\n",(0,a.jsx)(n.p,{children:"... a janela aparece assim:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(747785).Z+"",width:"431",height:"284"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/form-set-size",children:"FORM SET SIZE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,a.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"890"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},760250:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/pict39548.en-022e544ccdd98603d3d9b298671c011e.png"},747785:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/pict39549.en-f1761afac0cea44b925805c9be016e83.png"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return s}});var r=o(667294);let a={},d=r.createContext(a);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);