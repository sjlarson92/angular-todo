# Angular To Do App

1. Install Angular CLI ` npm install -g @angular/cli`
2. Create new angular project `ng new angular-todo`
3. Run App `ng serve`
4. Add Angular DevTools extension to browser
5. Creating a component
```bash
    ng g c component-name # short form
    ng generate component component-name # full form
    # creates component insides the src/app folder
    
    # OR (to create component in a nested dir)
    ng g c dir/component-name
```
6. Add Ng-zorro (Ant Design for Angular) `npm install ng-zorro-antd`

## Angular Services
- Used to encapsulate data, making HTTP calls, or performing any task that is not related directly to rendering

## Angular Directives
- Allow additional behavior to be added to elements
- Types of Directives: 
  - Components 
  - Attribute directives (change existing html element, binding click events)
  - Structural directives (remove or add to the DOM, ex: Loading icon that only shows while data loads)
  - `ng g directive directives/file-name`

## Angular Pipes
- Used to transform data without use of styling
- Built in pipes, ex: CurrencyPipe, DataPipe, UpperCasePipe, etc.
- Custom Pipes
  - `ng g pipe pipes/file-name `
