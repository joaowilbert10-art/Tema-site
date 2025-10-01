# 🚀 Tema Shopify OS 2.0 - Intimate Grooming

Um tema Shopify moderno e otimizado para marcas de cuidados íntimos masculinos, desenvolvido com foco em conversão, performance e acessibilidade.

## ✨ Características

- **Shopify Online Store 2.0** - Totalmente compatível com a arquitetura mais recente
- **Performance Otimizada** - Core Web Vitals otimizados para SEO
- **Acessibilidade WCAG AA** - Padrões de acessibilidade implementados
- **Responsivo** - Design adaptável para todos os dispositivos
- **Internacionalização** - Suporte completo para PT-PT e ES-ES
- **GDPR Compliant** - Banner de cookies e consentimento
- **SEO Otimizado** - Meta tags, structured data e Open Graph

## 🛠️ Tecnologias

- **Liquid** - Template engine do Shopify
- **CSS Custom Properties** - Sistema de design consistente
- **Vanilla JavaScript** - Performance otimizada
- **Shopify CLI** - Desenvolvimento e deploy

## 📁 Estrutura do Projeto

```
Tema-site/
├── assets/                 # Arquivos estáticos (CSS, JS, imagens)
│   ├── base.css           # Estilos principais
│   ├── global.js          # JavaScript global
│   └── critical.js        # JavaScript crítico
├── config/                # Configurações do tema
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/                # Layouts principais
│   └── theme.liquid       # Layout principal
├── locales/               # Arquivos de tradução
│   ├── pt-PT.json         # Português (Portugal)
│   └── es-ES.json         # Espanhol (Espanha)
├── sections/              # Seções do tema
│   ├── header-group.json  # Grupo de seções do cabeçalho
│   ├── footer-group.json  # Grupo de seções do rodapé
│   ├── section-hero.liquid
│   ├── section-benefits.liquid
│   ├── section-reviews.liquid
│   ├── section-video.liquid
│   ├── section-educational.liquid
│   ├── section-bundles.liquid
│   ├── section-trust.liquid
│   ├── section-faq.liquid
│   ├── main-product.liquid
│   ├── main-collection.liquid
│   ├── main-page.liquid
│   ├── main-404.liquid
│   └── product-recommendations.liquid
├── snippets/              # Componentes reutilizáveis
│   ├── button-primary.liquid
│   ├── badge.liquid
│   ├── rating-stars.liquid
│   ├── price.liquid
│   ├── icon.liquid
│   ├── cookie-consent.liquid
│   ├── meta-tags.liquid
│   ├── stylesheets.liquid
│   ├── fonts.liquid
│   ├── scripts.liquid
│   ├── theme-styles-variables.liquid
│   ├── color-schemes.liquid
│   ├── theme-editor.liquid
│   ├── skip-to-content-link.liquid
│   ├── search-modal.liquid
│   └── quick-add-modal.liquid
├── templates/             # Templates de página
│   ├── index.json         # Página inicial
│   ├── product.json       # Página de produto
│   ├── collection.json    # Página de coleção
│   ├── page.json          # Página de conteúdo
│   ├── cart.json          # Carrinho
│   └── 404.json           # Página de erro
└── README.md              # Este arquivo
```

## 🚀 Instalação

### Pré-requisitos

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) instalado
- Conta Shopify com acesso ao admin
- Git instalado

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/Tema-site.git
cd Tema-site
```

### 2. Instale o Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### 3. Faça Login no Shopify

```bash
shopify auth login
```

### 4. Conecte ao Seu Store

```bash
shopify theme dev --store=seu-store.myshopify.com
```

## 🛠️ Desenvolvimento

### Comandos Principais

```bash
# Iniciar servidor de desenvolvimento
shopify theme dev

# Fazer build do tema
shopify theme build

# Fazer push para o store
shopify theme push

# Fazer pull do store
shopify theme pull

# Listar temas
shopify theme list

