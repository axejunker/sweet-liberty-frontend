import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee"

import "./style.css"

const MiamiIsShit = () => {
  return (
    <section className="bg-brandDark relative cutter-top">
      <div className="hidden md:inline-block absolute -top-80 left-0 z-10">
        <StaticImage
          src="../../assets/MiamiIsShit/green_leaf.png"
          alt="Green Leaf"
          placeholder="blurred"
        />
      </div>
      <div className="hidden md:inline-block absolute top-20 right-0 z-10">
        <StaticImage
          src="../../assets/MiamiIsShit/red_leaf.png"
          alt="red leaf"
          placeholder="blurred"
        />
      </div>
      <div className="overflow-hidden">
        <div className="xl:flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="521"
            height="794"
            viewBox="0 0 521 794"
            fill="none"
            className="mt-[10px] md:mt-36 relative z-20 left-[18px] md:left-[50px] w-[340px] md:w-[650px] lg:left-[150px] xl:left-0 md:mb-[90px]"
          >
            <path
              d="M112.308 132.754H92.9188V51.2829L73.7811 109.513L54.6433 51.2829V132.754H34.876V0H58.7982L73.7811 51.1565L90.023 0H112.308V132.754Z"
              fill="white"
            />
            <path
              d="M203.464 132.754H141.519V111.534H161.412V21.0942H141.519V0H203.464V21.0942H183.949V111.534H203.464V132.754Z"
              fill="white"
            />
            <path
              d="M303.56 132.754H278.379L273.846 111.281H252.316L247.783 132.754H224.113L251.812 0H275.357L303.56 132.754ZM270.069 90.6923L263.144 48.504L255.716 90.6923H270.069Z"
              fill="white"
            />
            <path
              d="M393.709 132.754H374.319V51.2829L355.182 109.513L336.044 51.2829V132.754H316.276V0H340.199L355.182 51.1565L371.423 0H393.709V132.754Z"
              fill="white"
            />
            <path
              d="M486.124 132.754H424.304V111.534H444.197V21.0942H424.304V0H486.25V21.0942H466.734V111.534H486.25V132.754H486.124Z"
              fill="white"
            />
            <path
              d="M61.9459 352.538H0V331.317H19.8932V240.878H0V219.784H61.9459V240.878H42.3045V331.317H61.82V352.538H61.9459Z"
              fill="white"
            />
            <path
              d="M161.412 313.886C161.412 326.265 158.138 335.991 151.717 343.317C145.296 350.643 135.979 354.306 124.018 354.306C111.679 354.306 102.488 351.275 96.3183 345.212C90.1489 339.149 86.6235 330.054 85.6162 317.802H107.398C108.028 322.602 109.664 326.012 112.434 328.286C115.204 330.56 119.485 331.697 125.277 331.697C129.432 331.697 132.705 330.433 135.349 327.907C137.867 325.381 139.126 321.97 139.126 317.676C139.126 314.013 138.119 310.855 136.231 308.202C134.342 305.55 130.691 302.897 125.403 300.371C120.87 298.224 116.337 295.824 111.679 293.171C107.02 290.645 102.614 287.487 98.2069 283.824C94.1779 280.287 91.282 276.372 89.3934 271.951C87.5048 267.656 86.6235 261.972 86.6235 255.151C86.6235 243.53 89.8971 234.436 96.4442 227.741C102.991 221.047 112.057 217.763 123.514 217.763C135.727 217.763 144.54 220.794 150.206 226.857C155.872 232.92 158.768 241.636 159.02 252.625H137.616C137.867 247.951 136.608 244.415 133.838 241.762C131.068 239.236 127.417 237.973 122.884 237.973C117.722 237.973 113.945 239.11 111.427 241.383C108.909 243.657 107.65 246.941 107.65 251.235C107.65 254.646 108.405 257.551 109.79 259.825C111.301 262.098 113.945 264.498 117.848 266.772C120.492 268.54 123.388 269.93 126.284 271.319C129.18 272.582 132.076 273.972 134.846 275.361C137.616 276.751 140.385 278.266 143.155 280.035C145.925 281.803 148.443 283.824 150.71 286.098C154.613 289.887 157.383 293.929 158.894 298.35C160.53 302.897 161.412 308.076 161.412 313.886Z"
              fill="white"
            />
            <path
              d="M345.361 242.141H316.528V352.538H292.858V242.141H264.025V219.784H345.487V242.141H345.361Z"
              fill="white"
            />
            <path
              d="M432.362 352.538H408.566V296.455H383.007V352.538H359.588V219.784H383.007V273.845H408.566V219.784H432.362V352.538Z"
              fill="white"
            />
            <path
              d="M521 352.538H453.766V219.784H521V240.878H477.311V274.729H511.809V296.203H477.311V330.307H521V352.538Z"
              fill="white"
            />
            <path
              d="M160.782 533.67C160.782 546.049 157.509 555.775 151.087 563.101C144.666 570.427 135.349 574.09 123.388 574.09C111.049 574.09 101.858 571.059 95.6887 564.996C89.5193 558.933 85.9939 549.838 84.9867 537.586H106.768C107.398 542.386 109.035 545.796 111.805 548.07C114.575 550.343 118.855 551.48 124.647 551.48C128.802 551.48 132.076 550.217 134.72 547.691C137.238 545.165 138.497 541.754 138.497 537.46C138.497 533.796 137.49 530.639 135.601 527.986C133.712 525.334 130.061 522.681 124.773 520.155C120.24 518.007 115.708 515.607 111.049 512.955C106.391 510.429 101.984 507.271 97.5773 503.608C93.5483 500.071 90.6525 496.155 88.7639 491.734C86.8753 487.44 85.9939 481.756 85.9939 474.935C85.9939 463.314 89.2675 454.22 95.8146 447.525C102.362 440.831 111.427 437.546 122.884 437.546C135.097 437.546 143.911 440.578 149.577 446.641C155.242 452.704 158.138 461.419 158.39 472.409H136.986C137.238 467.735 135.979 464.198 133.209 461.546C130.439 459.02 126.788 457.756 122.255 457.756C117.093 457.756 113.316 458.893 110.797 461.167C108.279 463.44 107.02 466.725 107.02 471.019C107.02 474.43 107.776 477.335 109.161 479.608C110.672 481.882 113.316 484.282 117.219 486.556C119.863 488.324 122.759 489.713 125.654 491.103C128.55 492.366 131.446 493.755 134.216 495.145C136.986 496.534 139.756 498.05 142.526 499.818C145.296 501.587 147.814 503.608 150.08 505.881C153.983 509.671 156.753 513.713 158.264 518.134C159.901 522.681 160.782 527.86 160.782 533.67Z"
              fill="white"
            />
            <path
              d="M249.168 572.322H225.372V516.239H199.813V572.322H176.395V439.567H199.813V493.629H225.372V439.567H249.168V572.322Z"
              fill="white"
            />
            <path
              d="M335.037 572.322H273.217V551.101H293.11V460.661H273.217V439.567H335.162V460.661H315.647V551.101H335.162V572.322H335.037Z"
              fill="white"
            />
            <path
              d="M436.013 461.925H407.181V572.322H383.51V461.925H354.678V439.567H436.139V461.925H436.013Z"
              fill="white"
            />
            <path
              d="M204.346 754.464C204.346 767.348 201.324 776.948 195.155 783.011C188.985 789.074 179.29 792.105 166.07 792.105H132.202V659.351H168.84C179.794 659.351 187.978 662.509 193.518 668.825C199.058 675.14 201.828 683.477 201.828 693.708C201.828 701.792 200.317 708.108 197.421 712.781C194.525 717.455 189.992 721.118 184.075 723.897C190.244 725.918 195.155 729.581 198.806 734.633C202.457 739.812 204.346 746.38 204.346 754.464ZM179.29 697.497C179.29 693.455 178.913 690.171 178.157 687.645C177.402 685.119 176.269 683.224 174.758 681.835C173.247 680.445 171.484 679.435 169.344 679.056C167.203 678.551 164.811 678.298 162.167 678.298H153.606V716.949H161.79C167.455 716.949 171.862 715.56 174.884 712.655C177.78 709.75 179.29 704.697 179.29 697.497ZM181.683 751.685C181.683 745.749 180.046 740.823 176.772 737.033C173.499 733.244 169.344 731.349 164.182 731.349H153.606V771.643H164.937C167.707 771.643 170.225 771.138 172.24 770.127C174.254 769.117 176.017 767.601 177.402 765.832C178.787 763.938 179.92 761.917 180.55 759.39C181.305 756.864 181.683 754.338 181.683 751.685Z"
              fill="white"
            />
            <path
              d="M300.916 792.105H271.328L246.147 739.559V792.105H222.35V659.351H258.989C271.202 659.351 280.771 662.762 287.696 669.709C294.621 676.656 298.146 686.382 298.146 698.887C298.146 709.876 295.754 718.213 290.969 724.023C286.185 729.833 279.764 733.875 271.832 736.023L300.916 792.105ZM273.972 702.424C273.972 693.961 272.335 688.277 269.062 685.245C265.788 682.214 260.878 680.698 254.331 680.698H246.147V724.655H257.101C262.514 724.655 266.669 722.634 269.565 718.465C272.587 714.171 273.972 708.865 273.972 702.424Z"
              fill="white"
            />
            <path
              d="M388.924 751.685C388.924 765.074 385.651 775.558 379.104 782.885C372.557 790.211 363.114 794 351.027 794C338.31 794 328.867 790.211 322.32 782.506C315.899 774.801 312.625 764.569 312.625 751.685V700.024C312.625 687.14 315.899 676.782 322.32 669.077C328.741 661.372 338.31 657.583 351.027 657.583C363.239 657.583 372.557 661.246 379.104 668.698C385.651 676.024 388.924 686.508 388.924 700.15V751.685ZM335.037 755.096C335.037 761.538 336.547 766.338 339.569 769.243C342.591 772.274 346.368 773.79 350.901 773.79C355.307 773.79 358.959 772.274 361.98 769.117C365.002 765.959 366.513 761.285 366.513 755.096V696.36C366.513 690.171 365.002 685.498 361.98 682.34C358.959 679.182 355.182 677.666 350.901 677.666C346.368 677.666 342.591 679.182 339.569 682.213C336.547 685.245 335.037 689.919 335.037 696.36V755.096Z"
              fill="white"
            />
          </svg>
          <div className="xl:w-[900px]">
            <div className="transform xl:rotate-[100deg] w-full">
              <div>
                <Marquee gradient={false} className="mb-10 xl:mb-0">
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-chicken.png"
                    alt="Sweet Liberty Chicken"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-club.png"
                    alt="Sweet Liberty Club Interior"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-dessert.png"
                    alt="Sweet Liberty Dessert"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-orange.png"
                    alt="Sweet Liberty Orange Juice"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-wine.png"
                    alt="Sweet Liberty Wine"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-ice.png"
                    alt="Sweet Liberty Icecream Soda"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-toy.png"
                    alt="Sweet Liberty Girl Toy"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-burger.png"
                    alt="Sweet Liberty Burger"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                </Marquee>
              </div>
              <div>
                <Marquee
                  gradient={false}
                  className="mb-10 xl:mb-0"
                  direction="right"
                >
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-new-orange-juice.png"
                    alt="Sweet Liberty Orange Juice"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-platter.png"
                    alt="Sweet Liberty Platter"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-pina-colada.png"
                    alt="Sweet Liberty Pina Colada"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-chick.png"
                    alt="Sweet Liberty Chick"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-new-orange-juice.png"
                    alt="Sweet Liberty New Orange Juice"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-coffee.png"
                    alt="Sweet Liberty Coffee"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-champagne.png"
                    alt="Sweet Liberty Champagne"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                  <StaticImage
                    src="../../assets/MiamiIsShit/sweet-liberty-red-coffee.png"
                    alt="Sweet Liberty Red Coffee"
                    placeholder="blurred"
                    className="mr-10 xl:mr-20 xl:transform xl:-rotate-90"
                  />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiamiIsShit
