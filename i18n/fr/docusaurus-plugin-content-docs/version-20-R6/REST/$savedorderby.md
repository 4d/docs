---
id: savedorderby
title: $savedorderby
---

Enregistre le tri défini par `$orderby` lors de la création d'un ensemble d'entités (par exemple, `$savedorderby="{orderby}"`)

## Description

Lorsque vous créez un ensemble d'entités, vous pouvez, par sécurité, enregistrer l'ordre de tri et le filtre utilisés pour sa création. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

Utilisez `$savedorderby` pour enregistrer l'ordre que vous avez défini lors de la création de votre ensemble d'entités, puis passez `$savedorderby` avec votre appel, pour récupérer à chaque fois l'ensemble d'entités.

Si l'ensemble d'entités n'est plus dans le cache de 4D Server, il sera recréé avec un nouveau timeout de 10 minutes. If you have used both [`$savedfilter`]($savedfilter.md) and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

## Exemple

Appelez d'abord `$savedorderby`, dans l'appel initial, pour créer un ensemble d'entités :

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Ensuite, lorsque vous accédez à votre ensemble d'entités, écrivez ce qui suit (en utilisant à la fois $savedfilter et $savedorderby) pour vous assurer que le filtre et son ordre de tri existent toujours :

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
