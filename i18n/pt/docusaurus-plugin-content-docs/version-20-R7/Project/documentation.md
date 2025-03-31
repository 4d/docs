---
id: documentation
title: Documentar um projecto
---

Nos projetos de aplicação, você pode documentar seus métodos e suas classes, formulários, tabelas ou campos. A criação de documentação é particularmente apropriada para projetos que estão sendo desenvolvidos por vários programadores e, em geral, é uma boa prática de programação. A documentação pode conter uma descrição de um elemento, bem como de qualquer informação necessária para entender como o elemento funciona na aplicação.

Os seguintes elementos do projeto aceitam documentação:

- Métodos (métodos banco de dados, métodos componentes, métodos projeto, métodos formulário, métodos 4D Mobile e triggers)
- Classes
- Formulários
- Tabela

Seus arquivos de documentação são escritos na sintaxe Markdown (arquivos .md) usando qualquer editor compatível com Markdown. São armazenados como ficheiros independentes na pasta do seu projeto.

A documentação é exibida na área de visualização (painel do lado direito) do Explorer:

![](../assets/en/Project/explorer_Doc.png)

También se puede exponer parcialmente como [consejos del editor de código](#viewing-documentation-in-the-code-editor).

## Ficheiros documentação

### Nome do ficheiro de documentação

Os arquivos de documentação têm o mesmo nome do elemento anexado, com a extensão ".md". Os arquivos de documentação têm o mesmo nome do elemento anexado, com a extensão ".md".

No Explorer, 4D exibe automaticamente o arquivo de documentação com o mesmo nome do elemento selecionado (veja abaixo).

### Arquitetura dos ficheiros de documentação

Todos los archivos de documentación se almacenan en la carpeta `Documentación`, situada en el primer nivel de la carpeta Package.

La arquitectura de la carpeta `Documentation` es la siguiente:

- `Documentation`
    - `Classes`
        - myClass.md
    - `DatabaseMethods`
        - onStartup.md
        - ...
    - `Formulários`
        - loginDial.md
        - ...
    - `Página Métodos`
        - myMethod.md
        - ...
    - `TableForms`
        - **1**
            - input.md
            - ...
        - ...
    - `Triggers`
        - table1.md
        - ...

- Um formulário projeto e seu método de formulário projeto compartilham o mesmo arquivo de documentação para formulário e método.

- Um formulário tabela e seu método de formulário tabela compartilham o mesmo arquivo de documentação para o formulário e o método.

> Renomear ou excluir um elemento documentado em seu projeto também renomeará ou excluirá o arquivo Markdown associado ao elemento.

## Documentação no Explorador

### Ver a documentação

Para visualizar a documentação na janela do Explorer:

1. Certifique-se de que a área de pré-visualização é mostrada.
2. Selecione o elemento documentado na lista do Explorador.
3. Haga clic en el botón **Documentation** situado debajo del área de vista previa.

![](../assets/en/Project/comments-explo2.png)

- Si no se ha encontrado ningún archivo de documentación para el elemento seleccionado, se muestra un botón **Crear** (ver más abajo).

- Caso contrário, se houver um arquivo de documentação para o elemento selecionado, o conteúdo será exibido na área. Os conteúdos não são diretamente editáveis no painel.

### Editar o ficheiro de documentação

Você pode criar e/ou editar um arquivo de documentação Markdown na janela Explorer para o elemento selecionado.

Se não houver um arquivo de documentação para o elemento selecionado, você poderá:

- haga clic en el botón **Crear** en el panel `Documentation` o,
- elija la opción **Modificar la documentación...** en el menú contextual o el menú de opciones del Explorador.

![](../assets/en/Project/comments-explo3.png)

4D cria automaticamente um arquivo .md com o nome apropriado com um modelo básico no local relevante e o abre com seu editor Markdown padrão.

Si ya existe un archivo de documentación para el elemento seleccionado, puede abrirlo con su editor de Markdown eligiendo la opción **Modificar la documentación...** del menú contextual o del menú de opciones del Explorador.

## Ver a documentação no editor de código

O editor de código 4D exibe uma parte da documentação de um método em sua dica de ajuda.

![](../assets/en/Project/codeEditor_Comments.png)

Si existe un archivo llamado `\<MethodName>.md` en la carpeta `\<package>/documentation`, el editor de código muestra (por prioridad):

- Todo texto introducido en una etiqueta de comentario HTML (`<!-- command documentation -->`) en la parte superior del archivo markdown.

- Or, if no html comment tag is used, the first sentence after a `# Description` tag of the markdown file.\
    Nesse caso, a primeira linha contém o **protótipo** do método, gerado automaticamente pelo analisador de código 4D.\
    Nesse caso, a primeira linha contém o **protótipo** do método, gerado automaticamente pelo analisador de código 4D.\
    Nesse caso, a primeira linha contém o **protótipo** do método, gerado automaticamente pelo analisador de código 4D.\
    Nesse caso, a primeira linha contém o **protótipo** do método, gerado automaticamente pelo analisador de código 4D.\
    Nesse caso, a primeira linha contém o **protótipo** do método, gerado automaticamente pelo analisador de código 4D.

:::note

Otherwise, the code editor displays [the block comment at the top of the method code](../code-editor/write-class-method.md#help-tips).

:::

## Definição do ficheiro de documentação

4D usa um modelo básico para criar ficheiros de documentação. Esta plantilla sugiere las funcionalidades específicas que permiten [mostrar la información en el editor de código](#viewing-documentation-in-the-code-editor).

Sin embargo, puede utilizar todas las [etiquetas Markdown soportadas](#supported-markdown).

Novos arquivos de documentação são criados com o seguinte conteúdo padrão:

![](../assets/en/Project/comments-explo4.png)

| Linha                                | Descrição                                                                                                                                                                          |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<!-- Escreva aqui o seu resumo -->` | Comentário HTML. Se utiliza prioritariamente como descripción del método en los [consejos del editor de código](#viewing-documentation-in-the-code-editor)         |
| ## Description                       | Título de nível 2 em Markdown. A primeira frase após essa tag ser usada como descrição do método nas dicas do editor de código, se o comentário HTML não for usado |
| ## Exemplo                           | No nível 2 do cabeçalho, você pode usar essa área para mostrar um código de amostra                                                                                                |
| ` ```4d Type here your example``` `  | Utilizado para formatar exemplos de código 4D (utiliza a biblioteca highlight.js)                                                               |

### Markdown suportado

- A etiqueta de título é suportada:

```md
# Title 1
## Title 2
### Title 3
```

- As etiquetas de estilo (itálico, negrito, riscado) são suportadas:

```md
_italic_
**bold**
**_bold/italic_**
~~strikethrough~~
```

- A tag do bloco de código (\`4d ... `) é suportado com destaque de código 4D:

````md
```4d
	var $txt : Text
	$txt:="Hello world!"  
```
````

- A etiqueta de tabela é suportada:

```md
| Parâmetro | Tipo | Descrição |
| --------- | ------ | ------------ |
| wpArea | Text |Área Write pro|
| toolbar | Text |Nome da barra de ferramentas |
```

- A etiqueta de ligação é suportada:

```md
// Case 1
The [documentation](https://doc.4d.com) of the command ....

// Case 2
[4D blog][1]

[1]: https://blog.4d.com
```

- As etiquetas de imagem são suportadas:

```md
![image info](pictures/image.png)

![logo 4D](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")

[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)
```

[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)

> Para más información, consulte la [guía Markdown de GitHub](https://guides.github.com/features/mastering-markdown/).

## Exemplo

En el archivo `WP SwitchToolbar.md`, puede escribir:

````md
<!-- This method returns a different logo depending on the size parameter -->


GetLogo (size) -> logo


| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| size      | Integer | in | Logo style selector (1 to 5)  |
| logo      | Picture | out | Selected logo |


## Description

This method returns a logo of a specific size, depending on the value of the *size* parameter.
1 = smallest size, 5 = largest size.

## Example

```4d
C_PICTURE($logo)
C_LONGINT($size)

//Get the largest logo
$logo:=GetLogo(5)
```
````

- Explorer view:

![](../assets/en/Project/explorer_Doc.png)

- Code editor view:

![](../assets/en/Project/comments-explo5.png)