---
id: timeout
title: $timeout
---

Définit le nombre de secondes pour enregistrer un ensemble d'entités dans le cache de 4D Server (par exemple, `$timeout=1800`)

## Description

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. Par exemple, si vous souhaitez définir le timeout sur 20 minutes, passez 1200. Par défaut, le timeout est de deux (2) heures.

Une fois le timeout défini, chaque fois qu'un ensemble d'entités est appelé (via `$method=entityset`), le timeout est recalculé en fonction de l'heure courante et du timeout.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## Exemple

Si un ensemble d'entités est supprimé puis recréé à l'aide de <code>$method=entityset</code> avec <a href="$savedfilter.md"><code>$savedfilter</code></a>, le nouveau timeout par défaut est de 10 minutes, quel que soit le timeout que vous avez défini lors de l'appel de <code>$timeout</code>.

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`
