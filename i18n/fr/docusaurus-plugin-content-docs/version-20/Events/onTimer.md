---
id: onTimer
title: On Timer
---

| Code | Peut être appelé par | Définition                                                            |
| ---- | -------------------- | --------------------------------------------------------------------- |
| 27   | Formulaire           | Le nombre de graduations défini par la commande `SET TIMER` est passé |


## Description

Cet événement est généré uniquement si la méthode formulaire contient un appel à la commande `SET TIMER` réalisé antérieurement.

Lorsque la propriété d'événement formulaire `On Timer` est sélectionnée, seule la méthode formulaire recevra l'événement, aucune méthode objet ne sera appelée.