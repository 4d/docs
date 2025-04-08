---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<details><summary>História</summary>

| Release | Mudanças                        |
| ------- | ------------------------------- |
| 20 R9   | Support of *paramObj* parameter |

</details>

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object { ; *paramObj* : Object} } ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Parâmetro  | Tipo   |    | Descrição                                    |
| ---------- | ------ | -- | -------------------------------------------- |
| vpAreaName | Text   | -> | Nome de objeto formulário área 4D View Pro   |
| viewPro    | Object | -> | Objecto 4D View Pro                          |
| paramObj   | Object | -> | (Optional) import options |

<!-- END REF -->

## Descrição

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. O documento importado substitui qualquer dado já inserido na área

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Em *viewPro*, passe um objeto 4D View Pro válido. Esse objeto pode ter sido criado usando [VP Export to object] (vp-export-to-object.md) ou manualmente. Para mais informações sobre objetos 4D View Pro, consulte a seção [4D View Pro](../configuring.md#4d-view-pro-object).

An error is returned if the *viewPro* object is invalid.

In *paramObj*, you can pass the following property:

| Propriedade | Tipo                         | Descrição                                                                                                                                                                                                                                                                                         |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula     | 4D. Function | (Optional) Callback function to be executed when the object is loaded and all 4D custom functions have responded. Veja [Passando um método de callback (fórmula)](vp-export-document.md#passing-a-callback-method-formula). |

Os seguintes parâmetros podem ser usados no método de retorno de chamada:

| Parâmetro |                               | Tipo       | Descrição                                                  |
| --------- | ----------------------------- | ---------- | ---------------------------------------------------------- |
| param1    |                               | Text       | O nome do objeto de área 4D View Pro                       |
| param2    |                               | Text       | Reserved for compatibility, this parameter is always empty |
| param3    |                               | Object     | Uma referência ao parâmetro *paramObj* do comando          |
| param4    |                               | Object     | Um objeto devolvido pelo método com uma mensagem de estado |
|           | .success      | Parâmetros | `True` if import was successful, `False` otherwise         |
|           | .errorCode    | Integer    | Código de erro                                             |
|           | .errorMessage | Text       | Mensagem de erro                                           |

:::note

The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## Exemplo

You want to import a spreadsheet that was previously saved in an object field, and trigger a callback function after all 4D custom functions have responded:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)

VP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})
```

```4d
// Method 'onImportComplete'
#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)
   ALERT("The document has been imported, and all custom functions have finished processing.")
```

## Veja também

[VP Export to object](vp-export-to-object.md)