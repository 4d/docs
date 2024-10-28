---
id: onPageChange
title: On Page Change
---

| Code | Pode ser chamado por | Definição                               |
| ---- | -------------------- | --------------------------------------- |
| 56   | Formulário           | A página atual do formulário é alterada |

## Descrição

This event is only available at the form level (it is called in the form method). Se genera cada vez que la página actual del formulario cambia (tras una llamada al comando `FORM GOTO PAGE` o una acción de navegación estándar).

Note que se genera después de que la página esté completamente cargada, es decir, una vez que todos los objetos que contiene están inicializados, incluyendo [áreas web](FormObjects/webArea_overview.md).

> La única excepción son las áreas 4D View Pro, para las que hay que llamar al evento específico [On VP Ready](onVpReady.md).

El evento `On Page Change` es útil para ejecutar código que requiere que todos los objetos sean previamente inicializados. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. Se o usuário não for a esta página, o código não é executado.
