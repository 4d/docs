---
id: tls
title: Protocole TLS (HTTPS)
---

Tous les serveurs 4D peuvent communiquer en mode sécurisé via le protocole TLS (Transport Layer Security) :

- le serveur HTTP
- le serveur d'application (application de bureau client-serveur)
- le serveur SQL

In addition, the 4D HTTP client (`HTTP get` command for example) also supports the TLS protocol.

## Vue d’ensemble

Le protocole TLS (successeur du SSL) a pour but de sécuriser les informations de données entre deux applications—principalement entre un serveur web et un navigateur. Ce protocole est largement répandu et compatible avec la plupart des navigateurs web.

Au niveau de l'architecture réseau, le protocole de sécurité s'insère entre la couche TCP/IP (bas niveau) et le protocole de haut niveau HTTP, pour lequel il est principalement destiné.

Configuration du réseau avec TLS :

![](../assets/en/WebServer/tls1.png)

Le protocole TLS a pour but d'authentifier l'émetteur et le récepteur et de garantir la confidentialité et l'intégrité des informations échangées :

- **Authentication**: The sender and receiver identities are confirmed.
- **Confidentiality**: The sent data is encrypted so that no third person can understand the message.
- **Integrity**: The received data has not been changed, by accident or malevolently.

Les principes de sécurisation utilisés par TLS sont basés sur l’emploi d’un algorithme de cryptage utilisant une paire de clés : une clé privée et une clé publique. La clé privée est utilisée pour crypter les données. Elle est conservée par l’émetteur (le site Web).

The public key is used to decrypt the information and is sent to the receivers (web browsers) through a **certificate**. Le certificat est délivré par une autorité de certification. Le site web paie le prestataire de certificat pour obtenir un certificat garantissant l'authentification du serveur et contenant la clé publique permettant l'échange de données en mode sécurisé.

:::note

Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

:::

## Version minimale

Par défaut, la version minimale du protocole sécurisé acceptée par les serveurs 4D est TLS 1.3. You can modify this value by using the `Min TLS version` selector with the `SET DATABASE PARAMETER` command.

:::note

You can control separately the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) for **webServer objects**.

:::

## Activation de TLS avec le serveur HTTP

Pour pouvoir utiliser le protocole TLS avec le serveur HTTP 4D, vous devez :

1. Obtenez vos fichiers de certificats.
2. Installez vos fichiers de certificats à l'emplacement approprié.
3. Activer TLS.

### Certificats

#### Format

TLS certificates managed by 4D must be in the **PEM format**. Si votre prestataire de services de certificat vous envoie un certificat dans un format binaire tel que .crt, .pfx ou .p12, vous devez le convertir au format PEM pour pouvoir l'utiliser. Il existe des sites Web où vous pouvez effectuer cette conversion en ligne.

#### Cryptage

4D prend en charge les certificats dans les formats de cryptage standard suivants :

- [**RSA**](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\))
- [**ECDSA**](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)

:::info Compatibilité

The ECDSA encryption format is not supported by the 4D [legacy network layer](../settings/client-server.md#network-layer).

:::

:::note

4D proposes two commands to help you requesting a RSA certificate, [see the tutorial below](#how-to-get-a-rsa-certificate-tutorial).

:::

### Installation des fichiers de certificats

Les fichiers de certificat incluent:

- **key.pem**: a document containing the private encryption key,
- **cert.pem**: a document containing the certificate.

Both **key.pem** and **cert.pem** files must be located:

- with 4D Server or 4D in local mode, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv20/help/command/en/page485.html) command). Vous devez copier ces fichiers manuellement sur la machine distante.

### Activation du TLS

