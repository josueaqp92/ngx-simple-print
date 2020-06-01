# NgxSimplePrint
This is a simple directive to print html section with angular.

## Installation

```
npm install ngx-simple-print --save
```


## Usage

Import the module into your `app.module.ts` file.

```ts
import { NgxSimplePrintModule } from 'nx-simple-print';

@NgModule({
  imports: [ NgxSimplePrintModule ]
})
export class AppModule {
}
```

And you can use the directive in your app
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <button
        roNgxSimplePrint
        [printContentId]="'contentToPrint'"
    >Print</button>
    <div id="contentToPrint">
        my printable content...
    </div>
  `,
})
export class AppComponent {
}
```
