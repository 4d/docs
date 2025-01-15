---
id: method-set-comments
title: METHOD SET COMMENTS
slug: /commands/method-set-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET COMMENTS.Syntax-->**METHOD SET COMMENTS** ( *rota* ; *Comentarios* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET COMMENTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text, Text array | &#8594;  | Texto ou array texto contendo uma ou mais rotas de método |
| Comentarios | Text, Text array | &#8594;  | Comentários dos métodos designados |
| * | Operador | &#8594;  | Se passado = o comando aplica ao banco de dados local quando é executado de um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD SET COMMENTS.Summary-->O comando **METHOD SET COMMENTS** substitui os comentários dos métodos designados pelo parâmtero *rota* pelos definidos no parâmetro *comentarios*.<!-- END REF-->

A documentação modificada por este comando é mostrada no explorador de 4D (não deve ser confundida com linhas de comentários no código). Contém:

* texto markdown em bancos de dados projeto,
* texto com estilo em bancos de dados binários.

Esta documentação pode ser gerada para métodos de tipo triggers, métodos de projeto, métodos de formulário ou métodos de banco de dados.

**Nota:** os formulários e os métodos formulário compartem a mesma documentação.

Pode usar dois tipos de sintaxe, baseadas em arrays texto ou variáveis texto:

```4d
 var tVpath : Text // variáveis texto  

var tVcomments : Text

 METHOD SET COMMENTS(tVpath;tVcomments) // documentação de um só método


```

```4d
 ARRAY TEXT(arrPaths;0) // arrays texto 

ARRAY TEXT(arrComments;0)

 METHOD SET COMMENTS(arrPaths;arrComments) // documentação para vários métodos


```

Não é possível combinar as duas sintaxes.

Se passar um nome de rota não válido, é gerado um erro.

Pode executar o comando de uma componente, mas neste caso você deve passar o parâmetro *\** porque o acesso ao código do componente é somente leitura. Se omitir o parâmetro *\** neste contexto, o erro -9763 é gerado.

#### Exemplo 

 Adicione uma data de modificação para um comentário de trigger existente:

```4d
 METHOD GET COMMENTS("[trigger]/Table1";$comments)
 $comments:="Modif:"+String(Current date)+"\r"+$comments
 METHOD SET COMMENTS("[trigger]/Table1";$comments)
```

#### Ver também 

[METHOD GET COMMENTS](method-get-comments.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1193 |
| Thread-seguro | &cross; |


