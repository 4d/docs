---
id: vp-print
title: VP PRINT
---

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( _vpAreaName_ : Text  { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP PRINT` command <!-- REF #_method_.VP PRINT.Summary -->opens a print dialog window to print _vpAreaName_<!-- END REF -->.

Pass the 4D View Pro area to be printed in _vpAreaName_. O comando abrirá a janela de diálogo de impressão do sistema onde a impressora pode ser especificada e as propriedades da página podem ser definidas.

> As propriedades definidas na janela de diálogo de impressão são para o papel de impressora, elas não são as propriedades de impressão para a área 4D View Pro. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](vp-set-print-info.md) command. É altamente recomendável que as propriedades tanto para impressora quanto para correspondência 4D View Pro, caso contrário, o documento impresso pode não corresponder às suas expectativas.

In the optional _sheet_ parameter, you can designate a specific spreadsheet to print (counting begins at 0). Se omitido, a folha atual será usada como padrão. Você pode selecionar explicitamente a planilha atual ou toda a planilha com as seguintes constantes:

- `vk current sheet`
- `vk workbook`

> * 4D View Pro areas can only be printed with the `VP PRINT` command.
> * Commands from the 4D **Printing** language theme are not supported by `VP PRINT`.
> * Esse comando é destinado a impressão individual pelo usuário final. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](vp-export-document.md) method.

#### Exemplo

O seguinte código:

```4d
 VP PRINT("myVPArea")
```

... will open a print dialog window:

![](../../assets/en/ViewPro/cmd_vpPrint.PNG)

#### Veja também

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
