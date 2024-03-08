const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {
    const { Products } = this.entities()

    // this.before('READ', Products, row => {
    //     for (let index = 0; index < row.length; index++) {
    //         const element = row[index];
    //         console.log(`Read Product -- before: ${element.ID}`)
    //     }
        
    // })

    // this.on('READ', Products, row => {
    //     for (let index = 0; index < row.length; index++) {
    //         const element = row[index];
    //         console.log(`Read Product -- on: ${element.ID}`)
    //     }
        
    // })

    this.after('READ', Products, row => {
        for (let index = 0; index < row.length; index++) {
            const element = row[index];
            console.log(`Read Product --after: ${element.ID}`)
        }
        
    })

    this.after(['CREATE', 'UPDATE', 'DELETE'], [Products], async (Product, req) => {
        const header = req.data
        req.on('succeeded', () => {
            global.it || console.log(`< emitting: product_Changed ${Product.ID}`)
            this.emit('prod_Change', header)
        })
    })
})