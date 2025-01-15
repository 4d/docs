---
id: onVpReady
title: On VP Ready
---

| Code | Puede ser llamado por                                   | Definición                                  |
| ---- | ------------------------------------------------------- | ------------------------------------------- |
| 9    | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | La carga del área 4D View Pro está completa |

## Descripción

Este evento se genera cuando se completa la carga del área 4D View Pro.

Es necesario utilizar este evento para escribir el código de inicialización del área. Todo código de inicialización de área 4D View Pro, para cargar o leer valores desde o en el área, debe ubicarse en el evento formulario `On VP Ready` del área. Este evento formulario se activa una vez que se ha completado la carga del área. Probar este evento le asegura que el código se ejecutará en un contexto válido. Se devuelve un error si se llama a un comando 4D View Pro antes de que se genere el evento formulario `On VP Ready`.

> Las áreas 4D View Pro se cargan de forma asíncrona en los formularios 4D. Esto significa que el evento formulario estándar [On load](onLoad.md) no puede utilizarse para el código de inicialización de 4D View Pro, ya que podría ejecutarse antes de que se complete la carga del área. `On VP Ready` siempre se genera después de [On load](onLoad.md).
