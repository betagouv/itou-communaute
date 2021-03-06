# Journal des modifications

## [14] - 2022-05-23
### Ajouté / Corrigé
- Correction de l'assignation d'un groupe de région lors de l'inscription
- Correction du filtre de catégorie d'événement, qui ne fonctionnait pas suite à un chargement AJAX
- Ajout d'un indicateur de chargement sur la recherche de membre, lors de l'invitation d'un membre à un groupe
- Correction de l'assignation du type de profil lors de l'inscription d'un nouvel utilisateur (Membre / Ambassadeur)

### Modifié
- Mise à jour favicon
- Fork du plugin IdeaPush => ITOU / IdeaPush en vue de modifications fonctionnelles

### Supprimé

## [12] - 2022-04-25
### Ajouté / Corrigé
- Mise à jour et corrections de traductions Buddyboss et IdeaPush
- Ajout du plugin Crisp (staging)
- Ajout du plugin Yoast SEO (pour la génération des metas OG / Twitter card)
- Optimisation des images (WebP, lazyload) via Smush Pro
- Mise en place backup daily / weekly (WPCron / BackWPUp => Scaleway)

### Modifié
- Passage de la base de données en MariaDB sur les environnements locaux (Docker)

### Supprimé

## [11] - 2022-04-11
### Ajouté / Corrigé
- Ajout d'instructions pour la créatio d'un mot de passe lors de l'inscription
- Recalage graphique d'éléments graphique sur le formulaire de login
- Correction des valeurs retournées dans le template de mail {initiator.name}
- Correction Embed Matomo sur la page Stats
- Mise à jour des environnements (local, staging)

### Modifié

### Supprimé

## [10] - 2022-03-28
### Ajouté / Corrigé
- Sécurité : il est désormais impossible d'exécuter du PHP dans le dossier d'uploads
- Performances : les assets CSS / JS sont maintenant aggrégés / minifiés
- Performances : le serveur précise des règles d'expiration / compression des ressources
- Événements : la recherche texte est possible dans les listes d'événements passés
- Événements : harmonisation des templates (standard => récurrents)
- Événements : possibilité de filtrer les listes d'événements selon leur catégorie
- Partage réseaux sociaux : les bonnes valeurs (titre, url, description) remontent bien pour chaque page sur le site
- Correction de traductions
- Ajout du plugin IdeaPush

### Modifié
- Les URLs type /catégorie/ ont été modifié en /categorie
- MAJ WP et plugins

### Supprimé

## [09] - 2022-03-14
### Ajouté / Corrigé
- Les "Membres" qui s'inscrivent se voit automatiquement attribué le rôle "Contributeur" dans WP
- Les "Membres" qui s'inscrivent se voit automatiquement rattaché au groupe de leur région
- La mise en forme sur les descriptions de groupe (communautés) a été rétablie
- La page d'accueil d'un groupe affiche les sous-groupes (au lieu de la liste des membres)
- Ajout du plugin WP Crontrol, pour gérer le déclenchement d'événement (récurrents ou non)
- Attribution du rôle par défaut (Contributeur) aux utilisateurs existants et région renseignée pour les utilisateurs ne l'ayant pas déjà rejoint
- Correction du bug d'affichage lorsqu'on dépliait un groupe de question dans la FAQ
- Correction du bug empêchant de mettre à jour tous les événements récurrents d'un coup
- Activation des invitations par mail de Budyboss
- Affichage par défaut des pages de listing de sous-groupes pour les groupes ayant des sous-groupes, sinon, affichage par défaut de la page "Membres"
- Correction de traductions (Betterdocs, The Events Calendar)

### Modifié
- Version de PHP modifiée en local, staging et prod (=> 7.4)

### Supprimé
- Suppression du plugin Members

## [09] - 2022-02-28
### Ajouté / Corrigé
- Stack de dev locale passée sur Docker, comprenant : Apache, MySQL 8, PHP 8.0 (similaire à la prod), PHPMyAdmin et Mailhog
- Correction des formats de date dans les formulaires support (Date de démarrage du contrat)
- Changement du nom de groupe de champ de profil Default Data en Informations
- Ajout du plugin Loco Translate
- Corrections de traductions
- Ajustement de l'interface mobile sur les pages d'événements


### Modifié
- Correction traductions sur les listes d'événement
- Structure des assets du thème enfant modifiée
- Ajout d'une branche staging en local

