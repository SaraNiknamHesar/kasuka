import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import "./header.css";
export default function Header() {
    return (
        <div className="header-section">
            <div className="container-fluid wrapper-box ">
                <div className="">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <button type="button" className="sell-buy-btn rounded-2 mt-2">Sell & Buy</button>
                        </div>

                        <div className="d-none d-md-block col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p className="short-text-header">Preview: Kasuka Single Page HTML Template</p>
                        </div>

                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <img className="rtl-theme-logo pe-3 pt-2" src="assets/img/logo.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}