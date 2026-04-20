---
id: updates
title: Release Notes
---

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
  - nouvelle commande [`FORM theme`](../commands/form-theme.md),
  - nouveau [media query css`form-theme`](../FormEditor/createStylesheet.md#media-queries),
  - nouvelle option [**Utiliser Fluent UI sous Windows**](../settings/interface.md#use-fluent-ui-on-windows) dans la boîte de dialogue des Propriétés du projet.

#### Changements de comportement

- Sous Windows, si le [rendu **Fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) est activé, la commande [`GET STYLE SHEET INFO`](../commands-legacy/get-style-sheet-info.md) peut renvoyer des informations différentes selon qu'elle est appelée depuis un formulaire ou non.

## Tableau des bibliothèques

| Bibliothèque | Version courante                       | Mise à jour dans 4D | Commentaire                                                                                                                                           |
| ------------ | -------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL    | 9b86817                                | 21                  | Utilisé pour QUIC                                                                                                                                     |
| CEF          | 7258                                   | 21                  | Chromium 139                                                                                                                                          |
| Hunspell     | 1.7.2  | 20                  | Utilisé pour la vérification orthographique dans les formulaires 4D et 4D Write Pro                                                                   |
| ICU          | 77.1                   | 21                  | Cette mise à jour entraîne une reconstruction automatique des index alphanumériques, textes et objets.                                |
| libldap      | 2.6.10 | 21                  |                                                                                                                                                       |
| libsasl      | 2.1.28 | 20                  |                                                                                                                                                       |
| Liblsquic    | 4.2.0  | 20 R10              | Utilisé pour QUIC                                                                                                                                     |
| Libuv        | 1.51.0 | 21                  | Utilisé pour QUIC                                                                                                                                     |
| libZip       | 1.11.4 | 21                  | Utilisé par les classes zip, 4D Write Pro, les composants svg et serverNet                                                                            |
| LZMA         | 5.8.1  | 21                  |                                                                                                                                                       |
| ngtcp2       | 1.18.0 | 21                  | Utilisé pour QUIC                                                                                                                                     |
| OpenSSL      | 3.5.2  | 21                  |                                                                                                                                                       |
| PDFWriter    | 4.7.0  | 21                  | Utilisé pour [`WP Export document`](../WritePro/commands/wp-export-document.md) et [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS     | 18.2.0 | **21 R2**           | Voir [ce blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) pour un aperçu des nouvelles fonctionnalités.             |
| webKit       | WKWebView                              | 19                  |                                                                                                                                                       |
| Xerces       | 3.3.0  | 21                  | Utilisé pour les commandes XML                                                                                                                        |
| Zlib         | 1.3.1  | 21                  |                                                                                                                                                       |
