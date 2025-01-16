"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83840"],{864733:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-list-item-parameter","title":"SET LIST ITEM PARAMETER","description":"SET LIST ITEM PARAMETER ( { ;} lista ; refElem |  ; seletor ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-list-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-parameter","permalink":"/docs/pt/20-R7/commands/set-list-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-list-item-parameter","title":"SET LIST ITEM PARAMETER","slug":"/commands/set-list-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM ICON","permalink":"/docs/pt/20-R7/commands/set-list-item-icon"},"next":{"title":"SET LIST ITEM PROPERTIES","permalink":"/docs/pt/20-R7/commands/set-list-item-properties"}}'),s=a("785893"),r=a("250065");let o={id:"set-list-item-parameter",title:"SET LIST ITEM PARAMETER",slug:"/commands/set-list-item-parameter",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET LIST ITEM PARAMETER"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,s.jsx)(n.em,{children:"seletor"})," ; ",(0,s.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lista"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refElem | *"}),(0,s.jsx)(n.td,{children:"Operador, Inteiro longo"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia do elemento, ou 0 para o \xfaltimo elemento adicionado \xe0 lista ou * para o elemento da lista atualmente selecionada"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"seletor"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Constante do par\xe2metro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valor"}),(0,s.jsx)(n.td,{children:"Text, Boolean, Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor do par\xe2metro"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SET LIST ITEM PARAMETER permite modificar o par\xe2metro ",(0,s.jsx)(n.em,{children:"seletor"})," para o elemento ",(0,s.jsx)(n.em,{children:"refElem"})," da lista hier\xe1rquica cuja refer\xeancia ou nome de objeto s\xe3o passadas no par\xe2metro ",(0,s.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passa o primeiro par\xe2metro opcional *, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o da lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,s.jsx)(n.em,{children:"RefLista"}),"). Se utiliza uma s\xf3 representa\xe7\xe3o de lista ou trabalha com elementos estruturais (o segundo * \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contr\xe1rio, se utiliza v\xe1rias representa\xe7\xf5es de uma mesma lista e trabalha com o elemento atual (se passa o segundo *), a sintaxe baseada no nome do objeto se necessita j\xe1 que cada representa\xe7\xe3o pode ter seu pr\xf3prio elemento atual."]}),"\n",(0,s.jsxs)(n.p,{children:["Pode passar um n\xfamero de refer\xeancia em ",(0,s.jsx)(n.em,{children:"refElem"}),". Se este n\xfamero n\xe3o corresponde a nenhum elemento da lista, o comando n\xe3o faz nada. Tamb\xe9m pode passar 0 em ",(0,s.jsx)(n.em,{children:"refElem"}),' para obter a fonte do \xfaltimo elemento adicionado \xe0 lista (utilizando \u201C[#title id="213"/).']}),"\n",(0,s.jsxs)(n.p,{children:["Finalmente, pode passar * em ",(0,s.jsx)(n.em,{children:"refElem"}),": neste caso, o comando se aplicar\xe1 ao elemento atual da lista. Se v\xe1rios elementos s\xe3o selecionados manualmente, trto elemento atual \xe9 o \xfaltimo selecionado. Se nenhum elemento estiver selecionado, o comando n\xe3o faz nada."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"seletor"}),", pode passar"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["uma das constante abaixo (encontradas no tema \u201C",(0,s.jsx)(n.em,{children:"Listas hier\xe1rquicas"}),"\u201D).",(0,s.jsx)(n.br,{}),"\n| Constante                  | Tipo   | Valor                      | Coment\xe1rio                                                                                                                                                                                                                                                                       |",(0,s.jsx)(n.br,{}),"\n| -------------------------- | ------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |",(0,s.jsx)(n.br,{}),"\n| Additional text            | Cadeia | 4D_additional_text       | Esta constante \xe9 usada para adicionar texto \xe0 direita do item ",(0,s.jsx)(n.em,{children:"itemRef"}),". Esse t\xedtulo adicional sempre vai ser exibido na parte direita da lista, mesmo quando o usu\xe1rio mover a barra de rolagem horizontal. Quando usar esta constante, passe o texto a ser exibido em ",(0,s.jsx)(n.em,{children:"value"}),". |",(0,s.jsx)(n.br,{}),"\n| Associated standard action | Cadeia | 4D_standard_action_name | Associa uma a\xe7\xe3o padr\xe3o com o ",(0,s.jsx)(n.em,{children:"itemRef"}),". Neste caso deve passar no par\xe2metro ",(0,s.jsx)(n.em,{children:"valor"}),' o nome de uma a\xe7\xe3o padr\xe3o com um par\xe2metro, por exemplo "fontSize?value=10pt". Para saber mais veja a se\xe7\xe3o ',(0,s.jsx)(n.em,{children:"A\xe7\xf5es padr\xf5es"})," no manual ",(0,s.jsx)(n.em,{children:"Design Reference"}),".                                   |"]}),"\n",(0,s.jsxs)(n.li,{children:["Custom selector: pode passar em ",(0,s.jsx)(n.em,{children:"seletor"})," todo texto personalizado e associ\xe1-lo com um valor de tipo texto, num\xe9rico ou booleano. Este valor ser\xe1 armazenado com o elemento e poder\xe1 ser recuperado utilizando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-list-item-parameter",children:"GET LIST ITEM PARAMETER"}),". Este princ\xedpio permite configurar todo tipo de interface associado com as listas hier\xe1rquicas. Por exemplo, em uma lista de nomes de clientes, pode guardar a idade de cada pessoa e mostr\xe1-la unicamente quando o elemento correspondente seja selecionado."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser estabelecer uma lista de escolhas de um pop menu hier\xe1rquico, formando uma lista personalizada de valores de fontes usando as a\xe7\xe3o padr\xe3o"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$myList:=New list\n\xa0\nAPPEND TO LIST($myList;ak standard action title;1)\n\xa0APPEND TO LIST($myList;ak standard action title;2)\n\xa0APPEND TO LIST($myList;ak standard action title;3)\n\xa0SET LIST ITEM PARAMETER($myList;1;Associated standard action;"fontSize?value=10pt")\n\xa0SET LIST ITEM PARAMETER($myList;2;Associated standard action;"fontSize?value=12pt")\n\xa0SET LIST ITEM PARAMETER($myList;3;Associated standard action;"fontSize?value=14pt")\n\xa0OBJECT SET LIST BY REFERENCE(*;"popup";Choice list;$myList)\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(604544).Z+"",width:"168",height:"79"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/append-to-list",children:"APPEND TO LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/action-info",children:"Action info"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-list-item-parameter",children:"GET LIST ITEM PARAMETER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-list-item-parameter-arrays",children:"GET LIST ITEM PARAMETER ARRAYS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/insert-in-list",children:"INSERT IN LIST"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"986"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},604544:function(e,n,a){a.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAABPCAIAAADwaBnZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAARBSURBVHhe7Zw/SyNBGMb3E9nY6NcIBwem9MgXsD+sTCGcmM7iQOMVFyy0uTSxCSeYIlhJOBAEMRi4oLG7cu+Zmd3sn2ST2TV/ZneeHw9hMvum+s07s4FNnHdiJUK88+mEKXCU6Rie+G7/H1PIULyloXhLQ/GWhuItDcVbGoq3NGnEn+86zu5x5K1gY/8+qGFyEk3x93ubjlPeLQXir/wxBlt7N2pyRjTLmBUlTccHsmW7l6/U/OX+lkbTU7xZySg+Iju0CGSk4/PDjeAgwIxPpJJZfH78+h2bQSYnlyTecTYPLzG+gX7V6HI1sOOXnPafv6XPO9++/wxP4i0mcSk8ubSO9x0fl53SeXySWV5i7qdaRzKKn3nGhx2Lu0KKX3HG7pOsI1nFiz1cjSeNYsb/jjerjFlilPsk60hW8QiaXiIbOhzhuFTeil3Fni/gzd2qAuVJ1pFU4jXD5s5BKN7SULylWYZ4JgeheEtD8ZaG4i0NxVuaOeKZAkeZjiHEfyGFRpmO4Yl3SUGheEuheEtJI75ZcZxK03uj3gq2jx68GZIfNMU/HG1DeqUSiId2NcZAR71mGVkRkNvv9weDwXA4fHt7G41GU8UrxrIjQywKDaUUbxaQ2+12e73e8/Mz3OuKj8gOLQKJdNwUe4R/EGDGJ1JJ1gbkNhqNVqsF9y8vL2j6hYj3T35xRKiRXA3+J8jagdxarQb36Hvs+YsSP3mR4s0CcqvVar1e73Q62O1fX1+1xIeHE2d82LFoeYo3EMg9ODg4Ozu7vb1NI34sdIpRzPhTs8rIOskqHgi/U2/XhONKRd3bBVe98olqshZSideEzZ0DKN5SKN5S5ojfPHGZQobiLQ3FW5o04q/F2fDVf/v1UZ4Vrvt0F6phchJd8acj131022PxF+7ptXcJk6cX3nhGNMuY1SRNx0t5444fB2uC4nOXBYifnBSOr92n0EGAGY/HSCWzrnxUPE76yTNeaB65OxhfCP2q0cVqYMcbkw+JxyY/9c4u7Bgroy3vBijeqGQXP+NoDztGGcUbmKzi8dUu+bRGmbcTyK1efYTijUpG8Tt36lbNI7bho6ztf8tX7Y543/t5c2dG0onXDJvb/FC8paF4SzNHvDyWSQGheEuheEtJI148Jxt/SFY8P83nrHKIpnjhN/prWYV8ZlpLPB/EM4s0HS/kRcRjOVSOtH4rS/Gm8QHxQntTvMaFSsf8tazZZBbvC58unr+WNZ2M4gPdSR3vT/mfoXizyCYegygRp2HHouUp3kAydnxAwlbvzY29U7xhLEk8fy1rOqnEa8LmzgEUbykUbylzxJMCkyg+Rr/f73a7jUajVqtVq1V8jOSaxL87izEYDHq9XqvVQnW9XsdiIbkm8Q8OYwyHQ+wJqMMa6XQ62CJIrkn8S9MYWBSowOrAzoBqkncS/8Q4Bq4BFAHcC5C8o1QqrZ7j9/f/7YfxWxM+R7gAAAAASUVORK5CYII="},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return o}});var t=a(667294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);