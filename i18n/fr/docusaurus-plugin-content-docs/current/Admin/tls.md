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

La clé publique est utilisée pour décrypter les informations et est envoyée aux récepteurs (navigateurs web) via un **certificat**. Le certificat est délivré par une autorité de certification. Le site web paie le prestataire de certificat pour obtenir un certificat garantissant l'authentification du serveur et contenant la clé publique permettant l'échange de données en mode sécurisé.

:::note

Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

:::

## Version minimale

Par défaut, la version minimale du protocole sécurisé acceptée par les serveurs 4D est TLS 1.3. Vous pouvez modifier cette valeur via le sélecteur `Min TLS version` de la commande `SET DATABASE PARAMETER`.

:::note

Vous pouvez contrôler de manière séparée la version TLS minimale  pour les **objets webServer**.

:::

## Activation de TLS avec le serveur HTTP

Pour pouvoir utiliser le protocole TLS avec le serveur HTTP 4D, vous devez :

1. Obtenez vos fichiers de certificats.
2. Installez vos fichiers de certificats à l'emplacement approprié.
3. Activer TLS.

### Certificats

#### Format

Les certificats TLS gérés par 4D doivent être au format **PEM**. Si votre prestataire de services de certificat vous envoie un certificat dans un format binaire tel que .crt, .pfx ou .p12, vous devez le convertir au format PEM pour pouvoir l'utiliser. Il existe des sites Web où vous pouvez effectuer cette conversion en ligne.

#### Cryptage

4D prend en charge les certificats dans les formats de cryptage standard suivants :

- [**RSA**](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\))
- [**ECDSA**](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)

:::info Compatibilité

Le format de cryptage ECDSA n'est pas pris en charge par la [couche réseau legacy](../settings/client-server.md#network-layer) de 4D.

:::

:::note

