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
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Karan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "Karan@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Vipin",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "vipin@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Sandeep",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Sandeep@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Suraj",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Suraj@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Pawan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Pawan@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Mayank",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Mayank@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Deepanshu",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Deepanshu@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Harshit",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Harshit@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Rohan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Rohan@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Varnit",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Varnit@gmail.com",
      status: "active",
      age: 65,
    },
  ];