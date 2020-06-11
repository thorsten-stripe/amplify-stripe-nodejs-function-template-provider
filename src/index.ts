import { FunctionTemplateContributorFactory } from 'amplify-function-plugin-interface';

import { provideStripeCheckoutSession } from './providers/stripeCheckoutSessionProvider';
import { provideStripeWebhook } from './providers/stripeWebhookProvider';

export const functionTemplateContributorFactory: FunctionTemplateContributorFactory = (
  context
) => {
  return {
    contribute: (request) => {
      switch (request.selection) {
        case 'stripe-checkout-session': {
          return provideStripeCheckoutSession();
        }
        case 'stripe-webhook': {
          return provideStripeWebhook();
        }
        default: {
          throw new Error(`Unknown template selection [${request.selection}]`);
        }
      }
    },
  };
};
