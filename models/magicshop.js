const magicShopSchema = new Schema ({
    Name: { type: String, require: true },
    Magicproperty: {type: String, require: true },
    ForgeAndBuy: Boolean
})

const magicShop = model('Magicshop', magicShopSchema)

module.exports = magicShop