---
id: updates
title: Release Notes
---

## 4D 21 R2

Lisez [**Les nouveautés de 4D 21 R2**](https://blog.4d.com/fr-whats-new-in-4d-v21-R2/), l'article de blog qui liste toutes les nouvelles fonctionnalités et améliorations de 4D 20 R2.

#### Points forts

- Le [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) a été amélioré pour fournir une plus grande précision dans la détection des erreurs (voir [cet article de blog](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) pour plus d'informations).
- Les [actions standard de 4D Write Pro](../WritePro/user-legacy/standard-actions.md) qui s'appliquent aux [listes](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) ajustent désormais automatiquement les marges des paragraphes pour que les marqueurs restent positionnés à l'intérieur de cette marge.
- Built-in support of `order by` in query strings for AI vector searches using [`query()`](../API/DataClassClass.md#query-by-vector-similarity) functions and the [REST API](../REST/$orderby.md).
- 4D AIKit component: new [File API](../aikit/Classes/OpenAIFilesAPI.md) class to implement **file upload** features.
- [**Find in Design**](../Project/search-replace.md#search-in-components) and [**Replace in contents**](../Project/search-replace.md#replace-in-contents) features can now support editable components.
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=21_R2) : liste de tous les bugs qui ont été corrigés dans 4D 21 R2.

#### Changements de comportement

## Tableau des bibliothèques

| Bibliothèque | Version courante                       | Mise à jour dans 4D | Commentaire                                                                                                                                           |
| ------------ | -------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL    | 9b86817                                | **21**              | Utilisé pour QUIC                                                                                                                                     |
| CEF          | 7258                                   | **21**              | Chromium 139                                                                                                                                          |
| Hunspell     | 1.7.2  | 20                  | Utilisé pour la vérification orthographique dans les formulaires 4D et 4D Write Pro                                                                   |
| ICU          | 77.1                   | **21**              | Cette mise à jour entraîne une reconstruction automatique des index alphanumériques, textes et objets.                                |
| libldap      | 2.6.10 | **21**              |                                                                                                                                                       |
| libsasl      | 2.1.28 | 20                  |                                                                                                                                                       |
| Liblsquic    | 4.2.0  | 20 R10              | Utilisé pour QUIC                                                                                                                                     |
| Libuv        | 1.51.0 | **21**              | Utilisé pour QUIC                                                                                                                                     |
| libZip       | 1.11.4 | **21**              | Utilisé par les classes zip, 4D Write Pro, les composants svg et serverNet                                                                            |
| LZMA         | 5.8.1  | **21**              |                                                                                                                                                       |
| ngtcp2       | 1.18.0 | **21**              | Utilisé pour QUIC                                                                                                                                     |
| OpenSSL      | 3.5.2  | **21**              |                                                                                                                                                       |
| PDFWriter    | 4.7.0  | **21**              | Utilisé pour [`WP Export document`](../WritePro/commands/wp-export-document.md) et [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS     | 18.2.0 | 21 R2               | Voir [ce blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) pour un aperçu des nouvelles fonctionnalités.             |
| webKit       | WKWebView                              | 19                  |                                                                                                                                                       |
| Xerces       | 3.3.0  | **21**              | Utilisé pour les commandes XML                                                                                                                        |
| Zlib         | 1.3.1  | **21**              |                                                                                                                                                       |
