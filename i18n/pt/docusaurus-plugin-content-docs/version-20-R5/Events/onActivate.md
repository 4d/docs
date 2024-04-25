---
id: onActivate
title: On Activate
---

| Code | Pode ser chamado por | Definição                                                                                            |
| ---- | -------------------- | ---------------------------------------------------------------------------------------------------- |
| 11   | Formulário           | A janela do formulário torna-se a janela mais à frente ou o contentor do subformulário recebe o foco |

## Descrição

Se a janela de um formulário foi enviada para segundo plano, este evento é chamado quando a janela se torna a janela mais à frente.

Este evento aplica-se ao formulário como um todo e não a um objecto específico. Consequently, if the `On Activate` form event property is selected, only the form will have its form method called.

In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the [focusable](FormObjects/properties_Entry.md#focusable) property).
