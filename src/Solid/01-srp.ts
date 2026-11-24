
(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductBloc {

        loadProduct(id: number): void {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product): void {
            console.log('Guardando en base de datos', product);
        }

        notifyClients(): void {
            console.log('Enviando correo a los clientes');
        }

        onAddToCart(productId: number): void {
            console.log('Agregando al carrito ', productId);
        }
    }

    class CartBloc {

        addToCart(productId: number): void {
            console.log('Agregando al carrito ', productId);
        }
    }

    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);

    cartBloc.addToCart(10);

})();
