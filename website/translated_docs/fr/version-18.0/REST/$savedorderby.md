---
id: version-18.0-savedorderby
title: '$savedorderby'
original_id: savedorderby
---

Enregistre le tri défini par `$orderby` lors de la création d'un ensemble d'entités (par exemple, `$savedorderby="{orderby}"`)

## Description

When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. Si l'ensemble d'entités que vous avez créé est supprimé du cache de 4D Server (en raison du timeout, du besoin d'espace sur le serveur ou de la suppression après avoir appelé [`$method=release`]($method.md#methodrelease)).

You use `$savedorderby` to save the order you defined when creating your entity set, you then pass `$savedorderby` along with your call to retrieve the entity set each time.

Si l'ensemble d'entités n'est plus dans le cache de 4D Server, il sera recréé avec un nouveau timeout de 10 minutes. If you have used both [`$savedfilter`]($savedfilter.md) and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

## Exemple

You first call `$savedorderby` with the initial call to create an entity set:

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:

`GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`