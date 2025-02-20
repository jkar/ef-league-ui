import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appReducer } from '../store/application/app.reducer';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from '../store/application/app.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideStore({ appStore: appReducer }),
    provideEffects([AppEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
