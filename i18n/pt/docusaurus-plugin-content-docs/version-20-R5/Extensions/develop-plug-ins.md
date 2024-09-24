---
id: develop-plug-ins
title: Plug-ins de desenvolvimento
---

## Porquê a necessidade de um plug-in?

Embora 4D ofereça centenas de métodos integrados usados para manipular objetos, registros e implementar a interface do usuário, pode ser necessário algum uso ou recurso especial (às vezes dependente da plataforma): alguém pode precisar de ODBC no Windows, outro pode precisar de serviços da Apple no macOS, enquanto outro ainda pode querer implementar ferramentas estatísticas específicas, login em redes sociais, plataforma de pagamento, acesso a arquivos pela rede, uma interface de usuário especial ou uma estrutura de imagem privada.

É óbvio que cobrir todas as áreas dos sistemas operacionais macOS e Windows com comandos 4D certamente levaria a um produto com milhares de comandos e, ao mesmo tempo, a maioria dos usuários não teria necessidade de um conjunto tão grande de recursos. Além disso, a criação de uma ferramenta tão abrangente tornaria o ambiente 4D incrivelmente complexo e levaria meses de estudo para a maioria dos usuários antes que resultados úteis pudessem ser esperados.

A natureza modular do ambiente 4D permite a criação de aplicativos básicos, mas não impede o desenvolvimento de sistemas altamente complexos. A arquitetura 4D Plug-in abre o ambiente 4D para qualquer tipo de aplicação ou usuário. Os 4D Plug-ins multiplicam o poder e a produtividade da aplicação ou do usuário.

## O que é um plug-in e o que ele pode fazer?

Um plug-in é um pedaço de código que 4D lança no início. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade.

Normalmente, um plug-in faz coisas que:

- 4D não pode fazer (ou seja, tecnologia de plataforma específica),
- será muito difícil de escrever usando apenas 4D,
- só estão disponíveis como Ponto de Entrada Plug-in

Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

- Uma **rotina de plug-ins** é uma rotina escrita em linguagem nativa (normalmente C ou C++) que causa uma ação.
- Uma **área externa** é uma parte de um formulário que pode exibir quase tudo e interagir com o usuário quando necessário.
- Un **proceso externo** es un proceso que se ejecuta solo, normalmente en un bucle, haciendo casi todo lo que quiere. Todos os códigos de processo pertencem ao plug-in, 4D está simplesmente presente para receber/enviar eventos para o processo.

### Nota importante

Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e áreas. Não há praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in é uma peça de código de "amostra". É o plug-in que funciona dentro do 4D, e não o contrário. Como peça de código, é o anfitrião do 4D; não é uma aplicação isolada. Partilha o tempo e a memória da CPU com 4D e outros plug-ins, portanto, deve ser um código bem educado, utilizando apenas o que é necessário para rodar. Por ejemplo, en los bucles largos, un plug-in debe llamar a `PA_Yield()` para dar tiempo al planificador 4D a menos que su tarea sea crítica tanto para él como para la aplicación.

## Como criar um plug-in?

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. As funções API Plug-in 4D gerem todas as interacções entre a aplicação 4D e o seu plug-in.
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código.

## Partilhar plug-ins

Lo animamos a que apoye a la comunidad de desarrolladores 4D compartiendo sus plug-ins, preferiblemente en la [plataforma GitHub](https://github.com/topics/4d-plugin). Recomendamos que utilice el tema **`4d-plugin`** para ser referenciado correctamente.
