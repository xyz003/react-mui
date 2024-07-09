// ----------------------------------------------------------------------

const ROOTS = {
    AUTH: '/auth',
    HOME: '/'
};

// ----------------------------------------------------------------------

export const paths = {
    // AUTH
    auth: {
        login: `${ROOTS.AUTH}/login`,
        opt: `${ROOTS.AUTH}/opt`,
        register: `${ROOTS.AUTH}/register`
    },
    // HOME
    home: {
        root: ROOTS.HOME
        // report: {
        //     list: `${ROOTS.DASHBOARD}/report/list`,
        //     new: `${ROOTS.DASHBOARD}/report/new`,
        //     edit: (id: string) => `${ROOTS.DASHBOARD}/report/${id}/edit`,
        //     details: (id: string) => `${ROOTS.DASHBOARD}/report/${id}`
        // }
    }
};
