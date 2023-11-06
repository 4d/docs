---
id: tls
title: Protocole TLS (HTTPS)
---

Tous les serveurs 4D peuvent communiquer en mode sécurisé via le protocole TLS (Transport Layer Security) :

- le serveur HTTP
- le serveur d'application (application de bureau client-serveur)
- le serveur SQL

De plus, le client HTTP 4D (commande `HTTP get` par exemple) prend également en charge le protocole TLS.

## Vue d’ensemble

Le protocole TLS (successeur du SSL) a pour but de sécuriser les informations de données entre deux applications—principalement entre un serveur web et un navigateur. Ce protocole est largement répandu et compatible avec la plupart des navigateurs web.

Au niveau de l'architecture réseau, le protocole de sécurité s'insère entre la couche TCP/IP (bas niveau) et le protocole de haut niveau HTTP, pour lequel il est principalement destiné.

Configuration du réseau avec TLS :

![](../assets/en/WebServer/tls1.png)

Le protocole TLS a pour but d'authentifier l'émetteur et le récepteur et de garantir la confidentialité et l'intégrité des informations échangées :

- **Authentification** : l'identité de l'émetteur et du récepteur sont confirmées.
- **Confidentialité**: les données envoyées sont cryptées afin de les rendre inintelligibles pour les tiers non autorisés.
- **Intégrité**: les données reçues n'ont pas été altérées, frauduleusement ou accidentellement.

Les principes de sécurisation utilisés par TLS sont basés sur l’emploi d’un algorithme de cryptage utilisant une paire de clés : une clé privée et une clé publique. La clé privée est utilisée pour crypter les données. Elle est conservée par l’émetteur (le site Web).

La clé publique est utilisée pour décrypter les informations et est envoyée aux récepteurs (navigateurs web) via un **certificat**. Le certificat est délivré par une autorité de certification, telle que Verisign®. Moyennant une participation financière du site Web demandeur, cet organisme délivre un certificat, garantissant l’identité du serveur et contenant la clé publique permettant la communication en mode sécurisé.

:::note

Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

:::



## Version minimale

Par défaut, la version minimale du protocole sécurisé acceptée par le serveur est TLS 1.3. Vous pouvez modifier cette valeur via le sélecteur `Min TLS version` de la commande `SET DATABASE PARAMETER`.

:::note

Vous pouvez contrôler le niveau de sécurité de votre **serveur web** en définissant la [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) acceptée pour les connexions.

:::

## Certificats

### Format

