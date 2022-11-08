document.addEventListener('DOMContentLoaded', async () => {
    document.querySelectorAll("[data-translation-key]").forEach(element => {
        const translationKey = element.getAttribute("data-translation-key");
        const currentLocale = getCurrentLocale();
        const defaultTranslation = translations["en-us"][translationKey];
        const translation = (translations[currentLocale] || {})[translationKey];
        const text = translation || defaultTranslation
        if (text) {
            element.textContent = text;
        }
    })
});

const translations = {
    "en-us": {
        "hero_title": "Yield App Help Center",
        "hero_description": "Yield App’s Customer Support is online 24/7 to help with your needs.",
        "section_faq_title": "FAQ",
        "section_faq_description": "Everything you need to know to use Yield App",
        "submit_a_request_description": "Contact our support experts for help",
        "footer_title_company": "Company",
        "footer_link_home": "Home",
        "footer_link_about": "About us",
        "footer_link_businesses": "Businesses",
        "footer_link_careers": "Careers",
        "footer_link_earn": "Earn",
        "footer_link_token": "YLD token",
        "footer_title_resources": "Resources",
        "footer_link_audit": "Assets audit",
        "footer_link_blog": "Blog",
        "footer_link_markets": "Markets",
        "footer_link_referrals": "Referrals",
        "footer_link_stats": "Stats",
        "footer_link_security": "Security",
        "footer_title_follow": "Follow us",
        "footer_title_legal": "Legal",
        "footer_link_bug_bounty": "Bug bounty policy",
        "footer_link_cookie": "Cookie policy",
        "footer_link_privacy": "Privacy policy",
        "footer_link_referral_program": "Referral program policy",
        "footer_link_terms_and_conditions": "Terms and conditions",
        "footer_title_contact": "Contact",
        "footer_all_right": "All right reserved",
    },
    "es": {
        "footer_title_company": "Compañía",
        "footer_link_home": "Inicio",
        "footer_link_about": "Acerca de nosotros",
        "footer_link_businesses": "Empresas",
        "footer_link_careers": "Carreras",
        "footer_link_earn": "Gana",
        "footer_link_token": "Token YLD",
        "footer_title_resources": "Recursos",
        "footer_link_audit": "Auditoría de activos",
        "footer_link_blog": "Blog",
        "footer_link_markets": "Mercados",
        "footer_link_referrals": "Referencias",
        "footer_link_stats": "Estadísticas",
        "footer_link_security": "Seguridad",
        "footer_title_follow": "Síganos",
        "footer_title_legal": "Legal",
        "footer_link_bug_bounty": "Política de recompensas por errores",
        "footer_link_cookie": "Política de cookies",
        "footer_link_privacy": "Política de privacidad",
        "footer_link_referral_program": "Política del programa de referidos",
        "footer_link_terms_and_conditions": "Términos y condiciones",
        "footer_title_contact": "Contacto",
        "footer_all_right": "Todos los derechos reservados",
    },
    "it": {
        "footer_title_company": "Azienda",
        "footer_link_home": "Pagina principale",
        "footer_link_about": "Su di noi",
        "footer_link_businesses": "Aziende",
        "footer_link_careers": "Carriere",
        "footer_link_earn": "Guadagnare",
        "footer_link_token": "Token YLD",
        "footer_title_resources": "Risorse",
        "footer_link_audit": "Verifica degli assets",
        "footer_link_blog": "Blog",
        "footer_link_markets": "Mercati",
        "footer_link_referrals": "Referrals",
        "footer_link_stats": "Statistiche",
        "footer_link_security": "Sicurezza",
        "footer_title_follow": "Seguiteci",
        "footer_title_legal": "Legalità",
        "footer_link_bug_bounty": "Politica di ricompensa dei bug",
        "footer_link_cookie": "Gestione dei cookie",
        "footer_link_privacy": "Informativa sulla privacy",
        "footer_link_referral_program": "Politica del programma di referral",
        "footer_link_terms_and_conditions": "Termini e condizioni",
        "footer_title_contact": "Contatti",
        "footer_all_right": "Tutti i diritti riservati",
    },
    "fr": {
        "footer_title_company": "Entreprise",
        "footer_link_home": "Accueil",
        "footer_link_about": "À propos",
        "footer_link_businesses": "Entreprises",
        "footer_link_careers": "Carrières",
        "footer_link_earn": "Gagner",
        "footer_link_token": "Token YLD",
        "footer_title_resources": "Ressources",
        "footer_link_audit": "Actifs audités",
        "footer_link_blog": "Blog",
        "footer_link_markets": "Marchés",
        "footer_link_referrals": "Parrainages",
        "footer_link_stats": "Stats",
        "footer_link_security": "Sécurité",
        "footer_title_follow": "Suivez-nous",
        "footer_title_legal": "Légal",
        "footer_link_bug_bounty": "Politique de primes aux bugs",
        "footer_link_cookie": "Politique relative aux cookies",
        "footer_link_privacy": "Politique de confidentialité",
        "footer_link_referral_program": "Politique de parrainage",
        "footer_link_terms_and_conditions": "Conditions générales",
        "footer_title_contact": "Contact",
        "footer_all_right": "Tous droits réservés",
    },
    "id": {
        "hero_title": "Pusat Bantuan Yield App",
        "hero_description": "Tim Support Yield App online selama 24 jam 7 hari untuk memenuhi kebutuhan Anda",
        "section_faq_title": "FAQ",
        "section_faq_description": "Semua tentang Yield App dan bagaimana cara menggunakannya",
        "submit_a_request_description": "Hubungi tim support kami untuk bantuan",
        "footer_title_company": "Perusahaan",
        "footer_link_home": "Beranda",
        "footer_link_about": "Tentang Kami",
        "footer_link_businesses": "Bisnis",
        "footer_link_careers": "Karir",
        "footer_link_earn": "Earn",
        "footer_link_token": "Token YLD",
        "footer_title_resources": "Resource",
        "footer_link_audit": "Audit Aset",
        "footer_link_blog": "Blog",
        "footer_link_markets": "Market",
        "footer_link_referrals": "Referal",
        "footer_link_stats": "Statistik",
        "footer_link_security": "Keamanan",
        "footer_title_follow": "Ikuti Kami",
        "footer_title_legal": "Legal",
        "footer_link_bug_bounty": "Ketentuan bug bounty",
        "footer_link_cookie": "Ketentuan cookie",
        "footer_link_privacy": "Ketentuan privasi",
        "footer_link_referral_program": "Ketentuan program referal",
        "footer_link_terms_and_conditions": "Syarat dan ketentuan",
        "footer_title_contact": "Kontak",
        "footer_all_right": "All rights reserved",
    },
    "pl": {
        "footer_title_company": "Firma",
        "footer_link_home": "Strona główna",
        "footer_link_about": "O nas",
        "footer_link_businesses": "Firmy",
        "footer_link_careers": "Kariera",
        "footer_link_earn": "Zarabiaj",
        "footer_link_token": "YLD token",
        "footer_title_resources": "Zasoby",
        "footer_link_audit": "Audyt aktywów",
        "footer_link_blog": "Blog",
        "footer_link_markets": "Rynki",
        "footer_link_referrals": "Polecenia",
        "footer_link_stats": "Statystyki",
        "footer_link_security": "Bezpieczeństwo",
        "footer_title_follow": "Obserwuj nas",
        "footer_title_legal": "Informacje prawne",
        "footer_link_bug_bounty": "Polityka nagród za wykryte błędy",
        "footer_link_cookie": "Polityka dotycząca plików cookies",
        "footer_link_privacy": "Polityka prywatności",
        "footer_link_referral_program": "Polityka programu poleceń",
        "footer_link_terms_and_conditions": "Zasady i warunki",
        "footer_title_contact": "Kontakt",
        "footer_all_right": "Wszystkie prawa zastrzeżone",
    },
    "zh-cn": {
        "footer_title_company": "公司",
        "footer_link_home": "主页",
        "footer_link_about": "关于我们",
        "footer_link_businesses": "企业",
        "footer_link_careers": "工作机会",
        "footer_link_earn": "收益",
        "footer_link_token": "YLD 代币",
        "footer_title_resources": "资源",
        "footer_link_audit": "资产审计",
        "footer_link_blog": "博客",
        "footer_link_markets": "推荐计划",
        "footer_link_referrals": "推荐人计划",
        "footer_link_stats": "统计数据",
        "footer_link_security": "安全",
        "footer_title_follow": "关注我们",
        "footer_title_legal": "法务",
        "footer_link_bug_bounty": "漏洞赏金政策",
        "footer_link_cookie": "Cookie 政策",
        "footer_link_privacy": "隐私政策",
        "footer_link_referral_program": "推荐计划政策",
        "footer_link_terms_and_conditions": "条款及细则",
        "footer_title_contact": "联系我们",
        "footer_all_right": "版权所有",
    },
    "zh-tw": {
        "footer_title_company": "公司",
        "footer_link_home": "主頁",
        "footer_link_about": "關於我們",
        "footer_link_businesses": "企業",
        "footer_link_careers": "招賢納士",
        "footer_link_earn": "收益",
        "footer_link_token": "YLD 代幣",
        "footer_title_resources": "資源",
        "footer_link_audit": "資產審計",
        "footer_link_blog": "博客",
        "footer_link_markets": "推薦計畫",
        "footer_link_referrals": "推薦人計畫",
        "footer_link_stats": "統計數據",
        "footer_link_security": "安全",
        "footer_title_follow": "關注我們",
        "footer_title_legal": "法務",
        "footer_link_bug_bounty": "漏洞賞金政策",
        "footer_link_cookie": "Cookie 政策",
        "footer_link_privacy": "隱私政策",
        "footer_link_referral_program": "推薦計劃政策",
        "footer_link_terms_and_conditions": "條款及細則",
        "footer_title_contact": "聯絡我們",
        "footer_all_right": "版權所有",
    }
};
