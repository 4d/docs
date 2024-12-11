---
id: get-group-access
title: Get group access
slug: /commands/get-group-access
displayed_sidebar: docs
---

<!--REF #_command_.Get group access.Syntax-->**Get group access** : Collection<!-- END REF-->
<!--REF #_command_.Get group access.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Colección de nombre(s) de grupo al que pertenece el usuario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get group access.Summary-->El comando **Get group access** devuelve las membresías de la cuenta de usuario 4D para la sesión actual.<!-- END REF--> Si el usuario no pertenece a ningún grupo en la sesión, se devuelve una colección vacía.

**Valor devuelto** 

Colección de cadenas: nombres de grupos a los que pertenece la cuenta de usuario 4D.

#### Ejemplo 

Desea verificar si el usuario actual pertenece al grupo "plugins":

```4d
 $groups:=Get group access
 If($groups.countValues("plugins")#0) //el usuario pertenece al grupo
    ... //
 End if
```

#### Ver también 

[SET GROUP ACCESS](set-group-access.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1738 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


