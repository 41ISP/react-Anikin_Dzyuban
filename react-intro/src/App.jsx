import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
const App = () => {
  const username = "TTulenchick"
 return (
  <>
  {/* ==================== HEADER ==================== */}
  <Header/>
  {/* ==================== HERO ==================== */}
  <Hero/>
  {/* ==================== MENU ==================== */}
  <Menu/>
  {/* ==================== REVIEWS ==================== */}
  <section className="reviews">
    <div className="container">
      <h2 className="section-title">Отзывы гостей</h2>
      <div className="reviews__grid">
        <div className="review-card">
          <img
            className="review-card__avatar"
            src="https://placehold.co/64x64?text=E"
            alt="Елена"
          />
          <div className="review-card__content">
            <p className="review-card__text">
              Лучшая карбонара в городе, атмосфера очень уютная, обязательно
              вернёмся.
            </p>
            <span className="review-card__author">
              Елена В. — блюдо «Карбонара»
            </span>
          </div>
        </div>
        <div className="review-card">
          <img
            className="review-card__avatar"
            src="https://placehold.co/64x64?text=I"
            alt="Игорь"
          />
          <div className="review-card__content">
            <p className="review-card__text">
              Заказывали пиццу на компанию, все были в восторге от теста и
              начинки.
            </p>
            <span className="review-card__author">
              Игорь Т. — блюдо «Маргарита»
            </span>
          </div>
        </div>
        <div className="review-card">
          <img
            className="review-card__avatar"
            src="https://placehold.co/64x64?text=O"
            alt="Ольга"
          />
          <div className="review-card__content">
            <p className="review-card__text">
              Тирамису просто тает во рту, а обслуживание — на высшем уровне.
            </p>
            <span className="review-card__author">
              Ольга Н. — блюдо «Тирамису»
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==================== FOOTER ==================== */}
  <Footer/>
  </>

  
    
 )
}

export default App 

