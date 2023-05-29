---
id: Transporter
title: Classe Transporter
---

## Descrição

<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.acceptUnsecureConnection` contém <!-- REF #transporter.acceptUnsecureConnection.Summary -->**Verdadeiro** se 4D for permitido estabelecer uma ligação não encriptada<!-- END REF --> quando a ligação encriptada não é possível.

Contém **False** se conexões cifradas não forem permitidas, neste caso um erro é retornado quando a conexão criptografada não for possível.

Estão disponíveis portos seguros:

- SMTP
  - 465: SMTPS
  - 587 ou 25: SMTP com atualização STARTTLS se for compat[ivel com o servidor.

- IMAP
  - 143: IMAP non-encrypted port
  - 993: IMAP com atualização STARTTLS se for compatível com o servidor

- POP3
  - 110: Porta não criptografada POP3
  - 995: POP3 com atualização STARTTLS se suportado pelo servidor.
<!-- END REF -->

---

<!-- REF transporter.authenticationModeIMAP.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.authenticationMode.Syntax -->**.authenticationMode** : Text<!-- END REF -->

#### Descrição

A propriedade `.authenticationMode<` contém <!-- REF #transporter.authenticationMode.Summary -->o modo de autenticação utilizado para abrir a sessão no servidor de correio<!-- END REF -->.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Valor    | Constantes                     | Comentário                               |
| -------- | ------------------------------ | ---------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5 |
| LOGIN    | `IMAP authentication login`    | Autenticação usando o protocolo LOGIN    |
| OAUTH2   | `Autenticação IMAP OAUTH2`     | Autenticação usando o protocolo OAuth2   |
| PLAIN    | `IMAP authentication plain`    | Autenticação usando o protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.authenticationModePOP3.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

**.authenticationMode** : Text

#### Descrição

A propriedade `.authenticationMode` contém o modo de autenticação utilizado para abrir a sessão no servidor de correio.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Valor    | Constantes                   | Comentário                                         |
| -------- | ---------------------------- | -------------------------------------------------- |
| APOP     | `Autenticação POP3 APOP`     | Autenticação usando o protocolo APOP (POP3 apenas) |
| CRAM-MD5 | `Autenticação POP3 CRAM-MD5` | Autenticação usando o protocolo CRAM-MD5           |
| LOGIN    | `POP3 authentication login`  | Autenticação usando o protocolo LOGIN              |
| OAUTH2   | `POP3 authentication OAUTH2` | Autenticação usando o protocolo OAuth2             |
| PLAIN    | `Autenticação POP3 simples`  | Autenticação usando o protocolo PLAIN              |

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

**.authenticationMode** : Text

#### Descrição

A propriedade `.authenticationMode` contém o modo de autenticação utilizado para abrir a sessão no servidor de correio.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Valor    | Constantes                     | Comentário                               |
| -------- | ------------------------------ | ---------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5 |
| LOGIN    | `SMTP authentication login`    | Autenticação usando o protocolo LOGIN    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Autenticação usando o protocolo OAuth2   |
| PLAIN    | `SMTP authentication plain`    | Autenticação usando o protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<details><summary>Histórico</summary>

| Versão | Mudanças               |
| ------ | ---------------------- |
| v18    | Suporte de UTF8 base64 |
| v17 R5 | Adicionado             |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->**.bodyCharset** : Text<!-- END REF -->

#### Descrição

A propriedade `.bodyCharset` contém <!-- REF #transporter.bodyCharset.Summary -->  o charset e a codificação utilizados para a parte do corpo do e-mail<!-- END REF -->.

**Valores possíveis:**

| Parâmetros                     | Valor                          | Comentário                                                                                                             |
| ------------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII se for possível, japonês (ISO-2022-JP) & Quoted-printable se for possível, do contrário UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII se possível, japonês (ISO-2022-JP) e 7 bits se for possível, do contrário UTF-8 & Quoted-printable</li></ul>                                                                                              |
| mail mode ISO88591             | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                              |
| mail mode UTF8                 | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor por defeito**) |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII se possível, senão UTF-8 & base64                                            |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->**.connectionTimeOut** : Integer<!-- END REF -->

#### Descrição

A propriedade `.sendTimeOut` contém <!-- REF #transporter.connectionTimeOut.Summary -->o tempo máximo de espera (em segundos) de uma chamada para `.send( )` antes de ocorrer um timeout<!-- END REF -->. .

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.headerCharset.Syntax -->**.headerCharset** : Text<!-- END REF -->

#### Descrição

A propriedade `.headerCharset` contém <!-- REF #transporter.headerCharset.Summary --> o charset e a codificação utilizados para o cabeçalho do correio eletrônico<!-- END REF -->. O cabeçalho inclui as seguintes partes do e-mail:

- assunto,
- nome(s) de arquivo anexo,
- email name.

**Valores possíveis:**

| Parâmetros                     | Valor                          | Comentário                                                                                                         |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII se for possível, japonês (ISO-2022-JP) & Quoted-printable se for possível, do contrário UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII se possível, japonês (ISO-2022-JP) e 7 bits se for possível, do contrário UTF-8 & Quoted-printable</li></ul>                                                                                          |
| mail mode ISO88591             | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                         |
| mail mode UTF8                 | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (valor por defeito) |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII se possível, senão UTF-8 & base64                                        |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->
## .host

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.host.Syntax -->**.host** : Text<!-- END REF -->

#### Descrição

A propriedade `.host` contém <!-- REF #transporter.host.Summary -->o nome ou o endereço IP do servidor anfitrião<!-- END REF -->. Utilizado para transacções postais (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.logFile.Syntax -->**.logFile** : Text<!-- END REF -->

#### Descrição

A propriedade `.logFile` contém <!-- REF #transporter.logFile.Summary -->o caminho do arquivo de registo alargado definido (se existir) para a ligação de correio<!-- END REF -->. Pode ser relativo (à pasta atual de Logs) ou absoluto.

Ao contrário dos arquivos de registo regulares (ativados através do comando `SET DATABASE PARAMETER` ), os arquivos de registo armazenam o conteúdo MIME de todos os e-mails enviados e não têm qualquer limite de tamanho. Para mais informações sobre arquivos de registo estendidos, consultar:

- **SMTP connections** - [4DSMTPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **POP3 connections** - [4DPOP3Log.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **IMAP connections** - [4DIMAPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->
## .port

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.port.Syntax -->**.port** : Integer<!-- END REF -->

#### Descrição

A propriedade `.port` contém <!-- REF #transporter.port.Summary --> o número do porto utilizado para as transações postais<!-- END REF -->. Por padrão, se a propriedade *port* não tiver sido definida no objeto *server* (utilizado para criar o objecto transportador com `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), a porta utilizada é:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #transporter.sendTimeOut.Syntax -->**.sendTimeOut** : Integer<!-- END REF -->