Pour que les connexions TLS soient acceptées par le serveur HTTP, vous devez activer HTTPS. Refer to the [**Enable HTTPS**](WebServer/webServerConfig.md#enable-https) paragraph to know the different ways to enable TLS for the HTTP server.

:::note

The 4D web server also supports [HSTS option](WebServer/webServerConfig.md#enable-hsts) to declare that browsers should only interact with it via secure HTTPS connections.

:::

### Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) adds an additional layer of security to your communications. Plutôt que d'utiliser des clés d'échanges préétablies, la PFS crée des clés de session de manière coopérative entre les parties en communication en utilisant des algorithmes Diffie-Hellman (DH). Le mode conjoint de production des clés crée un "secret partagé" qui empêche des éléments externes de les compromettre.

Lorsque TLS est activé sur le serveur Web de 4D Web, PFS est automatiquement activé. If the _dhparams.pem_ file (document containing the server's DH private key) does not already exist, 4D will automatically generate it with a key size of 2048. La génération initiale de ce fichier peut prendre plusieurs minutes. The file is placed with the [_key.pem_ and _cert.pem_ files](#installing-certificate-files).

If you use a [custom cipher list](WebServer/webServerConfig.md##cipher-list) and want to enable PFS, you must verify that it contains entries with DH or ECDH (Elliptic-curve Diffie–Hellman) algorithms.

## Activation de TLS avec les autres serveurs

Pour utiliser TLS avec le serveur d'application 4D (applications desktop client-serveur) ou le serveur SQL, il suffit d'activer les communications TLS et le serveur configure automatiquement les connexions au démarrage.

- With the application server, select the **Encrypt Client-Server Communications** option in the ["Client-server/Network options" page of the Settings dialog box](../settings/client-server#encrypt-client-server-communications).
- With the SQL server, select the **Enable TLS** option in the ["SQL" page of the Settings dialog box](../settings/sql#sql-server-publishing).

## Comment obtenir un certificat RSA ? (tutoriel)

La mise en place d’un serveur fonctionnant en TLS nécessite un certificat numérique délivré par un opérateur de certification. Ce certificat renferme diverses informations dont la carte d’identité du site ainsi que la clé publique utilisée pour communiquer avec lui. Il est transmis aux clients (navigateurs Web) se connectant au site. Une fois qu’il est accepté, la communication en mode sécurisé s’établit.

> Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

![](../assets/en/WebServer/tls2.png)

Le choix de l’autorité de certification dépend de plusieurs facteurs. Plus l’autorité est “connue”, plus le nombre de navigateurs acceptant les certificats qu’elle délivre sera important, mais plus le prix à payer sera élevé.

Pour obtenir un certificat numérique :

1. Generate a private key using the `GENERATE ENCRYPTION KEYPAIR` command.

> **Warning**: For security reasons, the private key should always be kept secret. En fait, elle ne doit pas quitter le poste serveur. Pour le serveur Web, le fichier Key.pem doit être placé dans le dossier de la structure du projet.

2. Use the `GENERATE CERTIFICATE REQUEST` command to issue a certificate request.

3. Envoyez la demande de certificat à l’autorité de certification que vous avez choisie.
   Pour remplir la demande de certificat, il vous sera peut-être nécessaire de contacter l’autorité de certification. Les autorités de certification vérifient la réalité des informations qui leur ont été transmises. La demande de certificat est générée dans un BLOB au format PKCS encodé en base64 (format PEM). Ce principe autorise le copier-coller des clés sous forme de texte et leur envoi par E-mail en toute sécurité, sans risque d’altération de leur contenu. For example, you can save the BLOB containing the certificate request in a text document (using the `BLOB TO DOCUMENT` command), then open and copy and paste its content in a mail or a Web form to be sent to the certification authority.

4. Une fois que vous avez reçu votre certificat, créez un fichier texte que vous nommerez “cert.pem” et copiez dans ce fichier le contenu du certificat.
   Vous pouvez recevoir votre certificat sous plusieurs formes (généralement via un E-mail ou un formulaire HTML). 4D accepte la plupart des formats de texte (macOS, PC, Linux...) pour les certificats. However, the certificate must be in [PEM format](#format), _i.e._, PKCS encoded in base64.

> Les caractères de fins de ligne CR ne sont pas pris en charge. Vous devez utiliser CRLF ou LF.

5. Place the “cert.pem” file in the [appropriate location](#installing-certificate-files).

Le serveur Web peut dès lors fonctionner en mode sécurisé. La durée de validité d’un certificat est généralement comprise entre 3 mois et un an.
