---
id: vp-get-sheet-name
title: VP Get sheet name
---

<!-- REF #_method_.VP Get sheet name.Syntax -->

**VP Get sheet name** ( _vpAreaName_ : Text ; _sheet_ : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| sheet      | Integer | -> | Índice da folha                            |                  |
| Resultado  | Text    | <- | Nome da folha                              | <!-- END REF --> |

#### Descrição

The `VP Get sheet name` command <!-- REF #_method_.VP Get sheet name.Summary -->returns the name of a sheet based on its index in _vpAreaName_.<!-- END REF -->

Em _vpAreaName_, passe o nome da área 4D View Pro.

In _sheet_, pass the index of the sheet whose name will be returned.

Se o índice de folha passado não existir, o método devolve um nome vazio.

> A indexação começa em 0.

#### Exemplo

Obtém o nome da terceira folha do documento:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### Veja também

[VP Get sheet index](vp-get-sheet-index.md)
