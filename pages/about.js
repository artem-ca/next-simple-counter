import Header from '../components/Header'

export default function About() {
    return (
        <section className='about-section'>
            <Header />
            <h1 className='about-h'>About page</h1>
            <div className='about-desc'>
                <p>
                    This is some information about this counter site. This site
                    is designed solely for educational purposes. All characters
                    are fictional, all coincidences are random. All rights
                    reserved.
                </p>
            </div>
        </section>
    )
}
