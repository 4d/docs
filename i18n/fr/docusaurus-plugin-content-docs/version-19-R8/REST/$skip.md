---
id: skip
title: '$skip'
---

Démarre l'entité définie par ce numéro dans la collection (par exemple, `$skip=10`)


## Description

`$skip` définit l'entité de la collection par laquelle commencer. Par défaut, la collection envoyée commence par la première entité. Pour commencer avec la 10e entité de la collection, passez 10.

`$skip` est généralement utilisé avec

## Exemple

[`$top/$limit`]($top_$limit.md) pour naviguer dans une entity collection.

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`