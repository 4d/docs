---
id: timeout
title: $timeout
---

Définit le nombre de secondes durant lequel conserver un entity set dans le cache de 4D Server (par exemple, `$timeout=1800`)

## Description

Pour définir une durée de validité pour un ensemble d'entités que vous créez en utilisant [`$method=entityset`]($method.md#methodentityset), indiquez le nombre de secondes dans `$timeout`. Par exemple, si vous souhaitez définir le timeout sur 20 minutes, passez 1200. Par défaut, le timeout est de deux (2) heures.

Une fois le timeout défini, chaque fois qu'un ensemble d'entités est appelé (via `$method=entityset`), le timeout est recalculé en fonction de l'heure courante et du timeout.

Si un ensemble d'entités est supprimé puis recréé en utilisant `$method=entityset` avec [`$savedfilter`]($savedfilter.md), la nouvelle durée de validité par défaut est de 10 minutes, quelle que soit la durée définie lors de l'appel à `$timeout`.

:::note

La durée de validité peut également être modifiée pour une session à l'aide de la propriété [`Session.quotas`](../API/SessionClass.md#quotas).

:::

## Exemple

Si un ensemble d'entités est supprimé puis recréé à l'aide de <code>$method=entityset</code> avec <a href="$savedfilter.md"><code>$savedfilter</code></a>, le nouveau timeout par défaut est de 10 minutes, quel que soit le timeout que vous avez défini lors de l'appel de <code>$timeout</code>.

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`