### Supprimé

## [08] - 2022-02-14
### Ajouté / Corrigé

### Modifié
- Synchronisation des bases de données (prod -> le staging / local)
- Mise à jour du core WP
- Mise à jour du plugin Accordion Toggle
- Mise à jour du plugin Elementor, Elementor Pro
- Mise à jour du plugin Pionet for Elementor
- Mise à jour du plugin BuddyBoss
- Mise à jour du theme Buddyboss
- Mise à jour des traductions WP & BuddyBoss
### Supprimé


## [07] - 2022-01-31
### Ajouté / Corrigé
- Ajout des traductions Française manquantes à la dernière version de BuddyBoss
- Masquage d'un sélecteur de langue sur la page connexion

### Modifié
- Synchronisation des bases de données (prod -> le staging / local)
- Mise à jour du core WP
- Mise à jour de nombreux plugins WP (akismet, betterdocs, buddyboss, pionet, essential blocks)
- Mise à jour du theme Buddyboss
- Mise à jour des traductions

## [06] - 2022-01-17
### Ajouté / Corrigé
- Mise à jour du core WP
- Mise à jour de nombreux plugins WP (buddyboss, elementor, elementKit, events calendar, etc)
- Ajout des plugins members et buddypress-member-types
- Mise à jour des traductions elementor & wp-statistics

### Modifié
- Ajout d'une condition d'affichage pour le sassy social plugin
- Ajout de la localisation de la date dans Elementor
- Fix css bold dans le contenu des articles


## [05] - 2022-01-03
### Ajouté / Corrigé
- Correction d'une zone de texte mal encodée (/) dans le formulaire d'ajout d'événement
- Correction de traduction dans les templates d'email de BuddyBoss
- Correction du nom d'expediteur des emails
- Amélioration de l'affichage du mail envoyé au support (via config dans Pionet)

### Modifié
- Synchronisation des bases de données (prod -> le staging / local)
- Mise à jour du core WP
- Mise a jour de nombreux plugins WP (buddyboss, elementor, events calendar, betterdocs, migrate db, etc)


## [04] - 2021-12-06
### Ajouté / Corrigé
- Synchronisation des db depuis prod -> staging et local
- Correction du bug de chargement de la liste des actualités de la ressourcerie
- Ajout d'un menu mobile différencié
- Correction du bug de mise en gras sur le fil d'actualités
- Correction d'une erreur de traduction BuddyBoss

### Modifié
- Mise à jour du core WP et de plusieurs plugins
- Mise à jour du theme BuddyBoss
- Création d'un nouveau template Betterdocs pour permettre la modification de la mise en forme de la page "/Aide"

### Supprimé
- Suppression de plugins inutiles (Filter Bar Extension, Filter Everything et WP U Like)


## [03] - 2021-11-22
### Ajouté / Corrigé
- Modification de traduction sur le fil d'actualité
- Correction d'affichage des images de couverture d'événements rognés
- Correction des bugs sur les actualités et les événements (Thx Clever)

### Modifié
- Mise à jour du core WP et de plusieurs plugins
- Recherche de solutions pour le bug d'affichage des "accordéons"



## [02] - 2021-11-08
### Ajouté / Corrigé
- Ajout d'un script Hotjar sur les pages /assitance et /doc 
- Ajout d'un script Matomo
- Ajout d'un script Tarte au citron
- Ajout d'un plugin de connexion à Zapier
- Mise en ligne du staging (Thx Clément)
- Fix de la traduction Française du plugin blog-filter-premium
- Fix d'un bug Elementor en prod (mais persistant en staging)
- Ajout de plugins d'export d'utilisateurs

### Modifié
- Mise à jour du core WP et des plugins

### Supprimé
- Suppression panique d'un plugin de sécurité bloquant en prod (limit-login)


## [01] - 2021-10-22
### Ajouté / Corrigé
- Mise en production finale
- Migration des sous-domaines et redirection des anciennes urls du forum discourse (Thx Clement)
- Fix des divers problèmes d'envoi d'email lié à clevercloud
- Fix des nombreux problèmes de traduction
- Fix de bugs graphiques
- Ajout et configuration de plusieurs nouveaux plug-ins
- Création d’un environnement de staging

### Modifié
- Mise à jour des plugins 

### Supprimé
- Suppression de plusieurs plug-ins inutiles ou redondants
