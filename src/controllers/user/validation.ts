export default Object.freeze({
    create: {
        name: {
            exists: true,
            string: true,
            in: ['body'],
            errorMessage: 'Name is required',
            isLength: {
                errorMessage: 'Character should be 1',
                options: { min: 1 },

            },
        },
        role: {
            exists: true,
            string: true,
            in: ['body'],
            errorMessage: 'Role is required',
            isLength: {
                errorMessage: 'Character should be 1',
                options: { min: 1 },

            },
        },
        email: {
            exists: true,
            string: true,
            in: ['body'],
            errorMessage: 'Email is required',
            isLength: {
                errorMessage: 'Character should be 1',
                options: { min: 1 },

            },
        },
    },
    delete: {
        originalId: {
            exists: true,
            in: ['body'],
            errorMessage: 'Id is required',
            isLength: {
                errorMessage: 'Character should be 1',
                options: { min: 1 },
            }
        }
    },
    get: {
        skip: {
            exists: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            exist: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
    },
    update: {
        originalId: {
            string: true,
            exists: true,
            in: ['body'],
            errorMessage: 'Id is required',
        }
    }

});