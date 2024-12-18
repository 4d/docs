---
id: http-set-certificates-folder
title: HTTP SET CERTIFICATES FOLDER
slug: /commands/http-set-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Syntax-->**HTTP SET CERTIFICATES FOLDER** ( *dossierCertificats* )<!-- END REF-->
<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dossierCertificats | Text | &#8594;  | Chemin d’accès et nom du dossier des certificats du client |

<!-- END REF-->

:::info Compatibilité

Cette commande est maintenue pour des raisons de compatibilité uniquement. Il est maintenant recommandé d'utiliser la classe [`4D.HTTPRequest`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Summary-->La commande **HTTP SET CERTIFICATES FOLDER** permet de modifier le dossier de certificats client actif pour l'ensemble des process dans la session courante.<!-- END REF--> 

Le dossier de certificats client est celui dans lequel 4D va rechercher les fichiers des certificats clients réclamés par les serveurs Web. Par défaut, tant que la commande **HTTP SET CERTIFICATES FOLDER** n’est pas exécutée, 4D utilise un dossier nommé "ClientCertificatesFolder" créé à côté du fichier de structure. Ce dossier n’est créé que si nécessaire.

La possibilité d’utiliser plusieurs certificats clients est une nouveauté de 4D v14\. 

Passez dans *dossierCertificats* le chemin d’accès du dossier personnalisé contenant les certificats clients. Vous pouvez passer soit un chemin d’accès relatif au fichier de structure de l’application, soit un chemin d’accès absolu. Le chemin doit être exprimé avec la syntaxe système, par exemple :

* (OS X) : Disk:Applications:myserv:folder
* (Windows) : C:\\Applications\\myserv\\folder

Lorsque cette commande a été exécutée, le nouveau chemin est immédiatement pris en compte par les commandes telles que [HTTP Request](http-request.md) exécutées ultérieurement (il n’est pas nécessaire de redémarrer l’application). Il est utilisé dans tous les process de la base.

Si le dossier spécifié n’existe pas à l’emplacement défini ou si le chemin d’accès passé dans *dossierCertificats* est invalide, une erreur est générée, que vous pouvez intercepter à l’aide d’une méthode de gestion d’erreurs installée par la commande [ON ERR CALL](on-err-call.md). 

#### A propos des certificats SSL 

Comme décrit dans [cette page](https://developer.4d.com/docs/fr/Admin/tls), les certificats SSL gérés par 4D doivent être au **format PEM**. Si vous récupérez auprès de votre fournisseur de certificat (par exemple [startssl](https://www.startssl.com/)) un certificat dans un format binaire tel que .crt, .pfx ou .p12 (le format dépend également de votre navigateur), vous devrez le convertir au format PEM pour pouvoir l'utiliser. Des sites Web tels que *sslshopper* vous permettront d'effectuer la conversion en ligne.

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

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  
[HTTP Get certificates folder](http-get-certificates-folder.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1306 |
| Thread safe | &check; |


