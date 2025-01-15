---
id: print-object
title: Print object
slug: /commands/print-object
displayed_sidebar: docs
---

<!--REF #_command_.Print object.Syntax-->**Print object** ( {* ;} *objeto* {; *posX* {; *posY* {; *largura* {; *alto*}}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Print object.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* for especificado) ou variável (se * é omitido) |
| posX | Integer | &#8594;  | Localização horizontal do objeto |
| posY | Integer | &#8594;  | Localização Vertical do objeto |
| largura | Integer | &#8594;  | Largura do objeto (pixels) |
| alto | Integer | &#8594;  | Altura do objeto (pixels) |
| Resultado | Boolean | &#8592; | Verdade = objeto impresso completamente; de outro modo False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Print object.Summary-->O comando **Print object** permite imprimir ele ou os objetos de formulário designado(s) pelos parâmetros *objeto* e *\**, na localização definida pelos parâmetros *posX* e *posY*.<!-- END REF-->  
  
Antes de chamar o comando **Print object**, deve designar o formulário tabela ou projeto que contém os objetos a imprimir utilizando o comando [FORM LOAD](../commands/form-load.md).  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* for um nome de objeto (cadeia de caracteres). Se não passa o parâmetro *\**, está indicando que *objeto é* uma variável. Neste caso, se passa uma referência de variável (tipo de objeto unicamente) ao invés de uma cadeia.  
  
Os parâmetros *posX* e *posY* especificam o ponto de partida para a impressão dele ou dos objeto(s). Estes valores devem ser expressos em píxels. Se estes parâmetros se omitem, o objeto se imprime de acordo com sua localização no formulário.   
  
Os parâmetros *largura* e *alto* se utilizam para especificar a largura e a altura do objeto de formulário. O comando Print object não trata objetos de tamanho variável. Deve utilizar o comando [OBJECT GET BEST SIZE](object-get-best-size.md) para manejar o tamanho dos objetos. Também pode utilizar o comando [OBJECT GET BEST SIZE](object-get-best-size.md) para determinar o tamanho mais adequado para os objetos que contenham texto. Do mesmo modo, **Print object** não provoca saltos de página automáticos. Deve manejá-los de acordo a suas necessidades.   
  
Pode utilizar os comandos de 4D para modificar rapidamente as propriedades do objeto (cor, tamanho, etc).  
  
O comando devolve True se o objeto for impresso completamente e False se este não for o caso, em outras palavras, se não puder imprimir todos os dados associados com o objeto dentro do marco estabelecido. Normalmente, o comando devolve False quando se imprime um list box se todas as linhas do list box não pode ser impressa. Neste caso, basta com chamar ao comando **Print object** várias vezes até que devolva True: um mecanismo específico provoca de forma automática o deslocamento do conteúdo do objeto depois de cada chamada. Se o usuário cancelar a operação de impressão, um erro é gerado -128, que pode interceptar utilizando [ON ERR CALL](on-err-call.md).  
  
**Notas**:  

* na versão atual de 4D, só os objetos de tipo list box tem este mecanismo (o comando sempre devolve True para qualquer outro tipo de objeto). Nas próximas versões de 4D, este funcionamento se ampliará a outros objetos com conteúdos variáveis.
* O comando [LISTBOX GET PRINT INFORMATION](listbox-get-print-information.md) permite controlar o estado da impressão durante a operação.
O comando **Print object** só pode ser utilizado no contexto de um trabalho de impressão aberto previamente com o comando [OPEN PRINTING JOB](open-printing-job.md). Se não se chama neste contexto, o comando não faz nada. Vários comandos **Print object** podem chamar-se no mesmo trabalho de impressão.  
  
**Nota**: as listas hierárquicas, os sub formulários e as áreas web não podem ser impressas.

#### Exemplo 1 

Exemplo de impressão de dez objetos em um formulário:

```4d
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    If(OK=1)
       FORM LOAD("PrintForm")
       x:=100
       y:=50
       GET PRINTABLE AREA(hpaper;wpaper)
       For($i;1;10)
          OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)
          $end:=Print object(*;"Obj"+String($i))
          y:=y+bestheight+15
          If(y>hpaper)
             PAGE BREAK(>)
             y:=50
          End if
       End for
    End if
    CLOSE PRINTING JOB
 End if
```

#### Exemplo 2 

Exemplo de impressão de um list box completo:

```4d
 OPEN PRINTING JOB
 FORM LOAD("myForm")
 $Over:=False
 gError:=0
 ON ERR CALL("err")
 Repeat
    $Total:=Print object(*;"List_Box")
    LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)
    PAGE BREAK
    If(gError=-128) //o usuário cancelou a operação
       $Over:=True
    End if
 Until($Over)
 CLOSE PRINTING JOB
 ON ERR CALL("")
```

#### Ver também 

[FORM LOAD](../commands/form-load.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1095 |
| Thread-seguro | &cross; |


