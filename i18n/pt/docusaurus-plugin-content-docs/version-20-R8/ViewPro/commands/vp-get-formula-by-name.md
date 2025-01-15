---
id: vp-get-formula-by-name
title: VP Get formula by name
---

<!-- REF #_method_.VP Get formula by name.Syntax -->

**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                           |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro          |                  |
| name       | Text    | ->                          | Nome do intervalo nomeado                           |                  |
| scope      | Integer | ->                          | Âmbito alvo (padrão=folha atual) |                  |
| Resultados | Object  | <- | Definição da fórmula nomeada ou intervalo nomeado   | <!-- END REF --> |

#### Descrição

The `VP Get formula by name` command <!-- REF #_method_.VP Get formula by name.Summary --> returns the formula and comment corresponding to the named range or named formula passed in the *name* parameter, or **null** if it does not exist in the defined scope<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Passe o intervalo com nome ou a fórmula com nome que quiser obter em *name*. Note que os intervalos com nome são devolvidos como fórmulas que contém referências absolutas de células.

You can define where to get the formula in *scope* using either the sheet index (counting begins at 0) or the following constants:

- `vk current sheet`
- `vk workbook`

##### Objecto devolvido

O objeto retornado contém as propriedades abaixo:

| Propriedade | Tipo | Descrição                                                                                                                                                                                |
| ----------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula     | Text | Texto da fórmula correspondente à fórmula nomeada ou intervalo nomeado. Para os intervalos nomeados, a fórmula é uma sequência de coordenadas absolutas. |
| comment     | Text | Comentário correspondente à fórmula nomeada ou ao intervalo nomeado                                                                                                                      |

#### Exemplo

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1
 
$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```

#### Veja também

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP Get names](vp-get-names.md)
