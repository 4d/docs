---
id: imageformat
title: $imageformat
---

Définit le format d'image à utiliser pour récupérer des images (par exemple, `$imageformat=png`)

## Description

Définissez le format à utiliser pour afficher les images. Vous pouvez utiliser l'un des formats suivants (extensions, types MIME et OsType Mac sont pris en charge) :

| Type                                    | Description                      |
| --------------------------------------- | -------------------------------- |
| "best"                                  | Meilleur format basé sur l'image |
| ".gif" or "image/gif"   | Format GIF                       |
| ".png" or "image/png"   | Format PNG                       |
| ".jpeg" or "image/jpeg" | Format JPEG                      |
| ".tiff" or "image/tiff" | Format TIFF                      |

Une fois que vous avez défini le format, vous devez passer l'attribut de l'image à [`$expand`]($expand.md) pour charger complètement la photo.

S'il n'y a pas d'image à charger ou si le format ne permet pas de charger l'image, la réponse sera un objet vide `{}`.

## Exemple

L'exemple suivant définit le format d'image au format JPEG, quel que soit le véritable type de la photo et passe le véritable numéro de version envoyé par le serveur :

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`
