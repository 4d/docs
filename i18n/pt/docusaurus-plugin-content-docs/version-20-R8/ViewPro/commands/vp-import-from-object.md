---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Parâmetro  | Tipo   |    | Descrição                                  |                  |
| ---------- | ------ | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text   | -> | Nome de objeto formulário área 4D View Pro |                  |
| viewPro    | Object | -> | Objecto 4D View Pro                        | <!-- END REF --> |

#### Descrição

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. O documento importado substitui qualquer dado já inserido na área

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Em *viewPro*, passe um objeto 4D View Pro válido. Esse objeto pode ter sido criado usando [VP Export to object] (vp-export-to-object.md) ou manualmente. For more information on 4D View Pro objects, please refer to the [4D View Pro object](../configuring.md#4d-view-pro-object) section.

An error is returned if the *viewPro* object is invalid.

#### Exemplo

Se quiser importar uma folha de cálculo que foi salva previamente em um campo objeto:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Veja também

[VP Export to object](vp-export-to-object.md)
