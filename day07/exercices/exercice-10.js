/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE VALEURS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez une chaîne de caractères "abracadabra". Créez une fonction qui retourne un objet comptant le nombre d'occurrences de chaque lettre. (ex: { a: 5, b: 2, r: 2, c: 1, d: 1 }).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day07/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
 let caracteres = "abracadabra" ;
 let tableau = caracteres.split("");
 function lettres (lettre) {
    let resultat = {};
    for (let i = 0; i < lettre.length; i++) {
        if (resultat[lettre[i]]) {
            resultat[lettre[i]]++;
        } else {
            resultat[lettre[i]] = 1;
        }
    }
    return resultat;
}
console.log(lettres(tableau));
 
