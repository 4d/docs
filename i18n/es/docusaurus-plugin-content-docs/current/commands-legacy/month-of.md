---
id: month-of
title: Month of
slug: /commands/month-of
displayed_sidebar: docs
---

<!--REF #_command_.Month of.Syntax-->**Month of** ( *fecha* ) : Integer<!-- END REF-->
<!--REF #_command_.Month of.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fecha | Date | &#8594;  | Fecha para la cual devolver el mes |
| Resultado | Integer | &#8592; | Número que indica el mes de la fecha |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Month of.Summary-->El comando Month of devuelve el mes de *fecha*.<!-- END REF-->Month of devuelve el número del mes, no el nombre. (ver ejemplo 1).

Para comparar el valor devuelto por esta función, 4D ofrece las siguientes constantes predefinidas, que se encuentran en el tema "Days and Months":

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| January   | Entero largo | 1     |
| February  | Entero largo | 2     |
| March     | Entero largo | 3     |
| April     | Entero largo | 4     |
| May       | Entero largo | 5     |
| June      | Entero largo | 6     |
| July      | Entero largo | 7     |
| August    | Entero largo | 8     |
| September | Entero largo | 9     |
| October   | Entero largo | 10    |
| November  | Entero largo | 11    |
| December  | Entero largo | 12    |

#### Ejemplo 1 

El siguiente ejemplo muestra el uso de Month of. Los resultados se asignan a la variable *vResult*. Los comentarios describen lo que está en *vResult*:

```4d
 vResult:=Month of(!25/12/92!) // vResult obtiene el valor 12
 vResult:=Month of(Current date) // vResult obtiene el mes de la fecha actual
```

#### Ejemplo 2 

Ver el ejemplo del comando [Current date](current-date.md "Current date").

#### Ver también 

[Day of](day-of.md)  
[Year of](year-of.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 24 |
| Hilo seguro | &check; |


