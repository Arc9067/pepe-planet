import React from "react";
import Logo from "../assets/logo.png";
import absoImg from "../assets/abso.png";

const Hero = () => {
  return (
    <section className="w-full py-[100px] relative">
      <svg
        width="1460"
        height="71"
        viewBox="0 0 1460 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full left-0"
      >
        <path
          d="M1447.76 0.794459C1212.46 0.794459 977.142 0.794459 741.801 0.794459C737.742 0.794459 733.683 0.331021 729.625 0.0662021V0.728257H718.138C482.838 0.728257 247.517 0.728257 12.1763 0.728257C8.11753 0.728257 4.05877 0.264819 0 0V70.6185C2.90378 68.131 5.61842 65.393 8.11754 62.4311C14.0839 54.31 19.1371 53.979 25.9355 62.0118C35.0475 72.8032 36.0825 72.7591 45.3162 61.7691C51.8102 54.1335 56.2342 54.7734 62.4645 61.9677C71.6373 72.5605 72.3881 72.5825 82.0074 61.5925C88.0956 54.7293 92.1543 54.0893 98.4048 61.3056C108.126 72.5163 108.917 72.4943 118.699 61.3056C124.787 54.2438 129.028 54.31 135.137 61.3056C144.776 72.3398 145.547 72.3398 155.431 61.1732C161.681 53.979 165.862 54.5528 171.828 61.4601C181.265 72.4943 181.975 72.4943 192.122 61.1732C198.433 54.0452 202.634 54.7955 208.54 61.6367C218.098 72.6708 218.849 72.6708 228.691 61.2394C234.942 53.9348 239.102 54.619 245.068 61.4601C254.586 72.3398 255.215 72.2956 265.362 61.0408C271.065 54.6631 275.083 54.0673 281.049 60.776C291.196 72.2515 291.927 72.2294 301.993 60.9305C307.797 54.31 311.815 54.31 317.66 60.9305C327.806 72.3398 328.496 72.4501 337.953 61.6587C344.488 54.1335 348.973 54.8838 355.183 61.9015C364.396 72.2956 365.107 72.3177 374.685 61.416C380.773 54.4424 384.974 54.3983 391.144 61.416C400.824 72.4501 401.615 72.4501 411.437 61.1953C417.688 54.0011 421.868 54.5748 427.875 61.416C437.454 72.4501 438.225 72.4501 448.169 61.085C454.542 53.7362 458.722 54.8396 464.607 61.5484C474.267 72.5825 474.998 72.5825 484.15 61.9236C490.462 54.5748 494.886 54.3762 501.278 61.7911C510.654 72.6487 511.425 72.6708 520.801 61.7911C527.234 54.2659 531.618 54.5969 537.888 61.9456C547 72.6046 547.731 72.5384 557.411 61.5484C563.296 54.9279 567.456 53.7362 573.829 61.085C583.691 72.4281 584.463 72.3839 594.123 61.438C600.109 54.5748 604.269 54.0011 610.54 61.1953C620.261 72.3839 620.971 72.2294 631.544 60.6436C637.145 54.4424 640.9 54.5748 646.42 60.6436C656.77 72.1632 657.277 72.075 668.215 60.3126C673.289 54.8617 676.881 53.9348 682.421 59.8712C693.461 71.7439 693.989 71.6998 705.475 59.5622C710.63 54.1114 714.303 54.4203 718.889 59.8933C722.465 63.7115 726.225 67.3211 730.152 70.7067V70.4419C733.06 67.96 735.775 65.2217 738.27 62.2546C744.236 54.1335 749.289 53.8024 756.088 61.8353C765.2 72.6267 766.133 72.5825 775.468 61.5925C781.962 53.9569 786.386 54.5969 792.617 61.7911C801.789 72.3839 802.54 72.406 812.16 61.416C818.248 54.5528 822.307 53.9128 828.557 61.1291C838.278 72.3398 839.069 72.3177 848.749 61.1291C854.838 54.0672 859.079 54.1335 865.187 61.1291C874.827 72.1632 875.598 72.1632 885.481 60.9967C891.732 53.8024 895.912 54.3762 901.879 61.2836C911.315 72.3177 912.026 72.3177 922.071 60.9967C928.382 53.8686 932.583 54.619 938.489 61.4601C948.047 72.4943 948.818 72.4943 958.661 61.0629C964.891 53.7583 969.051 54.4424 975.018 61.2836C984.535 72.1632 985.165 72.1191 995.312 60.8643C1001.01 54.4866 1005.03 53.8907 1011 60.5995C1021.15 72.075 1021.88 72.0529 1031.94 60.7539C1037.75 54.1335 1041.76 54.1335 1047.61 60.7539C1057.76 72.1632 1058.45 72.2736 1067.9 61.4822C1074.44 53.9569 1078.92 54.7072 1085.13 61.7249C1094.35 72.1191 1095.06 72.1412 1104.63 61.2394C1110.72 54.2659 1114.92 54.2217 1121.09 61.2394C1130.77 72.2736 1131.56 72.2736 1141.39 61.0188C1147.64 53.8245 1151.82 54.3983 1157.82 61.2394C1167.4 72.2736 1168.17 72.2736 1178.02 60.9084C1184.39 53.5597 1188.57 54.6631 1194.46 61.3718C1204.11 72.406 1204.85 72.406 1214 61.747C1220.31 54.3983 1224.73 54.1997 1231.13 61.6146C1240.5 72.4722 1241.27 72.4943 1250.65 61.6146C1257.08 54.0893 1261.47 54.4203 1267.74 61.7691C1276.85 72.428 1277.58 72.3618 1287.26 61.3718C1293.14 54.7514 1297.41 53.5597 1303.68 60.9084C1313.54 72.2515 1314.31 72.2074 1323.97 61.2615C1330.06 54.3983 1334.12 53.8245 1340.39 61.0188C1350.11 72.2074 1350.82 72.0529 1361.39 60.4671C1366.99 54.2659 1370.75 54.3983 1376.27 60.4671C1386.62 71.9867 1387.12 71.8984 1398.06 60.136C1403.14 54.6852 1406.73 53.7583 1412.27 59.6947C1423.33 71.5674 1423.84 71.5232 1435.32 59.3857C1440.48 53.9348 1444.15 54.2438 1448.74 59.7167C1452.31 63.535 1456.07 67.1445 1460 70.5302V0.794459H1447.76Z"
          fill="white"
        />
      </svg>

      <div className="container grid lg:grid-cols-2 justify-between items-center grid-cols-1 gap-16">
        <article className="flex flex-col gap-4 relative">
          <img
            src={absoImg}
            alt=""
            className="absolute right-0 top-4 w-6 md:w-fit"
          />
          <div className="flex flex-col gap-4 z-[10]">
            <h1 className="text-white text-6xl md:text-8xl  font-primary">
              Pepe Planet
            </h1>
            <p className=" text-white text-xl font-normal leading-loose">
              American dollar is loosing its value. Crypto Era is becoming
              mainstream and there’s very chance that world adopts Ethereum as
              the global leading{" "}
            </p>

            <div className="flex items-center gap-6">
              <a href="" className="hover:scale-90 transition telegram">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_943_293)">
                    <path
                      d="M24 0.500092C10.746 0.500092 0 11.2461 0 24.5001C0 37.7541 10.746 48.5001 24 48.5001C37.254 48.5001 48 37.7541 48 24.5001C48 11.2461 37.254 0.500092 24 0.500092ZM35.788 16.9421L31.848 35.5021C31.558 36.8181 30.774 37.1381 29.68 36.5181L23.68 32.0981L20.788 34.8861C20.6463 35.0695 20.4645 35.2181 20.2565 35.3203C20.0485 35.4226 19.8198 35.4759 19.588 35.4761H19.578L20.004 29.3681L31.124 19.3241C31.604 18.8981 31.016 18.6561 30.378 19.0821L16.64 27.7341L10.72 25.8861C9.44 25.4801 9.404 24.6061 10.99 23.9781L34.122 15.0621C35.198 14.6701 36.134 15.3181 35.786 16.9441L35.788 16.9421Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_943_293">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" className="hover:scale-90 transition twitter">
                <svg
                  width="60"
                  height="49"
                  viewBox="0 0 60 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.0588 6.1844C56.8883 7.14903 54.5506 7.79868 52.0997 8.09397C54.6047 6.59289 56.5192 4.2207 57.4297 1.3908C55.0871 2.77868 52.4934 3.7876 49.7324 4.32898C47.5275 1.97155 44.3728 0.5 40.8933 0.5C33.068 0.5 27.3196 7.79868 29.0864 15.3779C19.0218 14.871 10.0892 10.0478 4.11443 2.71962C0.940019 8.16287 2.47063 15.2893 7.86466 18.8968C5.88127 18.8328 4.016 18.2865 2.38204 17.381C2.24915 22.9915 6.27499 28.2429 12.1021 29.4142C10.3993 29.8768 8.52907 29.9851 6.62935 29.6209C8.16979 34.4342 12.6533 37.9334 17.9489 38.0318C12.8453 42.0281 6.43248 43.8147 0 43.0568C5.3645 46.4969 11.7281 48.5 18.5691 48.5C41.0704 48.5 53.7779 29.4978 53.0102 12.4545C55.3823 10.7516 57.4346 8.61566 59.0588 6.1844V6.1844Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="" className="hover:scale-90 transition etherscan">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_943_296)">
                    <path
                      d="M10.051 23.3265C10.051 22.2187 10.9611 21.3086 12.067 21.3086H15.4673C16.5752 21.3086 17.5236 22.2187 17.5236 23.3668V36.1905C17.9192 36.0715 18.3934 35.9524 18.9483 35.8334C19.699 35.6356 20.2539 34.9636 20.2539 34.1707V18.2596C20.2539 17.1518 21.164 16.2014 22.3102 16.2014H25.7105C26.8184 16.2014 27.7669 17.1115 27.7669 18.2596V33.0244C27.7669 33.0244 28.5982 32.6673 29.4277 32.3121C30.0613 32.0356 30.4568 31.4424 30.4568 30.7281V13.116C30.4568 12.0081 31.3669 11.0577 32.4747 11.0577H35.875C36.9829 11.0577 37.8929 11.9678 37.8929 13.116V27.6427C40.819 25.5057 43.8257 22.9329 46.1989 19.8456C46.9112 18.9355 47.1089 17.747 46.7134 16.6392C42.3627 4.13228 28.6808 -2.5186 16.1835 1.83596C3.68621 6.19052 -2.95699 19.884 1.39181 32.3928C1.86605 33.8174 2.49965 35.1633 3.25037 36.4689C3.84365 37.498 4.95149 38.0913 6.13805 37.9723C6.77165 37.932 7.56269 37.8532 8.54957 37.7342C9.41933 37.6555 10.0529 36.9028 10.0529 36.0312L10.051 23.3265Z"
                      fill="white"
                    />
                    <path
                      d="M9.96875 43.9089C20.6862 51.7061 35.6756 49.331 43.4651 38.6059C46.4315 34.4894 48.052 29.5416 48.052 24.4766C48.052 23.9217 48.0116 23.3688 47.9732 22.8139C39.2353 35.9141 23.0593 42.0485 9.96875 43.9089Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_943_296">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0.0585938 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" className="hover:scale-90 transition dextool">
                <svg
                  width="42"
                  height="49"
                  viewBox="0 0 42 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_943_302)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.565 3.23943C12.7087 4.72733 10.3719 5.98639 10.3724 6.0376C10.3736 6.16978 17.2275 9.64086 17.4708 9.6324C17.5815 9.6287 18.3842 9.25917 19.2546 8.81133L20.8374 7.99723L22.5661 8.88577L24.2946 9.77447L27.1254 8.50247C31.3908 6.58576 31.8339 6.37572 31.7644 6.30515C31.6723 6.21153 30.1423 5.38963 25.9915 3.20437C23.9855 2.14821 22.0385 1.11268 21.6647 0.903143C21.291 0.693604 20.9342 0.525043 20.8718 0.528306C20.8095 0.531569 18.4214 1.75159 15.565 3.23943ZM3.03733 9.72669L0.063958 11.2625V18.0031C0.063958 21.7104 0.103001 24.7436 0.150893 24.7436C0.198618 24.7436 1.66152 24.1094 3.40171 23.3344L6.56571 21.9252V14.8202L8.11184 15.6625C9.30327 16.3111 10.4954 16.9583 11.6883 17.6041L13.7185 18.7034L14.6219 18.2949C15.1885 18.0382 15.754 17.7791 16.3183 17.5175C16.7543 17.3145 17.8248 16.8323 18.6969 16.4459C19.5691 16.0594 20.3764 15.6707 20.4909 15.5821C20.643 15.4644 18.7886 14.4396 13.6321 11.7917C9.74519 9.79565 6.44028 8.16889 6.28787 8.17669C6.13546 8.18448 4.67272 8.8819 3.03733 9.72669ZM32.3003 10.158C30.2752 11.0722 28.6169 11.8567 28.6151 11.9014C28.6133 11.9461 29.717 12.6024 31.0679 13.3596C32.4187 14.117 33.524 14.7771 33.524 14.8268C33.524 14.8764 32.3287 15.4556 30.8678 16.1141C29.4068 16.7725 25.714 18.4402 22.6614 19.8201L12.4331 24.4435C9.86016 25.6066 7.54096 26.655 7.27932 26.7735C2.02397 29.1525 0.579483 29.8127 0.381115 29.926C0.181641 30.0401 0.136459 30.7029 0.100955 34.0294L0.0585938 37.997L2.71752 39.3518L5.37638 40.7065L9.06331 39.0426C11.0912 38.1275 12.7502 37.3309 12.7502 37.2722C12.7502 37.2137 12.3755 36.9695 11.9177 36.7294C11.4597 36.4893 10.5143 35.9577 9.81653 35.5479C9.11883 35.1381 8.42314 34.7621 8.27039 34.7122C8.1177 34.6625 7.99499 34.5755 7.99748 34.5187C8.00002 34.4622 9.62358 33.691 11.6052 32.8049C15.454 31.0841 18.3995 29.7577 24.7229 26.8981C27.5505 25.6197 30.3785 24.342 33.2068 23.0651C35.6926 21.9432 38.5826 20.6328 39.6293 20.1532L41.5322 19.2813L41.5745 15.2685L41.6171 11.2559L38.9203 9.87169C37.437 9.11046 36.1691 8.48947 36.1026 8.49174C36.0362 8.49384 34.3252 9.24357 32.3003 10.158ZM40.8097 24.6345C40.4123 24.8286 39.6274 25.1921 39.0654 25.4421C38.5034 25.6921 37.437 26.1733 36.6956 26.5116L35.3476 27.1264L35.3169 30.6492C35.2999 32.5867 35.2286 34.1634 35.1583 34.1531C34.9988 34.1294 32.4725 32.8338 29.933 31.473C28.1001 30.491 27.985 30.452 27.5543 30.6653C27.3053 30.7887 25.8171 31.4561 24.2472 32.1488C22.6772 32.8413 21.3416 33.4532 21.2788 33.5086C21.2161 33.5639 24.3758 35.2764 28.3005 37.3144L35.436 41.0198L38.4842 39.443C40.1605 38.5759 41.586 37.7849 41.6516 37.6854C41.7994 37.4617 41.7867 24.2509 41.6388 24.2687C41.5803 24.2758 41.2071 24.4404 40.8097 24.6345ZM23.93 40.1407C23.4013 40.368 22.8727 40.5957 22.3443 40.8236C20.7485 41.514 21.0612 41.5369 19.1627 40.5918C17.8982 39.9623 17.3531 39.7681 17.1166 39.8624C16.9391 39.9331 15.4118 40.6202 13.7223 41.3893C12.033 42.1584 10.5921 42.7876 10.5205 42.7876C9.81166 42.7876 10.99 43.4917 15.5371 45.7854L20.8698 48.4751L23.1135 47.3674C24.3476 46.7581 26.8366 45.5381 28.6449 44.6563C30.453 43.7742 31.91 43.0297 31.8828 43.0016C31.8553 42.9736 30.3402 42.1956 28.5158 41.2727L25.1987 39.595L23.93 40.1407Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_943_302">
                      <rect
                        width="41.7408"
                        height="48"
                        fill="white"
                        transform="translate(0.0585938 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </article>
        <img src={Logo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
