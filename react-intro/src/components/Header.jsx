const Header = () => {
return(
    <header className="Header">
    <div className="container header__inner">
      <div className="logo">
        Bella
        <span>Vita</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav__link">
          Меню
        </a>
        <a href="#" className="nav__link">
          О нас
        </a>
        <a href="#" className="nav__link">
          Отзывы
        </a>
        <a href="#" className="nav__link">
          Контакты
        </a>
      </nav>
      <button className="btn btn--outline">Забронировать столик</button>
    </div>
  </header>
)
}
export default Header