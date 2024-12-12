---
id: time-string
title: Time string
slug: /commands/time-string
displayed_sidebar: docs
---

<!--REF #_command_.Time string.Syntax-->**Time string** ( *segundos* ) : Text<!-- END REF-->
<!--REF #_command_.Time string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| segundos | Integer, Time | &#8594;  | Segundos desde a meia noite |
| Resultado | Text | &#8592; | Hora como uma cadeia em formato 24 horas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Time string.Summary-->O comando Time string retorna a string da expressão tipo hora que passou em *segundos*.<!-- END REF-->

O formato da string é HH:MM:SS.

Se passar um número de segundos superior ao número de segundos que há em um dia (86 400), Time string continua adicionando horas, minutos e segundos. Por exemplo, Time string (86401) retorna 24:00:01.

**Nota:** se necesitar o formato da string da expressão de tipo hora em uma variedade de formatos, utilize [String](string.md "String").

#### Exemplo 

O exemplo a seguir mostra uma caixa de alerta com a mensagem, “46 800 segundos representam 13:00:00.”

```4d
 ALERT("46800 segundos representam "+Time string(46800))
```

#### Ver também 

[String](string.md)  
[Time](time.md)  