# 🔎 Jour 06 — Recherche

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

> En JavaScript, le premier élément d'un tableau se trouve à quel index ?

- [ X ] J'ai recherché et compris la notion.

**Ma réponse :**
En JavaScript, le premier élément d'un tableau est à l'index 0

> À compléter avec mes propres mots.

---

### Question 02

> Quelle est la différence entre les méthodes `.push()` et `.unshift()` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
.push() : permet d'ajouter les élements a la fin de tableau
.unshift() : permet d'ajouter les élements au début de tableau

> À compléter avec mes propres mots.

---

### Question 03

> Quelle est la différence entre `.pop()` et `.shift()` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
.pop() : permet de suprimer le dernier element dans le tableau
.shift() : permet de suprimer le premier élément dans le tableau

> À compléter avec mes propres mots.

---

### Question 04

> Que retourne la propriété `.length` d'un tableau vide `[]` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

la propriété `.length` d'un tableau vide `[]` return 0

> À compléter avec mes propres mots.

---

### Question 05

> Quelle est la différence entre une boucle `for...in` et une boucle `for...of` ? Laquelle est recommandée pour parcourir les *valeurs* d'un tableau ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
for in : permet d'affiché l'index, exemple :
  let names :[Yassine , Amin , Ahmed]
  for (let index in names) {
    console.log(index); => 0 , 1 ,2
  }
for of : permet d'afficher les valeurs du tableau , exemple :
  let names :[Yassine , Amine , Ahmed]
  for (let name of names) {
    console.log(index); => Yassine , Amine ,Ahmed
  }

> À compléter avec mes propres mots.

---

### Question 06

> Comment vérifier si une variable est bien un tableau (puisque `typeof []` renvoie `"object"`) ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

   Pour vérifier si une variable est bien un tableau, on utilise : Array.isArray() ; exemple :
     let fruits = ["pomme", "banane"];
      console.log(Array.isArray(fruits)); => true

> À compléter avec mes propres mots.

---

### Question 07

> Quelle méthode utiliseriez-vous pour fusionner deux tableaux en un seul ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
  pour fusionner deux tableaux en un seul on utilise la méthode .concat() , exemple :
      let tableau1 = [1, 2, 3];
      let tableau2 = [4, 5, 6];
      let result = tableau1.concat(tableau2);
      console.log(resultat); => [1, 2, 3, 4, 5, 6] 
> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence entre `.slice()` et `.splice()` lors de la manipulation d'un tableau ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

 .splice() : Permet de supprimer, ajouter ou remplacer des éléments dans le tableau 
 .slice() :  Permet de copier une partie d'un tableau
> À compléter avec mes propres mots.

---

### Question 09

> Les tableaux en JavaScript sont-ils passés par *valeur* ou par *référence* lorsqu'ils sont assignés à une nouvelle variable ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**



> À compléter avec mes propres mots.

---

### Question 10

> Peut-on stocker des types différents dans un même tableau en JS (ex: nombres, strings, booléens en même temps) ? Est-ce une bonne pratique ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
  JavaScript permet de stocker des types differents dans le même tableau, exemple: 
   let tableau = [0, "Bonjour", true, 25];
    console.log(tableau); => 0 , Bonjour , true , 25

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ x ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ x ] J'ai noté les notions que je dois encore clarifier.
