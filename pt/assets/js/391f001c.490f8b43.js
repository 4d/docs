"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70386"],{797647:function(e,o,a){a.r(o),a.d(o,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>t,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/dialog","title":"DIALOG","description":"DIALOG ( {tabela ;} formulario {; dataForm}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dialog.md","sourceDirName":"commands-legacy","slug":"/commands/dialog","permalink":"/docs/pt/commands/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdialog.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dialog","title":"DIALOG","slug":"/commands/dialog","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL","permalink":"/docs/pt/commands/cancel"},"next":{"title":"Modified","permalink":"/docs/pt/commands/modified"}}'),n=a("785893"),s=a("250065");let d={id:"dialog",title:"DIALOG",slug:"/commands/dialog",displayed_sidebar:"docs"},i=void 0,c={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"DIALOG"})," ( {",(0,n.jsx)(o.em,{children:"tabela"})," ;} ",(0,n.jsx)(o.em,{children:"formulario"})," {; ",(0,n.jsx)(o.em,{children:"dataForm"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabela a qual pertence o formul\xe1rio ou se omitida: tabela por padr\xe3o ou uso do formul\xe1rio de projeto"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"formulario"}),(0,n.jsx)(o.td,{children:"Text, Object"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome de tabela ou formul\xe1rio de projeto a mostrar como di\xe1logo"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"dataForm"}),(0,n.jsx)(o.td,{children:"Object"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Dados a associar ao formul\xe1rio"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"*"}),(0,n.jsx)(o.td,{children:"Operador"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Utilizar o mesmo processo"})]})]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comandoDIALOG  apresenta o formul\xe1rio ",(0,n.jsx)(o.em,{children:"formulario"})," ao usu\xe1rio. Este comando se designa para trabalhar com interfaces de usu\xe1rio avan\xe7adas e personalizadas baseadas em formul\xe1rios. Pode utiliz\xe1-lo para mostrar informa\xe7\xe3o do banco de dados ou de outras localiza\xe7\xf5es, ou para oferecer funcionalidades de entrada de dados. Diferente de ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"})," o u ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/modify-record",children:"MODIFY RECORD"}),", ",(0,n.jsx)(o.strong,{children:"DIALOG"})," lhe d\xe1 controle total sobre o formul\xe1rio, seu conte\xfado e os bot\xf5es de navega\xe7\xe3o e valida\xe7\xe3o."]}),"\n",(0,n.jsxs)(o.p,{children:["Este comando geralmente se chama junto com ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/open-form-window",children:"Open form window"})," para mostrar formul\xe1rios sofisticados, como \xe9 mostrado no exemplo abaixo:"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(695686).Z+"",width:"976",height:"679"})}),"\n",(0,n.jsxs)(o.p,{children:["Utilize DIALOG ao inv\xe9s de ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/alert",children:"ALERT"}),", ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/confirm",children:"CONFIRM"})," ou ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/request",children:"Request"})," quando a informa\xe7\xe3o que deve ser apresentada ou reunida \xe9 mais complexa do que esses comandos podem manejar."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," em bancos de dados convertidos, \xe9 poss\xedvel proibir a entrada de dados em campos ou caixas de di\xe1logo (e limitar a entrada de dados a vari\xe1veis unicamente) utilizando uma op\xe7\xe3o nas Prefer\xeancias de 4D (p\xe1gina Compatibilidade). Esta restri\xe7\xe3o corresponde ao funcionamento de vers\xf5es anteriores de 4D."]}),"\n",(0,n.jsxs)(o.p,{children:["No par\xe2metro ",(0,n.jsx)(o.em,{children:"formulario,"})," pode passar"]}),"\n",(0,n.jsxs)(o.p,{children:["o nome de um formul\xe1rio;",(0,n.jsx)(o.br,{}),"\na rota (em sintaxe POSIX) para um arquivo json v\xe1lido contendo uma descri\xe7\xe3o doe formul\xe1rio a usar. Veja ",(0,n.jsx)(o.em,{children:"Form file path"}),";",(0,n.jsx)(o.br,{}),"\num objeto que contenha a descri\xe7\xe3o do formul\xe1rio."]}),"\n",(0,n.jsxs)(o.p,{children:["Opcionalmente, pode passar par\xe2metros ao formul\xe1rio mediante o objeto formData. Toda propriedade de objeto formData estar\xe1 dispon\xedvel desde o contexto de formul\xe1rio mediante o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form",children:"Form"}),'. Por exemplo, se passar um objeto que contenha {"version","12"} em formData, poder\xe1 obter o valor da propriedade "Version" no formul\xe1rio chamando:']}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0$v:=Form.version\xa0//"12"\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Utilizando uma vari\xe1vel local para formData, esta funcionalidade lhe permite passar par\xe2metros de maneira segura a seus formul\xe1rios, qualquer que seja o contexto da chamada. Em particular, se o mesmo formul\xe1rio se chama desde diferentes lugares no mesmo processo, sempre poder\xe1 acessar a seus valores espec\xedficos simplesmente chamando a ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form",children:"Form"}),".myProperty. Al\xe9m disso, dado que os objetos s\xe3o passados por refer\xeancia, se o usu\xe1rio modificar um valor de propriedade no formul\xe1rio, este se guardar\xe1 automaticamente no mesmo objeto.",(0,n.jsx)(o.br,{}),"\nAo combinar o objeto formData e o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form",children:"Form"}),", pode enviar par\xe2metros ao formul\xe1rio ou ler os par\xe2metros em qualquer momento com c\xf3digo limpo e seguro."]}),"\n",(0,n.jsxs)(o.p,{children:["Nota: se n\xe3o passar nenhum par\xe2metro formData ou se passar um objeto indefinido, DIALOG cria automaticamente um novo objeto vazio vinculado ao form e dispon\xedvel atrav\xe9s de comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form",children:"Form"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["O di\xe1logo \xe9 aceito se o usu\xe1rio clicar no bot\xe3o Aceitar ou pressionar a tecla Enter (teclado num\xe9rico) ou se \xe9 executado o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"}),".",(0,n.jsx)(o.br,{}),"\nLembre que a valida\xe7\xe3o n\xe3o faz com que os dados modificados sejam guardados. Se o di\xe1logo inclui campos, deve chamar explicitamente ao comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/save-record",children:"SAVE RECORD"})," para guardar os dados que tenham sido modificados."]}),"\n",(0,n.jsxs)(o.p,{children:["O di\xe1logo \xe9 cancelado se o usu\xe1rio clicar no bot\xe3o Cancelar ou pressionar a tecla de anula\xe7\xe3o Esc ou se s\xe3o executa o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Se passar o par\xe2metro opcional *, o formul\xe1rio \xe9 carregado e mostra na \xfaltima janela do processo atual e o comando termina sua execu\xe7\xe3o enquanto deixa o formul\xe1rio ativo em tela."}),"\n",(0,n.jsxs)(o.p,{children:['Este formul\xe1rio logo reage "normalmente" as a\xe7\xf5es do usu\xe1rio e \xe9 fechado quando o c\xf3digo 4D relacionado com o formul\xe1rio (m\xe9todo de objeto ou m\xe9todo de formul\xe1rio) chama ao comando ',(0,n.jsx)(o.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," ou ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"})," Se o processo atual termina, os formul\xe1rios criados desta forma s\xe3o fechados automaticamente da mesma forma que se tivesse chamado o comando CANCEL. Este modo de abertura \xe9 particularmente \xfatil para mostrar uma palheta flutuante com um documento, sem necessidade de outro processo."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Pode combinar o uso da sintaxe ",(0,n.jsx)(o.strong,{children:"DIALOG"}),"(form;*) com o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/call-form",children:"CALL FORM"})," para estabelecer a comunica\xe7\xe3o entre os formul\xe1rios"]}),"\n",(0,n.jsxs)(o.li,{children:["deve criar uma janela antes de chamar a instru\xe7\xe3o ",(0,n.jsx)(o.strong,{children:"DIALOG"}),'("form";',(0,n.jsx)(o.em,{children:"*"}),"); se n\xe3o for poss\xedvel utilizar a janela de di\xe1logo atual no processo nem a janela criada por padr\xe3o para cada processo. Do contr\xe1rio, se gera o erro -9909."]}),"\n",(0,n.jsxs)(o.li,{children:["Quando for utilizado o par\xe2metro ",(0,n.jsx)(o.em,{children:"*"}),", a janela \xe9 fechada automaticamente depois de uma a\xe7\xe3o padr\xe3o ou uma chamada ao comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," ou ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"}),". N\xe3o tem que gerenciar o fechamento da pr\xf3pria janela."]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(o.p,{children:"O exemplo a seguir pode ser usado para criar uma palheta de ferramentas"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//Mostra a palheta de ferramentas\n\xa0$palette_window:=Open form window("tools";Palette form window)\n\xa0DIALOG("tools";*)\xa0//Devolva o controle imediatamente\n\xa0\xa0//Mostra janela do documento principal\n\xa0$document_window:=Open form window("doc";Standard form window)\n\xa0DIALOG("doc")\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(o.p,{children:'Em um formul\xe1rio exibindo o registro de uma pessoa, um bot\xe3o "Check children" abre um di\xe1logo para verificar/modificar os nomes e idades dos filhos:'}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(206381).Z+"",width:"748",height:"423"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"}),' O campo objeto "Children" \xe9 representado apenas para mostrar sua estrutura para esse exemplo.']}),"\n",(0,n.jsxs)(o.p,{children:["No formul\xe1rio de verifica\xe7\xe3o, se tiver atribuido algumas propriedades de objeto a vari\xe1veis ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form",children:"Form"}),":"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(585745).Z+"",width:"744",height:"275"})}),"\n",(0,n.jsx)(o.p,{children:'Abaixo o c\xf3digo para o bot\xe3o "Check children":'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0var $win;$n;$i : Integer\n\xa0var $save : Boolean\n\xa0ARRAY OBJECT($children;0)\n\xa0OB GET ARRAY([Person]Children;"children";$children)\xa0//obt\xe9m a cole\xe7\xe3o children\n\xa0$save:=False\xa0//initializa a vari\xe1vel save\n\xa0\n\xa0$n:=Size of array($children)\n\xa0If($n>0)\n\xa0\xa0\xa0\xa0$win:=Open form window("Edit_Children";Movable form dialog box)\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Check children for "+[Person]Name)\n\xa0\xa0\xa0\xa0For($i;1;$n)\xa0//para cada child\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DIALOG("Edit_Children";$children{$i})\xa0//exibe di\xe1logo preenchido com valores\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\xa0//o usu\xe1rio clica OK\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$save:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0If($save=True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Person]Children:=[Person]Children\xa0//for\xe7a a atualiza\xe7\xe3o do campo objeto\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0CLOSE WINDOW($win)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("No child to check.")\n\xa0End if\n'})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," Esse exemplo exige que a nota\xe7\xe3o de objeto esteja ativada no banco de dados (ver ",(0,n.jsx)(o.em,{children:"P\xe1gina Compatibilidade"}),")."]}),"\n",(0,n.jsx)(o.p,{children:"O formul\xe1rio exibe informa\xe7\xe3o para cada campo:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(309313).Z+"",width:"522",height:"268"})}),"\n",(0,n.jsx)(o.p,{children:"Se os valores forem editados e o bot\xe3o OK button for clicaod, o campo \xe9 atualizado (o registro pai deve ser salvo depois)."}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(o.p,{children:"O exemplo abaixo usa a rota a um formul\xe1rio json para exibir os registros em uma lista de empregados:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)\n\xa0ALL RECORDS([Personnel])\n\xa0DIALOG("/RESOURCES/OutputPersonnel.json";*)\n'})}),"\n",(0,n.jsx)(o.p,{children:"o que retorna:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(992745).Z+"",width:"301",height:"363"})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,n.jsx)(o.p,{children:"O exemplo abaixo utiliza um aquivo .json como um objeto e modifica algumas propriedades:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0var $form : Object\n\xa0$form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))\n\xa0$form.windowTitle:="The Avengers"\n\xa0$form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"\n\xa0$form.pages[1].objects.myListBox.borderStyle:="double"\n\xa0Open form window($form;Plain form window)\n\xa0DIALOG($form;*)\n'})}),"\n",(0,n.jsx)(o.p,{children:"O formul\xe1rio modificado \xe9 devolvido com o t\xedtulo, o logotipo e a borda modificados:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(941197).Z+"",width:"379",height:"459"})}),"\n",(0,n.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(o.p,{children:"Depois de chamar a DIALOG, se o di\xe1logo \xe9 aceito, a vari\xe1vel sistema OK toma o valor 1; se for cancelado toma o valor 0."}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/call-form",children:"CALL FORM"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form",children:"Form"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/open-window",children:"Open window"})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},309313:function(e,o,a){a.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},695686:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/pict3541609.en-1872c62d67cf7b1512478e54d3e53352.png"},585745:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/pict3541682.en-ab83dd431b22f336d46bb1e38b0e80aa.png"},206381:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/pict3542015.en-70421813b1ccd4fa2f297bcd1aedfc54.png"},992745:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/pict3687439.en-25c836074f1a1e9fbeb7da790404af71.png"},941197:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/pict3688356.en-9c5782b31277d5244713fc620ff3d496.png"},250065:function(e,o,a){a.d(o,{Z:function(){return i},a:function(){return d}});var r=a(667294);let n={},s=r.createContext(n);function d(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);