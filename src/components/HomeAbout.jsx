import React, { useRef } from "react";
import { homeAboutBg, icon } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ChevronDown, ChevronUp } from "react-feather";

export default function HomeAbout({}) {
  const prevRef = useRef();
  const nextRef = useRef();
  return (
    <div className="home__about">
      <img src={homeAboutBg} alt="homeAboutBg" className="home__about__img" />
      <div className="home__about__overlay">
        <div className="home__about__overlay__content">
          <div className="home__about__overlay__content__left">
            <div className="home__about__overlay__content__left__heading heading">
              You share your needs. We provide.
            </div>
            <div className="home__about__overlay__content__left__info">
              We are a global provider of AI and Data services, with highly
              experienced AI and Data professionals. With offices and staff from
              around the world, we can be close to our customers and understand
              their needs and interact easily with them for expanding their
              development capabilities and developing successful products in
              their digitalization road map.
            </div>
          </div>
          <div className="home__about__overlay__content__right">
            <div
              ref={prevRef}
              className="home__about__overlay__content__right__button__prev"
            >
              <ChevronUp size={20} color="currentColor" />
            </div>
            <div
              ref={nextRef}
              className="home__about__overlay__content__right__button__next"
            >
              <ChevronDown size={20} color="currentColor" />
            </div>
            <Swiper
              modules={[Navigation]}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={6}
              style={{
                height: 350,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__about__overlay__content__right__item">
                  <img
                    src={icon}
                    alt="icon"
                    className="home__about__overlay__content__right__item__img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
