---
id: onActivate
title: Sur activation
---

| Code | Peut être appelé par | Définition                                                                               |
| ---- | -------------------- | ---------------------------------------------------------------------------------------- |
| 11   | Formulaire           | The form's window becomes the frontmost window or the subform's container gets the focus |


## Description

Si la fenêtre d'un formulaire a été envoyée en arrière-plan, cet événement est appelé lorsque la fenêtre devient la fenêtre active.

Cet événement s'applique au formulaire dans son ensemble et non à un objet particulier. Par conséquent, si la propriété d'événement formulaire `On Activate` est sélectionnée, seul le formulaire aura sa méthode formulaire appelée.

In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the [focusable](FormObjects/properties_Entry.md#focusable) property). 