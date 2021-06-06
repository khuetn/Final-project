import React from "react";
import FirebaseContext from "../../firebase/context";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useParams } from "react-router-dom";

function Search(props) {
  const query = props.location.state;
  console.log(query);

  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // console.log(query);
  const { firebase } = React.useContext(FirebaseContext);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState(query);
  const history = useHistory();
  //----------------------------------------------------------------

  const dispatch = useDispatch();
  // const { products, filteredProductList, isFilterRender } = useSelector(
  //   (state) => state.productList
  // );
  //----------------------------------------------------------------

  React.useEffect(() => {
    getInitialProducts();
  }, []);

  function getInitialProducts() {
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        dispatch({ type: "INITIAL", payload: products });
        setProducts(products);
      });
  }
  // function handleSearch() {
  //   const query = filter.toLowerCase();
  //   console.log("ok", query);
  //   const matchedProducts = products.filter((product) => {
  //     return (
  //       // product.description.toLowerCase().includes(query) ||
  //       product.name.toLowerCase().includes(query)
  //       // product.NSX.toLowerCase().includes(query)
  //     );
  //   });
  //   console.log(matchedProducts);
  //   dispatch({ type: "SEARCH", payload: matchedProducts });
  //   setFilteredProducts(matchedProducts);
  //   // history.push("/");
  // }

  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }
    return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
    });
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit} action="/" method="get">
        <input placeholder="searchbar" />
        <button type="submit">search</button>
      </form> */}
      <div className="container">
        <div className="row">
          {filterProducts(products, query).map((filteredProduct, index) => (
            <ProductItem
              key={filteredProduct.id}
              showCount={false}
              product={filteredProduct}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;

// import { useRouteMatch, Link } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import StarRatings from "react-star-ratings";
// import { Pagination } from 'antd';
// import { FileSearchOutlined } from '@ant-design/icons';

// import Loading from "loading/index";
// import './style.css';
// const formatter = new Intl.NumberFormat('vn');
// export default function Search() {
//     const dispatch = useDispatch();
//     const { keyWord } = useRouteMatch().params;
//     document.querySelector('title').innerHTML = `Tìm kiếm - ${keyWord.trim()}`;
//     // create state
//     const [page, setPage] = useState(1);
//     const [current, setCurrent] = useState(1);
//     // fetch API
//     const params = { keyword: keyWord.trim(), page: page };
//     useEffect(() => {
//         setPage(1);
//         setCurrent(1);
//         const fetchSearchAPI = async () => {
//             await dispatch(getSearch(params));
//         };
//         fetchSearchAPI();
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         })
//     }, [keyWord]);
//     useEffect(() => {
//         const fetchSearchAPI = async () => {
//             await dispatch(getSearch(params));
//         };
//         setCurrent(page);
//         fetchSearchAPI();
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         })
//     }, [page]);
//     // Data Search
//     const dataSearch = useSelector(state => state.search.data);
//     const lengthSearch = useSelector(state => state.search.lenght);
//     const loadingSearch = useSelector(state => state.search.loading);
//     // function
//     const onChangePage = (page) => {
//         setPage(page);

//     }
//     const showPagination = length => {
//         if (length > 0) {
//             return (
//                 <Pagination
//                     onChange={onChangePage}
//                     total={length}
//                     defaultPageSize={16}
//                     current={current}
//                 />
//             )
//         }
//     };

//     const showReview = (rating, numReviews) => {
//         const rate = (rating / numReviews);
//         if (numReviews > 0) {
//             return (
//                 <div className="revews-products">
//                     <div className="start-review">
//                         <StarRatings
//                             starDimension="16px"
//                             starRatedColor="#fed330"
//                             starHoverColor="#fed330"
//                             rating={rate}
//                             starEmptyColor="white"
//                         />
//                     </div>
//                     <p>{numReviews} đánh giá</p>
//                 </div >
//             )
//         }
//         else {
//             return (
//                 <>
//                     <StarRatings
//                         starDimension="16px"
//                         starRatedColor="#fed330"
//                         starHoverColor="#fed330"
//                         starEmptyColor="none"
//                         numberOfStars={5}
//                     />
//                     <p >Chưa có đánh giá</p>
//                 </>
//             )
//         }
//     };
//     return (
//         <>
//             {loadingSearch && <Loading />}
//             <div className="main-search">
//                 <div className="group-product-search">
//                     <h3>Kết quả tìm kiếm cho '{keyWord === 'undefined' ? '' : keyWord}'</h3>
//                     <div className="group-search">
//                         {dataSearch.map(product => (
//                             <div className="item-products-search" key={product._id} data-aos="zoom-in">
//                                 <Link
//                                     to={`/${product.key}/${product.NSX.replace(/ /g, '-')}/${product.name.replace(/ /g, '-')}/${product._id}`}
//                                     onClick={() => {
//                                         $("html ,body").animate({ scrollTop: 0 }, 500);
//                                     }}
//                                 >
//                                     <div className="ig-products-search">
//                                         <LazyLoadImage
//                                             effect="blur"
//                                             src={product.poster[0].url}
//                                             alt={product._id}
//                                             key={product._id}
//                                             height="100%"
//                                             width="100%"
//                                         />
//                                     </div>
//                                     <div className="name-products-search">
//                                         <p>{product.name}</p>
//                                     </div>
//                                 </Link>
//                                 <div className="price-products-search">
//                                     <div className="group-price">
//                                         <span>{formatter.format(product.price)} <u>đ</u></span>
//                                     </div>
//                                 </div>
//                                 <div className="group-start-review">
//                                     {
//                                         showReview(product.rating, product.numReviews)
//                                     }
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {
//                         showPagination(lengthSearch)
//                     }
//                     {lengthSearch === 0 && (
//                         <div className="group-no-data">
//                             <FileSearchOutlined
//                                 style={{ fontSize: '4.5em', color: '#596275' }}
//                             />
//                             <p>Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn</p>
//                         </div>
//                     )
//                     }
//                 </div>
//             </div>
//         </>
//     )
// };
