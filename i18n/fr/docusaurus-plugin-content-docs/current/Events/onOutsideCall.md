---
id: onOutsideCall
title: On Outside Call
---

| Code | Peut être appelé par | Définition                                        |
| ---- | -------------------- | ------------------------------------------------- |
| 10   | Formulaire           | Le formulaire a reçu un appel `POST OUTSIDE CALL` |

## Description

Cet événement est appelé lorsque le formulaire est appelé à partir d'un autre process via la commande `POST OUTSIDE CALL`.

> L'événement `On Outside Call` modifie le contexte de saisie du formulaire. En particulier, si un champ était en cours de modification, l'événement [`On Data Change`](onDataChange.md) est généré.
