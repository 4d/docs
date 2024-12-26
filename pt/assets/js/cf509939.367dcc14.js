"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82483"],{953300:function(e,o,n){n.r(o),n.d(o,{metadata:()=>a,contentTitle:()=>s,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>r});var a=JSON.parse('{"id":"commands-legacy/structure-file","title":"Structure file","description":"Structure file {( * )} : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/structure-file.md","sourceDirName":"commands-legacy","slug":"/commands/structure-file","permalink":"/docs/pt/commands/structure-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstructure-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"structure-file","title":"Structure file","slug":"/commands/structure-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET UPDATE FOLDER","permalink":"/docs/pt/commands/set-update-folder"},"next":{"title":"Table fragmentation","permalink":"/docs/pt/commands/table-fragmentation"}}'),t=n("785893"),d=n("250065");let r={id:"structure-file",title:"Structure file",slug:"/commands/structure-file",displayed_sidebar:"docs"},s=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Structure file"})," {( * )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Retorna o arquivo de estrutura do banco de dados local"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultado"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Nome longo do arquivo de estrutura do banco de dados"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"O comando Structure file retorna o nome completo do arquivo de estrutura do banco de dados com o qual voc\xea est\xe1 trabalhando atualmente."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Com bancos de dados bin\xe1rios, o comando retorna a rota para o arquivo ",(0,t.jsx)(o.strong,{children:".4db"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Com bancos de dados projeto, o comando retorna a rota para o arquivo ",(0,t.jsx)(o.strong,{children:".4dproject"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota:"})," No caso espec\xedfico de um banco de dados que foi compilado e se fundiu com 4D Desktop, este comando retorna o caminho do arquivo (da aplica\xe7\xe3o execut\xe1vel) no Windows e Mac OS. No Mac OS, este arquivo est\xe1 localizado dentro do pacote de software, na pasta [Contents:Mac OS]. Isto deriva de um mecanismo antigo e \xe9 mantido por raz\xf5es de compatibilidade. Se voc\xea deseja obter o nome completo do pacote de software em si, \xe9 prefer\xedvel usar o comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/application-file",children:"Application file"}),". A t\xe9cnica consiste em testar o aplicativo usando o comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/application-type",children:"Application type"}),", em seguida, a execu\xe7\xe3o de Structure file ou ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/application-file",children:"Application file"}),", dependendo do contexto."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"ATEN\xc7\xc3O:"})," Se voc\xea chamar este comando durante a execu\xe7\xe3o de 4D Client, apenas o nome do arquivo de estrutura \xe9 retornada; o nome completo n\xe3o \xe9 devolvido."]}),"\n",(0,t.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"})," \xe9 \xfatil no caso de uma arquitetura usando componentes: ele pode ser usado para determinar a estrutura (host ou componente) para os quais voc\xea deseja obter o nome completo, dependendo do contexto em que o comando \xe9 chamado::"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Quando o comando \xe9 chamado de um componente:"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["- Se o par\xe2metro ",(0,t.jsx)(o.em,{children:"*"})," for passado, o comando retorna o nome completo do arquivo de estrutura do banco de dados do host,"]}),"\n",(0,t.jsxs)(o.p,{children:["- Se o par\xe2metro ",(0,t.jsx)(o.em,{children:"*"})," n\xe3o for passado, o comando retorna o nome completo do arquivo estrutura do componente."]}),"\n",(0,t.jsx)(o.p,{children:'O arquivo de estrutura do componente corresponde ao arquivo .4db or .4dc do componente encontrado na pasta "Components" do banco de dados. No entanto, um componente tamb\xe9m pode ser instalado como um alias/atalho ou uma pasta/pacote .4dbase:'}),"\n",(0,t.jsx)(o.p,{children:"- No caso de um componente instalado como um alias/atalho, o comando retorna o caminho do db original .4db ou do arquivo .4dc (o alias ou atalho \xe9 resolvido)."}),"\n",(0,t.jsx)(o.p,{children:"- No caso de um componente instalado em uma pasta/pacote .4dbase, o comando retorna o caminho do arquivo .4db ou .4dc localizado dentro desta pasta/pacote."}),"\n",(0,t.jsxs)(o.p,{children:["\u2022 Quando o comando \xe9 chamado de um m\xe9todo de banco de dados do host, ele sempre retorna o nome completo do arquivo de estrutura do banco de dados de host, independentemente de haver ou n\xe3o o par\xe2metro ",(0,t.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(o.p,{children:"Este exemplo exibe o nome e localiza\xe7\xe3o do arquivo de estrutural atualmente em uso:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0var $fullpath : Object\n\xa0var $name;$path : Text\n\xa0If(Application type#4D Remote mode)\n\xa0\xa0\xa0\xa0$fullpath:=Path to object(Structure file)\n\xa0\xa0\xa0\xa0$name:=$fullpath.name\n\xa0\xa0\xa0\xa0$path:=$fullpath.parentFolder\n\xa0\xa0\xa0\xa0ALERT("You are currently using the database "+Char(34)+$name+Char(34)+" located at "+Char(34)+$path+Char(34)+".")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("You are connected to the database "+Char(34)+Structure file+Char(34))\n\xa0End if\n'})}),"\n",(0,t.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(o.p,{children:"O exemplo a seguir pode ser usado para descobrir se o m\xe9todo \xe9 chamado de um componente:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0var $0 : Boolean\n\xa0$0:=(Structure file#Structure file(*))\n\xa0\xa0// $0=True se o m\xe9todo \xe9 chamado desde um componente\n"})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/commands/application-file",children:"Application file"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/component-list",children:"COMPONENT LIST"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/data-file",children:"Data file"})]}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"489"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return r}});var a=n(667294);let t={},d=a.createContext(t);function r(e){let o=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);