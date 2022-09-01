---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Peut être appelé par                         | Définition                       |
| ---- | -------------------------------------------- | -------------------------------- |
| 53   | [Zones Web](FormObjects/webArea_overview.md) | Une fenêtre pop-up a été bloquée |


## Description

Cet événement est généré lorsque l'ouverture d'une fenêtre pop-up est bloquée par la zone Web. Les zones Web de 4D ne permettent pas l'ouverture de fenêtres contextuelles.

Vous pouvez identifier l'URL bloquée à l'aide de la commande `WA Get last filtered URL`.


### Voir également
[`On Open External Link`](onOpenExternalLink.md)