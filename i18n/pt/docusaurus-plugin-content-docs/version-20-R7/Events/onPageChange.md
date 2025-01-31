---
id: onPageChange
title: On Page Change
---

| Code | Pode ser chamado por | Definição                               |
| ---- | -------------------- | --------------------------------------- |
| 56   | Formulário           | A página atual do formulário é alterada |

## Descrição

Este evento só está disponível no nível do formulário (ele é chamado no método formulário). Se genera cada vez que la página actual del formulario cambia (tras una llamada al comando `FORM GOTO PAGE` o una acción de navegación estándar).

Note que se genera después de que la página esté completamente cargada, es decir, una vez que todos los objetos que contiene están inicializados, incluyendo [áreas web](FormObjects/webArea_overview.md).

> La única excepción son las áreas 4D View Pro, para las que hay que llamar al evento específico [On VP Ready](onVpReady.md).

El evento `On Page Change` es útil para ejecutar código que requiere que todos los objetos sean previamente inicializados. Você também pode usá-lo para otimizar a aplicação executando o código (por exemplo, uma busca) somente após uma página específica do formulário ser exibida e não assim que a página 1 for carregada. Se o usuário não for a esta página, o código não é executado.
