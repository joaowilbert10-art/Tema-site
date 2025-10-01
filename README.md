# Tema Shopify - Marca de Depilação Íntima Masculina

Um tema Shopify profissional e otimizado para marcas de depilação íntima masculina, focado nos mercados de Portugal e Espanha. Desenvolvido com foco em conversão, performance e conformidade GDPR.

## 🚀 Características Principais

### ✨ Design & UX
- **Design Moderno**: Interface limpa e profissional focada em conversão
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Acessibilidade**: Conformidade AA WCAG 2.1
- **Performance**: Core Web Vitals otimizados (Lighthouse ≥90)

### 🎨 Sistema de Cores
- **Base 900**: #1A1A1A (Ebony Black) - Texto principal
- **Base 800**: #2E2E2E (Charcoal Gray) - Texto secundário  
- **Base 050**: #F3F3F3 (Light Silver) - Fundo
- **Accent 700**: #C1916A (Bronze Gold) - Destaque
- **CTA 600**: #009F91 (Teal Green) - Botões principais
- **Warm 200**: #D8C8B0 (Warm Sand) - Fundos quentes

### 🌍 Internacionalização
- **Português (PT)**: Localização completa para Portugal
- **Espanhol (ES)**: Localização completa para Espanha
- **Mudança de Idioma**: Seletor automático no header
- **Moeda**: Suporte para EUR (€)

### 📱 Seções da Landing Page
1. **Hero Section**: Título, subtítulo, CTA e imagem/vídeo
2. **Benefits**: 3 colunas com benefícios do produto
3. **Social Proof**: Carousel de reviews e avaliações
4. **Video Demo**: Vídeo de demonstração/storytelling
5. **Educational**: Seção educativa (quebra de objeções)
6. **Bundles**: Ofertas e kits de produtos
7. **Trust & Security**: Garantias e elementos de confiança
8. **FAQ**: Perguntas frequentes em accordion
9. **Footer**: Links, newsletter e informações de contacto

### 🔧 Funcionalidades Técnicas
- **Shopify 2.0**: Compatível com Online Store 2.0
- **Sections Configuráveis**: Todas as seções editáveis via Customizer
- **GDPR Compliant**: Banner de consentimento de cookies
- **SEO Otimizado**: Meta tags, Open Graph, dados estruturados
- **Analytics**: Integração com Google Tag Manager
- **Performance**: Lazy loading, minificação, otimização de imagens

## 📁 Estrutura do Projeto

```
tema-shopify/
├── assets/                    # CSS, JS, imagens e ícones
│   ├── base.css              # Estilos principais com Tailwind
│   ├── global.js             # JavaScript global
│   ├── icon-sprite.svg       # Sprite de ícones SVG
│   ├── placeholder-*.jpg     # Imagens placeholder
│   ├── tailwind.config.js    # Configuração Tailwind
│   ├── postcss.config.js     # Configuração PostCSS
│   └── package.json          # Dependências Node.js
├── config/                   # Configurações do tema
│   ├── settings_schema.json  # Schema de configurações
│   └── settings_data.json    # Valores padrão
├── layout/                   # Layouts principais
│   └── theme.liquid          # Layout principal
├── locales/                  # Ficheiros de tradução
│   ├── pt-PT.json           # Português (Portugal)
│   └── es-ES.json           # Espanhol (Espanha)
├── sections/                 # Seções do tema
│   ├── header.liquid         # Cabeçalho
│   ├── footer.liquid         # Rodapé
│   ├── section-hero.liquid   # Seção Hero
│   ├── section-benefits.liquid
│   ├── section-reviews.liquid
│   ├── section-video.liquid
│   ├── section-educational.liquid
│   ├── section-bundles.liquid
│   ├── section-trust.liquid
│   └── section-faq.liquid
├── snippets/                 # Componentes reutilizáveis
│   ├── button-primary.liquid
│   ├── badge.liquid
│   ├── rating-stars.liquid
│   ├── price.liquid
│   ├── icon.liquid
│   ├── meta-tags.liquid
│   └── cookie-consent.liquid
├── templates/                # Templates de páginas
│   ├── index.json           # Página inicial
│   ├── page.landing.json    # Template de landing page
│   ├── product.json         # Página de produto
│   └── collection.json      # Página de coleção
└── README.md                # Este ficheiro
```

