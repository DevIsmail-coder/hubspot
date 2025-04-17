import React, { useEffect, useState } from 'react'
import './details.css'
import { Around, Review } from '../../components/hubdata'
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import { PiSecurityCameraFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { getDetails } from '../Hubspotapi';
import { useParams, useNavigate } from 'react-router-dom';
import BookingModal from '../landing/BookingModal';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [changeImg, setChangeImg] = useState(0);
  const [allSpace, setAllSpace] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userToken = useSelector((state) => state.hubspot.userToken);

  const handleResponse = (mess) => {
    if (mess.data?.data) {
      setAllSpace(mess.data?.data)
    }
  }

  useEffect(() => {
    getDetails(handleResponse, id)
  }, [id]) // Added id as dependency

  const handleBookNowClick = () => {
    if (!userToken?.userToken) {
      toast.error('Please login to book this space', {
        duration: 3000,
        position: 'top-center',
      });
      navigate('/login');
      return;
    }
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleBookingSubmit = (result) => {
    console.log('Booking result:', result);
    toast.success('Your booking request has been submitted!', {
      duration: 5000,
      position: 'top-center',
      style: {
        background: '#1E398A',
        color: '#fff',
        padding: '16px',
        borderRadius: '10px',
        textAlign: 'center'
      },
      icon: '🎉',
    });
  }

  return (
    <>
      <div className='Detailsbody'>
        <main className='Detailscontainer1'>
          <article className='Detailscontainer1XX'>
            <div className='Detailscontainer1XX1'>
              <img src={allSpace?.images?.[changeImg]?.imageUrl} className='Detailscontainer1XX1img' alt={allSpace?.name} />
            </div>
            <div className='Detailscontainer1XX2'>
              {
                allSpace?.images && allSpace.images.map((i, id) => (
                  <span key={id} className='Detailscontainer1XX2span' onClick={() => setChangeImg(id)}>
                    <img src={i.imageUrl} className='Detailscontainer1XX2spanimg' alt={`Space view ${id + 1}`} />
                  </span>
                ))
              }
            </div>
            <div className='Detailscontainer1XX2I'>
              <div className='Detailscontainer1XX2I1'>
                <h1 className='Detailscontainer1XX2h3'>{allSpace?.name}</h1>
                <span className='Detailscontainer1XX2span'>
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </span>
              </div>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 1 },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {allSpace?.images && allSpace.images.map((image, id) => (
                  <SwiperSlide key={id} className='Detailscontainer1XX22span'>
                    <img src={image.imageUrl} className='Detailscontainer1XX22spanimg' alt={`Space view ${id + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div >
          </article>
          <article className='Detailscontainer1XXX'>
            <div className='Detailscontainer1XXX1'>
              <h1 className='Detailscontainer1XXX1h3'>{allSpace?.name}</h1>
              <span className='Detailscontainer1XXX1span'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
            </div>
            <div className='Detailscontainer1XXX2'>
              <span className='Detailscontainer1XXX2span'><IoLocationOutline className='Detailscontainer1XXX2spanicon' />{allSpace?.location}</span>
              <p className='Detailscontainer1XXX2p'>{allSpace?.spaceType}</p>
            </div>
            <div className='Detailscontainer1XXX3'>
              <h3 className='Detailscontainer1XXX3h3'>Space Overview</h3>
              <p className='Detailscontainer1XXXp'>{allSpace?.overview}</p>
            </div>
            <div className='Detailscontainer1XXX4'>
              <h3 className='Detailscontainer1XXX4h3'>Space Amenities</h3>
              <main className='Detailscontainer1XXX4main'>
                <span className='Detailscontainer1XXX4mainspan'><IoIosWifi className='Detailscontainer1XXX4mainspanicon' /> Free WiFi</span>
                <span className='Detailscontainer1XXX4mainspan'><GiCoffeeCup className='Detailscontainer1XXX4mainspanicon' /> Free Coffee</span>
                <span className='Detailscontainer1XXX4mainspan'><MdSolarPower className='Detailscontainer1XXX4mainspanicon' /> 24 hours light</span>
                <span className='Detailscontainer1XXX4mainspan'><PiSecurityCameraFill className='Detailscontainer1XXX4mainspanicon' /> Camera</span>
              </main>
            </div>
            <div className='Detailscontainer1XXX3'>
              <h3 className='Detailscontainer1XXX3h3'>Space Prices</h3>
              <p className='Detailscontainer1XXXp'>₦{allSpace?.pricePerDay}/day</p>
              <p className='Detailscontainer1XXXp'>₦{allSpace?.pricePerHour}/hour</p>
            </div>
          </article>
        </main>
        <main className='Detailscontainer2'>
          <article className='Detailscontainer2XX'>
            <div className='Detailscontainer2XXwrap1'>
              <span className='Detailscontainer2XXwrap1span'></span>
              <span className='Detailscontainer2XXwrap1span'></span>
            </div>
            <div className='Detailscontainer2XXwrap2'>
              <article className='Detailscontainer2XXwrap2art1'>
                <span className='Detailscontainer2XXwrap2art1span'></span>
                <span className='Detailscontainer2XXwrap2art1span'></span>
              </article>
              <article className='Detailscontainer2XXwrap2art2'>
                <button className='Detailscontainer2XXwrap2art2but' onClick={handleBookNowClick}>
                  Book Space Now
                </button>
              </article>
            </div>
          </article>
          <article className='Detailscontainer2XXX'>
            <h3 className='Detailscontainer2XXXh3'>Reviews & Ratings</h3>
            {
              Review.map((i, index) => (
                <div key={index}>
                  <p className='Detailscontainer2XXXptag'>{i.reply}</p>
                  <main className='Detailscontainer2XXXmain'>
                    <div className='Detailscontainer2XXXmain1'>
                      <span className='Detailscontainer2XXXmain1span'>
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </span>
                      <h3>{i.name}</h3>
                    </div>
                    <span className='Detailscontainer2XXXmain1span2'>
                      <img src={i.img} className='Detailscontainer2XXXmain1span2img' alt={i.name} />
                    </span>
                  </main>
                </div>
              ))
            }
          </article>
        </main>
        <main className='Detailscontainer3'>
          <h1 className='Detailscontainer3h3'>SPACES AROUND SAME LOCATION</h1>
          <article className='Detailscontainer3art'>
            {
              Around.map((i, index) => (
                <div key={index} className='Detailscontainer3artwrap'>
                  <main className='Detailscontainer3artwrapspan'>
                    <img src={i.showImg} className='Detailscontainer3artwrapspanimg' alt={i.name} />
                  </main>
                  <h3 className='Detailscontainer3artwraph3'>{i.name}</h3>
                  <span className='Detailscontainer3artwraplocation'><IoLocationOutline /> {i.location}</span>
                </div>
              ))
            }
          </article>
        </main>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        spaceId={id}
        onSubmit={handleBookingSubmit}
      />
    </>
  )
}

export default Details