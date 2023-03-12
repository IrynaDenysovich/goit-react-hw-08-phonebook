export const selectorContacts = state => state.contacts.items;

export const selectorContactLoading = state => state.contacts.getLoading;
export const selectorAddContactLoading = state => state.contacts.addLoading;
export const selectorRemoveContanctIndex = state => state.contacts.removeIndex;

export const selectorContactError = state => state.contacts.error;

export const selectorContactExists = state => contactName =>
  state.contacts.items.filter(
    ({ name }) => contactName.toLowerCase() === name.toLowerCase()
  ).length > 0;

export const selectorFilter = state => state.filter.value;

export const selectorAuthError = state => state.auth.error;
export const selectorAuthLoading = state => state.auth.isLoading;

export const selectorAuthUser = state => state.auth.user;
export const selectorAuthToken = state => state.auth.token;
