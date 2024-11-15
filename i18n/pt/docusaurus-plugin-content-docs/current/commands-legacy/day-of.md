---
id: day-of
title: Day of
slug: /commands/day-of
displayed_sidebar: docs
---

<!--REF #_command_.Day of.Syntax-->**Day of** ( *data* ) : Integer<!-- END REF-->
<!--REF #_command_.Day of.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| data | Date | &#8594;  | Data a qual para devolver o dia |
| Resultado | Integer | &#8592; | Dia do mês da data |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Day of.Summary-->O comando Day of retorna o dia do mês de *data*.<!-- END REF-->

**Nota:** Day of retorna um valor entre 1 e 31\. Para obter o dia da semana de uma data, utilize o comando [Day number](day-number.md "Day number").

#### Exemplo 1 

O seguinte exemplo mostra o uso de Day of. Os valores são atribuídos à variável *vResult*. Os comentários descrevem o valor em *vResult*: 

```4d
 vResult:=Day of(!25/12/92!) // vResult recebe o valor 25
 vResult:=Day of(Current date) // vResult toma o valor do día da data atual
```

#### Exemplo 2 

Veja o exemplo para o comando [Current date](current-date.md "Current date"). 

#### Ver também 

[Day number](day-number.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  