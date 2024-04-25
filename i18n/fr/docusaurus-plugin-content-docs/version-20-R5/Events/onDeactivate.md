---
id: onDeactivate
title: On Deactivate
---

| Code | Peut être appelé par | Définition                                              |
| ---- | -------------------- | ------------------------------------------------------- |
| 12   | Formulaire           | La fenêtre du formulaire cesse d'être la fenêtre active |

## Description

Si la fenêtre d'un formulaire était la fenêtre de premier plan, cet événement est appelé lorsque la fenêtre est envoyée en arrière-plan.

Cet événement s'applique au formulaire dans son ensemble et non à un objet particulier. Consequently, if the `On Deactivate` form event property is selected, only the form will have its form method called.

### Voir également

[On Activate](onActivate.md)
