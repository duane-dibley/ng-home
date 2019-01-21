export const companiesViewModel = {
    address: {
        query: 'registered-office-address', // GET /company/{company_number}/registered-office-address
    },
    charges: {
        query: 'charges', // GET LIST /company/{company_number}/charges
    },
    control: {
        query: 'persons-with-significant-control', // GET LIST /company/{company_number}/persons-with-significant-control
    },
    establishments: {
        query: 'uk-establishments', // GET LIST /company/{company_number}/uk-establishments
    },
    exemptions: {
        query: 'exemptions', // GET /company/{company_number}/exemptions
    },
    filing: {
        query: 'filing-history', // GET LIST /company/{company_number}/filing-history
    },
    insolvency: {
        query: 'insolvency', // GET /company/{company_number}/insolvency
    },
    officers: {
        query: 'officers', // GET LIST /company/{company_number}/officers
    },
    profile: {
        query: '', // GET /company/{company_number}
    },
    registers: {
        query: 'registers', // GET /company/{company_number}/registers
    }
};
