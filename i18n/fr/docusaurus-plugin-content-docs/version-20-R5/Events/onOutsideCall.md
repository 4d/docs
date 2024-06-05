---
id: onOutsideCall
title: Sur appel extérieur
---

| Code | Peut être appelé par | Définition                                        |
| ---- | -------------------- | ------------------------------------------------- |
| 10   | Formulaire           | Le formulaire a reçu un appel `POST OUTSIDE CALL` |

## Description

Cet événement est appelé lorsque le formulaire est appelé à partir d'un autre processus via la commande `POST OUTSIDE CALL`.

> L'événement `On Outside Call` modifie le contexte de saisie du formulaire. In particular, if a field was being edited, the [`On Data Change`](onDataChange.md) event is generated.
