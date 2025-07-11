---
id: vp-name
title: VP Name
---

<!-- REF #_method_.VP Name.Syntax -->

**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *sheet* : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                            |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                           |                  |
| rangeName  | Text    | ->                          | Nome do intervalo existente                                          |                  |
| sheet      | Integer | ->                          | Localização do intervalo (folha atual se omitida) |                  |
| Resultados | Object  | <- | Objeto intervalo de nome                                             | <!-- END REF --> |

## Descrição

O comando `VP Name` <!-- REF #_method_.VP Name.Summary -->retorna um novo objeto de intervalo referenciando uma faixa de nome<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

O parâmetro *rangeName* especifica um intervalo de célula nomeada existente.

No parâmetro opcional *sheet*, você pode designar uma planilha específica onde *rangeName* é definido. Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual ou toda a pasta de trabalho com as seguintes constantes:

- `vk current sheet`
- `vk workbook`

## Exemplo

Suponha que pretende atribuir um valor ao intervalo nomeado "Total".

```4d
// nomear a célula B5 como Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4); "Total")
$name:=VP Name("ViewProArea"; "Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

## Veja também

[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP ALL](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Get names](vp-get-names.md)<br/>
[VP REMOVE NAME](vp-remove-name.md)<br/>
[VP Row](vp-row.md)
