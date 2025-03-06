---
id: day-number
title: Day number
slug: /commands/day-number
displayed_sidebar: docs
---

<!--REF #_command_.Day number.Syntax-->**Day number** ( *data* ) : Integer<!-- END REF-->
<!--REF #_command_.Day number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| data | Date | &#8594;  | Data para a qual devolver o número do dia |
| Resultado | Integer | &#8592; | Número que representa o dia da semana que corresponde a data |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Day number.Summary-->O comando Day number retorna um número que representa o dia da semana que corresponde a *data*.<!-- END REF-->Day Number retorna *2* para datas nulas. 

4D oferece as seguintes constantes pré-definidas:

| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Sunday    | Inteiro longo | 1     |
| Monday    | Inteiro longo | 2     |
| Tuesday   | Inteiro longo | 3     |
| Wednesday | Inteiro longo | 4     |
| Thursday  | Inteiro longo | 5     |
| Friday    | Inteiro longo | 6     |
| Saturday  | Inteiro longo | 7     |

**Nota:** Day number retorna um valor entre 1 e 7\. Para obter o número de dia no mês para uma data, utilize o comando [Day of](day-of.md "Day of").

#### Exemplo 

O seguinte exemplo é uma função que retorna o dia atual como uma string:

```4d
 $viDia :=Day number(Current date) // $viDia toma o valor do número do dia atual
 Case of
    :($viDia =1)
       $0:="Domingo"
    :($viDia =2)
       $0:="Lunes"
    :($viDia =3)
       $0:="Martes"
    :($viDia =4)
       $0:="Miércoles"
    :($viDia =5)
       $0:="Jueves"
    :($viDia =6)
       $0:="Viernes"
    :($viDia =7)
       $0:="Sábado"
 End case
```

#### Ver também 

[Day of](day-of.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 114 |
| Thread-seguro | &check; |