#### Descrição

A propriedade `.connectionTimeOut` contém <!-- REF #transporter.sendTimeOut.Summary --> o tempo máximo de espera (em segundos) de uma chamada para `.send( )` antes de ocorrer um timeout<!-- END REF -->. Por padrão, se a propriedade `.sendTimeOut` não tiver sido definida no objecto `server`, é utilizado o valor 100.

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->
## .user

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.user.Syntax -->**.user** : Text<!-- END REF -->

#### Descrição

A propriedade `.user` contém <!-- REF #transporter.user.Summary --> o nome de usuário utilizado para autenticação no servidor de correio<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.checkConnection().Syntax -->**.checkConnection()** : Object<!-- END REF -->


<!-- REF #transporter.checkConnection().Params -->
| Parâmetro  | Tipo   |    | Descrição                                                             |
| ---------- | ------ |:--:| --------------------------------------------------------------------- |
| Resultados | Objeto | <- | Estado da ligação do objecto transportador|<!-- END REF -->

|

#### Descrição

A função `.checkConnection()` <!-- REF #transporter.checkConnection().Summary --> verifica a ligação utilizando a informação armazenada no objeto de transporte<!-- END REF -->, recria a ligação, se necessário, e devolve o estado. Esta função permite verificar se os valores fornecidos pelo utilizador são válidos e consistentes.

#### Objeto devolvido

A função envia um pedido para o servidor de correio e devolve um objecto descrevendo o estado do correio. Este objeto pode conter as seguintes propriedades:

| Propriedade |                          | Tipo       | Descrição                                                                                                                                   |
| ----------- | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| success     |                          | boolean    | Verdadeiro se a verificação for bem sucedida, Falso de outra forma                                                                          |
| status      |                          | number     | (apenas SMTP) Código de estado devolvido pelo servidor de correio (0 no caso de um problema não relacionado com o processamento de correio) |
| statusText  |                          | text       | Mensagem de estado devolvida pelo servidor de correio, ou último erro devolvido na pilha de erros 4D                                        |
| errors      |                          | collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor de correio)                                                       |
|             | \[ ].errCode            | number     | Código de erro 4D                                                                                                                           |
|             | \[ ].message            | text       | Descrição do erro 4D                                                                                                                        |
|             | \[ ].componentSignature | text       | Assinatura da componente interna que devolveu o erro                                                                                        |

<!-- END REF -->
