---
id: skip
title: $skip
---

Starts the entity defined by this number in the collection (_e.g._, `$skip=10`)

## Description

`$skip` defines which entity in the collection to start with. Par défaut, la collection envoyée commence par la première entité. Pour commencer avec la 10e entité de la collection, passez 10.

`$skip`  is generally used in conjunction with [`$top/$limit`]($top_$limit.md) to navigate through an entity collection.

## Exemple

Dans l'exemple suivant, nous allons à la 20e entité de notre entity selection :

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`
