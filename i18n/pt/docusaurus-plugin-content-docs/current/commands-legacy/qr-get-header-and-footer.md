---
id: qr-get-header-and-footer
title: QR GET HEADER AND FOOTER
slug: /commands/qr-get-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR GET HEADER AND FOOTER.Syntax-->**QR GET HEADER AND FOOTER** ( *area* ; *seletor* ; *tituloEsq* ; *tituloCentro* ; *tituloDir* ; *alto* {; *imagem* {; *alinImag*}} )<!-- END REF-->
<!--REF #_command_.QR GET HEADER AND FOOTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| seletor | Integer | &#8594;  | 1= Cabeçalho, 2 = Rodapé |
| tituloEsq | Text | &#8592; | Título mostrado à esquerda |
| tituloCentro | Text | &#8592; | Texto mostrado ao centro |
| tituloDir | Text | &#8592; | Texto exibido à direita |
| alto | Integer | &#8592; | Altura do cabeçalho ou rodapé |
| imagem | Picture | &#8592; | Imagem a exibir |
| alinImag | Integer | &#8592; | Alinhamento atribuído para a Imagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET HEADER AND FOOTER.Summary-->O comando QR GET HEADER AND FOOTER permite recuperar o conteúdo e o tamanho do cabeçalho ou rodapé de página.<!-- END REF-->  
  
*seletor* lhe permite selecionar o cabeçalho ou o rodapé de página:  
  
 \* se *seletor* for igual a 1, a informação do cabeçalho se recuperará;  
 \* se *seletor* for igual a 2, a informação do rodapé se recuperará.  

*tituloEsq, tituloCentro* e *tituloDir* devolvem os valores para os cabeçalhos/rodapé esquerdo, centro e direita, respectivamente.  
  
*altura* devolve a altura do cabeçalho/rodapé, expressa na unidade selecionada para o relatório.  
  
*imagem* devolve uma imagem que se mostra no cabeçalho ou rodapé de página.  
  
*alinImag* é o atributo de alienação para a imagem mostrada no cabeçalho/rodapé de página  

 \* Se *alinImag* devolve 1, a imagem se alinha a esquerda.  
 \* Se *alinImag* devolve 2, a imagem se centra.  
 \* Se *alinImag* devolve 3, a imagem se alinha a direita.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *seletor* for incorreto, se gera o erro -9852.

#### Exemplo 

O código a seguir recupera o conteúdo e a altura do título do cabeçalho e os mostra como alertas:

```4d
 QR GET HEADER AND FOOTER(MinhaArea;1;$textEsq;$textCent;$texDir;$altura)
 Case of
    :($textEsq#"")
       ALERT("O título à esquerda é "+Char(34)+$textIzq+Char(34))
    :($textCent#"")
       ALERT("O título do centro é "+Char(34)+$textCent+Char(34))
    :($texDer#"")
       ALERT("O título da direita é "+Char(34)+$texDer+Char(34))
    Else
       ALERT("Não há título de cabeçalho neste relatório.")
 End case
 ALERT("A altura do cabeçalho é "+String($altura))
```

#### Ver também 

[QR SET HEADER AND FOOTER](qr-set-header-and-footer.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 775 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


