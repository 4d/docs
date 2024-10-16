---
id: set-assert-enabled
title: SET ASSERT ENABLED
slug: /commands/set-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.SET ASSERT ENABLED.Syntax-->**SET ASSERT ENABLED** ( *asserções* {; *} )<!-- END REF-->
<!--REF #_command_.SET ASSERT ENABLED.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| asserções | Boolean | &#8594;  | TRUE = Ativa asserções FALSE = desativa asserções |
| * | Operador | &#8594;  | Se omitido = comando aplica a todos os processos (existidos ou que serão criados) se passado, o comando = aplica apenas ao processo atual. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET ASSERT ENABLED.Summary-->O comando SET ASSERT ENABLED é utilizado para desativar ou reativar as asserções inseridas no código 4D da aplicação.<!-- END REF--> Para maior informação sobre asserções, consulte a descrição do comando [ASSERT](assert.md). 

Automaticamente, as asserções adicionadas no programa estão ativas. Este comando é útil para desativá-las já que sua avaliação pode ser problemática em termos de tempo de execução e você também poderia querer ocultá-las do usuário final da aplicação. Em geral, o comando SET ASSERT ENABLEDpode ser utilizado no método banco On Startup para ativar o desativar asserções em função de se a aplicação está em modo "Provaa" ou em modo "Produção". 

Normalmente, o comando SET ASSERT ENABLED afeta todos os processos da aplicação. Para limitar o efeito do comando ao processo atual unicamente, passe o parâmetro *\**.

Por favor considere que quando as asserções estão desativadas, as expressões passadas aos comandos [ASSERT](assert.md) não são avaliadas. As linhas de código que chamam a [ASSERT](assert.md) não têm mais efeito no funcionamento da aplicação, nem en termos de comportamento nem em termos de rendimento. 

#### Exemplo 

Desativação de asserções

```4d
 SET ASSERT ENABLED(False)
 ASSERT(TestMethod) // TestMethod não será chamada já que as asserções estão desativadas
```

#### Ver também 

[ASSERT](assert.md)  
[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  