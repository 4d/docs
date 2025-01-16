---
id: vp-remove-name
title: VP REMOVE NAME
---

<!-- REF #_method_.VP REMOVE NAME.Syntax -->

**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                |                  |
| name       | Text    | -> | Nome do intervalo nomeado ou da fórmula nomeada a remover |                  |
| scope      | Integer | -> | Âmbito alvo (padrão=folha atual)       | <!-- END REF --> |

#### Descrição

The `VP REMOVE NAME` command <!-- REF #_method_.VP REMOVE NAME.Summary -->removes the named range or named formula passed in the *name* parameter in the defined *scope*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Passe o intervalo ou a fórmula nomeada que você deseja remover no *name*.

You can define where to remove the name in *scope* using either the sheet index (counting begins at 0) or the following constants:

- `vk current sheet`
- `vk workbook`

#### Exemplo

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```

#### Veja também

[VP Name](vp-name.md)
