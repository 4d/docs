---
id: get-last-update-log-path
title: Get last update log path
slug: /commands/get-last-update-log-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last update log path.Syntax-->**Get last update log path** : Text<!-- END REF-->
<!--REF #_command_.Get last update log path.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Ruta de acceso del historial de actualización más reciente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get last update log path.Summary-->El comando **Get last update log path** devuelve la ruta de acceso completa del archivo de historial de actualización más reciente en la máquina donde se llama.<!-- END REF-->  
  
El historial de actualización es generado por 4D durante el proceso de actualización automático. Contiene información sobre los cambios realizados, así como los errores que se produjeron.

Este comando está destinado a ser utilizado en un proceso de actualización automática para una aplicación fusionada (servidor o monousuario). Para más información, consulte *Terminar y desplegar aplicaciones finales* en el manual de *Diseño*.

#### Ver también 

[RESTART 4D](restart-4d.md)  
[SET UPDATE FOLDER](set-update-folder.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1301 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


