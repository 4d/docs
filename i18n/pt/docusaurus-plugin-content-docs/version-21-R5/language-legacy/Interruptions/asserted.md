---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *expressaoBool* : Boolean {; *mensagemTexto* : Text} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressaoBool | Boolean | &#8594; | Expressão Booleana |
| mensagemText | Text | &#8594; | texto da mensagem de erro |
| Resultado | Boolean | &#8592; | Resultado da avaliação de expressaoBool |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Asserted.Summary-->O comando Asserted tem um funcionamento similar ao do comando [ASSERT](../commands/assert), com a diferença de que retorna um valor que é o resultado da avaliação do parâmetro *expressaoBool*.<!-- END REF--> Permite utilizar uma asserção durante a avaliação de uma condição (ver o exemplo). Para maior informação sobre o funcionamento das asserções e os parâmetros deste comando, consulte a descrição do comando [ASSERT](../commands/assert).

Asserted aceita uma expressão Booleana como parâmetro e retorna o resultado da avaliação desta expressão. Se a expressão é falsa e se as asserções estão ativas (ver o comando [SET ASSERT ENABLED](../commands/set-assert-enabled)), é gerado o erro -10518, exatamente que para o comando [ASSERT](../commands/assert). Se as asserções estão inativas, Asserted retorna o resultado da expressão que foi passada sem disparar um erro.

Nota: Como o comando [ASSERT](../commands/assert), Asserted funciona em modo interpretado e compilado. 

## Exemplo 

Inserir uma asserção na avaliação de uma expressão:

```4d
 READ WRITE([Tabela 1])
 LOAD RECORD([Tabela 1])
 If(Asserted(Not(Locked([Tabela 1]))))
  // Este código desencadeia o erro -10518 se o registro está bloqueado
    ...
 End if
```

## Ver também 

[ASSERT](../commands/assert)  
[Get assert enabled](../commands/get-assert-enabled)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1132 |
| Thread-seguro | yes |
| Modificar variáveis | error |


