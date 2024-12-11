---
id: http-get-certificates-folder
title: HTTP Get certificates folder
slug: /commands/http-get-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get certificates folder.Syntax-->**HTTP Get certificates folder**  : Text<!-- END REF-->
<!--REF #_command_.HTTP Get certificates folder.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Chemin d’accès complet du dossier de certificats actif |

<!-- END REF-->

:::info Compatibilité

Cette commande est maintenue pour des raisons de compatibilité uniquement. Il est maintenant recommandé d'utiliser la classe [`4D.HTTPRequest`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP Get certificates folder.Summary-->La commande **HTTP Get certificates folder** retourne le chemin d’accès complet du dossier de certificats client actif.<!-- END REF--> 

Par défaut, 4D utilise le dossier "ClientCertificatesFolder" créé à côté du fichier de structure (dossier créé uniquement si nécessaire). Vous pouvez toutefois créer un dossier personnalisé pour le process courant à l’aide de la commande [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md).

#### Exemple 

Vous souhaitez changer temporairement de dossier de certificats :

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //on stocke le dossier courant
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
    ... // exécution de requêtes spécifiques
 HTTP SET CERTIFICATES FOLDER($certifFolder) //on rétablit le dossier
```

#### Voir aussi 

[HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1307 |
| Thread safe | &check; |
| Interdite sur le serveur ||


