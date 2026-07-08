import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import './cookieconsent-theme.css';

CookieConsent.run({
  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/
          }
        ]
      }
    }
  },
  onConsent: () => {
    if (CookieConsent.acceptedCategory('analytics')) {
      if (typeof gtag === 'function') {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  },
  onChange: ({ changedCategories }) => {
    if (changedCategories.includes('analytics')) {
      if (CookieConsent.acceptedCategory('analytics')) {
        if (typeof gtag === 'function') {
          gtag('consent', 'update', {
            'analytics_storage': 'granted'
          });
        }
      } else {
        if (typeof gtag === 'function') {
          gtag('consent', 'update', {
            'analytics_storage': 'denied'
          });
        }
      }
    }
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it.',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          showPreferencesBtn: 'Manage Preferences'
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          savePreferencesBtn: 'Save Preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
            },
            {
              title: 'Strictly Necessary Cookies',
              description: 'These cookies are essential for the proper functioning of the website. They cannot be disabled.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics Cookies',
              description: 'These cookies allow us to measure and analyze website traffic to improve our services.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});
