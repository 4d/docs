---
id: pictures
title: Imagens
---

4D inclui suporte específico para imagens utilizadas nos seus formulários.

## Formatos Nativos Suportados

4D integra a gestão nativa dos formatos de imagem. Isso significa que imagens serão mostradas e armazenadas em seu formato original, sem qualquer interpretação em 4D. As funcionalidades específicas dos formatos diferentes (sombreado, áreas transparentes, etc) serão retidas quando forem copiadas e coladas, e serão exibidas sem alteração. Essa compatibilidade nativa é válida para todas as imagens armazenadas nos formulários de 4D: [imagens estáticas](FormObjects/staticPicture.md) coladas no modo Desenho, imagens coladas em [objetos de entrada](FormObjects/input_overview.md) em execução, etc.

The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding. Em macOS, o formato pdf também está disponível para codificar e decodificar.

> A lista completa dos formatos suportados varia de acordo com o sistema operativo e os codecs personalizados que são instalados nas máquinas. Para descobrir quais os codecs disponíveis, deve utilizar o comando `PICTURE CODEC LIST` (ver também a descrição do [tipo de dados imagem](Concepts/dt_picture.md)).

### Formato de imagem não disponível

Um ícone específico é exibido para imagens salvas em um formato que não esteja disponível no mecanismo. A extensão do formato faltante é mostrado na parte inferior do ícone:

![](../assets/en/FormEditor/picNoFormat.png)

O ícone é usado automaticamente onde a imagem precisar ser exibida:

![](../assets/en/FormEditor/picNoFormat2.png)

O ícone indica que a imagem não pode ser exibida ou manipulada localmente - mas pode ser salva sem alteração para que possa ser exibida em outros dispositivos. Por exemplo esse é o caso para imagens PDF em Windows ou para imagens no formato PICT.

## Imagens em alta resolução

4D suporta imagens de alta resolução tanto em plataformas MacOS como Windows. As imagens de alta resolução podem ser definidas quer por factor de escala quer por dpi.

### Fator de escala (somente macOS)

Os ecrãs de alta resolução têm uma maior densidade de píxeis do que os ecrãs padrão tradicionais. Para que as imagens sejam renderizadas correctamente em ecrãs de alta resolução, o número de pixels na imagem deve ser multiplicado pelo factor de escala ** (*ou seja*, duas vezes maior, três vezes maior, etc.).

Ao utilizar imagens de alta resolução, pode especificar o factor de escala adicionando "@nx" no nome da imagem (onde *n* designa o factor de escala). No quadro abaixo, pode ver que o fator de escala está indicado nos nomes das imagens de alta resolução, *circle@2x.png* e *circle@3x.png*.

| Display Type         | Factor de escala                                        | Exemplo                                                                      |
| -------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Resolução ‘standard’ | Densidade de pixel 1:1.                                 | **1x**<br/>![](../assets/en/FormEditor/pictureScale1.png) *circle.png* |
| Alta resolução       | A densidade de pixels aumentou por um factor de 2 ou 3. | <table><th>2x</th><th>3x</th><tr><td>![](../assets/en/FormEditor/pictureScale2.png)*circle@2x.png*</td><td>![](../assets/en/FormEditor/pictureScale3.png)<br/>*circle@3x.png*</td></tr></table>                                                    |

As imagens de alta resolução com a convenção @nx podem ser utilizadas nos seguintes objectos:

* [Imagens estáticas](FormObjects/staticPicture.md)
* [Botões](FormObjects/button_overview.md)/[radio](FormObjects/radio_overview.md)/[caixas de verificação](FormObjects/checkbox_overview.md)
* [Picture buttons](FormObjects/pictureButton_overview.md)/[Picture pop-ups](FormObjects/picturePopupMenu_overview.md)
* [Tab controls](FormObjects/tabControl.md)
* [Cabeçalhos de list box](FormObjects/listbox_overview.md#list-box-headers)
* [Ícones de menu](Menus/properties.md#item-icon)

4D automatically prioritizes pictures with the highest resolution. <br/><br/> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.

### DPI (macOS e Windows)

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(\*)*, and picture format:

| Operação                                                                                                                                 | Comportamento                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Soltar o pegar                                                                                                                           | Se a imagem tiver:<ul><li>**72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li></ul>                   |
| [Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[Scaled](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) </li> <li>**Not scaled** - The object containing the picture has the same number of pixels as the picture.</li></ul> |

*(\*) Normalmente, macOS = 72 dpi, Windows = 96 dpi*

## Imagens em modo escuro (apenas macOS)

You can define specific pictures and icons to be used instead of standard pictures when [forms use the dark scheme](properties_FormProperties.md#color-scheme).

A dark mode picture is defined in the following way:

* dark mode picture has the same name as the standard (light scheme) version with the suffix "`_dark`"
* dark mode picture is stored next to the standard version.

At runtime, 4D will automatically load the light or dark image according to the [current form color scheme](https://doc.4d.com/4dv19/help/command/en/1761.html).

![](../assets/en/FormEditor/darkicon.png)

## Coordenadas do rato numa imagem

4D permite recuperar as coordenadas locais do mouse em um [objeto de entrada](FormObjects/input_overview.md) associado a uma [expressão de imagem](FormObjects/properties_Object.md#expression-type), no caso de que clique ou passe o cursor por cima, mesmo se não tiver aplicado um deslocamento ou zoom na imagem. Esse mecanismo, similar ao de um mapa de imagens, pode ser utilizado, por exemplo, para manejar barras de botões deslocáveis ou a interface de um software de cartografia.

As coordenadas são devolvidas nas [Variáveis de Sistema](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). *MouseX* e*MouseY*. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). Se o mouse estiver fora do sistema de coordenadas da imagem, se devolverá -1 em *MouseX* e *MouseY*.

Pode obter o valor dessas variáveis como parte dos eventos formulário `On Clicked`, `On Double Clicked`, `On Mouse up`, `On Mouse Enter`, ou `On Mouse Move`.
