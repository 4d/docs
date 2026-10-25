---
id: MCPContextClass
title: MCPContext
---

The `MCPContext` class provides information about the current call of a tool of the [MCP server](../WebServer/mcp-server.md), and lets the tool ask the user for a confirmation or for values before running an action (see [Asking the user for confirmation](../WebServer/mcp-server.md#asking-the-user-for-confirmation)).

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Class added|

</details>

### MCPContext Object

`MCPContext` objects are returned by the [`MCP`](../commands/mcp) command.

The object is attached to the process while a [custom tool](../WebServer/mcp-server.md#custom-tools) function runs, and it is available in the methods and functions called by this function. Anywhere else (for example in a REST request or in a method run from the 4D environment), the object is inert: its functions do nothing and its properties are empty.

### Summary

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

#### Description

The `.bound` property contains <!-- REF #MCPContextClass.bound.Summary -->the *bind* value passed to `.requireInput()` when the input was asked, as verified by 4D<!-- END REF -->.

The value comes back signed with the user's answers, so the function can compare it with the current value and detect a change that occurred while the user was answering (for example, a modified entity). It is empty when the call does not carry verified answers.

The *bind* value is signed, not encrypted: the client can read it.

This property is **read-only**.

#### Example

You check that the entity was not modified while the user was confirming its deletion:

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

#### Description

The `.canElicit` property contains <!-- REF #MCPContextClass.canElicit.Summary -->**True** if the MCP client can display input forms<!-- END REF --> (it declared the `elicitation` capability in the request), and **False** otherwise or outside an MCP tool call.

When `.canElicit` is **False**, [`.requireInput()`](#requireinput) asks nothing and the call returns the error "This action requires a confirmation your client cannot display".

This property is **read-only**.

#### Example

You return a clear message when the client cannot display the confirmation:

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

#### Description

The `.clientInfo` property contains <!-- REF #MCPContextClass.clientInfo.Summary -->information about the MCP client that sent the request<!-- END REF -->, as provided in the metadata (`_meta`) of the request, for example its name and version. It is *Null* outside an MCP tool call.

This property is **read-only**.

#### Example

You log the client that called the tool:

```4d
var $client:=MCP.clientInfo
If ($client#Null)
	LOG EVENT(Into 4D debug message; "MCP call from "+String($client.name))
End if
```

<!-- END REF -->


<!-- REF mcpcontext.error().Desc -->
## .error()

<!-- REF #MCPContextClass.error().Syntax -->**.error**( *message* : Text )<!-- END REF -->

<!-- REF #MCPContextClass.error().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|message|Text|&#8594;|Error message returned to the client|
</div>
<!-- END REF -->

#### Description

The `.error()` function <!-- REF #MCPContextClass.error().Summary -->makes the current tool call return an error result with *message*<!-- END REF -->. The result has `isError: true`, and the value returned by the function is ignored.

`.error()` does not stop the execution of the function: call `return` after it if needed.

Outside an MCP tool call, `.error()` does nothing.

#### Example

You refuse an amount that is too high:

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

<!-- REF #MCPContextClass.hasInput().Syntax -->**.hasInput**( *name* : Text ) : Boolean<!-- END REF -->

<!-- REF #MCPContextClass.hasInput().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|---|---|---|
|name|Text|&#8594;|Name of a field requested with `.requireInput()`|
|Result|Boolean|&#8592;|True if the user answered this field|
</div>
<!-- END REF -->

#### Description

The `.hasInput()` function <!-- REF #MCPContextClass.hasInput().Summary -->returns **True** if the current call contains a verified answer of the user for the *name* field<!-- END REF -->.

The answer is verified when the client calls the tool again with the answers and a valid `requestState`: signed by 4D for the same token, tool, arguments, and fields, less than 10 minutes ago, and since the MCP server was last enabled. Otherwise, `.hasInput()` returns **False**.

Outside an MCP tool call, `.hasInput()` returns **False**.

#### Example

You ask for a confirmation only if the user has not answered yet:

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

#### Description

The `.input` property contains <!-- REF #MCPContextClass.input.Summary -->the verified answers of the user, one property per field requested with `.requireInput()`<!-- END REF -->. Only answers whose type matches the type of the requested field are kept.

It does not contain any answer when the call does not carry verified answers, or outside an MCP tool call.

This property is **read-only**.

#### Example

You use the comment entered by the user:

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

|Parameter|Type||Description|
|---|---|---|---|
|fields|Object|&#8594;|Message and fields to display to the user|
|bind|any|&#8594;|Value signed with the answers, returned in `.bound`|
|Result|Object|&#8592;|*Null* when the input is requested|
</div>
<!-- END REF -->

#### Description

The `.requireInput()` function <!-- REF #MCPContextClass.requireInput().Summary -->asks the user, through the MCP client, to fill in a form before the tool continues<!-- END REF -->.

In *fields*, pass an object with:

- an optional `message` property (Text): the text displayed to the user,
- one property per field to display, whose name is the field name and whose value is the JSON Schema of a `"boolean"`, `"string"`, `"number"`, or `"integer"` field (for example `{type: "boolean"; title: "Confirm"}`). A field is required unless its schema contains `required: False`.

When the tool function returns, 4D answers the call with `resultType: "input_required"`, the form, and a `requestState` signed by 4D. The client displays the form, then calls the tool again with the answers. The function then runs again **from the top**: [`.hasInput()`](#hasinput) returns **True** for the answered fields and [`.input`](#input) contains the answers. If the answers are already there and *bind* has the same value as when the input was asked, `.requireInput()` does not ask again.

In *bind*, you can pass a value to bind to the answers, such as the stamp of an entity: it is signed with the answers and returned in [`.bound`](#bound) when the client calls the tool again, so that you can check that nothing changed in the meantime. If *bind* changed, the input is asked again.

If the client cannot display forms (see [`.canElicit`](#canelicit)), `.requireInput()` asks nothing and the call returns the error "This action requires a confirmation your client cannot display".

Outside an MCP tool call, `.requireInput()` asks nothing and returns *Null*.

:::caution

Do not ask for secrets such as passwords with `.requireInput()`: the answers go through the AI client.

:::

#### Example

You ask the user to confirm the closing of a ticket and to enter an optional comment:

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

#### Description

The `.toolName` property contains <!-- REF #MCPContextClass.toolName.Summary -->the name of the MCP tool being called<!-- END REF -->, for example `"OrderManager-getYearTotal"`. It is an empty string outside an MCP tool call.

This property is **read-only**.

#### Example

You run a method only when it is called by an MCP tool:

```4d
If (MCP.toolName#"")
	// called from an MCP tool
End if
```

<!-- END REF -->
