import NavBar from '../compoments/NavBar'
import Header from '../compoments/Header'
import Feature from '../compoments/Feature'
import PropertyList from '../propertyList/PropertyList'
import FeaturedProperties from '../compoments/FeaturedProperties'
import MailList from '../compoments/MailList'
import Footer from '../compoments/Footer'

export default function Home(){

    return(
        <div>
            <NavBar/>
            <Header dis={true}/>
            <Feature/>
            <div className=' container mt-lg-5 mb-lg-5 mt-3 mb-3'>
                <h1 className=' fs-3'>Browse by property type</h1>
            </div>
            <PropertyList />
            <div className="container mt-5 pt-5 pb-5">
                <h1 className=' fs-3'>Homes guests love</h1>
            </div>
            <FeaturedProperties className=" mb-5"/>
            <MailList/>
            <Footer/>
        </div>
    )
}