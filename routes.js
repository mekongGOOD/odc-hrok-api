module.exports =
    [
        {
            method: 'GET' + ''
            , path: '/products'
            , config:
                {
                    handler: getProducts
                    /*,
                    validate:
                        {
                          query: { name: Types.String() }
                        }
                    */
                }
        }
    ];

// &&&&&&&&&&&&&&&&&&&&&&
function getProducts(request) {

    if (request.query.name) {
        request.reply(findProducts(request.query.name));
    }
    else {
        request.reply(products);
    }
}


var products = [
    {
        id: 1,
        name: 'Guitar'
    },
    {
        id: 2,
        name: 'Banjo'
    }
];