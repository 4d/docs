---
id: vp-get-table-dirty-rows
title: VP Get table dirty rows
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R8 | Adicionado |

</details>

<!-- REF #_method_.VP Get table dirty rows.Syntax -->

**VP Get table dirty rows** ( _vpAreaName_ : Text ; _tableName_ : Text { ; _reset_ : Boolean {; _sheet_ : Integer }} ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get table dirty rows.Params -->

| Parâmetro  | Tipo       |    | Descrição                                                                                 |                  |
| ---------- | ---------- | -- | ----------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nome de objeto formulário área 4D View Pro                                                |                  |
| tableName  | Text       | -> | Nome da tabela                                                                            |                  |
| reset      | Parâmetros | -> | True para apagar o estado "dirty" da tabela atual, False para mantê-lo igual. Padrão=True |                  |
| sheet      | Integer    | -> | Índice da folha (folha atual se omitida)                               |                  |
| Resultados | Collection | <- | Collection of objects with all the items modified since the last reset                    | <!-- END REF --> |

#### Descrição

The `VP Get table dirty rows` command <!-- REF #_method_.VP Get table dirty rows.Summary -->returns a collection of _dirty row_ objects, containing items that were modified since the last reset in the specified _tableName_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro.

In _tableName_, pass the name of the table for which you want to get the dirty rows. Only modified columns bound to a [data context](vp-set-data-context.md) will be taken into account.

By default, calling the command will clear the _dirty_ status from the current table. To keep this status untouched, pass `False` in the _reset_ parameter.

In _sheet_, pass the index of the target sheet. Se nenhum indice for especcificado ou se passar -1, o comando se aplica a folha atual.

> A indexação começa em 0.

Each _dirty row_ object in the returned collection contains the following properties:

| Propriedade  | Tipo    | Descrição                             |
| ------------ | ------- | ------------------------------------- |
| item         | object  | Objeto modificado da linha modificada |
| originalItem | object  | Objeto antes da modificação           |
| row          | integer | Índice da linha modificada            |

If _tableName_ is not found or if it does not contain a modified column, the command returns an empty collection.

#### Exemplo

Pretende contar o número de linhas editadas:

```4d
var $dirty : Collection
$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)
VP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)
```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
