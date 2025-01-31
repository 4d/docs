---
id: updates
title: Notas de lançamento
---

:::tip

Leia [**O que há de novo no 4D 19**](https://blog.4d.com/en-whats-new-in-4d-v19/), a postagem do blog que lista todos os novos recursos e aprimoramentos no 4D 19 LTS.

:::



## 4D 19.8 LTS

#### Destaques

- [**Fixa lista de erros**](https://bugs.4d.fr/fixedbugslist?version=19.8): lista de todos os bugs corrigidos em 4D 19.8.


## 4D 19.7 LTS

#### Destaques

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 19.7 LTS build 288986 ou superior. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [**Fixa lista de erros**](https://bugs.4d.fr/fixedbugslist?version=19.7): lista de todos os bugs corrigidos em 4D 19.7.


## 4D 19.6 LTS

#### Destaques

- [**Fixa lista de erros**](https://bugs.4d.fr/fixedbugslist?version=19.6): lista de todos os bugs corrigidos em 4D 19.6.


## 4D 19.5 LTS

#### Destaques

- 4D 19.5 é certificado em Windows 11 22H2
- 4D 19.5 é certificado em macOS Ventura (macOS 13)
- A versão SpreadJS foi actualizada (14.1.6).
- [**Fixa lista de erros**](https://bugs.4d.fr/fixedbugslist?version=19.5): lista de todos os bugs corrigidos em 4D 19.5.


## 4D 19.x LTS

#### Destaques

- [Classe IMAPTransporter](../API/IMAPTransporterClass.md): novas funções `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` e `.unsubscribe()`.
- [Classe File](../API/FileClass.md): novas funções `setAppInfo()` e `getAppInfo()`.
- Nova tag de transformação [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Servidor Web: nova configuração [SameSite para as cookies de sessão](../WebServer/webServerConfig.md#session-cookie-samesite).
- Suporte ao esquema de cores escura e clara para [formulários](../FormEditor/properties_FormProperties.md#color-scheme) e [folhas de estilo](../FormEditor/stylesheets#media-queries)
- Novos temas padrão escuro e claro nas [preferências do editor de código](../Preferences/methods.md#theme-list).
- [Compilação nativa](../Project/compiler.md#compiler-methods-for) para processadores Silicon.
- [Cálculo de variável](../FormObjects/properties_Object.md#variable-calculation) agora é suportado pelas colunas list box da entity selection selecionada.
- Nova página [CLI](../Admin/cli.md) completa.



### 4D 18 R6

- [Classe Entity Selection](../API/EntitySelectionClass.md): as funções `.average()`, `.max()` e `.min()` agora retornam *undefined* se a seleção da entidade estiver vazia.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) e [SMTP Mail](../API/SMTPTransporterClass.md): a propriedade `authenticationMode` habilita OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): novas funções `.expunge()` e `.append()`
- Novo componente de servidor web [WebAdmin](../Admin/webAdmin.md)
- Nova interface [DataExplorer](../Admin/dataExplorer.md)
- Novas [sessões de usuário](../WebServer/sessions.md) web e [sua API](../API/SessionClass.md).


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
