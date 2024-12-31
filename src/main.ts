import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// use the bootstrapApplication function to bootstrap the application
// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule);
