"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29801"],{962455:function(e,o,t){t.r(o),t.d(o,{metadata:()=>d,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>r});var d=JSON.parse('{"id":"commands-legacy/method-set-code","title":"METHOD SET CODE","description":"METHOD SET CODE ( rota ; codigo {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-code.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-code","permalink":"/docs/pt/commands/method-set-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-code","title":"METHOD SET CODE","slug":"/commands/method-set-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/pt/commands/method-set-attributes"},"next":{"title":"METHOD SET COMMENTS","permalink":"/docs/pt/commands/method-set-comments"}}'),s=t("785893"),n=t("250065");let r={id:"method-set-code",title:"METHOD SET CODE",slug:"/commands/method-set-code",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"METHOD SET CODE"})," ( ",(0,s.jsx)(o.em,{children:"rota"})," ; ",(0,s.jsx)(o.em,{children:"codigo"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"rota"}),(0,s.jsx)(o.td,{children:"Text, Text array"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Texto ou array texto que cont\xe9m uma ou mais rotas de m\xe9todo"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"codigo"}),(0,s.jsx)(o.td,{children:"Text, Text array"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"C\xf3digo dos m\xe9todos designados"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se passado = o comando aplica ao banco de dados local quando \xe9 executado de um componente (par\xe2metro ignorado fora deste contexto)"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"METHOD SET CODE"})," modifica o c\xf3digo dos m\xe9todos designados pelo par\xe2metro ",(0,s.jsx)(o.em,{children:"rota"})," com o conte\xfado passado no par\xe2metro ",(0,s.jsx)(o.em,{children:"codigo"}),". Este comando pode acessar ao c\xf3digo de todos os tipos de m\xe9todos: m\xe9todos de banco, triggers, m\xe9todos projeto, m\xe9todos formul\xe1rio e m\xe9todos objeto. Se um m\xe9todo n\xe3o existir, \xe9 criado com os conte\xfados ",(0,s.jsx)(o.em,{children:"codigo"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"O comando pode acessar o c\xf3digo existente de todos os tipos de m\xe9todos: m\xe9todos de banco de dados, triggers, m\xe9todos projeto, m\xe9todos formul\xe1rio e m\xe9todos objeto."}),"\n",(0,s.jsx)(o.p,{children:"Se um m\xe9todo n\xe3o existir, \xe9 criado com o conte\xfados de c\xf3digo."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota para projetos:"}),"\nCriar um novo m\xe9todo com esse comando s\xf3 \xe9 poss\xedvel para m\xe9todos de bancos de dados, triggers e m\xe9todos de projeto",(0,s.jsx)(o.br,{}),"\nO c\xf3digo \xe9 salvo com ou sem tokens em projetos criados recentemente dependendo da op\xe7\xe3o Include tokens in project source files nas Prefer\xeancias."]}),"\n",(0,s.jsx)(o.p,{children:"Pode usar dois tipos de sintaxe, baseadas em arrays texto ou em vari\xe1veis texto:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// vari\xe1veis texto\n\xa0var tVcode : Text\n\xa0METHOD SET CODE(tVpath;tVcode)\xa0// c\xf3digo de um s\xf3 m\xe9todo\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// arrays texto\n\xa0ARRAY TEXT(arrCodes;0)\n\xa0METHOD SET CODE(arrPaths;arrCodes)\xa0// c\xf3digo de v\xe1rios m\xe9todos\n"})}),"\n",(0,s.jsx)(o.p,{children:"N\xe3o \xe9 poss\xedvel misturar as duas sintaxes."}),"\n",(0,s.jsx)(o.p,{children:"Se passar uma rota de acesso errada, o comando n\xe3o faz nada."}),"\n",(0,s.jsxs)(o.p,{children:["Quando se chama METHOD SET CODE, os atributos dos m\xe9todos se reinicializam por padr\xe3o. No entanto, se a primeira linha do ",(0,s.jsx)(o.em,{children:"codigo"})," de um m\xe9todo cont\xe9m metadados v\xe1lidos (expressados em JSON), s\xe3o usados para definir os atributos do m\xe9todo e a primeira linha n\xe3o \xe9 inserida. Exemplo de metadados:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// %attributes = {"invisible":true,"lang":"fr","folder":"Security"}\n'})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": Estes metadados s\xe3o gerados automaticamente pelo comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/method-get-code",children:"METHOD GET CODE"}),". Para saber mais sobre atributos suportados, veja o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"}),"."]}),"\n",(0,s.jsx)(o.p,{children:'Concernente a propriedade "folder" dos metadados:'}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Se esta propriedade est\xe1 presente e corresponde a uma pasta v\xe1lida, o m\xe9todo se localiza em sua pasta pai,"}),"\n",(0,s.jsxs)(o.li,{children:["Se esta propriedade n\xe3o est\xe1 presente ou se a pasta j\xe1 n\xe3o existe, o comando n\xe3o muda a n\xedvel da pasta pai,",(0,s.jsx)(o.br,{}),"\nQuando essa propriedade conter uma string vazia, o m\xe9todo \xe9 posto no n\xedvel da raiz."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Pode executar o comando de uma componente, mas neste caso voc\xea deve passar o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"})," porque o acesso ao c\xf3digo do componente \xe9 somente leitura. Se omitir o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"})," neste contexto, o erro -9763 \xe9 gerado."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Este exemplo exporta e importa a totalidade dos m\xe9todos projeto de uma aplica\xe7\xe3o:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0$root_t:=Get 4D folder(Database folder)+"methods"+Folder separator\n\xa0ARRAY TEXT($fileNames_at;0)\n\xa0CONFIRM("Import or export methods?";"Import";"Export")\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0DOCUMENT LIST($root_t;$fileNames_at)\n\xa0\xa0\xa0\xa0For($loop_l;1;Size of array($fileNames_at))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$filename_t:=$fileNames_at{$loop_l}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))\n\xa0\xa0\xa0\xa0End for\n\xa0Else\n\xa0\xa0\xa0\xa0If(Test path name($root_t)#Is a folder)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE FOLDER($root_t;*)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0METHOD GET PATHS(Path project method;$fileNames_at)\n\xa0\xa0\xa0\xa0METHOD GET CODE($fileNames_at;$code_at)\n\xa0\xa0\xa0\xa0For($loop_l;1;Size of array($fileNames_at))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$filename_t:=$fileNames_at{$loop_l}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET BLOB SIZE($blob_x;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0SHOW ON DISK($root_t)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/method-get-code",children:"METHOD GET CODE"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1194"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,t){t.d(o,{Z:function(){return a},a:function(){return r}});var d=t(667294);let s={},n=d.createContext(s);function r(e){let o=d.useContext(n);return d.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(n.Provider,{value:o},e.children)}}}]);