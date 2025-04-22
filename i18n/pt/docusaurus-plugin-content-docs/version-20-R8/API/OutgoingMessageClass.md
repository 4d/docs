---
id: OutgoingMessageClass
title: OutgoingMessage
---

A classe `4D.OutgoingMessage` permite que você crie mensagens a serem retornadas pelas funções do seu aplicativo em resposta a [solicitações REST] (../REST/REST_requests.md). Se a resposta for do tipo `4D.OutgoingMessage`, o servidor REST não retornará um objeto, mas a instância do objeto da classe `OutgoingMessage`.

Typically, this class can be used in custom [HTTP request handler functions](../WebServer/http-request-handler.md#function-configuration) or in functions declared with the [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) keyword and designed to handle HTTP GET requests. Tais solicitações são usadas, por exemplo, para implementar recursos como arquivo de download, Gerar e baixar imagens, bem como receber qualquer tipo de conteúdo por um navegador.

Uma instância desta classe é construída no Servidor 4D e pode ser enviada para o navegador pelo [4D Servidor REST](../REST/gettingStarted.md) apenas. Essa classe permite usar tecnologias diferentes do HTTP (por exemplo, mobile).

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R7   | Classe adicionada |

</details>

### Exemplo

Neste exemplo, uma função `getFile()` está implementada na [classe Datastore ](../ORDA/ordaClasses.md#datastore-class) e [pode ser chamada](../ORDA/ordaClasses.md#onhttpget-keyword) por uma solicitação REST. O objetivo é retornar um arquivo **testFile.pdf** como resposta à solicitação:

```4d
Class extends DataStoreImplementation

exposed onHTTPGet Function getFile() : 4D.OutgoingMessage
	
	var $result:=4D.OutgoingMessage.new()
	var $file:=File("/RESOURCES/testFile.pdf")
	
	$result.setBody($file.getContent())  // This is binary content
	$result.setHeader("Content-Type"; "application/pdf")
	return $result
```

### Objeto OutgoingMessage

Os objetos 4D.OutgoingMessage fornecem as seguintes propriedades e funções:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->              |

:::note

Um objeto 4D.OutgoingMessage é um objeto [não compartilhável](../Concepts/shared.md).

:::

<!-- REF #OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Descrição

A propriedade `.body` contém <!-- REF #OutgoingMessageClass.body.Resumo --> o corpo da mensagem enviada<!-- END REF -->. Os seguintes tipos de dados são suportados na propriedade `.body`:

- text
- blob
- object
- image

A propriedade `.body` é de leitura e gravação.

Você também pode definir a propriedade `.body` usando a função [`setBody()`](#setbody), caso em que o cabeçalho `content-type` é automaticamente definido.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Descrição

A propriedade `.headers` contém <!-- REF #OutgoingMessageClass.headers.Resumo --> os cabeçalhos atuais da mensagem de saída como pares chave/valor <!-- END REF -->.

A propriedade `.headers` é somente leitura. Para definir um cabeçalho, use a função [`setHeader()`](#setheader).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| Parâmetro | Tipo |    | Descrição                  |
| --------- | ---- | -- | -------------------------- |
| body      | any  | -> | Corpo da mensagem de saída |

<!-- END REF -->

#### Descrição

A função `.setBody()` <!-- REF #OutgoingMessageClass.setBody().Summary -->define a mensagem de saída *body*<!-- END REF -->.

Os seguintes tipos de dados são suportados no *corpo*:

- Text
- Blob
- Object
- Imagem

Quando essa função é usada, o cabeçalho do tipo de conteúdo é definido automaticamente dependendo do tipo *corpo*:

- Content-Type:text/plain se o corpo é um Texto
- Content-Type:application/octet-stream se o corpo é um Blob
- Content-Type:application/json se o corpo é um objeto
- Conteúdo-Tipo:image/jpeg, imagem/gif... se o corpo for uma imagem

Se *body* não for de um tipo de valor suportado, um erro é retornado.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Params -->

| Parâmetro | Tipo |    | Descrição                             |
| --------- | ---- | -- | ------------------------------------- |
| \|        | Text | -> | Propriedade de cabeçalho para definir |
| value     | Text | -> | Valor da propriedade do cabeçalho     |

<!-- END REF -->

#### Descrição

A função `.setHeader()` <!-- REF #OutgoingMessageClass.setHeader().Summary -->define o cabeçalho de mensagem de saída *chave* com o *valor*<!-- END REF -->. Se ambos os parâmetros não são valores de texto, um erro é gerado.

Ao retornar uma instância de objeto 4D.OutgoingMessage, 4D automaticamente define alguns cabeçalhos (por exemplo, `Set-Cookie` com `WASID4D=...` e `4DSID__ProjectName_=....`).

:::note

Se você definir um *valor* para o cabeçalho "Content-Type" *chave*, certifique-se de chamar esta função depois da chamada para [`setBody()`](#setbody), porque `setBody()` preenche automaticamente este cabeçalho. Para obter uma lista de valores de cabeçalho "Content-Type", por favor, consulte a [documentação do `WEB SEND BLOB`](../commands-legacy/web-send-blob.md).

:::

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Params -->

| Parâmetro | Tipo    |    | Descrição           |
| --------- | ------- | -- | ------------------- |
| status    | Integer | -> | Status para definir |

<!-- END REF -->

#### Descrição

A função `.setStatus()` <!-- REF #OutgoingMessageClass.setStatus().Summary -->define a propriedade `status` com o *status* <!-- END REF -->.

Se *status* não for um valor inteiro, um erro é gerado.

Para obter uma lista de códigos de status HTTP, por favor, consulte a [lista de código de status HTTP na Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Descrição

A propriedade `.status` contém <!-- REF #OutgoingMessageClass.status.Summary --> o status atual da mensagem de saída <!-- END REF -->. Essa propriedade pode ser definida com a função [`setStatus()`](setstatus).

<!-- END REF -->
