---
id: timeout
title: '$timeout'
---


Defines the number of seconds to save an entity set in 4D Server's cache (*e.g.*, `$timeout=1800`)

## Description

Pour définir un timeout à un ensemble d'entités que vous créez à l'aide de

[`$method=entityset`]($method.md#methodentityset), passez le nombre de secondes à `$timeout`. Par exemple, si vous souhaitez définir le timeout sur 20 minutes, passez 1200. Par défaut, le timeout est de deux (2) heures.</p> 

Une fois le timeout défini, chaque fois qu'un ensemble d'entités est appelé (via `$method=entityset`), le timeout est recalculé en fonction de l'heure courante et du timeout.

Si un ensemble d'entités est supprimé puis recréé à l'aide de `$method=entityset` avec [`$savedfilter`]($savedfilter.md), le nouveau timeout par défaut est de 10 minutes, quel que soit le timeout que vous avez défini lors de l'appel de `$timeout`.</p> 



## Exemple

Dans l'ensemble d'entités que nous créons, nous définissons le timeout sur 20 minutes :

`GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`