## 🛠️ Instalação

### Pré-requisitos
- [Shopify CLI](https://shopify.dev/themes/tools/cli) instalado
- Conta Shopify (desenvolvimento ou produção)
- Node.js 16+ (para desenvolvimento local)

### 1. Instalação via Shopify CLI

```bash
# Clonar o repositório
git clone <repository-url>
cd tema-shopify

# Instalar dependências Node.js
npm install

# Conectar à loja Shopify
shopify theme dev

# Ou fazer push direto para produção
shopify theme push
```

### 2. Instalação Manual

1. **Comprimir o tema**: Criar um ficheiro ZIP com todos os ficheiros
2. **Upload via Admin**: 
   - Ir para `Online Store > Themes`
   - Clicar em `Upload theme`
   - Selecionar o ficheiro ZIP
   - Clicar em `Upload`

### 3. Configuração Inicial

Após a instalação:

1. **Ativar o tema** no painel de administração
2. **Personalizar** via `Online Store > Themes > Customize`
3. **Configurar** as definições em `Theme settings`
4. **Adicionar conteúdo** às seções da landing page

## ⚙️ Configuração

### Configurações do Tema

Aceder a `Online Store > Themes > Customize > Theme settings`:

#### 🎨 Brand Settings
- **Nome da Marca**: Nome da sua marca
- **Logo**: Upload do logo (recomendado: SVG ou PNG transparente)
- **Favicon**: Ícone do site (32x32px PNG)

#### 🌈 Color Scheme
- **Cores Base**: Personalizar as cores principais
- **Cores de Destaque**: Ajustar cores de CTA e accent
- **Cores Quentes**: Configurar cores de fundo

#### 📝 Typography
- **Fonte dos Títulos**: Poppins (recomendado)
- **Fonte do Corpo**: Montserrat (recomendado)
- **Escala**: Ajustar tamanhos das fontes

#### 📱 Layout
- **Largura da Página**: 1200px (recomendado)
- **Espaçamento**: Configurar espaçamento entre seções
- **Header**: Configurar header fixo/transparente

#### 🔒 GDPR & Privacy
- **Ativar GDPR**: Banner de consentimento de cookies
- **URLs**: Links para política de privacidade e termos
- **Texto**: Personalizar mensagens do banner

#### 📊 Analytics
- **Google Tag Manager**: ID do GTM (GTM-XXXXXXX)
- **Google Analytics**: ID do GA (GA-XXXXXXX)

#### 💳 Payment Icons
- **Métodos de Pagamento**: Ativar/desativar ícones
- **MB WAY**: Específico para Portugal
- **Multibanco**: Específico para Portugal
- **PayPal**: Internacional
- **Cartões**: Visa, Mastercard, etc.

### Configuração das Seções

#### Hero Section
1. **Título Principal**: Texto do H1
2. **Subtítulo**: Descrição do produto
3. **CTA**: Botão principal (texto + URL)
4. **Imagem/Vídeo**: Media principal
5. **Badges**: 3 badges de confiança

#### Benefits Section
1. **Título**: Título da seção
2. **Benefícios**: 3 benefícios com ícones
3. **Ícones**: Selecionar ícones apropriados
4. **Textos**: Títulos e descrições

#### Reviews Section
1. **Título**: Título da seção
2. **Reviews**: Adicionar reviews dos clientes
3. **Avaliações**: Sistema de estrelas (1-5)
4. **UGC**: Ativar chamada para conteúdo do utilizador

#### Video Section
1. **Título**: Título da seção
2. **Descrição**: Texto de apoio
3. **Vídeo**: URL do YouTube/Vimeo
4. **Autoplay**: Configurar reprodução automática

#### Educational Section
1. **Título**: Título da seção
2. **Comparação**: "Errado vs Certo"
3. **Blocos**: 2 blocos de comparação
4. **Cores**: Vermelho (errado) vs Verde (certo)

#### Bundles Section
1. **Título**: Título da seção
2. **Kits**: 3 kits de produtos
3. **Preços**: Configurar preços
4. **Funcionalidades**: Lista de funcionalidades
5. **CTAs**: Botões de compra

#### Trust Section
1. **Título**: Título da seção
2. **Pontos de Confiança**: 3 elementos
3. **Ícones**: Ícones de garantia, devolução, etc.
4. **CTA**: Botão opcional

#### FAQ Section
1. **Título**: Título da seção
2. **Perguntas**: Adicionar perguntas frequentes
3. **Respostas**: Respostas em HTML
4. **Accordion**: Funcionalidade de expansão

## 🎨 Personalização

### Cores
As cores podem ser personalizadas via `Theme settings > Color Scheme`:

```css
/* Cores personalizadas */
:root {
  --color-base-900: #1A1A1A;    /* Texto principal */
  --color-base-800: #2E2E2E;    /* Texto secundário */
  --color-base-050: #F3F3F3;    /* Fundo */
  --color-accent-700: #C1916A;  /* Destaque */
  --color-cta-600: #009F91;     /* CTA */
  --color-warm-200: #D8C8B0;    /* Fundo quente */
}
```

### Tipografia
Configurar fontes via `Theme settings > Typography`:

```css
/* Fontes personalizadas */
:root {
  --font-heading-family: 'Poppins', sans-serif;
  --font-body-family: 'Montserrat', sans-serif;
}
```

### Layout
Ajustar layout via `Theme settings > Layout`:

```css
/* Layout personalizado */
:root {
  --container-max-width: 1400px;
  --section-padding: 80px;
}
```

## 📱 Responsividade

O tema é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Testes de Responsividade
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1440px)

