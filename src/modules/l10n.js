export const L10N = {
  ABOUT: 'About Money',
  ACCEPT: 'Accept',
  ACTIVITY: 'Analytics',

  APPERANCE_DARK: 'Switch to dark mode',
  APPERANCE_LIGHT: 'Switch to light mode',

  BACKUP_CAPTION:
    'Take control of your finances with {accounts} accounts and {txs} transactions. Secure your data and privacy effortlessly.',
  BALANCE: 'Balance',

  CANCEL: 'Cancel',
  CATEGORIES: [
    {
      // Expenses
      1: 'Food & Drinks',
      7: 'Shopping',
      8: 'Home',
      13: 'Transit',
      9: 'Healthcare',
      15: 'Insurance',
      6: 'Leisure',
      3: 'Travel',
      4: 'Debt',
      5: 'Investment',
      10: 'Personal',
      11: 'Services',
      12: 'Transfer',
      14: 'Education',
      99: 'Swap',
    },
    {
      // Incomes
      1: 'Salary',
      5: 'Business',
      2: 'Investment',
      3: 'Passive',
      7: 'Royalties',
      8: 'Bonuses',
      4: 'Transfer',
      6: 'Retirement',
      9: 'Others',
      99: 'Swap',
    },
  ],
  CATEGORIES_AMOUNT: (amount) => `${amount} ${amount > 1 ? 'categories' : 'category'}`,

  CHANGE_DESTINATION: 'Change destination',
  CHOOSE_CURRENCY: 'Base currency',
  CHOOSE_PLAN: 'Choose your plan',
  CLONE: 'Clone',
  CLOSE: 'Close',
  CONCEPT: 'Concept',
  CONFIRM_DELETION: 'Confirm deletion',
  CONFIRM_DELETION_CAPTION: 'Confirm permanent deletion of this transaction? This action is irreversible.',
  CONFIRM_DELETION_SUCCESS: 'Deleted successfully.',
  CONFIRM_EXPORT_SUCCESS: 'Export successful! Your data has been saved.',
  CONFIRM_IMPORT: 'Confirm import',
  CONFIRM_IMPORT_CAPTION: ({ accounts = [], txs = [] }) =>
    `Import the JSON file to update your ${accounts.length} accounts and ${txs.length} transactions. This action is irreversible.`,
  CONFIRM_IMPORT_SUCCESS: 'Imported successfully.',
  CURRENCY_COLOR_ENABLE: 'Enable currency colors',
  CURRENCY_COLOR_DISABLE: 'Disable currency colors',
  CURRENCY_NAME: {
    AUD: 'Australian Dollar',
    BTC: 'Bitcoin',
    CNY: 'Chinese Yuan',
    GBP: 'British Pound',
    ETH: 'Ethereum',
    EUR: 'Euro',
    HKD: 'Hong Kong Dollar',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    RUB: 'Russian Ruble',
    SGD: 'Singapore Dollar',
    THB: 'Thailand Baht',
    USD: 'USA Dollar',
    VND: 'Vietnamese Dong',
    XAU: 'Gold',
    XAG: 'Silver',
  },
  CURRENCIES: 'Currencies',

  DARK_MODE: 'Dark Mode',
  DELETE: 'Delete',
  DISABLE: 'Disable',

  ENABLE: 'Enable',
  ERROR: 'Something went wrong',
  ERROR_EXPORT: 'Export failed due to missing sharing permissions.',
  ERROR_IMPORT: 'Unsupported file format. Please select a compatible file type.',
  ERROR_PRODUCTS: 'Products not found',
  ERROR_PURCHASE: 'Purchase failed',
  ERROR_RESTORE: 'Restore failed',
  ERROR_SERVICE_RATES: 'Unable to fetch updated currency rates. Please check your internet connection.',
  ERROR_TRY_AGAIN: 'Something wrong happened. Try again.',
  EXPENSE: 'Expense',
  EXPENSES: 'Expenses',
  EXPORT: 'Export',
  EXPORT_DATA: 'Export Data',
  EXPORT_DATA_CAPTION: 'JSON archive',

  FIRST_ACCOUNT: 'Your first account',
  FIRST_ACCOUNT_CAPTION: 'Choose your main currency. Add more accounts later, each supporting different currencies.',

  GENERAL: 'General',
  GET_MONEY_PREMIUM: 'Get môney Premium',

  HISTORY: 'Months',
  HOME: 'Home',

  IMPORT: 'Import',
  IMPORT_DATA: 'Import Data',
  IMPORT_DATA_CAPTION: 'JSON archive',
  INCOME: 'Income',
  INCOMES: 'Incomes',
  INITIAL_BALANCE: 'Initial balance',
  IN_THIS_PAST_MONTH: 'in this past month',

  LAST_TRANSACTIONS: 'Recent activity',

  LIFETIME: 'Lifetime',
  LIFETIME_DESCRIPTION: "Pay once and don't worry ever",

  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  NAME: 'Name',
  NEW: 'New',
  NEXT: 'Next',
  NO_TRANSACTIONS: "You don't have any transaction.",

  ONBOARDING_FINANCES: 'Your Finances Anywhere',
  ONBOARDING_FINANCES_CAPTION:
    'Access your accounts and make transactions from your mobile phone, no matter where you are.',
  ONBOARDING_PRIVACY: 'Privacy First',
  ONBOARDING_PRIVACY_CAPTION:
    'Protect your personal data with Money, which doesn’t collect or share information with third parties.',
  ONBOARDING_SIMPLIFY: 'Simplify Your Finances',
  ONBOARDING_SIMPLIFY_CAPTION:
    'Money’s built-in intelligence helps you understand your spending and make better financial decisions.',
  ONBOARDING_WELCOME: 'Welcome to Money!',
  ONBOARDING_WELCOME_CAPTION: 'Explore seamless and secure management of your multicurrency accounts. Welcome aboard!',
  OVERALL_BALANCE: 'Overall Balance',

  PIN: 'Your PIN code',
  PIN_CHOOSE: 'Choose PIN code',
  PREFERENCES: 'Preferences',
  PREMIUM: 'Premium',
  PRIVACY: 'Privacy Policy',
  PURCHASE: 'Purchase',
  PURCHASE_RESTORED: 'Purchase restored.',

  REMINDERS: 'Reminders',
  RESTORE_PURCHASES: 'Restore purchases',

  SAVE: 'Save',
  SCHEDULE_BACKUP: 'Secure Your Finances!',
  SCHEDULE_BACKUP_CAPTION:
    "Don't forget to perform your weekly backup. Keep your financial information safe and up-to-date. It's quick and easy. Do it now!",
  SEARCH: 'Search',
  SELECT_ACCOUNT: 'Select account',
  SELECT_CATEGORY: 'Select category',
  SETTINGS: 'Settings',
  START: 'Start',
  START_TRIAL: 'Start free 7 day trial',
  SUBSCRIPTION: 'Subscription',
  SUBSCRIPTION_ACTUAL_PLAN: 'Actual plan',
  SUBSCRIPTION_AND: 'and',
  SUBSCRIPTION_CAPTION: 'No restrictions on accounts and transactions, plus a robust import/export feature.',
  SUBSCRIPTION_CLOSE: 'No thanks',
  SUBSCRIPTION_NEXT_BILLING_DATE: 'Next billing date',
  SUBSCRIPTION_PRIVACY: 'Privacy Policy',
  SUBSCRIPTION_TERMS: 'Terms',
  SUBSCRIPTION_TERMS_CAPTION:
    'By starting the 7-day free trial, your subscription will auto-renew unless canceled via App Store settings. By proceeding, you agree to our',
  SYNC_RATES_SENTENCE: 'Last update on',
  SYNC_RATES_CTA: 'Update Rates',
  SWAP: 'Swap',

  TERMS: 'Terms',
  TODAY: 'Today',
  TOTAL_BALANCE: 'Total Balance',
  TRANSACTION: ['Expense', 'Income', 'Swap'],
  TRANSACTIONS: 'Transactions',
  TRANSFERS: 'Transfers',

  ACCOUNT: 'Account',
  ACCOUNTS: 'Accounts',

  WAIT: 'Syncing...',
};
