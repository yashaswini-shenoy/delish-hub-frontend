import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useEffect, useState } from "react";
import SearchResultCard from "@/components/SearchResultCard";

const HomePage = () => {
  // const VisitorAPI = require("visitorapi");

  const navigate = useNavigate();
  const [city] = useState("abcd");
  const { results, isLoading } = useSearchRestaurants(
    {
      searchQuery: "",
      page: 1,
      selectedCuisines: [],
      sortOption: "bestMatch",
    },
    city
  );
  // const some = VisitorAPI;

  // useEffect(() => {
  //   VisitorAPI("<project id>", (data: any) => {
  //     setCity(data.city);
  //     console.log("heyyy", data.city);
  //   });
  // }, []);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         async (position) => {
  //           const { latitude, longitude } = position.coords;
  //           try {
  //             const response = await fetch(
  //               `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  //             );
  //             const data = await response.json();
  //             const city =
  //               data.address.city ||
  //               data.address.suburb ||
  //               data.address.vilage ||
  //               "City not found";
  //             console.log("heyy", city);
  //             setCity("Urwa Store");
  //             setLoading(false);
  //           } catch (err) {
  //             setError("Error fetching city");
  //             setLoading(false);
  //           }
  //         },
  //         (err) => {
  //           setError("Geolocation error: " + err.message);
  //           setLoading(false);
  //         }
  //       );
  //     } else {
  //       setError("Geolocation is not supported by this browser.");
  //       setLoading(false);
  //     }
  //   };

  //   // fetchLocation();
  // }, []);

  useEffect(() => {
    console.log(results, isLoading, "heyyy");
  }, [results]);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div
        style={{
          width: "100%",
          // backgroundImage: "url('src/assets/burger.jpg')",
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('src/assets/burger.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          height: "90vh",
          top: "85px",
          left: "0",
        }}
      ></div>
      <div
        className="md:px-32 rounded-lg py-8 flex flex-col align-center justify-center gap-5 text-center h-[80vh] "
        style={{ zIndex: "99" }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-red-600">
          Exceptional meals, delivered with distinction
        </h1>
        <span className="text-xl text-white">
          Experience a meal that meets both your taste and your standards!
        </span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
          textColor="white"
        />
      </div>
      <div className="w-[100%]">
        <div className="mb-6 text-red-600 text-xl font-semibold">
          Explore to find a tasty treat!
        </div>
        <div className="grid grid-cols-3 gap-10">
          {results?.data?.length &&
            results.data.map((restaurant) => (
              <SearchResultCard restaurant={restaurant} isCardWidth={true} />
            ))}
        </div>
      </div>
      {/* <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img style={{ width: "50%" }} src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the Delish Hub for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
