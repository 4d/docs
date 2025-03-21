"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98490"],{285627:function(e,n,d){d.r(n),d.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-set-action","title":"OBJECT SET ACTION","description":"OBJECT SET ACTION ( { ;} objeto ; acao* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-action.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-action","permalink":"/docs/pt/20-R7/commands/object-set-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-action","title":"OBJECT SET ACTION","slug":"/commands/object-set-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT MOVE","permalink":"/docs/pt/20-R7/commands/object-move"},"next":{"title":"OBJECT SET AUTO SPELLCHECK","permalink":"/docs/pt/20-R7/commands/object-set-auto-spellcheck"}}'),r=d("785893"),t=d("250065");let o={id:"object-set-action",title:"OBJECT SET ACTION",slug:"/commands/object-set-action",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET ACTION"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"acao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se for especificado, objeto \xe9 um nome de objeto (cadeia) Se for omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nome de objeto (se * for especificado ) ou",(0,r.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"acao"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"A\xe7\xe3o para associar"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"OBJECT SET ACTION"})," modifica, para o processo atual, a a\xe7\xe3o estandarte associada ao objeto ou aos objetos designado(s) pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," As a\xe7\xf5es padr\xe3o tamb\xe9m podem configuradas para a sess\xe3o no editor de Formul\xe1rios usando a lista de Propriedades (ver ",(0,r.jsx)(n.em,{children:"A\xe7\xf5es padr\xf5es"})," no manual de Refer\xeancia Design)."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"acao"}),", passe uma string contendo o nome da a\xe7\xe3o padr\xe3o associada com o objeto. Opcionalmente a a\xe7\xe3o pode ter par\xe2metros. para saber mais veja a se\xe7\xe3o ",(0,r.jsx)(n.em,{children:"A\xe7\xf5es padr\xf5es"}),' no manual derefer\xeancia 4D Design. Pode tamb\xe9m passar umas das constantes abaixo, encontradas no tema "',(0,r.jsx)(n.em,{children:"A\xe7\xe3o estandarte"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak accept"}),(0,r.jsx)(n.td,{children:"accept"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak add subrecord"}),(0,r.jsx)(n.td,{children:"addSubrecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak automatic splitter"}),(0,r.jsx)(n.td,{children:"automaticSplitter"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak cancel"}),(0,r.jsx)(n.td,{children:"cancel"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak clear"}),(0,r.jsx)(n.td,{children:"clear"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak compute expressions"}),(0,r.jsx)(n.td,{children:"computeExpressions"}),(0,r.jsx)(n.td,{children:"Atualiza todas as express\xf5es din\xe2micas na \xe1rea"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak copy"}),(0,r.jsx)(n.td,{children:"copy"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak cut"}),(0,r.jsx)(n.td,{children:"cut"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak database settings"}),(0,r.jsx)(n.td,{children:"databaseSettings"}),(0,r.jsx)(n.td,{children:"Mostra o di\xe1logo de Configura\xe7\xe3o do banco de dados padr\xe3o."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak delete record"}),(0,r.jsx)(n.td,{children:"deleteRecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak delete subrecord"}),(0,r.jsx)(n.td,{children:"deleteSubrecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak display subrecord"}),(0,r.jsx)(n.td,{children:"displaySubrecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak edit subrecord"}),(0,r.jsx)(n.td,{children:"editSubrecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak first page"}),(0,r.jsx)(n.td,{children:"firstPage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak first record"}),(0,r.jsx)(n.td,{children:"firstRecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font bold"}),(0,r.jsx)(n.td,{children:"fontBold"}),(0,r.jsx)(n.td,{children:"Alterna o atributo de fonte em negrito"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font color dialog"}),(0,r.jsx)(n.td,{children:"color/showDialog"}),(0,r.jsx)(n.td,{children:"Mostra o di\xe1logo da cor de fonte do sistema"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font italic"}),(0,r.jsx)(n.td,{children:"fontItalic"}),(0,r.jsx)(n.td,{children:"Ativa o atributo de fonte em cursiva"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font linethrough"}),(0,r.jsx)(n.td,{children:"fontLinethrough"}),(0,r.jsx)(n.td,{children:"Ativa o atributo de fonte riscado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font show dialog"}),(0,r.jsx)(n.td,{children:"font/showDialog"}),(0,r.jsx)(n.td,{children:"Mostra o di\xe1logo de seletor de fonte de sistema"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font show dialog"}),(0,r.jsx)(n.td,{children:"font/showDialog"}),(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u30D4\u30C3\u30AB\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font style"}),(0,r.jsx)(n.td,{children:"fontStyle"}),(0,r.jsx)(n.td,{children:"Mostra o submenu de estilo de fonte padr\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font style"}),(0,r.jsx)(n.td,{children:"fontStyle"}),(0,r.jsx)(n.td,{children:"\u6A19\u6E96\u306E\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak font underline"}),(0,r.jsx)(n.td,{children:"fontUnderline"}),(0,r.jsx)(n.td,{children:"Ativa o atributo de fonte de sublinhado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak freeze expressions"}),(0,r.jsx)(n.td,{children:"freezeExpressions"}),(0,r.jsx)(n.td,{children:"Congela todas as express\xf5es din\xe2micas na \xe1rea"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak goto page"}),(0,r.jsx)(n.td,{children:"gotoPage"}),(0,r.jsx)(n.td,{children:'par\xe2metro: "?value=pageNumber"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak last page"}),(0,r.jsx)(n.td,{children:"lastPage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak last record"}),(0,r.jsx)(n.td,{children:"lastRecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak msc"}),(0,r.jsx)(n.td,{children:"msc"}),(0,r.jsxs)(n.td,{children:["Mostra a janela ",(0,r.jsx)(n.em,{children:"Centro de seguran\xe7a e manuten\xe7\xe3o"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak next page"}),(0,r.jsx)(n.td,{children:"nextPage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak next record"}),(0,r.jsx)(n.td,{children:"nextRecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak none"}),(0,r.jsx)(n.td,{children:'""'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak open back url"}),(0,r.jsx)(n.td,{children:"openBackURL"}),(0,r.jsx)(n.td,{children:"Abre a URL anterior na sequ\xeancia de navega\xe7\xe3o realizada pelo usu\xe1rio na \xe1rea Web."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak open forward url"}),(0,r.jsx)(n.td,{children:"openForwardURL"}),(0,r.jsx)(n.td,{children:"Abre a seguinte URL na sequ\xeancia de navega\xe7\xe3o realizada pelo usu\xe1rio na \xe1rea Web."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak paste"}),(0,r.jsx)(n.td,{children:"paste"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak previous page"}),(0,r.jsx)(n.td,{children:"previousPage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak previous record"}),(0,r.jsx)(n.td,{children:"previousRecord"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak quit"}),(0,r.jsx)(n.td,{children:"quit"}),(0,r.jsx)(n.td,{children:'Mostra um di\xe1logo de confirma\xe7\xe3o "Tem certeza?",se confirmar, sai da aplica\xe7\xe3o 4D'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak redo"}),(0,r.jsx)(n.td,{children:"redo"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak refresh current url"}),(0,r.jsx)(n.td,{children:"refreshCurrentURL"}),(0,r.jsx)(n.td,{children:"Recarrega os conte\xfados atuais da \xe1rea Web."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak return to design mode"}),(0,r.jsx)(n.td,{children:"design"}),(0,r.jsx)(n.td,{children:"Traz as janelas e las barras de menu do ambiente Desenho 4D ao primeiro plano."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak select all"}),(0,r.jsx)(n.td,{children:"selectAll"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak show clipboard"}),(0,r.jsx)(n.td,{children:"showClipboard"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak show reference"}),(0,r.jsx)(n.td,{children:"visibleReferences"}),(0,r.jsx)(n.td,{children:"Exibe todas as express\xf5es din\xe2micas como refer\xeancias"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak stop loading url"}),(0,r.jsx)(n.td,{children:"stopLoadingURL"}),(0,r.jsx)(n.td,{children:"P\xe1ra o carregamento da p\xe1gina ou objetos da URL atual na \xe1rea Web."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak undo"}),(0,r.jsx)(n.td,{children:"undo"}),(0,r.jsx)(n.td,{children:"O alvo dessa a\xe7\xe3o \xe9 sempre o objeto que tem o foco do teclado"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Nota de Compatibildade: Constantes legados (com o prefixo _o_ no tema) est\xe3o obsoletas desde 4D v16 R3. Entretanto s\xe3o ainda mantidas por compatibilidade."}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Se quiser associar a a\xe7\xe3o padr\xe3o ",(0,r.jsx)(n.strong,{children:"Validate"})," com um bot\xe3o:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET ACTION(*;"bValidate";ak accept)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-get-action",children:"OBJECT Get action"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1259"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return a},a:function(){return o}});var s=d(667294);let r={},t=s.createContext(r);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);