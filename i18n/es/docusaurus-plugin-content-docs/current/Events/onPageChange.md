---
id: onPageChange
title: On Page Change
---

| Code | Puede ser llamado por | Definición                                |
| ---- | --------------------- | ----------------------------------------- |
| 56   | Formulario            | Se cambia la página actual del formulario |

## Descripción

Este evento sólo está disponible a nivel del formulario (se llama en el método formulario). It is generated each time the current page of the form changes (following a call to the `FORM GOTO PAGE` command or a standard navigation action).

Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including [Web areas](FormObjects/webArea_overview.md).

> The only exception is 4D View Pro areas, for which you need to call the [On VP Ready](onVpReady.md) specific event.

The `On Page Change` event is useful for executing code that requires all objects to be initialized beforehand. También se puede utilizar para optimizar la aplicación ejecutando el código (por ejemplo, una búsqueda) sólo después de que se muestre una página específica del formulario y no tan pronto como se cargue la página 1. Si el usuario no va a esta página, el código no se ejecuta.
