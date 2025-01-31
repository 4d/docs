---
id: month-of
title: Month of
slug: /commands/month-of
displayed_sidebar: docs
---

<!--REF #_command_.Month of.Syntax-->**Month of** ( *data* ) : Integer<!-- END REF-->
<!--REF #_command_.Month of.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| data | Date | &#8594;  | Data para a qual devolver o mês |
| Resultado | Integer | &#8592; | Número que indica o mês da data |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Month of.Summary-->O comando Month of retorna o mês de *data*.<!-- END REF-->Month of retorna o número do mês, não o nome. (ver exemplo 1).

Para comparar o valor retornado por esta função, 4D oferece as seguintes constantes pré-definidas, que se encontram no tema "Days and Months":

| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| January   | Inteiro longo | 1     |
| February  | Inteiro longo | 2     |
| March     | Inteiro longo | 3     |
| April     | Inteiro longo | 4     |
| May       | Inteiro longo | 5     |
| June      | Inteiro longo | 6     |
| July      | Inteiro longo | 7     |
| August    | Inteiro longo | 8     |
| September | Inteiro longo | 9     |
| October   | Inteiro longo | 10    |
| November  | Inteiro longo | 11    |
| December  | Inteiro longo | 12    |

#### Exemplo 1 

O seguinte exemplo mostra o uso de Month of. Os resultados são atribuídos à variável *vResult*. Os comentários descrevem o que está em *vResult*: 

```4d
 vResult:=Month of(!25/12/92!) // vResult obtém o valor 12
 vResult:=Month of(Current date) // vResult obtém o mês da data atual
```

#### Exemplo 2 

Ver o exemplo do comando [Current date](current-date.md "Current date").

#### Ver também 

[Day of](day-of.md)  
[Year of](year-of.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 24 |
| Thread-seguro | &check; |


