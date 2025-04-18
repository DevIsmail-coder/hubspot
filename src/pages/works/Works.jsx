import React, { useEffect, useState } from 'react'
import './works.css'
import { Ismail, User } from '../../components/hubdata';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { IoIosArrowRoundForward, IoIosArrowRoundBack, IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { topSpace } from '../Hubspotapi';
import { useNavigate } from 'react-router-dom';
const Works = () => {
    const [topRated, setTopRated] = useState([])
    const navigate = useNavigate()

    const handleResponse = (mess) => {
        if (mess.data?.data) {
            setTopRated(mess.data?.data)

        }
    }
    console.log(topRated);

    useEffect(() => {
        topSpace(handleResponse)
    }, [])




    const [currentImage, setCurrentImage] = useState(0)
    const images = Ismail.map((i, index) => (
        <div className='Workscontainer2wrap' key={index}>
            <img src={i.showImg} className='Workscontainer2img' />
            <h3 className='Workscontainer2wraphh'>{i.name}</h3>
        </div>

    ))
    const scrollLeft = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    };

    const scorlRight = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }
    return (
        <div className='Worksbody'>
            <article className='Workscontainer1'>
                <main className='Workscontainer1main'>
                    <div className='Workscontainerwrap1'>
                        <main className='Workscontainerwrap1XX'>
                            <h3 className='Workscontainerwrap1XXh3'>What is HubSpot?</h3>
                            <p className='Workscontainerwrap1XXp'>
                                <span className='Workscontainerwrap1XXpspan'>HubSpot</span> connects you to exceptional coworking spaces and
                                creative hubs across Lagos, ensuring you work more efficiently
                                and effectively. Our platform offers detailed listings and
                                comparison tools so you can quickly find and select the perfect
                                space to match your professional needs.
                            </p>
                        </main>
                        <main className='Workscontainerwrap1XX'>
                            <h3 className='Workscontainerwrap1XXh3'>How it works?</h3>
                            <p className='Workscontainerwrap1XXp'>
                                Once you've chosen your ideal space, simply book your spot and receive
                                a booking ID/QR code. Present this code upon arrival, and your host
                                will welcome you and handle payment directly. HubSpot empowers you
                                to experience a seamless, distraction-free work environment that helps you thrive every day.
                            </p>
                        </main>
                        <main className='Workscontainerwrap1XXX'>
                            {/* <span className='Workscontainerwrap1XXXspan'> */}
                            <select
                className='Listingspaceinputselect'
                name="location"
                placeholder='location'
                // value={listData.location}
                // onChange={handleInputChange}
              >
                <option value="">Choose location</option>
                <option value="Apapa">Apapa</option>
                <option value="Festac">Festac</option>
                <option value="Ago">Ago</option>
                <option value="Ikeja">Ikeja</option>
                <option value="Yaba">Yaba</option>
                <option value="Surulere">Surulere</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Lekki">Lekki</option>
                <option value="Magodo">Magodo</option>
                <option value="Victoria island">Victoria island</option>
              </select>
                                 {/* <IoIosArrowDown className='Workscontainerwrap1XXXspanicon' /></span> */}
                            <button className='Workscontainerwrap1XXXbut'>Find Your Space</button>
                        </main>
                    </div>
                    <div className='Workscontainerwrap2'>
                        <img src='https://cdnewmoda.expatwoman.com/s3fs-public/Most-Expensive-Homes-In-Dubai.jpg' className='Workscontainerwrap2img' />
                    </div>
                </main>
            </article>
            <article className='Workscontainer2'>
                <h3 className='Workscontainer2h3'>Our Top Ranked Spaces</h3>
                <main className='Workscontainer2YYY'>
                    {
                        images[currentImage]
                    }
                </main>
                <main className='Workscontainer2YYY2'>
                    {
                        topRated.slice(0, 3).map((i, id) => (
                            <div className='Workscontainer2wrap' key={id}>
                                {
                                    i.images?.map((e, index) => (
                                        <img src={e.imageUrl} className='Workscontainer2img' key={index}  onClick={() => navigate(`/detailpage/${i.id}`)}/>
                                    ))
                                }

                                <h3 className='Workscontainer2wraphh'>{i.name}</h3>
                            </div>

                        ))
                    }
                </main>
                <div className='Workscontainer2arrow'>
                    <span onClick={scrollLeft} className='Workscontainer2arrowspan'><IoIosArrowRoundBack /> </span>
                    <span onClick={scorlRight} className='Workscontainer2arrowspan'><IoIosArrowRoundForward /></span>
                </div>
            </article>
            <article className='Workscontainer3'>
                <h3 className='Workscontainer3h'>Our Impact in Our Users' Words</h3>
                <main className='Workscontainer3main'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {User.map((i, index) => (
                            <SwiperSlide key={index} className='Workscontainer3wrap'>
                                <div className='Workscontainer3wrapInner'>
                                    <span className='Workscontainer3wrapspan'>
                                        <BiSolidQuoteLeft />
                                        <p className='Workscontainer3wrapspanpp'>"{i.reply}"</p>
                                    </span>
                                    <span className='Workscontainer3wrapspan2'>
                                        <HiUserCircle className='Workscontainer3wrapspan2icon' />
                                    </span>
                                    <div className='Workscontainer3wraptitle'>
                                        <h3 className='Workscontainer3wrapspan2h3'>{i.name}</h3>
                                        <p className='Workscontainer3wrapspan2p'>{i.stack}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </main>
            </article>
        </div>
    )
}

export default Works
