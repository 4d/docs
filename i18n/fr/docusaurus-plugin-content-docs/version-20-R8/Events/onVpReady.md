---
id: onVpReady
title: On VP Ready
---

| Code | Peut être appelé par                                    | Définition                                       |
| ---- | ------------------------------------------------------- | ------------------------------------------------ |
| 9    | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) | Le chargement de la zone 4D View Pro est terminé |

## Description

Cet événement est généré lorsque le chargement de la zone 4D View Pro est terminé.

Vous devez utiliser cet événement pour écrire le code d'initialisation de la zone. Tout code d'initialisation de zone 4D View Pro, pour le chargement ou la lecture de valeurs issues de la zone ou contenues dans la zone, doit se trouver dans l'événement formulaire `On VP Ready` de la zone. Cet événement formulaire est déclenché une fois le chargement de la zone terminé. Tester cet événement vous garantit que le code sera exécuté dans un contexte valide. Une erreur est retournée si une commande 4D View Pro est appelée avant la génération de l'événement formulaire `On VP Ready`.

> Les zones 4D View Pro sont chargées de manière asynchrone dans les formulaires 4D. Cela signifie que l'événement standard [On load](onLoad.md) form ne peut pas être utilisé pour le code d'initialisation de 4D View Pro, car il pourrait être exécuté avant la fin du chargement de la zone. `On VP Ready` est toujours généré après [On load](onLoad.md).
