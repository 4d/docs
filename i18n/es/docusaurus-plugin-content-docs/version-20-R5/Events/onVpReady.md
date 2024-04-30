---
id: onVpReady
title: On VP Ready
---

| Code | Puede ser llamado por                                   | Definición                                  |
| ---- | ------------------------------------------------------- | ------------------------------------------- |
| 9    | [4D View Pro Area](FormObjects/viewProArea_overview.md) | La carga del área 4D View Pro está completa |

## Descripción

Este evento se genera cuando se completa la carga del área 4D View Pro.

Es necesario utilizar este evento para escribir el código de inicialización del área. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the `On VP Ready` form event of the area. Este evento formulario se activa una vez que se ha completado la carga del área. Probar este evento le asegura que el código se ejecutará en un contexto válido. An error is returned if a 4D View Pro command is called before the `On VP Ready` form event is generated.

> Las áreas 4D View Pro se cargan de forma asíncrona en los formularios 4D. It means that the standard [On load](onLoad.md) form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. `On VP Ready` is always generated after [On load](onLoad.md).
