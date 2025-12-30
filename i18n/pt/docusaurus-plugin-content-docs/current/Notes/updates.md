---
id: updates
title: Notas de lançamento
---

## 4D 21 R2

Leia [**O que há de novo no 4D v21 R2**](https://blog.4d.com/en-whats-new-in-4d-21-r2/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v21 R2.

#### Destaques

- [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) has been enhanced to provide greater precision in error detection (see [this blog post](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) for more information).
- [4D Write Pro standard actions](../WritePro/user-legacy/standard-actions.md) that apply [lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) now automatically adjust paragraph margins to keep markers positioned inside it.
- Built-in support of `order by` in query strings for AI vector searches using [`query()`](../API/DataClassClass.md#query-by-vector-similarity) functions and the [REST API](../REST/$orderby.md).
- You can [customize the icons of your components](../Extensions/develop-components.md#custom-icon).
- 4D AIKit component: new [File API](../aikit/Classes/OpenAIFilesAPI.md) class to implement **file upload** features.
- [**Find in Design**](../Project/search-replace.md#search-in-components) and [**Replace in contents**](../Project/search-replace.md#replace-in-contents) features can now support editable components.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=21_R2): lista de todos os bugs corrigidos em 4D 21 R2.

#### Mudanças de comportamento

## Tabela da biblioteca

| Biblioteca | Versão atual                           | Atualizado em 4D | Comentário                                                                                                                                         |
| ---------- | -------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL  | 9b86817                                | **21**           | Usado para QUIC                                                                                                                                    |
| CEF        | 7258                                   | **21**           | Chromium 139                                                                                                                                       |
| Hunspell   | 7.3.27 | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                                                |
| ICU        | 77.1                   | **21**           | This upgrade forces an automatic rebuild of alphanumeric, text and object indexes.                                                 |
| libldap    | 2.6.10 | **21**           |                                                                                                                                                    |
| libsasl    | 2.1.28 | 20               |                                                                                                                                                    |
| Liblsquic  | 4.2.0  | 20 R10           | Usado para QUIC                                                                                                                                    |
| Libuv      | 1.51.0 | **21**           | Usado para QUIC                                                                                                                                    |
| libZip     | 1.11.4 | **21**           | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                                               |
| LZMA       | 5.8.1  | **21**           |                                                                                                                                                    |
| ngtcp2     | 1.18.0 | **21**           | Usado para QUIC                                                                                                                                    |
| OpenSSL    | 3.5.2  | **21**           |                                                                                                                                                    |
| PDFWriter  | 4.7.0  | **21**           | Used for [`WP Export document`](../WritePro/commands/wp-export-document.md) and [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS   | 18.2.0 | 21 R2            | Veja [este post de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) para uma visão geral dos novos recursos                           |
| webKit     | WKWebView                              | 19               |                                                                                                                                                    |
| Xerces     | 3.3.0  | **21**           | Used for XML commands                                                                                                                              |
| Zlib       | 1.3.1  | **21**           |                                                                                                                                                    |
