---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Estado da tecla Shift |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Shift down.Summary-->Shift down retorna TRUE se a tecla Shift estiver pressionada.<!-- END REF-->

#### Exemplo 

O método abaixo de objeto para o botão *bUnBotao* realiza diferentes ações dependendo da função das teclas de modificação pressionadas quando clicar no botão: 

```4d
  // Método de objeto bUnBotao
 Case of
  // Outras combinações diferentes podem ser testadas aqui
  // ...
    :(Shift down & Windows Ctrl down)
  // As teclas Shift e Ctrl Windows (ou Comando Mac OS) são pressionadas
       DO ACTION1
  // ...
    :(Shift down)
  // Só está pressionada Shift
       DO ACTION2
  // ...
    :(Windows Ctrl down)
  // Só está pressionada Ctrl Windows (ou Comando Mac OS)
       DO ACTION3
  // ...
  // Outras teclas podem ser testadas individualmente aqui
  // ...
 End case
```

#### Ver também 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  