TLS certificates managed by 4D must be in the **PEM format**. If your certificate provider (for example, [WoTrus](https://store.wotrus.com/)) sends you a certificate that is in a binary format such as .crt, .pfx or .p12, you have to convert it to PEM format in order to be able to use it. There are Web sites such as [sslshopper](https://www.sslshopper.com/) where you can do this conversion on-line.

### Encryption

4D supports certificates in the following standard encryption formats:

- [**RSA**](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
- [**ECDSA**](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)

:::info Compatibilité

The ECDSA encryption format is not supported by the 4D [legacy network layer](../settings/client-server.md#network-layer).

:::

:::note

4D proposes two commands to help you requesting a RSA certificate, [see the tutorial below](#how-to-get-a-rsa-certificate-tutorial).

:::



## Installation et activation

### Installer des fichiers `key.pem` et `cert.pem`

To be able to use the TLS protocol with 4D, you must install the **key.pem** (document containing the private encryption key) and **cert.pem** (document containing the certificate) at the appropriate location(s). Different locations are required depending on the server or client on which you want to use TLS.

:::caution

Des fichiers *key.pem* et *cert.pem* par défaut sont fournis avec 4D. Pour un niveau de sécurité plus élevé, nous vous recommandons fortement de remplacer ces fichiers avec vos propres certificats.

:::


#### With the HTTP server

To be used by the 4D HTTP server, the **key.pem** and **cert.pem** files must be placed:

- avec 4D en mode local ou 4D Server, à côté du [dossier du projet](Project/architecture.md#project-folder)
- avec 4D en mode distant, dans le dossier de la base de données cliente sur la machine distante (pour plus d'informations sur l'emplacement de ce dossier, consultez la commande [`Get 4D folder`](https://doc.4d.com/4dv19/help/command/en/page485.html)).

Vous devez copier ces fichiers manuellement sur la machine distante.

#### With the HTTP client

To be used by the 4D HTTP client, the **key.pem** and **cert.pem** files must be placed by default in the "ClientCertificatesFolder" that is created next to the next to the [project folder](Project/architecture.md#project-folder).

This location can be customized using the [`HTTP SET CERTIFICATES FOLDER`](https://doc.4d.com/4dv20/help/command/en/page1306.html) command).


#### Avec le serveur d'applications (applications de bureau client-serveur)

Pour être utilisés par le serveur d'application 4D, les fichiers **key.pem** et **cert.pem** doivent être placés dans le [dossier **Resources**](Project/architecture.md#resources) de l'application 4D Server.


#### Avec le serveur SQL

Pour être utilisés par le serveur SQL de 4D, les fichiers **key.pem** et **cert.pem** doivent être placés à côté du [dossier du projet](Project/architecture.md#project-folder).

### Activation du TLS

L'installation de fichiers **key.pem** et **cert.pem** permet d'utiliser TLS avec le 4D Server. Cependant, pour que les connexions TLS soient acceptées par le server, il est nécessaire de les activer :

- Avec le serveur web de 4D, vous devez [autoriser le HTTPS](WebServer/webServerConfig.md#enable-https). Vous pouvez activer [l'option HSTS](WebServer/webServerConfig.md#enable-hsts) pour rediriger les navigateurs qui tentent de se connecter via HTTP.
- Avec le serveur d'applications, vous devez sélectionner l'option **Crypter les communications Client-Serveur** dans la page Client-Serveur des Propriétés.
- Avec le serveur SQL, vous devez sélectionner l'option **Activer TLS** dans la page "SQL" des Propriétés.

> Le serveur web 4D prend également en charge l'[option HSTS](WebServer/webServerConfig.md#enable-hsts) pour déclarer que les navigateurs doivent interagir avec lui uniquement via des connexions HTTPS. sécurisées.

## Perfect Forward Secrecy (PFS)

Le [PFS](https://en.wikipedia.org/wiki/Forward_secrecy) ajoute une couche de sécurité supplémentaire à vos communications. Plutôt que d'utiliser des clés d'échanges préétablies, la PFS crée des clés de session de manière coopérative entre les parties en communication en utilisant des algorithmes Diffie-Hellman (DH). Le mode conjoint de production des clés crée un "secret partagé" qui empêche des éléments externes de les compromettre.

Lorsque TLS est activé sur le serveur Web de 4D Web, PFS est automatiquement activé. Si le fichier *dhparams.pem* (document contenant la clé DH privée du serveur) n'existe pas déjà, 4D le génère automatiquement avec une taille de clé de 2048. La génération initiale de ce fichier peut prendre plusieurs minutes. Le fichier est placé avec les fichiers [*key.pem* et *cert.pem*](#key-pem-and-cert-pem-files).

Si vous utilisez une [liste de chiffrement personnalisée](WebServer/webServerConfig.md##cipher-list) et souhaitez activer PFS, vérifiez que votre liste contient des entrées avec des algorithmes DH ou ECDH (courbes elliptiques de Diffie–Hellman).


## How to get a RSA certificate? (tutorial)

La mise en place d’un serveur fonctionnant en TLS nécessite un certificat numérique délivré par un opérateur de certification. Ce certificat renferme diverses informations dont la carte d’identité du site ainsi que la clé publique utilisée pour communiquer avec lui. Il est transmis aux clients (navigateurs Web) se connectant au site. Une fois qu’il est accepté, la communication en mode sécurisé s’établit.
> Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

![](../assets/en/WebServer/tls2.png)

Le choix de l’autorité de certification dépend de plusieurs facteurs. Plus l’autorité est “connue”, plus le nombre de navigateurs acceptant les certificats qu’elle délivre sera important, mais plus le prix à payer sera élevé.

Pour obtenir un certificat numérique :

1. Générez une “clé privée” à l’aide de la commande `GENERER CLES CRYPTAGE`.
> **Attention** : Pour des raisons de sécurité, la clé privée ne doit jamais être diffusée sur un réseau. En fait, elle ne doit pas quitter le poste serveur. Pour le serveur Web, le fichier Key.pem doit être placé dans le dossier de la structure du projet.

2. Etablissez une demande de certificat à l’aide de la commande `GENERER DEMANDE CERTIFICAT.`

3. Envoyez la demande de certificat à l’autorité de certification que vous avez choisie. Pour remplir la demande de certificat, il vous sera peut-être nécessaire de contacter l’autorité de certification. Les autorités de certification vérifient la réalité des informations qui leur ont été transmises. La demande de certificat est générée dans un BLOB au format PKCS encodé en base64 (format PEM). Ce principe autorise le copier-coller des clés sous forme de texte et leur envoi par E-mail en toute sécurité, sans risque d’altération de leur contenu. Vous pouvez donc par exemple sauvegarder le BLOB contenant la demande de certificat dans un document texte (à l’aide de `BLOB VERS DOCUMENT`), puis l’ouvrir et copier-coller son contenu dans un E-mail ou un formulaire Web destiné à l’autorité de certification.

4. Une fois que vous avez reçu votre certificat, créez un fichier texte que vous nommerez “cert.pem” et copiez dans ce fichier le contenu du certificat. Vous pouvez recevoir votre certificat sous plusieurs formes (généralement via un E-mail ou un formulaire HTML). 4D accepte la plupart des formats de texte (macOS, PC, Linux...) pour les certificats. En revanche, le certificat doit être au format PEM, c'est-à-dire PKCS encodé en base64.
> Les caractères de fins de ligne CR ne sont pas pris en charge. Vous devez utiliser CRLF ou LF.

5. Placez le fichier “cert.pem” à [l'emplacement adéquat](#installation-and-activation).

Le serveur Web peut dès lors fonctionner en mode sécurisé. La durée de validité d’un certificat varie généralement entre trois mois et un an.
