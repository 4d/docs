---
id: onDeactivate
title: On Deactivate
---

| Code | Peut être appelé par | Définition                                          |
| ---- | -------------------- | --------------------------------------------------- |
| 12   | Formulaire           | The form’s window ceases to be the frontmost window |


## Description

If the window of a form was the frontmost window, this event is called when the window is sent to the background.

Cet événement s'applique au formulaire dans son ensemble et non à un objet particulier. Consequently, if the `On Deactivate` form event property is selected, only the form will have its form method called.

### Voir également
[Sur activation](onActivate.md)