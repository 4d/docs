---
id: onPageChange
title: On Page Change
---

| Code | Peut être appelé par | Définition                                  |
| ---- | -------------------- | ------------------------------------------- |
| 56   | Formulaire           | La page courante du formulaire est modifiée |


## Description

Cet événement n'est disponible qu'au niveau du formulaire (il est appelé dans la méthode formulaire). Il est généré à chaque fois que la page courante du formulaire change (suite à un appel à la commande `FORM GOTO PAGE` ou à une action de navigation standard).

A noter qu'il est généré après le chargement complet de la page, c'est-à-dire une fois tous les objets qu'elle contient sont initialisés, y compris les [zones Web](FormObjects/webArea_overview.md).

> La seule exception concerne les zones 4D View Pro, pour lesquelles vous devez appeler l'événement spécifique [On VP Ready](onVpReady.md).

L'événement `On Page Change` est utile pour exécuter du code qui nécessite que tous les objets soient préalablement initialisés. Vous pouvez également l'utiliser pour optimiser l'application en exécutant du code (par exemple, une recherche) uniquement après l'affichage d'une page spécifique du formulaire et pas seulement dès que la page 1 est chargée. Si l'utilisateur ne va pas sur cette page, le code n'est pas exécuté.