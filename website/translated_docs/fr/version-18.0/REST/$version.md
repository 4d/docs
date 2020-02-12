---
id: version-18.0-version
title: '$version'
original_id: version
---

Numéro de version de l'image

## Description

`$version` est le numéro de version de l'image retourné par le serveur. Le numéro de version, qui est envoyé par le serveur, fonctionne autour du cache du navigateur afin que vous soyez sûr de récupérer la bonne image.

La valeur du paramètre de version de l'image est modifiée par le serveur.

## Exemple

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`