---
id: updates
title: Release Notes
---

## 4D 21 R4

Read [**What’s new in 4D 21 R4**](https://blog.4d.com/whats-new-in-4d-21-r4/), the blog post that lists all new features and enhancements in 4D 21 R4.

#### Points forts

- New [`defer`](../commands/defer) command to declare some code to be always executed at method or function exit.

## 4D 21 R3

Lisez [**Les nouveautés de 4D 21 R3**](https://blog.4d.com/fr/whats-new-in-4d-21-r3), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 21 R3.

#### Points forts

- La commande [`JSON Validate`](../commands/json-validate) prend désormais en charge le draft du schéma JSON 2020-12.
- 4D Write Pro prend en charge les [feuilles de style de liste hiérarchique](../WritePro/user-legacy/stylesheets.md#hierarchical-list-style-sheets), ce qui permet de créer et de gérer des [listes à plusieurs niveaux](../WritePro/user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) structurées avec numérotation automatique.
- Possibilité d'utiliser un certificat personnalisé provenant du trousseau de macOS au lieu d'un dossier de certificats local dans les classes [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) et [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew).
- Nouvelle classe [`4D.Method`](../API/MethodClass.md) pour créer et exécuter le code d'une méthode 4D à partir d'un texte source. Les commandes [`METHOD Get path`](../commands/method-get-path) et [`METHOD RESOLVE PATH`](../commands/method-resolve-path) prennent charge une nouvelle constante `path volatile method` (128).
- Le transporteur IMAP prend désormais en charge les notifications d'événements de boîte aux lettres utilisant le protocole IDLE via un objet [notifier](../API/IMAPTransporterClass.md#notifier) de la classe [4D.IMAPNotifier](../API/IMAPNotifierClass.md), configurable via la propriété `listener` de [IMAP New transporter](../commands/imap-new-transporter).
- Les objets [session](../API/SessionClass.md) distantes sont maintenant [disponibles côté client](../Desktop/sessions.md#availability).
- Nouvelle [page **IA**](../settings/ai.md) dans la boîte de dialogue des Propriétés, permettant de configurer des [alias de fournisseurs et de modèles](../aikit/provider-model-aliases.md) qui peuvent être appelés dans le code via le composant 4D AIKit.
- Composant 4D AIKit : nouvelle classe [Providers](../aikit/Classes/OpenAIProviders.md) pour instancier et gérer les [alias de fournisseurs et de modèles](../aikit/provider-model-aliases.md).
- Prise en charge du [mot-clé `server`](../Concepts/classes.md#server) pour les fonctions du modèle de données ORDA et les fonctions singleton partagées/session.
- New [printing renderer](../FormEditor/forms.md#print-rendering-engine) for forms on Liquid glass and Fluent UI interfaces. New compatibility options to [enable the renderer on Classic interfaces](../FormEditor/forms.md#legacy-print-renderer).
- Dépendances : prise en charge des [composants stockés sur les dépôts GitLab](../Project/components.md#configuring-a-gitlab-repository).
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=21_R3) : liste de tous les bugs qui ont été corrigés dans 4D 21 R3.

#### Prise en charge de Liquid glass sur macOS

- Prise en charge automatique de l'[interface **Liquid glass**](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) avec 4D sur macOS 26 Tahoe. Consultez [cet article de blog](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications) pour plus d'informations.
- Nouvelles valeurs renvoyées par la commande [`FORM Theme`](../commands/form-theme) et les [CSS Media queries](../FormEditor/createStylesheet.md#media-queries).
- Pour aider les développeurs à adapter progressivement leurs interfaces, possibilité de **désactiver Liquid glass dans les applications 4D fusionnées** via la clé "UIDesignRequiresCompatibility" dans le fichier *Info.plist* de l'application (voir [la documentation d'Apple sur cette clé](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility)).

#### Changements de comportement

- La commande [`JSON Validate`](../commands/json-validate) prend maintenant en compte la clé *$schema* et génère une erreur si une version non prise en charge est déclarée dans le schéma.
- Pour plus de clarté, les objets formules sont désormais des instances d'une nouvelle classe [`4D.Formula`](../API/FormulaClass.md) qui hérite de la classe générique [`4D.Function`](../API/FunctionClass.md).
- Dans 4D 21 R3, de nouvelles améliorations du [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) s'appliquent aux commandes du langage (voir [cet article de blog](https://blog.4d.com/enhancement-of-command-syntax-checking-in-the-editor)). Il est possible que des erreurs de syntaxe qui n'étaient pas détectées auparavant soient désormais signalées dans votre code.
- La page "PHP" a été supprimée de la [boîte de dialogue des Propriétés](../settings/overview.md). Utilisez les [sélecteurs PHP de la commande `SET DATABASE PARAMETER`](../commands/set-database-parameter#php-interpreter-ip-address-55) pour configurer un interpréteur PHP.
- L'ancienne couche réseau **Legacy** n'est plus prise en charge. Les projets et les bases de données binaires qui utilisaient l'ancienne couche réseau sont automatiquement configurés en [**ServerNet**](../settings/client-server.md#network-layer) lors de la mise à niveau vers 4D 21 R3 et versions ultérieures.

## 4D 21 R2

Lisez [**Les nouveautés de 4D 21 R2**](https://blog.4d.com/fr-whats-new-in-4d-21-R2/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 21 R2.

#### Points forts

- Le [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) a été amélioré pour fournir une plus grande précision dans la détection des erreurs (voir [cet article de blog](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) pour plus d'informations).
- Les [actions standard de 4D Write Pro](../WritePro/user-legacy/standard-actions.md) qui s'appliquent aux [listes](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) ajustent désormais automatiquement les marges des paragraphes pour que les marqueurs restent positionnés à l'intérieur de cette marge.
- Prise en charge intégrée de `order by` dans les requêtes pour les recherches vectorielles IA en utilisant les fonctions [`query()`](../API/DataClassClass.md#query-by-vector-similarity) et l'[API REST](../REST/$orderby.md).
- Vous pouvez désormais créer et ouvrir des pages Qodly à partir de l'[Explorateur](../Develop/explorer.md).
- Vous pouvez [personnaliser les icônes de vos composants](../Extensions/develop-components.md#custom-icon).
- Composant 4D AIKit : nouvelle classe [File API](../aikit/Classes/OpenAIFilesAPI.md) pour implémenter les fonctionnalités de **téléversement de fichiers**.
- Les fonctions [**Chercher dans le développement**](../Project/search-replace.md#search-in-components) et [**Remplacer dans le contenu**](../Project/search-replace.md#replace-in-content) peuvent maintenant intégrer les composants modifiables.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=21_R2) : liste de tous les bugs qui ont été corrigés dans 4D 21 R2.

#### Developer Preview

- Prise en charge du [**rendu d'interface Fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) sous Windows :
  - nouvelle commande [`FORM theme`](../commands/form-theme),
  - nouveau [media query css`form-theme`](../FormEditor/createStylesheet.md#media-queries),
  - nouvelle option [**Utiliser Fluent UI sous Windows**](../settings/interface.md#use-fluent-ui-on-windows) dans la boîte de dialogue des Propriétés du projet.

#### Changements de comportement

- Sous Windows, si le [rendu **Fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) est activé, la commande [`GET STYLE SHEET INFO`](../commands/get-style-sheet-info) peut renvoyer des informations différentes selon qu'elle est appelée depuis un formulaire ou non.

## Tableau des bibliothèques

| Bibliothèque | Version courante                       | Mise à jour dans 4D | Commentaire                                                                                                                                           |
| ------------ | -------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL    | 664a985                                | **21 R4**           | Utilisé pour QUIC                                                                                                                                     |
| CEF          | 7258                                   | 21                  | Chromium 139                                                                                                                                          |
| Hunspell     | 1.7.2  | 20                  | Utilisé pour la vérification orthographique dans les formulaires 4D et 4D Write Pro                                                                   |
| ICU          | 77.1                   | 21                  | Cette mise à jour entraîne une reconstruction automatique des index alphanumériques, textes et objets.                                |
| libldap      | 2.6.10 | 21                  |                                                                                                                                                       |
| libsasl      | 2.1.28 | 20                  |                                                                                                                                                       |
| Liblsquic    | 4.2.0  | 20 R10              | Utilisé pour QUIC                                                                                                                                     |
| Libuv        | 1.51.0 | 21                  | Utilisé pour QUIC                                                                                                                                     |
| libZip       | 1.11.4 | 21                  | Utilisé par les classes zip, 4D Write Pro, les composants svg et serverNet                                                                            |
| LZMA         | 5.8.1  | 21                  |                                                                                                                                                       |
| ngtcp2       | 1.22.1 | **21 R4**           | Utilisé pour QUIC                                                                                                                                     |
| OpenSSL      | 4.0                    | **21 R4**           |                                                                                                                                                       |
| PDFWriter    | 4.7.0  | 21                  | Utilisé pour [`WP Export document`](../WritePro/commands/wp-export-document.md) et [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS     | 18.2.0 | 21 R2               | Voir [ce blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) pour un aperçu des nouvelles fonctionnalités.             |
| webKit       | WKWebView                              | 19                  |                                                                                                                                                       |
| Xerces       | 3.3.0  | 21                  | Utilisé pour les commandes XML                                                                                                                        |
| Zlib         | 1.3.1  | 21                  |                                                                                                                                                       |

