---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                         |
| ------- | ------------------------------------- |
| 20 R10  | Nouveau paramètre *autoLicenseTarget* |
| 20      | Ajout                                 |

</details>

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *autoLicenseTarget* ) : Object<br/>**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->

<!--REF #_command_.Create deployment license.Params-->

| Paramètres        | Type                      |                             | Description                                             |
| ----------------- | ------------------------- | --------------------------- | ------------------------------------------------------- |
| mergedApp         | 4D.Folder | &#8594; | Dossier contenant l'application fusionnée               |
| autoLicenseTarget | Integer                   | &#8594; | Licence cible pour l'intégration automatique de licence |
| buildLicense      | 4D.File   | &#8594; | Licence requise pour générer la licence intégrée        |
| oemLicense        | 4D.File   | &#8594; | Licence de clé XML OEM 4D si licence serveur            |
| Résultat          | Object                    | &#8592; | Statut                                                  |

<!-- END REF-->

## Description

<!--REF #_command_.Create deployment license.Summary-->La commande **Create deployment license** crée un fichier de licence intégré dans le dossier Licenses de l'application générée *mergedApp*.<!-- END REF--> Si le dossier Licenses n'existe pas dans le dossier *mergedApp*, il est créé par la commande.

Dans *mergedApp*, passez un objet [4D.Folder](../API/FolderClass.md) contenant une référence au dossier contenant l'application générée dans laquelle vous souhaitez intégrer une licence.

En fonction du deuxième paramètre, vous [laissez 4D sélectionner automatiquement la licence à utiliser](#automatic-license-selection) pour la cible ou [désignez la ou les licence(s) à utiliser](#designating-the-licenses-to-use).

### Sélection automatique de la licence

Si vous passez le paramètre *autoLicenseTarget*, vous laissez à 4D le soin de trouver et d'utiliser la licence la plus appropriée pour la cible spécifiée. Pour plus d'informations sur la sélection automatique des licences, veuillez consulter la section [Build application](../Desktop/building.md#application-automatically-embedding-available-licenses).

Les constantes suivantes sont prises en charge dans le paramètre *autoLicenseTarget* :

| Constante         | Valeur | Description                                                                |
| ----------------- | ------ | -------------------------------------------------------------------------- |
| 4D Volume Desktop | 1      | Créer automatiquement une licence pour une application 4D mono-utilisateur |
| 4D Server         | 5      | Créer automatiquement une licence pour une application 4D Server           |

Si aucune licence valide n'est trouvée, une erreur est générée.

### Désignation des licences à utiliser

Dans *license*, passez un objet [4D.File](../API/FileClass.md) contenant une référence au fichier de licence utilisé pour générer la licence intégrée.

En mode non automatique, si la génération nécessite une licence OEM spécifique (*4D OEM XML Keys*) et si aucune licence de ce type n'est déjà installée dans le dossier Licences de la machine utilisée pour la génération, vous devez la passer en utilisant le paramètre *oemLicense*. Ce paramètre est utile si vous consacrez une machine à la génération de vos applications.

### Résultat

La commande renvoie un objet *statut* contenant les propriétés suivantes :

| **Propriété**                                                                      | **Type**                                       | **Description**                                                                                                                                     |
| ---------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                            | Boolean                                        | Vrai si le fichier de licence a été généré                                                                                                          |
| file                                                                               | [4D.File](../API/FileClass.md) | Le fichier de licence généré                                                                                                                        |
| statusText                                                                         | Text                                           | Description de l'erreur s'il y en a                                                                                                                 |
| errors                                                                             | Collection                                     | Collection d'objets erreur                                                                                                                          |
| \[\].message | Text                                           | Message d'erreur                                                                                                                                    |
| \[\].errCode | Number                                         | Numéro de l'erreur                                                                                                                                  |
| standalone                                                                         | Object                                         | (seulement en [mode automatique](#automatic-license-selection)) Attributs de description pour la licence `4D Volume Desktop`     |
| oemServer                                                                          | Object                                         | (uniquement [mode automatique](#automatic-license-selection)) Attributs de description pour la licence OEM `4D Server`           |
| oemXMLKey                                                                          | Object                                         | (uniquement [mode automatique](#automatic-license-selection)) Attributs de description pour la licence de la clé XML `4D Server` |

Les *attributs de description* sont :

| **Propriété**        | **Type** | **Description**                                      |
| -------------------- | -------- | ---------------------------------------------------- |
| absolutePlatformPath | Text     | Chemin d'accès au fichier de licence original choisi |
| offerName            | Text     | Nom commercial de la licence choisie                 |
| productNumber        | Number   | Numéro de série de la licence choisie                |

:::note Notes

- La licence générée doit être utilisée uniquement avec l'application référencée par *mergedApp*.
- Il est nécessaire de récréer la licence à chaque fois que l'application est regénérée.

:::

## Exemple 1

Utilisation de la syntaxe automatique pour créer une application 4D mono-utilisateur :

```4d
 var $status : Object
 var $application : 4D.File
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;4D Volume Desktop)
```

## Exemple 2

Désignation d'une licence à utiliser:

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

## Voir également

[Article de blog - Finaliser une application avec les commandes 4D](https://blog.4d.com/finalize-an-application-with-4d-commands)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1811                        |
| Thread safe        | &cross; |


