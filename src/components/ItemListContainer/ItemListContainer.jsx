const categories = [
  {
    id: 1,
    name: "Parlantes",
    img: "https://http2.mlstatic.com/D_NQ_NP_638442-MCO45601940581_042021-O.webp",
  },
  {
    id: 2,
    name: "Smartphones",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6T3YFzeJwVARhbTRwpRVDmSH1zDJFrEYFg&s",
  },
  {
    id: 3,
    name: "Consolas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xwPmtx2H9jTXRWzVdRK17Yx7BC4wGUuXxA&s",
  },
  {
    id: 4,
    name: "Airpods",
    img: "https://ar.oneclickstore.com/wp-content/uploads/2023/06/AirPods_Pro_2nd_Gen_PDP_Image_Position-1__USEN.jpg",
  },
  {
    id: 5,
    name: "Notebooks",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8afgKNhZd-FbP3lx9qET3jFi9s6-2BsUuuA&s",
  },
];
function ItemListContainer({greetings}) {
  
  return (
    <>
      <h2>{greetings}</h2>

        {categories.map( item => (
            <div key={item.id} className="card" style={{width: '18rem'}}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        ))}

    </>
  );
}

export default ItemListContainer
