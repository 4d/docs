---
id: vp-copy-to-object
title: VP Copy to object
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

<!-- REF #_method_.VP Copy to object.Syntax -->

**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                   |                  |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------- | ---------------- |
| rangeObj   | Object | ->                          | Objeto intervalo                                            |                  |
| options    | Object | ->                          | Opções adicionais                                           |                  |
| Resultados | Object | <- | Objecto devolvido. Contém os dados copiados | <!-- END REF --> |

## Descrição

O comando `VP Copy to object` <!-- REF #_method_.VP Copy to object.Summary -->copia o conteúdo, o estilo e as fórmulas de *rangeObj* para um objeto<!-- END REF -->.

Em *rangeObj*, passe o intervalo de células com os valores, a formatação e as fórmulas a serem copiadas. Se *rangeObj* for um intervalo combinado, somente o primeiro será usado.

Você pode passar um parâmetro *options* opcional com as seguintes propriedades:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| copy        | Parâmetros | *Verdadeiro* (padrão) para manter os valores copiados, a formatação e as fórmulas após a execução do comando. *Falso* para removê-los.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| copyOptions | Integer    | Especifica o que é copiado ou movido. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Copies all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copies only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copies only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copies the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Copies only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copies the values and formatting.</td></tr></table></p> |

As opções de colagem definidas nas [opções de workbook](#vp-set-workbook-options) são tomadas em conta.

O comando retorna um objeto que contém os dados copiados.

## Exemplo

Esse exemplo de código primeiro armazena o conteúdo, os valores, a formatação e as fórmulas de um intervalo em um objeto e, em seguida, cola-os em outro intervalo:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

## Veja também

[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)

