---
id: onPageChange
title: On Page Change
---

| Code | Puede ser llamado por | Definición                                |
| ---- | --------------------- | ----------------------------------------- |
| 56   | Formulario            | Se cambia la página actual del formulario |

## Descripción

Este evento sólo está disponible a nivel del formulario (se llama en el método formulario). Se genera cada vez que la página actual del formulario cambia (tras una llamada al comando `FORM GOTO PAGE` o una acción de navegación estándar).

Note que se genera después de que la página esté completamente cargada, es decir, una vez que todos los objetos que contiene están inicializados, incluyendo [áreas web](FormObjects/webArea_overview.md).

> La única excepción son las áreas 4D View Pro, para las que hay que llamar al evento específico [On VP Ready](onVpReady.md).

El evento `On Page Change` es útil para ejecutar código que requiere que todos los objetos sean previamente inicializados. También se puede utilizar para optimizar la aplicación ejecutando el código (por ejemplo, una búsqueda) sólo después de que se muestre una página específica del formulario y no tan pronto como se cargue la página 1. Si el usuario no va a esta página, el código no se ejecuta.
