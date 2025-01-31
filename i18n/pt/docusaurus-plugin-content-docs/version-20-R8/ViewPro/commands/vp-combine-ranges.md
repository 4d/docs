---
id: vp-combine-ranges
title: VP Combine ranges
---

<!-- REF #_method_.VP Combine ranges.Syntax -->

**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

| Parâmetro     | Tipo   |                             | Descrição                                |                  |
| ------------- | ------ | --------------------------- | ---------------------------------------- | ---------------- |
| rangeObj      | Object | ->                          | Objeto intervalo                         |                  |
| otherRangeObj | Object | ->                          | Objeto intervalo                         |                  |
| Resultados    | Object | <- | Objeto que contém um intervalo combinado | <!-- END REF --> |

#### Descrição

O comando `VP Combine Ranges` <!-- REF #_method_.VP Combine ranges.Summary -->retorna um novo objeto de intervalo que incorpora dois ou mais objetos de intervalo existentes<!-- END REF -->. Todos os intervalos devem ser da mesma área 4D View Pro.

Em *rangeObj*, passe o primeiro objeto de intervalo.

Em *otherRangeObj*, passe outro objeto de intervalo para combinar com *rangeObj*.

> O comando incorpora objetos *rangeObj* e *otherRangeObj* por referência.

#### Exemplo

Se quiser combinar objetos de intervalo de células, colunas e linhas em um novo e diferente objeto de intervalo:

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // coluna D
 $row:=VP Row("ViewProArea";9) // linha 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Veja também

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
