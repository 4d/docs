---
id: vp-find-table
title: VP Find table
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP Find table.Syntax -->

**VP Find table** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

| Parâmetro  | Tipo   |                             | Descrição            |                  |
| ---------- | ------ | --------------------------- | -------------------- | ---------------- |
| rangeObj   | Object | ->                          | Intervalo de células |                  |
| Resultados | Text   | <- | Nome da tabela       | <!-- END REF --> |

## Descrição

O comando `VP Find table` <!-- REF #_method_.VP Find table.Summary -->retorna o nome da tabela ao qual a célula *rangeObj* pertence<!-- END REF -->.

Em *rangeObj*, passar um objeto de intervalo de células. Se as células designadas não pertencerem a uma tabela, o comando retornará uma string vazia.

Se *rangeObj* não for um intervalo de células ou contiver vários intervalos, será usada a primeira célula do primeiro intervalo.

## Exemplo

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("The "+$tableName+" table has been modified.")
     End if 
End if
```

## Veja também

[VP Get table range](vp-get-table-range.md)




