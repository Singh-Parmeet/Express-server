export default Object.freeze({
    create: {
        name: {
          exists: true,
          string: true,
          in: ['body'],

        }
    },
    name: {
        exists: true,
        regex: '',
        in: ['body'],
        errorMessage: 'Name is required',
    },
    delete: {
       name: {
            exists: true,
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    get: {
        skip: {
            exists: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        }
    },
    limit: {
        exist: false,
        default: 10,
        number: true,
        in: ['query'],
        errorMessage: 'Limit is invalid',
    },
    update: {
        // id: {
        //     required: true,
        //     string: true,
        //     in:['body']
        // },
        name: {
            exists: true,
            in: ['body'],
            errorMessage: 'Name is required',
            // custom: function(dataToUpdate) {},
        }
    }

});
























