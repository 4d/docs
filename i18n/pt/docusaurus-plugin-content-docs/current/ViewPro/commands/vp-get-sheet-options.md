---
id: vp-get-sheet-options
title: VP Get sheet options
---

<!-- REF #_method_.VP Get sheet options.Syntax -->

**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome da área 4D View Pro no formulário                      |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Object  | <- | Objecto opções de folha                                     | <!-- END REF --> |

## Descrição

O comando `VP Get sheet options` <!-- REF #_method_.VP Get sheet options.Summary --> retorna um objeto que contém as opções atuais da área *vpAreaName*<!-- END REF -->.

Passe o nome da área 4D View Pro em *vpAreaName*. Se passar um nome que não existe, é devolvido um erro.

No parâmetro opcional *sheet*, pode designar uma planilha específica (a contagem começa em 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

## Objeto devolvido

O método devolve um objeto que contém os valores atuais de todas as opções de folha disponíveis Um valor opção pode ter sido modificado pelo usuário ou pelo método [VP SET SHEET OPTIONS](vp-set-sheet-options.md).

Para ver a lista completa das opções, consulte [Opções folha](../configuring.md#sheet-options).

## Exemplo

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) //column headers are visible
    ... //do something End if
```

## Veja também

[4D VIEW PRO SHEET OPTIONS](../configuring.md#sheet-options)<br/>
[VP SET SHEET OPTIONS](vp-set-sheet-options.md)