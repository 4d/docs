---
id: onPageChange
title: Sur changement page
---

| Code | Peut être appelé par | Définition                                  |
| ---- | -------------------- | ------------------------------------------- |
| 56   | Formulaire           | La page courante du formulaire est modifiée |

## Description

Cet événement n'est disponible qu'au niveau du formulaire (il est appelé dans la méthode formulaire). It is generated each time the current page of the form changes (following a call to the `FORM GOTO PAGE` command or a standard navigation action).

Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including [Web areas](FormObjects/webArea_overview.md).

> The only exception is 4D View Pro areas, for which you need to call the [On VP Ready](onVpReady.md) specific event.

The `On Page Change` event is useful for executing code that requires all objects to be initialized beforehand. Vous pouvez également l'utiliser pour optimiser l'application en exécutant du code (par exemple, une recherche) uniquement après l'affichage d'une page spécifique du formulaire et pas seulement dès que la page 1 est chargée. Si l'utilisateur ne va pas sur cette page, le code n'est pas exécuté.
