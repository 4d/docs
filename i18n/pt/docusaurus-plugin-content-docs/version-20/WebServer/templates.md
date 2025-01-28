---
id: templates
title: Páginas de modelo
---

O servidor Web 4D permite que você use páginas de modelo HTML contendo tags, ou seja, uma mistura de código HTML estático e referências 4D adicionadas por meio de [tags de transformação](Tags/tags.md) como 4DTEXT, 4DIF, ou 4DINCLUDE. Essas tags geralmente são inseridas como comentários do tipo HTML (`<!--#4DTagName TagValue-->`) no código-fonte HTML.

Quando estas páginas são enviadas pelo servidor HTTP, elas são analisadas e as tags que contêm são executadas e substituídas pelos dados resultantes. As páginas recebidas pelos navegadores são, portanto, uma combinação de elementos estáticos e valores provenientes do processamento 4D.

Por exemplo, se escrever numa página HTML:

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

O valor da variável 4D *vtSiteName* será inserido na página HTML.


## Etiquetas para modelos

Estão disponíveis as seguintes etiquetas 4D:

- 4DTEXT, para inserir variáveis e expressões 4D como texto,
- 4DHTML, para inserir código HTML,
- 4DEVAL, para avaliar qualquer expressão 4D,
- 4DSCRIPT, para executar um método 4D,
- 4DINCLUDE, para incluir uma página dentro de outra,
- 4DBASE, para modificar a pasta predefinida utilizada pela etiqueta 4DINCLUDE,
- 4DCODE, para inserir o código 4D,
- 4DIF, 4DELSE, 4DELSEIF e 4DENDIF, para inserir condições no código HTML,
- 4DLOOP e 4DENDLOOP, para criar loops no código HTML,
- 4DEACH e 4DENDEACH, para fazer loop em coleções, seleções de entidades ou propriedades de objetos.

Essas tags são descritas na página [Transformation Tags](Tags/tags.md) .

É possível combinar etiquetas. Por exemplo, é permitido o seguinte código HTML:

```html
<HTML>
...
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Chamada de método)
<!--#4DIF (myvar=1)-->   (Condição if)
   <!--#4DINCLUDE banner1.html-->   (Inserção de subpágina)
<!--#4DENDIF-->   (End if)
<!--#4DIF (myvar=2)-->

   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (loop na seleção atual)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (inserção de subpágina)
<!--#4DELSE-->   (Else)
   <B>Valor: <!--#4DTEXT [TABLE]ValNum--></B><br/>
      (Exibição do campo)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   (Fim para)
</BODY>
</HTML>
```


## Análise de etiquetas

Por motivos de otimização, a análise do código-fonte HTML não é realizada pelo servidor da Web 4D quando as páginas HTML são chamadas usando URLs simples que são sufixadas com ".HTML" ou ".HTM".

Analisar o conteúdo das páginas de modelo enviadas pelo servidor da web 4D ocorre quando o `ARQUIVO ENVIAR` (. tm, .html, .shtm, . html), `WEB SEND BLOB` (text/html tipo BLOB) ou `WEB SEND TEXT` são chamados, bem como ao enviar páginas chamadas usando URLs. Nesse último caso, por motivos de otimização, as páginas sufixadas com ".htm" e ".html" NÃO são analisadas. Para "forçar" a análise de páginas HTML nesse caso, você deve adicionar o sufixo ".shtm" ou ".shtml" (por exemplo, `http://www.server.com/dir/page.shtm`). Um exemplo do uso desse tipo de página é dado na descrição do comando `WEB GET STATISTICS` . As páginas XML (.xml, .xsl) também são suportadas e sempre analisadas por 4D.

Você também pode realizar a análise fora do contexto da Web ao usar o comando `PROCESS 4D TAGS` .

