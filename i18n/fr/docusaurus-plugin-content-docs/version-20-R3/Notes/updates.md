---
id: updates
title: Release Notes
---


## 4D v20 R3

Lisez [**Les nouveautés de 4D v20 R3**](https://blog.4d.com/fr-whats-new-in-4d-v20-R3/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v20 R3.


#### Points forts

- Nouvelle fonction [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Prise en charge du paramètre *context* dans [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Prise en charge de la propriété `headers` dans le paramètre *connectionHandler* de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Marqueur global de modification](../ORDA/global-stamp.md) pour faciliter la mise en œuvre de modules de synchronisation des données. Nouvelles fonctions : [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) et [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Attribuer des références de fichiers à des attributs image/blob est [pris en charge dans ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Prise en charge de [l'initialisation de la valeur et du type de variable dans la ligne de déclaration](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Les paramètres du fichier journal sont désormais [sauvegardés avec le fichier de données courant](../Backup/settings.md#log-file-management)
- Nouvelle syntaxe pour [déclarer des paramètres variables](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro : Prise en charge de [l'importation](../ViewPro/method-list.md#vp-import-from-blob) et de [l'exportation](../ViewPro/method-list.md#vp-export-to-blob) des documents 4D View Pro au format Blob.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20R3/4D/20-R3/Liste-des-nouveautes.901-6531224.fe.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R3/4D/20-R3/Liste-des-nouveautes.901-6475174.fe.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R3) : liste de tous les bugs corrigés dans 4D v20 R3.


#### Changements de comportement

- Certaines erreurs étaient "interceptables" par votre [méthode de gestion des erreurs](../Concepts/error-handling.md) en mode interprété uniquement. Une correction a été apportée, de sorte que les erreurs suivantes seront désormais également détectées en mode compilé : *Indice hors de la plage*, *Type incompatible*, et *Déréférencement d'un pointeur Null*. Cependant, pour de telles erreurs sur les processeurs Intel, la procédure est toujours interrompue comme auparavant, alors que sur les processeurs Apple Silicon, la procédure n'est interrompue que si vous appelez la commande [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) .
- 4D n'inclut plus d'interpréteur PHP interne. Vous devez [configurer et exécuter votre propre interpréteur PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) pour utiliser les commandes PHP.


## 4D v20 R2

Lisez [**Les nouveautés de 4D v20 R2**](https://blog.4d.com/fr-whats-new-in-4d-v20-R2/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v20 R2.

:::warning Note de sécurité

Si vos applications 4D utilisent des connexions TLS, il est recommandé de mettre à jour 4D en release 20 R2 HF1 build 100440 ou plus. Pour plus d'informations, reportez-vous à ce [bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Points forts

- Nouvelle classe [WebSocket](../API/WebSocketClass.md) pour créer et gérer des connexions WebSocket clientes depuis 4D.
- Nouveau [réglage de l'interface](../settings/client-server.md#network-layer) de la couche réseau QUIC.
- 4D View Pro : Prise en charge du format de fichier **.sjs** pour [l'importation](../ViewPro/method-list.md#vp-import-document) et [l'exportation](../ViewPro/method-list.md#vp-export-document) de documents.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20R3/4D/20-R3/Liste-des-nouveautes.901-6531224.fe.6364183.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R3/4D/20-R3/Liste-des-nouveautes.901-6475174.fe.6364183.html) sur doc.4d.com.
- Interface 4D Write Pro : Nouvel [assistant de tableau](../WritePro/writeprointerface.md).
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R2): liste de tous les bugs corrigés dans 4D v20 R2.


#### Changements de comportement

- **Attention** : La valeur de départ [`offset`](../API/FileHandleClass.md#offset) des objets [4D.FileHandle](../API/FileHandleClass.md) avait été incorrectement fixée à 1 au lieu de 0. Une correction a été apportée dans 4D à partir des versions **20.1 HF1** et **20 R2** et la valeur est maintenant 0.

## 4D v20.x

Lisez [**Les nouveautés de 4D v20**](https://blog.4d.com/fr-whats-new-in-4d-v20/), le billet de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v20.

:::caution Version minimale du client pour 4D Server v20.2 et supérieur

Pour des raisons internes, la version des clients distants se connectant à 4D Server v20.2 et plus doit être au moins 4D v20.2.

:::

:::warning Note de sécurité

Si vos applications 4D utilisent des connexions TLS, il est recommandé de mettre à jour 4D en release 20.2 LTS build 100956 ou plus. Pour plus d'informations, reportez-vous à ce [bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Avertissement concernant la reconstruction de l'index

4D v20 inclut une mise à jour de la bibliothèque ICU (voir ci-dessous) qui forcera une reconstruction automatique des index de type alpha, texte et objet. En fonction de la taille du fichier de données, cette opération peut prendre un certain temps et nécessiter une planification.

:::caution 4D v20.1 reconstruction de l'index et versions client/serveur

4D v20.1 comprend également une mise à jour de la bibliothèque ICU, ce qui a les conséquences suivantes :

- Elle forcera une reconstruction automatique des index de type alpha, texte et objet.
- Pour des raisons de cohérence des tris, il est nécessaire que les clients distants 4D et le serveur 4D utilisent la même version : seuls les clients distants 4D v20.1 peuvent se connecter au serveur 4D v20.1 et vice versa.

:::


#### Points forts

- 4D v20.2 est certifié sur macOS Sonoma (macOS 14).
- (4D v20.1) Nouvelle propriété `plugins` dans le paramètre *options* de la commande [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html) .
- 4D Server intègre automatiquement plusieurs journaux : [Restauration automatique](../Backup/settings.md#automatic-restore).
- [Classe IMAP Transporter](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) renvoie *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) renvoie *id*, *flags* et *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) et [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) supportent les mots-clés personnalisés.
- Nouvelles classes [WebSocketServer](../API/WebSocketServerClass.md) et [WebSocketConnection](../API/WebSocketConnectionClass.md) pour créer et gérer des connexions WebSocket à partir de 4D.
- Prise en charge du mot-clé [`property`](../Concepts/classes.md#property) dans les définitions des classes d'utilisateurs.
- Nouvelles fonctions pour verrouiller/déverrouiller le datastore : [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Nouvelle fonction [`.at()`](../API/EntitySelectionClass.md#at) dans la classe Entity selection.
- Nouvelles fonctions dans la classe Collection : [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Éditeur de code : amélioration des [fonctionnalités de recherche et de remplacement](../code-editor/write-class-method.md#find-and-replace).
- Nouvel élément linguistique "property" recherchable dans la boîte de dialogue [**Find in design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726).
- Pour simplifier le code, certains opérateurs de comparaison peuvent désormais être utilisés avec des [valeurs Undefined](../Concepts/dt_null_undefined.md#undefined-operators) sans générer d'erreurs.
- Prise en charge du paramètre *headerOnly* dans [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Prise en charge de l'option `count values` dans les fonctions [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) et [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nouvelle fonction [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Prise en charge de l'option `count values` dans les fonctions [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) et [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Les logs des requêtes ORDA sont maintenant disponibles [sur le serveur](../Debugging/debugLogFiles.md#orda-requests), nouveau paramètre pour la fonction [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nouveaux outils pour l'exécution de code en CLI : [tool4d](../Admin/cli.md#tool4d) et [4D Server en mode utilitaire](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): nouveau bouton et affichage dans une fenêtre 4D.
- Nouvelles propriétés pour les boutons, les cases à cocher et les boutons radio : [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) et [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Prise en charge de `WinIcon` dans la fonction [`file.setAppInfo()`](../API/FileClass.md#setappinfo) .
- Nouvelle option `validateTLSCertificate` pour [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) permettant de contrôler la validation automatique des certificats.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20/4D/20.2/Liste-des-nouveautes.901-6719903.fe.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20/4D/20/Liste-des-nouveautes.901-6229455.fe.html) sur doc.4d.com.
- Liste des bugs corrigés : [4D v20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D v20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).


#### Changements de comportement

- À partir de la version 20.2, 4D v20 LTS n'est plus compatible avec Windows Server 2012 R2.
- **Attention** : La valeur de départ [`offset`](../API/FileHandleClass.md#offset) des objets [4D.FileHandle](../API/FileHandleClass.md) avait été incorrectement fixée à 1 au lieu de 0. Une correction a été apportée dans 4D à partir des versions **20.1 HF1** et **20 R2** et la valeur est maintenant 0.
- Pour des raisons de conformité avec la RFC HTTP, la propriété [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) renvoie désormais tous les noms d'en-têtes **en minuscules**. Si vous souhaitez que votre code continue à fonctionner comme auparavant, utilisez la nouvelle propriété [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) .
- Les certificats TLS sont désormais automatiquement validés par 4D lors de l'envoi de requêtes HTTP avec [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new), et rejetés avec une erreur s'ils ne sont pas valides. Une nouvelle propriété *option* vous permet de contrôler cette validation.
- TLS v1.0 et TLS v1.1 sont obsolètes, ils ne sont plus pris en charge par `Min TLS version` sur 4D Server. La version 1.3 est désormais sélectionnée par défaut et est automatiquement utilisée si les constantes `_o_TLSv1_0` ou `_o_TLSv1_1` sont définies avec [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- Par souci de cohérence, tous les boutons, cases à cocher et boutons radio sont désormais rendus avec un type "3D" au moment de l'exécution : respectivement `Object type 3D button`, `Object type 3D checkbox`, et `Object type 3D radio button` sont renvoyés par [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) pour ces objets.
- Depuis 4D v20, [4D for Mobile](https://developer.4d.com/go-mobile/) n'est plus installé par défaut dans l'environnement 4D. Pour bénéficier des fonctionnalités de développement de 4D for Mobile dans 4D, vous devez [installer le composant 4D Mobile App](https://developer.4d.com/go-mobile/docs/getting-started/installation) dans le dossier ["Components"](../Project/architecture.md#components) de vos projets. Si un projet converti utilise des fonctionnalités du composant [4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), veillez à l'installer également dans le dossier "Components" du projet.


## 4D v19 R8

Lisez [**Les nouveautés de 4D v19 R8**](https://blog.4d.com/fr-whats-new-in-4d-v19-r8/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v19 R8.


#### Points forts

- Des méthodes de gestion des erreurs peuvent être mises en place pour [les contextes d'exécution globaux et les contextes d'exécution des composants](../Concepts/error-handling.md#scope-and-components).
- Les listboxes avec des sources de données collections ou entity selection prennent en charge désormais la propriété de colonne [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) .
- ORDA : Prise en charge du fichier *roles.json* pour définir les [privilèges](../ORDA/privileges.md) attribués à la session avec [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Prise en charge du [mode SDI dans le mode test application](../Menus/sdi.md#sdi-mode-availability) sous Windows.
- 4D View Pro :
    - prise en charge des thèmes dans les tables : nouvelles commandes [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) et [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme) , prise en charge des options de thème dans [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)
    - nouvelle commande [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows)
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) on doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19_R8): liste de tous les bugs qui ont été corrigés dans 4D v19 R8.


#### Changements de comportement

- Pour des raisons de conformité avec la RFC HTTP, la propriété [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) renvoie désormais tous les noms d'en-têtes **en minuscules**. Si vous souhaitez que votre code continue à fonctionner comme auparavant, utilisez la nouvelle propriété [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) .
- Lorsqu'une action standard est attribuée à un [bouton bevel avec un menu contextuel lié](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu), l'action standard n'est plus générée si une option de menu contextuel est sélectionnée.
- Dans les zones Web utilisant blink (CEF), les dialogues affichés à partir de scripts externes sont désormais bloquants s'ils ne sont pas appelés à partir d'une fonction JS `setTimeout()` . Cela est dû aux mises à jour actuelles du CEF, dans lesquelles les dialogues affichés par des fonctions telles que `alert()` ou `print()` ne sont plus gérés par le système d'exploitation mais par la zone Web. Voir [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) et [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D v19 R7

Lisez [**Les nouveautés de 4D v19 R7**](https://blog.4d.com/fr-whats-new-in-4d-v19-r7/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v19 R7.


#### Points forts

- Les données liées et les attributs calculés/alias peuvent être affichés dans l'explorateur de données [](../Admin/dataExplorer#basics).
- Nouvelle classe [FileHandle](../API/FileHandleClass.md) et nouvelle fonction [`.open()`](../API/FileClass.md#open) dans la classe `File` .
- [Classe Entity selection](../API/EntitySelectionClass.md) : [`.add()`](../API/EntitySelectionClass.md#add) prend en charge un paramètre *entitySelection* , [`.minus()`](../API/EntitySelectionClass.md#minus) prend en charge un paramètre *keepOrder* .
- Prise en charge des options *automaticRedirections* et *decodeData* dans [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Nouveau fichier journal [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro : nouvelles commandes de table [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Les espaces de noms des composants sont maintenant [affichés dans l'explorateur](../Extensions/develop-components.md#declaring-the-component-namespace).
- Les objets de type zone de texte et formulaire d'entrée prennent désormais en charge la propriété [corner radius](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) on doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19_R7): liste de tous les bugs qui ont été corrigés dans 4D v19 R7.


#### Changements de comportement

- Pour des raisons de cohérence avec les interfaces standard (par exemple, les explorateurs de fichiers des OS), les règles des list box pour la sélection des lignes/le glisser-déposer ont été modifiées. Une sélection continue ou discontinue de lignes peut être glissée en cliquant simplement sur une ligne sélectionnée et en la déplaçant ; la touche **Alt** n'est plus nécessaire (mais peut toujours être utilisée comme dans les versions précédentes). Lorsque la touche **Maj** ou **Ctrl/Commande** est enfoncée, un clic de souris est pris en compte lorsque le clic est vers le bas. Pour plus d'informations sur le glisser-déposer dans les list box, vous pouvez consulter [ce billet de blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) et télécharger [ce projet HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numérotation interne de 4D a été modifiée à partir de 4D v19 R7 :
    - Les versions jusqu'à 4D v19 R6 (incluses) sont numérotées 282xxx,
    - Les versions à partir de 4D v19 R7 seront numérotées 100xxx.   
      Notez qu'une version spécifique de 4D est toujours identifiée de manière unique par un nom de branche et un numéro de build. Le numéro de build augmente par ordre chronologique.
- La possibilité d'utiliser le protocole REST de Wakanda/4D Mobile pour appeler une méthode de projet a été supprimée. Vous pouvez utiliser les [fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md) ou les [urls /4DACTION](../WebServer/httpRequests.md#4daction) à la place.


## 4D v19 R6

- New [HTTPRequest](../API/HTTPRequestClass.md) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) and [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer.md#basics).
- To help us make our products always better, we now automatically collect data regarding usage statistics on running 4D Server applications. This will have no impact on performance. See the new page explaining [why and how 4D collects data](../Admin/data-collect.md).
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D v19 R6 or higher to be used with this release.




## 4D v19 R5

- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building.md#deselecting-modules) in your built applications.
- The *MeCab* library is included by default in all 4D applications on macOS. In previous releases, this library, specifically designed to manage Japanese text, was only available in the Japanese version of 4D on macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building.md#deselecting-modules).
- [Client/Server optimization](../ORDA/remoteDatastores.md#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) for more information.

   > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.
- [DataClass class](../API/DataClassClass.md): The new [.getCount()](../API/DataClassClass.md#getcount) function returns the number of entities in a dataclass.
- The *4DDiagnosticLog.txt* file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). You can now select the information level to record (for example DEBUG level information) using the `Diagnostic log level` selector of the `SET DATABASE PARAMETER` command or the log configuration file.
- Calling `Use()` on a non-shared object or a non-shared collection does nothing (it no longer generates an error). Thus, it is now useless to test if the object or collection passed to Use() is actually shared.
- For clarification purposes, two SQL commands have been prefixed: `GET DATA SOURCE LIST` has been renamed to `SQL GET DATA SOURCE LIST`, `Get current data source` has been renamed to `SQL Get current data source`.
- **4D View Pro**:
    - The new [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.
    - (Windows only) 4D View Pro areas now use a new print settings window.
- **Web areas**:
    + New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. This impacts the following features:
        * The `WA Create URL history menu` and `WA GET URL HISTORY` commands only return the current URL.
        - The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
        - Drag and drop features are handled by a Windows API which is tagged "experimental" by Microsoft. Consequently, web areas may not work as expected when this API is not installed: Drag and drop may seem allowed even when the `WA enable URL drop` preference has been set to False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
    - (Windows only) When the user selects **Print...** from a web area using the embedded web rendering engine, a new print settings window is now displayed.
    - To reflect their actual effect in web areas (increase or decrease page zoom level), two commands have been renamed: `WA SET PAGE TEXT LARGER` has been renamed `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` has been renamed `WA ZOOM OUT`.
    - Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
        - CORS policies now apply when accessing files on disk in web areas. For example, when opening a .html file with `WA OPEN URL`, that .html file cannot contain links that point to files outside its folder
        - Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). To allow a drop action, you need to execute additional code in the object method of the web area:

```4d
WA OPEN URL(* ; "WebArea";WA Get last filtered URL(* ; "WebArea"))

```



## 4D v19 R4

- [Alias attributes](../ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.
- Prise en charge des instructions [break et continue](../Concepts/flow-control.md#break-and-continue) dans les boucles.
- Prise en charge de l'instruction [return](../Concepts/flow-control.md#return-expression) et de l'expression [return](../Concepts/parameters.md#return-expression) pour renvoyer des valeurs.
- Support for [compound assignment operators](../Concepts/operators.md#compound-assignment-operators), [short-circuit operators](../Concepts/operators.md#short-circuit-operators), and [ternary operator](../Concepts/operators.md#ternary-operator)
- L'[éditeur de code](../code-editor/overview.md) comprend désormais un outil déroulant et prend en charge les marqueurs pour une meilleure navigation dans le code.
- New Preferences: [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/$lock.md) entities.
- [4D View Pro](../ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass.md).
- The `Alias selection` constant has been renamed `Allow alias files` to resolve a conflict resulting from the support of alias attributes in ORDA.
- For better compliance with ORDA specifications, the *Map NULL values to blank values* field property is now unchecked by default in databases created with 4D v19 R4 and higher. You can also enable this default behavior in your databases converted from previous versions by selecting the Map NULL values to blank values unchecked by default at field creation compatibility setting. Working with Null values is now recommended since they are fully supported by ORDA.
- Because of the support of the [ternary operator](../Concepts/operators.md#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. If your database/project contains identifiers with colons, you must replace them before converting it to v19 R4 or higher, otherwise errors may occur in your code. For example, if you have a variable named *a:b*, it could be interpreted as ternary operator syntax:

```4d
$value:=($size>1000)? a:b // Ici, "a:b" est considéré comme un opérateur ternaire.
```



## 4D v19 R3

- [Computed properties](../Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses.md#function-query-attributename) and [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- [ZIP archives](../API/ZipArchiveClass.md#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](../Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters.md#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. For example, the following code no longer provokes an error:

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
Pour plus d'informations, veuillez vous référer à [ce billet de blog](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). Pour bénéficier de cette simplification globale, vous devez recompiler à la fois les méthodes appelantes et les méthodes appelées ; les composants doivent donc être recompilés.
- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions.md#preemptive-mode).
- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.
- 4D v19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. This new algorithm is automatically used when a password is changed using the Tool Box, the `CHANGE PASSWORD` command, or the `Set user properties` command. Once a password is modified, opening the database with a version prior to 4D v19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D v19 R3 or later.
- For accuracy, the `4D digest` constant has been renamed `4D REST digest`.

- End-of-line and BOM management for XML commands: When opened in 4D v19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. This allows a better compatibility with VCS tools. If necessary, you can restore the v19 R2 behavior using the `XML SET OPTIONS` command. In projects or databases converted from versions prior to 19 R2, these options are managed by two compatibility settings.
- Runtime Explorer shortcut removed in built projects: The **Cmd/Ctrl+Shift+F9** shortcut does no longer display the Runtime Explorer window in single-user merged project applications. This shortcut can now be a user application shortcut. You can call the Runtime Explorer window using the new `OPEN RUNTIME EXPLORER` command.
- Extended debugging capabilities with 4D Server: In interpreted mode, 4D Server can now debug all kinds of processes, including scalable web sessions. This is available when the debugger is attached to the server or to a remote client.   
  *Warning: In interpreted mode, in order to make extented debugging available on the server machine, all server processes are now automatically executed in cooperative mode when the debugger is attached to the server (default setting). This can have a significant impact on the performance of your converted applications when they run with 4D Server v19 R3 and higher. To restore preemptive execution on the server in this case, all you need to do is detach the debugger from the server (and attach it to a remote client if necessary).*
- On Windows, 4D projects and databases created with 4D v19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. This API improves text rendering, especially in high DPI configurations. DirectWrite is used for text rendering with static and input text, checkboxes, buttons, and radio buttons. Note that listboxes already use DirectWrite. A compatibility option allows you to enable DirectWrite in projects and databases created with previous 4D versions.
- If you use components compiled with 4D v19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D v19 R3 to provide compatibility with 4D v19 R3 and future releases. If a component is not compiled for Silicon, there is no need to recompile.








## 4D v19 R2

- A [default .gitignore file](../Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass.md) to handle new [`4D.Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass.md#settext)


## Previous releases

<details><summary>Cliquez pour voir les notes de mise à jour des versions précédentes</summary>

### 4D v19

:::warning Note de sécurité

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v19.7 LTS build 288986 or higher. Pour plus d'informations, reportez-vous à ce [bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Prise en charge des couleurs dark et light pour les [formulaires](../FormEditor/properties_FormProperties.md#color-scheme) et les [feuilles de style](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- La propriété [Calcul de variable](../FormObjects/properties_Object.md#variable-calculation) est désormais prise en charge par les colonnes des listbox entity selection.
- New, comprehensive [CLI](../Admin/cli.md) page.



### 4D v18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin.md) web server component
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](../WebServer/sessions.md) and [their API](../API/SessionClass.md).


</details>


## Library table



| Bibliothèque | Version courante | Mise à jour dans 4D | Commentaire                                                                                                   |
| ------------ | ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| ICU          | 73.2             | 20.1                | Cette mise à jour majeure entraîne une reconstruction automatique des index alphanumériques, texte et objets. |
| CEF          | 118              | 20 R3               | Chromium 5993                                                                                                 |
| Hunspell     | 1.7.2            | 20                  | Utilisé pour la vérification orthographique dans les formulaires 4D et 4D Write Pro                           |
| PDFWriter    | 4.3              | 20                  | FreeType dependency dans 12.2.1                                                                               |
| SpreadJS     | 16.0.4           | 20                  | Moteur 4D View Pro                                                                                            |
| OpenSSL      | 3.1.1            | 20                  |                                                                                                               |
| libZip       | 1.9.2            | 20                  | Utilisé par les classes zip, 4D Write Pro, les composants svg et serverNet                                    |
| LZMA         | 5.4.1            | 20                  |                                                                                                               |
| Zlib         | 1.2.13           | 20                  |                                                                                                               |
| webKit       | WKWebView        | 19                  |                                                                                                               |
| PHP          | 8.2.4            | 20                  |                                                                                                               |
| libldap      | 2.6.4            | 20 R3               |                                                                                                               |
| libsasl      | 2.1.28           | 20                  |                                                                                                               |

