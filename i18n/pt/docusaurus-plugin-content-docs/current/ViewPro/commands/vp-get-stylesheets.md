---
id: vp-get-stylesheet
title: VP Get stylesheets
---

<!-- REF #_method_.VP Get stylesheets.Syntax -->

**VP Get stylesheets** ( _vpAreaName_ : Text { ; _sheet_ : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

| Parâmetro  | Tipo       |    | Descrição                                             |                  |
| ---------- | ---------- | -- | ----------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nome de objeto formulário área 4D View Pro            |                  |
| sheet      | Integer    | -> | Âmbito alvo (padrão = folha atual) |                  |
| Resultados | Collection | <- | Collection of style sheet objects                     | <!-- END REF --> |

#### Descrição

The `VP Get stylesheets` command <!-- REF #_method_.VP Get stylesheets.Summary -->returns the collection of defined style sheet objects from the designated _sheet_<!-- END REF -->.

In _vpAreaName_, pass the name property of the 4D View Pro area. Se passar um nome que não existe, é devolvido um erro.

You can define where to get the style sheets in the optional _sheet_ parameter using the sheet index (counting begins at 0) or with the following constants:

- `vk current sheet`
- `vk workbook`

#### Exemplo

O código abaixo retorna a coleção de todos os objetos de estilo na folha atual:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

Nesse caso, a planilha atual usa dois objetos estilo:

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```

#### Veja também

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)
