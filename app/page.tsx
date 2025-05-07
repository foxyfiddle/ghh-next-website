import Header from "../component/Header";
import Image from "../component/Image";
import Button from "../component/Button";
import Link from "next/link";
import Card from "../component/Card";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      {/* Header Container */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>

      {/* Image Container */}
      <div className="w-full grid grid-rows-[auto] items-start justify-items-center min-h-screen gap-0 px-5 pt-19">
        <Image
          src="https://static.wixstatic.com/media/43e6bc_d9ede3cfb2f54354a6cb2f8b12d65cbb~mv2.png/v1/fill/w_1961,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design-6.png"
          alt=""
          className="w-full object-cover rounded-lg shadow-lg shadow-gray-300/50"
        />

        {/* Image Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-[var(--primary-color)] text-4xl font-bold drop-shadow-lg">
            GOD'S MESSAGE. CREATIVE METHODS.
          </h1>
        </div>
      </div>

      {/* Hero Container */}
      <div className="w-full bg-[var(--primary-color)] pt-15 pb-20 px-5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-center text-5xl font-semibold text-[var(--secondary-color)] px-30">
            We believe that the story of Jesus has the power to transform the
            lives of people, adults and children.
          </h2>
          <p className="text-center text-2xl text-[var(--secondary-color)] mt-4 px-30">
            Your generous support helps us continue our mission, to present the
            gospel to adults and children.
          </p>
          <Link href="give" passHref>
            <Button
              text="Support God's Helping Hands"
              className="btn btn-outline btn-sm bg-[var(--primary-color)] text-[var(--secondary-color)] font-bold px-10 py-8 rounded-xl mt-6"
            />
          </Link>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex-col justify-center items-center bg-[var(--secondary-color)] pt-15 pb-5 px-5">
        <h1 className="text-[var(--primary-color)] text-3xl font-bold text-center">
          Latest Events, News, and More
        </h1>
        <div className="w-full bg-[var(--secondary-color)] pb-15 pt-15 px-5 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="give" passHref>
              <Card
                h2Text="Next Event"
                pText="Pleasant Valley Bible Camp<br /> May 23-26 | East Jordan, MI"
                src="assets/splotch-bg.png"
                alt="Schedule Art"
                div1ClassName="bg-[var(--primary-color)] shadow-lg rounded-lg p-6"
                div2ClassName="mt-4 text-[var(--secondary-color)]"
                h2ClassName="text-xl font-semibold text-[var(--secondary-color)]"
                overlayText="SCHEDULE"
              />
            </Link>
            <Link href="give" passHref>
              <Card
                h2Text="Current Series"
                pText="Mount Everlast<br /> Exploring the life of Jesus"
                src="assets/splotch-bg-2.png"
                alt="Schedule Art"
                div1ClassName="bg-white shadow-lg rounded-lg p-6"
                div2ClassName="mt-4 text-gray-700"
                h2ClassName="text-xl font-semibold text-black-"
                overlayText="SERIES"
              />
            </Link>
            <Link href="give" passHref>
              <Card
                h2Text="Ministry News"
                pText="Check out our latest updates and stories from the field."
                src="assets/splotch-bg-3.png"
                alt="Schedule Art"
                div1ClassName="bg-white shadow-lg rounded-lg p-6"
                div2ClassName="mt-4 text-gray-700"
                h2ClassName="text-xl font-semibold text-black-"
                overlayText="NEWS"
              />
            </Link>
            <Link href="give" passHref>
              <Card
                h2Text="Podcast"
                pText="Check out our podcast<br /> featuing: Steven and Lydia"
                src="assets/splotch-bg-4.png"
                alt="Schedule Art"
                div1ClassName="bg-white shadow-lg rounded-lg p-6"
                div2ClassName="mt-4 text-gray-700"
                h2ClassName="text-xl font-semibold text-black-"
                overlayText="MEDIA"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="w-full relative pt-20 pb-20 px-5 bg-[var(--primary-color)] rounded-lg shadow-lg">
        <div className="overflow-hidden h-[595px] rounded-lg shadow-lg shadow-gray-300/50">
          <Image
            src="https://static.wixstatic.com/media/43e6bc_0249855903644c5a87a060e3a71e3893~mv2.jpg/v1/fill/w_1708,h_1207,al_c,q_90,enc_avif,quality_auto/43e6bc_0249855903644c5a87a060e3a71e3893~mv2.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* About Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-end pr-10 pt-35">
          <div className="text-right space-y-4">
            <h1 className="text-[var(--primary-color)] text-4xl font-bold drop-shadow-lg pl-160">
              "GHH always come well prepared, and with energy to spare. Their
              stories are fresh, interesting, and tailored to the age group in
              attendance... Their love for Christ is evident in the way they
              serve people"
            </h1>
            <p className="text-white text-2xl mt-4">
              Paul Gardner | Director
              <br />
              Camp Barakel | Fairview, MI
            </p>
            <div className="absolute bottom-36 right-10">
              <Link href="give" passHref>
                <Button
                  text="About Us"
                  className="btn btn-md btn-outline border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:border-[var(--accent-color)] text-sm leading-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
        <Footer />
      </>
  );
}
