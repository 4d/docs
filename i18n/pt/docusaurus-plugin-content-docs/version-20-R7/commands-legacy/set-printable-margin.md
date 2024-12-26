---
id: set-printable-margin
title: SET PRINTABLE MARGIN
slug: /commands/set-printable-margin
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINTABLE MARGIN.Syntax-->**SET PRINTABLE MARGIN** ( *esquerda* ; *superior* ; *direita* ; *inferior* )<!-- END REF-->
<!--REF #_command_.SET PRINTABLE MARGIN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| esquerda | Integer | &#8594;  | Margem esquerda |
| superior | Integer | &#8594;  | Margem superior |
| direita | Integer | &#8594;  | Margem direita |
| inferior | Integer | &#8594;  | Margem inferior |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET PRINTABLE MARGIN.Summary-->O comando SET PRINTABLE MARGIN\[#descv\]permite atribuir os valores de varias margens de impressão utilizando os comandos [Print form](print-form.md), [PRINT SELECTION](print-selection.md) e [PRINT RECORD](print-record.md).<!-- END REF--> 

Pode passar um dos seguintes valores nos parâmetros *esquerda*, *superior*, *direita* e *inferior*:  
  
 \* 0 = utilizar as margens do papel  
 \* -1 = utilizar as margens da impressora  
 \* valor > 0 = margem em píxels (recorde que 1 píxel em 72 dpi representa aproximadamente 0.4 mm)  
  
Os valores dos parâmetros *direita* e *inferior* são relativos às bordas direita e inferior do papel.  
  
**Nota**: para maior informação sobre gestão de impressão e terminologia em 4D, consulte a descrição do comando [GET PRINTABLE MARGIN](get-printable-margin.md).  
  
Por padrão, 4D baseia suas impressões nas margens da impressora. Una vez se executa o comando SET PRINTABLE MARGIN, os parâmetros modificados se conservarão no mesmo processo para toda a sessão.

#### Exemplo 1 

O exemplo a seguir lhe permite obter o tamanho da margem morta: 

```4d
 SET PRINTABLE MARGIN(-1;-1;-1;-1) //Define a margem da impressora
 GET PRINTABLE MARGIN($l;$t;$r;$b)
  //$l, $t, $r e $b correspondem às margens mortas da folha
```

#### Exemplo 2 

O exemplo a seguir lhe permite obter o tamanho do papel: 

```4d
 SET PRINTABLE MARGIN(0;0;0;0) //Define a margem do papel
 GET PRINTABLE AREA($altura;$largura)
  //Para A4: $altura=842 ; $largura=595 píxels
```

#### Ver também 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Get printed height](get-printed-height.md)  
[Print form](print-form.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 710 |
| Thread-seguro | &cross; |


