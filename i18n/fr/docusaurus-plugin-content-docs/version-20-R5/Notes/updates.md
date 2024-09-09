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

## 4D 20.x

Lisez [**Les nouveautés de 4D 20**](https://blog.4d.com/fr-whats-new-in-4d-v20/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20.

:::caution Version minimale du client pour 4D Server 20.2 et ultérieures

Pour des raisons internes, la version des clients distants se connectant à 4D Server 20.2 et suivantes doit être au moins 4D 20.2.

:::

:::warning Note de sécurité

Si vos applications 4D utilisent des connexions TLS, il est recommandé de mettre à jour 4D en release 20.2 LTS build 100956 ou plus. Pour plus d'informations, consultez ce [Bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Avertissement concernant la reconstruction de l'index

4D 20 inclut une mise à jour de la bibliothèque ICU (voir ci-dessous) qui forcera une reconstruction automatique des index de type alpha, texte et objet. En fonction de la taille du fichier de données, cette opération peut prendre un certain temps et nécessiter une planification.

:::caution Reconstruction d'index 4D 20.1 et versions client/serveur

4D 20.1 comprend également une mise à jour de la bibliothèque ICU, ce qui a les conséquences suivantes :

- Elle forcera une reconstruction automatique des index de type alpha, texte et objet.
- Pour des raisons de cohérence des tris, il est nécessaire que les clients distants 4D et le serveur 4D utilisent la même version : seuls les clients distants 4D 20.1 peuvent se connecter au serveur 4D 20.1 et vice versa.

:::

#### Points forts

- 4D 20.2 est certifié sur macOS Sonoma (macOS 14).
- (4D 20.1) Nouvelle propriété `plugins` dans le paramètre _options_ de la commande [`Compile project`] (https://doc.4d.com/4dv20/help/command/en/page1760.html).
- 4D Server intègre automatiquement plusieurs journaux : [Restauration automatique](../Backup/settings.md#automatic-restore).
- [IMAP Transporter Class](../API/IMAPTransporterClass.md) : [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) renvoie _id_, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) renvoie _id_, _flags_ et _permanentFlags_, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) et [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) prennent en charge les mots-clés personnalisés.
- Nouvelles classes [WebSocketServer](../API/WebSocketServerClass.md) et [WebSocketConnection](../API/WebSocketConnectionClass.md) pour créer et gérer des connexions WebSocket depuis 4D.
- Support du mot-clé [`property`](../Concepts/classes.md#property) dans les définitions de classes utilisateur.
- Nouvelles fonctions pour verrouiller/déverrouiller le datastore : [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Nouvelle fonction [`.at()`](../API/EntitySelectionClass.md#at) dans la classe Entity selection.
- Nouvelles fonctions dans la classe Collection : [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap), [`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Editeur de code : amélioration des [fonctionnalités de recherche et de remplacement](../code-editor/write-class-method.md#find-and-replace).
- Nouvel élément de langage "propriété" cherchable dans la boîte de dialogue [**Chercher dans le développement...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726).
- Pour simplifier le code, certains opérateurs de comparaison peuvent désormais être utilisés avec des [valeurs Undefined](../Concepts/dt_null_undefined.md#undefined-operators) sans générer d'erreurs.
- Prise en charge du paramètre _headerOnly_ dans [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Prise en charge de l'option `count values` dans les fonctions [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) et [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nouvelle fonction [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Les logs des requêtes ORDA sont maintenant disponibles [sur le serveur](../Debugging/debugLogFiles.md#orda-requests), nouveau paramètre pour la fonction [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nouveaux outils pour l'exécution de code dans le CLI : [tool4d](../Admin/cli.md#tool4d) et [4D Server en mode utility](../Admin/cli.md#4d-server-in-utility-mode).
- [Explorateur de données](../Admin/dataExplorer.md#opening-the-data-explorer) : nouveau bouton et affichage dans une fenêtre 4D.
- Nouvelles propriétés pour les boutons, les cases à cocher et les boutons radio : [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) et [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Prise en charge de `WinIcon` dans la fonction [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- Nouvelle option `validateTLSCertificate` pour [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) permettant de contrôler la validation automatique des certificats.
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) sur doc.4d.com.
- Listes des bugs corrigés : [4D 20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D 20.1](https://bugs.4d.fr/fixedbugslist?version=20.1) - [4D 20.2](https://bugs.4d.fr/fixedbugslist?version=20.2) - [4D 20.3](https://bugs.4d.fr/fixedbugslist?version=20.3) - [4D 20.4](https://bugs.4d.fr/fixedbugslist?version=20.4).

#### Changements de comportement

- A compter de 4D 20.3, afin de permettre la vérification du mot de passe lorsque [l'annuaire des utilisateurs 4D utilise l'algorithme bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), la valeur "password" dans le paramètre _connectionInfo_ de la commande [`Open datastore`](../API/DataStoreClass.md#open-datastore) est maintenant envoyée en clair par défaut. Assurez-vous que votre méthode base "On REST authentication" peut gérer les mots de passe en clair (le troisième paramètre est alors **False**) et que `Open datastore` chiffre votre connexion en passant l'option "tls" à **True** dans _connectionInfo_. Dans certains cas spécifiques, une nouvelle option "passwordAlgorithm" peut également être utilisée pour la compatibilité (voir la commande [`Open datastore`](../API/DataStoreClass.md#open-datastore)).
- À partir de la version 20.2, 4D 20 LTS n'est plus compatible avec Windows Server 2012 R2.
- **Attention** : La valeur de départ [`offset`](../API/FileHandleClass.md#offset) des objets [4D.FileHandle](../API/FileHandleClass.md) était incorrectement fixée à 1 au lieu de 0. Une correction a été apportée dans 4D à partir des versions **20.1 HF1** et **20 R2** et la valeur est maintenant 0.
- Pour la conformité RFC de HTTP, la propriété [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) retourne maintenant tous les noms d'en-têtes **en minuscules**. Si vous voulez que votre code continue à fonctionner comme avant, utilisez la nouvelle propriété [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Les certificats TLS sont désormais automatiquement validés par 4D lors de l'envoi de requêtes HTTP avec [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new), et rejetés avec une erreur s'ils sont invalides. Une nouvelle propriété _option_ vous permet de contrôler cette validation.
- TLS v1.0 et TLS v1.1 sont obsolètes, ils ne sont plus supportés comme `Min TLS version` sur 4D Server. La version 1.3 est maintenant sélectionnée par défaut et est automatiquement utilisée si les constantes `_o_TLSv1_0` ou `_o_TLSv1_1` sont définies avec [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- Par souci de cohérence, tous les boutons, cases à cocher et boutons radio sont désormais rendus avec un type "3D" à l'exécution : respectivement `Object type 3D button`, `Object type 3D checkbox`, et `Object type 3D radio button` sont retournés par [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) pour ces objets.
- Depuis 4D 20, [4D for Mobile](https://developer.4d.com/go-mobile/) n'est plus installé par défaut dans l'environnement 4D. Pour bénéficier des fonctionnalités de développement de 4D for Mobile dans 4D, vous devez [installer le composant 4D Mobile App](https://developer.4d.com/go-mobile/docs/getting-started/installation) dans le dossier ["Components"](../Project/architecture.md#components) de vos projets. Si un projet converti utilise des fonctionnalités du [composant 4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), veillez à l'installer également dans le dossier "Components" du projet.

## 4D 19 R8

Lisez [**Les nouveautés de 4D 19 R8**](https://blog.4d.com/fr-whats-new-in-4d-v19-R8/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 19 R8.

#### Points forts

- Des méthodes de gestion des erreurs peuvent être installées pour [les contextes d'exécution globaux et les composants](../Concepts/error-handling.md#scope-and-components).
- Les listboxes avec des sources de données entity selection ou collections prennent désormais en charge la propriété de colonne [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height).
- ORDA : Support du fichier _roles.json_ pour définir les [privilèges](../ORDA/privileges.md) assignés à la session avec [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Prise en charge du [mode SDI en mode application test](../Menus/sdi.md#sdi-mode-availability) sous Windows.
- 4D View Pro :
  - prise en charge des thèmes dans les tables : nouvelles commandes [VP SET TABLE THEME](../ViewPro/commands/vp-set-table-theme) et [VP Get table theme](../ViewPro/commands/vp-get-table-theme) , prise en charge des options de thème dans [VP CREATE TABLE](../
  - nouvelle commande [VP Get table dirty rows](../ViewPro/commands/vp-get-table-dirty-rows)
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19_R8) : liste de tous les bugs qui ont été corrigés dans 4D 19 R8.

#### Changements de comportement

- Pour la conformité RFC de HTTP, la propriété [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) retourne maintenant tous les noms d'en-têtes **en minuscules**. Si vous voulez que votre code continue à fonctionner comme avant, utilisez la nouvelle propriété [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Lorsqu'une action standard est assignée à un [bouton bevel avec menu contextuel lié](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu), l'action standard n'est plus générée si une option de menu contextuel est sélectionnée.
- Dans les zones Web utilisant blink (CEF), les dialogues affichés à partir de scripts externes sont désormais bloquants s'ils ne sont pas appelés à partir d'une fonction JS `setTimeout()`. Cela est dû aux mises à jour actuelles de CEF, dans lesquelles les dialogues affichés par des fonctions telles que `alert()` ou `print()` ne sont plus gérés par le système d'exploitation mais par la zone Web. Voir [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) et [`WA EXECUTE JAVASCRIPT`] (https://doc.4d.com/4dv19/help/command/en/page1043.html).

## 4D 19 R7

Lisez [**Les nouveautés de 4D 19 R7**](https://blog.4d.com/fr-whats-new-in-4d-v19-R7/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 19 R7.

#### Points forts

- Les données liées et les attributs calculés/alias peuvent être affichés dans l'[Explorateur de données](../Admin/dataExplorer#basics).
- Nouvelle classe [FileHandle](../API/FileHandleClass.md) et nouvelle fonction [`.open()`](../API/FileClass.md#open) dans la classe `File`.
- [Classe Entity selection](../API/EntitySelectionClass.md) : [`.add()`](../API/EntitySelectionClass.md#add) prend en charge un paramètre _entitySelection_, [`.minus()`](../API/EntitySelectionClass.md#minus) prend en charge un paramètre _keepOrder_.
- Prise en charge des options _automaticRedirections_ et _decodeData_ dans [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Nouveau fichier journal [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: nouvelles commands de table [VP Find table](../ViewPro/commands/vp-find-table), [VP Get table column attributes](../ViewPro/commands/vp-get-table-column-attributes), [VP Get table column index](../ViewPro/commands/vp-get-table-column-index), [VP Get tables](../ViewPro/commands/vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/commands/vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/commands/vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/commands/vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/commands/vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/commands/vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/commands/vp-set-table-column-attributes).
- Les espaces de noms des composants sont maintenant [affichés dans l'explorateur](../Extensions/develop-components.md#declaring-the-component-namespace).
- Les objets de formulaire zone de texte et de saisie prennent désormais en charge la [propriété de rayon d'angle](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19_R7) : liste de tous les bugs qui ont été corrigés dans 4D 19 R7.

#### Changements de comportement

- Pour des raisons de cohérence avec les interfaces standard (par exemple, les explorateurs de fichiers des OS), les règles des list box pour la sélection des lignes/le glisser-déposer ont été modifiées. Une sélection continue ou discontinue de lignes peut être glissée en cliquant simplement sur une ligne sélectionnée et en la déplaçant ; la touche **Alt** n'est plus nécessaire (mais peut toujours être utilisée comme dans les versions précédentes). Lorsque la touche **Maj** ou **Ctrl/Commande** est enfoncée, un clic de souris est pris en compte lorsque le clic est en bas. Pour plus d'informations sur le glisser-déposer dans les list box, vous pouvez consulter [cet article de blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) et télécharger [ce projet HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numérotation interne de 4D a été modifiée à partir de 4D 19 R7 :
  - les releases jusqu'à 4D 19 R6 (incluses) sont numérotées 282xxx,
  - les releases à partir de 4D 19 R7 seront numérotées 100xxx.\
    Notez qu'une version spécifique de 4D est toujours identifiée de manière unique par un nom de branche et un numéro de build. Le numéro de build augmente par ordre chronologique.
- La possibilité d'utiliser le protocole REST de Wakanda/4D Mobile pour appeler une méthode de projet a été supprimée. Vous pouvez utiliser les [fonctions de classe de data model ORDA](../REST/ClassFunctions.md) ou les [urls /4DACTION](../WebServer/httpRequests.md#4daction) à la place.

## 4D 19 R6

- Nouvelle classe [HTTPRequest](../API/HTTPRequestClass.md).
- Les fonctions de collection qui peuvent appeler du code supportent maintenant les objets function comme paramètre _formule_ : [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Les cellules de listbox prennent en charge le padding [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) et [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding).
- 4D View Pro : nouvelles commandes [VP CREATE TABLE](../ViewPro/commands/vp-create-table) et [VP REMOVE TABLE](../ViewPro/commands/vp-remove-table) pour gérer les tableaux dans les feuilles.
- Possibilité de voir les attributs liés, calculés et alias dans le [Web Data Explorer](../Admin/dataExplorer.md#basics).
- Pour nous aider à améliorer nos produits, nous collectons désormais automatiquement des données concernant les statistiques d'utilisation des applications 4D Server en cours d'exécution. Cela n'aura aucun impact sur les performances. Voir la nouvelle page expliquant [pourquoi et comment 4D collecte des données](../Admin/data-collect.md).
- Composants compilés pour Silicon : Sur les plateformes macOS Silicon (Apple ARM CPUs), les composants doivent être recompilés avec 4D 19 R6 ou plus pour être utilisés avec cette version.

## 4D 19 R5

- Le [fichier directory.json](Users/editing#directoryjson-file) du projet peut désormais être [intégré dans le serveur](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) au moment du build, ce qui vous permet de déployer une application client/serveur avec une configuration de sécurité d'utilisateurs et groupes de base.
- Vous pouvez maintenant [désélectionner les modules inutiles](../Desktop/building.md#deselecting-modules) dans vos applications construites.
- La bibliothèque _MeCab_ est incluse par défaut dans toutes les applications 4D sur macOS. Dans les versions précédentes, cette bibliothèque, spécialement conçue pour gérer le texte japonais, n'était disponible que dans la version japonaise de 4D sur macOS. Si vous n'avez pas besoin de cette bibliothèque dans vos applications finales, vous pouvez maintenant la [désélectionner](../Desktop/building.md#deselecting-modules).
- [Optimisation client/serveur](../ORDA/client-server-optimization.md#optimization-context): De nouvelles fonctions de classe permettent de gérer le cache ORDA et le contenu d'un contexte d'optimisation. Voir [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) et [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) pour plus d'informations.
  > Ces fonctions sont destinées aux développeurs qui ont besoin de personnaliser les fonctions par défaut d'ORDA pour des configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de les utiliser.
- [Classe DataClass](../API/DataClassClass.md) : La nouvelle fonction [.getCount()](../API/DataClassClass.md#getcount) retourne le nombre d'entités dans une dataclass.
- Le fichier _4DDiagnosticLog.txt_ n'enregistre par défaut que des informations de haut niveau ([niveau INFO](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt)). Vous pouvez maintenant sélectionner le niveau d'information à enregistrer (par exemple les informations de niveau DEBUG) en utilisant le sélecteur `Diagnostic log level` de la commande `SET DATABASE PARAMETER` ou le fichier de configuration du journal.
- L'appel à `Use()` sur un objet non partagé ou une collection non partagée ne fait rien (il ne génère plus d'erreur). Ainsi, il est désormais inutile de tester si l'objet ou la collection passé(e) à Use() est effectivement partagé(e).
- Pour plus de clarté, deux commandes SQL ont été préfixées : `GET DATA SOURCE LIST` a été renommée en `SQL GET DATA SOURCE LIST`, `Get current data source` a été renommée en `SQL Get current data source`.
- **4D View Pro**:
  - Les nouvelles commandes [VP SET DATA CONTEXT](../ViewPro/commands/vp-set-data-context), [VP Get data context](../ViewPro/commands/vp-get-data-context), [VP SET BINDING PATH](../ViewPro/commands/vp-set-binding-path), [VP Get binding path](../ViewPro/commands/vp-get-binding-path) vous permettent de créer des contextes de données et de lier leur contenu aux cellules de feuille.
  - [VP EXPORT DOCUMENT](../ViewPro/commands/vp-get-binding-path) et [VP Export to object](../ViewPro/commands/vp-get-binding-path) acceptent désormais la nouvelle option `includeBindingSource` qui exporte le contenu d'un contexte de données en tant que valeu
  - (Windows uniquement) Les zones de 4D View Pro utilisent désormais une nouvelle fenêtre de paramètres d'impression.
- **Web areas**:
  - Nouveau moteur de rendu système Windows : Les zones Web utilisant le [moteur de rendu du système Windows](../FormObjects/webArea_overview.md#web-rendering-engine) sont désormais basées sur **Microsoft Edge WebView2**. Cela a un impact sur les caractéristiques suivantes :
    - Les commandes `WA Create URL history menu` et `WA GET URL HISTORY` ne renvoient que l'URL en cours.
    * La [variable Progression](../FormObjects/properties_WebArea.md#progression) n'est plus mise à jour.
    * Les fonctions de glisser-déposer sont gérées par une API Windows qualifiée d'"expérimentale" par Microsoft. Par conséquent, les zones web peuvent ne pas fonctionner comme prévu lorsque cette API n'est pas installée : le glisser-déposer peut sembler autorisé même si la préférence `WA enable URL drop` a été réglée sur False. Cependant, l'action de dépôt est bloquée par défaut, et vous pouvez contrôler les URLs autorisées en utilisant l'événement [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) (voir ci-dessous).
  * (Windows uniquement) Lorsque l'utilisateur sélectionne **Imprimer...** à partir d'une zone Web utilisant le moteur de rendu Web intégré, une nouvelle fenêtre de paramètres d'impression s'affiche.
  * Pour refléter leur effet réel dans les zones web (augmentation ou diminution du niveau de zoom de la page), deux commandes ont été renommées : `WA SET PAGE TEXT LARGER` a été renommée `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` a été renommée `WA ZOOM OUT`.
  * Sécurité renforcée dans les zones web qui utilisent le [moteur de rendu web intégré](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) ou le [moteur de rendu du système Windows](../FormObjects/webArea_overview.md#web-rendering-engine) (basé sur Microsoft Edge WebView2) :
    - Les règles CORS s'appliquent désormais à l'accès aux fichiers sur disque dans les espaces web. Par exemple, lors de l'ouverture d'un fichier .html avec `WA OPEN URL`, ce fichier .html ne peut pas contenir de liens pointant vers des fichiers situés en dehors de son dossier
    - Le dépôt de contenus externes dans les zones web est désormais toujours bloqué et déclenche l'événement [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) lorsque la préférence `WA enable URL drop` est définie sur True (lorsqu'elle est définie sur False, la préférence `WA enable URL drop` ne modifie que l'icône du curseur de dépôt et filtre l'événement `On Window Opening Denied`). Pour permettre une action de dépôt, vous devez exécuter un code supplémentaire dans la méthode objet de la zone web :

```4d
WA OPEN URL(* ; "WebArea";WA Get last filtered URL(* ; "WebArea"))

```

## 4D 19 R4

- Les [attributs alias](../ORDA/ordaClasses.md#alias-attributes-1) sont disponibles dans les classes ORDA.
- Prise en charge des instructions [break and continue](../Concepts/flow-control.md#break-and-continue) dans les boucles.
- Prise en charge de l'instruction [return](../Concepts/flow-control.md#return-expression) et de l'expression [return expression](../Concepts/parameters.md#return-expression) pour renvoyer des valeurs.
- Support des [opérateurs d'assignation composés](../Concepts/operators.md#compound-assignment-operators), [opérateurs de court-circuits](../Concepts/operators.md#short-circuit-operators), et [opérateur ternaire](../Concepts/operators.md#ternary-operator)
- L'[Éditeur de code](../code-editor/write-class-method.md) comprend désormais un outil de liste déroulante et supporte les marqueurs pour une meilleure navigation dans le code.
- Nouvelles préférences : Option [**Inclure les jetons dans les fichiers source du projet**](../Preferences/general.md#include-tokens-in-project-source-files) et [**Afficher les presse-papiers**](../Preferences/methods.md#show-clipboards) sur la page Méthodes.
- Nouvelle requête REST pour [verrouiller/déverrouiller](../REST/$lock.md) les entités.
- Le chapitre [4D View Pro](../ViewPro/getting-started.md) a été ajouté avec de nouvelles commandes : [VP Copy to object](../ViewPro/commands/vp-copy-to-object), [VP MOVE CELLS](../ViewPro/commands/vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/commands/
- Nouvelle [classe SystemWorker](../API/SystemWorkerClass.md).
- La constante `Alias selection` a été renommée `Allow alias files` pour résoudre un conflit résultant de la prise en charge des attributs d'alias dans ORDA.
- Pour une meilleure conformité avec les spécifications ORDA, la propriété de champ _Mapper les valeurs NULL en valeurs vides_ est maintenant décochée par défaut dans les bases de données créées avec 4D 19 R4 et plus. Vous pouvez également activer ce comportement par défaut dans vos bases de données converties à partir de versions antérieures en sélectionnant le paramètre de compatibilité Mapper les valeurs NULL en valeurs vides non coché par défaut lors de la création des champs. Il est désormais recommandé de travailler avec des valeurs nulles, car elles sont entièrement prises en charge par ORDA.
- En raison de la prise en charge de l'[opérateur ternaire](../Concepts/operators.md#ternary-operator), les deux points ":" ne sont plus autorisés dans les noms de variables, de champs, de constantes, de fonctions, de plugins et de méthodes de projet. Si votre base de données/projet contient des identifiants avec des deux-points, vous devez les remplacer avant de la convertir en 19 R4 ou à une version plus récente, sinon des erreurs peuvent se produire dans votre code. Par exemple, si vous avez une variable nommée _a:b_, elle peut être interprétée comme une syntaxe d'opérateur ternaire :

```4d
$value:=($size>1000) ? a:b // Ici, 'a:b' est considéré comme un opérateur ternaire.

```

## 4D 19 R3

- Les [propriétés calculées](../Concepts/classes.md#fonction-get-and-function-set) sont disponibles dans les classes.
- Les [attributs calculés](../ORDA/ordaClasses.md#computed-attributes) sont disponibles dans les classes ORDA. Ils sont similaires aux propriétés calculées, mais supportent aussi les fonctions [query](../ORDA/ordaClasses.md#function-query-attributename) et [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename).
- Nouveaux [attributs](../API/DataClassClass.md#attributename) de dataclass ORDA : `exposed` et `readOnly`.
- Les [archives ZIP](../API/ZipArchiveClass.md#zip-create-archive) prennent désormais en charge les algorithmes de compression _LZMA_ et _xz_.
- Une [nouvelle option de compilation](../Desktop/building.md#allow-connection-of-silicon-mac-clients) facilite l'inclusion des clients Silicon Mac dans les applications Serveur sous Windows.
- Extension de la [prise en charge du mode sombre](../Preferences/general.md#appearance-macos-only) sur macOS.
- Support de **OAuth2 token object** dans [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), et [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Les utilisateurs peuvent maintenant charger un [fichier de configuration des journaux](../Debugging/debugLogFiles.md#using-a-log-configuration-file) en utilisant un bouton dans la [fenêtre d'administration du serveur](../ServerWindow/maintenance.md#load-logs-configuration-file).
- La gestion des [paramètres optionnels](../Concepts/parameters.md#optional-parameters) est plus souple dans le langage 4D lorsqu'il s'agit d'accéder à des paramètres déclarés mais non transmis. Par exemple, le code suivant ne provoque plus d'erreur :

```4d
// Fonction "concate" de myClass
Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+""+$param2)
  // Appel de la méthode
 $class:=cs.myClass.new()
 $class.concate("Hello" ;" world") // Affiche "Hello world"
 $class.concate("Hello") // Affiche "Hello "
 $class.concate() // Affiche " "
```

Pour plus d'informations, veuillez consulter [cet article de blog](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). Pour bénéficier de cette simplification globale, vous devez recompiler à la fois les méthodes appelantes et les méthodes appelées ; les composants doivent donc être recompilés.

- Le débogage des sessions du serveur web [est plus facile sur 4D Server](../WebServer/sessions.md#preemptive-mode).

- Le nouveau composant [4D NetKit](https://github.com/4d/4D-NetKit) vous permet de vous connecter à des API tierces telles que Microsoft Graph.

- 4D 19 R3 utilise un algorithme de hachage plus puissant pour les mots de passe des utilisateurs 4D : Bcrypt. Ce nouvel algorithme est automatiquement utilisé lorsqu'un mot de passe est modifié à l'aide de la boîte à outils, de la commande `CHANGE PASSWORD` ou de la commande `Set user properties`. Une fois le mot de passe modifié, l'ouverture de la base de données avec une version antérieure à 4D 19 R3 entraînera un refus d'authentification pour ce compte. Si vous utilisez les mots de passe 4D, il est fortement recommandé de sauvegarder le fichier .4db (bases de données binaires) ou le fichier directory.json (projets) avant d'effectuer la mise à jour vers 4D 19 R3 ou une version ultérieure.

- Par souci d'exactitude, la constante `4D digest` a été renommée `4D REST digest`.

- Gestion des fins de ligne et des nomenclatures pour les commandes XML : Lorsqu'ils sont ouverts dans 4D 19 R3, les projets ou bases de données créé(e)s avec les versions précédentes se comportent différemment en ce qui concerne les caractères de fin de ligne par défaut et la gestion des BOM dans les documents XML : les caractères de saut de ligne (LF) sont utilisés à la place de CR (sur macOS), et les marques d'ordre d'octet (BOM) ne sont pas incluses. Cela permet une meilleure compatibilité avec les outils VCS. Si nécessaire, vous pouvez restaurer le comportement de la 19 R2 en utilisant la commande `XML SET OPTIONS`. Dans les projets ou les bases de données converti(e)s à partir de versions antérieures à 19 R2, ces options sont gérées par deux paramètres de compatibilité.

- Suppression du raccourci "Runtime Explorer" dans les projets construits : le raccourci **Cmd/Ctrl+Shift+F9** n'affiche plus la fenêtre du Runtime Explorer dans les applications de projets fusionnés à mono-utilisateurs. Ce raccourci peut désormais être un raccourci d'application utilisateur. Vous pouvez appeler la fenêtre Runtime Explorer en utilisant la nouvelle commande `OPEN RUNTIME EXPLORER`.

- Capacités de débogage étendues avec 4D Server : En mode interprété, 4D Server peut désormais déboguer tous les types de process, y compris les sessions web évolutives. Cette fonction est disponible lorsque le débogueur est connecté au serveur ou à un client distant.\
  _Attention : En mode interprété, afin de rendre le débogage étendu disponible sur la machine serveur, tous les process du serveur sont désormais automatiquement exécutés en mode coopératif lorsque le débogueur est attaché au serveur (paramètre par défaut). Cela peut avoir un impact significatif sur les performances de vos applications converties lorsqu'elles fonctionnent avec 4D Server 19 R3 et plus. Pour rétablir l'exécution préemptive sur le serveur dans ce cas, il suffit de détacher le débogueur du serveur (et de l'attacher à un client distant si nécessaire)._

- Sous Windows, les projets et les bases de données 4D créé(e)s avec 4D 19 R3 et ultérieur utilisent l'API [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) dans les formulaires. Cette API améliore le rendu du texte, en particulier dans les configurations à DPI élevé. DirectWrite est utilisé pour le rendu de textes statiques et de textes saisis, de cases à cocher, de boutons et de boutons radio. Notez que les listbox utilisent déjà DirectWrite. Une option de compatibilité vous permet d'activer DirectWrite dans les projets et les bases de données créés avec des versions antérieures de 4D.

- Si vous utilisez des composants compilés avec 4D 19.0 pour Silicon (Apple ARM CPUs) qui appellent la commande `Count parameters`, nous vous recommandons de les recompiler avec 4D 19 R3 pour assurer la compatibilité avec 4D 19 R3 et les releases ultérieures. Si un composant n'est pas compilé pour Silicon, il n'est pas nécessaire de le recompiler.

## 4D 19 R2

- Un [fichier .gitignore par défaut](../Preferences/general#create-gitignore-file.md) peut être créé avec les nouveaux projets
- Nouvelle [API de classe Blob](../API/BlobClass.md) pour gérer les nouveaux objets [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Support de `no-bom` et nouveaux caractères de fin de ligne par défaut dans [`.setText()`](../API/FileClass.md#settext)

## Versions précédentes

<details><summary>Cliquez pour voir les notes de mise à jour des versions précédentes</summary>

### 4D 19

:::warning Note de sécurité

Si vos applications 4D utilisent des connexions TLS, il est recommandé de mettre à jour 4D en release 19.7 LTS build 288986 ou plus. Pour plus d'informations, consultez ce [Bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [IMAPTransporter Class](../API/IMAPTransporterClass.md) : nouvelles fonctions `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, et `.unsubscribe()`.
- [Classe File](../API/FileClass.md) : nouvelles fonctions `setAppInfo()` et `getAppInfo()`.
- Nouvelle balise de transformation [4DEACH](../Tags/transformation-tags.md#4deach-and-4dendeach).
- Serveur Web : nouveau paramètre [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite).
- Prise en charge des couleurs foncées et claires pour les [formulaires](../FormEditor/properties_FormProperties.md#color-scheme) et les [feuilles de style](../FormEditor/stylesheets#media-queries)
- Nouveaux thèmes sombres et clairs par défaut dans les [préférences de l'éditeur de code](../Preferences/methods.md#theme-list).
- [Compilation native](../Project/compiler.md#compiler-methods-for) pour les processeurs Silicon.
- La propriété [Variable calculation](../FormObjects/properties_Object.md#variable-calculation) est désormais prise en charge par les colonnes de listbox entity selection.
- Nouvelle page complète [CLI](../Admin/cli.md).

### 4D 18 R6

- [Classe Entity selection](../API/EntitySelectionClass.md) : Les fonctions `.average()`, `.max()` et `.min()` retournent maintenant _undefined_ si l'entity selection est vide.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) et [SMTP Mail](../API/SMTPTransporterClass.md) : La propriété `authenticationMode` active OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md) : nouvelles fonctions `.expunge()` et `.append()`
- Nouveau composant de serveur web [WebAdmin](../Admin/webAdmin.md)
- Nouvelle interface [DataExplorer](../Admin/dataExplorer.md)
- Nouvelles [sessions utilisateur](../WebServer/sessions.md) et [leur API](../API/SessionClass.md) web.

</details>

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
