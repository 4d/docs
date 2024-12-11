---
id: is-data-file-locked
title: Is data file locked
slug: /commands/is-data-file-locked
displayed_sidebar: docs
---

<!--REF #_command_.Is data file locked.Syntax-->**Is data file locked**  : Boolean<!-- END REF-->
<!--REF #_command_.Is data file locked.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = archivo/segmento bloqueado False = archivo/segmento no bloqueado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is data file locked.Summary-->El comando Is data file locked devuelve True si el archivo de datos de la base abierta o al menos uno de sus segmentos está bloquedo, es decir protegido contra escritura.<!-- END REF--> 

Por ejemplo si se usa en el método de base de datos On Startup, este comando permite la prevención de cualquier riesgo de apertura accidental de un archivo de datos bloqueado. 

#### Ejemplo 

Este método evitará la apertura de la base si el archivo de datos está bloqueado: 

```4d
 If(Is data file locked)
    ALERT("El archivo de datos está bloqueado. Imposible abrir la base.")
    QUIT 4D
 End if
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 716 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


