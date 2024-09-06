import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");


    useEffect(() => {
        const fetchClothing = async() => {
            try {
                const Response = await fetch("https://fakeapidata.com/products");
                const Data = await Response.json();

                const ProductsMen = Data.filter(product => product.category === "men's clothing");
                const ProductsWomen = Data.filter(product => product.category === "women's clothing");
                setProducts([...ProductsMen,...ProductsWomen]);

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchClothing();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === "all" 
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (loading)
        return (
        <>
            <div className="shop-container">
                <aside className="sidebar">
                    <h2>Categories</h2>
                    <ul>
                        <li onClick={() => handleCategoryClick("all")}>All</li>
                        <li onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</li>
                        <li onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</li>
                    </ul>
                </aside>
                <main className="products-container">
                    <div class="card">
                        <div class="header">
                            <div class="img"></div>
                            <div class="details">
                                <span class="name"></span>
                                <span class="about"></span>
                            </div>
                        </div>
                        <div class="description">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                        <div class="btns">
                            <div class="btn btn-1"></div>
                            <div class="btn btn-2"></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <div class="img"></div>
                            <div class="details">
                                <span class="name"></span>
                                <span class="about"></span>
                            </div>
                        </div>
                        <div class="description">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                        <div class="btns">
                            <div class="btn btn-1"></div>
                            <div class="btn btn-2"></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <div class="img"></div>
                            <div class="details">
                                <span class="name"></span>
                                <span class="about"></span>
                            </div>
                        </div>
                        <div class="description">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                        <div class="btns">
                            <div class="btn btn-1"></div>
                            <div class="btn btn-2"></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <div class="img"></div>
                            <div class="details">
                                <span class="name"></span>
                                <span class="about"></span>
                            </div>
                        </div>
                        <div class="description">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                        <div class="btns">
                            <div class="btn btn-1"></div>
                            <div class="btn btn-2"></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <div class="img"></div>
                            <div class="details">
                                <span class="name"></span>
                                <span class="about"></span>
                            </div>
                        </div>
                        <div class="description">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                        <div class="btns">
                            <div class="btn btn-1"></div>
                            <div class="btn btn-2"></div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <div class="img"></div>
                            <div class="details">
                                <span class="name"></span>
                                <span class="about"></span>
                            </div>
                        </div>
                        <div class="description">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                        <div class="btns">
                            <div class="btn btn-1"></div>
                            <div class="btn btn-2"></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
        );
    if (error) 
        return (
            <>
                <div className="shop-container">
                    <aside className="sidebar">
                        <h2>Categories</h2>
                        <ul>
                            <li onClick={() => handleCategoryClick("all")}>All</li>
                            <li onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</li>
                            <li onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</li>
                        </ul>
                    </aside>
                    <main className="products-container">
                        <p>Error{error.message}</p>
                    </main>
                </div>
            </>
            );

    return (
        <>
        <div className="shop-container">
            <aside className="sidebar">
                <h2>Categories</h2>
                <ul>
                    <li onClick={() => handleCategoryClick("all")}>All</li>
                    <li onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</li>
                    <li onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</li>
                </ul>
            </aside>
            <main className="products-container">
                {filteredProducts.map((product) => (
                    <Link key={product.id}  state={{product}} to={`/products/${product.id}`} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Starts from ${product.price.toFixed(2)}</p>
                        <p>Rating: {product.rating.rate}</p>
                    </Link>
                ))}
            </main>
        </div>
        </>
    );
};

export default Products;

