"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18532"],{712114:function(e,a,o){o.r(a),o.d(a,{default:()=>p,frontMatter:()=>n,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/get-pasteboard-data","title":"GET PASTEBOARD DATA","description":"GET PASTEBOARD DATA ( tipoDados ; dados )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pasteboard-data.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data","permalink":"/docs/pt/commands/get-pasteboard-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pasteboard-data","title":"GET PASTEBOARD DATA","slug":"/commands/get-pasteboard-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get file from pasteboard","permalink":"/docs/pt/commands/get-file-from-pasteboard"},"next":{"title":"GET PASTEBOARD DATA TYPE","permalink":"/docs/pt/commands/get-pasteboard-data-type"}}'),d=o("785893"),r=o("250065");let n={id:"get-pasteboard-data",title:"GET PASTEBOARD DATA",slug:"/commands/get-pasteboard-data",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"GET PASTEBOARD DATA"})," ( ",(0,d.jsx)(a.em,{children:"tipoDados"})," ; ",(0,d.jsx)(a.em,{children:"dados"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Par\xe2metro"}),(0,d.jsx)(a.th,{children:"Tipo"}),(0,d.jsx)(a.th,{}),(0,d.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"tipoDados"}),(0,d.jsx)(a.td,{children:"Text"}),(0,d.jsx)(a.td,{children:"\u2192"}),(0,d.jsx)(a.td,{children:"Tipo de dados a adicionar"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"dados"}),(0,d.jsx)(a.td,{children:"Blob"}),(0,d.jsx)(a.td,{children:"\u2190"}),(0,d.jsx)(a.td,{children:"Dados extra\xeddos da \xe1rea de transfer\xeancia"})]})]})]}),"\n",(0,d.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(a.p,{children:["O comando GET PASTEBOARD DATA devolve no campo ou vari\xe1vel de tipo BLOB ou na vari\xe1vel ",(0,d.jsx)(a.em,{children:"dados"}),", os dados que se encontram na \xe1rea de transfer\xeancia e cujo tipo se passa em ",(0,d.jsx)(a.em,{children:"tipoDados"}),".(Se a c\xf3pia contiver texto copiado dentro de 4D, ent\xe3o o conjunto de caracteres do BLOB \xe9 provavelmente UTF-16)"]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Nota:"})," No contexto de opera\xe7\xf5es copiar/colar, o espa\xe7o de copiar corresponde ao clipboard."]}),"\n",(0,d.jsxs)(a.p,{children:["Passe em ",(0,d.jsx)(a.em,{children:"tipoDados"})," um valor que defina o tipo de dados a extrair. Pode passar uma assinatura 4D, um tipo UTI (Mac OS), um nome/n\xfamero de formato (Windows), ou um tipo de 4 caracteres (compatibilidade). Para maior informa\xe7\xe3o sobre estes tipos, consulte a se\xe7\xe3o ",(0,d.jsx)(a.em,{children:"Gerenciar \xe1rea de transfer\xeancia"}),"."]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Nota:"})," N\xe3o pode ler arquivos de tipo dados com este comando, para fazer isso deve usar o comando ",(0,d.jsx)(a.a,{href:"/docs/pt/commands/get-file-from-pasteboard",children:"Get file from pasteboard"}),"."]}),"\n",(0,d.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(a.p,{children:["Os m\xe9todos de objeto a seguir s\xe3o os dos bot\xf5es que copiam e colam dados no array ",(0,d.jsx)(a.em,{children:"asOp\xe7oes"})," (menu pop-up, lista pop up,...) localizado num formul\xe1rio:"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto bCopiar_asOp\xe7oes\n\xa0If(Size of array(asOp\xe7oes)>0)\xa0// H\xe1 algo para copiar?\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(asOp\xe7oes;$vxClipData)\xa0// Acumular os elementos do array em um BLOB\n\xa0\xa0\xa0\xa0CLEAR PASTEBOARD\xa0// Esvaziar a \xe1rea de transfer\xeancia\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("artx";$vxClipData)\xa0// Note que o tipo de dados \xe9 escolhido arbitrariamente\n\xa0End if\n\xa0\n\xa0\xa0// M\xe9todo de objeto bColarOp\xe7oes\n\xa0If(Pasteboard data size("artx")>0)\xa0// H\xe1 dados de tipo "artx" na \xe1rea de transfer\xeancia?\n\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("artx";$vxClipData)\xa0// Extrair os dados da \xe1rea de transfer\xeancia\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vxClipData;asOp\xe7oes)\xa0// Preencher o array com os dados do BLOB\n\xa0\xa0\xa0\xa0asOp\xe7oes:=0\xa0// Reiniciar o elemento selecionado do array\n\xa0End if\n'})}),"\n",(0,d.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsx)(a.p,{children:"Se os dados s\xe3o extra\xeddos corretamente, a vari\xe1vel OK toma o valor 1; do contr\xe1rio OK toma o valor 0 e \xe9 gerado um erro."}),"\n",(0,d.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/docs/pt/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,d.jsx)(a.br,{}),"\n",(0,d.jsx)(a.a,{href:"/docs/pt/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,d.jsx)(a.br,{}),"\n",(0,d.jsx)(a.a,{href:"/docs/pt/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,d.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{}),(0,d.jsx)(a.th,{})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"N\xfamero do comando"}),(0,d.jsx)(a.td,{children:"401"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Thread-seguro"}),(0,d.jsx)(a.td,{children:"\u2717"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(a.td,{children:"OK"})]})]})]})]})}function p(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return t},a:function(){return n}});var s=o(667294);let d={},r=s.createContext(d);function n(e){let a=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);