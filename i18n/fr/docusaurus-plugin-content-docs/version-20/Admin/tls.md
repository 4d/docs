---
id: tls
title: Protocole TLS (HTTPS)
---

Tous les serveurs 4D peuvent communiquer en mode sécurisé via le protocole TLS (Transport Layer Security) :

- le serveur web
- le serveur d'application (application de bureau client-serveur)
- le serveur SQL

## Vue d’ensemble

Le protocole TLS (successeur du SSL) a pour but de sécuriser les informations de données entre deux applications—principalement entre un serveur web et un navigateur. Ce protocole est largement répandu et compatible avec la plupart des navigateurs web.

Au niveau de l'architecture réseau, le protocole de sécurité s'insère entre la couche TCP/IP (bas niveau) et le protocole de haut niveau HTTP, pour lequel il est principalement destiné. pour lequel il est principalement destiné.

Configuration du réseau avec TLS :

![](../assets/en/WebServer/tls1.png)

Le protocole TLS a pour but d'authentifier l'émetteur et le récepteur et de garantir la confidentialité et l'intégrité des informations échangées :

- **Authentification** : l'identité de l'émetteur et du récepteur sont confirmées.
- **Confidentialité**: les données envoyées sont cryptées afin de les rendre inintelligibles pour les tiers non autorisés.
- **Intégrité**: les données reçues n'ont pas été altérées, frauduleusement ou accidentellement.

Les principes de sécurisation utilisés par TLS sont basés sur l’emploi d’un algorithme de cryptage utilisant une paire de clés : une clé privée et une clé publique. La clé privée est utilisée pour crypter les données. Elle est conservée par l’émetteur (le site Web). La clé publique est utilisée pour décrypter les données. Elle est diffusée auprès des récepteurs (les navigateurs web) via le certificat. L’emploi du TLS dans le cadre d’Internet requiert en effet l’entremise d’une Autorité de Certification telle que Verisign®. Moyennant une participation financière du site Web demandeur, cet organisme délivre un certificat, garantissant l’identité du serveur et contenant la clé publique permettant la communication en mode sécurisé.

> For more information on the encryption method and the public and private key issues, refer to the `ENCRYPT BLOB` command description.

## Version minimale

Par défaut, la version minimale acceptée par le server est TLS 1.2. You can modify this value by using the `Min TLS version` selector with the `SET DATABASE PARAMETER command`.

You can control the level of security of your web server by defining the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) accepted for connections.

## Obtenir un certificat

La mise en place d’un serveur fonctionnant en TLS nécessite un certificat numérique délivré par un opérateur de certification. Ce certificat renferme diverses informations dont la carte d’identité du site ainsi que la clé publique utilisée pour communiquer avec lui. Il est transmis aux clients (navigateurs Web) se connectant au site. Une fois qu’il est accepté, la communication en mode sécurisé s’établit.

> Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

![](../assets/en/WebServer/tls2.png)

Le choix de l’autorité de certification dépend de plusieurs facteurs. Plus l’autorité est “connue”, plus le nombre de navigateurs acceptant les certificats qu’elle délivre sera important, mais plus le prix à payer sera élevé.

Pour obtenir un certificat numérique :

1. Générez une “clé privée” à l’aide de la commande `GENERER CLES CRYPTAGE`.

:::caution

Pour des raisons de sécurité, la clé privée doit toujours être gardée secrète. En fait, elle ne doit pas quitter le poste serveur. Pour le serveur Web, le fichier Key.pem doit être placé dans le dossier de la structure du projet.

:::

2. Etablissez une demande de certificat à l’aide de la commande `GENERER DEMANDE CERTIFICAT.`

3. Envoyez la demande de certificat à l’autorité de certification que vous avez choisie.
   Pour remplir la demande de certificat, il vous sera peut-être nécessaire de contacter l’autorité de certification. Les autorités de certification vérifient la réalité des informations qui leur ont été transmises. La demande de certificat est générée dans un BLOB au format PKCS encodé en base64 (format PEM). Ce principe autorise le copier-coller des clés sous forme de texte et leur envoi par E-mail en toute sécurité, sans risque d’altération de leur contenu. Vous pouvez donc par exemple sauvegarder le BLOB contenant la demande de certificat dans un document texte (à l’aide de `BLOB VERS DOCUMENT`), puis l’ouvrir et copier-coller son contenu dans un E-mail ou un formulaire Web destiné à l’autorité de certifica

