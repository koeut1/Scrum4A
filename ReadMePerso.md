# README PERSO

## Dans le cmd
+ *yarn start* : **démarre l'appli** en mode développement
+ *yarn run build* : **crée un build** pour la mise en ligne      


## Dans le code
+ L'attribut `className` permet de **préciser une classe à un élément React** pour lui indiquer du CSS.
+ Les `images` sont importées par React grâce à **Webpack**. Il suffit d'importer l'image souhaitée.
+ À partir d’une liste de données, `map()` **permet de créer une liste de composants React**.
+ La prop `key` est **indispensable dans les listes** de composants.
+ Si vous voulez éviter les bugs, la prop `key` doit : 
    - **être unique** au sein de la liste
    - **perdurer** dans le temps.
+ La best practice pour créer une `key` est d’**utiliser l’ `id`** unique associée à une donnée, et de **ne pas vous contenter d'utiliser l'index** de l'élément dans la liste.
+ Une condition ternaire **permet d’afficher un élément ou un autre** dans le JSX, répondant à la condition "if… else...".
+ Il existe d'autres manières de créer des conditions en React, notamment en **sortant les conditions** du JSX.  
+ Les props sont des objets que l'on peut récupérer dans les paramètres de notre composant fonction.
+ Il existe deux syntaxes pour assigner une valeur à une prop :
    - les guillemets pour les `string` ;
    - les accolades pour tout le reste : nombres, expressions JavaScript, booléen, etc.
+ La déstructuration est une syntaxe permettant de déclarer une variable en l'affectant directement à la valeur d'un objet (ou tableau).
+ Une prop est :
    - toujours passée par un composant parent à son enfant ;
    - considérée en lecture seule dans le composant qui la reçoit.
+ La prop `children` est renseignée en imbriquant les enfants dans le parent : <Parent><Enfant /></Parent>.
+ `children` est utile lorsqu'un composant ne connaît pas ses enfants à l'avance.
+ En React, un événement s'écrit dans une balise en `camelCase`, et on lui passe la fonction à appeler.
+ Il existe deux grandes manières de gérer les formulaires : les formulaires contrôlés ou non contrôlés. L'utilisation des formulaires contrôlés est recommandée.
+ Les formulaires contrôlés sauvegardent la valeur des champs dans le state local, et accèdent à la data entrée par l'utilisateur avec `onChange`.
+ Les formulaires contrôlés permettent de filtrer le contenu, ou d'afficher un message d'erreur en fonction de la data qui est entrée par l'utilisateur.