---
id: vp-add-range-name
title: VP ADD RANGE NAME
---

<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->

**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

| Parâmetro | Tipo   |    | Descrição                     |                  |
| --------- | ------ | -- | ----------------------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo              |                  |
| name      | Text   | -> | Nome da fórmula               |                  |
| options   | Object | -> | Opções para a fórmula nomeada | <!-- END REF --> |

#### Descrição

O comando `VP ADD RANGE NAME` <!-- REF #_method_.VP ADD RANGE NAME.Summary -->cria ou modifica um intervalo nomeado no documento aberto<!-- END REF -->.

> Os intervalos nomeados criados por este comando são guardados com o documento.

Em *rangeObj*, passe o intervalo que você deseja nomear e, em *name*, passe o novo nome para o intervalo. Se o nome já estiver a ser utilizado no mesmo âmbito, o novo intervalo nomeado substitui o existente. Note que pode utilizar o mesmo nome para diferentes âmbitos (ver abaixo).

Pode passar um objeto com propriedades adicionais para a fórmula nomeada em *options*. As propriedades abaixo são compatíveis:

| Propriedade | Tipo   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope       | Number | Âmbito do intervalo. Você pode passar o índice da planilha (a contagem começa em 0) ou usar as seguintes constantes: <li>`vk current sheet``vk</li><li> workbook`O</li>escopo determina se um nome de intervalo é local em uma determinada planilha (*scope*=sheet index ou `vk current sheet`) ou global em toda a pasta de trabalho (*scope*=`vk workbook`). |
| comment     | Text   | Comentário associado ao intervalo nomeado                                                                                                                                                                                                                                                                                                                                                                                                                               |

> - Um intervalo nomeado é, na verdade, uma fórmula nomeada que contém coordenadas. `VP ADD RANGE NAME` facilitates the creation of named ranges, but you can also use the [`VP ADD FORMULA NAME`](vp-add-formula-name.md) method to create named ranges.
> - As fórmulas que definem intervalos nomeados podem ser recuperadas com o método [`VP Get formula by name`] (vp-get-formula-by-name.md).

#### Exemplo

Pretende criar um intervalo nomeado para um intervalo de células:

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Veja também

[VP Get names](vp-get-names.md)<br/>
[VP Name](vp-name.md)
