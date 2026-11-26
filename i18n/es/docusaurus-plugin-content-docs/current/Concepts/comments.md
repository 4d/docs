---
id: comments
title: Comentarios
---

## Básicos

Los comentarios son líneas de instrucciones inactivas. Estas líneas no son interpretadas por el programa 4D y no se ejecutan cuando el código se llama. Specific features rely on comments for documenting and tagging your code.

Hay dos maneras de crear comentarios:

- `//` para crear una línea de comentario
- `/* ... */` for inline or multiline comments.

Ambos estilos de comentarios pueden utilizarse simultáneamente.

### Comentarios de una línea (`//comentario`)

Inserte `//` al principio de una línea o después de una instrucción para añadir una línea de comentario. Ejemplo:

```4d
//Este es un comentario
For($vCounter;1;100) //Bucle inicial
  //comentario
  //comentario
  //comentario
End for
```

### Comentarios en línea o multilínea (`/*comment*/`)

Rodea el contenido con los caracteres `/*` ... `*/` para para crear bloques de comentarios en línea o multilíneas. Tanto los bloques de comentarios en línea como los multilínea comienzan con `/*` y terminan con `*/`.

- Las **líneas de comentarios en línea** se pueden insertar en cualquier parte del código. Ejemplo:

```4d
For /* inline comment */ ($vCounter;1;100)
	...
End for
```

- **Multiline comment blocks** allow commenting an unlimited number of lines. Los bloques de comentarios pueden anidarse (útil desde que el editor de código 4D soporta los bloques contraídos). Ejemplo:

```4d
For ($vCounter;1;100)
/*
comentarios  
    /* 
    otros comentarios
    */
*/
```

## Comments for syntax description

Comments can describe the syntax of your methods, class functions, or constructors.

- For a method, write the comment block in the first lines of the method. In the 4D code editor, comments are displayed in its [Help tips](../code-editor/write-class-method.md#help-tips) (the 5 first lines are displayed).
- For a class function or constructor, write the comment block immediately above the `Function` or `Class constructor` declaration. Comments are displayed with the signature in 4D code assistance and in VS Code (completion details, help tips, and signature help). Add a dedicated comment for every parameter with the `// $paramName: <text>` syntax (see below).

Ejemplo:

```4d

// Adds or updates a local dependency (as a file URL) in the "dependencies" object of the environment file
// $folder: folder of the dependency to register
// $optionalName: optional dependency name (defaults to the folder's full name)
#DECLARE($folder : 4D.Folder; $optionalName : Text)

//...code

```

The comment block follows these rules:

- It is made of `//` lines and/or a `/* */` block. Each line of a `/* */` block is handled like a `//` line, and the `/*` and `*/` markers are not displayed.
- For a class function or constructor, it must be placed immediately above the declaration. A blank line between the comment block and the declaration breaks the association: only the signature is displayed.
- Each comment block is associated only with the next declaration, even when it is written right after the code of the previous function.
- Only the saved code is read: after you edit a comment, the code assistance shows the new text once the class is saved.
- The text is displayed as plain text: Markdown markers such as `**` or `*` are shown as written.

#### Ejemplo 1

You want to document a function and its parameter so that they are displayed in the code editor:

```4d
// Class: Invoice

// Returns the price with taxes
// The rate is a percentage
// $rate: tax rate to apply (20 for 20%)
Function priceWithTaxes($rate : Real) : Real
	return This.price*(1+($rate/100))
```

When you type `$invoice.priceWithTaxes(` in a method, the help displays the signature with:

```
Returns the price with taxes
The rate is a percentage

$rate: tax rate to apply (20 for 20%)
```

#### Ejemplo 2

You want to document a class constructor with a `/* */` block:

```4d
// Class: Counter
property value : Integer
property name : Text

/*
Creates a counter starting at a value
$start: initial value of the counter
{$name}: name of the counter
*/
Class constructor($start : Integer; $name : Text)
	This.value:=$start
	This.name:=$name || "default name"
```

You can display:

![tips](../assets/en/Concepts/comments-tips.png)

## Comments for specific features

### MCP tool

When a function is published as an **MCP tool**, its comments are used to provide [MCP tool code description](../WebServer/mcp-server.md#describing-the-tools), including MCP behavior tags.

### Marcadores de navegación en el código

Code navigation markers such as `MARK:`, `TODO:`, and `FIXME:` are inserted through comments. See [Manual tagging](../code-editor/write-class-method.md#manual-tagging).

