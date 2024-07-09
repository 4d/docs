---
id: forms
title: Formulários
---

Os formulários constituem a interface através da qual a informação é introduzida, modificada e impressa numa aplicação de desktop. Os usuários interagem com os dados em um banco de dados usando formulários e imprimem relatórios usando formulários. Formulários podem ser usados para criar caixas de diálogo personalizadas, paletas ou qualquer janela personalizada em destaque.

![](../assets/en/FormObjects/form1.png)

Os formulários também podem conter outros formulários através das seguintes funcionalidades:

- [subform objects](FormObjects/subform_overview.md)
- [inherited forms](properties_FormProperties.md#inherited-forms)

## Criar formulários

É possível adicionar ou modificar formulários 4D usando os seguintes elementos:

- **La interfaz 4D Developer:** cree nuevos formularios desde el menú **Archivo** o la ventana del **Explorador**.
- **El editor de formularios**: modifique sus formularios utilizando el **[editor de formularios](FormEditor/formEditor.md)**.
- **El código JSON:** cree y diseñe sus formularios utilizando JSON y guarde los archivos de los formularios en la [ubicación adecuada](Project/architecture.md#sources-folder). Exemplo:

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

- **Los formularios de proyecto** - Formularios independientes que no están unidos a ninguna tabla. Eles são destinados principalmente para criar caixas de diálogo de interface, bem como componentes. Os formulários do projeto podem ser usados para criar interfaces que estejam em conformidade com os padrões do sistema operacional.

- **Los formularios tablas** - Se adjuntan a tablas específicas y, por tanto, se benefician de funciones automáticas útiles para el desarrollo de aplicaciones basadas en bases de datos. Normalmente, uma tabela tem formulários de entrada e saída separados.

Normalmente, você seleciona a categoria do formulário quando o cria, mas pode alterá-la posteriormente.

## Páginas formulário

Cada formulário é composto por, pelo menos, duas páginas:

- uma página 1: uma página principal, exibida por defeito
- uma página 0: uma página de fundo, cujo conteúdo é exibido em todas as outras páginas.

É possível criar várias páginas para um formulário de entrada. Se você tiver mais campos ou variáveis do que cabem em uma tela, você pode querer criar páginas adicionais para exibi-los. As páginas múltiplas permitem-lhe fazer o seguinte:

- Coloque as informações mais importantes na primeira página e as informações menos importantes nas outras páginas.
- Organize cada tópico na sua própria página.
- Reducir o eliminar el desplazamiento durante la entrada de datos definiendo el [orden de entrada](../FormEditor/formEditor.html#data-entry-order).
- Fornece espaço em torno dos elementos de formulário para um design de tela atrativo.

As páginas múltiplas são uma conveniência utilizada apenas para formulários de introdução. Não são para produção impressa. Quando um formulário de várias páginas é impresso, apenas a primeira página é impressa.

Não há restrições quanto ao número de páginas que um formulário pode ter. O mesmo campo pode aparecer quantas vezes quiser em um formulário e em quantas páginas desejar. No entanto, quanto mais páginas você tiver em um formulário, mais tempo levará para exibi-lo.

Um formulário de múltiplas páginas possui tanto uma página de fundo quanto várias páginas de exibição. Objetos que são colocados na página de fundo podem ser visíveis em todas as páginas de exibição, mas só podem ser selecionados e editados na página de fundo. Em formulários de várias páginas, você deve colocar sua paleta de botões na página de fundo. Você também precisa incluir um ou mais objetos na página de fundo que forneçam ferramentas de navegação de página para o usuário.

## Formulários herdados

Los formularios 4D pueden utilizar y ser utilizados como "formularios heredados", lo que significa que todos los objetos de _Formulario A_ pueden ser utilizados en _Formulario B_. En este caso, _Formulario B_ "hereda" los objetos de _Formulario A_.

Referências a um formulário herdado estão sempre ativas: se um elemento de um formulário herdado for modificado (estilos de botão, por exemplo), todos os formulários que utilizam esse elemento serão automaticamente modificados.

Todos os formulários (formulários de tabela e formulários de projeto) podem ser designados como um formulário herdado. No entanto, os elementos que eles contêm devem ser compatíveis com o uso em diferentes tabelas de banco de dados.

Quando um formulário é executado, os objetos são carregados e combinados na seguinte ordem:

1. Página zero do formulário herdado
2. Página 1 do formulário herdado
3. Página zero do formulário aberto
4. Página actual do formulário aberto.

Este orden determina el [orden de entrada](../FormEditor/formEditor.html#data-entry-order) de los objetos en el formulario.

> Apenas as páginas 0 e 1 de um formulário herdado podem aparecer noutros formulários.

As propriedades e o método de um formulário não são considerados quando esse formulário é usado como um formulário herdado. Por outro lado, são chamados os métodos dos objetos que contém.

To define an inherited form, the [Inherited Form Name](properties_FormProperties.md#inherited-form-name) and [Inherited Form Table](properties_FormProperties.md#inherited-form-table) (for table form) properties must be defined in the form that will inherit something from another form.

Un formulario puede heredar de un formulario proyecto, definiendo la propiedad [Inherited Form Table](properties_FormProperties.md#inherited-form-table) en `\<None>` en la Lista de propiedades (o " " en JSON).

Para dejar de heredar un formulario, seleccione `\<None>` en la lista de propiedades (o " " en JSON) para la propiedad [Inherited Form Name](properties_FormProperties.md#inherited-form-name).

> É possível definir um formulário herdado em um formulário que eventualmente será usado como um formulário herdado para um terceiro formulário. A combinação de objetos é feita de forma recursiva. 4D detecta loops recursivos (por exemplo, se o formulário [table1]form1 é definido como o formulário herdado de [table1]form1, ou seja, ele mesmo) e interrompe a cadeia de formulários.

## Propriedades compatíveis

[Associated Menu Bar](properties_Menu.md#associated-menu-bar) - [Fixed Height](properties_WindowSize.md#fixed-height) - [Fixed Width](properties_WindowSize.md#fixed-width) - [Form Break](properties_Markers.md#form-break) - [Form Detail](properties_Markers.md#form-detail) - [Form Footer](properties_Markers.md#form-footer) - [Form Header](properties_Markers.md#form-header) - [Form Name](properties_FormProperties.md#form-name) - [Form Type](properties_FormProperties.md#form-type) - [Inherited Form Name](properties_FormProperties.md#inherited-form-name) - [Inherited Form Table](properties_FormProperties.md#inherited-form-table) - [Maximum Height](properties_WindowSize.md#maximum-height-minimum-height) - [Maximum Width](properties_WindowSize.md#maximum-width-minimum-width) - [Method](properties_Action.md#method) - [Minimum Height](properties_WindowSize.md#maximum-height-minimum-height) - [Minimum Width](properties_WindowSize.md#maximum-width-minimum-width) - [Pages](properties_FormProperties.md#pages) - [Print Settings](properties_Print.md#settings) - [Published as Subform](properties_FormProperties.md#published-as-subform) - [Save Geometry](properties_FormProperties.md#save-geometry) - [Window Title](properties_FormProperties.md#window-title)
