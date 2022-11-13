import React from "react";
import { Link } from "../Router";

export default function HomeServices({}) {
  return (
    <div className="home__services">
      <div className="home__services__heading heading">Services</div>
      <div className="home__services__content">
        <div className="home__services__content__entry">
          <div className="home__services__content__entry__icon">
            <svg
              width="66"
              height="60"
              viewBox="0 0 66 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.9495 17.3503C65.0651 17.5544 64.1978 17.8605 63.2964 17.9626C61.9018 18.1326 60.9324 18.7789 60.4562 20.1225C60.3541 20.4286 60.2011 20.7177 60.082 21.0068C59.6909 21.9933 59.7589 22.9457 60.3712 23.813C60.8303 24.4763 61.3235 25.1396 61.8168 25.7858C62.1739 26.245 62.1909 26.6192 61.7317 27.0104C61.5106 27.2144 61.3065 27.4355 61.0854 27.6396C60.3371 28.3879 60.2181 28.4049 59.3337 27.7587C58.8065 27.3845 58.2963 26.9934 57.7861 26.6022C56.8507 25.9219 55.8643 25.8369 54.8098 26.2791C54.5377 26.3981 54.2656 26.5172 53.9765 26.6192C52.7179 27.0784 52.0547 27.9798 51.8846 29.3063C51.7996 29.9866 51.6805 30.6669 51.5955 31.3472C51.5274 31.8914 51.2893 32.2145 50.6771 32.1635C50.2689 32.1295 49.8608 32.1465 49.4526 32.1635C48.8743 32.1975 48.5852 31.9764 48.5172 31.3642C48.4322 30.5308 48.2791 29.7145 48.143 28.8811C47.99 27.9798 47.4968 27.2995 46.6804 26.8743C46.1362 26.5852 45.5579 26.3471 44.9627 26.143C44.0443 25.8369 43.177 25.9899 42.3946 26.5512C41.7143 27.0444 41.0511 27.5376 40.3878 28.0478C40.0136 28.3369 39.7075 28.3369 39.3674 27.9798C39.0102 27.6056 38.6531 27.2315 38.2789 26.8743C37.9388 26.5512 37.9558 26.211 38.2279 25.8539C38.7041 25.2246 39.1633 24.5783 39.6395 23.9321C40.3538 22.9627 40.4558 21.9422 39.9796 20.8368C39.8606 20.5647 39.7415 20.2925 39.6395 20.0034C39.1973 18.7959 38.3469 18.1326 37.0714 17.9456C36.3911 17.8435 35.7108 17.7415 35.0305 17.6564C34.4353 17.5884 34.1462 17.3163 34.1972 16.687C34.2312 16.2619 34.2312 15.8197 34.1972 15.3945C34.1462 14.8163 34.4353 14.5782 34.9625 14.4931C35.8129 14.3741 36.6632 14.238 37.4966 14.0849C38.466 13.9149 39.1122 13.3366 39.5034 12.4523C39.6905 12.0271 39.8606 11.5849 40.0476 11.1427C40.4558 10.1563 40.3368 9.2039 39.7245 8.33654C39.2483 7.65625 38.7381 6.97597 38.2449 6.31269C37.9558 5.92153 37.9558 5.58138 38.3299 5.24124C38.7041 4.88409 39.0612 4.50993 39.4184 4.13578C39.7075 3.82965 39.9966 3.81264 40.3198 4.06775C40.932 4.54395 41.5613 4.98614 42.1735 5.46233C43.194 6.22765 44.2654 6.38072 45.4389 5.8535C45.66 5.75145 45.8641 5.64941 46.0852 5.58138C47.3947 5.12219 48.092 4.1868 48.2451 2.80922C48.3301 2.12894 48.4322 1.44865 48.5172 0.768367C48.5852 0.224139 48.8573 -0.0309672 49.4186 0.00304704C49.8437 0.0370613 50.2859 0.0370613 50.7111 0.00304704C51.2893 -0.0309672 51.5104 0.258154 51.5955 0.785375C51.7145 1.61872 51.8506 2.43506 51.9696 3.26841C51.9866 3.38746 52.0036 3.52352 52.0547 3.64257C52.6839 5.66642 55.9323 6.8229 57.684 5.6324C58.3983 5.15621 59.0616 4.61198 59.7419 4.08476C60.082 3.81264 60.3882 3.81264 60.6943 4.15279C61.0174 4.49293 61.3406 4.83307 61.6977 5.15621C62.1229 5.54737 62.1739 5.92153 61.7998 6.38072C61.3236 6.97597 60.8814 7.62224 60.4222 8.2515C59.7419 9.16989 59.6399 10.1733 60.082 11.2277C60.2181 11.5679 60.3712 11.891 60.4902 12.2312C60.9494 13.4047 61.8168 14.0169 63.0583 14.187C63.7386 14.272 64.4188 14.3571 65.0991 14.4931C65.3883 14.5441 65.6434 14.7142 65.9155 14.8333C65.9495 15.7176 65.9495 16.534 65.9495 17.3503ZM50.1159 8.79573C46.0682 8.79573 42.7688 12.0781 42.7688 16.0918C42.7688 20.1565 46.0682 23.4729 50.1159 23.4729C54.1636 23.4729 57.4629 20.1565 57.4629 16.0918C57.4629 12.0611 54.1636 8.77872 50.1159 8.79573Z"
                fill="#0ED1BB"
              />
              <path
                d="M0.0127553 20.8368C0.386912 20.8368 0.642019 20.8368 0.897126 20.8368C10.149 20.8368 19.4009 20.8368 28.6528 20.8368C28.8738 20.8368 29.0779 20.8538 29.299 20.8198C29.8773 20.7688 30.2854 20.3266 30.3024 19.7653C30.3195 19.2041 29.9283 18.7109 29.3671 18.6259C29.129 18.5918 28.8909 18.6088 28.6528 18.6088C19.3839 18.6088 10.115 18.6088 0.829097 18.6088C0.57399 18.6088 0.318884 18.6088 0.0127553 18.6088C0.0127553 17.0102 0.0127553 15.4625 0.0127553 13.9319C0.0127553 13.2856 -0.038266 12.6393 0.0637767 12.0101C0.369905 10.2924 1.7815 9.22091 3.7033 9.22091C14.6899 9.22091 25.6765 9.22091 36.6801 9.22091C36.8672 9.22091 37.0713 9.22091 37.2584 9.22091C37.8536 9.23792 38.2278 9.81616 38.0237 10.3774C38.0237 10.3944 38.0067 10.4114 38.0067 10.4454C37.3944 11.9931 37.3944 11.9761 35.7277 12.1802C35.2005 12.2482 34.6563 12.3162 34.1461 12.4353C32.9726 12.7074 32.1392 13.6938 32.0712 14.9183C32.0202 15.7176 32.0202 16.5 32.0712 17.2993C32.1392 18.5408 32.9896 19.5442 34.2141 19.7993C35.0134 19.9694 35.8128 20.0885 36.6291 20.1905C37.1733 20.2585 37.4454 20.5136 37.7175 21.0069C38.2278 21.9422 38.1087 22.6735 37.3774 23.4049C36.9862 23.796 36.6971 24.2892 36.374 24.7484C35.5576 25.9389 35.6597 27.3335 36.6461 28.405C37.0543 28.8471 37.4794 29.2723 37.9216 29.6805C38.9591 30.6839 40.4387 30.803 41.6462 29.9866C42.3265 29.5274 42.9728 29.0512 43.619 28.541C43.9762 28.2689 44.2823 28.2859 44.6905 28.422C45.6599 28.7111 46.2041 29.2383 46.2041 30.3268C46.2041 30.939 46.3572 31.5513 46.4932 32.1635C46.7823 33.4731 47.7347 34.3064 49.0613 34.3915C49.7926 34.4425 50.5239 34.4425 51.2552 34.3915C52.6838 34.2894 53.6872 33.303 53.9083 31.8574C54.0274 31.0751 54.1124 30.2757 54.2995 29.5104C54.3675 29.2383 54.6226 28.9492 54.8607 28.7791C55.7451 28.1498 56.5104 28.3199 57.3948 29.0002C58.1771 29.5954 58.4662 30.1737 58.4662 31.1601C58.4322 39.3235 58.4492 47.4699 58.4322 55.6334C58.4322 57.5552 57.4458 58.8647 55.7281 59.2559C55.439 59.3239 55.1329 59.3239 54.8267 59.3239C37.7686 59.3239 20.6934 59.3239 3.63527 59.3239C1.47537 59.3239 0.0637767 57.8953 0.0637767 55.7184C0.0637767 44.3236 0.0637767 32.9288 0.0637767 21.5171C0.0127553 21.33 0.0127553 21.1259 0.0127553 20.8368ZM16.7818 24.4253C14.1627 24.4253 11.5436 24.4253 8.92449 24.4253C6.81561 24.4253 5.38701 25.8029 5.37 27.9117C5.35299 31.0411 5.35299 34.1704 5.37 37.3167C5.38701 39.4086 6.8156 40.8031 8.90748 40.8031C14.1457 40.8031 19.3839 40.8031 24.6221 40.8031C26.7139 40.8031 28.1936 39.3575 28.1936 37.2487C28.2106 34.1534 28.2106 31.0751 28.1936 27.9798C28.1766 25.8709 26.7139 24.4253 24.6221 24.4253C22.02 24.4253 19.4009 24.4253 16.7818 24.4253ZM29.18 46.2794C21.6288 46.2794 14.0606 46.2794 6.50948 46.2794C6.27138 46.2794 6.03328 46.2794 5.79518 46.2964C5.18292 46.3475 4.79176 46.7386 4.75774 47.3169C4.72373 47.8951 5.11489 48.4053 5.71014 48.5074C5.91423 48.5414 6.13532 48.5244 6.35641 48.5244C21.5778 48.5244 36.7992 48.5244 52.0205 48.5244C52.2076 48.5244 52.4117 48.5414 52.5988 48.5074C53.211 48.4223 53.6192 47.9631 53.6022 47.3679C53.6022 46.7556 53.194 46.3475 52.5478 46.2964C52.3097 46.2794 52.0716 46.2794 51.8335 46.2794C44.2823 46.2794 36.7311 46.2794 29.18 46.2794ZM29.146 55.7694C36.7311 55.7694 44.2993 55.7694 51.8845 55.7694C52.1226 55.7694 52.3607 55.7694 52.5988 55.7524C53.16 55.7014 53.5172 55.3782 53.6022 54.834C53.6872 54.2558 53.4321 53.8136 52.8709 53.6265C52.6158 53.5415 52.3267 53.5245 52.0546 53.5245C36.8162 53.5245 21.5778 53.5245 6.33941 53.5245C6.15233 53.5245 5.94824 53.5075 5.76116 53.5415C5.16591 53.6265 4.75774 54.1197 4.77475 54.698C4.79176 55.2932 5.21694 55.7014 5.8462 55.7524C6.06729 55.7694 6.27138 55.7524 6.49247 55.7524C14.0436 55.7694 21.5948 55.7694 29.146 55.7694ZM43.7891 41.2113C46.5953 41.2113 49.4184 41.2283 52.2246 41.1943C52.6158 41.1943 53.109 41.0412 53.3471 40.7691C53.5512 40.531 53.5852 40.0038 53.4832 39.6467C53.3471 39.1364 52.8709 38.9834 52.3607 38.9834C49.7416 38.9834 47.1225 38.9834 44.5034 38.9834C41.4591 38.9834 38.4148 38.9834 35.3706 38.9834C34.8604 38.9834 34.4352 39.1194 34.1801 39.5786C33.7379 40.361 34.3161 41.2113 35.3025 41.2113C38.1257 41.2113 40.9659 41.2113 43.7891 41.2113ZM6.44145 15.0373C6.86663 15.0373 7.2918 15.0544 7.73399 15.0373C8.38026 15.0033 8.80544 14.5441 8.78843 13.9149C8.77142 13.3196 8.36325 12.8604 7.73399 12.8434C6.90064 12.8094 6.06729 12.8264 5.23394 12.8434C4.62169 12.8604 4.12848 13.3877 4.14549 13.9659C4.16249 14.5271 4.62169 15.0033 5.21694 15.0373C5.62511 15.0544 6.03328 15.0373 6.44145 15.0373ZM17.241 12.8264C16.8158 12.8264 16.3906 12.8094 15.9484 12.8264C15.3362 12.8604 14.928 13.3366 14.928 13.9319C14.928 14.5271 15.3532 15.0033 15.9654 15.0203C16.8158 15.0544 17.6832 15.0544 18.5335 15.0203C19.1118 15.0033 19.588 14.4591 19.5709 13.9149C19.5709 13.3536 19.0947 12.8604 18.5165 12.8264C18.0913 12.8094 17.6662 12.8264 17.241 12.8264ZM11.9177 12.8264C11.4926 12.8264 11.0674 12.8094 10.6252 12.8264C9.99594 12.8604 9.51974 13.3536 9.53675 13.9489C9.53675 14.5271 9.97893 15.0203 10.5912 15.0373C11.4415 15.0714 12.3089 15.0714 13.1593 15.0373C13.7545 15.0203 14.1797 14.5101 14.1797 13.9319C14.1797 13.3536 13.7375 12.8774 13.1252 12.8434C12.7171 12.8094 12.3089 12.8264 11.9177 12.8264ZM35.7617 33.9833C35.7617 33.9663 35.7617 33.9493 35.7617 33.9493C35.9828 33.9493 36.1869 33.9663 36.408 33.9493C37.0543 33.8642 37.4965 33.388 37.4965 32.8098C37.4794 32.2486 37.0713 31.7724 36.425 31.7213C35.9148 31.6873 35.4046 31.7043 34.8944 31.7724C34.3671 31.8404 34.078 32.2486 34.044 32.7588C34.01 33.303 34.2651 33.7282 34.8093 33.8812C35.1155 33.9493 35.4386 33.9493 35.7617 33.9833Z"
                fill="#4958C3"
              />
              <path
                d="M50.1181 21.2113C47.295 21.2113 44.982 18.8813 45.016 16.0921C45.05 13.286 47.329 11.041 50.1181 11.041C52.9413 11.041 55.2543 13.354 55.2203 16.1602C55.1863 18.9663 52.9073 21.2113 50.1181 21.2113Z"
                fill="#0ED1BB"
              />
              <g filter="url(#filter0_d_2_1519)">
                <path
                  d="M16.7461 38.5573C14.2291 38.5573 11.729 38.5573 9.21195 38.5573C7.95342 38.5573 7.61328 38.2172 7.61328 36.9587C7.61328 34.0164 7.61328 31.0742 7.61328 28.132C7.61328 27.0775 8.02145 26.6523 9.0929 26.6523C14.2291 26.6523 19.3482 26.6523 24.4843 26.6523C25.5218 26.6523 25.93 27.0605 25.93 28.0979C25.93 31.1082 25.93 34.1015 25.93 37.1117C25.93 38.1492 25.5218 38.5403 24.4673 38.5403C21.8993 38.5573 19.3312 38.5573 16.7461 38.5573Z"
                  fill="#0ED1BB"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_1519"
                  x="4.02374"
                  y="26.6523"
                  width="25.4957"
                  height="19.0841"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.58954" />
                  <feGaussianBlur stdDeviation="1.79477" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_1519"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_1519"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="home__services__content__entry__heading">
            Hire dedicated AI / Data professionals
          </div>
          <div className="home__services__content__entry__info">
            Expand your AI and Data development capabilities within your
            required scope by partnering with us. Aigron has professionals and
            project managers with different expertise to take the process of AI
            and Data projects off your hands.
          </div>
          <Link
            to="/dedicatedResources"
            className="home__services__content__entry__link"
          >
            Explore more
          </Link>
        </div>
        <div className="home__services__content__entry">
          <div className="home__services__content__entry__icon">
            <svg
              width="62"
              height="64"
              viewBox="0 0 62 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9852 60.0807C23.4183 57.7899 23.4857 55.5761 23.428 53.3527C23.4087 52.8136 23.274 52.65 22.7157 52.65C16.7384 52.6693 10.7611 52.6211 4.78377 52.6789C2.02131 52.7078 0.375387 50.8116 0.0866277 49.0694C0.0288759 48.7614 0 48.4438 0 48.1358C0 36.1426 0 24.1399 0 12.1468C0 9.84633 1.60742 8.23891 3.9175 8.22929C6.80508 8.22929 9.7023 8.22929 12.6476 8.22929C12.2723 9.12444 11.9354 9.97146 11.5504 10.7992C11.4926 10.934 11.1653 10.9917 10.9632 10.9917C8.72052 11.0014 6.47782 11.0014 4.23513 11.0014C3.08972 11.0014 2.77208 11.319 2.77208 12.4452C2.77208 22.6769 2.77208 32.9182 2.77208 43.1499C2.77208 43.352 2.79134 43.5541 2.80096 43.7947C21.5799 43.7947 40.3204 43.7947 59.1571 43.7947C59.1571 43.5734 59.1571 43.352 59.1571 43.1306C59.1571 32.8989 59.1571 22.6576 59.1571 12.4259C59.1571 11.3286 58.8298 11.0014 57.7325 11.0014C55.4898 11.0014 53.2471 10.9917 51.0044 11.011C50.5905 11.011 50.3788 10.9147 50.2248 10.5009C49.9649 9.75971 49.6184 9.04744 49.2911 8.29666C49.3681 8.26779 49.4163 8.23891 49.474 8.23891C52.429 8.23891 55.3839 8.21003 58.3485 8.24854C60.3313 8.26779 61.9195 9.98109 61.9195 12.0505C61.9195 22.9367 61.9195 33.8229 61.9195 44.6995C61.9195 45.7872 61.9195 46.8845 61.9195 47.9721C61.9195 50.802 60.0811 52.6596 57.2416 52.6596C51.2451 52.6693 45.2485 52.6596 39.2519 52.6596C39.0017 52.6596 38.7514 52.6596 38.3472 52.6596C38.3472 53.2949 38.3087 53.8917 38.3568 54.4884C38.4819 56.2018 38.6359 57.9054 38.7707 59.6187C38.7996 60.0037 38.9921 60.0904 39.3482 60.0807C41.2733 60.0615 43.2079 60.0615 45.133 60.0807C45.98 60.0904 46.6057 60.639 46.7116 61.409C46.8174 62.1983 46.4132 62.9106 45.6816 63.1416C45.4314 63.2186 45.1426 63.2282 44.8731 63.2282C35.5847 63.2282 26.2963 63.209 16.9983 63.2475C15.5352 63.2571 14.8133 61.9962 15.2561 61.0433C15.5641 60.3888 16.0839 60.0711 16.8058 60.0711C18.6346 60.0711 20.4538 60.0711 22.2826 60.0711C22.5039 60.0807 22.7253 60.0807 22.9852 60.0807Z"
                fill="#4958C3"
              />
              <path
                d="M19.4524 19.1914C19.9433 22.2234 20.4246 25.1783 20.9058 28.1622C19.8182 28.5953 18.615 29.1055 17.383 29.5578C17.2579 29.606 16.9691 29.4231 16.8536 29.2787C14.8997 26.882 13.658 24.1484 13.0997 21.1068C12.9842 20.4908 12.9265 19.8652 12.8398 19.1914C15.1114 19.1914 17.3349 19.1914 19.4524 19.1914Z"
                fill="#12C9BB"
              />
              <path
                d="M42.4573 19.1738C44.5749 19.1738 46.7791 19.1738 49.1854 19.1738C48.8485 20.6657 48.5886 22.0903 48.1844 23.486C47.5684 25.5939 46.4807 27.4708 45.1332 29.2034C44.8636 29.5403 44.6519 29.6558 44.2091 29.4536C43.1311 28.9628 42.0049 28.5681 41.0039 28.1639C41.4852 25.1993 41.9664 22.225 42.4573 19.1738Z"
                fill="#12C9BB"
              />
              <path
                d="M19.472 16.6027C17.3448 16.6027 15.1309 16.6027 12.8594 16.6027C13.1481 12.8488 14.4379 9.54732 16.7191 6.63086C18.1148 7.18913 19.4623 7.72814 20.7425 8.23828C20.3286 10.9911 19.9051 13.7536 19.472 16.6027Z"
                fill="#12C9BB"
              />
              <path
                d="M49.0511 16.593C46.7891 16.593 44.5753 16.593 42.4289 16.593C42.0054 13.821 41.5915 11.0585 41.168 8.24791C42.4 7.75702 43.7668 7.19875 45.1817 6.63086C47.4725 9.52807 48.7527 12.8392 49.0511 16.593Z"
                fill="#12C9BB"
              />
              <path
                d="M22.1562 19.1738C24.6973 19.1738 27.1614 19.1738 29.664 19.1738C29.664 21.7342 29.664 24.256 29.664 26.7682C28.2394 26.9222 26.8534 27.0666 25.4577 27.2302C24.9572 27.288 24.4663 27.4323 23.9754 27.4612C23.8022 27.4708 23.4845 27.3072 23.446 27.1628C22.6471 24.5832 22.2718 21.9363 22.1562 19.1738Z"
                fill="#12C9BB"
              />
              <path
                d="M32.2734 19.1738C34.7568 19.1738 37.2208 19.1738 39.7523 19.1738C39.6368 22.0229 39.2325 24.7757 38.3855 27.4612C36.3449 27.2206 34.3333 26.9896 32.2734 26.7489C32.2734 24.2945 32.2734 21.7727 32.2734 19.1738Z"
                fill="#12C9BB"
              />
              <path
                d="M23.3209 8.95117C25.477 9.21105 27.5464 9.46131 29.6544 9.7212C29.6544 11.9831 29.6544 14.274 29.6544 16.6033C27.1614 16.6033 24.6973 16.6033 22.1562 16.6033C22.2621 13.9756 22.6086 11.4249 23.3209 8.95117Z"
                fill="#12C9BB"
              />
              <path
                d="M38.5894 8.95117C39.3113 11.4056 39.6482 13.9563 39.7637 16.5937C37.2323 16.5937 34.7682 16.5937 32.2656 16.5937C32.2656 14.2836 32.2656 11.9831 32.2656 9.71157C34.3447 9.47094 36.4141 9.22068 38.5894 8.95117Z"
                fill="#12C9BB"
              />
              <path
                d="M29.6653 -6.10352e-05C29.6653 2.41589 29.6653 4.72596 29.6653 7.19003C27.8268 6.97828 26.0365 6.76652 24.1211 6.55476C25.3916 3.76343 26.7103 1.25123 29.6653 -6.10352e-05Z"
                fill="#12C9BB"
              />
              <path
                d="M37.7963 6.5452C35.8808 6.76658 34.1098 6.97834 32.2617 7.19009C32.2617 4.74527 32.2617 2.42557 32.2617 0C35.1878 1.24166 36.5065 3.76349 37.7963 6.5452Z"
                fill="#12C9BB"
              />
              <path
                d="M29.6656 29.2793C29.6656 31.5027 29.6656 33.5626 29.6656 35.7571C26.9705 34.6502 25.6614 32.4171 24.4102 29.8761C26.2101 29.6643 27.8945 29.4718 29.6656 29.2793Z"
                fill="#12C9BB"
              />
              <path
                d="M37.5093 29.857C36.2677 32.398 34.949 34.6311 32.2539 35.7573C32.2539 33.5723 32.2539 31.5125 32.2539 29.2891C33.9672 29.4719 35.6613 29.6548 37.5093 29.857Z"
                fill="#12C9BB"
              />
              <path
                d="M37.6953 1.03906C39.7936 1.87646 41.6609 3.05075 43.4031 4.69667C42.3058 5.11056 41.2952 5.49557 40.3326 5.87096C39.4375 4.23466 38.5808 2.66574 37.6953 1.03906Z"
                fill="#12C9BB"
              />
              <path
                d="M21.59 5.86133C20.6275 5.49557 19.6168 5.11056 18.5195 4.69667C20.2425 3.05075 22.1194 1.88609 24.2177 1.03906C23.3514 2.62724 22.5044 4.18653 21.59 5.86133Z"
                fill="#12C9BB"
              />
              <path
                d="M42.8353 31.5146C41.7477 32.66 39.3991 34.0941 37.5703 34.7487C38.0227 34.0268 38.4655 33.3915 38.8505 32.7177C39.2451 32.0343 39.582 31.3124 39.9863 30.5039C40.9007 30.8312 41.8247 31.1584 42.8353 31.5146Z"
                fill="#12C9BB"
              />
              <path
                d="M24.2058 34.7097C22.3673 33.9878 20.6636 32.9579 19.0273 31.5237C19.9899 31.1964 20.8465 30.8884 21.7128 30.6189C21.8187 30.59 22.0304 30.6767 22.0882 30.7729C22.8005 32.0916 23.5031 33.4006 24.2058 34.7097Z"
                fill="#12C9BB"
              />
            </svg>
          </div>
          <div className="home__services__content__entry__heading">
            Software Development
          </div>
          <div className="home__services__content__entry__info">
            Expand your delivery capacity with dedicated AI and Data
            professionals under your own management for short and long term
            projects, or just in case capacity is required. Aigron offices are
            located worldwide from where our AI and Data professionals can
            support you.
          </div>
          <Link
            to="/softwareDevelopment"
            className="home__services__content__entry__link"
          >
            Explore more
          </Link>
        </div>
        <div className="home__services__content__entry">
          <div className="home__services__content__entry__icon">
            <svg
              width="62"
              height="63"
              viewBox="0 0 62 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2283 23.56C18.2283 28.9153 18.2283 34.2176 18.2283 39.573C20.579 39.573 22.8766 39.573 25.2273 39.573C24.7501 41.0046 24.2729 42.3832 23.7957 43.8325C22.3817 43.8325 20.8794 43.8325 19.3064 43.8325C19.3064 43.1609 19.3064 42.4893 19.3064 41.7646C18.2106 41.7646 17.2031 41.7646 16.125 41.7646C16.125 27.8195 16.125 13.9274 16.125 0C26.0757 0 36.0264 0 46.0301 0C46.0301 10.2512 46.0301 20.4846 46.0301 30.7888C45.3408 30.6121 44.6868 30.453 43.9622 30.2762C43.9622 28.0669 43.9622 25.84 43.9622 23.5776C35.3371 23.56 26.8003 23.56 18.2283 23.56ZM35.2841 21.333C35.6906 16.9851 34.3827 13.5209 30.3529 11.4177C33.0924 8.53673 32.2087 5.28464 30.4943 3.60558C28.4971 1.66139 25.3864 1.57302 23.2655 3.41116C20.9324 5.42604 20.8794 8.30697 23.1594 11.453C19.1473 13.5563 17.8394 17.0028 18.2459 21.3507C23.9194 21.333 29.5752 21.333 35.2841 21.333ZM43.8561 4.20651C43.8561 3.51721 43.8561 2.81023 43.8561 2.12093C41.7352 2.12093 39.632 2.12093 37.5287 2.12093C37.5287 2.84558 37.5287 3.51721 37.5287 4.20651C39.6496 4.20651 41.7175 4.20651 43.8561 4.20651ZM37.511 8.46604C39.6496 8.46604 41.7529 8.46604 43.8738 8.46604C43.8738 7.75906 43.8738 7.06976 43.8738 6.39813C41.7175 6.39813 39.6143 6.39813 37.511 6.39813C37.511 7.12278 37.511 7.77674 37.511 8.46604ZM43.8738 12.7609C43.8738 12.0186 43.8738 11.3646 43.8738 10.693C41.7352 10.693 39.632 10.693 37.5287 10.693C37.5287 11.4177 37.5287 12.0893 37.5287 12.7609C39.6673 12.7609 41.7529 12.7609 43.8738 12.7609ZM37.511 17.0381C39.6673 17.0381 41.7706 17.0381 43.8561 17.0381C43.8561 16.3135 43.8561 15.6418 43.8561 14.9702C41.7175 14.9702 39.632 14.9702 37.511 14.9702C37.511 15.6595 37.511 16.3311 37.511 17.0381ZM43.8738 19.2651C41.7175 19.2651 39.6143 19.2651 37.5287 19.2651C37.5287 19.9897 37.5287 20.6614 37.5287 21.333C39.6673 21.333 41.7529 21.333 43.8738 21.333C43.8738 20.6437 43.8738 19.9721 43.8738 19.2651Z"
                fill="#5048C4"
              />
              <path
                d="M48.221 6.66406C52.781 7.63615 57.3233 8.59057 61.9186 9.58034C59.8507 19.3189 57.8005 29.0045 55.7149 38.7608C55.1317 37.9477 54.6545 37.1877 54.1242 36.4984C52.6396 34.5896 50.8015 33.0696 48.6628 31.9561C48.327 31.7794 48.168 31.6026 48.168 31.1961C48.1856 23.1896 48.1856 15.1831 48.1856 7.15895C48.1856 7.01755 48.2033 6.85848 48.221 6.66406ZM49.087 28.7571C51.208 29.1989 53.2582 29.6408 55.3614 30.0826C55.5028 29.3757 55.6442 28.704 55.7856 28.0147C53.6647 27.5552 51.6322 27.131 49.5642 26.6892C49.3875 27.3785 49.2461 28.0147 49.087 28.7571ZM52.6573 11.9841C54.7782 12.4259 56.8108 12.8678 58.914 13.3096C59.0731 12.6027 59.1968 11.9487 59.3559 11.2417C57.2349 10.7999 55.2024 10.358 53.0991 9.91615C52.9577 10.6231 52.8163 11.2594 52.6573 11.9841ZM51.7559 16.1729C53.8945 16.6324 55.9447 17.0566 58.0303 17.4985C58.1717 16.7738 58.2954 16.1375 58.4368 15.4306C56.3335 14.9887 54.301 14.5468 52.2154 14.105C52.074 14.7943 51.9326 15.4306 51.7559 16.1729ZM51.314 18.2938C51.1549 19.0185 51.0312 19.6901 50.8898 20.3617C53.0108 20.8036 55.061 21.2454 57.1466 21.6873C57.3056 20.945 57.4294 20.3087 57.5884 19.6194C55.4675 19.1775 53.4349 18.7533 51.314 18.2938ZM49.9884 24.5506C52.1094 25.0101 54.1419 25.4343 56.2452 25.8761C56.3866 25.1515 56.528 24.4975 56.6693 23.8082C54.5484 23.3664 52.5159 22.9245 50.4303 22.4826C50.2712 23.2073 50.1475 23.8436 49.9884 24.5506Z"
                fill="#5048C4"
              />
              <path
                d="M25.7032 47.0484C25.7032 38.7591 32.4194 32.0605 40.7264 32.0782C49.0157 32.0782 55.6966 38.8121 55.6789 47.1367C55.6613 55.4084 48.945 62.0893 40.6203 62.0716C32.3664 62.0539 25.6855 55.3377 25.7032 47.0484ZM40.691 34.2168C33.639 34.2168 27.8418 40.014 27.8418 47.0837C27.8418 54.1358 33.6566 59.9507 40.691 59.933C47.7431 59.933 53.5403 54.1181 53.5403 47.066C53.5403 40.014 47.7431 34.2168 40.691 34.2168Z"
                fill="#0ED1BB"
              />
              <path
                d="M20.3672 37.435C20.3672 33.476 20.3672 29.6053 20.3672 25.6992C27.49 25.6992 34.5951 25.6992 41.7179 25.6992C41.7179 27.1132 41.7179 28.5094 41.7179 29.8704C40.4807 29.9764 39.2258 30.0118 38.0062 30.2062C33.4462 30.9132 29.8053 33.1755 27.0128 36.8164C26.6416 37.2936 26.2881 37.4704 25.7049 37.4704C23.9551 37.4173 22.2053 37.435 20.3672 37.435Z"
                fill="#5048C4"
              />
              <path
                d="M9.21521 41.6947C8.45521 41.6947 7.76591 41.6947 7.00591 41.6947C4.74359 31.0194 2.46359 20.344 0.183594 9.58034C4.76126 8.60825 9.30358 7.63615 13.8813 6.66406C13.8813 7.65383 13.8813 8.59057 13.8813 9.54499C10.2757 9.22685 8.20777 10.2166 7.25335 12.7617C6.5287 14.6882 6.75847 17.4808 9.55103 19.3366C6.03382 22.2175 5.48591 25.8761 6.81149 30.065C9.12684 29.5701 11.4775 29.0752 13.8636 28.5803C13.8636 29.3226 13.8636 30.0119 13.8636 30.7896C11.6896 31.2491 9.48033 31.7264 7.20033 32.2212C7.87196 35.385 8.52591 38.5133 9.21521 41.6947Z"
                fill="#5048C4"
              />
              <path
                d="M17.0974 43.8672C17.0974 46.0235 17.0974 48.109 17.0974 50.2476C16.8853 50.2653 16.7085 50.283 16.5141 50.283C12.0955 50.283 7.67691 50.283 3.27599 50.283C1.59692 50.283 0.20065 49.0988 0.0239057 47.5081C-0.170513 45.829 0.836923 44.3621 2.46297 43.9379C2.60436 43.9025 2.76344 43.8672 2.92251 43.8672C7.60622 43.8672 12.3076 43.8672 17.0974 43.8672Z"
                fill="#0ED1BB"
              />
              <path
                d="M13.8797 19.9375C13.8797 22.0761 13.8797 24.197 13.8797 26.4063C12.0769 26.7952 10.2741 27.184 8.45368 27.5552C7.39322 23.7375 10.663 19.9728 13.8797 19.9375Z"
                fill="#5048C4"
              />
              <path
                d="M9.72656 33.8818C9.92098 33.8288 10.027 33.7758 10.1684 33.7404C11.388 33.493 12.6075 33.2279 13.88 32.9628C13.88 35.879 13.88 38.7423 13.88 41.6586C13.1024 41.6586 12.2893 41.6586 11.3879 41.6586C10.8224 39.0958 10.2745 36.5153 9.72656 33.8818Z"
                fill="#5048C4"
              />
              <path
                d="M13.917 14.7396C13.917 15.4465 13.8816 16.1712 13.9346 16.8782C13.97 17.3554 13.7402 17.5498 13.3514 17.7089C11.7253 18.3805 9.78116 17.4614 9.18023 15.747C8.5793 14.0149 9.56908 12.1061 11.3188 11.6112C11.6723 11.5051 12.0612 11.4521 12.4323 11.4875C13.6872 11.5758 13.8993 11.841 13.8993 13.0605C13.917 13.6261 13.917 14.174 13.917 14.7396Z"
                fill="#5048C4"
              />
              <path
                d="M19.3242 46.0234C20.7558 46.0234 22.1344 46.0234 23.5484 46.0234C23.5484 46.7127 23.5484 47.402 23.5484 48.109C22.1521 48.109 20.7558 48.109 19.3242 48.109C19.3242 47.4374 19.3242 46.7658 19.3242 46.0234Z"
                fill="#5048C4"
              />
              <path
                d="M33.2167 19.1931C28.8864 19.1931 24.6446 19.1931 20.332 19.1931C20.4204 16.8247 21.4102 14.9866 23.3897 13.7847C25.6343 12.4061 27.9674 12.4238 30.212 13.8201C32.1562 15.0219 33.0929 16.8601 33.2167 19.1931Z"
                fill="#5048C4"
              />
              <path
                d="M26.7459 10.6582C24.9431 10.6582 23.5469 9.22653 23.5469 7.42374C23.5469 5.63863 24.9785 4.22468 26.799 4.24235C28.5664 4.26003 29.9627 5.67398 29.9627 7.44142C29.9804 9.24421 28.5487 10.6582 26.7459 10.6582Z"
                fill="#5048C4"
              />
              <path
                d="M40.6735 57.7944C34.7526 57.7944 29.9805 53.0047 29.9805 47.0661C29.9805 41.1451 34.7702 36.373 40.7088 36.373C46.6298 36.373 51.4018 41.1628 51.4018 47.1014C51.4018 53.0223 46.6121 57.7944 40.6735 57.7944ZM44.2791 52.4744C44.6679 53.0577 45.039 53.6056 45.4102 54.1712C48.6446 52.28 50.1116 47.773 48.7153 44.0614C47.3897 40.5265 43.7488 38.3526 40.7442 38.6C40.7442 39.2716 40.7442 39.9609 40.7442 40.6326C43.7311 40.8623 45.9405 42.4177 46.7711 44.9982C47.7256 48.0205 46.7711 50.4772 44.2791 52.4744ZM42.547 53.3051C41.893 53.3935 41.3274 53.4819 40.7265 53.5702C40.7265 54.2419 40.7265 54.9135 40.7265 55.7088C41.5395 55.5851 42.3172 55.4614 43.1479 55.32C42.9358 54.5777 42.7414 53.9414 42.547 53.3051Z"
                fill="#0ED1BB"
              />
            </svg>
          </div>
          <div className="home__services__content__entry__heading">
            Recruitment
          </div>
          <div className="home__services__content__entry__info">
            Expand your development capabilities by hiring the right AI and Data
            candidate for your permanent openings. With our Recruitment services
            we can find you the right candidate from our wide network of
            professionals.
          </div>
          <Link
            to="/recruitment"
            className="home__services__content__entry__link"
          >
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
}