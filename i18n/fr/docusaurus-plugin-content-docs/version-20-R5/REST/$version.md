---
id: version
title: $version
---

Numéro de version de l'image

## Description

`$version` est le numéro de version de l'image retourné par le serveur. Le numéro de version, qui est envoyé par le serveur, fonctionne autour du cache du navigateur afin que vous soyez sûr de récupérer la bonne image.

La valeur du paramètre de version de l'image est modifiée par le serveur.

## Exemple

L'exemple suivant définit le format d'image au format JPEG, quel que soit le véritable type de la photo et passe le véritable numéro de version envoyé par le serveur :

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`
