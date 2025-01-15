---
id: updates
title: Release Notes
---

:::tip

Lisez [**Les nouveautés de 4D 19**](https://blog.4d.com/en-whats-new-in-4d-v19/), l'article de blog qui répertorie toutes les nouvelles fonctionnalités et améliorations de 4D 19 LTS.

:::



## 4D 19.8 LTS

#### Points forts

- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19.8) : liste de tous les bugs corrigés dans 4D 19.8.


## 4D 19.7 LTS

#### Points forts

:::warning Note de sécurité

Si vos applications 4D utilisent des connexions TLS, il est recommandé de mettre à jour 4D en release 19.7 LTS build 288986 ou plus. Pour plus d'informations, reportez-vous à ce [bulletin de sécurité](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19.7) : liste de tous les bugs corrigés dans 4D 19.7.


## 4D 19.6 LTS

#### Points forts

- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19.6) : liste de tous les bugs corrigés dans 4D 19.6.


## 4D 19.5 LTS

#### Points forts

- 4D 19.5 est certifié sur Windows 11 22H2
- 4D 19.5 est certifié sur macOS Ventura (macOS 13)
- La version de SpreadJS a été mise à jour (14.1.6).
- [**Liste des bugs corrigés**](https://bugs.4d.fr/fixedbugslist?version=19.5) : liste de tous les bugs corrigés dans 4D 19.5.


## 4D 19.x LTS

#### Points forts

- [Classe IMAPTransporter](../API/IMAPTransporterClass.md): nouvelles fonctions `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, et `.unsubscribe()` .
- [Classe File](../API/FileClass.md) : nouvelles fonctions `setAppInfo()` et `getAppInfo()`.
- Nouvelle balise de transformation [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Serveur Web : nouveau paramètre [SameSite pour les cookies de session](../WebServer/webServerConfig.md#session-cookie-samesite).
- Prise en charge des couleurs dark et light pour les [formulaires](../FormEditor/properties_FormProperties.md#color-scheme) et les [feuilles de style](../FormEditor/stylesheets#media-queries)
- Nouveaux thèmes dark et light par défaut dans les [préférences de l'éditeur de code](../Preferences/methods.md#theme-list).
- [Compilation native](../Project/compiler.md#compiler-methods-for) pour les processeurs Silicon.
- La propriété [Calcul de variable](../FormObjects/properties_Object.md#variable-calculation) est désormais prise en charge par les colonnes des listbox entity selection.
- Nouvelle page [CLI](../Admin/cli.md) complète.



### 4D 18 R6

- [Classe Entity Selection](../API/EntitySelectionClass.md): les fonctions `.average()`, `.max()` et `.min()` renvoient désormais *undefined* si l'entity selection est vide.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) et [SMTP Mail](../API/SMTPTransporterClass.md) : la propriété `authenticationMode` active OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): nouvelles fonctions `.expunge()` et `.append()`
- Nouveau composant serveur web [WebAdmin](../Admin/webAdmin.md)
- Nouvelle interface [DataExplorer](../Admin/dataExplorer.md)
- Nouvelles [sessions web](../WebServer/sessions.md) et [leur API](../API/SessionClass.md).


## Versions précédentes


- Voir les [**notes de versions précédentes**](https://doc.4d.com/4Dv19/4D/19.4/4D-v19x-Release-Notes.100-6044726.en.html) sur doc.4d.com.


## Tableau des bibliothèques


| Bibliothèque | Version courante | Mise à jour dans 4D | Commentaire                                                                                                   |
| ------------ | ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| OpenSSL      | 1.1.1s           | 19.6                |                                                                                                               |
| SpreadJS     | 14.1.6           | 19.5                | Moteur 4D View Pro                                                                                            |
| CEF          | 4324             | 19                  | Chromium v88. Permet la compilation native sur les plates-formes Apple Silicon.                               |
| webKit       | WKWebView        | 19                  |                                                                                                               |
| ICU          | 68.1             | 18 R6               | Cette mise à jour majeure entraîne une reconstruction automatique des index alphanumériques, texte et objets. |
| PHP          | 7.3.27           | 18 R6               |                                                                                                               |
| libldap      | 2.4.48           | 18 R2               |                                                                                                               |
