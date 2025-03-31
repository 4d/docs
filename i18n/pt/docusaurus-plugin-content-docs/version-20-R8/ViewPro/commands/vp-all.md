---
id: vp-all
title: VP All
---

<!-- REF #_method_.VP All.Syntax -->

**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP All.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Object  | <- | Objeto intervalo de todas as células                        | <!-- END REF --> |

#### Descrição

O comando `VP ALL` <!-- REF #_method_.VP All.Summary -->retorna um novo objeto de intervalo que faz referência a todas as células<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

No parâmetro opcional *sheet*, pode designar uma folha específica onde o intervalo será definido (a contagem começa em 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

#### Exemplo

Pretende definir um objeto intervalo para todas as células da folha atual:

```4d
$all:=VP All("ViewProArea") // todas as células da folha atual
```

#### Veja também

[VP Cell](vp-cell)<br/>
[VP Cells](vp-cells)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
