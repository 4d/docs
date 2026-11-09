---
id: vp-get-stylesheets
title: VP Get stylesheets
---

<!-- REF #_method_.VP Get stylesheets.Syntax -->
**VP Get stylesheets** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->
<div class="no-index">

| Parâmetro  | Tipo       |                             | Descrição                                             |
| ---------- | ---------- | --------------------------- | ----------------------------------------------------- |
| vpAreaName | Text       | ->                          | Nome de objeto formulário área 4D View Pro            |
| sheet      | Integer    | ->                          | Âmbito alvo (padrão = folha atual) |
| Resultados | Collection | <- | Coleção de objectos de folhas de estilo               |

</div>
<!-- END REF -->

## Descrição

O comando `VP Get stylesheets` <!-- REF #_method_.VP Get stylesheets.Summary --> retorna a coleção de objetos de folha de estilo definidos da *folha*<!-- END REF -->.

Em *vpAreaName*, passe o nome da propriedade da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Você pode definir de onde obter as folhas de estilo no parâmetro opcional *sheet* usando o índice da folha (a contagem começa em 0) ou com as seguintes constantes:

* `vk current sheet`
* `vk workbook`  

## Exemplo

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

## Veja também

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)


