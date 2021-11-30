import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCard } from '../hooks/useShoppingCard';

export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCard();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map( product => (
                        
                        <ProductCard 
                            className="bg-dark text-white"
                            key={product.id}
                            product={ product }
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image"  style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}}/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-bottons" />
                        </ProductCard>
                    ))
                }
                
                
            </div>
            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).map((product, index) => (
                        
                        <ProductCard 
                            className="bg-dark text-white"
                            key={ index }
                            product={ product } 
                            style={{ width: '100px'}}
                            value= { product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image"  style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}}/>
                            <ProductButtons 
                                className="custom-bottons" 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
