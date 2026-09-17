import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),

    providePrimeNG({
      license:
        'eyJpZCI6IjM2Mzg1OWM5LWNjNWEtNGI1Ni04YTRiLTBjYTk3MGIwMzBkMSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODk1OTk5NzgsImV4cCI6MTgyMTEzNTk3OH0.cMjMtF7lDWU7F5QN40YnbgTS7hbHm14_hlQ36juqtJqufnavDZqFVj0ZPvsq3CYhsJ1d6vtZV6m7rThos9tsCg',
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, components, utilities',
          },
        },
      },
    }),
  ],
};
