import NavBar from '../compoments/NavBar';
import Header from '../compoments/Header';
import ListLeft from '../compoments/ListLeft';
import ListRight from '../compoments/ListRight';
import MailList from '../compoments/MailList';
import Footer from '../compoments/Footer';
import { useEffect, useState } from 'react';
import Data from '../compoments/Data';
import { useLocation } from 'react-router-dom';

export default function Home({ sRec }) {
    const location = useLocation();
    const data = location.state?.data || [];
    
    const [name, setName] = useState(data.length !== 0 ? data[0] : "");
    
    const [send, setSend] = useState(
        name !== "" 
            ? [
                Data.filter(item => item.city === name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")),0,1,0,1
            ] 
            : [Data,0,1,0,1]
    );
    
    useEffect(() => {

        sRec(send);
    }, [send, sRec]);

    return (
        <div>
            <NavBar />
            <Header dis={false}/>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='pt-3 pb-4 col-lg-4 col-12 position-relative'>
                        <ListLeft onSend={send} kkk={setSend} />
                    </div>
                    <div className='col-lg-8 col-12'>
                        <ListRight data={send} />
                    </div>
                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    );
}