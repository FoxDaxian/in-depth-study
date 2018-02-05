const temp = {}
const obj = {}
Object.defineProperties(obj, {
    name: {
        set: function (value) {
            console.log('set');
            temp.text = value
        },
        get: function () {
            console.log('get');
            return temp.text
        }
    }
})

export default obj