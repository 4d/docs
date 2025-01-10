"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32243"],{90743:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/st-insert-url","title":"ST INSERT URL","description":"ST INSERT URL ( { ;} objeto ; textoURL ; enderecoURL {; inicioSel {; fimSel*}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-insert-url.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-url","permalink":"/docs/pt/commands/st-insert-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-insert-url","title":"ST INSERT URL","slug":"/commands/st-insert-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT EXPRESSION","permalink":"/docs/pt/commands/st-insert-expression"},"next":{"title":"ST SET ATTRIBUTES","permalink":"/docs/pt/commands/st-set-attributes"}}'),t=s("785893"),r=s("250065");let i={id:"st-insert-url",title:"ST INSERT URL",slug:"/commands/st-insert-url",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ST INSERT URL"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"textoURL"})," ; ",(0,t.jsx)(n.em,{children:"enderecoURL"})," {; ",(0,t.jsx)(n.em,{children:"inicioSel"})," {; ",(0,t.jsx)(n.em,{children:"fimSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,t.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"textoURL"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Texto vis\xedvel do URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enderecoURL"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Endere\xe7o do URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"inicioSel"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Inicio da sele\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fimSel"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Fim da sele\xe7\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"ST INSERT URL"})," insere um link URL no campo ou a vari\xe1vel de texto com estilo designada pelo par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se omitir o par\xe2metro ",(0,t.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel (vari\xe1vel ou campo objeto unicamente)."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"textoURL"}),', passe o texto vis\xedvel do URL, como deve aparecer no objeto. Por exemplo, podem ser usadas etiquetas de texto como "Web Site 4D" ou "Siga este link para obter mais informa\xe7\xe3o." Tamb\xe9m pode utilizar o endere\xe7o mesmo, por exemplo "',(0,t.jsx)(n.a,{href:"http://www.4d.com",children:"http://www.4d.com"}),'".']}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"enderecoURL"}),', passe o endere\xe7o completa a qual deseja conectar a p\xe1gina do navegador, por exemplo "',(0,t.jsx)(n.a,{href:"http://www.4D.com",children:"http://www.4D.com"}),'".']}),"\n",(0,t.jsxs)(n.p,{children:["Os par\xe1metros opcionais ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"})," designam uma sele\xe7\xe3o de texto em ",(0,t.jsx)(n.em,{children:"objeto"}),". Os valores ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"})," expressam uma sele\xe7\xe3o de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes no texto."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Se passar ",(0,t.jsx)(n.em,{children:"inicioSel,"})," ",(0,t.jsx)(n.em,{children:"textoURL"})," \xe9 inserido na localiza\xe7\xe3o especificada."]}),"\n",(0,t.jsxs)(n.li,{children:["Se omitir ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"}),", ",(0,t.jsx)(n.em,{children:"textoURL"})," \xe9 inserido na localiza\xe7\xe3o do cursor."]}),"\n",(0,t.jsxs)(n.li,{children:["Se passar ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"}),", ",(0,t.jsx)(n.strong,{children:"ST INSERT URL"})," substitui o texto nesta sele\xe7\xe3o por ",(0,t.jsx)(n.em,{children:"textoURL"}),". Se o valor de ",(0,t.jsx)(n.em,{children:"fimSel"})," \xe9 maior que o n\xfamero total de caracteres no objeto, todos os caracteres entre ",(0,t.jsx)(n.em,{children:"inicioSel"})," e o final do texto s\xe3o substitu\xeddos por ",(0,t.jsx)(n.em,{children:"textoURL"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["4D oferece constantes pr\xe9 definidas para que possa designar automaticamente os limites de sele\xe7\xe3o nos par\xe2metros ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"}),'. Estas constantes se encontram no tema "',(0,t.jsx)(n.em,{children:"Texto multi estilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST End highlight"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"-1001"}),(0,t.jsx)(n.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST End text"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Start highlight"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"-1000"}),(0,t.jsx)(n.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Start text"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(*) Deve passar um nome de objeto em ",(0,t.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Se passar uma refer\xeancia a um campo ou vari\xe1vel, o comando se aplica a todo o texto do objeto."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": se ",(0,t.jsx)(n.em,{children:"inicioSel"})," \xe9 maior que ",(0,t.jsx)(n.em,{children:"fimSel"})," (exceto quando ",(0,t.jsx)(n.em,{children:"fimSel"})," \xe9 0) , o comando n\xe3o faz nada e a vari\xe1vel OK toma o valor 0."]}),"\n",(0,t.jsxs)(n.p,{children:["Uma vez inserido o link, \xe9 ativo: o uso de ",(0,t.jsx)(n.strong,{children:"Ctrl+clique"})," (Windows) ou ",(0,t.jsx)(n.strong,{children:"Comando+clique"})," (OS X) abre uma p\xe1gina do navegador por padr\xe3o no endere\xe7o especificado no par\xe2metro ",(0,t.jsx)(n.em,{children:"enderecoURL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea deseja inserir um link ao web site de 4D para substituir o texto selecionado no objeto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vTitle:="4D Web Site"\n\xa0vURL:="http://www.4d.com/"\n\xa0ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/st-get-url",children:"ST GET URL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1280"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var o=s(667294);let t={},r=o.createContext(t);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);