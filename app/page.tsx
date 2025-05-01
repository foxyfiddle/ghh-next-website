import Header from "../component/Header";
import Image from "../component/Image";
import Button from "../component/Button";

export default function Home() {
  return (
    <>
      {/* Header Container */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>

      {/* Main Content Container */}
      <div className="w-full grid grid-rows-[auto] items-start justify-items-center min-h-screen gap-0 px-5 pt-19">
        <Image
          src="https://static.wixstatic.com/media/43e6bc_d9ede3cfb2f54354a6cb2f8b12d65cbb~mv2.png/v1/fill/w_1961,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design-6.png"
          alt=""
          className="w-full object-cover rounded-lg shadow-lg shadow-gray-300/50"
        />

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">
            GOD'S MESSAGE. CREATIVE METHODS.
          </h1>
        </div>
      </div>

      {/* New Container Below the Image */}
      <div className="w-full bg-gray-100 py-10 px-5 flex items-center justify-center">
  <div className="text-center">
    <h2 className="text-center text-5xl font-semibold text-gray-800 px-30">
      We believe that the story of Jesus has the power to transform the lives of people, adults and children.
    </h2>
    <p className="text-center text-2xl text-gray-600 mt-4 px-30">
      Your generous support helps us continue our mission, to present the gospel to adults and children.
    </p>
    <Button
      text="Support GHH"
      className="btn btn-outline btn-sm bg-blue-500 text-white px-10 py-8 rounded-xl mt-6"
    />
  </div>
</div>
    </>
  );
}
