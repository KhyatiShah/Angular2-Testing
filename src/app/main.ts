import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BannerModule } from './banner.module';

platformBrowserDynamic().bootstrapModule(BannerModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

