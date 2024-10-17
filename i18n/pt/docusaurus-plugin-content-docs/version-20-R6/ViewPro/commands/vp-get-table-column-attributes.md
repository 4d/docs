---
id: vp-get-table-column-attributes
title: VP Get column attributes
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP Get table column attributes.Syntax -->

**VP Get table column attributes** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table column attributes.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| tableName  | Text    | ->                          | Nome da tabela                                              |                  |
| column     | Integer | ->                          | Índice da coluna na tabela                                  |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Object  | <- | Atributos da *coluna*                                       | <!-- END REF --> |

#### Descrição

The `VP Get table column attributes` command <!-- REF #_method_.VP Get table column attributes.Summary -->returns the current attributes of the specified *column* in the *tableName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *sheet*, passe o índice da folha de destino. Se nenhum indice for especcificado ou se passar -1, o comando se aplica a folha atual.

> A indexação começa em 0.

The command returns an object describing the current attributes of the *column*:

| Propriedade         | Tipo    | Descrição                                                                                                                               |
| ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nome da propriedade da coluna da tabela no contexto de dados. Não devolvido se a tabela for apresentada automaticamente |
| name                | text    | Nome da coluna da tabela.                                                                                               |
| footerText          | text    | Valor do rodapé da coluna.                                                                                              |
| footerFormula       | text    | Fórmula do rodapé da coluna.                                                                                            |
| filterButtonVisible | boolean | True se o botão de filtro da coluna da tabela for exibido, senão False                                                                  |

Se *tableName* não for encontrado ou se o índice *column* for maior que o número de colunas, o comando retorna **null**.

#### Exemplo

```4d
var $attributes : Object
$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)
If ($attributes.dataField#"")
     ...
End if
```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
