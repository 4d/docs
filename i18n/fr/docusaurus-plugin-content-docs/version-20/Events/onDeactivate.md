---
id: onDeactivate
title: On Deactivate
---

| Code | Peut être appelé par | Définition                                              |
| ---- | -------------------- | ------------------------------------------------------- |
| 12   | Formulaire           | La fenêtre du formulaire cesse d'être la fenêtre active |


## Description

Si la fenêtre d'un formulaire était la fenêtre de premier plan, cet événement est appelé lorsque la fenêtre est envoyée en arrière-plan.

Cet événement s'applique au formulaire dans son ensemble et non à un objet particulier. Par conséquent, si la propriété de l'événement formulaire `On Deactivate` est sélectionnée, seul le formulaire verra sa méthode formulaire appelée.

### Voir également
[On Activate](onActivate.md)