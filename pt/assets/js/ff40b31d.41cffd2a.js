"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31056"],{749533:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-current-printer","title":"SET CURRENT PRINTER","description":"SET CURRENT PRINTER ( nomImpr )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-current-printer.md","sourceDirName":"commands-legacy","slug":"/commands/set-current-printer","permalink":"/docs/pt/20-R8/commands/set-current-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-current-printer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-current-printer","title":"SET CURRENT PRINTER","slug":"/commands/set-current-printer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Printing page","permalink":"/docs/pt/20-R8/commands/printing-page"},"next":{"title":"SET PRINT MARKER","permalink":"/docs/pt/20-R8/commands/set-print-marker"}}'),o=r("785893"),t=r("250065");let a={id:"set-current-printer",title:"SET CURRENT PRINTER",slug:"/commands/set-current-printer",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," ( ",(0,o.jsx)(n.em,{children:"nomImpr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomImpr"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome da impressora a ser usada"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," utiliza para designar a impressora a utilizar par imprimir com a aplica\xe7\xe3o 4D atual."]}),"\n",(0,o.jsxs)(n.p,{children:["Passe o nome da impressora a selecionar no par\xe2metro ",(0,o.jsx)(n.em,{children:"nomImpr"}),". Para obter una lista de impressoras dispon\xedveis, utilize de antem\xe3o o novo comando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/printers-list",children:"PRINTERS LIST"}),(0,o.jsx)(n.br,{}),"\nSe passa uma string vazia em ",(0,o.jsx)(n.em,{children:"nomImpr"}),", se utilizar\xe1 a impressora atual definida no sistema."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Tambi\xe9n puede designar la impresora PDF gen\xe9rica autom\xe1ticamente, independientemente de la plataforma, pasando la siguiente constante que se encuentra en el tema ",(0,o.jsx)(n.em,{children:"Op\xe7\xf5es de Impress\xe3o"}),":"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Generic PDF driver"}),(0,o.jsx)(n.td,{children:"_4d_pdf_printer"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," esta funcionalidade n\xe3o est\xe1 dispon\xedvel nas vers\xf5es 32 bits de 4D.",(0,o.jsx)(n.br,{}),"Em macOS, declara o driver pr\xe9-determinado como impressora atual. Este driver n\xe3o \xe9 vis\xedvel e n\xe3o est\xe1 na lista devolvida pelo comando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/printers-list",children:"PRINTERS LIST"}),". a rota de acesso ao documento PDF deve ser definida utilizando o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-print-option",children:"SET PRINT OPTION"}),', se n\xe3o, se devolve o erro 3107.Em Windows, declara o driver PDF de Windows (chamado "Microsoft Print to PDF") como impressora atual. Esta constante est\xe1 dispon\xedvel em Windows 10 unicamente, quando est\xe1 instalada a op\xe7\xe3o PDF. Com outras vers\xf5es de Windows, ou quando n\xe3o houver nenhum driver PDF dispon\xedvel, o comando n\xe3o faz nada e a vari\xe1vel ',(0,o.jsx)(n.em,{children:"OK"})," toma o valor 0."]})]})})]}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," deve ser chamado antes de ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-print-option",children:"SET PRINT OPTION"}),", de maneira que as op\xe7\xf5es dispon\xedveis correspondam \xe0 impressora selecionada. Por outra parte, ",(0,o.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," deve ser chamada depois de*_o_PAGE SETUP*, do contr\xe1rio os par\xe2metros da impressora s\xe3o perdidos."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando pode ser utilizado com os comandos",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/print-record",children:"PRINT RECORD"}),", ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/print-form",children:"Print form"}),", e ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/qr-report",children:"QR REPORT"})," e se aplica a todas as impress\xf5es de 4D, incluso no ambiente Desenho."]}),"\n",(0,o.jsx)(n.p,{children:"Os comandos de impress\xe3o devem ser chamadas obrigatoriamente com o par\xe2metro > (onde seja relevante) de modo a que os par\xe2metros especificados n\xe3o sejam perdidos."}),"\n",(0,o.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Se a sele\xe7\xe3o de impressora \xe9 realizada corretamente, a vari\xe1vel sistema OK toma o valor 1. Se ocorre o contr\xe1rio (por exemplo se n\xe3o se encontra a impressora atribu\xedda), a vari\xe1vel sistema OK toma o valor 0 e a impressora atual permanece sem mudan\xe7as."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Cria\xe7\xe3o de um documento PDF em Windows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $pdfpath : Text\n\xa0$pdfpath:=System folder(Desktop)+"test.pdf"\n\xa0SET CURRENT PRINTER(Generic PDF driver)\n\xa0SET PRINT OPTION(Destination option;3;$pdfpath)\n\xa0ALL RECORDS([Table_1])\n\xa0PRINT SELECTION([Table_1];*)\n\xa0SET CURRENT PRINTER("")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-current-printer",children:"Get current printer"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/printers-list",children:"PRINTERS LIST"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"787"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let o={},t=s.createContext(o);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);