---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Estado da tecla Shift |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Shift down.Summary-->Shift down retorna TRUE se a tecla Shift estiver pressionada.<!-- END REF-->

## Exemplo 

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

## Ver também 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 543 |
| Thread-seguro | yes |


