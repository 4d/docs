---
id: vp-print
title: VP PRINT
---

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

O comando `VP PRINT` <!-- REF #_method_.VP PRINT.Summary -->abre uma janela de diálogo de impressão para imprimir *vpAreaName*<!-- END REF -->.

Passe a área 4D View Pro a ser impressa em *vpAreaName*. O comando abrirá a janela de diálogo de impressão do sistema onde a impressora pode ser especificada e as propriedades da página podem ser definidas.

> As propriedades definidas na janela de diálogo de impressão são para o papel de impressora, elas não são as propriedades de impressão para a área 4D View Pro. As propriedades de impressão das áreas 4D View Pro são definidas com o comando [VP SET PRINT INFO](vp-set-print-info.md). É altamente recomendável que as propriedades tanto para impressora quanto para correspondência 4D View Pro, caso contrário, o documento impresso pode não corresponder às suas expectativas.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). Se omitido, a folha atual será usada como padrão. Você pode selecionar explicitamente a planilha atual ou toda a planilha com as seguintes constantes:

- `vk current sheet`
- `vk workbook`

> * As áreas do 4D View Pro só podem ser impressas com o comando `VP PRINT`.
> * Os comandos do tema de linguagem 4D **Impressão** não são compatíveis com o `VP PRINT`.
> * Esse comando é destinado a impressão individual pelo usuário final. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](vp-export-document.md) method.

#### Exemplo

O seguinte código:

```4d
 VP PRINT("myVPArea")
```

... abre uma janela de diálogo de impressão:

![](../../assets/en/ViewPro/cmd_vpPrint.PNG)

#### Veja também

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
