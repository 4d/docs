---
id: vp-find-table
title: VP Find table
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R7 | Adicionado |

</details>

<!-- REF #_method_.VP Find table.Syntax -->

**VP Find table** ( _rangeObj_ : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

| Parâmetro  | Tipo   |    | Descrição            |                  |
| ---------- | ------ | -- | -------------------- | ---------------- |
| rangeObj   | Object | -> | Intervalo de células |                  |
| Resultados | Text   | <- | Nome da tabela       | <!-- END REF --> |

#### Descrição

The `VP Find table` command <!-- REF #_method_.VP Find table.Summary -->returns the name of the table to which to the _rangeObj_ cell belongs<!-- END REF -->.

In _rangeObj_, pass a cell range object. Se as células designadas não pertencerem a uma tabela, o comando retornará uma string vazia.

If _rangeObj_ is not a cell range or contains multiple ranges, the first cell of the first range is used.

#### Exemplo

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("The "+$tableName+" table has been modified.")
     End if 
End if
```

#### Veja também

[VP Get table range](vp-get-table-range.md)
