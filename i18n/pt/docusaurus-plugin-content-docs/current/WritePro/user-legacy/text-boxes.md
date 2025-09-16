---
id: text-boxes
title: Text boxes
displayed_sidebar: docs
slug: /WritePro/user/text-boxes
---


As caixas de texto são áreas que se ancoram a uma página ou seção e podem ser preenchidas com texto, imagens online ou tabelas. As caixas de texto podem ser colocadas em qualquer parte da página e responder à necessidades específicas, por exemplo, para inserir o nome ou logotipo de uma empresa ou uma área de endereços.

![](../../assets/en/WritePro/pict6131919.EN.png)

**Nota:** uma caixa de texto não pode conter cabeçalhos, rodapés, colunas, imagens ancoradas ou outras caixas de texto.

As caixas de texto são adicionadas com uma posição absoluta, na frente/atrás do texto, assim como ancoradas a uma página ou a partes específicas de um documento no modo Página: cabeçalho, rodapé, seção, todas as seções ou uma subseção. As caixas de texto também podem ser usadas em modo aninhado (ancoradas à layer box).

Pode adicionar uma caixa de texto a um documento 4D Write Pro das maneiras abaixo:

* utilizando o comando **WP New text box**,
* utilizando a ação padrão *insertTextBox*

Para selecionar uma caixa de texto, o usuário tem que clicar nela (**Ctrl/Cmd+clique** se a caixa de texto estiver na camada de fundo). Uma vez selecionado, a caixa de texto pode ser movida ou redimensionada usando o mouse ou as teclas de flecha.

Para eliminar uma caixa de texto selecionada, pode pressionar a tecla **Delete** ou **Retrocesso**, utilizar a ação padrão **textBox/eliminar**, ou executar o comando **WP DELETE TEXT BOX**.

Os atributos das caixas de texto são manejadas com o comando [WP SET ATTRIBUTES](../commands/wp-set-attributes) ou *ações 4D Write Pro*. Estão disponíveis os seguintes atributos e ações:  
  
| **Propriedade (constante)** | **Ação padrão**       | **Comentários**                                                                                                   |
| --------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| wk width                    | textBox/ancho         | Se forem definidas em "auto", a largura se converte a 8cm já que a largura da caixa de texto não pode ser "auto". |
| wk height                   | textBox/alto          | Se estiver em "auto", a altura se ajusta ao conteúdo.                                                             |
| wk padding                  | textBox/relleno       |                                                                                                                   |
| wk border \[...\]           | textBox/borde\[...\]  |                                                                                                                   |
| wk background \[...\]       | textBox/fondo\[...\]  |                                                                                                                   |
| wk vertical align           | textBox/verticalAlign |                                                                                                                   |
| wk id                       | \-                    | não pode estar vazio para uma caixa de texto                                                                      |
| wk anchor \[...\]           | textBox/anchor\[...\] |                                                                                                                   |
| wk owner                    | \-                    | só leitura                                                                                                        |
| wk protected                | \-                    |                                                                                                                   |
| wk style sheet              | \-                    | só leitura e sempre "" (sem folha de estilo)                                                                      |

As caixas de texto não são mostradas se:

* o modo de vista é Rascunho;
* estão centrados ou ancorados a seções e a opção **Mostrar HTML WYSIWYG** está marcada;
* a opción "fundo visível" não estiver ativada.