# Deletar tema
shopify theme delete
```

### Estrutura de Desenvolvimento

1. **Desenvolvimento Local**: Use `shopify theme dev` para desenvolvimento local
2. **Testes**: Teste em ambiente de desenvolvimento antes de fazer push
3. **Versionamento**: Use Git para controle de versão
4. **Deploy**: Use `shopify theme push` para deploy em produção

## 🎨 Personalização

### Cores do Tema

As cores podem ser personalizadas através do admin do Shopify:

- **Base 900**: #1A1A1A (Preto principal)
- **Base 800**: #2E2E2E (Cinza escuro)
- **Base 050**: #F3F3F3 (Cinza claro)
- **Accent 700**: #C1916A (Dourado bronze)
- **CTA 600**: #009F91 (Verde teal)
- **Warm 200**: #D8C8B0 (Areia quente)

### Tipografia

- **Cabeçalhos**: Poppins (400, 500, 600, 700)
- **Corpo**: Montserrat (400, 500, 600, 700)

### Seções Editáveis

Todas as seções são editáveis através do Shopify Customizer:

- Hero Section
- Benefits Section
- Reviews Section
- Video Section
- Educational Section
- Bundles Section
- Trust Section
- FAQ Section

## 🌍 Internacionalização

O tema suporta múltiplos idiomas:

- **Português (Portugal)**: `pt-PT.json`
- **Espanhol (Espanha)**: `es-ES.json`

### Adicionando Novos Idiomas

1. Crie um novo arquivo em `locales/` (ex: `fr-FR.json`)
2. Traduza todas as strings do `pt-PT.json`
3. Configure o idioma no admin do Shopify

## 📱 Responsividade

O tema é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

Implementações de acessibilidade:

- **Skip to Content**: Link para pular para o conteúdo principal
- **ARIA Labels**: Labels apropriados para elementos interativos
- **Keyboard Navigation**: Navegação completa por teclado
- **Focus Management**: Gerenciamento de foco em modais
- **Color Contrast**: Contraste de cores WCAG AA

## 🚀 Performance

Otimizações de performance:

- **Critical CSS**: CSS crítico inline
- **Lazy Loading**: Carregamento preguiçoso de imagens
- **Minified Assets**: Assets minificados
- **Core Web Vitals**: Otimizado para métricas do Google

## 🔒 GDPR Compliance

Funcionalidades de privacidade:

- **Cookie Banner**: Banner de consentimento de cookies
- **Privacy Policy**: Link para política de privacidade
- **Terms of Service**: Link para termos de serviço
- **Data Processing**: Conformidade com GDPR

## 📊 Analytics

Integração com analytics:

- **Google Tag Manager**: Suporte completo
- **Consent Mode v2**: Modo de consentimento
- **Event Tracking**: Rastreamento de eventos
- **E-commerce Tracking**: Rastreamento de e-commerce

## 🛡️ Segurança

Medidas de segurança implementadas:

- **Content Security Policy**: Política de segurança de conteúdo
- **XSS Protection**: Proteção contra XSS
- **CSRF Protection**: Proteção contra CSRF
- **Secure Headers**: Cabeçalhos de segurança

## 📈 SEO

Otimizações de SEO:

- **Meta Tags**: Tags meta dinâmicas
- **Open Graph**: Tags Open Graph
- **Twitter Cards**: Cards do Twitter
- **Structured Data**: Dados estruturados JSON-LD
- **Sitemap**: Sitemap automático
- **Robots.txt**: Arquivo robots.txt

## 🧪 Testes

### Testes de Acessibilidade

```bash
# Instalar axe-core
npm install -g @axe-core/cli

# Testar acessibilidade
axe https://seu-store.myshopify.com
```

### Testes de Performance

```bash
# Lighthouse CI
npm install -g @lhci/cli

# Testar performance
lhci autorun
```

## 🚀 Deploy

### Deploy Automático via GitHub

1. Configure GitHub Actions
2. Adicione secrets do Shopify
3. Configure deploy automático na branch `main`

### Deploy Manual

```bash
# Fazer push para produção
shopify theme push --live

# Fazer push para tema de desenvolvimento
shopify theme push --development
```

## 📝 Changelog

### v1.0.0 (2024-01-XX)

- ✨ Lançamento inicial
- 🎨 Design system completo
- 🌍 Suporte a PT-PT e ES-ES
- ♿ Acessibilidade WCAG AA
- 🚀 Performance otimizada
- 🔒 GDPR compliance
- 📊 Analytics integrado
- 🛡️ Segurança implementada

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

Para suporte, entre em contato:

- **Email**: suporte@seudominio.com
- **GitHub Issues**: [Criar Issue](https://github.com/seu-usuario/Tema-site/issues)
- **Documentação**: [Wiki do Projeto](https://github.com/seu-usuario/Tema-site/wiki)

## 🙏 Agradecimentos

- Shopify pela plataforma incrível
- Comunidade Shopify pelos recursos e documentação
- Contribuidores do projeto

---

**Desenvolvido com ❤️ para a comunidade Shopify**