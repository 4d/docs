---
id: method-get-comments
title: METHOD GET COMMENTS
slug: /commands/method-get-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET COMMENTS.Syntax-->**METHOD GET COMMENTS** ( *rota* ; *comentários* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET COMMENTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text, Text array | &#8594;  | Texto ou array de texto que contém uma ou várias rotas de método |
| comentários | Text, Text array | &#8592; | Comentários dos métodos designados |
| * | Operador | &#8594;  | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD GET COMMENTS.Summary-->O comando **METHOD GET COMMENTS** devolve no parâmetro *comentários*, os comentários dos métodos designados pelo parâmetro *rota*.<!-- END REF-->  
  
A documentação recuperada por este comando é a especificada no Explorador de 4D (não devem confundir-se com as linhas de comentarias no código que se recuperam utilizando [METHOD GET CODE](method-get-code.md)):

Contém:

* texto em markdown em banco de dados projeto
* texto estilizado em bancos de dados binário

![](../assets/en/commands/pict4968699.en.png)

Esta documentação pode ser gerada para métodos de tipo triggers, métodos de projeto, métodos de formulário, métodos de banco de dados.

  
**Nota**: os formulários e os métodos formulário compartilham a mesma documentação.

Pode utilizar dois tipos de sintaxes, baseadas em arrays texto ou em variáveis texto:  

```4d
 var tVpath : Text // variáveis texto
 var tVcomments : Text
 METHOD GET COMMENTS(tVpath;tVcomments) // documentação de um só método
```
  
  
```4d
 ARRAY TEXT(arrPaths;0) // arrays texto
 ARRAY TEXT(arrComments;0)
 METHOD GET COMMENTS(arrPaths;arrComments) // documentação de vários métodos
```
  
  
Não podem combinar-se as duas sintaxes. 

Se o comando é executado desde um componente, se aplica por defeito aos métodos do componente. Se passado o parâmetro *\**, é acessado aos métodos da base local.

#### Ver também 

[METHOD SET COMMENTS](method-set-comments.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1189 |
| Thread-seguro | &cross; |


