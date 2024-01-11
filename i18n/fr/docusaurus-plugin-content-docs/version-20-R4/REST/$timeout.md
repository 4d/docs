---
id: timeout
title: '$timeout'
---


Définit le nombre de secondes pour enregistrer un ensemble d'entités dans le cache de 4D Server (par exemple, `$timeout=1800`)

## Description

[`$method=entityset`]($method.md#methodentityset), passez le nombre de secondes à `$timeout`. Par exemple, si vous souhaitez définir le timeout sur 20 minutes, passez 1200. Par défaut, le timeout est de deux (2) heures.

Une fois le timeout défini, chaque fois qu'un ensemble d'entités est appelé (via `$method=entityset`), le timeout est recalculé en fonction de l'heure courante et du timeout.

Une fois le timeout défini, chaque fois qu'un ensemble d'entités est appelé (via `$method=entityset`), le timeout est recalculé en fonction de l'heure courante et du timeout.

## Exemple

Si un ensemble d'entités est supprimé puis recréé à l'aide de `$method=entityset` avec [`$savedfilter`]($savedfilter.md), le nouveau timeout par défaut est de 10 minutes, quel que soit le timeout que vous avez défini lors de l'appel de `$timeout`.

`GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`