4D propose deux commandes pour vous aider à demander un certificat RSA, [voir le tutoriel ci-dessous](#how-to-get-a-rsa-certificate-tutorial).

:::

### Installation des fichiers de certificats

Les fichiers de certificat incluent:

- **key.pem**: un document contenant la clé de cryptage privée,
- **cert.pem**: un document contenant le certificat.

Les deux fichiers **key.pem** et **cert.pem** doivent être localisés :

- avec 4D Server ou 4D en mode local, à côté du dossier du projet 
- avec 4D en mode distant, dans le dossier de la base de données client sur la machine distante (pour plus d'informations sur l'emplacement de ce dossier, voir la commande [`Get 4D folder`](https://doc.4d.com/4dv20/help/command/en/page485.html)). Vous devez copier ces fichiers manuellement sur la machine distante.

### Activation du TLS

Pour que les connexions TLS soient acceptées par le serveur HTTP, vous devez activer HTTPS. Reportez-vous au paragraphe [**Activer HTTPS**](WebServer/webServerConfig.md#enable-https) pour connaître les différentes façons d'activer TLS pour le serveur HTTP.

:::note

Le serveur web 4D prend également en charge l'[option HSTS](WebServer/webServerConfig.md#enable-hsts) pour déclarer que les navigateurs doivent interagir avec lui uniquement via des connexions HTTPS. sécurisées.

:::

### Perfect Forward Secrecy (PFS)

Le [PFS](https://en.wikipedia.org/wiki/Forward_secrecy) ajoute une couche de sécurité supplémentaire à vos communications. Plutôt que d'utiliser des clés d'échanges préétablies, la PFS crée des clés de session de manière coopérative entre les parties en communication en utilisant des algorithmes Diffie-Hellman (DH). Le mode conjoint de production des clés crée un "secret partagé" qui empêche des éléments externes de les compromettre.

Lorsque TLS est activé sur le serveur Web de 4D Web, PFS est automatiquement activé. Si le fichier _dhparams.pem_ (document contenant la clé DH privée du serveur) n'existe pas déjà, 4D le génère automatiquement avec une taille de clé de 2048. La génération initiale de ce fichier peut prendre plusieurs minutes. Le fichier est placé avec les fichiers [_key.pem_ et _cert.pem_](#installing-certificate-files).

Si vous utilisez une [liste de chiffrement personnalisée](WebServer/webServerConfig.md##cipher-list) et souhaitez activer PFS, vérifiez que votre liste contient des entrées avec des algorithmes DH ou ECDH (courbes elliptiques de Diffie–Hellman).

## Activation de TLS avec les autres serveurs

Pour utiliser TLS avec le serveur d'application 4D (applications desktop client-serveur) ou le serveur SQL, il suffit d'activer les communications TLS et le serveur configure automatiquement les connexions au démarrage.

- Avec le serveur d'application, sélectionnez l'option **Crypter les communications Client-Serveur** dans la page ["Client-server/Network options" de la boîte de dialogue Paramètres](../settings/client-server#encrypt-client-server-communications).
- Avec le serveur SQL, sélectionnez l'option **Activer TLS** dans la page ["SQL" de la boîte de dialogue Paramètres](../settings/sql#sql-server-publishing).

## Comment obtenir un certificat RSA ? (tutoriel)

La mise en place d’un serveur fonctionnant en TLS nécessite un certificat numérique délivré par un opérateur de certification. Ce certificat renferme diverses informations dont la carte d’identité du site ainsi que la clé publique utilisée pour communiquer avec lui. Il est transmis aux clients (navigateurs Web) se connectant au site. Une fois qu’il est accepté, la communication en mode sécurisé s’établit.

> Les navigateurs Web autorisent uniquement les certificats émis par une autorité de certification référencée dans leurs propriétés.

![](../assets/en/WebServer/tls2.png)

Le choix de l’autorité de certification dépend de plusieurs facteurs. Plus l’autorité est “connue”, plus le nombre de navigateurs acceptant les certificats qu’elle délivre sera important, mais plus le prix à payer sera élevé.

Pour obtenir un certificat numérique :

1. Générez une “clé privée” à l’aide de la commande `GENERER CLES CRYPTAGE`.

> **Attention** : Pour des raisons de sécurité, la clé privée ne doit jamais être diffusée sur un réseau. En fait, elle ne doit pas quitter le poste serveur. Pour le serveur Web, le fichier Key.pem doit être placé dans le dossier de la structure du projet.

2. Etablissez une demande de certificat à l’aide de la commande `GENERER DEMANDE CERTIFICAT.`

3. Envoyez la demande de certificat à l’autorité de certification que vous avez choisie.
   Pour remplir la demande de certificat, il vous sera peut-être nécessaire de contacter l’autorité de certification. Les autorités de certification vérifient la réalité des informations qui leur ont été transmises. La demande de certificat est générée dans un BLOB au format PKCS encodé en base64 (format PEM). Ce principe autorise le copier-coller des clés sous forme de texte et leur envoi par E-mail en toute sécurité, sans risque d’altération de leur contenu. Vous pouvez donc par exemple sauvegarder le BLOB contenant la demande de certificat dans un document texte (à l’aide de `BLOB VERS DOCUMENT`), puis l’ouvrir et copier-coller son contenu dans un E-mail ou un formulaire Web destiné à l’autorité de certifica

4. Une fois que vous avez reçu votre certificat, créez un fichier texte que vous nommerez “cert.pem” et copiez dans ce fichier le contenu du certificat.
   Vous pouvez recevoir votre certificat sous plusieurs formes (généralement via un E-mail ou un formulaire HTML). 4D accepte la plupart des formats de texte (macOS, PC, Linux...) pour les certificats. En revanche, le certificat doit être au format [PEM](#format), _c'est-à-dire_, PKCS encodé en base64.

> Les caractères de fins de ligne CR ne sont pas pris en charge. Vous devez utiliser CRLF ou LF.

5. Placez le fichier “cert.pem” à [l'emplacement adéquat](#installing-certificate-files).

Le serveur Web peut dès lors fonctionner en mode sécurisé. La durée de validité d’un certificat est généralement comprise entre 3 mois et un an.
