# 🔎 Jour 07 — Recherche

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

> Quelle est la différence entre la notation pointée (`objet.propriete`) et la notation crochets (`objet["propriete"]`) ? Quand est-il obligatoire d'utiliser les crochets ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**


> À compléter avec mes propres mots.

---

### Question 02

> Que se passe-t-il si on tente d'accéder à une propriété qui n'existe pas dans un objet ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

return dans le output undefined

> À compléter avec mes propres mots.

---

### Question 03

> Comment ajouter une nouvelle propriété à un objet déjà existant ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

pour ajouter une nouvelle propriété à un objet déjà existant on utilise . ou []

> À compléter avec mes propres mots.

---

### Question 04

> Comment supprimer une propriété d'un objet (mot-clé spécifique) ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

pour supprimer une propriété d’un objet en utilise le mot-clé delete , exemple:
  let personne = {
    nom: "Yassine",
    age: 20,
    ville: "Oujda"
};
delete personne.age;
console.log(personne); => {
    nom: "Yassine",
    ville: "Oujda"
}

> À compléter avec mes propres mots.

---

### Question 05

> Quelle est la boucle spécifique recommandée pour parcourir les *clés* d'un objet ? (`for...of` ou `for...in`) ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**
pour parcourir les clés (propriétés) d’un objet on utilise for...in

> À compléter avec mes propres mots.

---

### Question 06

> Qu'est-ce que le mot-clé `this` lorsqu'il est utilisé à l'intérieur d'une méthode (une fonction) d'un objet ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

le mot-clé `this` fait référence à l'objet qui appelle la méthode

> À compléter avec mes propres mots.

---

### Question 07

> Qu'est-ce que le format **JSON** (JavaScript Object Notation) par rapport à un objet JavaScript classique ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

JSON (JavaScript Object Notation) est un format texte utilisé pour stocker et échanger des données

> À compléter avec mes propres mots.

---

### Question 08

> Quelle méthode native permet de convertir un objet JS en chaîne JSON (String) ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

la méthode native qui permet de convertir un objet JS en chaîne JSON (String) est JSON.stringify(),exemple:
   let personne = {
    nom: "Yassine",
    age: 20
};
let json = JSON.stringify(personne);
console.log(json); => {"nom":"Yassine","age":20}

> À compléter avec mes propres mots.

---

### Question 09

> Quelle méthode native permet de convertir une chaîne JSON en objet JS ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

la méthode native permet de convertir une chaîne JSON en objet JS est JSON.parse()

> À compléter avec mes propres mots.

---

### Question 10

> Comme les tableaux, les objets sont assignés par "référence". Que cela signifie-t-il si vous faites `const obj2 = obj1;` et que vous modifiez `obj2` ?

- [ x ] J'ai recherché et compris la notion.

**Ma réponse :**

les objets sont assignés par "référence" signifie que obj1 et obj2 pointent vers le même objet en mémoire

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ x ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ x ] J'ai noté les notions que je dois encore clarifier.
