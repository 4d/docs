---
id: onActivate
title: Sur activation
---

| Code | Peut être appelé par | Définition                                                                                                           |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 11   | Formulaire           | La fenêtre du formulaire devient la fenêtre de premier plan ou bien le conteneur du sous-formulaire obtient le focus |

## Description

Si la fenêtre d'un formulaire a été envoyée en arrière-plan, cet événement est appelé lorsque la fenêtre devient la fenêtre active.

Cet événement s'applique au formulaire dans son ensemble et non à un objet particulier. Consequently, if the `On Activate` form event property is selected, only the form will have its form method called.

In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the [focusable](FormObjects/properties_Entry.md#focusable) property).
