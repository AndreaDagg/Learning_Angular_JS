import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

//bootstrapApplication(AppComponent).catch((err) => console.error(err));
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));