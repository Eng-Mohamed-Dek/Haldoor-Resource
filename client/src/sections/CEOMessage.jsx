import { useNavigate } from "react-router-dom";

export default function CEOMessage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Redirect to home
  };

  const openWebsite = () => {
    window.open("https://engmohameddek.site", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        Message from the CEO & Founder
      </h1>

      <div className="flex flex-col items-center gap-6 max-w-3xl md:flex-row md:items-start md:gap-12">
        {/* CEO Image with hover overlay and animated border */}
        <div className="relative w-[1900px] h-72 rounded-md overflow-hidden shadow-lg cursor-pointer group">
          <div className="absolute inset-0 border-4 border-orange rounded-full group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="/ceo.png"
            alt="CEO"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-orange bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Visit Website
          </div>
          <div
            className="absolute inset-0 z-10"
            onClick={openWebsite}
          ></div>
        </div>

        {/* CEO Message */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed md:text-left italic border-l-3 border- pl-4">
          "Had iyo jeer, hammigaygu wuxuu ahaa inaan aqoonta aan u leeyahay barnaamijyada (Programming-ka) u adeegsado xallinta caqabadaha jira. Maanta, tani waxay ka dhigan tahay tallaabo weyn oo loo qaaday dhanka helidda agab tayo leh oo aan u baahnayn xayeysiis ama is-diiwaangelin. Waxaan rajaynayaa in agabkan bilaashka ah uu wax weyn ka beddelo noloshaada waxbarasho iyo shaqo. Mahadsanidiin."
        </p>
      </div>
    </div>
  );
}
