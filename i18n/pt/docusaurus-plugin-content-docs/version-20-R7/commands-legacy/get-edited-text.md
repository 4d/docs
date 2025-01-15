---
id: get-edited-text
title: Get edited text
slug: /commands/get-edited-text
displayed_sidebar: docs
---

<!--REF #_command_.Get edited text.Syntax-->**Get edited text**  : Text<!-- END REF-->
<!--REF #_command_.Get edited text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Text being entered |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get edited text.Summary-->O comando Get edited text é utilizado principalmente com o evento de formulário On After Keystroke para recuperar o texto a medida em que é introduzido.<!-- END REF--> Também pode ser utilizado com o evento de formulário On Before Keystroke. Para maior informação sobre estes eventos de formulário, por favor consulte a descrição do comando [Form event code](../commands/form-event-code.md).

A combinação deste comando com os eventos formulário On Before Keystroke e On After Keystroke funciona da seguinte maneira:

* Logo como um caractere se escreve no teclado, é gerado o evento On Before Keystroke. Neste caso, a função **Get edited text** devolve o conteúdo da área antes de que ocorra a última pulsação de tecla. Por exemplo, se a área contém "PA" e o usuário digita uma "R", **Get edited text** devolve "PA" no evento On Before Keystroke. Se a área está vazia inicialmente, **Get edited text** devolve uma cadeia vazia.
* A continuação, é gerado o evento formulário On After Keystroke. Neste caso, **Get edited text** devolve o conteúdo da área, incluindo o último caractere introduzido no teclado. Por exemplo, quando a área contém "PA" e o usuário digita uma "R", **Get edited text** devolve "PAR" no evento On After Keystroke.

Note that the On After Keystroke event can generally be replaced by the On After Edit event, which supports more entry methods (such as IME).

Estes dois eventos só são gerados nos métodos objeto em questão.

Quando é utilizado em um contexto diferente ao de entrada de dados em um objeto de formulário, esta função retorna uma string vazia.

#### Exemplo 1 

O método abaxio automaticamente põe os caracteres sendo digitados em maiúsculas

```4d
 
If(Form event code=On After Edit)
 [Trips]Agencies:=Uppercase(Get edited text)
End if


```

#### Exemplo 2 

```4d
 Esteéum exemplo de como processar imediatamente os caracteres introduzidos em um camp. A idéia consiste em colocar em outro campo texto(chamado“Palavras”)todas as palavras da frase que estão sendo escritas. Para isso, escreva o seguinte código no método de objeto do campo&NBSP;If(Form event code=On After Keystroke)
 $RealTimeEntry:=Get edited text
 PLATFORM PROPERTIES($platform)
 If($platform#3) // Mac OS
    Repeat
       $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13))
    Until(Position(" ";$DecomposedSentence)=0)
 Else // Windows
    Repeat
       $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13)+Char(10))
    Until(Position(" ";$DecomposedSentence)=0)
 End if
 [Example]Words:=$DecomposedSentence
End if
```

**Nota:** este exemplo não é exaustivo porque assumimos que as palavras são separadas unicamente por espaços (Char (32)). Para uma solução completa necessitará adicionar outros filtros para extrair todas as palavras (vírgulas, ponto e vírgula, apóstrofes, etc.).

#### Ver também 

[Form event code](../commands/form-event-code.md)  
[Is editing text](is-editing-text.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 655 |
| Thread-seguro | &cross; |


