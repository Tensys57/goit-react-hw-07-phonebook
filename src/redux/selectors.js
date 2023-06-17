export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.filters.status;
