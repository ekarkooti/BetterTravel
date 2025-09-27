const mockData = {
  accommodations: [
    {
      id: 104,
      name: "Hotel Artemide",
      price: 320,
      price_per_night_minor: 32000,
      image:
        "https://images.getaroom-cdn.com/image/upload/s--1AbPqZdy--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1755798299/025a1874082543cb0c38dc960cbb15815741785a?_a=BACAEuDL&atc=e7cd1cfa",
    },
    {
      id: 105,
      name: "The Fifteen Keys Hotel",
      price: 450,
      price_per_night_minor: 45000,
      image:
        "https://fifteenkeys.com/wp-content/uploads/2024/10/The-Fifteen-Keys-Hotel-the-hall-sofa.jpg",
    },
    {
      id: 106,
      name: "Hotel Santa Maria",
      price: 280,
      price_per_night_minor: 28000,
      image:
        "https://images.getaroom-cdn.com/image/upload/s--h0aJhSXN--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1751664906/bbb670d2efc1f149e9647807f99b6ba15e806bec?_a=BACAEuDL&atc=e7cd1cfa",
    },
    {
      id: 107,
      name: "Singer Palace Hotel",
      price: 600,
      price_per_night_minor: 60000,
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMaByQGC6Cjs6qWX1NfIJTmlO_i0epvCzMpqJJw=s1360-w1360-h1020-rw",
    },
  ],
  flights: [
    {
      id: 201,
      name: "SAS SK685 (CPH to FCO)",
      // price per passenger in whole dollars
      price: 180,
      // cents-equivalent for API
      price_minor: 18000,
      details: "Departs 8:00 AM, Arrives 10:45 AM",
    },
    {
      id: 202,
      name: "Norwegian D83642 (CPH to FCO)",
      price: 110,
      price_minor: 11000,
      details: "Departs 11:00 AM, Arrives 1:50 PM",
    },
    {
      id: 203,
      name: "Ryanair FR8345 (CPH to CIA)",
      price: 75,
      price_minor: 7500,
      details: "Departs 6:30 PM, Arrives 9:10 PM",
    },
    {
      id: 204,
      name: "ITA Airways AZ123 (CPH to FCO)",
      price: 160,
      price_minor: 16000,
      details: "Departs 3:30 PM, Arrives 6:15 PM",
    },
    {
      id: 205,
      name: "SAS SK687 (CPH to FCO)",
      price: 210,
      price_minor: 21000,
      details: "Departs 5:00 PM, Arrives 7:45 PM",
    },
    {
      id: 206,
      name: "Norwegian D83644 (CPH to FCO)",
      price: 90,
      price_minor: 9000,
      details: "Departs 7:15 AM, Arrives 10:05 AM",
    },
  ],
};

export default mockData;
