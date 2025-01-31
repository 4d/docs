---
id: get-field-properties
title: GET FIELD PROPERTIES
slug: /commands/get-field-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD PROPERTIES.Syntax-->**GET FIELD PROPERTIES** ( campPtr | tablaNum {; *numCamp*}; *campTipo* {; *campLong* {; *indexado* {; *unico* {; *invisible*}}}} )<!-- END REF-->
<!--REF #_command_.GET FIELD PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campPtr &#124; tablaNum | Puntero, Entero largo | &#8594;  | Puntero de campo o Número de tabla |
| numCamp | Integer | &#8594;  | Número de campo si se pasa un número de tabla |
| campTipo | Integer | &#8592; | Tipo de campo |
| campLong | Integer | &#8592; | Longitud del campo, si es alfanumérico |
| indexado | Boolean | &#8592; | True = Indexado, False = No indexado |
| unico | Boolean | &#8592; | True = único, False = No único |
| invisible | Boolean | &#8592; | True = Invisible, False = Visible |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET FIELD PROPERTIES.Summary-->El comando **GET FIELD PROPERTIES** devuelve información sobre el campo designado por *campPtr* o por *tablaNum* y *campNum*.<!-- END REF--> 

Puede pasar:

* los números de tabla y de campo en *tablaNum* y *campNum*, o
* un puntero al campo en *campPtr*.

Después de la llamada:

* *campTipo* devuelve el tipo del campo. El parámetro variable *campTipo* recibe uno de los valores predefinidos por las constantes de 4D (tema *Tipos de campos y variables*): 
 
|Constante          | Tipo         | Valor |  
| ------------------ | ------------ | ----- |  
| Is alpha field     | Entero largo | 0     |  
| Is BLOB            | Entero largo | 30    |  
| Is Boolean         | Entero largo | 6     |  
| Is date            | Entero largo | 4     |  
| Is float           | Entero largo | 35    |  
| Is integer         | Entero largo | 8     |  
| Is integer 64 bits | Entero largo | 25    |  
| Is longint         | Entero largo | 9     |  
| Is object          | Entero largo | 38    |  
| Is picture         | Entero largo | 3     |  
| Is real            | Entero largo | 1     |  
| Is subtable        | Entero largo | 7     |  
| Is text            | Entero largo | 2     |  
| Is time            | Entero largo | 11    |
* El parámetro *campLong* devuelve la longitud del campo, si el campo es alfanumérico (es decir, *campTipo=Is Alpha Field*). El valor de *campField* no es significativo para los otros tipos de campo.
* El parámetro *indexado* devuelve True si el campo está indexado, de lo contrario False. El valor de *indexado* es significativo únicamente para campos de tipo Alfanumérico, Entero, Entero largo, Real, Fecha, Hora y Booleano.
* El parámetro *unico* devuelve True si el campo está definido como “único”, de lo contrario False.
* El parámetro *invisible* devuelve True si el campo está definido como “Invisible”, de lo contrario False. El atributo invisible puede ser utilizado para ocultar un campo en el editor estándar de 4D (etiquetas, gráficos...).

#### Ejemplo 1 

En este ejemplo, las variables *vTipo*, *vLong*, *vIndex*, *vUnico* y *vInvisible* toman por valor las propiedades del tercer campo de la primera tabla:

```4d
 GET FIELD PROPERTIES(1;3;vTipo;vLong;vIndex;vUnico;vInvisible)
```

#### Ejemplo 2 

Este ejemplo recupera en las variables *vTipo*, *vLong*, *vIndex*, *vUnico* y *vInvisible* las propiedades del campo \[Tabla3\]Campo2:

```4d
 GET FIELD PROPERTIES(->[Tabla3]Campo2;vTipo;vLong;vIndex;vUnico;vInvisible)
```

#### Ver también 

[Field](field.md)  
[Field name](field-name.md)  
[SET INDEX](set-index.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 258 |
| Hilo seguro | &check; |


