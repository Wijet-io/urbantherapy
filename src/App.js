import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Users, 
  DollarSign, 
  Shield, 
  Smartphone, 
  Calendar,
  BarChart3,
  CheckCircle,
  ArrowRight, 
  Play,
  Eye,
  Clock,
  Zap,
  Building,
  Globe,
  Settings,
  PieChart,
  Rocket,
  Star,
  Award,
  Crown,
  ChevronDown,
  ChevronRight,
  LogOut,
  Search,
  FileCheck,
  ShoppingCart
} from 'lucide-react';
import Login from './components/Login';
import './App.css';

const LUXURY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1592853625597-7d17be820d0c",
  marketplace: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e",
  collection: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg",
  events: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg",
  tech: "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca"
};

const pastelColors = [
  '#E3F0FF', // bleu pastel
  '#E6F7EC', // vert pastel
  '#FFF9E3', // jaune pastel
  '#FDE7F3'  // rose pastel
];

const OptionsSimplesSection = () => {
  const options = [
    {
      title: "Option A : Landing page simple",
      description: [
        "Présence digitale minimum",
        "Liste des boutiques",
        "Formulaire de contact",
        "Peu d'impact business, juste pour avoir une présence et confirmer l'identité de marque.",
        "Maintenance légère à prévoir",
        "Coût moyen : 2 000 €"
      ]
    },
    {
      title: "Option B : Site Shopify basique",
      description: [
        "Catalogue produits en ligne",
        "Paiement intégré",
        "Gestion peu personnalisable",
        "Non propriétaire des données",
        "Template basique",
        "Commission Shopify : % + fixe continuellement",
        "Coût moyen : 1 800 €",
        "Avec personnalisation limitée d'un template Shopify pour se rapprocher de l'identité de marque.",
        "Coût moyen : 3 500 €"
      ]
    },
    {
      title: "Option C : Landing + Shopify sous-domaine",
      description: [
        "Idem option B (Shopify)",
        "Landing page séparée pour appuyer l'identité de marque au lieu des accueil basiques des templates Shopify.",
        "Nécessité de retravailler le template du catalogue, pages catégories & produits, panier, checkout, etc. pour la cohérence",
        "Deux outils à gérer, un en react js et l'autre sur Shopify.",
        "Maintenance légère à prévoir",
        "Coût moyen : 4 500 €"
      ]
    },
    {
      title: "Option D : Boutique custom indépendante",
      description: [
        "Site et boutique sur-mesure, react Next.js, intégrations API transport, paiement etc...",
        "Expérience totalement personnalisée",
        "Propriété des données clients",
        "MAIS",
        "Indépendant de toute l'infra actuelle (Comme si tu gérais un second business)",
        "Maintenance technique nécessaire",
        "Coût moyen : À partir de 12000 € si API paiement et transport uniquement et Admin de base, et jusqu'à 18000 € si ajout de fonctionnalités d'Admin custom ou API Marketing supplémentaires à intégrer."
      ]
    }
  ];

  return (
    <section className="pb-20">
      <div>
        <h2 className="text-heading text-xl md:text-2xl text-text-secondary mb-6 text-center">
          Ce que tout le monde te proposera :
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, idx) => (
            <div key={idx} className="card-modern p-6 flex flex-col h-full" style={{ backgroundColor: pastelColors[idx] }}>
              <h3 className="text-heading text-base text-text-primary mb-4 text-center">{opt.title}</h3>
              <ul className="space-y-2 flex-1">
                {opt.description.map((desc, i) => (
                  <li key={i} className="text-body text-sm flex text-left items-start">
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen hero-bg overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-16 pb-10 md:py-10">
        <div className="text-center px-6 w-full">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src="/assets/img/urbantherapy.svg" alt="Logo Urban Therapy" className="h-16 w-auto" />
            </div>
            <span className="badge mb-4">Projet transformation digitale</span>
          </div>

          {/* Bloc options simples juste sous le logo */}
          <OptionsSimplesSection />

          {/* Séparateur visuel */}
          <div className="text-center my-8">
            <h2 className="text-heading text-xl md:text-2xl text-text-secondary mb-6 text-center">
              Ma proposition :
            </h2>
          </div>

          {/* Gros titre et suite du Hero */}
          <h1 className="text-display text-5xl md:text-7xl text-text-primary mb-4">
            Transforme tes 5 boutiques
          </h1>
          <h2 className="text-heading text-2xl md:text-4xl text-accent-light font-light">
            en écosystème hybride unifié.
          </h2>

          <div className="max-w-5xl mx-auto mt-8">
            <p className="text-body text-lg md:text-xl text-gray-500 mb-8">
              <strong className="text-accent">Optimise ton existant</strong> • Unifie tes outils • Pilote en temps réel
            </p>
            <div className="card-modern p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="icon-container accent mx-auto mb-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-heading text-lg text-text-primary mb-2">Tes boutiques physiques</h3>
                  <p className="text-caption">Showrooms • Entrepôts • Points de contact</p>
                </div>
                <div>
                  <div className="icon-container dark mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-heading text-lg text-text-primary mb-2">Transformation hybride</h3>
                  <p className="text-caption">Sans friction • Sans disruption</p>
                </div>
                <div>
                  <div className="icon-container accent mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-heading text-lg text-text-primary mb-2">Écosystème unifié</h3>
                  <p className="text-caption">App • Web Pro • Pilotage unique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PotentialSection = () => {
  const potentials = [
    {
      icon: Building,
      title: "Tes 5 boutiques sont des atouts sous-exploités",
      description: "Chaque m² devient un levier digital",
      details: [
        "Showroom physique → Catalogue digital augmenté",
        "Stock boutique → Entrepôt de proximité", 
        "Vendeur → Conseiller omnicanal",
        "Point de vente → Hub logistique"
      ]
    },
    {
      icon: Users,
      title: "Ta clientèle existante est ton premier actif",
      description: "Transformer les passages en fidélisation durable",
      details: [
        "Visiteurs anonymes → Clients identifiés",
        "Achat ponctuel → Abonnement aux nouveautés",
        "Bouche-à-oreille → Parrainage digital mesurable",
        "Retour occasionnel → Engagement continu"
      ]
    },
    {
      icon: Target,
      title: "Tes données sont dispersées mais précieuses",
      description: "Unifier pour piloter efficacement",
      details: [
        "Ventes par boutique → Vision globale temps réel",
        "Intuition → Analytics précises",
        "Gestion manuelle → Automatisation intelligente",
        "Réaction → Anticipation des tendances"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-4xl md:text-5xl text-text-primary mb-6">
            Le potentiel <span className="text-accent">inexploité</span> de ton existant
          </h2>
          <p className="text-body text-xl mx-auto">
            Ta force actuelle devient ton avantage digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {potentials.map((potential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card-modern p-6"
            >
              <div className="icon-container accent mx-auto mb-4">
                <potential.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-heading text-lg text-text-primary mb-3 text-center">{potential.title}</h3>
              <p className="text-caption text-center mb-4">{potential.description}</p>
              <div className="space-y-2">
                {potential.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-body text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArchitectureSection = () => {
  const avantProblemes = [
    {
      icon: "😵‍💫",
      title: "5 boutiques différentes à gérer et aucune présence digitale.",
      description: "Caisses, stocks, comptabilité, personnels, etc..."
    },
    {
      icon: "📊",
      title: "Données client éparpillées",
      description: "Impossible de savoir qui achète quoi, où, quand"
    },
    {
      icon: "📦",
      title: "Stock non synchronisé",
      description: "Ruptures surprises, ventes perdues, etc..."
    },
    {
      icon: "⏰",
      title: "Gestion manuelle chronophage",
      description: "Perte de temps, tâches réccurentes sans valeur ajoutée..."
    },
    {
      icon: "❌",
      title: "Pas de vision globale",
      description: "Difficile de piloter et prendre les bonnes décisions"
    }
  ];

  const apresAvantages = [
    {
      icon: "🎯",
      title: "Un seul tableau de bord",
      description: "Tout ton business visible en un clic"
    },
    {
      icon: "👥",
      title: "Données client unifiées",
      description: "Profil complet : achats boutique + online + préférences"
    },
    {
      icon: "🔄",
      title: "Stock temps réel partout",
      description: "Synchronisation automatique entre tous les canaux"
    },
    {
      icon: "⚡",
      title: "Automatisation intelligente",
      description: "Fini les saisies multiples, tout se synchronise"
    },
    {
      icon: "📈",
      title: "Pilotage stratégique",
      description: "Analytics avancées pour optimiser tes performances, réagir vite et préparer ton scaling futur."
    }
  ];

  return (
    <section className="section-padding bg-background-light">
      <div className="container-max">
        <h2 className="text-display text-4xl md:text-5xl text-text-primary mb-16 text-center">
          Des objectifs précis :
        </h2>
        <div className="flex justify-center my-12">
          <div className="flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-border-light">
            <span className="text-heading text-accent text-lg">Transformation</span>
            <ArrowRight className="w-6 h-6 text-accent" />
            <span className="text-heading text-accent text-lg">Résultats</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* AVANT - Problèmes actuels */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-50 rounded-3xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-8 border-2 border-red-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full text-lg font-semibold">
                  🔴 Ta situation actuelle (estimée)
                </div>
              </div>
              
              <div className="space-y-6">
                {avantProblemes.map((probleme, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-2xl">{probleme.icon}</div>
                    <div>
                      <h3 className="text-heading text-base text-text-primary mb-1">{probleme.title}</h3>
                      <p className="text-caption text-sm">{probleme.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APRÈS - Solutions */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-50 rounded-3xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-8 border-2 border-green-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-semibold">
                  🟢 Avec l'écosystème Urban Therapy
                </div>
              </div>
              
              <div className="space-y-6">
                {apresAvantages.map((avantage, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl">
                    <div className="text-2xl">{avantage.icon}</div>
                    <div>
                      <h3 className="text-heading text-base text-text-primary mb-1">{avantage.title}</h3>
                      <p className="text-caption text-sm">{avantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const StrategySection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-4xl md:text-5xl text-text-primary mb-6">
            Imagine un nouveau workflow pour tes employés :</h2>
          <p className="text-body text-xl max-w-3xl mx-auto">
            Ton équipe doit devenir le moteur de la transformation digitale grâce à des automatismes.
          </p>
        </motion.div>

        <div style={{background: 'linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 100%)'}} className="rounded-3xl p-8 border border-blue-100 mb-12">
          <h3 className="text-heading text-2xl text-text-primary mb-4 text-center">🔄 Parcours Client Optimisé :</h3>
          <p className="text-center text-xl max-w-3xl mx-auto mb-8">Fini les one shots. Chaque client physique doit être converti en client réccurant et un pilotage ciblé permettra de déterminer le taux de rétention. </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center max-w-[480px] mx-auto">
              <div className="icon-container accent mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="text-heading text-text-primary mb-3">En Boutique</h4>
              <div className="space-y-2">
                <p className="text-body text-sm">💬 Proposer de télécharger l'app lors de l'encaissement pour obtenir une remise à la première commande</p>
                <p className="text-body text-sm">📱 Glisser un QR Code dans le sac de shopping ou imprimer un QRCode avec une invitation à télécharger l'app</p>
                <p className="text-body text-sm">✍️ Et toujours : collecte d'email pour newsletter avec liens vers l'app et invitaion à laisser des avis google avec photo pour l'optimisation des pages produits de l'app.</p>
              </div>
            </div>
            
            <div className="text-center max-w-[480px] mx-auto">
              <div className="icon-container dark mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="text-heading text-text-primary mb-3">Via l'App Mobile</h4>
              <div className="space-y-2">
                <p className="text-body text-sm">🛍️ Catalogue complet + nouveautés</p>
                <p className="text-body text-sm">🚚 Click & Collect + livraison</p>
                <p className="text-body text-sm">🔔 Notifications push ciblées</p>
                <p className="text-body text-sm">💝 Programme de fidélité, d'affiliation et de parrainage à terme.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const PilotageSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-4xl md:text-5xl text-text-primary mb-6">
            Imagines un pilotage de ton tout ton business depuis un seul endroit :</h2>
          <p className="text-body text-xl max-w-3xl mx-auto">
            Un seul tableau de bord pour identifier tes points forts et agir en conséquence (Achats en boutique, commandes online, stock, paiements, base de donnée, marketing et plus encore...) 
          </p>
        </motion.div>

        <div className="card-modern p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="icon-container accent mx-auto mb-3">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-heading text-text-primary mb-2">Performance Globale</h3>
              <p className="text-caption">Ventes totales • CA par canal • Évolution temporelle</p>
            </div>
            
            <div className="text-center">
              <div className="icon-container accent mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-heading text-text-primary mb-2">Analyse Boutiques</h3>
              <p className="text-caption">Performances par site • Stock en temps réel • ROI local</p>
            </div>
            
            <div className="text-center">
              <div className="icon-container accent mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-heading text-text-primary mb-2">Comportement Client</h3>
              <p className="text-caption">Parcours d'achat • Fidélité • Segments VIP</p>
            </div>
            
            <div className="text-center">
              <div className="icon-container accent mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-heading text-text-primary mb-2">Optimisation</h3>
              <p className="text-caption">Produits stars • Alertes stock • Actions recommandées</p>
            </div>
          </div>
        </div>
         {/* Logique unifiée */}
         <div style={{background: 'linear-gradient(135deg, #F3E8FF 0%, #FAF5FF 100%)'}} className="rounded-3xl p-8 border border-purple-100 mb-12">
          <h3 className="text-heading text-2xl text-text-primary mb-4 text-center">🎯 Logique d'unification intelligente</h3>
          <div className="max-w-4xl mx-auto text-center mb-6">
            <p className="text-body text-lg mb-4">
              <strong>Une seule interface, trois types d'utilisateurs :</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-4 border border-purple-100">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="text-heading text-accent mb-2">Client Mobile</h4>
                <p className="text-caption">Shopping, fidélité, notifications</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-purple-100">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="text-heading text-accent mb-2">Client Web</h4>
                <p className="text-caption">Même expérience + SEO + B2B</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-purple-100">
                <div className="text-2xl mb-2">⚙️</div>
                <h4 className="text-heading text-accent mb-2">Admin Équipe</h4>
                <p className="text-caption">Dashboard intégré, gestion globale</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-body">
              🔄 <strong>Toutes les commandes convergent vers un seul endroit</strong> avec étiquetage automatique : 
              Mobile B2C • Web B2C • Web B2B • Boutique physique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BudgetSection = () => {
  const components = [
    {
      order: "1",
      title: "Monorepo React Native Web Unifié",
      badge: "Interface Mobile Ecommerce + Webapp B2C + Webapp B2B",
      description: "Toutes les interfaces dans un seul projet",
      details: [
        "React Native Web (même codebase partout)",
        "App Mobile : Shopping + notifications push (fidélité, affiliation et parrainage non inclus)",
        "Interface Web B2C : Même expérience + SEO de base", 
        "Interface Web B2B : Commandes pros + tarifs dédiés",
        "Landing web intégrée pour le Web B2C et B2B (pas de site séparé)"
      ],
      price: "32 000€",
      duration: "Estimation : 14-16 semaines"
    },
    {
      order: "2",
      title: "Intégrations POS + Paiements",
      badge: "Sous-traité à confirmer selon l'existant",
      description: "Connexion avec tes systèmes (si exploitables)",
      details: [
        "Audit de tes systèmes POS actuels",
        "API sur-mesure SI système existant exploitable",
        "Sinon : Solution POS recommandée + intégration",
        "Passerelles paiement (Stripe, Vivawallet, etc.)",
        "Synchronisation automatique des ventes",
        "Formation équipe"
      ],
      price: "8 000€*",
      duration: "Estimation : 4-6 semaines - en parallèle du développement des interfaces web et mobile"
    },
    {
      order: "3",
      title: "Hub Central (Backend)",
      badge: "Admin unifié des 4 canaux de commandes",
      description: "Ton 'Admin' sur-mesure mais qui unifie TOUT - Vision 360°",
      details: [
        "Interface admin unique pour 4 types de commandes : Mobile B2C • Web B2C • Web B2B • POS Boutiques",
        "Gestion unifiée : préparation commandes, expéditions, stocks temps réel", 
        "Accès et permissions par rôle équipe (admin, préparateur, vendeur, etc.)",
        "Analytics cross-canal : quel client achète où, quoi, quand",
        "CRM intégré : historique client complet tous canaux confondus",
        "PostgreSQL + Redis pour performance temps réel"
      ],
      price: "18 000€",
      duration: "Estimation : 8-10 semaines - en parallèle du développement des interfaces web et mobile (chevauchement plûtot sur la fin du projet)"
    }
  ];

  const totalBudget = components.reduce((sum, comp) => sum + parseInt(comp.price.replace(/[€\s]/g, '')), 0);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl text-text-primary mb-6">
            Budget & <span className="text-accent">Organisation</span>
          </h2>
          <p className="text-body text-xl max-w-4xl mx-auto mb-8">
            Développement complet de l'écosystème Urban Therapy avec une approche modulaire et évolutive
          </p>
          
          <div className="card-modern p-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-heading text-3xl text-accent mb-2">{totalBudget.toLocaleString()}€ HT</div>
              <p className="text-caption">Budget total estimé • Développement sur 4-5 mois</p>
              <p className="text-caption text-sm mt-2">
                *Prix intégration POS variable selon devis du partenaire et éventuelle exploitabilité de l'existant
              </p>
            </div>
          </div>
        </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {components.map((component, index) => (
            <div key={index} className="card-modern p-6 relative hover:shadow-xl transition-all duration-300">
              {/* Grosse pastille numéro avec dégradé */}
              <div className="absolute -top-4 -left-4 w-12 h-12 gradient-accent text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-300">
                {component.order}
              </div>
              
              <div className="mt-6 mb-4">
                <h3 className="text-heading text-lg text-text-primary mb-3 leading-tight">{component.title}</h3>
                <div className="badge-modern mb-4 text-center">
                  {component.badge}
                </div>
                <div className="text-center mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="text-heading text-2xl text-accent font-bold">{component.price}</div>
                  <div className="text-caption text-sm mt-1">{component.duration}</div>
                </div>
              </div>
              
              <p className="text-body text-sm mb-4 leading-relaxed">{component.description}</p>
              
              <div className="space-y-2">
                {component.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <ArrowRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                    <span className="text-caption text-xs leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            
          ))}
        </div>
        <div>
              <p className="text-body text-sm text-center">
                <strong>📋 Planning à discuter en fonction :</strong><br/>
                • Choix finaux sur les fonctionnalités prioritaires<br/>
                • Structure existante et systèmes POS actuels<br/>
                • Besoin éventuel de sous-traitance pour POS/Payments<br/>
                • Disponibilité de ton équipe pour formation/tests
              </p>
        </div>
        </div>
    </section>
  );
};

const FutureSection = () => {
  const futures = [
    {
      icon: Users,
      title: "TikTok Lives dans les Boutiques",
      description: "Tes boutiques deviennent des studios",
      details: [
        "Lives shopping depuis tes showrooms",
        "Vendeurs deviennent des influenceurs locaux",
        "Clients participent aux lives en boutique",
        "Ventes en direct avec codes promo exclusifs"
      ],
      potential: "Reach viral + engagement communautaire",
      color: "accent"
    },
    {
      icon: ShoppingCart,
      title: "TikTok Shop Integration",
      description: "Ton catalogue sur la plateforme #1",
      details: [
        "Catalogue Urban Therapy sur TikTok Shop",
        "Sync automatique avec ton hub central",
        "Campagnes publicitaires ciblées Gen Z",
        "Partenariats avec créateurs de contenu"
      ],
      potential: "Nouvelle clientèle 18-35 ans",
      color: "dark"
    },
    {
      icon: Globe,
      title: "Expansion Internationale",
      description: "Répliquer le modèle dans d'autres pays",
      details: [
        "Franchise digitale clés en main",
        "Hub central multi-pays",
        "Adaptation locale des catalogues",
        "Partenariats avec boutiques similaires EU"
      ],
      potential: "Scalabilité européenne",
      color: "accent"
    },
    {
      icon: Zap,
      title: "IA & Personalisation",
      description: "Intelligence artificielle au service des clients",
      details: [
        "Recommandations IA basées sur le comportement",
        "Chatbot personnalisé par boutique",
        "Prédiction des tendances locales",
        "Assistant shopping virtuel"
      ],
      potential: "Expérience ultra-personnalisée",
      color: "dark"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-4xl md:text-5xl text-text-primary mb-6">
            Et <span className="text-accent">après</span> ?
          </h2>
          <p className="text-body text-xl max-w-4xl mx-auto mb-8">
            Une fois l'écosystème en place, les possibilités de scaling sont infinies
          </p>
          
          <div className="card-modern p-6 max-w-4xl mx-auto">
            <h3 className="text-heading text-lg text-text-primary mb-3">🚀 Évolutions Futures</h3>
            <p className="text-body">
              Ton infrastructure technique modulaire permet d'ajouter facilement de nouvelles fonctionnalités 
              et d'explorer de nouveaux canaux sans refonte majeure.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {futures.map((future, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-modern p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className={`icon-container ${future.color} mx-auto mb-4`}>
                <future.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-heading text-xl text-text-primary mb-2 text-center leading-tight">{future.title}</h3>
              <p className="text-caption text-center mb-4 leading-relaxed">{future.description}</p>
              
              <div className="space-y-2 mb-4">
                {future.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-body text-sm leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-3 border border-purple-100">
                <p className="text-caption text-center">
                  💡 Potentiel : <span className="text-heading text-accent font-semibold">{future.potential}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Header avec bouton de déconnexion adaptatif
const Header = ({ onLogout }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  // Détecter le background selon la position de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Si on est dans le Hero (background sombre), bouton blanc
      // Sinon (sections blanches), bouton sombre
      setIsDarkBackground(scrollY < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={onLogout}
        className={`w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 backdrop-blur-md border rounded-full md:rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium shadow-lg ${
          isDarkBackground 
            ? 'bg-white/20 border-white/30 text-black hover:bg-white/30' 
            : 'bg-gray-900/20 border-gray-900/30 text-gray-900 hover:bg-gray-900/30'
        }`}
        title="Déconnexion"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden md:inline">Déconnexion</span>
      </button>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Si pas authentifié, afficher le login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Si authentifié, afficher la présentation avec header
  return (
    <div className="App bg-black min-h-screen">
      <Header onLogout={handleLogout} />
      <Hero />
      <PotentialSection />
        <ArchitectureSection />
        <StrategySection />
        <PilotageSection />
        <BudgetSection />
        <FutureSection />
        
        {/* Footer avec copyright et confidentialité */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container-max">
            <div className="text-center space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="text-sm text-gray-400 space-y-1 mx-auto">
                  <div>V1.0 • 02 Juillet 2025</div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="text-xs text-gray-400 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="font-semibold text-red-400">DOCUMENT CONFIDENTIEL</span>
                  </div>
                  <p className="max-w-2xl mx-auto leading-relaxed">
                    Ce document contient des informations confidentielles et propriétaires destinées exclusivement à Urban Therapy. 
                    Toute reproduction, distribution ou divulgation à des tiers est strictement interdite sans autorisation écrite préalable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;