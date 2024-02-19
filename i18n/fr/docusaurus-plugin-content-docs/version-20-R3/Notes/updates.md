---
id: updates
title: Release Notes
---


## 4D v20 R3

Lisez [**Les nouveautés de 4D v20 R3**](https://blog.4d.com/fr-whats-new-in-4d-v20-R3/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v20 R3.


#### Points forts

- Nouvelle fonction [`collection.multiSort`](../API/CollectionClass.md#multisort) .
- Prise en charge du paramètre *context* dans [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Prise en charge de la propriété `headers` dans le paramètre *connectionHandler* de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Marqueur global de modification](../ORDA/global-stamp.md) pour faciliter la mise en œuvre des modules de synchronisation des données. New functions: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) and [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Prise en charge de [l'initialisation de la valeur et du type de la variable dans la ligne de déclaration](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Les paramètres du fichier journal sont désormais [sauvegardés avec le fichier de données courant](../Backup/settings.md#log-file-management)
- Nouvelle syntaxe pour [déclarer un nombre variable de paramètres](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro : Prise en charge de l'[importation](../ViewPro/method-list.md#vp-import-from-blob) et de l'[exportation](../ViewPro/method-list.md#vp-export-to-blob) de documents 4D View Pro au format Blob.
- Commandes du langage 4D : [page What's news](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) sur doc.4d.com.
- 4D Write Pro: [page What's new](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R3): Liste de tous les bugs corrigés dans 4D v20 R3.


#### Changements de comportement

- Some errors were catchable by your [error handling method](../Concepts/error-handling.md) in interpreted mode only. A fix has been done, so that the following errors will now be caught also in compiled mode: *Indice out of range*, *Type incompatible*, and *Dereferencing a Null pointer*. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D n'inclut plus d'interpréteur PHP interne. Vous devez [configurer et exécuter votre propre interpréteur PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) pour utiliser les commandes PHP.


## 4D v20 R2

Lisez [**Les nouveautés de 4D v20 R2**](https://blog.4d.com/fr-whats-new-in-4d-v20-R2/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v20 R2.

:::warning Security Note

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v20 R2 HF1 build 100440 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Points forts

- Nouvelle classe [WebSocket](../API/WebSocketClass.md) pour créer et gérer des connexions WebSocket clientes depuis 4D.
- Nouveaux [réglages d'interface](../settings/client-server.md#network-layer) pour la couche réseau QUIC.
- 4D View Pro : Prise en charge du format de fichier **.sjs** pour [l'importation](../ViewPro/method-list.md#vp-import-document) et [l'exportation](../ViewPro/method-list.md#vp-export-document) de documents.
- 4D Langage : [Liste des nouveautés](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20R2/4D/20-R2/Liste-des-nouveautes.901-6390313.fe.html) sur doc.4d.com.
- 4D Write Pro Interface : Nouvel [assistant de tableau](../WritePro/writeprointerface.md).
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=20_R2): liste de tous les bugs corrigés dans 4D v20 R2.


#### Changements de comportement

- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.

## 4D v20.x

Lisez [**Les nouveautés de 4D v20**](https://blog.4d.com/fr-whats-new-in-4d-v20/), le billet de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v20.

:::caution Minimal client version for 4D Server v20.2 and later

For internal reasons, the version of remote clients connecting to 4D Server v20.2 and later must be at least 4D v20.2.

:::

:::warning Security Note

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v20.2 LTS build 100956 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Avertissement concernant la reconstruction de l'index

4D v20 inclut une mise à jour de la bibliothèque ICU (voir ci-dessous) qui forcera une reconstruction automatique des index de type alpha, texte et objet. En fonction de la taille du fichier de données, cette opération peut prendre un certain temps et nécessiter une planification.

:::caution 4D v20.1 reconstruction de l'index et versions client/serveur

4D v20.1 comprend également une mise à jour de la bibliothèque ICU, ce qui a les conséquences suivantes :

- Elle forcera une reconstruction automatique des index de type alpha, texte et objet.
- Pour des raisons de cohérence des tris, il est nécessaire que les clients distants 4D et le serveur 4D utilisent la même version : seuls les clients distants 4D v20.1 peuvent se connecter au serveur 4D v20.1 et vice versa.

:::


#### Points forts

- 4D v20.2 is certified on macOS Sonoma (macOS 14).
- (4D v20.1) Nouvelle propriété `plugins` dans le paramètre *options* de la commande [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html) .
- 4D Server intègre automatiquement plusieurs journaux : [Restauration automatique](../Backup/settings.md#automatic-restore).
- [Classe IMAP Transporter](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) renvoie *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) renvoie *id*, *flags* et *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) et [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) supportent les mots-clés personnalisés.
- Nouvelles classes [WebSocketServer](../API/WebSocketServerClass.md) et [WebSocketConnection](../API/WebSocketConnectionClass.md) pour créer et gérer des connexions WebSocket à partir de 4D.
- Prise en charge du mot-clé [`property`](../Concepts/classes.md#property) dans les définitions des classes d'utilisateurs.
- Nouvelles fonctions pour verrouiller/déverrouiller le datastore : [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Nouvelle fonction [`.at()`](../API/EntitySelectionClass.md#at) dans la classe Entity selection.
- Nouvelles fonctions dans la classe Collection : [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Éditeur de code : [Fonctionnalités de recherche et de remplacement](../code-editor/write-class-method.md#find-and-replace) améliorées.
- Nouvel élément de langage "property" cherchable dans la boîte de dialogue [**Recherche dans le développement...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) .
- Pour simplifier le code, certains opérateurs de comparaison peuvent désormais être utilisés avec des [valeurs Undefined](../Concepts/dt_null_undefined.md#undefined-operators) sans générer d'erreurs.
- Prise en charge du paramètre *headerOnly* dans [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Prise en charge de l'option `count values` dans les fonctions [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) et [`collection.distinct()`](../API/CollectionClass.md#distinct) .
- Nouvelle fonction [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths) .
- Prise en charge de l'option `count values` dans les fonctions [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) et [`collection.distinct()`](../API/CollectionClass.md#distinct) .
- Les logs des requêtes ORDA sont maintenant disponibles [sur le serveur](../Debugging/debugLogFiles.md#orda-requests), nouveau paramètre pour la fonction [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nouveaux outils pour l'exécution de code en CLI : [tool4d](../Admin/cli.md#tool4d) et [4D Server en mode utilitaire](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): nouveau bouton et affichage dans une fenêtre 4D.
- Nouvelles propriétés pour les boutons, les cases à cocher et les boutons radio : [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) et [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Prise en charge de `WinIcon` dans la fonction [`file.setAppInfo()`](../API/FileClass.md#setappinfo) .
- Nouvelle option `validateTLSCertificate` pour [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) permettant de contrôler la validation automatique des certificats.
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv20/4D/20/Liste-des-nouveautes.901-6237190.fe.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv20/4D/20/Liste-des-nouveautes.901-6229455.fe.html) sur doc.4d.com.
- Liste des bugs corrigés : [4D v20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D v20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).


#### Changements de comportement

- As of v20.2, 4D v20 LTS is no longer compatible with Windows Server 2012 R2.
- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.
- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) property.
- TLS certificates are now automatically validated by 4D when sending HTTP requests with [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new), and rejected with an error if they are invalid. A new *option* property allows you to control this validation.
- TLS v1.0 and TLS v1.1 are deprecated, they are no longer supported as `Min TLS version` on 4D Server. Version 1.3 is now selected by default and is automatically used if `_o_TLSv1_0` or `_o_TLSv1_1` constants are set with [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- As of 4D v20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. If a converted project uses features from the [4D Mobile App Server component](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), make sure you also install it in the "Components" folder of the project.


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
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19_R8): liste de tous les bugs qui ont été corrigés dans 4D v19 R8.


#### Changements de comportement

- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) property.
- Lorsqu'une action standard est attribuée à un [bouton bevel avec un menu contextuel lié](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) , l'action standard n'est plus générée si une option de menu contextuel est sélectionnée.
- Dans les zones Web utilisant blink (CEF), les dialogues affichés à partir de scripts externes sont désormais bloquants s'ils ne sont pas appelés à partir d'une fonction JS `setTimeout()` . Cela est dû aux mises à jour actuelles du CEF, dans lesquelles les dialogues affichés par des fonctions telles que `alert()` ou `print()` ne sont plus gérés par le système d'exploitation mais par la zone Web. Voir [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) et [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D v19 R7

Lisez [**Les nouveautés de 4D v19 R7**](https://blog.4d.com/fr-whats-new-in-4d-v19-r7/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D v19 R7.


#### Points forts

- Les données liées et les attributs calculés/alias peuvent être affichés dans l'explorateur de données [](../Admin/dataExplorer#basics).
- Nouvelle classe [FileHandle](../API/FileHandleClass.md) et nouvelle fonction [`.open()`](../API/FileClass.md#open) dans la classe `File` .
- [Classe Entity selection](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) prend en charge un paramètre *entitySelection* , [`.minus()`](../API/EntitySelectionClass.md#minus) prend en charge un paramètre *keepOrder* .
- Support of *automaticRedirections* and *decodeData* options in [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- New [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog) log file.
- 4D View Pro : nouvelles commandes de table [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Les espaces de noms des composants sont désormais [affichés dans l'explorateur](../Extensions/develop-components.md#declaring-the-component-namespace).
- Les objets de formulaire Text area et Input prennent désormais en charge la propriété [corner radius](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Commandes du langage 4D : [Liste des nouveautés](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) sur doc.4d.com.
- 4D Write Pro : [Liste des nouveautés](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) sur doc.4d.com.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19_R7): liste de tous les bugs qui ont été corrigés dans 4D v19 R7.


#### Changements de comportement

- Pour des raisons de cohérence avec les interfaces standard (par exemple, les explorateurs de fichiers OS), les règles de la boîte à liste pour la sélection des lignes/le glisser-déposer ont été modifiées. Une sélection continue ou discontinue de lignes peut être glissée en cliquant simplement sur une ligne sélectionnée et en la déplaçant ; la touche **Alt** n'est plus nécessaire (mais peut toujours être utilisée comme dans les versions précédentes). Lorsque la touche **Maj** ou **Ctrl/Commande** est enfoncée, un clic de souris est pris en compte lorsque le clic est vers le bas. Pour plus d'informations sur le glisser-déposer dans les zones de liste, vous pouvez consulter [ce billet de blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) et télécharger [ce projet HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numérotation interne de 4D a été modifiée à partir de 4D v19 R7 :
    - Les versions jusqu'à 4D v19 R6 (incluses) sont numérotées 282xxx,
    - Les versions à partir de 4D v19 R7 seront numérotées 100xxx.   
      Notez qu'une version spécifique de 4D est toujours identifiée de manière unique par un nom de branche et un numéro de build. Le numéro de build augmente par ordre chronologique.
- La possibilité d'utiliser le protocole REST de Wakanda/4D Mobile pour appeler une méthode de projet a été supprimée. Vous pouvez utiliser les [fonctions de classe du data model ORDA](../REST/ClassFunctions.md) ou les [/4DACTION urls](../WebServer/httpRequests.md#4daction) à la place.


## 4D v19 R6

- Nouvelle classe [HTTPRequest](../API/HTTPRequestClass.md) .
- Les fonctions de collection qui peuvent appeler du code prennent désormais en charge les objets fonction en tant que paramètre *formula* : [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro : nouvelles commandes [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) et [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) pour gérer les tables dans les feuilles.
- Possibilité de voir les attributs liés, calculés et alias dans le [data explorer web](../Admin/dataExplorer.md#basics).
- Pour nous aider à améliorer nos produits, nous collectons désormais automatiquement des données concernant les statistiques d'utilisation des applications 4D Server en cours d'exécution. Cela n'aura aucun impact sur les performances. Voir la nouvelle page expliquant [pourquoi et comment 4D collecte des données](../Admin/data-collect.md).
- Composants compilés pour Silicon : Sur les plateformes macOS Silicon (Apple ARM CPUs), les composants doivent être recompilés avec 4D v19 R6 ou plus pour être utilisés avec cette version.




## 4D v19 R5

- Le fichier [directory.json](Users/editing#directoryjson-file) du projet peut désormais être [intégré dans le serveur](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) au moment du build, ce qui vous permet de déployer une application client/serveur avec une configuration de sécurité de base pour les utilisateurs et les groupes.
- Vous pouvez désormais [désélectionner les modules inutiles](../Desktop/building.md#deselecting-modules) dans les applications que vous avez créées.
- La bibliothèque *MeCab* est incluse par défaut dans toutes les applications 4D sur macOS. Dans les versions précédentes, cette bibliothèque, spécialement conçue pour gérer le texte japonais, n'était disponible que dans la version japonaise de 4D sur macOS. Si vous n'avez pas besoin de cette bibliothèque dans vos applications finales, vous pouvez maintenant [la désélectionner](../Desktop/building.md#deselecting-modules).
- [Optimisation client/serveur](../ORDA/remoteDatastores.md#clientserver-optimization): De nouvelles fonctions de classe permettent de gérer le cache ORDA et le contenu d'un contexte d'optimisation. Voir [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) et [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) pour plus d'informations.

   > Ces fonctions sont destinées aux développeurs qui ont besoin de personnaliser les fonctions par défaut d'ORDA pour des configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de les utiliser.
- [Classe DataClass](../API/DataClassClass.md): La nouvelle fonction [.getCount()](../API/DataClassClass.md#getcount) renvoie le nombre d'entités dans une classe de données.
- Le fichier *4DDiagnosticLog.txt* n'enregistre par défaut que des informations de haut niveau ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt)). Vous pouvez maintenant sélectionner le niveau d'information à enregistrer (par exemple les informations du niveau DEBUG) en utilisant le sélecteur `Diagnostic log level` de la commande `SET DATABASE PARAMETER` ou le fichier de configuration du journal.
- L'appel à `Use()` sur un objet non partagé ou une collection non partagée ne fait rien (il ne génère plus d'erreur). Ainsi, il est désormais inutile de tester si l'objet ou la collection passé(e) à Use() est effectivement partagé(e).
- Pour plus de clarté, deux commandes SQL ont été préfixées : `GET DATA SOURCE LIST` a été renommée en `SQL GET DATA SOURCE LIST`, `Get current data source` a été renommée en `SQL Get current data source`.
- **4D View Pro**:
    - Les nouvelles commandes [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) vous permettent de créer des contextes de données et de lier leur contenu aux cellules de la feuille.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) et [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) acceptent désormais la nouvelle option `includeBindingSource` qui exporte le contenu d'un contexte de données sous forme de valeurs de cellules.
    - (Windows uniquement) Les zones de 4D View Pro utilisent désormais une nouvelle fenêtre de paramètres d'impression.
- **Zones web**:
    + Nouveau moteur de rendu du système Windows : Les zones Web utilisant le [moteur de rendu du système Windows](../FormObjects/webArea_overview.md#web-rendering-engine) sont désormais basées sur **Microsoft Edge WebView2**. Cela a un impact sur les caractéristiques suivantes :
        * Les commandes `WA Create URL history menu` et `WA GET URL HISTORY` ne renvoient que l'URL en cours.
        - La variable [Progression](../FormObjects/properties_WebArea.md#progression) n'est plus mise à jour.
        - Les fonctions de glisser-déposer sont gérées par une API Windows qualifiée d'"expérimentale" par Microsoft. Par conséquent, les zones web peuvent ne pas fonctionner comme prévu lorsque cette API n'est pas installée : le glisser-déposer peut sembler autorisé même si la préférence `WA enable URL drop` a été réglée sur False. Cependant, l'action de dépôt est bloquée par défaut et vous pouvez contrôler les URL autorisées à l'aide de l'événement [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) (voir ci-dessous).
    - (Windows uniquement) Lorsque l'utilisateur sélectionne **Print...** à partir d'une zone Web utilisant le moteur de rendu Web intégré, une nouvelle fenêtre de paramètres d'impression s'affiche.
    - Pour refléter leur effet réel dans les zones web (augmentation ou diminution du niveau de zoom de la page), deux commandes ont été renommées : `WA SET PAGE TEXT LARGER` a été renommé `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` a été renommé `WA ZOOM OUT`.
    - Sécurité renforcée dans les zones web qui utilisent le [moteur de rendu web intégré](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) ou le [moteur de rendu du système Windows](../FormObjects/webArea_overview.md#web-rendering-engine) (basé sur Microsoft Edge WebView2) :
        - Les règles CORS s'appliquent désormais à l'accès aux fichiers sur disque dans les espaces web. Par exemple, lors de l'ouverture d'un fichier .html avec `WA OPEN URL`, ce fichier .html ne peut pas contenir de liens pointant vers des fichiers situés en dehors de son dossier
        - Le dépôt de contenus externes dans les zones web est désormais toujours bloqué et déclenche l'événement [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) lorsque la préférence `WA enable URL drop` est définie sur True (lorsqu'elle est définie sur False, la préférence `WA enable URL drop` ne modifie que l'icône du curseur de dépôt et filtre l'événement `On Window Opening Denied`). Pour permettre une action de dépôt, vous devez exécuter un code supplémentaire dans la méthode objet de la zone web :

```4d
WA OPEN URL(* ; "WebArea";WA Get last filtered URL(* ; "WebArea"))

```



## 4D v19 R4

- Les [attributs alias](../ORDA/ordaClasses.md#alias-attributes-1) sont disponibles dans les classes ORDA.
- Prise en charge des instructions [break et continue](../Concepts/flow-control.md#break-and-continue) dans les boucles.
- Prise en charge de l'instruction [return](../Concepts/flow-control.md#return-expression) et de l'expression [return](../Concepts/parameters.md#return-expression) pour renvoyer des valeurs.
- Prise en charge des [opérateurs d'assignation composés](../Concepts/operators.md#compound-assignment-operators), [opérateurs de court-circuit](../Concepts/operators.md#short-circuit-operators), et [opérateur ternaire](../Concepts/operators.md#ternary-operator)
- L'[éditeur de code](../code-editor/overview.md) comprend désormais un outil déroulant et prend en charge les marqueurs pour une meilleure navigation dans le code.
- Nouvelles préférences : [**Inclure les tokens dans les fichiers source du projet**](../Preferences/general.md#include-tokens-in-project-source-files) et [**Afficher les presse-papiers**](../Preferences/methods.md#show-clipboards) dans la page Méthodes.
- New REST request to [lock/unlock](../REST/$lock.md) entities.
- Un [chapitre 4D View Pro](../ViewPro/getting-started.md) a été ajouté avec de nouvelles commandes : [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- Nouvelle classe [SystemWorker](../API/SystemWorkerClass.md).
- La constante `Alias selection` a été renommée `Allow alias files` pour résoudre un conflit résultant de la prise en charge des attributs d'alias dans ORDA.
- Pour une meilleure conformité avec les spécifications ORDA, la propriété de champ *Mapper les valeurs NULL en valeurs vides* est désormais décochée par défaut dans les bases de données créées avec 4D v19 R4 et plus. Vous pouvez également activer ce comportement par défaut dans vos bases de données converties à partir de versions antérieures en sélectionnant le paramètre de compatibilité Mapper les valeurs NULL en valeurs vides non coché par défaut lors de la création des champs. Il est désormais recommandé de travailler avec des valeurs nulles, car elles sont entièrement prises en charge par ORDA.
- En raison de la prise en charge de l'[opérateur ternaire](../Concepts/operators.md#ternary-operator), les deux points " :" ne sont plus autorisés dans les noms de variables, de champs, de constantes, de fonctions, de plugins et de méthodes de projet. Si votre base de données/projet contient des identifiants avec des deux-points, vous devez les remplacer avant de la convertir à la v19 R4 ou à une version plus récente, sinon des erreurs peuvent se produire dans votre code. Par exemple, si vous avez une variable nommée *a:b*, elle peut être interprétée comme une syntaxe d'opérateur ternaire :

```4d
$value:=($size>1000)? a:b // Ici, "a:b" est considéré comme un opérateur ternaire.
```



## 4D v19 R3

- Les [propriétés calculées](../Concepts/classes.md#function-get-and-function-set) sont disponibles dans les classes.
- Les [attributs calculés](../ORDA/ordaClasses.md#computed-attributes) sont disponibles dans les classes ORDA. Elles sont similaires aux propriétés calculées mais prennent également en charge les fonctions [query](../ORDA/ordaClasses.md#function-query-attributename) et [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) .
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- Les [archives ZIP](../API/ZipArchiveClass.md#zip-create-archive) prennent désormais en charge les algorithmes de compression *LZMA* et *xz* .
- Une nouvelle [option de build](../Desktop/building.md#allow-connection-of-silicon-mac-clients) permet d'inclure plus facilement les clients Silicon Mac dans les applications serveur sous Windows.
- Prise en charge étendue du [mode sombre](../Preferences/general.md#appearance-macos-only) sur macOS.
- Prise en charge de **OAuth2 token object** dans [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), et [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Les utilisateurs peuvent désormais charger un [fichier de configuration du journal](../Debugging/debugLogFiles.md#using-a-log-configuration-file) à l'aide d'un bouton dans la [fenêtre d'administration du serveur](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Le traitement des [paramètres optionnels](../Concepts/parameters.md#optional-parameters) est plus souple dans le langage 4D lorsqu'il s'agit d'accéder à des paramètres déclarés mais non passés. Par exemple, le code suivant ne provoque plus d'erreur :

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
- Le débogage des sessions du serveur web [est plus facile avec 4D Server](../WebServer/sessions.md#preemptive-mode).
- Le nouveau composant [4D NetKit](https://github.com/4d/4D-NetKit) vous permet de vous connecter à des API tierces telles que Microsoft Graph.
- 4D v19 R3 utilise un algorithme de hachage plus puissant pour les mots de passe des utilisateurs de 4D : Bcrypt. Ce nouvel algorithme est automatiquement utilisé lorsqu'un mot de passe est modifié à l'aide de la boîte à outils, de la commande `CHANGE PASSWORD` ou de la commande `Set user properties` . Une fois le mot de passe modifié, l'ouverture de la base de données avec une version antérieure à 4D v19 R3 entraînera un refus d'authentification pour ce compte. Si vous utilisez des mots de passe 4D, il est fortement recommandé de sauvegarder le fichier .4db (bases de données binaires) ou le fichier directory.json (projets) avant d'effectuer la mise à jour vers 4D v19 R3 ou une version ultérieure.
- Par souci d'exactitude, la constante `4D digest` a été renommée `4D REST digest`.

- Gestion des fins de ligne et des nomenclatures pour les commandes XML : Lorsqu'ils sont ouverts dans 4D v19 R3, les projets ou bases de données créé(e)s avec les versions précédentes se comportent différemment en ce qui concerne les caractères de fin de ligne par défaut et la gestion des BOM dans les documents XML : les caractères de saut de ligne (LF) sont utilisés à la place de CR (sur macOS), et les marques d'ordre d'octet (BOM) ne sont pas incluses. Cela permet une meilleure compatibilité avec les outils VCS. Si nécessaire, vous pouvez rétablir le comportement de la v19 R2 en utilisant la commande `XML SET OPTIONS` . Dans les projets ou les bases de données converti(e)s à partir de versions antérieures à 19 R2, ces options sont gérées par deux paramètres de compatibilité.
- Suppression du raccourci "Runtime Explorer" dans les projets générés : Le raccourci **Cmd/Ctrl+Shift+F9** n'affiche plus la fenêtre Runtime Explorer dans les applications de projets fusionnés mono-utilisateurs. Ce raccourci peut désormais être un raccourci d'application utilisateur. Vous pouvez appeler la fenêtre Runtime Explorer à l'aide de la nouvelle commande `OPEN RUNTIME EXPLORER`.
- Capacités de débogage étendues avec 4D Server : En mode interprété, 4D Server peut désormais déboguer tous les types de process, y compris les sessions web évolutives. Cette fonction est disponible lorsque le débogueur est attaché au serveur ou à un client distant.   
  *Attention : En mode interprété, afin de rendre le débogage étendu disponible sur la machine serveur, tous les process serveur sont maintenant automatiquement exécutés en mode coopératif lorsque le débogueur est attaché au serveur (paramètre par défaut). Cela peut avoir un impact significatif sur les performances de vos applications converties lorsqu'elles fonctionnent avec 4D Server v19 R3 et plus. Pour rétablir l'exécution préemptive sur le serveur dans ce cas, il suffit de détacher le débogueur du serveur (et de l'attacher à un client distant si nécessaire).*
- Sous Windows, les projets et les bases de données créés avec 4D v19 R3 et les versions ultérieures utilisent l'API [DirectWrite](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) dans les formulaires. Cette API améliore le rendu du texte, en particulier dans les configurations à DPI élevé. DirectWrite est utilisé pour le rendu de textes statiques et de textes saisis, de cases à cocher, de boutons et de boutons radio. Notez que les listbox utilisent déjà DirectWrite. Une option de compatibilité vous permet d'activer DirectWrite dans les projets et les bases de données créés avec des versions antérieures de 4D.
- Si vous utilisez des composants compilés avec 4D v19.0 for Silicon (Apple ARM CPUs) qui appellent la commande `Count parameters` , nous vous recommandons de les recompiler avec 4D v19 R3 pour assurer la compatibilité avec 4D v19 R3 et les versions ultérieures. Si un composant n'est pas compilé pour Silicon, il n'est pas nécessaire de le recompiler.








## 4D v19 R2

- Un [fichier .gitignore par défaut](../Preferences/general#create-gitignore-file) peut être créé avec les nouveaux projets
- Nouvelle classe [Blob API](../API/BlobClass.md) pour gérer les nouveaux objets [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Prise en charge de `no-bom` et nouveaux caractères de fin de ligne par défaut dans [`.setText()`](../API/FileClass.md#settext)


## Versions précédentes

<details><summary>Cliquez pour voir les notes de mise à jour des versions précédentes</summary>

### 4D v19

:::warning Security Note

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v19.7 LTS build 288986 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [Classe IMAPTransporter](../API/IMAPTransporterClass.md): nouvelles fonctions `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, et `.unsubscribe()` .
- [Classe File](../API/FileClass.md) : nouvelles fonctions `setAppInfo()` et `getAppInfo()`.
- Nouvelle balise de transformation [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Serveur Web : nouveau paramètre [cookie de session SameSite](../WebServer/webServerConfig.md#session-cookie-samesite).
- Prise en charge des couleurs dark et light pour les [formulaires](../FormEditor/properties_FormProperties.md#color-scheme) et les [feuilles de style](../FormEditor/stylesheets#media-queries)
- Nouveaux thèmes dark et light par défaut dans les [préférences de l'éditeur de code](../Preferences/methods.md#theme-list).
- [Compilation native](../Project/compiler.md#compiler-methods-for) pour les processeurs Silicon.
- La propriété [Calcul de variable](../FormObjects/properties_Object.md#variable-calculation) est désormais prise en charge par les colonnes des listbox entity selection.
- Nouvelle page [CLI](../Admin/cli.md) complète.



### 4D v18 R6

- [Classe Entity Selection](../API/EntitySelectionClass.md): les fonctions `.average()`, `.max()` et `.min()` renvoient désormais *undefined* si l'entity selection est vide.
- Les propriétés [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) et [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` activent OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): nouvelles fonctions `.expunge()` et `.append()`
- Nouveau composant serveur web [WebAdmin](../Admin/webAdmin.md)
- Nouvelle interface [DataExplorer](../Admin/dataExplorer.md)
- Nouvelles [sessions d'utilisateurs web](../WebServer/sessions.md) et [leur API](../API/SessionClass.md).


</details>


## Tableau des bibliothèques



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

