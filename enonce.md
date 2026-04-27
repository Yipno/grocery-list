# 🛒 Ma liste de courses — Redux Toolkit

> **Objectif** : pratiquer la syntaxe Redux Toolkit (slice, reducers, hooks) sur un mini-projet.

## Contexte

Tu vas finaliser une **liste de courses** où :

- Un formulaire permet d'ajouter un article (nom + quantité)
- Une liste affiche les articles ajoutés
- Chaque article peut être retiré individuellement
- Un bouton vide la liste entièrement

Le formulaire et la liste sont **deux composants séparés** qui doivent partager leurs informations via Redux.

## Setup

Un starter t'est fourni avec les composants déjà en place et stylisés.

Quand tu lances `yarn dev`, tu dois voir le formulaire et la liste vide.

> ⚠️ **Note** : les inputs du formulaire ne sont pas tout à fait finalisés non plus. Tu devras les compléter pour les rendre fonctionnels.

## À faire

### 1. Créer le reducer `groceries`

Crée `reducers/groceries.js` avec un slice qui contient **3 actions** :

| Action       | Payload                  | Effet                          |
| ------------ | ------------------------ | ------------------------------ |
| `addItem`    | `{ id, name, quantity }` | Ajoute un article à la liste   |
| `removeItem` | `id`                     | Retire l'article correspondant |
| `clearList`  | _(rien)_                 | Vide la liste                  |

State initial : `{ value: [] }`

### 2. Brancher le store

Dans `pages/_app.js`, complète les TODOs : importer ce qu'il faut, créer le store, wrapper l'app.

### 3. Connecter les composants

Cherche les `// TODO Redux:` dans `AddItemForm.js` et `GroceryList.js`, et complète-les pour :

- Lire la liste depuis le store
- Dispatcher les bonnes actions au bon moment

> **Ordre suggéré** : commence par `_app.js` et le reducer, puis le formulaire, et finis par la liste.

## Bonus

- Affiche la quantité totale d'articles dans le titre (ex : "Ma liste — 12 articles au total")
- Empêche d'ajouter un article avec une quantité ≤ 0
- Ajoute la possibilité de modifier la quantité directement dans la liste (avec une nouvelle action `updateQuantity`)

Bon courage !
