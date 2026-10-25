---
id: mcp
title: MCP
slug: /commands/mcp
displayed_sidebar: docs
---

<!-- REF #_command_.MCP.Syntax -->**MCP** : 4D.MCPContext<!-- END REF -->
<!--REF #_command_.MCP.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | [4D.MCPContext](../../API/MCPContextClass.md) | &#8592; | Context of the current MCP tool call |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Created|

</details>
</div>

## Description

The `MCP` command <!-- REF #_command_.MCP.Summary -->returns the `4D.MCPContext` object of the current call of a tool of the MCP server<!-- END REF -->.

The [`4D.MCPContext`](../../API/MCPContextClass.md) object gives information about the call ([`.toolName`](../../API/MCPContextClass.md#toolname), [`.clientInfo`](../../API/MCPContextClass.md#clientinfo), [`.canElicit`](../../API/MCPContextClass.md#canelicit)) and lets the tool:

- ask the user for a confirmation or for values before running an action ([`.requireInput()`](../../API/MCPContextClass.md#requireinput), [`.hasInput()`](../../API/MCPContextClass.md#hasinput), [`.input`](../../API/MCPContextClass.md#input), [`.bound`](../../API/MCPContextClass.md#bound)),
- return an error to the client ([`.error()`](../../API/MCPContextClass.md#error)).

The context is available while an [`exposed MCP Function`](../../ORDA/ordaClasses.md#exposed-mcp-function) runs as a tool of the [MCP server](../../WebServer/mcp-server.md), including in the methods and functions it calls.

Outside an MCP tool call (for example in a REST request or in a method run from the 4D environment), `MCP` returns an inert object:

- `.hasInput()` returns **False**,
- `.requireInput()` asks nothing and returns *Null*,
- `.error()` does nothing,
- `.toolName` is an empty string, `.clientInfo` is *Null*, and `.canElicit` is **False**.

For more information, see [Asking the user for confirmation](../../WebServer/mcp-server.md#asking-the-user-for-confirmation).

## Example 1

You want the user to confirm the deletion of an order before it is dropped:

```4d
// cs.OrderEntity class
Class extends Entity

// Deletes the order
exposed MCP Function delete() : Text
	If (Not(MCP.hasInput("confirm")))
		MCP.requireInput({message: "Delete order "+String(This.ID)+"?"; confirm: {type: "boolean"; title: "Delete"}}; This.getStamp())
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

## Example 2

A method called both by an MCP tool and by other code checks whether it runs in an MCP tool call:

```4d
var $context : 4D.MCPContext:=MCP
If ($context.toolName="")
	// not called from an MCP tool: $context is inert
End if
```

## See also

[MCPContext class](../../API/MCPContextClass.md)  
[MCP server](../../WebServer/mcp-server.md)  
[Session](../../commands/session)

## Properties

|  |  |
| --- | --- |
| Command number | 1872 |
| Thread safe | yes |
