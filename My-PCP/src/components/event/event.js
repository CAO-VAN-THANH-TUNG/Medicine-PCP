import './even.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./Produc-list";
import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Event_2 from './event2';
import Event_1 from './event1';
function Event() {
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/11_2023/thumbs/1500_crop_Thumbnail_thuc_pham_tot_cho_Gan.jpg',
                productName: 'NHỮNG THỰC PHẨM CẦN BẢO SUNG ĐỂ BẢO VỆ CHO GAN',

            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___Le_cong_bo_EU_GMP.jpg',
                productName2: 'LỄ CÔNG BỐ CHÚC MỪNG BOSTON PHARMA ĐẠT TIÊU CHUẨN EU-GMP',

            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___HNKH.jpg',
                productName3: 'HỘI NGHỊ KHÁCH HÀNG 2023 KHU VỰC HỒ CHÍ MINH – MIỀN ĐÔNG',

            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Kham_benh_nhan_dao_3_1.jpg',
                productName4: 'BOSTON PHARMA CHUNG TAY CÙNG HOẠT ĐỘNG KHÁM CHỮA',

            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hoc_bong___Hinh_1_1.jpg',
                productName5: 'BOSTON PHARMA TÀI TRỢ HỌC BỔNG DÀNH CHO SINH VIÊN KHOA',

            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_hinh_molravir.jpg',
                productName6: 'BỘ Y TẾ ĐỀ XUẤT CÔNG BỐ HẾT DỊCH COVID-19 THUỘC NHÓM A',

            },

        ],
    };
    return (

        <div className="khungchua">
            <div>
                <img className="img-header" src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-17/picture-1-1652776802-797-width660height440.jpg" alt="header" />
                <div className="TinTuc">TIN TỨC</div>
            </div>
            <div className="header-2">
                <button className="list ">TẤT CẢ</button>
                <button className="list ">KHOẺ MỖI NGÀY</button>
                <button className="list ">HOẠT ĐỘNG CỦA PCP</button>
                <button className="list ">KHO TÀI LIỆU Y DƯỢC</button>
            </div>
            <br></br>
            <div className="bodyy">
                <div className="khungbody ">
                    <div className="body-1">
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___HNKH.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>LỄ CÔNG BỐ PCP ĐẠT MỤC TIÊU</h1>
                        <hr></hr>
                        <p>Ngày 30/9/2023 vừa qua, tại Trung tâm Hội nghị White Palace, Boston Pharma đã tổ chức thành công Hội nghị khách hàng 2023 khu vực Hồ Chí Minh – Miền Đông hướng đến mục tiêu “Hợp tác bền vững – Cùng nhau phát triển”.</p>
                        <button className="timhieuthem">TÌM HIỂU HÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList products={initialState.products} />

            </div>
            <div className='Chuyentrang'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to="/event">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>1</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event1`}>2</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>3</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>4</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>5</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>6</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                <Routes>

                    <Route path="/event2" element={<Event_2 />} />
                    <Route path="/event1" element={<Event_1 />} />
                </Routes>
            </main>
        </div >
    )
}
export default Event;