import Header from "../../components/Header"
import "./ErrorPage.scss"
import Photo from "../../assets/images/error.jpg";

const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <div className="ErrorPage__header">
           <Header />
           </div>
           <div className="ErrorPage__back">
           <div className="ErrorPage__text">
                SORRY, PLEASE WAIT!!!OR GO HOME!!
            </div>
           <div className="ErrorPage__image_container">
               <img src={Photo} alt="" className="ErrorPage__image" />
            </div>
            </div>
            </div>
    )
}

export default ErrorPage;