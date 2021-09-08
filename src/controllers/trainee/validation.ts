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
    },
    delete: {
        name: {
            exists: true,
            in: ['body'],
            errorMessage: 'Name is required',
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
        name: {
            exists: true,
            in: ['body'],
            errorMessage: 'Name is required',
        }
    }

});