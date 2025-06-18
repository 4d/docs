---
id: vp-get-show-print-lines
title: VP Get show print lines
---

<!-- REF #_method_.VP Get show print lines.Syntax -->

**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #_method_.VP Get show print lines.Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                           |                  |
| ---------- | ---------- | --------------------------- | ------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nome de objeto formulário área 4D View Pro                          |                  |
| sheet      | Integer    | <- | Índice da folha                                                     |                  |
| Resultado  | Parâmetros | <- | True se as linhas de impressão forem visíveis, False caso contrário | <!-- END REF --> |

## Descrição

O comando `VP Get show print lines` <!-- REF #_method_.VP Get show print lines.Summary --> retorna `True` se as linhas de visualização de impressão estiverem visíveis e `False` se elas estiverem ocultas.<!-- END REF -->

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *sheet*, passe o índice da folha de destino. Se *sheet* for omisso, o comando se aplicará à planilha atual.

> A indexação começa em 0.

## Exemplo

O código abaixo comprova se as linhas de visualização prévia são mostradas ou ocultadas no documento:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

## Veja também

[VP SET SHOW PRINT LINES](vp-set-show-print-lines.md)