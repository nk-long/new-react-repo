

 const Title = () => {
    return(
   <img
   className="logo"
   alt="logo"
   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1TFlOkSYVdbG0RiKjNm1CQP75NNQPJKjhw&usqp=CAU"

   />
    )
}

const Header = () => {
    return (
        
        <div className="header">
          <Title />
          <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;