---
id: onActivate
title: On Activate
---

| Code | Peut être appelé par | Définition                                                                                                           |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 11   | Formulaire           | La fenêtre du formulaire devient la fenêtre de premier plan ou bien le conteneur du sous-formulaire obtient le focus |

## Description

Si la fenêtre d'un formulaire a été envoyée en arrière-plan, cet événement est appelé lorsque la fenêtre devient la fenêtre active.

Cet événement s'applique au formulaire dans son ensemble et non à un objet particulier. Par conséquent, si la propriété d'événement formulaire `On Activate` est sélectionnée, seul le formulaire aura sa méthode formulaire appelée.

Dans le cas d'un sous-formulaire, cet événement est passé au sous-formulaire lorsque le conteneur obtient le focus (s'il possède la propriété [focusable](FormObjects/properties_Entry.md#focusable)).
