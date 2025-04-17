"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88534"],{779979:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/json-validate","title":"JSON Validate","description":"JSON Validate ( vJson ; vSchema ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-validate.md","sourceDirName":"commands-legacy","slug":"/commands/json-validate","permalink":"/docs/pt/20-R8/commands/json-validate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-validate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-validate","title":"JSON Validate","slug":"/commands/json-validate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON TO SELECTION","permalink":"/docs/pt/20-R8/commands/json-to-selection"},"next":{"title":"Selection to JSON","permalink":"/docs/pt/20-R8/commands/selection-to-json"}}'),d=r("785893"),o=r("250065");let i={id:"json-validate",title:"JSON Validate",slug:"/commands/json-validate",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"JSON Validate"})," ( ",(0,d.jsx)(n.em,{children:"vJson"})," ; ",(0,d.jsx)(n.em,{children:"vSchema"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"vJson"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"objeto JSON a validar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"vSchema"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Schema JSON usada para validar objetos JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Estado da valida\xe7\xe3o e erros (se houver)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"JSON Validate"})," verifica a conformidade do conte\xfado JSON ",(0,d.jsx)(n.em,{children:"vJson"})," com as regras definidas no esquema JSON ",(0,d.jsx)(n.em,{children:"vSchema"}),". Se o JSON n\xe3o for v\xe1lido, o comando devolve uma descri\xe7\xe3o detalhada dos erros."]}),"\n",(0,d.jsxs)(n.p,{children:["Passe em ",(0,d.jsx)(n.em,{children:"vJson"})," um objeto JSON que contenha o conte\xfado JSON a validar."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," a valida\xe7\xe3o de uma string JSON consiste em comprovar que segue as regras definidas em um esquema JSON. Isto \xe9 diferente de comprovar que o JSON esteja bem formado, o que faz o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/json-parse",children:"JSON Parse"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Passe em ",(0,d.jsx)(n.em,{children:"vSchema"})," o esquema JSON a utilizar para a valida\xe7\xe3o. Para maior informa\xe7\xe3o sobre como criar um esquema JSON, pode consultar o website ",(0,d.jsx)(n.a,{href:"http://json-schema.org/",children:"json-schema.org"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," para validar um objeto JSON, 4D utiliza a norma descrita no documento ",(0,d.jsx)(n.a,{href:"https://tools.ietf.org/html/draft-wright-json-schema-validation-00",children:"JSON Schema Validation"})," (este rascunho ainda est\xe1 sendo escrito e pode evoluir no futuro)."]}),"\n",(0,d.jsxs)(n.p,{children:["Se o esquema JSON n\xe3o for v\xe1lido, 4D devolve um objeto ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/null",children:"Null"})," e lan\xe7a um erro que pode ser detectado mediante um m\xe9todo de chamada de erro."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"JSON Validate"})," devolve um objeto que oferece o estado da valida\xe7\xe3o. Este objeto pode conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:[(0,d.jsx)(n.strong,{children:"Nome de propriedad"}),"e"]}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Tipo"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"success"})}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsxs)(n.td,{children:["True se ",(0,d.jsx)(n.em,{children:"vJson"})," for validado, false em caso contr\xe1rio. Se for false, a propriedade errors tamb\xe9m \xe9 devolvida"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"errors"})}),(0,d.jsx)(n.td,{children:"Cole\xe7\xe3o de objetos"}),(0,d.jsxs)(n.td,{children:["Lista de objetos de erro em caso de ",(0,d.jsx)(n.em,{children:"vJson"})," n\xe3o estar validado (ver abaixo)"]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Cada objeto de erro da cole\xe7\xe3o ",(0,d.jsx)(n.em,{children:"errors"})," cont\xe9m as propriedades abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Nome de propriedade"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Tipo"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"code"})}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"C\xf3digo de erro"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"jsonPath"})}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsxs)(n.td,{children:["Rota JSON que n\xe3o pode ser validada em ",(0,d.jsx)(n.em,{children:"vJson"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"line"})}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsxs)(n.td,{children:["N\xfamero de linha de erro no arquivo JSON. Esta propriedade \xe9 preenchida se o JSON tiver sido analisado por ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/json-parse",children:"JSON Parse"})," com o par\xe2metro ",(0,d.jsx)(n.em,{children:"*"}),". Do contrario, a propriedad \xe9 omitida."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"message"})}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Mensagem de erro"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"offset"})}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsxs)(n.td,{children:["Deslocamento de linha de erro no arquivo JSON. Esta propriedade \xe9 preenchida se o JSON tiver sido analisado por ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/json-parse",children:"JSON Parse"})," com o par\xe2metro ",(0,d.jsx)(n.em,{children:"*"}),". Do contr\xe1rio, a propriedade \xe9 omitida."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"schemaPaths"})}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Rota JSON no esquema que causa o erro de valida\xe7\xe3o"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,d.jsx)(n.p,{children:"Os erros abaixo podem ser retornados"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Code"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"JSON Palavra chave"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Mensagem"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"multipleOf"}),(0,d.jsx)(n.td,{children:"Erro enquanto validando contra uma chave 'multipleOf'."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"maximum"}),(0,d.jsx)(n.td,{children:'O valor ofereico n\xe3o deve ser maior que o especificado no schema ("{s1}").'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"exclusiveMaximum"}),(0,d.jsx)(n.td,{children:'O valor ofereico n\xe3o deve ser menor que o especificado no schema ("{s1}").'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"5"}),(0,d.jsx)(n.td,{children:"minimum"}),(0,d.jsx)(n.td,{children:'O valor oferecido n\xe3o deve ser menor que o especificado no schema ("{s1}").'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{children:"exclusiveMinimum"}),(0,d.jsx)(n.td,{children:'O valor oferecido deve ser maior que especificado no schema ("{s1}").'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{children:"maxLength"}),(0,d.jsx)(n.td,{children:"O string \xe9 mais longo que o especificado no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:"minLength"}),(0,d.jsx)(n.td,{children:"O string \xe9 mais curto que o especificado no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"9"}),(0,d.jsx)(n.td,{children:"pattern"}),(0,d.jsx)(n.td,{children:'A string "{s1}" n\xe3o combina com o padr\xe3o no schema:{s2}.'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"additionalItems"}),(0,d.jsx)(n.td,{children:"Erro durante a valida\xe7\xe3o do array. JSON cont\xe9m mais elementos que os especificados no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"11"}),(0,d.jsx)(n.td,{children:"maxItems"}),(0,d.jsx)(n.td,{children:"O array cont\xe9m mais itens que os especificados no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"12"}),(0,d.jsx)(n.td,{children:"minItems"}),(0,d.jsx)(n.td,{children:"O array cont\xe9m menos itens que os especificados no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:"uniqueItems"}),(0,d.jsx)(n.td,{children:'Erro ao validar um array. Elementos n\xe3o s\xe3o \xfanicos. Outra inst\xe2ncia de "{s1}" j\xe1 est\xe1 no array.'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"14"}),(0,d.jsx)(n.td,{children:"maxProperties"}),(0,d.jsx)(n.td,{children:"O n\xfamero de propriedades \xe9 maior que o especificado no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"15"}),(0,d.jsx)(n.td,{children:"minProperties"}),(0,d.jsx)(n.td,{children:"O n\xfamero de propriedades \xe9 maior que o especificado no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"16"}),(0,d.jsx)(n.td,{children:"required"}),(0,d.jsx)(n.td,{children:'A propriedade exigida "{s1}" est\xe1 faltando.'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"17"}),(0,d.jsx)(n.td,{children:"additionalProperties"}),(0,d.jsx)(n.td,{children:"Nenhuma propriedade adicional \xe9 permitida pelo schema. As propriedades {s1} devem ser removidas."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"18"}),(0,d.jsx)(n.td,{children:"dependencies"}),(0,d.jsx)(n.td,{children:'A propriedade "{s1}" exige a propriedade "{s2}".'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19"}),(0,d.jsx)(n.td,{children:"enum"}),(0,d.jsx)(n.td,{children:"Erro ao validar contra chave 'enum' \"{s1}\" n\xe3o combina com nenhum elemento enum no schema."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:"type"}),(0,d.jsx)(n.td,{children:"Tipo incorreto. Valor esperado \xe9: {s1}"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"21"}),(0,d.jsx)(n.td,{children:"oneOf"}),(0,d.jsx)(n.td,{children:"O JSON combina com mais de um valor."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"22"}),(0,d.jsx)(n.td,{children:"oneOf"}),(0,d.jsx)(n.td,{children:"O JSON n\xe3o combina com nenhum valor."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"23"}),(0,d.jsx)(n.td,{children:"not"}),(0,d.jsx)(n.td,{children:"O JSON \xe9 v\xe1lido contra o valor de 'not'."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"24"}),(0,d.jsx)(n.td,{children:"format."}),(0,d.jsx)(n.td,{children:'A string n\xe3o combina ("{s1}")'})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Se quiser validar um objeto JSON com um esquema e obter a lista de erros de valida\xe7\xe3o, se houver. Deseja armazenar linhas de erro e mensagens em uma vari\xe1vel de texto:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $oResult : Object\n\xa0$oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)\n\xa0If($oResult.success)\xa0//valida\xe7\xe3o exitosa\n\xa0\xa0\xa0\xa0...\n\xa0Else\xa0//Valida\xe7\xe3o falhou\n\xa0\xa0\xa0\xa0var $vLNbErr : Integer\n\xa0\xa0\xa0\xa0var $vTerrLine : Text\n\xa0\xa0\xa0\xa0$vLNbErr:=$oResult.errors.length\xa0///obter o n\xfamero de erros\n\xa0\xa0\xa0\xa0ALERT(String($vLNbErr)+" validation error(s) found.")\n\xa0\xa0\xa0\xa0For($i;0;$vLNbErr)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este exemplo exige que a nota\xe7\xe3o de objeto esteja ativada (ver o par\xe1grafo ",(0,d.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),")."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/json-parse",children:"JSON Parse"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1456"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var s=r(667294);let d={},o=s.createContext(d);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);