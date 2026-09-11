# 🔎 Jour 05 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> En JavaScript, une chaîne de caractères (String) est-elle "mutable" (modifiable) ou "immuable" (immutable) ? Que cela implique-t-il quand on utilise `.toUpperCase()` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
   dans js une chaîne de caractères (String) est immutable , et .toUpperCase() nous donne une nouvelle chaine de caractére

> À compléter avec mes propres mots.

---

### Question 02

> Quelle est la différence entre `.slice()`, `.substring()` et `.substr()` ? Lequel est considéré comme déprécié ou moins recommandé ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
     .slice(): il nous donne les caractéres que nous les donne ses numéro et accepte les nombres négatives. exemple : 
let texte = "Bonjour";
console.log(texte.slice(0, 3)); -> "Bon" ; 
     .substring(): méme concept de .slice() mais la diférence c'est qu'il n'accepte pas les nombres négatives. exemple :
"Bonjour".slice(-3); -> "our"
"Bonjour".substring(-3); -> "Bonjour"
      .substr(): la différence entre .substr() et les deux précedante c'est que dans "Bonjour".substr(2, 3) , (2): le nombre de caractére où nous voudrons la début et (3): c'est le nombre des cractére qu'ons veux les prendre. exemple :
"Bonjour".substr(2, 3); -> "njo" 
> À compléter avec mes propres mots.

---
### Question 03

> Quelle méthode permet de transformer la chaîne `"A,B,C"` en un tableau `["A", "B", "C"]` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
.split(",") qui transforme des string en array ;

> À compléter avec mes propres mots.

---

### Question 04

> Quelle est la différence entre `.indexOf()` et `.search()` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
  .indexOf(): nous povons la donner une string et le output soit le nombre des string qui ont égale et aprés ce numbre . exemple:
    let name ="Bonjour";
    console.log(name.indexOf("jour")); -> 3
  .search():  n'est pas bien compris ;
> À compléter avec mes propres mots.

---

### Question 05

> À quoi servent les **Template Literals** (les backticks `` ` ``) par rapport aux simples quotes `'` ou doubles `"` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
   les backticks nous permet de minimisé notre code pour étre plus simple a écrire. exemple :
   avec les quotes ou doubles:
 let nom = "Yassine";
 let age = 20;
console.log("Je m'appelle " + nom + " et j'ai " + age + " ans.");
   avec les backticks:
let nom = "Yassine";
let age = 20;
console.log(`Je m'appelle ${nom} et j'ai ${age} ans.`);

> À compléter avec mes propres mots.

---

### Question 06

> Comment vérifier de manière moderne si une chaîne *commence* par un mot spécifique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

### Question 07

> Quelle méthode permet d'enlever les espaces vides au début et à la fin d'une chaîne, mais pas au milieu ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
   .trim() qui nous permet d'enlever les espaces vides au début et à la fin d'une chaîne. exemple :
let texte = "   Bonjour Yassine   ";
console.log(texte.trim()); ->  "Bonjour Yassine"

> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence de comportement entre `.replace("a", "b")` et `.replaceAll("a", "b")` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
   .replace(): remplace juste le premier occurrence. exemple :
let texte = "Y a 20 ans, Y dans youcode";
console.log(texte.replace("Y", "Yassine")); -> "Yassine a 20 ans, Y dans youcode"
   .replaceAll(): remplace toute les occurences. exemple:
let texte = "Y a 20 ans, Y dans youcode";
console.log(texte.replaceAll("Y", "Yassine")); -> "Yassine a 20 ans, Yassine dans youcode"
> À compléter avec mes propres mots.

---

### Question 09

> Qu'est-ce qu'une Expression Régulière (Regex) et pourquoi l'utilise-t-on avec les strings ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

n'est pas compris

> À compléter avec mes propres mots.

---

### Question 10

> Peut-on utiliser la propriété `.length` sur une chaîne vide `""` ? Quel sera le résultat ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
oui on peut utilisé .length dans une chaîne vide "" et  il nous donne 0 car une chaîne vide a une longueur de 0
> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ x ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ x ] J'ai noté les notions que je dois encore clarifier.
