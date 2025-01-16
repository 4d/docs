"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77823"],{616409:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/json-resolve-pointers","title":"JSON Resolve pointers","description":"JSON Resolve pointers ( objeto {; op\xe7\xf5es} ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-resolve-pointers.md","sourceDirName":"commands-legacy","slug":"/commands/json-resolve-pointers","permalink":"/docs/pt/commands/json-resolve-pointers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-resolve-pointers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-resolve-pointers","title":"JSON Resolve pointers","slug":"/commands/json-resolve-pointers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON PARSE ARRAY","permalink":"/docs/pt/commands/json-parse-array"},"next":{"title":"JSON Stringify","permalink":"/docs/pt/commands/json-stringify"}}'),r=o("785893"),t=o("250065");let d={id:"json-resolve-pointers",title:"JSON Resolve pointers",slug:"/commands/json-resolve-pointers",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Definir Ponteiros JSON",id:"definir-ponteiros-json",level:4},{value:"Recursividade e resolu\xe7\xe3o de rota",id:"recursividade-e-resolu\xe7\xe3o-de-rota",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Resolve pointers"})," ( ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"op\xe7\xf5es"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Objeto que cont\xe9m os ponteiros JSON a resolver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objeto com os ponteiros JSON resolvidos (apenas se o resultado for um objeto)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"op\xe7\xf5es"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es para resolu\xe7\xe3o de ponteiro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objeto contendo o resultado do processamento"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"JSON Resolve pointers"})," resolve todos os ponteiros JSON encontrados no objeto, com respeito \xe0 configura\xe7\xe3o de op\xe7\xf5es (se existir)."]}),"\n",(0,r.jsx)(n.p,{children:"Os ponteiros JSON s\xe3o particularmente \xfateis para:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"aninhar parte de um documento JSON externo ou reutilizar uma parte de um documento JSON em outros lugares no mesmo documento JSON, com o fim de fatorizar a informa\xe7\xe3o,"}),"\n",(0,r.jsx)(n.li,{children:"expressam uma estrutura c\xedclica em JSON,"}),"\n",(0,r.jsx)(n.li,{children:"definir um objeto de planilha que cont\xe9m as propriedades predeterminadas armazenadas em JSON."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," um objeto que cont\xe9m ponteiros JSON que devem ser resolvidos (para mais informa\xe7\xe3o sobre a sintaxe do ponteiro JSON, consulte o par\xe1grafo ",(0,r.jsx)(n.em,{children:"Definir Ponteiros JSON"})," abaixo)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," o ",(0,r.jsx)(n.em,{children:"objeto"})," fonte ser\xe1 atualizado com o resultado da resolu\xe7\xe3o do ponteiro depois de ser executado o comando (exceto se o resultado n\xe3o for um objeto, consulte abaixo). Se desejar conservar uma vers\xe3o original do objeto, pode considerar utilizar previamente ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/ob-copy",children:"OB Copy"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente, pode passar em ",(0,r.jsx)(n.em,{children:"op\xe7\xf5es"})," um objeto que contenha propriedades espec\xedficas que ser\xe3o utilizadas ao resolver ponteiros. S\xe3o suportadas as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Propriedade"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo de valor"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rootFolder"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Rota absoluta (utilizando a sintaxe 4D padr\xe3o) a pasta que se utilizar\xe1 para resolver ponteiros relativos no objeto. O valor predeterminado \xe9 a pasta Recursos do banco de dados."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"merge"}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsxs)(n.td,{children:["Fusiona objetos com objetos ponteiro (true) ao inv\xe9s de substitu\xed-los (false). O valor predeterminado \xe9 false ",(0,r.jsx)(n.img,{src:o(419483).Z+"",width:"769",height:"322"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar o comando:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["se o resultado da resolu\xe7\xe3o de ponteiro for um objeto, o ",(0,r.jsx)(n.em,{children:"objeto"})," se atualiza e cont\xe9m o objeto resultante."]}),"\n",(0,r.jsx)(n.li,{children:'se o resultado da resolu\xe7\xe3o de ponteiro for um valor escalar (ou seja, um texto, um n\xfamero...), o objeto \xe9 deixado intacto e o valor resultante se devolve na propriedade "valor" do resultado da fun\xe7\xe3o.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Em todos os casos, o comando devolve um objeto que cont\xe9m as seguintes propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.strong,{children:"Propriedad"}),"e"]}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo de valor"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Qualquer"}),(0,r.jsxs)(n.td,{children:["Resultado do processamento do comando em ",(0,r.jsx)(n.em,{children:"objeto"}),". Se o resultado for um objeto, \xe9 igual ao ",(0,r.jsx)(n.em,{children:"objeto"})," de sa\xedda."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"true se todos os ponteiros tiverem sido resolvidos corretamente"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"Cole\xe7\xe3o"}),(0,r.jsx)(n.td,{children:"Cole\xe7\xe3o de erros se os houver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].code"}),(0,r.jsx)(n.td,{children:"N\xfamero"}),(0,r.jsx)(n.td,{children:"c\xf3digo do erro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"mensagem de erro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].pointerURI"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"valor do ponteiro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors[].referredPath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"rota completa de documento"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"definir-ponteiros-json",children:"Definir Ponteiros JSON"}),"\n",(0,r.jsxs)(n.p,{children:["JSON Pointer \xe9 um padr\xe3o que define uma sintaxe de string que pode ser utilizada para acessar a um campo ou a um valor chave particular no documento JSON todo. O padr\xe3o foi descrito em ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"RFC 6901"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'Um ponteiro JSON \xe9, estritamente falando, uma string composta de partes separadas por \'/\'. Um ponteiro JSON normalmente \xe9 encontrado em uma URL que especifica o documento no qual se resolver\xe1 o ponteiro. O caractere de fragmento "#" \xe9 utilizado na URI para especificar o ponteiro JSON Por conven\xe7\xe3o, pode encontrar uma URI que contenha um ponteiro JSON em uma propriedade de objeto JSON que deve ser chamada de "$ ref".'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0 "$ref":<path>#<json_pointer>\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),': 4D n\xe3o \xe9 compat\xedvel com o caractere "-" como refer\xeancia a elementos de array inexistentes.']}),"\n",(0,r.jsx)(n.h5,{id:"recursividade-e-resolu\xe7\xe3o-de-rota",children:"Recursividade e resolu\xe7\xe3o de rota"}),"\n",(0,r.jsx)(n.p,{children:"Os ponteiros JSOn s\xe3o resolvidos recursivamente, o que significa que se um ponteiro resolvido tamb\xe9m contiver ponteiros, ser\xe3o resolvidos recursivamente e assim por diante, at\xe9 que sejam resolvidos todos os ponteiros. Nesse contexto, todas as rotas de arquivo encontradas nas URLs de ponteiro JSOn podem ser relativas ou absolutas. Devem usar '/' como delimitador de rota e s\xe3o resolvidas da maneira abaixo:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uma rota relativa n\xe3o deve come\xe7ar com '/'. Se resolve relativamente ao documento JSON onde foi encontrada a string de rota de acesso,"}),"\n",(0,r.jsxs)(n.li,{children:["Uma rota absoluta come\xe7a com '/'. S\xf3 as ",(0,r.jsx)(n.a,{href:"/docs/pt/Concepts/paths#filesystem-pathnames",children:"rotas filesystem"}),' s\xe3o aceitas como rotas absolutas.Por exemplo "/RESOURCES/templates/myfile.json" aponta ao arquivo "myfile.json" que se encontra na pasta de recursos do banco de dados atual.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A resolu\xe7\xe3o do nome distingue entre mai\xfasculas e min\xfasculas."}),"\n",(0,r.jsx)(n.li,{children:'4D n\xe3o resolve uma rota a um arquivo json localizado na rede (que comece por "http/https").'}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo b\xe1sico ilustra como um ponteiro JSON pode ser definido e substitu\xeddo em um objeto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// criar um objeto com alg\xfam valor\n\xa0var $o : Object\n\xa0$o:=New object("value";42)\n\xa0\n\xa0\xa0// criar o objeto ponteiro JSON\n\xa0var $ref : Object\n\xa0$ref:=New object("$ref";"#/value")\n\xa0\n\xa0\xa0// adicionar o objeto ponteiro JSON como propriedade\n\xa0$o.myJSONPointer:=$ref\n\xa0\n\xa0\xa0// resolver tudo e verificar que o ponteiro tenha sido resolvido\n\xa0var $result : Object\n\xa0$options:=New object("rootFolder";Get 4D folder(Current resources folder);"merge";True)\n\xa0$result:=JSON Resolve pointers($o;$options)\n\xa0If($result.success)\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.value))\n\xa0\xa0//{"value":42,"myJSONPointer":42}\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.errors))\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:'Se quiser reutilizar "billingAddress" como "shippingAddress" no objeto JSON abaixo (chamado $oMyConfig):'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0 "billingAddress": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0 },\n\xa0\xa0\xa0 "shippingAddress": { "$ref": "#/billingAddress" }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$oResult:=JSON Resolve pointers($oMyConfig)\n"})}),"\n",(0,r.jsx)(n.p,{children:"... o objeto abaixo \xe9 devolvido:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "billingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "shippingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:'Este exemplo ilustra o efeito da op\xe7\xe3o "fusionar". Se quiser editar os direitos de um usu\xe1rio baseando-se em um arquivo pr\xe9-determinado.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "rights": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "$ref": "defaultSettings.json#/defaultRights",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["O arquivo ",(0,r.jsx)(n.em,{children:"defaultSettings.json"})," cont\xe9m:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "defaultRights":\n\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Se executar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";False)\xa0//substituir conte\xfados\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["o valor resultante \xe9 exatamente o conte\xfado do arquivo ",(0,r.jsx)(n.em,{children:"defaultSettings.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Se executar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";True)\xa0//fusionar ambos os conte\xfados\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,r.jsx)(n.p,{children:"...o valor resultante \xe9 uma vers\xe3o modificada do objeto original:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1478"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},419483:function(e,n,o){o.d(n,{Z:function(){return s}});let s=o.p+"assets/images/pict3516702.pt-cb064ec14e9d4dfe520c789afa171666.png"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let r={},t=s.createContext(r);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);