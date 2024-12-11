---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors**  : Collection<!-- END REF-->
<!--REF #_command_.Last errors.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Colección de objetos de error |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Last errors.Summary-->El comando **Last errors** devuelve la pila actual de errores de la aplicación 4D como una colección de objetos de error, o **null** si no se ha producido ningún error.<!-- END REF--> La pila de errores incluye los objetos enviados por el comando [throw](throw.md), si los hay.

Cada objeto de error contiene los siguientes atributos:

| **Propiedad**      | **Tipo** | **Descripción**                                    |
| ------------------ | -------- | -------------------------------------------------- |
| errCode            | number   | Código de error                                    |
| message            | text     | Descripción del error                              |
| componentSignature | text     | Firma del componente interno que devolvió el error |
  
  
Este comando debe ser llamado desde un método de llamada de error instalado por el comando [ON ERR CALL](on-err-call.md). 


#### Ver también 

[ON ERR CALL](on-err-call.md)  
[throw](throw.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1799 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


