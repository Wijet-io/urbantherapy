# 🌀 Proposition stratégique Urban Therapy — Écosystème Retail Unifié

## 🧭 Contexte

Urban Therapy est une marque physique bien établie avec 5 à 6 boutiques en Belgique. Elle vend des produits créatifs, boho et lifestyle — certains en marque propre, d'autres issus de créateurs.

Sa seule présence en ligne est actuellement sur AnkorStore (B2B). L’objectif est désormais de créer une expérience **omnicanale**, fluide et intégrée, capable de :

- Servir les clients **particuliers** (B2C)
- Proposer aussi la vente **pro B2B** sur la version desktop avec accès dédié.
- Unifier **stock, paiement, données client et pilotage**
- Exploiter les **boutiques physiques comme moteurs de croissance digitale** non seulement via des stratégie de communication durant les encaissements, de la PLV (QRCode et remise à la première commande), gain de temps avec le click & collect mais grâce à l'appui humain et aux structures physiques qui vont être utilisées comme outil logistique ecommerce également. (gestion des stocks, preparation de commandes, service client en ligne, etc.)
- Renforcer la **fidélisation** et la **rétention**

---

## 🌐 Vision du projet

Un système propriétaire (mono-repo, indépendant) permettant de centraliser **toutes les ventes (physiques et digitales)** avec un **stock unifié** et une **identité forte**, à travers 3 canaux :

- **Landing mettant en avant une identité forte et optimisée SEO** (présence forte & branding)
- **App mobile B2C** (commande, fidélité, notifs, parrainage)
- **Interface desktop Pro (B2B)** avec accès restreint

---

## 🧱 Architecture Modulaire

```text
    ┌────────────────────────┐         ┌────────────────────┐
    │   Boutiques physiques  │◄───────►│   POS (système caisse) │
    └────────────────────────┘         └────────────────────┘
               │                                ▲
               ▼                                │
        [Module de sync stock & ventes]────────┘

               ▼
    ┌──────────────────────────────┐
    │   Base de données centrale   │◄────┐
    └──────────────────────────────┘     │
             ▲             ▲             │
             │             │             │
     ┌───────┴───────┐  ┌──┴────────┐    │
     │ App Mobile    │  │ Espace Pro│◄───┘
     └───────────────┘  └───────────┘
             ▲
             │
       Landing Page (présentation, branding, SEO)

🔁 Parcours client augmenté
1. En boutique
Le vendeur propose :

💬 “Téléchargez l’app pour recevoir -10%” (ou glisser un qrcode dans le sac ou sticker ou magnet frigo mignon pour rappeler la marque).

✍️ “Laissez une note Google" pour développer l'organique.

2. Via l’app mobile
Accès au catalogue, recommandations, click & collect, livraison, retours, etc.

Notifications push, alertes nouveautés

Historique d’achat, (carte de fidélité un peu plus tard)

Parrainage (plus tard)

3. Sur desktop (pro)
Accès par login sécurisé

Catalogue B2B, prix spéciaux, commandes groupées

Interface simplifiée type showroom pro

⚙️ Modules à développer
🔹 1. Landing Page
Identité forte et animations stylisées

Présentation de la marque et des univers produits

Lien vers :

App store iOS / Android

Espace pro sécurisé


🔹 2. App Mobile (React Native — mono repo)
Authentification client

Parcours d’achat (catalogue, fiches produit, panier)

Paiement intégré (Stripe / Adyen / autre)

Programme de fidélité, parrainage et affiliation (plus tard)

Notifications push

🔹 3. Interface Admin (Backoffice)
Dashboard commandes

Gestion catalogue (produits, prix, photos)

Suivi des clients, analytics

Gestion du stock centralisé (via intégration POS)

Gestion des accès Pro

🔗 Intégrations à prévoir
À investiguer lors d’un call client pour finaliser la solution.

🔸 Système de caisse (POS)
Identifier le nom du logiciel utilisé

Voir s’il dispose d’une API (ex : Lightspeed, Vend, Square…)

Objectif : synchronisation bidirectionnelle stock & ventes

🔸 Paiements
En ligne : Stripe, Mollie, PayPlug…

En boutique : couplage si possible avec POS pour centraliser les datas

🔸 Livraison / logistique
Retrait en boutique

Expédition via Colissimo / Mondial Relay / DHL

Gestion via le backoffice

🧠 Objectifs stratégiques
Objectif	Résultat attendu
Rétention clients	+20 à 35% sur 12 mois avec app et push
Exploitation des boutiques	Activation digitale + Click & Collect
Indépendance technologique	Pas de dépendance à Shopify ou marketplaces
Suppression des intermédiaires	Marge améliorée en vente directe
Vision unifiée de la data	Suivi client, produits stars, panier moyen…
Expérience unifiée	Marque cohérente sur mobile, desktop et boutique

❓Questions clés à poser au client (informations manquantes)
🔍 Quel système de caisse POS est utilisé dans les boutiques ?

Dispose-t-il d’une API ?

Est-il connecté au stock en temps réel ?

📦 Le stock est-il centralisé ou réparti par boutique ?

💳 Quels moyens de paiement souhaite-t-il intégrer ?

🚚 Quelle logistique est déjà en place ? (envoi, retours)

🛠️ Veut-il avoir la main sur l’édition du catalogue ?

🎯 Quels sont ses objectifs marketing prioritaires ? (parrainage, notoriété, événements ?)

🚀 Proposition de MVP
Module	Description
🎨 Landing page	Présentation marque + CTA app/pro
📱 App mobile (v1)	Catalogue, login, panier, paiement	4 semaines
Webapp B2B à déterminer aussi, voire version web B2C aussi si monorepo
🧮 Backoffice admin	Produits, stock, commandes	2 semaines
🔗 Intégration POS	En fonction du système du client	À définir

✍️ Prochaine étape
Préparer un prototype ou maquette pour valider l’UX

Organiser un call pour :

Revue de son système de caisse actuel

Identification des besoins spécifiques logistique & pricing

Prévoir une première phase de test dans 1 ou 2 boutiques

💬 Pitch résumé (oral)
“On ne va pas créer un simple site ou une app, mais une expérience de marque complète qui transforme tes boutiques en leviers digitaux. Tu pourras vendre en ligne et en magasin sans friction, activer et fidéliser chaque client, tout en gardant le contrôle total sur ton outil, ton stock, tes marges et tes données. Fini les intermédiaires, fini la dépendance. Place à une vraie indépendance digitale sur-mesure.”