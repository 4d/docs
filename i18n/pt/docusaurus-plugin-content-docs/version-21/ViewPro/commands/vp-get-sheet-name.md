---
id: vp-get-sheet-name
title: VP Get sheet name
---

<!-- REF #_method_.VP Get sheet name.Syntax -->

**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                  |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro |                  |
| sheet      | Integer | ->                          | Índice da folha                            |                  |
| Resultado  | Text    | <- | Nome da folha                              | <!-- END REF --> |

## Descrição

O comando `VP Get sheet name` <!-- REF #_method_.VP Get sheet name.Summary -->retorna o nome de uma planilha com base em seu índice em *vpAreaName*.<!-- END REF -->

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *sheet*, passe o índice da folha cujo nome será devolvido.

Se o índice de folha passado não existir, o método devolve um nome vazio.

> A indexação começa em 0.

## Exemplo

Obtém o nome da terceira folha do documento:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

## Veja também

[VP Get sheet index](vp-get-sheet-index.md)
