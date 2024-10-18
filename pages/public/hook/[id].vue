<script setup lang="ts">
const navigateToCreatorProfile = () => {
  console.log("* Navegar para perfil do criador")
}

const DOC = `
# Projeto: MyApp

MyApp é uma aplicação web para gerenciar tarefas diárias. A aplicação foi desenvolvida utilizando Vue.js, Firebase Firestore e TypeScript.

## Índice
1. [Instalação](#instalação)
2. [Configuração](#configuração)
3. [Estrutura de Pastas](#estrutura-de-pastas)
4. [Comandos Disponíveis](#comandos-disponíveis)
5. [Contribuição](#contribuição)
6. [Licença](#licença)

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/exemplo/myapp.git
   \`\`\`
2. Entre na pasta do projeto:
   \`\`\`bash
   cd myapp
   \`\`\`
3. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

4. Inicie o servidor local:
   \`\`\`bash
   npm run serve
   \`\`\`

## Configuração

A aplicação utiliza o Firebase Firestore como banco de dados. Para configurar o projeto com suas próprias credenciais do Firebase, siga as instruções abaixo:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Adicione o arquivo \`firebaseConfig.js\` na raiz do projeto com o seguinte conteúdo:

   \`\`\`javascript
   export const firebaseConfig = {
     apiKey: "SUA_API_KEY",
     authDomain: "SEU_AUTH_DOMAIN",
     projectId: "SEU_PROJECT_ID",
     storageBucket: "SEU_STORAGE_BUCKET",
     messagingSenderId: "SEU_MESSAGING_SENDER_ID",
     appId: "SEU_APP_ID"
   };
   \`\`\`

3. Certifique-se de que as regras do Firestore estão configuradas corretamente para o seu ambiente de desenvolvimento.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

\`\`\`
myapp/
│
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Arquivos de mídia (imagens, fontes, etc.)
│   ├── components/         # Componentes Vue.js reutilizáveis
│   ├── views/              # Páginas da aplicação
│   ├── store/              # Vuex (gerenciamento de estado)
│   ├── router/             # Configuração de rotas Vue Router
│   └── services/           # Serviços de integração (ex: Firebase)
│
├── firebaseConfig.js       # Configuração Firebase
├── package.json            # Dependências do projeto
├── README.md               # Documentação do projeto
└── tsconfig.json           # Configurações do TypeScript
\`\`\`

## Comandos Disponíveis

Abaixo estão listados os principais comandos disponíveis para rodar e gerenciar o projeto:

- \`npm run serve\`: Inicia o servidor de desenvolvimento.
- \`npm run build\`: Gera uma versão otimizada para produção.
- \`npm run lint\`: Executa o linter para checar erros de estilo de código.
- \`npm run test\`: Executa os testes unitários.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

1. Fork o repositório.
2. Crie uma nova branch com sua feature ou correção de bug:
   \`\`\`bash
   git checkout -b minha-nova-feature
   \`\`\`
3. Commit suas alterações:
   \`\`\`bash
   git commit -m 'Adiciona nova feature'
   \`\`\`
4. Faça o push para a branch:
   \`\`\`bash
   git push origin minha-nova-feature
   \`\`\`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
`

const CODE = `
import { ref, onMounted } from 'vue';

interface User {
  id: string;
  name: string;
  email: string;
}

export function useCurrentUser() {
  const user = ref<User | null>(null);
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);

  // Simula uma requisição assíncrona para obter os dados do usuário atual
  const fetchCurrentUser = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Simulando um delay para uma requisição de API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Fake data de um usuário
      user.value = {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@email.com',
      };
    } catch (err) {
      error.value = 'Failed to fetch user data';
    } finally {
      loading.value = false;
    }
  };

  // Dispara a busca quando o componente é montado
  onMounted(fetchCurrentUser);

  return {
    user,
    loading,
    error,
  };
}
`

definePageMeta({
  layout: "public",
})
</script>

<template>
  <div class="grid gap-10 w-full">
    <HookPublicHeadline
      createBy="pedrodruviaro"
      title="useCurrentUser.ts"
      lang="typescript"
      :description="DOC"
      @wants-see-creator="navigateToCreatorProfile"
    />

    <ClientOnly>
      <HookPublicCode lang="typescript" :code="CODE" />
    </ClientOnly>
  </div>
</template>
