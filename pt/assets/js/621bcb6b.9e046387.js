"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49579"],{855619:function(e,n,o){o.r(n),o.d(n,{default:()=>A,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/selection-to-json","title":"Selection to JSON","description":"Selection to JSON ( aTabela {; oCampo}{; oCampo2 ; ... ; oCampoN}{; modelo})  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/selection-to-json.md","sourceDirName":"commands-legacy","slug":"/commands/selection-to-json","permalink":"/docs/pt/commands/selection-to-json","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-to-json.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"selection-to-json","title":"Selection to JSON","slug":"/commands/selection-to-json","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Validate","permalink":"/docs/pt/commands/json-validate"},"next":{"title":"LDAP","permalink":"/docs/pt/commands/theme/LDAP"}}'),t=o("785893"),a=o("250065");let d={id:"selection-to-json",title:"Selection to JSON",slug:"/commands/selection-to-json",displayed_sidebar:"docs"},r=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Selection to JSON"})," ( ",(0,t.jsx)(n.em,{children:"aTabela"})," {; ",(0,t.jsx)(n.em,{children:"oCampo"}),"}{; ",(0,t.jsx)(n.em,{children:"oCampo2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"oCampoN"}),"}{; ",(0,t.jsx)(n.em,{children:"modelo"}),"})  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabela a serializar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Campo(s) cujo(s) conte\xfados devem ser serializados"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modelo"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objeto para a sele\xe7\xe3o de etiquetas e de campos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Cadeia que cont\xe9m o array JSON serializado"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"Selection to JSON"})," devolve uma cadeia JSON que cont\xe9m os valores dos campos da sele\xe7\xe3o atual de ",(0,t.jsx)(n.em,{children:"aTabela"}),". Cada elemento do array \xe9 um objeto JSON contendo as etiquetas e valores dos campos da sele\xe7\xe3o."]}),"\n",(0,t.jsxs)(n.p,{children:["Caso passe s\xf3 o par\xe2metro ",(0,t.jsx)(n.em,{children:"aTabela"}),", o comando inclui, na cadeia JSON, os valores de todos os campos da tabela que podem ser expressados em JSON. Os campos tipo BLOB e imagem s\xe3o ignorados."]}),"\n",(0,t.jsxs)(n.p,{children:["Se n\xe3o deseja incluir todos os campos de ",(0,t.jsx)(n.em,{children:"aTabela"}),", pode utilizar o par\xe2metro ",(0,t.jsx)(n.em,{children:"oCampo"})," ou o par\xe2metro ",(0,t.jsx)(n.em,{children:"modelo"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"oCampo"}),": passe um ou mais campos neste par\xe2metro. S\xf3 os valores dos campos definidos s\xe3o inclu\xeddos na cadeia JSON."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"modelo"}),": passe um objeto 4D que cont\xe9m um ou mais pares ",(0,t.jsx)(n.em,{children:"nome/valor"})," onde ",(0,t.jsx)(n.em,{children:"valor"})," cont\xe9m um ponteiro a um campo \xe0 incluir (ver o exemplo 3)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Este comando suporta campos tipo Objeto: os dados desses campos s\xe3o automaticamente convertidos ao formato JSON. Note que o comando 4D abaixo pode ser interpretado como "produza JSON de todos os valores de objetoCampo na sele\xe7\xe3o atual da tabela":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Selection to JSON([aTable];objectField)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," Depois de uma chamada a ",(0,t.jsx)(n.strong,{children:"Selection to JSON"}),", a sele\xe7\xe3o atual e registro atual permanecem o mesmo, mas o registro atual n\xe3o \xe9 mais carregado. e poderia ter mudado (o \xfaltimo registro da sele\xe7ao atual \xe9 ent\xe3o o registro atual). Depois do comando Selection to JSON, utilize os comandos ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/load-record",children:"LOAD RECORD"})," em combina\xe7\xe3o com ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"})," (se for necess\xe1rio) utilize os valores dos campos no registro atual."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Quer criar uma cadeia JSON que represente esta sele\xe7\xe3o:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(449362).Z+"",width:"506",height:"184"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Deseja incluir os valores de todos os campos da tabela [Members]:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$jsonString :=Selection to JSON([Members])\n\xa0\xa0// $jsonString =[{"LastName":"Durant","FirstName":"Mark","Address":\n\xa0\xa0//"25 Park St","Zip code":"15205","City":"Pittsburgh"},{"LastName":\n\xa0\xa0//"Smith","FirstName":"John","Address":"24 Philadelphia Ave","Zip code":\n\xa0\xa0//"75203","City":"Dallas"},{"LastName":"Anderson","FirstName"\n\xa0\xa0//:"Adeline","Address":"37 Market St","Zip code":"45205","City":"Cincinnati"},...]\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Deseja reduzir a sele\xe7\xe3o e s\xf3 incluir dois campos na cadeia JSON utilizando a sintaxe baseada nos campos:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Members];[Members]LastName="A@")\n\xa0$jsonString :=Selection to JSON([Members];[Members]LastName;[Members]City)\n\xa0\xa0// $jsonString = [{"LastName":"Anderson","City":"Cincinnati"},\n\xa0\xa0// {"LastName":"Albert","City":"Houston"}]\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"S\xf3 deseja incluir um campo na cadeia JSON utilizando a sintaxe do modelo:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $template : Object\n\xa0OB SET($template;"LastName";->[Members]LastName)\xa0// um s\xf3 campo\n\xa0ALL RECORDS([Members])\n\xa0$jsonString :=Selection to JSON([Members];$template)\n\xa0\xa0// $jsonString = [{"LastName":"Durant"},{"LastName":"Smith"},{"LastName":"Anderson"},{"LastName":"Albert"},\n\xa0\xa0// {"LastName":"Leonard"},{"LastName":"Pradel"}]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:["Pode usar a sintaxe ",(0,t.jsx)(n.em,{children:"modelo"})," para exportar campos de tabelas diferentes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $template : Object\n\xa0var $jsonString : Text\n\xa0OB SET($template;"Last name";->[Emp]LastName)\n\xa0OB SET($template;"First name";->[Emp]FirstName)\n\xa0OB SET($template;"Company";->[Company]LastName)\xa0//etiqueta personalizada de outro modo entra em conflito com campo [Emp]LastName\n\xa0ALL RECORDS([Emp])\n\xa0SET FIELD RELATION([Emp]UUID_Company;Automatic;Do not modify)\n\xa0$jsonString:=Selection to JSON([Emp];$template)\n\xa0SET FIELD RELATION([Emp]UUID_Company;Structure configuration;Do not modify)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/json-to-selection",children:"JSON TO SELECTION"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1234"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},449362:function(e,n,o){o.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return d}});var s=o(667294);let t={},a=s.createContext(t);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);