---
id: vp-add-sheet
title: VP ADD SHEET
---

<!-- REF #_method_.VP ADD SHEET.Syntax -->

**VP ADD SHEET** ( _vpAreaName_ : Text )<br/>**VP ADD SHEET** ( _vpAreaName_ : Text ; _index_ : Integer )<br/>**VP ADD SHEET** ( _vpAreaName_ : Text ; _sheet_ : Integer ; _name_ : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| sheet      | Integer | -> | Índice da nova folha                       |                  |
| name       | Text    | -> | Nome da folha                              | <!-- END REF --> |

#### Descrição

O comando `VP ADD SHEET` <!-- REF #_method_.VP ADD SHEET.Summary -->insere uma folha no documento carregado em _vpAreaName_.<!-- END REF -->

Em _vpAreaName_, passe o nome da área 4D View Pro.

Em _sheet_, você pode passar um índice para a nova planilha. Se o _índice_ passado é inferior a ou igual a 0, o comando insere a nova folha no início. Se _índice_ exceder o número de folhas, o comando insere a nova folha após as já existentes.

> A indexação começa em 0.

Em _name_, pode indicar um nome para a nova folha. O novo nome não pode conter os seguintes caracteres: `*, :, [, ], ?,\,/`

#### Exemplo

O documento tem atualmente 3 folhas:

![vp-document-with-3-sheets](../../assets/en/ViewPro/vp-sheet-3.png)

Para inserir uma folha na terceira posição (índice 2) e chamar-lhe "March":

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../../assets/en/ViewPro/vp-add-sheet.png)

#### Veja também

[VP REMOVE SHEET](vp-remove-sheet.md)
