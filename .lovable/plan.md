

# Tanin — Site One-Page de Consultoria

Site minimalista premium para a consultoria Tanin, focado em captura de leads B2B no universo do vinho.

## Design System
- **Paleta**: Vinho (#651827), Off-white (#f3eee7), Marrom escuro (#2a1f13), Vinho claro (#ac4b5a), Dourado suave (#ccbe8b)
- **Tipografia**: Playfair Display (títulos) + DM Sans (corpo/CTAs) via Google Fonts
- **Estilo**: Grid limpo, bordas suaves, linhas finas, detalhes dourados discretos
- **Logo**: Imagem fornecida pelo usuário (tanin.png)

## Estrutura (6 seções com âncoras + menu fixo)

### Menu Fixo
Navegação com âncoras: Início | Tese | Como eu trabalho | Para quem | Boletim | Contato. Efeito de scroll suave, fundo transparente que ganha background ao rolar.

### 1. Hero (Início)
- H1: "Por que eu deveria escolher o seu vinho?"
- Subheadline explicativa sobre estratégia 360 + IA
- 2 CTAs: "Agendar conversa" (primário, cor vinho) e "Assinar o Boletim Tanin" (secundário, outline)
- 3 selos discretos: Evino + Grand Cru | Prêmio ABComm 2024 | Fractional CMO
- Background com textura sutil (padrão CSS) e overlay off-white

### 2. Tese
- Título: "Performance digital e experiência física não são opostos."
- Texto curto + 3 bullets com ícones discretos

### 3. Como eu trabalho
- Título: "Do diagnóstico à execução, sem complicar."
- 3 cards numerados com detalhes de cada etapa (Diagnóstico, Plano 90 dias, Acompanhamento)
- CTA ao final: "Quero conversar"

### 4. Para quem
- Título + 3 chips (Importadoras, Vinícolas, Marcas do setor)
- Seção "Alavancas" com 5 itens em grid

### 5. Boletim Tanin
- Campo de e-mail + botão "Quero receber"
- Microcopy LGPD
- Placeholder para integração Substack

### 6. Contato
- Formulário completo (Nome, Empresa, Cargo, E-mail, WhatsApp, Assunto via select, Mensagem)
- Estado de "Obrigado" após envio (inline, sem nova página)
- CTA: "Enviar"

### Rodapé
- Logo Tanin + "São Paulo, Brasil"
- Links placeholder (LinkedIn, Instagram, WhatsApp, e-mail)
- Link "Política de privacidade"

## SEO & Meta
- Title, description e Open Graph tags no index.html
- Headings semânticos (h1, h2, h3)
- Meta description em português

## Responsividade
- Mobile-first, menu hambúrguer no mobile
- Seções adaptam de grid para stack no mobile

## Implementação
- Componentes: Navbar, Hero, Tese, Metodo, ParaQuem, Boletim, Contato, Footer
- Atualizar CSS variables para a paleta Tanin
- Google Fonts (Playfair Display + DM Sans) via link no index.html
- Validação de formulários com feedback visual
- Scroll suave entre âncoras