4. Une fois que vous avez reçu votre certificat, créez un fichier texte que vous nommerez “cert.pem” et copiez dans ce fichier le contenu du certificat.
   Vous pouvez recevoir votre certificat sous plusieurs formes (généralement via un E-mail ou un formulaire HTML). 4D accepte tous les formats de texte de la plate-forme pour les certificats (macOS, PC, Linux, etc.). However, the certificate must be in PEM format, *i.e.*, PKCS encoded in base64.

> Les caractères de fins de ligne CR ne sont pas pris en charge. Vous devez utiliser CRLF ou LF.

5. Placez le fichier “cert.pem” à [l'emplacement adéquat](#installation-and-activation).

Le serveur Web peut dès lors fonctionner en mode sécurisé. La durée de validité d’un certificat varie généralement entre trois mois et un an.

## Installation et activation

### Installing `key.pem` and `cert.pem` files

To be able to use the TLS protocol with the server, you must install the **key.pem** (document containing the private encryption key) and **cert.pem** (document containing the certificate) at the appropriate location(s). Différents emplacements sont nécessaires en fonction du serveur sur lequel vous souhaitez utiliser TLS.

:::caution

Default *key.pem* and *cert.pem* files are provided with 4D. Pour un niveau de sécurité plus élevé, nous vous recommandons fortement de remplacer ces fichiers avec vos propres certificats.

:::

#### Avec le serveur Web

To be used by the 4D web server, the **key.pem** and **cert.pem** files must be placed:

- with 4D in local mode or 4D Server, next to the [project folder](Project/architecture.md#project-folder)
- avec 4D en mode distant, dans le dossier de la base de données client sur la machine distante (pour plus d'informations sur l'emplacement de ce dossier, voir la commande [`Get 4D folder`](https://doc.4d.com/4dv19/help/command/en/page485.html)).

Vous devez copier ces fichiers manuellement sur la machine distante.

#### Avec le serveur d'applications (applications de bureau client-serveur)

To be used by the 4D application server, the **key.pem** and **cert.pem** files must be placed in the [**Resources** folder](Project/architecture.md#resources) of the 4D Server application.

#### Avec le serveur SQL

To be used by the 4D SQL server, the **key.pem** and **cert.pem** files must be placed next to the [project folder](Project/architecture.md#project-folder).

### Activation du TLS

The installation of **key.pem** and **cert.pem** files makes it possible to use TLS with the 4D server. Cependant, pour que les connexions TLS soient acceptées par le server, il est nécessaire de les activer :

- With the 4D web server, you must [enable HTTPS](WebServer/webServerConfig.md#enable-https). You can set the [HSTS option](WebServer/webServerConfig.md#enable-hsts) to redirect browsers trying to connect in http mode.
- With the application server, you must select the **Encrypt Client-Server Communications** option in the "Client-server/Network options" page of the Settings dialog box.
- With the SQL server, you must select the **Enable TLS** option in the "SQL" page of the Settings dialog box.

> Le serveur web 4D prend également en charge l'[option HSTS](WebServer/webServerConfig.md#enable-hsts) pour déclarer que les navigateurs doivent interagir avec lui uniquement via des connexions HTTPS. sécurisées.

## Perfect Forward Secrecy (PFS)

Le [PFS](https://en.wikipedia.org/wiki/Forward_secrecy) ajoute une couche de sécurité supplémentaire à vos communications. Plutôt que d'utiliser des clés d'échanges préétablies, la PFS crée des clés de session de manière coopérative entre les parties en communication en utilisant des algorithmes Diffie-Hellman (DH). Le mode conjoint de production des clés crée un "secret partagé" qui empêche des éléments externes de les compromettre.

Lorsque TLS est activé sur le serveur Web de 4D Web, PFS est automatiquement activé. Si le fichier *dhparams.pem* (document contenant la clé DH privée du serveur) n'existe pas déjà, 4D le génère automatiquement avec une taille de clé de 2048. La génération initiale de ce fichier peut prendre plusieurs minutes. Le fichier est placé avec les fichiers [*key.pem* et *cert.pem*](#installing-keypem-and-certpem-files).

Si vous utilisez une [liste de chiffrement personnalisée](WebServer/webServerConfig.md#cipher-list) et souhaitez activer PFS, vérifiez que votre liste contient des entrées avec des algorithmes DH ou ECDH (courbes elliptiques de Diffie–Hellman).