Internamente, o analisador funciona com strings UTF-16, mas os dados a serem analisados podem ter sido codificados de maneira diferente. Quando as tags contiverem texto (por exemplo, `4DHTML`), a 4D converte os dados quando necessário, dependendo da origem e das informações disponíveis (charset). Abaixo estão os casos em que 4D analisa as tags contidas nas páginas HTML, bem como quaisquer conversões realizadas:

| Ação / Comando                                   | Análise de conteúdo das páginas enviadas              | Suporte da sintaxe $(*)                               | Conjunto de caracteres utilizado para a análise de etiquetas                                                                                                                                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Páginas chamadas através de URLs                 | X, exceto para páginas com extensões ".htm" ou ".html | X, exceto para páginas com extensões ".htm" ou ".html | Uso de charset passado como parâmetro do cabeçalho "Content-Type" da página. Se não houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `WEB SEND FILE`                                  | X                                                     | -                                                     | Uso de charset passado como parâmetro do cabeçalho "Content-Type" da página. Se não houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `WEB SEND TEXT`                                  | X                                                     | -                                                     | Não é necessária qualquer conversão                                                                                                                                                                                                                           |
| `WEB SEND BLOB`                                  | X, se o BLOB for do tipo "text/html                   | -                                                     | Utilização do conjunto de caracteres definido no cabeçalho "Content-Type" da resposta. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP                                                                                  |
| Inclusão pela etiqueta `<!--#4DINCLUDE-->` | X                                                     | X                                                     | Uso de charset passado como parâmetro do cabeçalho "Content-Type" da página. Se não houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `PROCESS 4D TAGS`                                | X                                                     | X                                                     | Dados de texto: sem conversão. Dados BLOB: conversão automática do conjunto de caracteres Mac-Roman para compatibilidade                                                                                                                                      |

(*) A sintaxe alternativa baseada em $ está disponível para as tags 4DHTML, 4DTEXT e 4DEVAL.

## Aceder aos métodos 4D através da Web

Executando um método 4D com `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, ou `4DTEXT` de uma solicitação da web está sujeito ao [Disponível através de tags 4D e URLs (4DACTION. .)](allowProject.md) valor do atributo definido nas propriedades do método. Se o atributo não estiver checado para o método, ele não pode ser chamado de uma requisição web.


## Prevenção da inserção de código malicioso

As tags 4D aceitam diferentes tipos de dados como parâmetros: texto, variáveis, métodos, nomes de comandos, etc. Quando esses dados forem fornecidos pelo seu próprio código, não há risco de inserção de código malicioso pois você controla a entrada. Quando esses dados forem fornecidos pelo seu próprio código, não há risco de inserção de código malicioso pois você controla a entrada. No entanto, o código do seu banco de dados geralmente trabalha com dados que foram, em algum momento, introduzidos por meio de uma fonte externa (entrada do usuário, importação etc.).

Neste caso, aconselhável não usar **tags** como `4DEVAL` ou `4DSCRIPT`, que avaliam os parâmetros, directamente com este tipo de dados.

Além disso, de acordo com o princípio [de recursão](Tags/tags.md#recursive-processing), o código malicioso pode incluir tags de transformação. Nesse caso, é imperativo usar a tag `4DTEXT` . Imagine, por exemplo, um campo de formulário da Web chamado "Nome", no qual os usuários devem digitar seu nome. Esse nome é então exibido usando uma tag `<!--#4DHTML vName-->` na página. Se o texto do tipo "\<!--#4DEVAL QUIT 4D-->" for inserido em vez do nome, a interpretação dessa tag fará com que o aplicativo seja encerrado. Já que essa tag escapa dos caracteres HTML especiais, qualquer código recursivo malicioso que possa ter sido inserido não será reinterpretado. Para fazer referência ao exemplo anterior, o campo "Name" conterá, nesse caso, "`&lt;!--#4DEVAL QUIT 4D--&gt;`", que não será transformado. If a text of the `"<!--#4DEVAL QUIT 4D-->"` type is inserted instead of the name, interpreting this tag will cause the application to be exited.
