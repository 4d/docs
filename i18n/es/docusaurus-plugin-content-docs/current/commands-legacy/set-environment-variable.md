---
id: set-environment-variable
title: SET ENVIRONMENT VARIABLE
slug: /commands/set-environment-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Syntax-->**SET ENVIRONMENT VARIABLE** ( *nomVar* ; *valorVar* )<!-- END REF-->
<!--REF #_command_.SET ENVIRONMENT VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomVar | Text | &rarr; | Nombre de la variable a definir |
| valorVar | Text | &rarr; | Valor de la variable o "" para restablecer el valor por defecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Summary-->El comando **SET ENVIRONMENT VARIABLE** permite fijar el valor de una variable de entorno bajo macOS y Windows.<!-- END REF--> Está diseñado para utilizarse con el comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md). También funciona con el comando [PHP Execute](php-execute.md).  
  
Pase el nombre de la variable a definir en *nomVar* y su valor en *valorVar*.

* Para obtener la lista general de las variables de entorno y sus posibles valores, por favor consulte la documentación técnica de su sistema operativo.
* Tres variables entorno específicas están disponibles para uso en el contexto del comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md):  
*\_4D\_OPTION\_CURRENT\_DIRECTORY*  
*\_4D\_OPTION\_HIDE\_CONSOLE* (Windows únicamente)  
*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*.  
    
Para información sobre estas variables, consulte la documentación del comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md).

#### Ejemplo 

Consulte los ejemplos del comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md). 

#### Ver también 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  