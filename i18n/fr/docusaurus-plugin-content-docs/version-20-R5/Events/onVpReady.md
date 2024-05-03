---
id: onVpReady
title: On VP Ready
---

| Code | Peut être appelé par                                    | Définition                                       |
| ---- | ------------------------------------------------------- | ------------------------------------------------ |
| 9    | [4D View Pro Area](FormObjects/viewProArea_overview.md) | Le chargement de la zone 4D View Pro est terminé |

## Description

Cet événement est généré lorsque le chargement de la zone 4D View Pro est terminé.

Vous devez utiliser cet événement pour écrire le code d'initialisation de la zone. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the `On VP Ready` form event of the area. Cet événement formulaire est déclenché une fois le chargement de la zone terminé. Tester cet événement vous garantit que le code sera exécuté dans un contexte valide. An error is returned if a 4D View Pro command is called before the `On VP Ready` form event is generated.

> Les zones 4D View Pro sont chargées de manière asynchrone dans les formulaires 4D. It means that the standard [On load](onLoad.md) form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. `On VP Ready` is always generated after [On load](onLoad.md).
