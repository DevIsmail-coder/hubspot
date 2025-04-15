import React, { useEffect, useState } from 'react'
import './details.css'
import { Around, coldImg, Review } from '../../components/hubdata'
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
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams()
  const [changeImg, setChangeImg] = useState(0)
  const [allSpace, setAllSpace] = useState([])

  console.log(allSpace);

  const handleResponse = (mess) => {
    if (mess.data?.data) {
      setAllSpace(mess.data?.data)
    }
  }

  useEffect(() => {
    getDetails(handleResponse, id)
  }, [])
  return (
    <>
      <div className='Detailsbody'>
        <main className='Detailscontainer1'>
          <article className='Detailscontainer1XX'>
            <div className='Detailscontainer1XX1'>
              {
                coldImg.slice(0, 1).map((i, index) => (
                  <img src={i.img} className='Detailscontainer1XX1img' key={index} />
                ))
              }
            </div>
            <div className='Detailscontainer1XX2'>
              {
                coldImg.map((i, index) => (
                  <span key={index} className='Detailscontainer1XX2span'>
                    <img src={i.img} className='Detailscontainer1XX2spanimg' />
                  </span>
                ))
              }
            </div>
            <div className='Detailscontainer1XX2I'>
              <div className='Detailscontainer1XX2I1'>
                <h1 className='Detailscontainer1XX2h3'>Flexispace</h1>
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

                {coldImg.map((i, index) => (
                  <SwiperSlide key={index} className='Detailscontainer1XX22span'>
                    <img src={i.img} className='Detailscontainer1XX22spanimg' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div >

          </article>
          <article className='Detailscontainer1XXX'>
            <div className='Detailscontainer1XXX1'>
              <h1 className='Detailscontainer1XXX1h3'>Flexispace</h1>
              <span className='Detailscontainer1XXX1span'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
            </div>
            <div className='Detailscontainer1XXX2'>
              <span className='Detailscontainer1XXX2span'><IoLocationOutline className='Detailscontainer1XXX2spanicon' /> 18 Oba Akran Avenue, Alausa Central Business District, 3rd Floor</span>
              <p className='Detailscontainer1XXX2p'>Cowork Space</p>
            </div>
            <div className='Detailscontainer1XXX3'>
              <h3 className='Detailscontainer1XXX3h3'>Space Overview</h3>
              <p className='Detailscontainer1XXXp'>A modern coworking space offering flexible desks, high-speed internet, private
                meeting rooms, and a vibrant community of professionals designed to boost
                productivity.</p>
            </div>
            <div className='Detailscontainer1XXX4'>
              <h3 className='Detailscontainer1XXX4h3'>Space Amenities</h3>
              <main className='Detailscontainer1XXX4main'>
                <span className='Detailscontainer1XXX4mainspan'><IoIosWifi className='Detailscontainer1XXX4mainspanicon' />  Free Wifi</span>
                <span className='Detailscontainer1XXX4mainspan'><GiCoffeeCup className='Detailscontainer1XXX4mainspanicon' /> Free Coffe</span>
                <span className='Detailscontainer1XXX4mainspan'><MdSolarPower className='Detailscontainer1XXX4mainspanicon' /> 24 hours light</span>
                <span className='Detailscontainer1XXX4mainspan'><PiSecurityCameraFill className='Detailscontainer1XXX4mainspanicon' /> Camera</span>
              </main>
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
                <div className='Detailscontainer2XXwrap2art2div'>
                  <span className='Detailscontainer2XXwrap2art2divspan'>
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </span>
                  <p className='Detailscontainer2XXwrap2art2divspanpp'>Add more days</p>
                </div>
                <button className='Detailscontainer2XXwrap2art2but'>Book 1 day</button>
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
                      <img src={i.img} className='Detailscontainer2XXXmain1span2img' />
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
                    <img src={i.showImg} className='Detailscontainer3artwrapspanimg' />
                  </main>
                  <h3 className='Detailscontainer3artwraph3'>{i.name}</h3>
                  <span className='Detailscontainer3artwraplocation'><IoLocationOutline /> {i.location}</span>
                </div>
              ))
            }
          </article>
        </main>
      </div>
    </>
  )
}

export default Details
