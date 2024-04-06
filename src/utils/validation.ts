export const validation = {
  required: {
    required: 'Dit veld is verplicht',
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Vul een geldig emailadres in',
    },
  },
  password: {
    minLength: {
      value: 8,
      message: 'Wachtwoord moet minimaal 8 tekens bevatten',
    },
  },
};
