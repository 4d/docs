---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *expressaoBool* {; *mensagemTexto*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressaoBool | Boolean | &#8594;  | Expressão Booleana |
| mensagemText | Text | &#8594;  | texto da mensagem de erro |
| Resultado | Boolean | &#8592; | Resultado da avaliação de expressaoBool |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Asserted.Summary-->O comando Asserted tem um funcionamento similar ao do comando [ASSERT](assert.md), com a diferença de que retorna um valor que é o resultado da avaliação do parâmetro *expressaoBool*.<!-- END REF--> Permite utilizar uma asserção durante a avaliação de uma condição (ver o exemplo). Para maior informação sobre o funcionamento das asserções e os parâmetros deste comando, consulte a descrição do comando [ASSERT](assert.md).

Asserted aceita uma expressão Booleana como parâmetro e retorna o resultado da avaliação desta expressão. Se a expressão é falsa e se as asserções estão ativas (ver o comando [SET ASSERT ENABLED](set-assert-enabled.md)), é gerado o erro -10518, exatamente que para o comando [ASSERT](assert.md). Se as asserções estão inativas, Asserted retorna o resultado da expressão que foi passada sem disparar um erro.

Nota: Como o comando [ASSERT](assert.md), Asserted funciona em modo interpretado e compilado. 

#### Exemplo 

Inserir uma asserção na avaliação de uma expressão:

```4d
 READ WRITE([Tabela 1])
 LOAD RECORD([Tabela 1])
 If(Asserted(Not(Locked([Tabela 1]))))
  // Este código desencadeia o erro -10518 se o registro está bloqueado
    ...
 End if
```

#### Ver também 

[ASSERT](assert.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1132 |
| Thread-seguro | &check; |
| Modificar variáveis | error |


