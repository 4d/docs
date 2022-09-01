---
id: onDeactivate
title: On Deactivate
---

| Code | Can be called by | Definição                                           |
| ---- | ---------------- | --------------------------------------------------- |
| 12   | Formulário       | The form’s window ceases to be the frontmost window |


## Descrção

If the window of a form was the frontmost window, this event is called when the window is sent to the background.

This event applies to the form as a whole and not to a particular object. Consequently, if the `On Deactivate` form event property is selected, only the form will have its form method called.

### Veja também
[On Activate](onActivate.md)