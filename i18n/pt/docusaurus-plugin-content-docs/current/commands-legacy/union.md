---
id: union
title: UNION
slug: /commands/union
displayed_sidebar: docs
---

<!--REF #_command_.UNION.Syntax-->**UNION** ( *conjunto1* ; *conjunto2* ; *conjuntoResultado* )<!-- END REF-->
<!--REF #_command_.UNION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto1 | Text | &#8594;  | Primeiro conjunto |
| conjunto2 | Text | &#8594;  | Segundo conjunto |
| conjuntoResultado | Text | &#8594;  | Conjunto Resultado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.UNION.Summary-->UNION cria um novo conjunto que contém todos os registros de *conjunto1 e conjunto2*.<!-- END REF--> A seguinte tabela mostra todos os possíveis resultados de uma operação de união de conjuntos.

  
| **Conjunto1** | **Conjunto2** | **Conjunto resultante** |
| ------------- | ------------- | ----------------------- |
| Sim           | Não           | Sim                     |
| Sim           | Sim           | Sim                     |
| Não           | Sim           | Sim                     |
| Não           | Não           | Não                     |

O resultado de uma operação de união se mostra a continuação. A parte sombreada é o conjunto resultante.  
  
![](../assets/en/commands/pict33125.en.png)  
  
O *conjuntoResultado* se cria por UNION. O conjunto resultado substitui todo conjunto existente que tenha o mesmo nome, incluindo *conjunto1 e conjunto2*. Os conjuntos *conjunto1 e conjunto2* devem ser da mesma tabela. O conjunto resultado pertence à mesma tabela que *conjunto1 e conjunto2*. O registro atual de resultado é o registro atual de conjunto1.  
  
**4D Server**: em modo cliente/Servidor, os conjuntos são "visíveis" dependendo do tipo (interprocesso, processo e local) e onde eles foram criados (servidor ou cliente). UNION exige que todos os três conjuntos estejam na mesma máquina. Para maior informação consulte *4D Server, conjuntos e seleções temporais* no manual de referência de 4D Server.  
  
#### Exemplo 

Este exemplo adiciona registros ao conjunto de melhores clientes. Os registros são mostrados em tela com a primeira linha. Depois de mostrar os registros na tela, um conjunto dos melhores clientes é carregado a partir do disco, e todos os registros selecionados pelo usuário (o conjunto sistema chamado “UserSet”) se adicionam ao conjunto. Finalmente, o novo conjunto é guardado no disco: 

```4d
 ALL RECORDS([Clientes]) // Seleciona todos os clientes
 DISPLAY SELECTION([Clientes]) // Mostrar todos os clientes de uma lista
 LOAD SET("$Melhores";"$SalvarMelhores") // Carregar o conjunto dos melhores clientes
 UNION("$Melhores";"UserSet";"$Melhores") // Adição da seleção ao conjunto
 SAVE SET("$Melhores";"$SalvarMelhores") // Salvar o conjunto dos melhores clientes
```

#### Ver também 

[DIFFERENCE](difference.md)  
[INTERSECTION](intersection.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 120 |
| Thread-seguro | &check; |
| Proibido no servidor ||


