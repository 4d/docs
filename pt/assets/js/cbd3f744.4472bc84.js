"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82678],{610992:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var o=a(474848),n=a(28453);const r={id:"set-field-titles",title:"SET FIELD TITLES",slug:"/commands/set-field-titles",displayed_sidebar:"docs"},d=void 0,t={id:"commands-legacy/set-field-titles",title:"SET FIELD TITLES",description:"SET FIELD TITLES ( tabela ; titulosCampos ; numCampos {; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-field-titles.md",sourceDirName:"commands-legacy",slug:"/commands/set-field-titles",permalink:"/docs/pt/commands/set-field-titles",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-field-titles",title:"SET FIELD TITLES",slug:"/commands/set-field-titles",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET CURSOR",permalink:"/docs/pt/commands/set-cursor"},next:{title:"SET TABLE TITLES",permalink:"/docs/pt/commands/set-table-titles"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"SET FIELD TITLES"})," ( ",(0,o.jsx)(s.em,{children:"tabela"})," ; ",(0,o.jsx)(s.em,{children:"titulosCampos"})," ; ",(0,o.jsx)(s.em,{children:"numCampos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"tabela"}),(0,o.jsx)(s.td,{children:"Table"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Tabela para a qual vai estabelecer os t\xedtulos dos campos"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"titulosCampos"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Nomes dos campos do jeito que eles v\xe3o aparecer nas caixas de di\xe1logo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"numCampos"}),(0,o.jsx)(s.td,{children:"Integer array"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfameros de campos atuais"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operator"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Use os nomes personalizados no editor de f\xf3rmulas"})]})]})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["SET FIELD TITLES permite ocultar, renomear e reorganizar os campos de uma tabela ou de uma subtabela passada em ",(0,o.jsx)(s.em,{children:"tabela"})," ou ",(0,o.jsx)(s.em,{children:"subtabela"})," quando aparecem nos editores padr\xe3o de 4D, tal como o editor de pesquisas, em modo Aplica\xe7\xe3o (mais especificamente, quando os editores s\xe3o chamados atrav\xe9s dos comandos do linguagem de 4D)."]}),"\n",(0,o.jsx)(s.p,{children:"Este comando permite igualmente renomear rapidamente as etiquetas dos campos em seus formul\xe1rios, se tiver utilizado nomes din\xe2micos. Para mais informa\xe7\xe3o sobre a inser\xe7\xe3o de etiquetas de tabelas e campos din\xe2micos nos formul\xe1rios, consulte o Manual de Desenho 4D."}),"\n",(0,o.jsxs)(s.p,{children:["Os arrays ",(0,o.jsx)(s.em,{children:"titulosCampos"})," e ",(0,o.jsx)(s.em,{children:"numCampos"})," devem estar sincronizados. No array ",(0,o.jsx)(s.em,{children:"titulosCampos"}),", passe o nome dos campos do jeito queira que eles apare\xe7am. Se n\xe3o desejar mostrar um campo em particular, n\xe3o inclua seu nome ou novo t\xedtulo no array. Os campos aparecer\xe3o na ordem que especifique neste array. Em cada elemento do array ",(0,o.jsx)(s.em,{children:"numCampos"}),", passe o n\xfamero da tabela que corresponde ao nome, novo ou antigo, do campo passado no mesmo n\xfamero de elemento que no array ",(0,o.jsx)(s.em,{children:"titulosCampos"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Por exemplo, voc\xea tem uma tabela ou subtabela composta pelos campos F, G, e H, criada nessa ordem. Voc\xea deseja que esses campos apare\xe7am como M, N, e O. Al\xe9m disso voc\xea n\xe3o deseja mostrar o campo N. Por \xfaltimo, deseja mostrar O e M nessa ordem. Para fazer isso, passe O e M, no array de dois-elementos ",(0,o.jsx)(s.em,{children:"titulosCampos"})," e passe 3 e 1, em um array de dois elementos, ",(0,o.jsx)(s.em,{children:"numCampos"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": se sua aplica\xe7\xe3o d\xe1 acesso ao editor de f\xf3rmulas (por exemplo pelo editor de relat\xf3rios r\xe1pidos), \xe9 necess\xe1rio passar o par\xe2metro * para manter consist\xeancia na aplica\xe7\xe3o."]}),"\n",(0,o.jsx)(s.p,{children:'O par\xe2metro opcional * lhe permite indicar se os nomes personalizados (estruturas "virtuais") definidos utilizando este comando podem ser utilizados ou n\xe3o em f\xf3rmulas 4D: Por padr\xe3o, quando este par\xe2metro for omitido, as f\xf3rmulas executadas em 4D n\xe3o podem usar nomes personalizados; \xe9 necess\xe1rio utilizar os nomes de tabela reais. Deve passar este par\xe2metro se quiser controlar a informa\xe7\xe3o que \xe9 proporcionada aos usu\xe1rios e garantir a coer\xeancia da interface sempre que sejam usadas f\xf3rmulas ou express\xf5es, ou seja:'}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Se sua aplica\xe7\xe3o der acesso ao editor de f\xf3rmulas (por exemplo atrav\xe9s do editor de relat\xf3rios r\xe1pidos)."}),"\n",(0,o.jsx)(s.li,{children:"se sua aplica\xe7\xe3o mostrar refer\xeancias de express\xe3o como nos documentos 4D Write Pro"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": quando for passado o par\xe2metro *, os nomes definidos por este comando podem ser usados nas f\xf3rmulas executadas por 4D. ",(0,o.jsx)(s.strong,{children:"Tenha cuidado neste caso"}),', os nomes personalizados n\xe3o devem conter caracteres que sejam considerados como \u201cproibidos\u201d pelo interprete de linguagem 4D, tal como "Rate_in_%" que n\xe3o pode ser utilizado em uma f\xf3rmula (para saber mais, consulte a se\xe7\xe3o ',(0,o.jsx)(s.em,{children:"Conven\xe7\xf5es"}),")."]}),"\n",(0,o.jsx)(s.p,{children:"SET FIELD TITLES N\xc3O modifica a estrutura atual do seu banco de dados. \xc9 concebida para afectar os usos posteriores das caixas de di\xe1logo padr\xe3o de 4D e dos formul\xe1rios que utilizam nomes din\xe2micos quando eles s\xe3o chamados atrav\xe9s de um comando de linguagem. O alcance do comando SET FIELD TITLES \xe9 a sess\xe3o de trabalho. Um benef\xedcio em cliente/Servidor \xe9 que v\xe1rias esta\xe7\xf5es 4D cliente podem \u201cver\u201d simultaneamente sua tabela de maneiras diferentes. Pode chamar SET FIELD TITLES tantas vezes quantas quiser."}),"\n",(0,o.jsx)(s.p,{children:"Utilize o comando SET FIELD TITLES para:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Traduzir dinamicamente seu banco."}),"\n",(0,o.jsx)(s.li,{children:"Mostrar os campos na ordem que voc\xea queira, independentemente da defini\xe7\xe3o atual de sua tabela."}),"\n",(0,o.jsx)(s.li,{children:"Mostrar os campos de um jeito que dependam da identidade ou dos privil\xe9gios personalizados de um usu\xe1rio."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"AVISO:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"SET FIELD TITLES N\xc3O anula o efeito da propriedade invis\xedvel de um campo. Quando um campo for definido para que seja invis\xedvel ao nivel da estrutura, n\xe3o aparecer\xe1 em modo Aplica\xe7\xe3o, mesmo que seja incluido em uma chamada a SET FIELD TITLES."}),"\n",(0,o.jsx)(s.li,{children:'Os plug-ins sempre acessam a estrutura "virtual" como est\xe1 especificado por este comando.'}),"\n",(0,o.jsxs)(s.li,{children:["Se o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-table-titles",children:"SET TABLE TITLES"}),' for chamado sem nenhum par\xe2metro, o ambiente de linguagem \xe9 resetado e a estrutura "virtual" (incluindo nomes de tabela e campos personalizados) \xe9 completamente removida']}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(s.p,{children:["Ver o exemplo do comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-table-titles",children:"SET TABLE TITLES"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/field-name",children:"Field name"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/last-field-number",children:"Last field number"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/parse-formula",children:"Parse formula"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-table-titles",children:"SET TABLE TITLES"})]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>d,x:()=>t});var o=a(296540);const n={},r=o.createContext(n);function d(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);