---
id: qr-find-column
title: QR Find column
slug: /commands/qr-find-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Find column.Syntax-->**QR Find column** ( *area* ; *expressao* ) -> Resultado<!-- END REF-->
<!--REF #_command_.QR Find column.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &rarr; | Referência da área |
| expressao | Text, Pointer | &rarr; | Objeto de coluna |
| Resultado | Integer | &larr; | Número da coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Find column.Summary-->O comando QR Find column devolve o número da primeira coluna cujo conteúdo corresponde à *expressao* passada em parâmetro.<!-- END REF-->

*expressao* pode ser uma cadeia ou um ponteiro.

QR Find column devolve –1 se não se encontra nada.

Se passa um número de *area* inválido, se gera o erro -9850.

#### Exemplo 

O código a seguir permite recuperar o número da coluna que contém o campo \[G.NQR Tests\]Trimestre e apaga essa coluna:

```4d
 $NumColumn:=QR Find column(MinhaArea;->[G.NQR Tests]Trimestre)
```

ou:  
$NumColumn:=QR Find column (MiArea; "\[G.NQR Tests\]Trimestre")

```4d
 If($NumColumn#-1)
    QR DELETE COLUMN(MinhaArea;$NumColumn)
 End if
```
