---
id: spell-add-to-user-dictionary
title: SPELL ADD TO USER DICTIONARY
slug: /commands/spell-add-to-user-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Syntax-->**SPELL ADD TO USER DICTIONARY** ( *palabras* )<!-- END REF-->
<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| palabras | Text, Text array | &#8594;  | Palabra o lista de palabras para agregar al diccionario del usuario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Summary-->El comando **SPELL ADD TO USER DICTIONARY** añade una o más palabras al diccionario usuario actual.<!-- END REF-->  
  
El diccionario usuario es un dicccionario que contiene palabras añadidas por el usuario al diccionario actual. Este diccionario es un archivo llamado *UserDictionaryxxx.dic* (donde *xxx* representa el ID del diccionario actual) que se crea automáticamente en la carpeta 4D actual. Hay un diccionario usuario por cada diccionario actual utilizado.   
  
Puede pasar en *palabras* una cadena texto o un array texto con las palabras a añadir al diccionario usuario. Si una de las palabras ya está en el diccionario, es ignorada por el comando.

#### Ejemplo 

Adición de nombres propios al diccionario de usuario:

```4d
 ARRAY TEXT($arrTwords;0)
 APPEND TO ARRAY($arrTwords;"4D")
 APPEND TO ARRAY($arrTwords;"Wakanda")
 APPEND TO ARRAY($arrTwords;"Clichy")
 SPELL ADD TO USER DICTIONARY($arrTwords)
```

#### Ver también 

[SPELL CHECK TEXT](spell-check-text.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1214 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


