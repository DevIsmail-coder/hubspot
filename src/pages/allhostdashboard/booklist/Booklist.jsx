import React, { useEffect, useState } from 'react'
import './booklist.css'
import { useSelector } from 'react-redux'
import { spaceBooking } from '../../Hubspotapi'
import { useNavigate } from 'react-router-dom'

const Booklist = () => {
    const navigate = useNavigate()
    const [booking, setBooking] = useState([])
    // const [title, setTitle] = useState("")
    const hostShowToken = useSelector((state) => state.hubspot.hostToken);
    const spaceToken = hostShowToken.hostToken


    const handleResponse = (mess) => {
        console.log(mess?.res);
        if (mess.res?.data?.data) {
            setBooking(mess?.res?.data?.data)

            console.log("am booking now", mess?.res?.data?.data);
        }

    }

    useEffect(() => {
        spaceBooking(handleResponse, spaceToken)
    }, [])
    return (
        <div className='Booklistbody'>
            <article className='Booklistbodyart'>
                <header className='Booklistheader'>
                    <span className='Booklistheaderspan'>Space</span>
                    <span className='Booklistheaderspan'>capacity</span>
                    <span className='Booklistheaderspan'>bookingcount</span>
                    <span className='Booklistheaderspan'>All</span>
                </header>
                <main className='Booklistmain'>
            {
                booking?.map((i, index) => (
                    <div className='Booklistmaindiv' key={index}>
                    <p className='Booklistmaindivcover'>{i.name}</p>
                    <p className='Booklistmaindivcover'>{i.capacity}</p>
                    <p className='Booklistmaindivcover'>{i.bookingCount}</p>
                    <div className='Booklistmaindivcover'>
                        <button className='Booklistmaindivcoverbut' onClick={() => navigate(`/bookinglist/${i.index}`)}>veiw all</button>
                    </div>
                </div>
                ))
            }
                </main>
            </article>
        </div>
    )
}

export default Booklist
