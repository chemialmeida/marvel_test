let Validator = require('jsonschema').Validator;
let v = new Validator();

var instance = {
    'nombre': 'Chemi',
    'id': 15912020
};

var schema = {
    'type': 'object',
    'properties': {
        'nombre': {
            "type": "String",
            'required': true
        },
        'id': {
            "type": "Number",
            'required': true
        },
        'descripción': {
            "type": "String"
        }
    }

};

console.log(v.validate(instance, schema));