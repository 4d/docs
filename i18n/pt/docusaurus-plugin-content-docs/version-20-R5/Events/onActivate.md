---
id: onActivate
title: On Activate
---

| Code | Pode ser chamado por | Definição                                                                                            |
| ---- | -------------------- | ---------------------------------------------------------------------------------------------------- |
| 11   | Formulário           | A janela do formulário torna-se a janela mais à frente ou o contentor do subformulário recebe o foco |

## Descrição

Se a janela de um formulário foi enviada para segundo plano, este evento é chamado quando a janela se torna a janela mais à frente.

Este evento aplica-se ao formulário como um todo e não a um objecto específico. Por lo tanto, si se selecciona la propiedad de evento formulario `On Activate`, sólo se llamará al método formulario.

En el caso de un subformulario, este evento se pasa al subformulario cuando el contenedor obtiene el foco (si tiene la propiedad [focusable](FormObjects/properties_Entry.md#focusable)).
