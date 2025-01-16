---
id: updates
title: Notas de lançamento
---

:::tip

Read [**What’s new in 4D 19**](https://blog.4d.com/en-whats-new-in-4d-v19/), the blog post that lists all new features and enhancements in 4D 19 LTS.

:::



## 4D 19.8 LTS

#### Destaques

- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.8): list of all bugs that have been fixed in 4D 19.8.


## 4D 19.7 LTS

#### Destaques

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 19.7 LTS build 288986 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.7): list of all bugs that have been fixed in 4D 19.7.


## 4D 19.6 LTS

#### Destaques

- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.6): list of all bugs that have been fixed in 4D 19.6.


## 4D 19.5 LTS

#### Destaques

- 4D 19.5 é certificado em Windows 11 22H2
- 4D 19.5 é certificado em macOS Ventura (macOS 13)
- A versão SpreadJS foi actualizada (14.1.6).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.5): list of all bugs that have been fixed in 4D 19.5.


## 4D 19.x LTS

#### Destaques

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Suporte ao esquema de cores escura e clara para [formulários](../FormEditor/properties_FormProperties.md#color-scheme) e [folhas de estilo](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Cálculo de variável](../FormObjects/properties_Object.md#variable-calculation) agora é suportado pelas colunas list box da entity selection selecionada.
- New, comprehensive [CLI](../Admin/cli.md) page.



### 4D 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- Novo componente de servidor web [WebAdmin](../Admin/webAdmin.md)
- Nova interface [DataExplorer](../Admin/dataExplorer.md)
- New web [user sessions](../WebServer/sessions.md) and [their API](../API/SessionClass.md).


## Lançamentos anteriores


- Veja as [**notas de lançamento anteriores**](https://doc.4d.com/4Dv19/4D/19.4/4D-v19x-Release-Notes.100-6044726.en.html) em doc.4d.com.


## Tabela da biblioteca


| Biblioteca | Versão atual | Atualizado em 4D | Comentário                                                                                                  |
| ---------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| OpenSSL    | 1.1.1s       | 19.6             |                                                                                                             |
| SpreadJS   | 14.1.6       | 19.5             | Motor 4D View Pro                                                                                           |
| CEF        | 4324         | 19               | Chromium v88. Permite a compilação nativa nas plataformas Apple Silicon.                                    |
| webKit     | WKWebView    | 19               |                                                                                                             |
| ICU        | 68.1         | 18 R6            | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos. |
| PHP        | 7.3.27       | 18 R6            |                                                                                                             |
| libldap    | 2.4.48       | 18 R2            |                                                                                                             |
