---
id: forms
title: Formulários
---

Os formulários constituem a interface através da qual a informação é introduzida, modificada e impressa numa aplicação de desktop. Os usuários interagem com os dados em um banco de dados usando formulários e imprimem relatórios usando formulários. Formulários podem ser usados para criar caixas de diálogo personalizadas, paletas ou qualquer janela personalizada em destaque.

![](../assets/en/FormObjects/form1.png)

Os formulários também podem conter outros formulários através das seguintes funcionalidades:

- [objetos de subformulário](FormObjects/subform_overview.md)
- [formulários herdados](./properties_FormProperties.md#inherited-form-name)

## Criar formulários

É possível adicionar ou modificar formulários 4D usando os seguintes elementos:

- **Interface de Desenvolvedor 4D:** Crie novos formulários a partir do menu **Arquivo** ou da janela **Explorador**.
- **Form Editor**: Modifique seus formulários usando o **[Editor de formulários](FormEditor/formEditor.md)**.
- **Código JSON:** crie e projete seus formulários usando JSON e salve os arquivos de formulário no [local apropriado](Project/architecture#sources). Exemplo:

```
{
    "windowTitle": "Hello World",
    "windowMinWidth": 220,
    "windowMinHeight": 80,
    "method": "HWexample",
    "pages": [
        null,
        {
            "objects": {
                "text": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 50,
                "top": 120,
                "width": 120,
                "height": 80
                },
                "image": {
                "type": "picture",
                "pictureFormat": "scaled",
                "picture": "/RESOURCES/Images/HW.png",
                "alignment":"center", 
                "left": 70,
                "top": 20, 
                "width":75, 
                "height":75        
                },
                "button": {
                "type": "button",
                "text": "OK",
                "action": "Cancel",
                "left": 60,
                "top": 160,


                "width": 100,
                "height": 20
                }
            }
        }
    ]
}
```

## Formulário projeto e formulário tabela

Existem duas categorias de formulários:

- **Formulários de projeto** - Formulários independentes que não estão anexados a nenhuma tabela. Eles são destinados principalmente para criar caixas de diálogo de interface, bem como componentes. Os formulários do projeto podem ser usados para criar interfaces que estejam em conformidade com os padrões do sistema operacional.

- **Formulários de tabela** - Vinculados a tabelas específicas e, portanto, beneficiam-se de funções automáticas úteis para o desenvolvimento de aplicativos baseados em bancos de dados. Normalmente, uma tabela tem formulários de entrada e saída separados.

Normalmente, você seleciona a categoria do formulário quando o cria, mas pode alterá-la posteriormente.

## Páginas formulário

Cada formulário é composto por, pelo menos, duas páginas:

- uma página 1: uma página principal, exibida por defeito
- uma página 0: uma página de fundo, cujo conteúdo é exibido em todas as outras páginas.

É possível criar várias páginas para um formulário de entrada. Se você tiver mais campos ou variáveis do que cabem em uma tela, você pode querer criar páginas adicionais para exibi-los. As páginas múltiplas permitem-lhe fazer o seguinte:

- Coloque as informações mais importantes na primeira página e as informações menos importantes nas outras páginas.
- Organize cada tópico na sua própria página.
- Reduza ou elimine a rolagem durante a entrada de dados definindo a [ordem de entrada](formEditor.md#data-entry-order).
- Fornece espaço em torno dos elementos de formulário para um design de tela atrativo.

As páginas múltiplas são uma conveniência utilizada apenas para formulários de introdução. Não são para produção impressa. Quando um formulário de várias páginas é impresso, apenas a primeira página é impressa.

Não há restrições quanto ao número de páginas que um formulário pode ter. O mesmo campo pode aparecer quantas vezes quiser em um formulário e em quantas páginas desejar. No entanto, quanto mais páginas você tiver em um formulário, mais tempo levará para exibi-lo.

Um formulário de múltiplas páginas possui tanto uma página de fundo quanto várias páginas de exibição. Objetos que são colocados na página de fundo podem ser visíveis em todas as páginas de exibição, mas só podem ser selecionados e editados na página de fundo. Em formulários de várias páginas, você deve colocar sua paleta de botões na página de fundo. Você também precisa incluir um ou mais objetos na página de fundo que forneçam ferramentas de navegação de página para o usuário.

## Fluent UI rendering (Developer Preview)

On Windows, 4D supports **Fluent UI** form rendering, Microsoft's modern graphical user interface design, based upon **WinUI 3** technology. **WinUI 3** is the foundation of the Windows App SDK and represents the upcoming Windows graphical interfaces.

Fluent UI rendering offers modern and attractive controls, support of dark/light system themes, smoother rendering optimized for high-resolution displays, and consistent user experience aligned with recent Microsoft applications.

| Light theme                             | Dark theme                                   |
| --------------------------------------- | -------------------------------------------- |
| ![](../assets/en/FormEditor/fluent.png) | ![](../assets/en/FormEditor/fluent-dark.png) |

:::caution Prévia do desenvolvedor

Fluent UI support is currently in the Developer Preview phase. Não deve ser usado na produção.

:::

:::info Disponibilidade

This feature can be used **in 4D projects on Windows**. It is not available on macOS or in binary 4D databases on Windows.

:::

:::tip Related blog post

[Modernize your 4D interfaces with Fluent UI](https://blog.4d.com/modernize-your-4d-interfaces-with-fluent-ui)

:::

### Requisitos

The Fluent UI rendering requires that the [**Windows App SDK version 1.7.3**](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/downloads) be installed. You need to install this SDK on any Windows machine displaying your forms.

If the Windows App SDK is not properly installed, 4D will render all your forms in classic mode with no error.

### Enabling the Fluent UI rendering

You can enable the Fluent UI rendering mode at the application level or at the form level. Form setting has priority over application setting.

#### Application setting

Check the **Use Fluent UI on Windows** option in the "Interface" page of the Settings dialog box.

![](../assets/en/FormObjects/fluentui-setting.png)

In this case, the Fluent UI rendering mode will be used by default on Windows for all forms.

#### Form setting

Each form can define its own rendering via the **Widget appearance** property. As opções abaixo estão disponíveis:

- **Inherited**: inherits the global application setting (default),
- **Classic**: uses the classic Windows style,
- **Fluent UI**: enables the modern rendering based on Fluent UI. <br/>
  ![](../assets/en/FormObjects/fluentui-form.png)

The corresponding [JSON form property](./properties_JSONref.md) is `fluentUI` with value undefined (i.e. inherited, default value), "true" or "false".

### Specific behaviors

When using 4D forms with Fluent UI rendering, you need to pay attention to the following points:

- The new `FORM Windows theme` command returns the actual display theme of the current form. Possible values: "Classic" or "FluentUI". If there is no current form or the command is called on macOS, and empty string is returned.
- If [`GET STYLE SHEET INFO`](../commands-legacy/get-style-sheet-info.md) is called in the context of a form, the information returned relates to the current appearance of the form (Classic or FluentUI). If the command is called outside the context of a form, the information returned relates to the [global project settings](#application-setting).
- [`SET MENU ITEM STYLE`](../commands-legacy/set-menu-item-style.md) with `Underline` *itemStyle* parameter is not supported (ignored) for pop up menus.
- [Stepper](../FormObjects/stepper.md) form object does not support [double-click event](../Events/onDoubleClicked.md).
- [Circle buttons](../FormObjects/button_overview.md#circle) are supported (similar as macOS).
- The [`WA ZOOM IN`](../commands-legacy/wa-zoom-in.md) / [`WA ZOOM OUT`](../commands-legacy/wa-zoom-out.md) commands are not supported in Web areas with system rendering engine.
- A focus ring can be added to picture and text [inputs](../FormObjects/input_overview.md).

:::info Limitations

This **Developer preview** includes some limitations, which are [listed in the related blog post](https://blog.4d.com/modernize-your-4d-interfaces-with-fluent-ui).

:::

## Formulários herdados

Formulários 4D podem usar e ser usados como "formulários herdados," o que significa que todos os objetos do *Formulário A* podem ser usados no *Formulário B*. Neste caso, *Formulário B* "herda" os objetos do *Formulário A*.

Referências a um formulário herdado estão sempre ativas: se um elemento de um formulário herdado for modificado (estilos de botão, por exemplo), todos os formulários que utilizam esse elemento serão automaticamente modificados.

Todos os formulários (formulários de tabela e formulários de projeto) podem ser designados como um formulário herdado. No entanto, os elementos que eles contêm devem ser compatíveis com o uso em diferentes tabelas de banco de dados.

Quando um formulário é executado, os objetos são carregados e combinados na seguinte ordem:

1. Página zero do formulário herdado
2. Página 1 do formulário herdado
3. Página zero do formulário aberto
4. Página actual do formulário aberto.

Essa ordem determina a [ordem de entrada](formEditor.md#data-entry-order) padrão dos objetos no formulário.

> Apenas as páginas 0 e 1 de um formulário herdado podem aparecer noutros formulários.

As propriedades e o método de um formulário não são considerados quando esse formulário é usado como um formulário herdado. Por outro lado, são chamados os métodos dos objetos que contém.

Para definir um formulário herdado, as propriedades [Inherited Form Name](properties_FormProperties.md#inherited-form-name) e [Inherited Form Table](properties_FormProperties.md#inherited-form-table) (para formulário de tabela) devem ser definidas no formulário que herdará algo de outro formulário.

Um formulário pode herdar de um formulário de projeto, definindo a propriedade [Tabela de formulário herdado](properties_FormProperties.md#inherited-form-table) como `\<None>` na Property List (ou " " em JSON).

Para interromper a herança de um formulário, selecione `\<None>` na Property List (ou " " em JSON) para a propriedade [Nome do formulário herdado](properties_FormProperties.md#inherited-form-name).

> É possível definir um formulário herdado em um formulário que eventualmente será usado como um formulário herdado para um terceiro formulário. A combinação de objetos é feita de forma recursiva. 4D detecta loops recursivos (por exemplo, se o formulário [table1]form1 é definido como o formulário herdado de [table1]form1, ou seja, ele mesmo) e interrompe a cadeia de formulários.

## Propriedades compatíveis

[Barra de Menu Associado](properties_Menu.md#associated-menu-bar) - [Altura fixa](properties_WindowSize.md#fixed-height) - [Largura fixa](properties_Markers.md#fixed-width) - [Quebra de forma](properties_Markers.md#form-break) - [Formulário detalhado](properties_Markers.md#form-detail) - [Form Footer](properties_Markers.md#form-footer) - [Cabeçalho do formulário](properties_Markers.md#form-header) - [Nome do formulário](properties_FormProperties.md#form-name) - [Tipo de Formulário](properties_FormProperties.md#form-type) - [Nome do formulário herdado](properties_FormProperties.md#inherited-form-name) - [Tabela de formulário herdades](properties_FormProperties.md#hererited-form-table) - [Altura Máxima](properties_WindowSize.md#maximum-height-minimum-height) - [Largura Máxima](properties_WindowSize.md#maximum-width-minimum-width) - [Método](properties_Action.md#method) - [Altura mínima](properties_WindowSize.md#maximum-height-minimum-height) - [Widget mínimo](properties_WindowSize.md#maximum-width-minimum-width) - [Páginas](properties_FormProperties.md#pages) - [Configurações de impressão](properties_Print.md#settings) - [Publicado como subform](properties_FormProperties.md#published-as-subform) - [Salvar Geometry](properties_FormProperties.md#save-geometry) - [Título da Janela](properties_FormProperties.md#window-title)
