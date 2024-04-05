---
id: vp-add-formula-name
title: VP ADD FORMULA NAME
---

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( _vpAreaName_ : Text ; _vpFormula_ : Text ; _name_ : Text { ; _options_ : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| Parâmetro  | Tipo   |    | Descrição                                  |                  |
| ---------- | ------ | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text   | -> | Nome de objeto formulário área 4D View Pro |                  |
| vpFormula  | Text   | -> | Fórmula 4D View Pro                        |                  |
| name       | Text   | -> | Nome da fórmula                            |                  |
| options    | Object | -> | Opções para a fórmula nomeada              | <!-- END REF --> |

#### Descrição

O comando `VP ADD FORMULA NAME` <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->cria ou modifica uma fórmula nomeada no documento aberto<!-- END REF -->.

> As fórmulas nomeadas criadas por este comando são guardadas com o documento.

Em _vpAreaName_, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Passar a fórmula 4D View Pro que deseja nomear em _vpFormula_. For detailed information about formula syntax, see [Formulas and Functions](../formulas.md) page.

Passar o novo nome da fórmula em _name_. Se o nome já estiver a ser utilizado no mesmo âmbito, a nova fórmula nomeada substitui a existente. Note que pode utilizar o mesmo nome para diferentes âmbitos (ver abaixo).

Pode passar um objeto com propriedades adicionais para a fórmula nomeada em _options_. As propriedades abaixo são compatíveis:

| Propriedade | Tipo   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope       | Number | Escopo da fórmula. Você pode passar o índice da planilha (a contagem começa em 0) ou usar as seguintes constantes: <li>`vk current sheet``vk</li><li> workbook`O</li>escopo determina se o nome de uma fórmula é local para uma determinada planilha (_scope_=sheet index ou `vk current sheet`) ou global para toda a pasta de trabalho (_scope_=`vk workbook`). |
| comment     | Text   | Comentário associado à fórmula nomeada                                                                                                                                                                                                                                                                                                                                                                                     |

#### Exemplo

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Veja também

[Cell references](../formulas.md#cell-references)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Get names](vp-get-names.md)
