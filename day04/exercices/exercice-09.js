/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MAXIMUM DE TROIS NOMBRES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Sans utiliser Math.max(), écrivez une fonction trouverMax(a, b, c) qui retourne le plus grand des trois nombres en utilisant des conditions if/else.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day03/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
 
 function trouverMax(a, b, c) {
    if ( a > b && a > c) {
        return("le plus grand est: " + a) ;
    } else if (b > a && b > c) {
        return("le plus grand est: " + b) ;
    } else if (c > a && c > b) {
        return("le plus grand est: " + c) ;
    }else {
        return("il n y a pas de comparaison") ;
    } 
 }
 
    // console.log(trouverMax(7 , 5 , 6)) ;