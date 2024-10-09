---
id: records-in-set
title: Records in set
slug: /commands/records-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Records in set.Syntax-->**Records in set** ( *conjunto* ) -> Resultado Função<!-- END REF-->
<!--REF #_command_.Records in set.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto | Text | &srarr; | Nome do conjunto a testar |
| Resultado Função | Inteiro longo | &larr; | Número de registros em conjunto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Records in set.Summary-->Records in set retorna o número de registros em *conjunto*.<!-- END REF--> Se *conjunto* não existir, ou se não houver registros em *conjunto*, o comando retorna 0.

#### Exemplo 

O seguinte exemplo mostra um alerta indicando a porcentagem de clientes classificados como sendo os melhores: 

```4d
  // Calcular primero a porcentagem
 $Porcentagem :=(Records in set("Melhores")/Records in table([Clientes]))*100
  // Mostrar um alerta com a porcentagem
 ALERT(String($Porcentagem ;"##0%")+" de nossos clientes são os melhores.")
```

#### Ver também 

[Records in selection](records-in-selection.md)  
[Records in table](records-in-table.md)  