---
id: updates
title: Release Notes
---

## 4D 20 R5

Lisez [**Les nouveautés de 4D 20 R5**](https://blog.4d.com/fr-whats-new-in-4d-20-R5/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R5.

#### Points forts

- Nouveau [Gestionnaire de composants](../Project/components.md) permettant de contrôler les composants à travers un fichier `dependencies.json`.
- Prise en charge des structures de gestion d'erreur [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- La couche réseau QUIC prend désormais en charge le [_broadcasting_](../Desktop/clientServer.md#ouverture-d-un-projet-à-distance), [SSO](https://doc.4d.com/4Dv20R/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.fe.html) et [IPv6](https://doc.4d.com/4Dv20R/4D/20-R5/Paramètres-IP.300-6932707.fe.html).
- Prise en charge des [restricted entity selections](../ORDA/entities.md#restricting-entity-selections).
- Prise en charge des [classes partagées](../Concepts/classes.md#shared-classes) et des [classes singleton](../Concepts/classes.md#singleton-classes). Nouvelles propriétés de classe : [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Prise en charge de l'[initialisation d'une propriété de classe dans sa ligne de déclaration](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- Nouveau [mode de connexion force login pour les requêtes REST](../REST/authUsers.md#force-login-mode) avec une [prise en charge spécifique dans Qodly Studio for 4D](../WebServer/qodly-studio.md#force-login).
- Nouveau paramètre REST [$format](../REST/$format.md).
- L'objet [`Session`](../API/SessionClass.md#session) est maintenant disponible pour les sessions utilisateur à distance et les procédures stockées.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.fe.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.fe.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R5) : liste de tous les bugs qui ont été corrigés dans 4D 20 R5.

#### Changements de comportement

- Les plug-ins _4D Internet Commands_ et _4D for OCI_ ne sont plus inclus dans les installateurs 4D. Pour obtenir ces plug-ins, vous devez vous connecter au [**portail de téléchargement des produits 4D**](https://product-download.4d.com/).
- Les modifications apportées à l'éditeur de structure concernant l'apparence graphique des tables et des champs (couleur, position, ordre...) sont maintenant sauvegardés dans un fichier séparé nommé `catalog_editor.json` stocké dans le dossier [`Sources`](../Project/architecture.md#sources).

## 4D 20 R4

Lisez [**Les nouveautés de 4D 20 R4**](https://blog.4d.com/fr-whats-new-in-4d-v20-R4/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R4.

#### Points forts

- Prise en charge du [format de cryptage `ECDSA`](../Admin/tls.md#encryption) pour les certificats TLS.
- Les connexions TLS client/serveur et serveur SQL sont désormais [configurées dynamiquement](../Admin/tls.md#enabling-tls-with-the-other-servers) (aucun fichier de certificat n'est requis).
- Format HTML direct pour les [exports de définition de structure](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Nouveau [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) qui améliore le contrôle du code pendant le typage, la vérification de la syntaxe et les étapes de compilation afin d'éviter les erreurs d'exécution.
- Les paramètres de méthode déclarés dans les prototypes `#DECLARE` ne sont [plus nécessaires dans les méthodes "Compiler_"(../Concepts/parameters.md#compilation).
- Prise en charge des [formats de date et d'heure personnalisés](../Project/date-time-formats.md)
- Nouveau mot-clé [`Try(expression)`](../Concepts/error-handling.md#tryexpression) pour gérer les cas d'erreur simples.
- Nouvelle commande [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- Nouvelle option de compatibilité [Impression non bloquante](../settings/compatibility.md).
- Nouveau [mode édition](../Admin/dataExplorer.md#editing-data) dans le Data Explorer.
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R4) : liste de tous les bugs qui ont été corrigés dans 4D 20 R4.

#### Changements de comportement

- L'utilisation d'une ancienne syntaxe pour la déclaration des paramètres (par exemple `C_TEXT($1)` ou `var $1 : Text`) est maintenant dépréciée et génère des warnings lors du typage du code, de la vérification syntaxique et de la compilation.
- La cohérence des sélections est désormais préservée lorsque certains enregistrements sont supprimés puis d'autres créés (voir [ce billet de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- Dans la mise à jour de la [bibliothèque OpenSSL](#library-table), le niveau de sécurité SSL/TLS par défaut a été modifié de 1 à 2. Les clés RSA, DSA et DH de 1024 bits et plus et de moins de 2048 bits ainsi que les clés ECC de 160 bits et plus et de moins de 224 bits ne sont plus autorisées. Par défaut, la compression TLS était déjà désactivée dans les versions précédentes d'OpenSSL. Au niveau de sécurité 2, il ne peut pas être activé.
- Afin de permettre la vérification du mot de passe lorsque [l'annuaire des utilisateurs 4D utilise l'algorithme bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), la valeur "password" dans le paramètre _connectionInfo_ de la commande [`Open datastore`](../API/DataStoreClass.md#open-datastore) est maintenant envoyée en clair par défaut. Assurez-vous que votre méthode base "On REST authentication" peut gérer les mots de passe en clair (le troisième paramètre est alors **False**) et que `Open datastore` chiffre votre connexion en passant l'option "tls" à **True** dans _connectionInfo_. Dans certains cas spécifiques, une nouvelle option "passwordAlgorithm" peut également être utilisée pour la compatibilité (voir la commande [`Open datastore`](../API/DataStoreClass.md#open-datastore)).

## 4D 20 R3

Lisez [**Les nouveautés de 4D 20 R3**](https://blog.4d.com/fr-whats-new-in-4d-v20-R3/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R3.

#### Points forts

- Nouvelle fonction [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Prise en charge du paramètre _context_ dans [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Prise en charge de la propriété `headers` dans le paramètre _connectionHandler_ de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Marqueur de modification global](../ORDA/global-stamp.md) pour faciliter la mise en œuvre de modules de synchronisation des données. Nouvelles fonctions : [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) et [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- L'assignation de références de fichiers à des attributs picture/blob est [prise en charge dans ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Prise en charge de [l'initialisation de la valeur et du type de données de la variable dans la ligne de déclaration](../Concepts/variables/#initialisation des variables dans la ligne de déclaration).
- Les paramètres du fichier journal sont désormais [sauvegardés avec le fichier de données courant](../Backup/settings.md#log-file-management)
- Nouvelle syntaxe pour [déclarer des paramètres variadiques](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro : Prise en charge de [l'importation](../ViewPro/commands/vp-import-from-blob) et de [l'exportation](../ViewPro/commands/vp-export-to-blob) des documents 4D View Pro au format Blob.
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R3) : liste de tous les bugs qui ont été corrigés dans 4D 20 R3.

#### Changements de comportement

- Certaines erreurs ne pouvaient être interceptées par votre [méthode de gestion des erreurs](../Concepts/error-handling.md) qu'en mode interprété. Une correction a été apportée, de sorte que les erreurs suivantes seront désormais également détectées en mode compilé : _Indice hors de l'intervalle_, _Type incompatible_, et _Déréférencement d'un pointeur Null_. Cependant, pour de telles erreurs sur les processeurs Intel, la procédure est toujours interrompue comme auparavant, alors que sur les processeurs Apple Silicon, la procédure n'est interrompue que si vous appelez la commande [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html).
- 4D n'inclut plus d'interpréteur PHP interne. Vous devez [configurer et exécuter votre propre interpréteur PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) pour utiliser les commandes PHP.

## 4D 20 R2

Lisez [**Les nouveautés de 4D 20 R2**](https://blog.4d.com/fr-whats-new-in-4d-v20-R2/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R2.

:::warning Note de sécurité

Si vos applications 4D utilisent des connexions TLS, il est recommandé de mettre à jour 4D en release 20 R2 HF1 build 100440 ou plus. Pour plus d'informations, consultez ce [Bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Points forts

- Nouvelle [classe WebSocket](../API/WebSocketClass.md) pour créer et gérer les connexions WebSocket clientes depuis 4D.
- Nouvelle [option d'interface](../settings/client-server.md#network-layer) pour la couche réseau QUIC.
- 4D View Pro : Prise en charge du format de fichier **.sjs** pour [l'importation](../ViewPro/commands/vp-import-document) et [l'exportation](../ViewPro/commands/vp-export-document) de documents.
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) sur doc.4d.com.
- 4D Write Pro Interface : Nouveau [Table Wizard](../WritePro/writeprointerface.md).
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R2) : liste de tous les bugs qui ont été corrigés dans 4D 20 R2.

#### Changements de comportement

- **Attention** : La valeur de départ [`offset`](../API/FileHandleClass.md#offset) des objets [4D.FileHandle](../API/FileHandleClass.md) était incorrectement fixée à 1 au lieu de 0. Une correction a été apportée dans 4D à partir des versions **20.1 HF1** et **20 R2** et la valeur est maintenant 0.

## 4D 20.x LTS

See [**Release Notes for 4D 20.x LTS**](../../version-20/Notes/updates.md).

## Tableau des bibliothèques

| Bibliothèque | Version courante                       | Mise à jour dans 4D  | Commentaire                                                                                                                                        |
| ------------ | -------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ICU          | 73.2                   | 20.1 | Cette mise à jour majeure entraîne une reconstruction automatique des index alphanumériques, texte et objets.                      |
| CEF          | 121                                    | 20 R5                | Chromium 6167                                                                                                                                      |
| Hunspell     | 1.7.2  | 20                   | Utilisé pour la vérification orthographique dans les formulaires 4D et 4D Write Pro                                                                |
| PDFWriter    | 4.3                    | 20                   | FreeType dependency dans 12.2.1                                                                                    |
| SpreadJS     | 16.2.6 | 20 R4                | Moteur 4D View Pro                                                                                                                                 |
| OpenSSL      | 3.2.0  | 20 R4                | Le niveau de sécurité TLS/SSL par défaut a été relevé. Voir [Changements de comportement](#behavior-changes) pour la version 20 R4 |
| libZip       | 1.9.2  | 20                   | Utilisé par les classes zip, 4D Write Pro, les composants svg et serverNet                                                                         |
| LZMA         | 5.4.1  | 20                   |                                                                                                                                                    |
| Zlib         | 1.2.13 | 20                   |                                                                                                                                                    |
| webKit       | WKWebView                              | 19                   |                                                                                                                                                    |
| PHP          | 8.2.4  | 20                   |                                                                                                                                                    |
| libldap      | 2.6.4  | 20 R3                |                                                                                                                                                    |
| libsasl      | 2.1.28 | 20                   |                                                                                                                                                    |
