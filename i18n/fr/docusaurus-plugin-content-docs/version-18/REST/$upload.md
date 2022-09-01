---
id: upload
title: "$upload"
---


Retourne un ID du fichier téléchargé sur le serveur

## Description
Publiez cette requête lorsque vous vous souhaitez télécharger un fichier sur le serveur. S'il s'agit d'une image, passez `$rawPict=true`. Pour tous les autres fichiers, passez `$binary=true`.

Vous pouvez modifier le timeout, qui est par défaut de 120 secondes, en passant une valeur au paramètre `$timeout`.

## Exemple de téléchargement d'image
Pour télécharger une image, vous devez d'abord sélectionner l'objet fichier sur le client à l'aide de l'API intégré HTML 5 pour utiliser le fichier à partir d'une application Web. 4D utilise l'attribut de type MIME de l'objet fichier afin de le gérer correctement.

Téléchargez ensuite l'image sélectionnée sur 4D Server :

 `POST  /rest/$upload?$rawPict=true`

**Résultat** :

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

 Utilisez ensuite cet ID pour l'ajouter à un attribut en utilisant[`$method=update`]($method.md#methodupdate) pour ajouter l'image à une entité :

 `POST  /rest/Employee/?$method=update`

**Données POST** :

````
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
````

**Réponse** :

L'entité modifiée est retournée :

````
{
    "__KEY": "12", 
    "__STAMP": 5, 
    "uri": "http://127.0.0.1:8081/rest/Employee(12)", 
    "ID": 12, 
    "firstName": "John", 
    "firstName": "Smith",
    "photo":
    {
        "__deferred":
        {
            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",
            "image": true
        }
    },}
````
 
