---
id: updates
title: Mises à jour de la documentation
---

La liste des principales mises à jour de cette documentation. Pour des informations générales sur les nouvelles fonctionnalités des produits 4D, consultez les **"release notes"** sur [doc.4d.com](https://doc.4d.com).


## 4D v19 R7

- Related data and computed/alias attributes can be displayed in the [Data Explorer](Admin/dataExplorer.md#basics).
- New [FileHandle](API/FileHandleClass.md) class and new [`.open()`](API/FileClass.md#open) function in the `File` class.


## 4D v19 R6

- Nouvelle classe [HTTPRequest](API/HTTPRequestClass.md).
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](API/CollectionClass.md#every), [`.filter()`](API/CollectionClass.md#filter), [`.find()`](API/CollectionClass.md#find), [`.findIndex()`](API/CollectionClass.md#findindex), [`.map()`](API/CollectionClass.md#map), [`.orderByMethod()`](API/CollectionClass.md#orderbymethod), [`.reduce()`](API/CollectionClass.md#reduce), [`.some()`](API/CollectionClass.md#some), [`.sort()`](API/CollectionClass.md#sort)
- Listbox cells support [horizontal](FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](ViewPro/method-list.md#vp-create-table) and [VP REMOVE TABLE](ViewPro/method-list.md#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](Admin/dataExplorer.md#basics).
- Nouvelle page expliquant [pourquoi et comment 4D collecte des données](Admin/data-collect. md).


## 4D v19 R5

- Applications client/serveur générées:
    - Le [fichier directory.json](../Users/handling_users_groups.md#directoryjson-file) du projet peut désormais être [intégré au serveur](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) au moment de la génération, ce qui vous permet de déployer une application client/serveur avec une configuration de base de la sécurité des utilisateurs et des groupes.
    - Vous pouvez désormais [décocher les modules inutiles](../Desktop/building.md#deselecting-modules) dans vos applications générées.

- [Optimisation client/serveur](../ORDA/remoteDatastores.md#clientserver-optimization) : De nouvelles fonctions de classe vous permettent de gérer le cache ORDA et le contenu d'un contexte d'optimisation. Pour plus d'informations, consultez [Préconfiguration des contextes](../ORDA/remoteDatastores.md#preconfiguring-contexts) et [cache ORDA](../ORDA/remoteDatastores.md#orda-cache).

    > Ces fonctions sont destinées aux développeurs qui souhaitent personnaliser les fonctions par défaut d'ORDA pour des configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de les utiliser.

- [DataClass class](../API/DataClassClass.md) : La nouvelle fonction [.getCount()](../API/DataClassClass.md#getcount) retourne le nombre d'entités d'une dataclass.

- 4D View Pro :
    - Les nouvelles commandes [VP SET DATA CONTEXT](ViewPro/method-list.md#vp-set-data-context), [VP Get data context](ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](ViewPro/method-list.md#vp-get-binding-path) vous permettent de créer des contextes de données et de lier leur contenu aux cellules de la feuille.
    - [VP EXPORT DOCUMENT](ViewPro/method-list.md#vp-get-binding-path) et [VP Export to object](ViewPro/method-list.md#vp-get-binding-path) acceptent désormais la nouvelle option `includeBindingSource` qui exporte le contenu d'un contexte de données en tant que valeurs de cellule.


## 4D v19 R4

- [Alias attributes](ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.

- Prise en charge des instructions [break et continue](Concepts/cf_looping.md#break-and-continue) dans les boucles.
- Prise en charge de l'instruction [return](Concepts/flow-control.md#return-expression) et de [l'expression return](Concepts/parameters.md#return-expression) pour retourner des valeurs.
- Prise en charge des [opérateurs d'assignation composés](Concepts/operators.md#compound-assignment-operators), des [opérateurs de court-circuit](Concepts/operators.md#short-circuit-operators) et de [l'opérateur ternaire](Concepts/operators.md#ternary-operator)
- The [Code Editor](../code-editor/navigation.md) now includes an dropdown tool and supports markers for better code navigation.
- Nouvelles préférences : [**Inclure les tokens dans les fichiers source du projet**](Preferences/general.md#include-tokens-in-project-source-files) et l'option [**Afficher les presse-papiers**](Preferences/methods.md#show-clipboards) sur la page Méthodes.
- Nouvelle requête REST pour [verrouiller/déverrouiller](REST/$lock.md) les entités.
- [4D View Pro](ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list.md#vp-paste-from-object).
- Nouvelle [classe SystemWorker](API/SystemWorkerClass.md).


## 4D v19 R3

- [Les propriétés calculées](Concepts/classes.md#function-get-and-function-set) sont disponibles dans les classes.
- [Les champs calculés](ORDA/ordaClasses.md#computed-attributes) sont disponibles dans les classes ORDA. Ils sont similaires aux propriétés calculées mais prennent également en charge les fonctions [query](ORDA/ordaClasses.md#function-query-attributename) et [orderBy](ORDA/ordaClasses.md#function-orderby-attributename).
- Nouveaux attributs de dataclass ORDA : [`exposed`](API/DataClassAttributeClass.md#exposed) et [`readOnly`](API/DataClassAttributeClass.md#readonly).
- [Les archives ZIP](API/ZipArchiveClass.md#zip-create-archive) prennent maintenant en charge les algorithmes de compression *LZMA* et *xz*.
- Une [nouvelle option de build](Desktop/building.md#allow-connection-of-silicon-mac-clients) permet d'inclure plus facilement les clients Silicon Mac dans les applications serveur sous Windows.
- Plus large [prise en charge du mode sombre](Preferences/general.md#appearance-macos-only) sur macOS.
- Prise en charge de **l'objet token OAuth2** dans [`IMAP New transporter`](API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass.md#pop3-new-transporter) et [`SMTP New transporter`](API/SMTPTransporterClass.md#smtp-new-transporter).
- Les utilisateurs peuvent désormais charger un [fichier de configuration de journal](Debugging/debugLogFiles.md#using-a-log-configuration-file) à l'aide d'un bouton dans la [fenêtre d'administration du serveur](ServerWindow/maintenance.md#load-logs-configuration-file).
- La gestion des [paramètres optionnels](Concepts/parameters.md#optional-parameters) est plus flexible dans le langage 4D.
- Le débogage des sessions de serveur web [est plus facile sur 4D Server](WebServer/sessions.md#preemptive-mode).
- Le nouveau composant [4D NetKit](Extensions/overview.md#list-of-4d-components) vous permet de vous connecter à des API tierces telles que Microsoft Graph.


## 4D v19 R2

- Un [fichier .gitignore par défaut](Preferences/general.md#create-gitignore-file) peut être créé avec les nouveaux projets
- Nouvelle [API Blob class](API/BlobClass.md) pour gérer de nouveaux objets [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Prise en charge de `no-bom` et nouveaux caractères de fin de ligne par défaut dans [`.setText()`](API/FileClass.md#settext)


## 4D v19

- [IMAPTransporter Class](API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](FormEditor/createStylesheet.md#media-queries)
- New default dark and light themes in [Code Editor preferences](Preferences/methods.md#theme-list).
- [Native compilation](Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](Admin/cli.md) page.



## 4D v18 R6

- [Entity Selection Class](API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- Nouveau composant [WebAdmin](Admin/webAdmin.md) du server web
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](WebServer/sessions.md) and [their API](API/SessionClass.md).