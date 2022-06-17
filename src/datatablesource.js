export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

export const userRows = [
    {
      id: 1,
      username: "Shashank",
      img: "https://images.pexels.com/photos/712395/pexels-photo-712395.jpeg?cs=srgb&dl=pexels-fabio-partenheimer-712395.jpg&fm=jpg",
      status: "active",
      email: "shashanksingh@gmail.com",
      age: 23,
    },
    {
      id: 2,
      username: "M Sumeet",
      img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg",
      email: "mannathNath@gmail.com",
      status: "passive",
      age: 24,
    },
    {
      id: 3,
      username: "Sahil Kumar",
      img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845457.jpg&fm=jpg",
      email: "kumarSahil1231@gmail.com",
      status: "pending",
      age: 27,
    },
    {
      id: 4,
      username: "Suraj Shaw",
      img: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-853151.jpg&fm=jpg",
      email: "shawSuraj@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Tomoghana Singha",
      img: "https://images.pexels.com/photos/301952/pexels-photo-301952.jpeg?cs=srgb&dl=pexels-pixabay-301952.jpg&fm=jpg",
      email: "redbird1996@gmail.com",
      status: "passive",
      age: 29,
    },
    {
      id: 6,
      username: "Abhishek",
      img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
      email: "ruhingorai@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Dolly Sharma",
      img: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?cs=srgb&dl=pexels-pixabay-415263.jpg&fm=jpg",
      email: "abhilashasharma@gmail.com",
      status: "passive",
      age: 10,
    },
    {
      id: 8,
      username: "Farukh Khan",
      img: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?cs=srgb&dl=pexels-fauxels-3184287.jpg&fm=jpg",
      email: "mommhanmandkhan@gmail.com",
      status: "active",
      age: 22,
    },
    {
      id: 9,
      username: "Robin Singh",
      img: "https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-999267.jpg&fm=jpg",
      email: "robinsingh@gmail.com",
      status: "pending",
      age: 61,
    },
    {
      id: 10,
      username: "Alexa Fror",
      img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?cs=srgb&dl=pexels-buro-millennial-1438072.jpg&fm=jpg",
      email: "alexfrf@gmail.com",
      status: "active",
      age: 55,
    },
  ];