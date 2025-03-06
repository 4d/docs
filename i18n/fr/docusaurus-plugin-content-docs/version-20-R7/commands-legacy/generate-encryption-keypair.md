---
id: generate-encryption-keypair
title: GENERATE ENCRYPTION KEYPAIR
slug: /commands/generate-encryption-keypair
displayed_sidebar: docs
---

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Syntax-->**GENERATE ENCRYPTION KEYPAIR** ( *cléPrivée* ; *cléPublique* {; *longueur*} )<!-- END REF-->
<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cléPrivée | Blob | &#8592; | BLOB devant recevoir la clé privée |
| cléPublique | Blob | &#8592; | BLOB devant recevoir la clé publique |
| longueur | Integer | &#8594;  | Longueur des clés en bits [512...2048] Par défaut = 512 |

<!-- END REF-->

#### Description 

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Summary-->La commande **GENERATE ENCRYPTION KEYPAIR** génère une nouvelle paire de clés RSA.<!-- END REF--> Ces clés donnent accès à des fonctionnalités de cryptage asymétrique dans 4D, généralement requises pour sécuriser les échanges de données sur un serveur (par exemple, via le serveur Web de 4D et le protocole TLS).

**Note :** Si vous souhaitez crypter vos données sur disque, il est préférable d'utiliser les fonctionnalités de cryptage du fichier de données proposées par 4D (voir la page *Chiffrer les données*).

Après l’exécution de la commande, les BLOB passés dans les paramètres *cléPrivée* et *cléPublique* contiennent une nouvelle paire de clés de cryptage.

Le paramètre optionnel *longueur* vous permet de préciser la taille (en bits) des clés que vous souhaitez obtenir. Plus une clé est longue, plus son décryptage “frauduleux” sera difficile.   
En contrepartie, plus les clés sont longues, plus les délais d’exécution ou de réponse seront importants, en particulier dans le cadre d’une connexion sécurisée.   
Par défaut (si vous omettez le paramètre *longueur*), la taille des clés générée est de 512 bits. Vous pouvez générer des clés de 2048 bits, ce qui renforce la sécurité du cryptage, mais ralentira les connexions de votre application Web. Pour augmenter encore la sécurité, vous pouvez envisager de changer de paire de clés assez fréquemment, par exemple tous les six mois.

Les clés générées par cette commande sont au format standard PKCS encodé en base64, ce qui signifie que leur contenu peut être copié et collé dans un e-mail en toute sécurité et sans risque d’altération. Une fois que vous avez obtenu une paire de clés, vous pouvez générer un document texte au format PEM (par exemple à l’aide de la commande [BLOB TO DOCUMENT](blob-to-document.md)) et stocker les clés dans un endroit sûr.

**Important :** La clé privée ne doit jamais être diffusée, sous quelque forme que ce soit.

#### RSA, clés privées et clés publiques 

L’algorithme de cryptage RSA employé par la commande **GENERATE ENCRYPTION KEYPAIR** est basé sur un système de cryptage à double clé : une clé privée et une clé publique. Comme son nom l’indique, la clé publique peut être diffusée auprès de tiers, et permet le décryptage des informations. Il lui correspond une clé privée unique, utilisée pour crypter les données. La clé privée sert au cryptage ; la clé publique, au décryptage (ou inversement). Ce qui est crypté avec une clé ne peut être décrypté qu’avec l’autre.   
Les fonctions de cryptage du protocole TLS/SSL sont basées sur ce principe, la clé publique étant incluse dans le certificat envoyé aux navigateurs (cf. section [WEB SERVICE SET PARAMETER](web-service-set-parameter.md)). 

Ce mode de cryptage est également utilisé par la première syntaxe des commande [ENCRYPT BLOB](encrypt-blob.md) et [DECRYPT BLOB](decrypt-blob.md). Ce principe requiert que la clé publique soit diffusée de manière confidentielle.  
Il est possible de mêler les clés publiques et privées de deux intervenants pour crypter des données de telle manière que seul le récepteur peut décrypter les données, et seul l’émetteur peut les avoir cryptées. C’est le principe de la seconde syntaxe des commandes [ENCRYPT BLOB](encrypt-blob.md) et [DECRYPT BLOB](decrypt-blob.md). 

#### Exemple 

Reportez-vous à l’exemple de la commande [ENCRYPT BLOB](encrypt-blob.md).

#### Voir aussi 

[DECRYPT BLOB](decrypt-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 688 |
| Thread safe | &check; |


