---
id: mcp
title: MCP
slug: /commands/mcp
displayed_sidebar: docs
---

<!-- REF #_command_.MCP.Syntax -->**MCP** : 4D.MCPContext<!-- END REF -->
<!--REF #_command_.MCP.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado da função | [4D.MCPContext](../../API/MCPContextClass.md) | &#8592; | Contexto da chamada atual da ferramenta MCP |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R6|Criado|

</details>
</div>

## Descrição

O comando `MCP` <!-- REF #_command_.MCP.Summary -->retorna o objeto `4D.MCPContext` da chamada atual de uma ferramenta do servidor MCP<!-- END REF -->.

O objeto [`4D.MCPContext`](../../API/MCPContextClass.md) fornece informações sobre a chamada ([`.toolName`](../../API/MCPContextClass.md#toolname), [`.clientInfo`](../../API/MCPContextClass.md#clientinfo), [`.canElicit`](../../API/MCPContextClass.md#canelicit)) e permite que a ferramenta:

- solicite ao usuário uma confirmação ou valores antes de executar uma ação ([`.requireInput()`](../../API/MCPContextClass.md#requireinput), [`.hasInput()`](../../API/MCPContextClass.md#hasinput), [`.input`](../../API/MCPContextClass.md#input), [`.bound`](../../API/MCPContextClass.md#bound)),
- retorne um erro para o cliente ([`.error()`](../../API/MCPContextClass.md#error)).

O contexto está disponível enquanto uma [`exposed mcp Function`](../../ORDA/ordaClasses.md#exposed-mcp-function) é executada como uma ferramenta do [servidor MCP](../../WebServer/mcp-server.md), inclusive nos métodos e funções que ela chama.

Fora de uma chamada de ferramenta MCP (por exemplo, em uma requisição REST ou em um método executado a partir do ambiente 4D), `MCP` retorna um objeto inerte:

- `.hasInput()` retorna **False**,
- `.requireInput()` não solicita nada e retorna *Null*,
- `.error()` não faz nada,
- `.toolName` é uma string vazia, `.clientInfo` é *Null* e `.canElicit` é **False**.

Para mais informações, consulte [Solicitando confirmação do usuário](../../WebServer/mcp-server.md#asking-the-user-for-confirmation).

## Exemplo 1

Você deseja que o usuário confirme a exclusão de um pedido antes que ele seja removido:

```4d
// cs.OrderEntity class
Class extends Entity

// Deletes the order
exposed mcp Function delete() : Text
	If (Not(MCP.hasInput("confirm")))
		MCP.requireInput({confirm: {type: "boolean"; prompt: "Delete order "+String(This.ID)+"?"}}; This.getStamp())
		return
	End if
	If (MCP.bound#This.getStamp())
		MCP.error("The order was modified, please try again")
		return
	End if
	If (MCP.input.confirm)
		This.drop()
		return "Order deleted"
	End if
	return "Deletion cancelled"
```

## Exemplo 2

Um método chamado tanto por uma ferramenta MCP quanto por outro código verifica se está sendo executado em uma chamada de ferramenta MCP:

```4d
var $context : 4D.MCPContext:=MCP
If ($context.toolName="")
	// not called from an MCP tool: $context is inert
End if
```

## Veja também

- [Classe MCPContext](../../API/MCPContextClass.md)
- [Servidor MCP](../../WebServer/mcp-server.md)
- [Tags de comportamento MCP](../../WebServer/mcp-server.md#mcp-tool-metadata)
- [Session](../../commands/session)

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1872 |
| Thread safe | sim |