## 🚀 Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregadas sob demanda
- **Minificação**: CSS e JS minificados
- **Compressão**: Imagens otimizadas (WebP/AVIF)
- **Critical CSS**: CSS crítico inline
- **Preload**: Recursos críticos pré-carregados

### Métricas Alvo
- **Lighthouse Performance**: ≥ 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Testes de Performance
```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Testar performance
lighthouse https://your-store.myshopify.com --view
```

## 🔍 SEO

### Meta Tags
- **Título**: Dinâmico por página
- **Descrição**: Meta description personalizada
- **Open Graph**: Tags para redes sociais
- **Twitter Cards**: Cards para Twitter
- **Canonical**: URLs canónicas

### Dados Estruturados
- **Organization**: Informações da empresa
- **Product**: Dados do produto
- **BreadcrumbList**: Navegação estrutural
- **FAQPage**: Perguntas frequentes
- **Review**: Avaliações de produtos

### URLs Amigáveis
- **Produtos**: `/products/nome-do-produto`
- **Coleções**: `/collections/nome-da-colecao`
- **Páginas**: `/pages/nome-da-pagina`

## 🔒 GDPR & Privacidade

### Banner de Cookies
- **Conformidade**: GDPR compliant
- **Consentimento**: Aceitar/Recusar cookies
- **Categorias**: Necessários, Analytics, Marketing
- **Persistência**: Lembrar escolha do utilizador

### Configuração GDPR
```liquid
{%- if settings.gdpr_enabled -%}
  <!-- Banner de consentimento -->
  {% render 'cookie-consent' %}
{%- endif -%}
```

### Políticas Necessárias
- **Política de Privacidade**: `/pages/privacy-policy`
- **Termos e Condições**: `/pages/terms-conditions`
- **Política de Cookies**: `/pages/cookie-policy`

