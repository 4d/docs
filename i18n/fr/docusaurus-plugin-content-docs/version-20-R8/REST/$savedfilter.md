---
id: savedfilter
title: $savedfilter
---

Enregistre le filtre défini par $filter lors de la création d'un ensemble d'entités (par exemple, `$savedfilter="{filter}"`)

## Description

Lorsque vous créez un ensemble d'entités, vous pouvez, par sécurité, enregistrer le filtre utilisé pour sa création. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

Utilisez `$savedfilter` pour enregistrer le filtre que vous avez défini lors de la création de votre ensemble d'entités, puis passez `$savedfilter` avec votre appel, pour récupérer à chaque fois l'ensemble d'entités.

Si l'ensemble d'entités n'est plus dans le cache de 4D Server, il sera recréé avec un nouveau timeout de 10 minutes. L'ensemble d'entités sera actualisé (certaines entités peuvent être incluses tandis que d'autres peuvent être supprimées) depuis la dernière fois qu'il a été créé, s'il n'existait plus avant de le recréer.

If you have used both `$savedfilter` and [`$savedorderby`]($savedorderby.md) in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

## Exemple

<a href="$savedorderby.md"><code>$savedorderby</code></a> dans votre appel lors de la création d'un ensemble d'entités et que vous en omettez un, le nouvel ensemble d'entités, qui aura le même numéro de référence, le reflétera.

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Puis, lorsque vous accédez à votre ensemble d'entités, saisissez ce qui suit pour vous assurer que l'ensemble d'entités est toujours valide :

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
