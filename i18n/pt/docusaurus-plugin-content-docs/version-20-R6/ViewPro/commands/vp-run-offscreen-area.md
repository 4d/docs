---
id: vp-run-offscreen-area
title: VP Run offscreen area
---

<!-- REF #_method_.VP Run offscreen area.Syntax -->

**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                                 |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------- | ---------------- |
| parameters | Object | ->                          | Objeto que contém os atributos da área fora do ecrã                       |                  |
| Resultados | Mixed  | <- | propiedad `.result` do objeto `.onEvent`, ou Null se não retorna um valor | <!-- END REF --> |

#### Descrição

The `VP Run offscreen area` command <!-- REF #_method_.VP Run offscreen area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

| Propriedade        | Tipo                                | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | text                                | O nome da área offscreen. Se omitido ou nulo, um nome genérico é atribuído (por exemplo, "OffscreenArea1").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| onEvent            | object (fórmula) | Um método de callback que será iniciado quando a área fora da tela estiver pronta. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](../configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                             | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| timeout            | number                              | Tempo máximo (expresso em segundos) antes que a área seja encerrada automaticamente, se nenhum evento for gerado. Se for definido para 0, não é aplicada qualquer limitação. Valor por padrão: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| resultado          | misto                               | Resultado do processamento (se for caso disso)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `<customProperty>` | misto                               | Any custom attribute to be available in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

A seguinte propriedade é automaticamente adicionada pelo comando, se necessário:

| Propriedade    | Tipo    | Descrição                                                       |
| -------------- | ------- | --------------------------------------------------------------- |
| timeoutReached | boolean | Adicionado com valor true se o tempo limite tiver sido excedido |

> A área fora da tela só está disponível durante a execução do comando `VP Run offscreen area`. Ele será destruído automaticamente após o término da execução.

Os seguintes comandos podem ser utilizados no método de retorno de chamada:

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

#### Exemplo 1

Se quiser criar uma zona fora da área da tela do 4D View Pro e ler o valor de uma célula:

```4d
// cs.OffscreenArea class declaration 
Class constructor ($path : Text)
 This.filePath:=$path
 
// This function will be called on each event of the offscreen area 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))
 
       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

O método de retorno de chamada *OffscreenArea*:

```4d
$o:=cs. OffscreenArea.new()

$result:=VP Run offscreen area($o)
```

#### Exemplo 2

Se quiser carregar um grande documento offscreen, aguardar todos os cálculos para concluir a avaliação e exportá-lo como um PDF:

```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Document import
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Start a timer to verify if all calculations are finished.
 // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
 // The time must be defined according to the computer configuration.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // End of calculation detected. Restarts the timer
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // To be sure to not restart the timer if you call others 4D View command after this point
         This.isWaiting:=False
 


 // Stop the timer
   SET TIMER(0)
 
 // Start the PDF export
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

O método de retorno de chamada *OffscreenArea*:

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

#### Veja também

[Publicação de blog: fim de carregamento de documentos](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
