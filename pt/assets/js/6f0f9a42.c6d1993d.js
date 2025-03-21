"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50297"],{312734:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/object-get-subform-container-size","title":"OBJECT GET SUBFORM CONTAINER SIZE","description":"OBJECT GET SUBFORM CONTAINER SIZE ( largura ; altura )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-subform-container-size.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform-container-size","permalink":"/docs/pt/20-R7/commands/object-get-subform-container-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform-container-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-subform-container-size","title":"OBJECT GET SUBFORM CONTAINER SIZE","slug":"/commands/object-get-subform-container-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SUBFORM","permalink":"/docs/pt/20-R7/commands/object-get-subform"},"next":{"title":"OBJECT Get subform container value","permalink":"/docs/pt/20-R7/commands/object-get-subform-container-value"}}'),s=r("785893"),t=r("250065");let d={id:"object-get-subform-container-size",title:"OBJECT GET SUBFORM CONTAINER SIZE",slug:"/commands/object-get-subform-container-size",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT GET SUBFORM CONTAINER SIZE"})," ( ",(0,s.jsx)(o.em,{children:"largura"})," ; ",(0,s.jsx)(o.em,{children:"altura"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"largura"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Largura do objeto sub-formul\xe1rio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"altura"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Altura do objeto sub-formul\xe1rio"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT GET SUBFORM CONTAINER SIZE"})," devolve a ",(0,s.jsx)(o.em,{children:"largura"})," e a ",(0,s.jsx)(o.em,{children:"altura"}),' (em pixels) de um objeto sub-formul\xe1rio "atual", mostrado no formul\xe1rio pai.']}),"\n",(0,s.jsxs)(o.p,{children:["Este comando deve ser chamado desde o m\xe9todo de um formul\xe1rio utilizado como sub-formul\xe1rio e mostrado em um objeto sub-formul\xe1rio. Devolve a ",(0,s.jsx)(o.em,{children:"largura"})," e a ",(0,s.jsx)(o.em,{children:"altura"})," do objeto que cont\xe9m o sub-formul\xe1rio. Devolve a ",(0,s.jsx)(o.em,{children:"largura"})," e a ",(0,s.jsx)(o.em,{children:"altura"})," do objeto que cont\xe9m o sub-formul\xe1rio."]}),"\n",(0,s.jsx)(o.p,{children:"Este comando \xe9 \xfatil, por exemplo, no caso de objetos de sub-formul\xe1rio que devem movimentar-se e/o redimensionar-se em fun\xe7\xe3o das caracter\xedsticas do objeto sub-formul\xe1rio mesmo. No evento formul\xe1rio On Load, o sub-formul\xe1rio pode chamar a este comando para calcular o espa\xe7o a sua disposi\xe7\xe3o com o fim de mostrar seu conte\xfado."}),"\n",(0,s.jsx)(o.p,{children:"O evento On Resize \xe9 gerado no m\xe9todo formulario de subformul\xe1rio se o objeto subformul\xe1rio se redimensiona no objeto formul\xe1rio pai (por exemplo se o objeto subformul\xe1rio tiver uma propriedade de agrandamento horizontal/vertical e se o formul\xe1rio pai se redimensiona)."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Se o comando se chama desde um formul\xe1rio que n\xe3o se est\xe1 utilizando como um sub-formul\xe1rio, devolve o tamanho atual de la janela do formul\xe1rio."}),"\n",(0,s.jsxs)(o.li,{children:["Se o comando se chama fora do contexto da visualiza\xe7\xe3o da tela (por exemplo, durante a impress\xe3o do formul\xe1rio), devolve 0 em ",(0,s.jsx)(o.em,{children:"largura"})," e ",(0,s.jsx)(o.em,{children:"altura"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-set-subform",children:"OBJECT SET SUBFORM"})]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1148"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return d}});var n=r(667294);let s={},t=n.createContext(s);function d(e){let o=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);