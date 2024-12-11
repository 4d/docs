---
id: use-set
title: USE SET
slug: /commands/use-set
displayed_sidebar: docs
---

<!--REF #_command_.USE SET.Syntax-->**USE SET** ( *conjunto* )<!-- END REF-->
<!--REF #_command_.USE SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nome do conjunto a usar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.USE SET.Summary-->USE SET transforma os registros em *conjunto* na nova seleção atual para a tabela para o qual pertence o conjunto

Quando cria um conjunto, a posição do registro atual é lembrada pelo conjunto USE SET recupera esta informação e faz do registro o novo registro atual.<!-- END REF--> Se apagar este registro antes de executar USE SET, 4D seleciona como registro atual o primeiro registro do conjunto. Os comandos de Conjuntos [UNION](union.md), [INTERSECTION](intersection.md), [DIFFERENCE](difference.md) e [ADD TO SET](add-to-set.md) reinicializam o registro atual. Além disso, se você criar um conjunto que não contenha posição do registro atual, USE SET seleciona o primeiro registro no conjunto como sendo o registro atual.  
  
**Advertência**: lembre que um conjunto é a representação de uma seleção de registros no momento da criação do conjunto. Se os registros representados pelo conjunto forem modificados, o conjunto poderia não ser válido. Portanto, um conjunto guardado no disco deve representar um grupo de registros que não modifique frequentemente. Muitos eventos podem invalidar a validade de um conjunto, como por exemplo a eliminação ou modificação de um registro do conjunto, ou a modificação dos critérios de criação do conjunto.

#### Exemplo 

O seguinte exemplo utiliza [LOAD SET](load-set.md) para carregar um conjunto de localizações da empresa Acme localizada em Nova Iorque. Depois utiliza USE SET para fazer do conjunto a seleção atual:   

```4d
 LOAD SET([Empresas];"NY Acme";"NYAcmeSt") // Carregar o conjunto em memória
 &NBSP;USE SET("NY Acme") // Modificar a seleção atual a NY Acme
 &NBSP;CLEAR SET("NY Acme") // Apagar o conjunto da memória
```

#### Ver também 

[CLEAR SET](clear-set.md)  
[LOAD SET](load-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 118 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||
| Proibido no servidor ||


