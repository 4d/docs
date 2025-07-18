---
id: updates
title: Release Notes
---

## 4D 20 R10

Lisez [**Les nouveautés de 4D 20 R10**](https://blog.4d.com/fr-whats-new-in-4d-20-R10/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R10.

#### Points forts

- Handling of [ORDA events on data](../ORDA/orda-events.md).
- Nouvelle option `connectionTimeout` dans le paramètre [`options`](../API/TCPConnectionClass.md#options-parameter) de la fonction [`4D.TCPConnection.new()`](../API/TCPConnectionClass.md#4dtcpconnectionnew).
- New [`4D.Vector`](../API/VectorClass.md) class to process and compare vectors, usually calculated by AIs.
- Les UUIDs dans 4D sont maintenant générés en **version 7**. Dans les versions 4D précédentes, ils étaient générés en version 4.
- New [`UDPSocket`](../API/UDPSocketClass.md) and [`UDPEvent`](../API/UDPEventClass.md) classes to send data using UDP sockets. Support of detailed logging for UDP events in the [`4DTCPUDPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) log file (renamed from `4DTCPLog.txt`).
- [Automatic selection of licenses to embed](../Desktop/building.md#application-automatically-embedding-available-licenses) in the Build application dialog box, modified [`Create deployment license`](../commands/create-deployment-license.md) command, new [`AutomaticLicenseIntegration`](https://doc.4d.com/4Dv20R10/4D/20-R10/AutomaticLicenseIntegration.300-7611090.en.html) BuildApplication xml key.
- Enhanced security for formula copy/paste in [4D Write Pro](../WritePro/managing-formulas.md) and [styled text areas](../FormObjects/input_overview.md): formulas copied from outside the current 4D application are now always pasted as values only.
- 4D AIKit component: new [OpenAIEmbeddingsAPI class](../aikit/Classes/OpenAIEmbeddingsAPI.md) to create embeddings using OpenAI's API.
- You can now [associate a class](../Develop/field-properties.md) to an object field in the structure editor.
- Automatic handling of [recursive dependencies](../Project/components.md#automatic-dependency-resolution).
- Langage 4D:
    - Pour des raisons de cohérence, les commandes [`Create entity selection`](../commands/create-entity-selection.md) et [`USE ENTITY SELECTION`](../commands/use-entity-selection.md) ont été déplacées du thème ["4D Environnement"](../commands/theme/4D_Environment.md) vers le thème ["Sélections"](../commands/theme/Selection.md).
    - Nouvelles commandes [`OBJET SET DATA SOURCE FORMULA`](../commands/object-set-data-source-formula.md) et [`OBJECT Get data source formula`](../commands/object-get-data-source-formula.md) pour assigner et lire les objets `Formula` comme sources de données pour les objets de formulaire.
    - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md) et [`LISTBOX Get property`](../commands/listbox-get-property.md) prennent en charge trois nouvelles constantes : `lk current item`, `lk current item position`, et `lk selected items expression`.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R10): list of all bugs that have been fixed in 4D 20 R10.

#### Changements de comportement

- Sous Windows, les polices d'imprimante courantes destinées uniquement à l'impression (c'est-à-dire non utilisables à l'écran) ne sont plus chargées par 4D au démarrage.
- The *MeCab* library has been removed. This change only affects the processing of Japanese text.
- When an object variable or parameter is declared with a ["cs" class](../Concepts/classes.md#cs) type, assigning it with an object instance of a different class now generates a syntax error.

## 4D 20 R9

Lisez [**Les nouveautés de 4D 20 R9**](https://blog.4d.com/fr-whats-new-in-4d-20-R9/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R9.

#### Points forts

- The [*MeCab* library](../settings/database.md#support-of-mecab-japanese-version) is now deprecated and will be removed in the next release.
- Prise en charge des [tokens de session](../WebServer/sessions.md#session-token-otp) gérés avec les nouvelles fonctions [`Session.createOTP()`](../API/SessionClass.md#createotp) et [`Session.restore()`](../API/SessionClass.md#restore).
- L'assistant d'étiquettes utilise maintenant l'éditeur de formules pour ajouter ou éditer des formules dans la [zone de construction du modèle](../Desktop/labels.md#label-preview).
- Nouvelle classe [`TCPListener`](../API/TCPListenerClass.md) pour créer des connexions au serveur TCP ; nouvelles propriétés dans les classes connexes : `address`, `listener` et `port` dans la classe [`TCPConnection`](../API/TCPConnectionClass.md), `ip` et `port` dans la classe [`TCPEvent`](../API/TCPEventClass.md).
- Les commandes et constantes obsolètes génèrent maintenant des warnings spécifiques dans le [live checker et le compilateur](../code-editor/write-class-method.md#warnings-and-errors). Vous pouvez savoir si une commande est obsolète en utilisant la commande [`Command name`](../commands/command-name.md).
- Nouvelles commandes [WA SET CONTEXT](../commands/wa-set-context.md) et [WA Get context](../commands/wa-get-context.md) pour contrôler le contenu de [$4d](../FormObjects/webArea_overview.md#4d-object) dans les zones web.
- Nouveau paramètre de base de données [`RDP optimization`](../commands-legacy/set-database-parameter.md#rdp-optimization-133) pour optimiser par exemple le presse-papiers partagé lors de l'utilisation du protocole de bureau distant avec 4D.
- Les composants interprétés peuvent maintenant être [édités depuis le projet hôte](../Extensions/develop-components.md#editing-components-from-the-host).
- Les [licenses](../Admin/licenses.md) sont maintenant automatiquement actualisées au démarrage.
- Nouveau [composant 4D AIkit](../aikit/overview.md) permettant l'interaction avec les API IA tierces.
- Les fonctions de callback suivantes de 4D View Pro attendent maintenant que toutes les fonctions personnalisées de 4D terminent leurs calculs : [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md), [VP IMPORT FORM BLOB](../ViewPro/commands/vp-import-from-blob.md), [VP IMPORT FROM OBJECT](../ViewPro/commands/vp-import-from-object.md), et [VP FLUSH COMMANDS](../ViewPro/commands/vp-flush-commands.md).
- Nouvelles fonctionnalités [4D NetKit](https://developer.4d.com/4D-NetKit/) permettant de gérer les calendriers Google et Microsoft 365 ; possibilité d'utiliser le serveur web hôte pour l'authentification OAuth 2.0.
- 4D Write Pro Interface : nouvelle [IA intégrée](../WritePro/writeprointerface.md#integrated-ai) pour interagir avec **chatGTP** depuis vos documents 4D Write Pro.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R9) : liste de tous les bugs qui ont été corrigés dans 4D 20 R9.

## 4D 20 R8

Lisez [**Les nouveautés de 4D 20 R8**](https://blog.4d.com/fr-whats-new-in-4d-20-R8/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R8.

#### Points forts

- Implémentez votre propre [**gestionnaire de requêtes HTTP**](../WebServer/http-request-handler.md) en utilisant la nouvelle classe [`4D.IncomingMessage`](../API/IncomingMessageClass.md).
- Les expressions utilisées dans [les propriétés des objets de formulaire] (../FormObjects/properties_Reference.md) bénéficient maintenant de la vérification syntaxique dans la [liste des propriétés] (../FormEditor/formEditor.md#property-list) et dans le [Compilateur](../Project/compiler.md#check-syntax).
- Vous pouvez [associer une classe à un formulaire](../FormEditor/properties_FormProperties.md#form-class) pour activer le type-ahead et l'instanciation automatique des données de formulaire lors de l'utilisation de la commande [`Form`](../commands/form.md).
- Prise en charge de [sessions autonomes](../API/SessionClass.md) pour simplifier le développement en local d'applications client/serveur.
- [débogueur 4D](../Debugging/debugger.md) : nouveau design, nouvelles fonctions de sauvegarde automatique et de mode d'affichage.
- [Nouvelle architecture des composants générés](../Desktop/building.md#build-component) pour une meilleure conformité avec les directives de notarisation d'Apple.
- Vous pouvez maintenant facilement [générer des applications d'évaluation](../Desktop/building.md#build-an-evaluation-application) dans la boîte de dialogue du Générateur d'applications.
- Dépendances : Utilisez le Gestionnaire de dépendances pour [vérifier les nouvelles versions](../Project/components.md#checking-for-new-versions) et [mettre à jour](../Project/components.md#updating-dependencies) les composants GitHub.
- Nouvelles classes [`TCPConnection`](../API/TCPConnectionClass.md) et [`TCPEvent`](../API/TCPEventClass.md) pour gérer les connexions client TCP, traiter les événements et améliorer le contrôle de la transmission des données. Ajout de [`4DTCPLog.txt`](../Debugging/debugLogFiles.md#4dtcplogtxt) pour la journalisation détaillée des événements TCP.
- Nouvelles options dans [VP EXPORT DOCUMENT](../ViewPro/commands/vp-export-document.md) et [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md) pour contrôler les styles, les formules, l'intégrité des données et la protection par mot de passe.
- 4D Write Pro :
    - Les commandes suivantes acceptent maintenant des paramètres tels que des objets ou des collections : [WP SET ATTRIBUTES](../WritePro/commands/wp-set-attributes.md), [WP Get Attributes](../WritePro/commands/wp-get-attributes.md), [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md), [WP Table append row](../WritePro/commands/wp-table-append-row.md), [WP Import document](../WritePro/commands/wp-import-document.md), [WP EXPORT DOCUMENT](../WritePro/commands/wp-export-document.md), [WP Add picture](../WritePro/commands/wp-add-picture.md), et [WP Insert picture] (../WritePro/commands/wp-insert-picture.md).
    - [WP Insert formula](../WritePro/commands/wp-insert-formula.md), [WP Insert document body](../WritePro/commands/wp-insert-document-body.md), et [WP Insert break](../WritePro/commands/wp-insert-break.md), sont maintenant des fonctions qui retournent des plages.
    - Nouvelles expressions liées aux attributs de documents : [This.sectionIndex](../WritePro/managing-formulas.md), [This.sectionName](../WritePro/managing-formulas.md) et [This.pageIndex](../WritePro/managing-formulas.md).
- Langage 4D:
    - Commande modifiée : [`FORM EDIT`](../commands/form-edit.md)
    - Les fonctions [`.sign()`](../API/CryptoKeyClass.md#sign) et [`.verify()`](../API/CryptoKeyClass.md#verify) de la [classe 4D.CryptoKey](../API/CryptoKeyClass.md) prennent en charge des Blobs dans le paramètre *message*.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R8) : liste de tous les bugs qui ont été corrigés dans 4D 20 R8.

#### Changements de comportement

- Après une modification du fichier journal en utilisant [`SELECT LOG FILE`](../commands/select-log-file.md) ou les [paramètres de sauvegarde](../Backup/settings.md#log-management), la commande [`New log file`](../commands/new-log-file.md) valide maintenant le changement, sans attendre une sauvegarde. L'erreur -4447 (sauvegarde requise) n'est plus générée.
- En raison de leur [nouvelle architecture](../Desktop/building.md#build-component), les composants construits avec 4D 20 R8 et suivantes ne peuvent pas être installés dans les versions 4D précédentes.

## 4D 20 R7

Lisez [**Les nouveautés de 4D 20 R7**](https://blog.4d.com/fr-whats-new-in-4d-20-R7/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R7.

#### Points forts

- Les colonnes et les en-têtes des list box de type heure prennent désormais en charge l'option ["blankIfNull"](../FormObjects/properties_Display.md#time-format).
- Nouvelles propriétés dans [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) et [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- Vous pouvez désormais [ajouter et supprimer des composants à l'aide de l'interface du Gestionnaire de composants](../Project/components.md#monitoring-project-dependencies).
- Nouveau [**mode de typage direct**](../Project/compiler.md#enabling-direct-typing) dans lequel vous déclarez toutes les variables et paramètres dans votre code en utilisant les mots-clés `var` et `#DECLARE`/`Function` (seul mode supporté dans les nouveaux projets). La [fonctionnalité de vérification de syntaxe](../Project/compiler.md#check-syntax) a été adaptée en conséquence.
- Prise en charge des [singletons de session](../Concepts/classes.md#singleton-classes) et nouvelle propriété de classe [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton).
- Nouveau [mot-clé fonction `onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword) pour définir des fonctions singleton ou ORDA qui peuvent être appelées par des [requêtes HTTP REST GET](../REST/ClassFunctions.md#function-calls).
- Nouvelle classe [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) pour que le serveur REST retourne n'importe quel contenu web.
- Qodly Studio : Vous pouvez maintenant [attacher le débogueur Qodly à 4D Server](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server).
- Nouvelles clés Build Application pour que les applications 4D distantes valident les [signatures](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.fe.html) et/ou les [domaines](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.fe.html) des autorités de certification des serveurs.
- Possibilité de [construire des applications autonomes sans licences intégrées](../Desktop/building.md#licenses).
- Langage 4D:
    - Nouvelles commandes : [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
    - Commandes modifiées : [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
- 4D Write Pro :
    - Nouvelle commande : [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
    - Commandes modifiées : [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md), [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
    - [Liste des nouveautés](https://doc.4d.com/4Dv20R7/4D/20-R7/What-s-new.901-7239607.fe.html) dans le manuel 4D Write Pro Reference.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R7) : liste de tous les bugs qui ont été corrigés dans 4D 20 R7.

#### Changements de comportement

- Les documentations du [Langage 4D](../commands/command-index.md) et du [Langage 4D Write Pro](../WritePro/commands/command-index.md) sont maintenant entièrement disponibles sur developer.4d.com. Découvrez toutes les nouvelles fonctionnalités et les modifications concernant ces documentations dans cette release note.
- La commande [`File`](../commands/file.md) (ainsi que [`4D.File.new()`](../API/FileClass.md#4dfilenew)) est plus stricte lorsqu'il s'agit de vérifier la syntaxe du *path* fourni en paramètre.
- L'action de [permission](../ORDA/privileges.md#permission-actions) **describe** a été supprimée des actions disponibles. L'accès aux urls [`/rest/$catalog`](../REST/$catalog.md) n'est plus contrôlé. Session *describe* privileges are now ignored.

## 4D 20 R6

Lisez [**Les nouveautés de 4D 20 R6**](https://blog.4d.com/fr-whats-new-in-4d-20-R6/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R6.

#### Points forts

- Prise en charge des opérateurs de comparaison sur les [références d'objet](../Concepts/dt_object.md#operateurs-sur-les-objets) et les [références de collection](../Concepts/dt_collection.md#operateurs-sur-les-collections). [`collection.query()`](../API/CollectionClass.md#query) prend maintenant en charge les [références d'objet et de collection en tant que valeurs de requête](../API/CollectionClass.md#reference-dobject-ou-de-collection-comme-value).
- Lorsqu'un composant a un [espace de noms déclaré](../Extensions/develop-components.md#declaring-the-component-namespace), ses classes sont maintenant automatiquement partagées entre tous les composants chargés dans le projet hôte via [`cs.<namespace>`](../Concepts/classes.md#cs).
- Gestionnaire de composants : Prise en charge des [composants stockés sur GitHub](../Project/components.md#components-stored-on-github).
- Nouvelle fonction [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) et API REST [`$clean`](../REST/$clean.md) pour obtenir une nouvelle entity selection basée sur l'entity selection originale mais sans ses entités supprimées.
- Nouvelle fonction [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) et API REST [`$info/privileges`](../REST/$info.md) pour inspecter les privilèges de session plus facilement lors du débogage.
- Nouveau fichier [4DCEFParameters.json](../FormObjects/webArea_overview.md#4dcefparametersjson) pour personnaliser les zones Web embarquées dans 4D.
- Nouvelle classe [HTTPAgent](../API/HTTPAgentClass.md) et nouvelle propriété [`agent`](../API/HTTPRequestClass.md#options-parameter) pour la classe HTTPRequest.
- Nouvelles fonctions [`enableState()`](../API/WebFormClass.md) et [`disableState()`](../API/WebFormClass.md) pour contrôler les *states* des pages Qodly depuis le serveur.
- Nouvelle [API `$singleton`](../REST/$singleton.md) pour appeler les fonctions singleton exposées depuis REST et nouveaux [privilèges associés](../ORDA/privileges.md).
- Un [nouveau bouton de paramètre](../settings/web.md#activer-la-validation-dauthentification-rest-avec-la-fonction-dsauthentify) vous aide à mettre à niveau votre projet pour utiliser le mode REST "connexion forcée" (la méthode base `On REST Authentication` est maintenant obsolète).
- Un [nouvel onglet de paramètres](../Project/compiler.md#warnings) vous permet de définir la génération de warnings de manière globale.
- Plusieurs commandes, principalement du thème "Environnement 4D", sont maintenant thread-safe, ainsi que quelques sélecteurs des commandes [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md)/[`Get database parameter`](../commands-legacy/get-database-parameter.md).
- Nouveau [composant 4D-QPDF](https://github.com/4d/4D-QPDF) qui fournit la commande `PDF Get attachments` pour extraire les pièces jointes d'un document PDF/A3.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.fe.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R/4D/20-R6/What-s-new.901-6993921.fe.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R6) : liste de tous les bugs qui ont été corrigés dans 4D 20 R6.

#### Changements de comportement

- Prise en charge de l'enchaînement de défilement dans les formulaires : les parents des sous-formulaires défilent désormais automatiquement lorsque les objets intégrés défilables ([verticalement](../FormObjects/properties_Appearance.md#vertical-scroll-bar) ou [horizontalement](../FormObjects/properties_Appearance.md#horizontal-scroll-bar)) ont atteint leurs limites et que l'utilisateur continue de faire défiler à l'aide de la souris ou du trackpad (*overscrolling*).
- L'API REST [`$catalog`](../REST/$catalog.md) retourne maintenant les singletons (le cas échéant).

## 4D 20 R5

Lisez [**Les nouveautés de 4D 20 R5**](https://blog.4d.com/fr-whats-new-in-4d-20-R5/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R5.

#### Points forts

- Nouveau [Gestionnaire de composants](../Project/components.md) permettant de contrôler les composants à travers un fichier `dependencies.json`.
- Prise en charge des structures de gestion d'erreur [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- La couche réseau QUIC prend désormais en charge le [*broadcasting*](../Desktop/clientServer.md#ouverture-d-un-projet-à-distance), [SSO](https://doc.4d.com/4Dv20R/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.fe.html) et [IPv6](https://doc.4d.com/4Dv20R/4D/20-R5/Paramètres-IP.300-6932707.fe.html).
- Prise en charge des [restricted entity selections](../ORDA/entities.md#restricting-entity-selections).
- Prise en charge des [classes partagées](../Concepts/classes.md#shared-classes) et des [classes singleton](../Concepts/classes.md#singleton-classes). Nouvelles propriétés de classe : [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#issingleton), [`me`](../API/ClassClass.md#me).
- Prise en charge de l'[initialisation d'une propriété de classe dans sa ligne de déclaration](../Concepts/classes.md#initializing-the-property-in-the-declaration-line).
- Nouveau [mode de connexion force login pour les requêtes REST](../REST/authUsers.md#force-login-mode) avec une [prise en charge spécifique dans Qodly Studio for 4D](../WebServer/qodly-studio.md#force-login).
- Nouveau paramètre REST [$format](../REST/$format.md).
- L'objet [`Session`](../commands/session.md) est maintenant disponible pour les sessions utilisateur à distance et les procédures stockées.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.fe.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.fe.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R5) : liste de tous les bugs qui ont été corrigés dans 4D 20 R5.

#### Changements de comportement

- Les plug-ins *4D Internet Commands* et *4D for OCI* ne sont plus inclus dans les installateurs 4D. Pour obtenir ces plug-ins, vous devez vous connecter au [**portail de téléchargement des produits 4D**](https://product-download.4d.com/).
- Les modifications apportées à l'éditeur de structure concernant l'apparence graphique des tables et des champs (couleur, position, ordre...) sont maintenant sauvegardés dans un fichier séparé nommé `catalog_editor.json` stocké dans le dossier [`Sources`](../Project/architecture.md#sources).

## 4D 20 R4

Lisez [**Les nouveautés de 4D 20 R4**](https://blog.4d.com/fr-whats-new-in-4d-v20-R4/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R4.

#### Points forts

- Prise en charge du [format de cryptage `ECDSA`](../Admin/tls.md#encryption) pour les certificats TLS.
- Les connexions TLS client/serveur et serveur SQL sont désormais [configurées dynamiquement](../Admin/tls.md#enabling-tls-with-the-other-servers) (aucun fichier de certificat n'est requis).
- Format HTML direct pour les [exports de définition de structure](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Nouveau [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) qui améliore le contrôle du code pendant le typage, la vérification de la syntaxe et les étapes de compilation afin d'éviter les erreurs d'exécution.
- Les paramètres de méthode déclarés dans les prototypes `#DECLARE` ne sont [plus nécessaires dans les méthodes "Compiler_"(../Concepts/parameters.md).
- Prise en charge des [formats de date et d'heure personnalisés](../Project/date-time-formats.md)
- Nouveau mot-clé [`Try(expression)`](../Concepts/error-handling.md#tryexpression) pour gérer les cas d'erreur simples.
- Nouvelle commande [`HTTP Parse message`](../commands/http-parse-message.md).
- Nouvelle option de compatibilité [Impression non bloquante](../settings/compatibility.md).
- Nouveau [mode édition](../Admin/dataExplorer.md#editing-data) dans le Data Explorer.
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R4) : liste de tous les bugs qui ont été corrigés dans 4D 20 R4.

#### Changements de comportement

- L'utilisation d'une ancienne syntaxe pour la déclaration des paramètres (par exemple `C_TEXT($1)` ou `var $1 : Text`) est maintenant dépréciée et génère des warnings lors du typage du code, de la vérification syntaxique et de la compilation.
- La cohérence des sélections est désormais préservée lorsque certains enregistrements sont supprimés puis d'autres créés (voir [ce billet de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- Dans la mise à jour de la [bibliothèque OpenSSL](#library-table), le niveau de sécurité SSL/TLS par défaut a été modifié de 1 à 2. Les clés RSA, DSA et DH de 1024 bits et plus et de moins de 2048 bits ainsi que les clés ECC de 160 bits et plus et de moins de 224 bits ne sont plus autorisées. Par défaut, la compression TLS était déjà désactivée dans les versions précédentes d'OpenSSL. Au niveau de sécurité 2, il ne peut pas être activé.
- Assurez-vous que votre méthode base "On REST authentication" peut gérer les mots de passe en clair (le troisième paramètre est alors **False**) et que `Open datastore` chiffre votre connexion en passant l'option "tls" à **True** dans *connectionInfo*. Afin de permettre la vérification du mot de passe lorsque [l'annuaire des utilisateurs 4D utilise l'algorithme bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), la valeur "password" dans le paramètre *connectionInfo* de la commande [`Open datastore`](../commands/open-datastore.md) est maintenant envoyée en clair par défaut. Dans certains cas spécifiques, l'option "passwordAlgorithm" peut également être utilisée pour la compatibilité (voir la commande [`Open datastore`](../commands/open-datastore.md)).

## 4D 20 R3

Lisez [**Les nouveautés de 4D 20 R3**](https://blog.4d.com/fr-whats-new-in-4d-v20-R3/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R3.

#### Points forts

- Nouvelle fonction [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Prise en charge du paramètre *context* dans [`Formula from string`](../commands/formula-from-string.md).
- Prise en charge de la propriété `headers` dans le paramètre *connectionHandler* de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Marqueur de modification global](../ORDA/global-stamp.md) pour faciliter la mise en œuvre de modules de synchronisation des données. Nouvelles fonctions : [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) et [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- L'assignation de références de fichiers à des attributs picture/blob est [prise en charge dans ORDA](../ORDA/entities.md#assigning-files-to-picture-or-blob-attributes).
- Prise en charge de [l'initialisation de la valeur et du type de données de la variable dans la ligne de déclaration](../Concepts/variables/#initialisation des variables dans la ligne de déclaration).
- Les paramètres du fichier journal sont désormais [sauvegardés avec le fichier de données courant](../Backup/settings.md#log-management)
- Nouvelle syntaxe pour [déclarer des paramètres variadiques](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro : Prise en charge de [l'importation](../ViewPro/commands/vp-import-from-blob) et de [l'exportation](../ViewPro/commands/vp-export-to-blob) des documents 4D View Pro au format Blob.
- Commandes du langage 4D : [page What's new](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R3) : liste de tous les bugs qui ont été corrigés dans 4D 20 R3.

#### Changements de comportement

- Certaines erreurs ne pouvaient être interceptées par votre [méthode de gestion des erreurs](../Concepts/error-handling.md) qu'en mode interprété. Une correction a été apportée, de sorte que les erreurs suivantes seront désormais également détectées en mode compilé : *Indice hors de l'intervalle*, *Type incompatible*, et *Déréférencement d'un pointeur Null*. Cependant, pour de telles erreurs sur les processeurs Intel, la procédure est toujours interrompue comme auparavant, alors que sur les processeurs Apple Silicon, la procédure n'est interrompue que si vous appelez la commande [`ABORT`](../commands-legacy/abort.md).
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

Voir [**Release Notes pour 4D 20.x LTS**](../../version-20/Notes/updates.md).

## Tableau des bibliothèques

| Bibliothèque | Version courante                        | Mise à jour dans 4D | Commentaire                                                                                                                                        |
| ------------ | --------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL    | 9295969                                 | **20 R10**          | Utilisé pour QUIC                                                                                                                                  |
| CEF          | 131                                     | 20 R8               | Chromium 6778                                                                                                                                      |
| Hunspell     | 1.7.2   | 20                  | Utilisé pour la vérification orthographique dans les formulaires 4D et 4D Write Pro                                                                |
| ICU          | 73.2                    | 20                  | Cette mise à jour majeure entraîne une reconstruction automatique des index alphanumériques, texte et objets.                      |
| libldap      | 2.6.7   | 20 R6               |                                                                                                                                                    |
| libsasl      | 2.1.28  | 20                  |                                                                                                                                                    |
| Liblsquic    | 4.2.0   | **20 R10**          | Utilisé pour QUIC                                                                                                                                  |
| Libuv        | 11.51.0 | **20 R10**          | Utilisé pour QUIC                                                                                                                                  |
| libZip       | 1.9.2   | 20                  | Utilisé par les classes zip, 4D Write Pro, les composants svg et serverNet                                                                         |
| LZMA         | 5.4.1   | 20                  |                                                                                                                                                    |
| ngtcp2       | 1.13                    | **20 R10**          | Utilisé pour QUIC                                                                                                                                  |
| OpenSSL      | 3.3.2   | 20 R7               | Le niveau de sécurité TLS/SSL par défaut a été relevé. Voir [Changements de comportement](#behavior-changes) pour la version 20 R4 |
| PDFWriter    | 4.5.11  | 20 R3               |                                                                                                                                                    |
| PHP          | 8.2.4   | 20                  |                                                                                                                                                    |
| SpreadJS     | 17.1.0  | 20 R7               | Voir [ce blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) pour un aperçu des nouvelles fonctionnalités.          |
| webKit       | WKWebView                               | 19                  |                                                                                                                                                    |
| Zlib         | 1.2.13  | 20                  |                                                                                                                                                    |
