---
id: MCPContextClass
title: MCPContext
---

A classe `MCPContext` fornece informações sobre a chamada atual de uma ferramenta do [servidor MCP](../WebServer/mcp-server.md) e permite que a ferramenta solicite ao usuário uma confirmação ou valores antes de executar uma ação (consulte [Solicitando confirmação do usuário](../WebServer/mcp-server.md#asking-the-user-for-confirmation)).

<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R6|Classe adicionada|

</details>

### Objeto MCPContext

Objetos `MCPContext` são retornados pelo comando [`MCP`](../commands/mcp).

O objeto é anexado ao processo enquanto uma função de [ferramenta personalizada](../WebServer/mcp-server.md#custom-tools) é executada, e está disponível nos métodos e funções chamados por essa função. Em qualquer outro lugar (por exemplo, em uma requisição REST ou em um método executado a partir do ambiente 4D), o objeto é inerte: suas funções não fazem nada e suas propriedades ficam vazias.

### Resumo

||
|---|
|[<!-- INCLUDE #MCPContextClass.bound.Syntax -->](#bound)<br/><!-- INCLUDE #MCPContextClass.bound.Summary -->|
|[<!-- INCLUDE #MCPContextClass.canElicit.Syntax -->](#canelicit)<br/><!-- INCLUDE #MCPContextClass.canElicit.Summary -->|
|[<!-- INCLUDE #MCPContextClass.clientInfo.Syntax -->](#clientinfo)<br/><!-- INCLUDE #MCPContextClass.clientInfo.Summary -->|
|[<!-- INCLUDE #MCPContextClass.error().Syntax -->](#error)<br/><!-- INCLUDE #MCPContextClass.error().Summary -->|
|[<!-- INCLUDE #MCPContextClass.hasInput().Syntax -->](#hasinput)<br/><!-- INCLUDE #MCPContextClass.hasInput().Summary -->|
|[<!-- INCLUDE #MCPContextClass.input.Syntax -->](#input)<br/><!-- INCLUDE #MCPContextClass.input.Summary -->|
|[<!-- INCLUDE #MCPContextClass.requireInput().Syntax -->](#requireinput)<br/><!-- INCLUDE #MCPContextClass.requireInput().Summary -->|
|[<!-- INCLUDE #MCPContextClass.toolName.Syntax -->](#toolname)<br/><!-- INCLUDE #MCPContextClass.toolName.Summary -->|



<!-- REF mcpcontext.bound.Desc -->
## .bound

<!-- REF #MCPContextClass.bound.Syntax -->**.bound** : any<!-- END REF -->

#### Descrição

A propriedade `.bound` contém <!-- REF #MCPContextClass.bound.Summary -->o valor *bind* passado para `.requireInput()` quando a entrada foi solicitada, conforme verificado pelo 4D<!-- END REF -->.

O valor retorna assinado junto com as respostas do usuário, assim a função pode compará-lo com o valor atual e detectar uma alteração que ocorreu enquanto o usuário respondia (por exemplo, uma entity modificada). Fica vazio quando a chamada não traz respostas verificadas.

O valor *bind* é assinado, não criptografado: o cliente pode lê-lo.

Esta propriedade é **somente leitura**.

#### Exemplo

Você verifica se a entity não foi modificada enquanto o usuário confirmava sua exclusão:

```4d
If (MCP.bound#This.getStamp())
	MCP.error("The record was modified, please try again")
	return
End if
```

<!-- END REF -->


<!-- REF mcpcontext.canElicit.Desc -->
## .canElicit

<!-- REF #MCPContextClass.canElicit.Syntax -->**.canElicit** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.canElicit` contém <!-- REF #MCPContextClass.canElicit.Summary -->**True** se o cliente MCP pode exibir formulários de entrada<!-- END REF --> (declarou a capacidade `elicitation` na requisição), e **False** caso contrário ou fora de uma chamada de ferramenta MCP.

Quando `.canElicit` é **False**, [`.requireInput()`](#requireinput) não solicita nada e a chamada retorna o erro "This action requires a confirmation your client cannot display".

Esta propriedade é **somente leitura**.

#### Exemplo

Você retorna uma mensagem clara quando o cliente não pode exibir a confirmação:

```4d
If (Not(MCP.canElicit))
	MCP.error("Please confirm this action from the application")
	return
End if
```

<!-- END REF -->


<!-- REF mcpcontext.clientInfo.Desc -->
## .clientInfo

<!-- REF #MCPContextClass.clientInfo.Syntax -->**.clientInfo** : Object<!-- END REF -->

#### Descrição

A propriedade `.clientInfo` contém <!-- REF #MCPContextClass.clientInfo.Summary -->informações sobre o cliente MCP que enviou a requisição<!-- END REF -->, conforme fornecido nos metadados (`_meta`) da requisição, por exemplo, seu nome e versão. É *Null* fora de uma chamada de ferramenta MCP.

Esta propriedade é **somente leitura**.

#### Exemplo

Você registra o cliente que chamou a ferramenta:

```4d
var $client:=MCP.clientInfo
If ($client#Null)
	LOG EVENT(Into 4D debug message; "MCP call from "+String($client.name))
End if
```

<!-- END REF -->


<!-- REF mcpcontext.error().Desc -->
## .error()

<!-- REF #MCPContextClass.error().Syntax -->**.error**( { *message* : Text } )<!-- END REF -->

<!-- REF #MCPContextClass.error().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|message|Text|&#8594;|Mensagem de erro retornada ao cliente|
</div>
<!-- END REF -->

#### Descrição

A função `.error()` <!-- REF #MCPContextClass.error().Summary -->faz com que a chamada atual da ferramenta retorne um resultado de erro com *message*<!-- END REF -->. O resultado tem `isError: true`, e o valor retornado pela função é ignorado. Se *message* for omitido, a mensagem de erro fica vazia.

`.error()` não interrompe a execução da função: chame `return` após ela, se necessário.

Fora de uma chamada de ferramenta MCP, `.error()` não faz nada.

#### Exemplo

Você recusa um valor muito alto:

```4d
exposed MCP Function refund($amount : Real) : Text
	If ($amount>1000)
		MCP.error("Refunds over 1000 must be done by an accountant")
		return
	End if
	// ...
```

<!-- END REF -->


<!-- REF mcpcontext.hasInput().Desc -->
## .hasInput()

<!-- REF #MCPContextClass.hasInput().Syntax -->**.hasInput**( { *name* : Text } ) : Boolean<!-- END REF -->

<!-- REF #MCPContextClass.hasInput().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|name|Text|&#8594;|Nome de um campo solicitado com `.requireInput()`|
|Result|Boolean|&#8592;|True se o usuário respondeu este campo (ou qualquer campo se *name* for omitido)|
</div>
<!-- END REF -->

#### Descrição

A função `.hasInput()` <!-- REF #MCPContextClass.hasInput().Summary -->retorna **True** se a chamada atual contém uma resposta verificada do usuário para o campo *name*<!-- END REF -->.

Se *name* for omitido ou vazio, `.hasInput()` retorna **True** se a chamada atual contém uma resposta verificada do usuário para pelo menos um campo.

A resposta é verificada quando o cliente chama a ferramenta novamente com as respostas e um `requestState` válido: assinado pelo 4D para o mesmo token, ferramenta, argumentos e campos, há menos de 10 minutos, e desde que o servidor MCP foi ativado pela última vez. Caso contrário, `.hasInput()` retorna **False**.

Fora de uma chamada de ferramenta MCP, `.hasInput()` retorna **False**.

#### Exemplo

Você solicita uma confirmação apenas se o usuário ainda não respondeu:

```4d
If (Not(MCP.hasInput("confirm")))
	MCP.requireInput({confirm: {type: "boolean"; title: "Send the invoice to the customer"}})
	return
End if
```

<!-- END REF -->


<!-- REF mcpcontext.input.Desc -->
## .input

<!-- REF #MCPContextClass.input.Syntax -->**.input** : Object<!-- END REF -->

#### Descrição

A propriedade `.input` contém <!-- REF #MCPContextClass.input.Summary -->as respostas verificadas do usuário, uma propriedade para cada campo solicitado com `.requireInput()`<!-- END REF -->. Apenas respostas cujo tipo corresponde ao tipo do campo solicitado são mantidas.

Não contém nenhuma resposta quando a chamada não traz respostas verificadas, ou fora de uma chamada de ferramenta MCP.

Esta propriedade é **somente leitura**.

#### Exemplo

Você utiliza o comentário inserido pelo usuário:

```4d
If (MCP.hasInput("comment"))
	This.closingComment:=MCP.input.comment
End if
```

<!-- END REF -->


<!-- REF mcpcontext.requireInput().Desc -->
## .requireInput()

<!-- REF #MCPContextClass.requireInput().Syntax -->**.requireInput**( *fields* : Object {; *bind* : any} ) : Object<!-- END REF -->

<!-- REF #MCPContextClass.requireInput().Params -->
<div class="no-index">

|Parâmetro|Tipo||Descrição|
|---|---|---|---|
|fields|Object|&#8594;|Mensagem e campos a serem exibidos para o usuário|
|bind|any|&#8594;|Valor assinado com as respostas, retornado em `.bound`|
|Result|Object|&#8592;|*Null* quando a entrada é solicitada|
</div>
<!-- END REF -->

#### Descrição

A função `.requireInput()` <!-- REF #MCPContextClass.requireInput().Summary -->solicita ao usuário, através do cliente MCP, o preenchimento de um formulário antes que a ferramenta continue<!-- END REF -->.

Em *fields*, passe um objeto com:

- uma propriedade opcional `message` (Text): o texto exibido para o usuário,
- uma propriedade para cada campo a ser exibido, cujo nome é o nome do campo e cujo valor é o JSON Schema de um campo `"boolean"`, `"string"`, `"number"` ou `"integer"` (por exemplo, `{type: "boolean"; title: "Confirm"}`). Um campo é obrigatório, a menos que seu schema contenha `required: False`.

Quando a função da ferramenta retorna, o 4D responde à chamada com `resultType: "input_required"`, o formulário e um `requestState` assinado pelo 4D. O cliente exibe o formulário e, em seguida, chama a ferramenta novamente com as respostas. A função então é executada novamente **desde o início**: [`.hasInput()`](#hasinput) retorna **True** para os campos respondidos e [`.input`](#input) contém as respostas. Se as respostas já estiverem presentes e *bind* tiver o mesmo valor de quando a entrada foi solicitada, `.requireInput()` não solicita novamente.

Em *bind*, você pode passar um valor para vincular às respostas, como o stamp de uma entity: ele é assinado junto com as respostas e retornado em [`.bound`](#bound) quando o cliente chama a ferramenta novamente, para que você possa verificar se nada mudou nesse meio tempo. Se *bind* mudou, a entrada é solicitada novamente.

Se o cliente não puder exibir formulários (consulte [`.canElicit`](#canelicit)), `.requireInput()` não solicita nada e a chamada retorna o erro "This action requires a confirmation your client cannot display".

Fora de uma chamada de ferramenta MCP, `.requireInput()` não solicita nada e retorna *Null*.

:::caution

Não solicite segredos como senhas com `.requireInput()`: as respostas passam pelo cliente de IA.

:::

#### Exemplo

Você solicita ao usuário a confirmação do fechamento de um ticket e a inserção de um comentário opcional:

```4d
// cs.TicketEntity class
Class extends Entity

exposed MCP Function close() : Text
	If (Not(MCP.hasInput("confirm")))
		MCP.requireInput({message: "Close ticket "+String(This.ID)+"?"; confirm: {type: "boolean"; title: "Close"}; comment: {type: "string"; title: "Comment"; required: False}}; This.getStamp())
		return
	End if
	If (MCP.input.confirm)
		This.status:="closed"
		This.comment:=String(MCP.input.comment)
		This.save()
	End if
	return This.status
```

<!-- END REF -->


<!-- REF mcpcontext.toolName.Desc -->
## .toolName

<!-- REF #MCPContextClass.toolName.Syntax -->**.toolName** : Text<!-- END REF -->

#### Descrição

A propriedade `.toolName` contém <!-- REF #MCPContextClass.toolName.Summary -->o nome da ferramenta MCP sendo chamada<!-- END REF -->, por exemplo `"OrderManager-getYearTotal"`. É uma string vazia fora de uma chamada de ferramenta MCP.

Esta propriedade é **somente leitura**.

#### Exemplo

Você executa um método apenas quando ele é chamado por uma ferramenta MCP:

```4d
If (MCP.toolName#"")
	// called from an MCP tool
End if
```

<!-- END REF -->
