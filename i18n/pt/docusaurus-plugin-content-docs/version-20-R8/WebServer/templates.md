---
id: templates
title: Páginas de modelo
---

El servidor web de 4D le permite utilizar las páginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de código HTML estático y de referencias 4D añadidas mediante [etiquetas de transformación](../Tags/transformation-tags.md) como 4DTEXT, Estas etiquetas suelen insertarse como comentarios de tipo HTML (`<!--#4DTagName TagValue-->`) en el código fuente HTML.

Quando estas páginas são enviadas pelo servidor HTTP, elas são analisadas e as tags que contêm são executadas e substituídas pelos dados resultantes. As páginas recebidas pelos navegadores são, portanto, uma combinação de elementos estáticos e valores provenientes do processamento 4D.

Por exemplo, se escrever numa página HTML:

```html
<P>Bem-vindo a <!--#4DTEXT vtSiteName-->!</P>
```

El valor de la variable 4D _vtSiteName_ se insertará en la página HTML.

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

Estas etiquetas se describen en la página [Etiquetas de transformación](../Tags/transformation-tags.md).

É possível combinar etiquetas. Por exemplo, é permitido o seguinte código HTML:

```html
<HTML>
...
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (myvar=2)-->

   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->
 
<!--#4DLOOP [TABLE]-->   (loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>
      (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   (End for)
</BODY>
</HTML>
```

## Análise de etiquetas

Por motivos de otimização, a análise do código-fonte HTML não é realizada pelo servidor da Web 4D quando as páginas HTML são chamadas usando URLs simples que são sufixadas com ".HTML" ou ".HTM".

El análisis del contenido de las páginas plantillas enviadas por el servidor web de 4D tiene lugar cuando se llaman los comandos `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) o `WEB SEND TEXT`, así como cuando se enví Nesse último caso, por motivos de otimização, as páginas sufixadas com ".htm" e ".html" NÃO são analisadas. Para "forzar" el análisis de las páginas HTML en este caso, debe añadir el sufijo ".shtm" o ".shtml" (por ejemplo, `http://www.server.com/dir/page.shtm`). Un ejemplo del uso de este tipo de página se da en la descripción del comando `WEB GET STATISTICS`. As páginas XML (.xml, .xsl) também são suportadas e sempre analisadas por 4D.

También puede llevar a cabo el análisis sintáctico fuera del contexto web cuando utilice el comando `PROCESS 4D TAGS`.

Internamente, o analisador funciona com strings UTF-16, mas os dados a serem analisados podem ter sido codificados de maneira diferente. Cuando las etiquetas contienen texto (por ejemplo `4DHTML`), 4D convierte los datos cuando es necesario dependiendo de su origen y de la información disponible (charset). Abaixo estão os casos em que 4D analisa as tags contidas nas páginas HTML, bem como quaisquer conversões realizadas:

| Ação / Comando                                | Análise de conteúdo das páginas enviadas                                              | Suporte da sintaxe $(\*)                                           | Conjunto de caracteres utilizado para a análise de etiquetas                                                                                                                                                                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Páginas chamadas através de URLs              | X, exceto para páginas com extensões ".htm" ou ".html | X, exceto para páginas com extensões ".htm" ou ".html | Uso de charset passado como parâmetro do cabeçalho "Content-Type" da página. Se não houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `WEB SEND FILE`                               | X                                                                                     | -                                                                                     | Uso de charset passado como parâmetro do cabeçalho "Content-Type" da página. Se não houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `WEB SEND TEXT`                               | X                                                                                     | -                                                                                     | Não é necessária qualquer conversão                                                                                                                                                                                                                                                           |
| `WEB SEND BLOB`                               | X, se o BLOB for do tipo "text/html                                                   | -                                                                                     | Utilização do conjunto de caracteres definido no cabeçalho "Content-Type" da resposta. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP                                                                                                  |
| Inclusión por la etiqueta `<!--#4DINCLUDE-->` | X                                                                                     | X                                                                                     | Uso de charset passado como parâmetro do cabeçalho "Content-Type" da página. Se não houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `PROCESS 4D TAGS`                             | X                                                                                     | X                                                                                     | Dados de texto: sem conversão. Dados BLOB: conversão automática do conjunto de caracteres Mac-Roman para compatibilidade                                                                                                                      |

(\*) A sintaxe alternativa baseada em $ está disponível para as tags 4DHTML, 4DTEXT e 4DEVAL.

## Aceder aos métodos 4D através da Web

Executing a 4D method with `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, or `4DTEXT` from a web request is subject to the [Available through 4D tags and URLs (4DACTION...)](allowProject.md) attribute value defined in the properties of the method. Se o atributo não estiver checado para o método, ele não pode ser chamado de uma requisição web.

## Prevenção da inserção de código malicioso

As tags 4D aceitam diferentes tipos de dados como parâmetros: texto, variáveis, métodos, nomes de comandos, etc. Quando esses dados forem fornecidos pelo seu próprio código, não há risco de inserção de código malicioso pois você controla a entrada. No entanto, o código do seu banco de dados geralmente trabalha com dados que foram, em algum momento, introduzidos por meio de uma fonte externa (entrada do usuário, importação etc.).

En este caso, es aconsejable **no utilizar** etiquetas como `4DEVAL` o `4DSCRIPT`, que evalúan parámetros, directamente con este tipo de datos.

In addition, according to the [principle of recursion](../Tags/transformation-tags.md#recursive-processing), malicious code may itself include transformation tags. En este caso, es imprescindible utilizar la etiqueta `4DTEXT`. Imagine, por exemplo, um campo de formulário da Web chamado "Nome", no qual os usuários devem digitar seu nome. Este nombre se muestra mediante una etiqueta `<!--#4DHTML vName-->` en la página. If text of the "\<!--#4DEVAL QUIT 4D-->" type is inserted instead of the name, interpreting this tag will cause the application to be exited. Para evitar este riesgo, basta con utilizar sistemáticamente la etiqueta `4DTEXT` en este caso. Já que essa tag escapa dos caracteres HTML especiais, qualquer código recursivo malicioso que possa ter sido inserido não será reinterpretado. To refer to the previous example, the "Name" field will contain, in this case, "`&lt;!--#4DEVAL QUIT 4D--&gt;`" which will not be transformed.
