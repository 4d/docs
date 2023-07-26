---
id: plug-ins
title: Plug-ins
---

Ao desenvolver uma aplicação 4D, irá descobrir muitas capacidades que não notou quando começou. Pode mesmo aumentar a versão padrão de 4D adicionando **plug-ins** ao seu ambiente de desenvolvimento 4D.

## Porquê a necessidade de um plug-in?

Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure.

It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.

The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity.

## Por que a necessidade de um plug-in?

Um plug-in é um pedaço de código que 4D lança no início. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade.

Normalmente, um plug-in faz coisas que:
- 4D não pode fazer (ou seja, tecnologia de plataforma específica),
- será muito difícil de escrever usando apenas 4D,
- só estão disponíveis como Ponto de Entrada Plug-in

Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

- Uma rotina **plug in** é uma rotina escrita em língua nativa (geralmente C ou C++) que provoca uma ação.
- Uma **área externa** é uma parte de um formulário que pode mostrar quase tudo e interagir com o usuário quando necessário.
- Um **processo externo** é um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os códigos de processo pertencem ao plug-in, 4D está simplesmente presente para receber/enviar eventos para o processo.

### Nota importante

Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e áreas. Não há praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in é uma peça de código de "amostra". É o plug-in que funciona dentro do 4D, e não o contrário. Como peça de código, é o anfitrião do 4D; não é uma aplicação isolada. Partilha o tempo e a memória da CPU com 4D e outros plug-ins, portanto, deve ser um código bem educado, utilizando apenas o que é necessário para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a `PA_Yield()` para dar tempo ao planificador 4D, a menos que sua tarefa seja crítica tanto para ele quanto para a aplicação.

## Como criar um plug-in?

4D fornece no GitHub um SDK plug-in de código aberto [****](https://github.com/4d/4D-Plugin-SDK), contendo o API de Plugin 4D e o Assistente de Plugin 4D:

- o [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito em C, acrescenta mais de 400 funções que o ajudam a criar facilmente os seus próprios plug-ins para adicionar novas funcionalidades à sua aplicação 4D. As funções API Plug-in 4D gerem todas as interacções entre a aplicação 4D e o seu plug-in.
- O [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) é uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código.

## How to install a plug-in?

You install plug-ins in the 4D environment by copying their files into the appropriate folder.

“PluginName.bundle” folders contain both Windows and macOS versions of 4D plug-ins. Their specific internal architecture lets 4D Server load the appropriate version according to the platform where the client machine will be run. To install a plug-in in your environment, you just need to put the “PluginName.bundle” folder or package concerned into the desired **Plugins** folder.

You can put the Plugins folder in two different places:

- At the level of the 4D executable application, i.e.:
  - No Windows: junto ao ficheiro .exe
  - Under macOS: at the first level of the Contents folder inside the application package. In this case, plug-ins are available in every project opened by this application.
- Ao mesmo nível que a pasta Project. In this case, plug-ins are only available in this particular project.

The choice of location depends on how you want to use the plug-in.

If the same plug-in is placed in both locations, 4D will only load the one located next to the structure. In an application that is compiled and merged using 4D Volume Desktop, if there are several instances of the same plug-in present, this will prevent the application from opening.

Os plug-ins são carregados por 4D quando a aplicação for lançada, pelo que terá de abandonar a sua aplicação 4D antes de os instalar. Então abra seu projeto com 4D. If any plug-in requires a specific license for use, it will be loaded but not available for use.