## 🌍 Internacionalização

### Idiomas Suportados
- **Português (PT)**: `pt-PT.json`
- **Espanhol (ES)**: `es-ES.json`

### Configuração de Idiomas
1. **Admin Shopify**: `Settings > Languages`
2. **Adicionar Idiomas**: Português e Espanhol
3. **Configurar Domínios**: `pt.loja.com`, `es.loja.com`
4. **Testar**: Verificar todas as strings traduzidas

### Moeda
- **EUR (€)**: Euro para Portugal e Espanha
- **Formatação**: `€49,90` (formato europeu)
- **Conversão**: Automática via Shopify

## 📊 Analytics

### Google Tag Manager
```javascript
// Configuração GTM
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GTM-XXXXXXX');
```

### Eventos Personalizados
- **Add to Cart**: Adicionar ao carrinho
- **Purchase**: Compra concluída
- **Newsletter**: Subscrição newsletter
- **Video Play**: Reprodução de vídeo

### Consent Mode v2
```javascript
// Consent Mode v2
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});
```

## 🧪 Testes

### Testes de Funcionalidade
- [ ] Navegação entre páginas
- [ ] Adicionar ao carrinho
- [ ] Processo de checkout
- [ ] Formulários de contacto
- [ ] Newsletter
- [ ] Mudança de idioma
- [ ] Banner de cookies

### Testes de Acessibilidade
- [ ] Navegação por teclado
- [ ] Leitores de ecrã
- [ ] Contraste de cores
- [ ] Alt text em imagens
- [ ] ARIA labels

### Testes de Performance
- [ ] Lighthouse audit
- [ ] Core Web Vitals
- [ ] Mobile performance
- [ ] Tempo de carregamento
- [ ] Tamanho das imagens

## 🚀 Deploy

### Desenvolvimento
```bash
# Modo desenvolvimento
shopify theme dev

# Preview local
shopify theme serve
```

### Produção
```bash
# Push para produção
shopify theme push --live

# Ou via ZIP
shopify theme push --unpublished
```

### Backup
```bash
# Fazer backup do tema atual
shopify theme pull

# Restaurar backup
shopify theme push --theme=backup-theme
```

## 🔧 Manutenção

### Atualizações
- **Shopify CLI**: `npm update -g @shopify/cli`
- **Dependências**: `npm update`
- **Tema**: Fazer backup antes de atualizar

### Monitorização
- **Performance**: Google PageSpeed Insights
- **Uptime**: UptimeRobot ou similar
- **Analytics**: Google Analytics 4
- **Erros**: Google Search Console

### Logs
- **Shopify Admin**: `Settings > Notifications`
- **Browser Console**: F12 > Console
- **GTM Debug**: Google Tag Assistant

## 📞 Suporte

### Documentação
- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)

### Recursos Úteis
- [Shopify Community](https://community.shopify.com/)
- [Shopify Partners](https://partners.shopify.com/)
- [Shopify Academy](https://academy.shopify.com/)

### Contacto
Para suporte técnico ou personalizações:
- **Email**: suporte@exemplo.com
- **Documentação**: [Link para docs]
- **Issues**: [GitHub Issues]

## 📄 Licença

Este tema é licenciado sob a [MIT License](LICENSE).

## 🎯 Roadmap

### Versão 1.1
- [ ] Seção de comparação de produtos
- [ ] Integração com Klaviyo
- [ ] A/B testing de CTAs
- [ ] Chat de suporte

### Versão 1.2
- [ ] Página de blog
- [ ] Sistema de reviews avançado
- [ ] Wishlist
- [ ] Quick view de produtos

### Versão 2.0
- [ ] PWA (Progressive Web App)
- [ ] Integração com WhatsApp
- [ ] Sistema de afiliados
- [ ] Analytics avançados

---

**Desenvolvido com ❤️ para o mercado português e espanhol**

*Última atualização: {{ 'now' | date: '%d/%m/%Y' }}*
