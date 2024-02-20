# Angular

## 1. Installation

1. Installer [node js](https://nodejs.org/en/download/)
2. Mettre à jour npm
```bash
npm i -g npm
```
3. Installer le CLI d'Angular
```bash
npm i -g @angular/cli
```

## 2. Créer un projet

Créer un projet Angular
```bash
ng n [nomDuProjet]
```

Créer un projet Angular (sans les tests unitaires et avec l'ancienne structure)
```bash
ng n [nomDuProjet] --skip-test --standalone=false
```

## 3. Composants

Les **composants** sont des éléments qui vont pourvoir être intégrés dans une page web.
Ils possèdent leur propre template (HTML) et leur propre logique (typescript)

```ts
@Component({
    selector: 'app-my-compo',
    templateUrl: 'path-to-file.html' // ou template: '<p>...</p>'
})
export class MyComponent {
    // logique du composant
}
```
### 4. Générer un composant
```bash
ng g c path/to/component
```

## 5. Affichage

### Afficher une variable (Binding)

```html
<p>{{ variable }}</p>
```

### Tranformer les variables (Pipes)
```html
<p>En majuscule: {{ variable | uppercase }}</p>
<p>En minuscule: {{ variable | lowercase }}</p>
<p>En titre: {{ variable | titlecase }}</p>
<p>Nombre formaté: {{ variable | number : 'x.y-z' }}</p>
<p>Date formatée: {{ variable | date : 'dd/MM/yyyy' }}</p>
```

## 6. Directives sctructurelles

### Condition
#### if
```html
<p *ngIf="condition">Ne sera afficher que si la condition est respectée</p>

<!-- ou depuis angular 17 -->

@if(condition) {
    <p>Ne sera afficher que si la condition est respectée</p>
}
```

#### if-else
```html
<p *ngIf="condition;else autre">Ne sera afficher que si la condition est respectée</p>
<ng-template #autre>
    <p>Sera afficher sinon</p>
</ng-template>

<!-- ou depuis angular 17 -->

@if(condition) {
    <p>Ne sera afficher que si la condition est respectée</p>
} @else {
    <p>Sera afficher sinon</p>
}
```
### Boucles
#### for
```html
<ul>
    <li *ngFor="let item of list">{{ item }}</li>
</ul>  

<!-- ou depuis angular 17 -->

<ul>
    @for(item of list; track $index) {
        <li>{{ item }}</li>
    }
</ul> 
```

### 7. Directives « attribut »
#### [ngClass]

```html
<p [ngClass]="{ nomDeLaClasse: condition }">Texte du paragraphe</p>
```

#### [disabled]

```html
<button [disabled]="condition">Texte du bouton</p>
```

## 8. Réagir aux actions (Event Binding)
```html
<!-- Lorsque l'on clique sur le bouton => Éxécuter « method1 » -->
<button (click)="method1()">Click Me</button>
<!-- Lorsque la valeur de l'input change => Éxécuter « method2 » -->
<input (change)="method2()">
```

## 9. Custom Pipes
Les **pipes** permettent de transformer une valeur au moment de l'affichage

```ts
@Pipe({
  name: 'toFarenheit'
})
export class ToFarenheitPipe implements PipeTransform {
  transform(value: number): string {
    return (value * (9/5)) + 32 + '°F';
  }
}
```

Pour créer un nouveau **pipe**

```bash
ng g p path/to/pipe
```
