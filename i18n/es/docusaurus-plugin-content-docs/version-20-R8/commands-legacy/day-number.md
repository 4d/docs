---
id: day-number
title: Day number
slug: /commands/day-number
displayed_sidebar: docs
---

<!--REF #_command_.Day number.Syntax-->**Day number** ( *fecha* ) : Integer<!-- END REF-->
<!--REF #_command_.Day number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fecha | Date | &#8594;  | Fecha para la cual devolver el número del día |
| Resultado | Integer | &#8592; | Número que representa el día de la semana que corresponde a la fecha |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Day number.Summary-->El comando Day number devuelve un número que representa el día de la semana que corresponde a la *f* *echa*.<!-- END REF-->Day Number devuelve *2* para fechas nulas. 

4D ofrece las siguientes constantes predefinidas:

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Sunday    | Entero largo | 1     |
| Monday    | Entero largo | 2     |
| Tuesday   | Entero largo | 3     |
| Wednesday | Entero largo | 4     |
| Thursday  | Entero largo | 5     |
| Friday    | Entero largo | 6     |
| Saturday  | Entero largo | 7     |

**Nota:** Day number devuelve un valor entre 1 y 7\. Para obtener el número de día en el mes para una fecha, utilice el comando [Day of](day-of.md "Day of").

#### Ejemplo 

El siguiente ejemplo es una función que devuelve el día actual como una cadena:

```4d
 $viDia :=Day number(Current date) // $viDia toma el valor del número del día actual
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

#### Ver también 

[Day of](day-of.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 114 |
| Hilo seguro | &check; |


