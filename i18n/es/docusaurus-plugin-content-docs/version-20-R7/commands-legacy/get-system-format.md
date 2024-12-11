---
id: get-system-format
title: GET SYSTEM FORMAT
slug: /commands/get-system-format
displayed_sidebar: docs
---

<!--REF #_command_.GET SYSTEM FORMAT.Syntax-->**GET SYSTEM FORMAT** ( *formato* ; *valor* )<!-- END REF-->
<!--REF #_command_.GET SYSTEM FORMAT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| formato | Integer | &#8594;  | Formato de sistema a recuperar |
| valor | Text | &#8592; | Formato de sistema a recuperar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET SYSTEM FORMAT.Summary-->El comando GET SYSTEM FORMAT devuelve el valor actual de varios parámetros regionales definidos en el sistema operativo.<!-- END REF--> Este comando puede utilizarse para crear formatos personalizados “automáticos” basados en las preferencias del sistema. 

En el parámetro *formato*, pase el tipo del parámetro del que quiere conocer el valor. El resultado es devuelto directamente por el sistema en el parámetro *valor* como una cadena de caracteres. En *formato*, debe pasar una de las siguientes constantes del tema “”. Esta es la descripción de estas constantes:

| Constante                  | Tipo         | Valor | Comentario                                                                                           |
| -------------------------- | ------------ | ----- | ---------------------------------------------------------------------------------------------------- |
| Currency symbol            | Entero largo | 2     | Símbolo de moneda (ej.: “$”)                                                                         |
| Date separator             | Entero largo | 13    | Separador utilizado en formatos de fecha (ej.: “/”)                                                  |
| Decimal separator          | Entero largo | 0     | Separador decimal (ej.: “.”)                                                                         |
| Short date day position    | Entero largo | 15    | Posición de día en el formato de fecha corto: “1” = izquierda, “2” = en el medio, “3” = a la derecha |
| Short date month position  | Entero largo | 16    | Posición del mes en formato de fecha corto: “1” = izquierda, “2” = en el medio, “3” = a la derecha   |
| Short date year position   | Entero largo | 17    | Posición del año en el formato de fecha corto: “1” = izquierda, “2” = medio, “3” = derecha           |
| System date long pattern   | Entero largo | 8     | Formato de salida de fecha largo “dddd MMMM yyyy”                                                    |
| System date medium pattern | Entero largo | 7     | Formato de salida de fecha medio en la forma “dddd MMMM yyyy”                                        |
| System date short pattern  | Entero largo | 6     | Formato de salida de fecha corto en la forma “dddd MMMM yyyy”                                        |
| System time AM label       | Entero largo | 18    | Etiqueta adicional para una hora antes del medio día en formatos de 12 horas (ej.: “Mañana”)         |
| System time long pattern   | Entero largo | 5     | Formato de salida de hora largo en la forma “HH:MM:SS”                                               |
| System time medium pattern | Entero largo | 4     | Formato de salida de hora medio en la forma “HH:MM:SS”                                               |
| System time PM label       | Entero largo | 19    | Etiqueta adicional para una hora luego del medio día en formatos de 12 horas (ej.: “tarde”)          |
| System time short pattern  | Entero largo | 3     | Formato de salida de hora corto en forma “HH:MM:SS”                                                  |
| Thousand separator         | Entero largo | 1     | Separador de miles (ej.: “,”)                                                                        |
| Time separator             | Entero largo | 14    | Separador utilizado en formatos de hora (ej.: “:”)                                                   |

#### Ver también 

[OBJECT SET FORMAT](object-set-format.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 994 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


