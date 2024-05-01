---
id: timeout
title: $timeout
---

Defines the number of seconds to save an entity set in 4D Server's cache (_e.g._, `$timeout=1800`)

## Description

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. Par exemple, si vous souhaitez définir le timeout sur 20 minutes, passez 1200. Par défaut, le timeout est de deux (2) heures.

Once the timeout has been defined, each time an entity set is called upon (by using `$method=entityset`), the timeout is recalculated based on the current time and the timeout.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## Exemple

Si un ensemble d'entités est supprimé puis recréé à l'aide de <code>$method=entityset</code> avec <a href="$savedfilter.md"><code>$savedfilter</code></a>, le nouveau timeout par défaut est de 10 minutes, quel que soit le timeout que vous avez défini lors de l'appel de <code>$timeout</code>.

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`
