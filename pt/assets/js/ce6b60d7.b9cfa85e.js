"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90785"],{648790:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-element-value","title":"SAX GET XML ELEMENT VALUE","description":"SAX GET XML ELEMENT VALUE ( documento ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/sax-get-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-element-value","permalink":"/docs/pt/commands/sax-get-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-element-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sax-get-xml-element-value","title":"SAX GET XML ELEMENT VALUE","slug":"/commands/sax-get-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML ELEMENT","permalink":"/docs/pt/commands/sax-get-xml-element"},"next":{"title":"SAX GET XML ENTITY","permalink":"/docs/pt/commands/sax-get-xml-entity"}}'),o=t("785893"),r=t("250065");let d={id:"sax-get-xml-element-value",title:"SAX GET XML ELEMENT VALUE",slug:"/commands/sax-get-xml-element-value",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SAX GET XML ELEMENT VALUE"})," ( ",(0,o.jsx)(n.em,{children:"documento"})," ; ",(0,o.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"documento"}),(0,o.jsx)(n.td,{children:"Time"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valor"}),(0,o.jsx)(n.td,{children:"Text, Blob"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Valor do elemento"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando SAX GET XML ELEMENT VALUE permite recuperar o valor de um elemento XML existente no documento XML referenciado por ",(0,o.jsx)(n.em,{children:"documento"}),". Este comando deve ser chamado no contexto de um evento XML DATA SAX. Para maior informa\xe7\xe3o sobre os eventos SAX, consulte a descri\xe7\xe3o do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"})," ."]}),"\n",(0,o.jsx)(n.p,{children:"Passe no par\xe2metro valor uma vari\xe1vel de tipo Texto ou BLOB. Se passa um BLOB, o comando automaticamente tentar\xe1 decodific\xe1-lo em base64."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"O c\xf3digo XML abaixo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-XML",children:'<ElementoRaiz>\n\xa0\xa0\xa0<Filho Att1="111" Att2="222" Att3="333">MyText</Filho>\n</ElementoRaiz>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["A instru\xe7\xe3o abaixo \u201CMeuText\u201D em ",(0,o.jsx)(n.em,{children:"vValor"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ELEMENT VALUE(DocRef;vValor)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Se o comando se executa corretamente, a vari\xe1vel sistema OK toma o valor 1. Caso contr\xe1rio toma o valor 0 e se gera um erro."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/sax-add-xml-element-value",children:"SAX ADD XML ELEMENT VALUE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"877"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let o={},r=s.createContext(o);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);