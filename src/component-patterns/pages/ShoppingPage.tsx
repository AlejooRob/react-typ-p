import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title= {''} />
                    <ProductCard.Buttons className="custom-bottons" />
                </ProductCard>

                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductImage className="custom-image"  style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}}/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-bottons" />
                </ProductCard>
                
                <ProductCard 
                    product={ product } 
                    style={{
                        backgroundColor: '#70d1f8'
                    }}
                >
                    <ProductImage style={{
                        boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }}/>
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
