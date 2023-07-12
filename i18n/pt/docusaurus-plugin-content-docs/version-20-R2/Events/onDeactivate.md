---
id: onDeactivate
title: On Deactivate
---

| Code | Pode ser chamado por | Definição                                           |
| ---- | -------------------- | --------------------------------------------------- |
| 12   | Formulário           | The form’s window ceases to be the frontmost window |


## Descrição

If the window of a form was the frontmost window, this event is called when the window is sent to the background.

Este evento aplica-se ao formulário como um todo e não a um objecto específico. Consequently, if the `On Deactivate` form event property is selected, only the form will have its form method called.

### Veja também
[On Activate](onActivate.md)