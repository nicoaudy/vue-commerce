new Vue({
    el: '#app',
    data: {
        cart: {
            items: [],
        },
        products: [
            {
                id: 1,
                name: 'MacBook Pro (15 inch)',
                description: 'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
                price: 1700,
                inStock: 50
            },
            {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
                price: 10000,
                inStock: 755
            },
            {
                id: 3,
                name: 'HP Officejet 5740 e-All-in-One-printer',
                description: 'This one might not last for so long, but hey, printers never work anyways, right?',
                price: 200,
                inStock: 5
            },
            {
                id: 4,
                name: 'iPhone 7 cover',
                description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
                price: 600,
                inStock: 42
            },
            {
                id: 5,
                name: 'iPad Pro (9.7 inch)',
                description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
                price: 750,
                inStock: 0
            },
            {
                id: 6,
                name: 'OnePlus 3 cover',
                description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
                price: 20,
                inStock: 81
            }
        ]
    },
    methods: {
        addProductToCart(product) {
            this.cart.items.push({
                product: product,
                quantity: 1
            })

            product.inStock--
        }
    },
    computed: {
        cartTotal() {
            var total = 0

            this.cart.items.map(function(item){
                total += item.quantity * item.product.price
            })

            return total
        }
    },
    filters: {
        currency: function(value) {
            var formatter = Intl.NumberFormat('en-USD', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
            })

            return formatter.format(value)
        }
    }
});
