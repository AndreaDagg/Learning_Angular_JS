/** ------- SOLO PER AVVIARE L'APPLICAZIONE CON MODULI STANDALONE -------
 * import { bootstrapApplication } from '@angular/platform-browser';
* import { AppComponent } from './app/app.component';

* bootstrapApplication(AppComponent).catch((err) => console.error(err)); 
*/


// --- Avvio applicazione con moduli separati ---

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));