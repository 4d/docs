---
id: onActivate
title: On Activate
---

| Code | Pode ser chamado por | Definição                                                                                            |
| ---- | -------------------- | ---------------------------------------------------------------------------------------------------- |
| 11   | Formulário           | A janela do formulário torna-se a janela mais à frente ou o contentor do subformulário recebe o foco |


## Descrição

Se a janela de um formulário foi enviada para segundo plano, este evento é chamado quando a janela se torna a janela mais à frente.

Este evento aplica-se ao formulário como um todo e não a um objecto específico. Consequentemente, se a propriedade de evento de formulário `On Activate` for seleccionada, apenas o formulário terá o seu método formulário chamado.

No caso de um subformulário, este evento é transmitido ao subformulário quando o contentor obtém o foco (se tiver a propriedade [focusable](FormObjects/properties_Entry.md#focusable)). 