---
id: onMouseUp
title: On Mouse Up
---

| Code | Pode ser chamado por                                                                                       | Definição                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 2    | [Área de entrada](FormObjects/input_overview.md) de [tipo](FormObjects/properties_Object.md#type) `imagem` | O usuário acabou de soltar o botão esquerdo do mouse em um objeto Imagem |


## Descrição

O evento `On Mouse Up` é gerado quando o usuário acaba de soltar o botão esquerdo do mouse enquanto arrasta uma entrada de imagem. Esse evento é útil, por exemplo, quando você quiser que o usuário consiga mover, redimensionar ou desenhar objetos em uma área SVG.

Quando o evento `On Mouse Up` for gerado, você pode obter as coordenadas locais onde o botão do mouse foi liberado. Essas coordenadas são retornadas nas variáveis sistema `MouseX` e `MouseY`. As coordenadas são expressas em píxeis em relação ao canto superior esquerdo da imagem (0,0).

Ao usar este evento, você também deve usar o comando `Is waiting mouse up` para manipular casos onde o "gerenciador do estado" do formulário é dessincronizado, i.e. quando o evento `On Mouse Up` não é recebido após um clique. Este é o caso, por exemplo, quando uma caixa de diálogo de alerta é exibida acima do formulário enquanto o botão do mouse não for liberado. Para mais informações e um exemplo de uso do evento `On Mouse Up`, por favor, consulte a descrição do comando `Is waiting mouse up`.

> Se a opção [Draggable](FormObjects/properties_Action.md#draggable) é ativada para o objeto imagem, o evento `On Mouse Up` nunca é gerado. 
