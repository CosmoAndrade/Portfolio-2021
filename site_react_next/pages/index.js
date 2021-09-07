import Head from 'next/head'
import Script from 'next/script'


function Home() {
    return (


        <div>

            <Head>

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

                <title>Site React | Next.JS</title>



            </Head>


            <nav class="navbar">

                <div className="max-width">

                    <div className="logo">
                        <a href="#top">Site</a>
                    </div>

                    <ul className="menu">
                        <li><a href="#top" className="menu-btn">Home</a></li>
                        <li><a href="#services" className="menu-btn">Serviços</a></li>
                        <li><a href="#contact" className="menu-btn">Contato</a></li>
                    </ul>

                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>

                </div>


            </nav>


            <section className="top" id="top">
                <div className="max-width">

                    <div className="top-content">

                        <div className="text-1">Temos a solução</div>
                        <div className="text-2">que a sua empresa preisa</div>
                        <div cclassName="text-3"> podemos ajudar a sua empresa?</div>
                        <a href="#contact">Entra em Contato</a>

                    </div>

                </div>
            </section>

            <section className="services" id="services">

                <div className="max-width">
                    <h2 cclassName="title">Serviços</h2>
                    <div className="serv-content">

                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code"></i>
                                <div className="text">
                                    Serviços 1

                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur soluta, ex repellendus
                                    rerum placeat nam harum animi consequuntur sequi nobis, tempora suscipit sed officiis magni
                                    quibusdam, fugiat nesciunt optio ipsa!


                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <i className="fas fa-laptop-code"></i>
                                <div className="text">
                                    Serviços 2

                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur soluta, ex repellendus
                                    rerum placeat nam harum animi consequuntur sequi nobis, tempora suscipit sed officiis magni
                                    quibusdam, fugiat nesciunt optio ipsa!


                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <i className="fas fa-mobile-alt"></i>
                                <div className="text">
                                    Serviços 3

                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur soluta, ex repellendus
                                    rerum placeat nam harum animi consequuntur sequi nobis, tempora suscipit sed officiis magni
                                    quibusdam, fugiat nesciunt optio ipsa!


                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>   {/* services */}

            <section className="contact" id="contact">
                <div className="max-width">

                    <h2 className="title">Contato</h2>
                    <div className="contact-content">

                        <div className="colum left">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis temporibus harum nesciunt,
                                natus ea rerum laboriosam dolor voluptatibus totam necessitatibus quos, ducimus est omnis. Esse
                                tempore tempora nemo nisi incidunt.
                            </p>

                            <div className="icons">

                                <div className="row">

                                    <i className="fas fa-user"></i>
                                    <div className="info">

                                        <div className="head">

                                            Empresas

                                        </div>

                                        <div className="sub-title">
                                            Site
                                        </div>

                                    </div>

                                </div>

                                <div className="row">

                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">

                                        <div className="head">

                                            Endereço

                                        </div>

                                        <div className="sun-title">
                                            Rua 13 334
                                        </div>

                                    </div>

                                </div>

                                <div className="row">

                                    <i className="fas fa-envelope"></i>
                                    <div className="info">

                                        <div className="head">

                                            E-mail

                                        </div>

                                        <div className="sun-title">
                                            cosmo.andrade@hotmail.com
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>   {/* left */}


                        <div className="colum right">


                            <div class="text"> Mensagem de contato</div>

                            <form>

                                <div className="fields">

                                    <div className="field name">
                                        <input type="text" placeholder="Digite seu nome" required />
                                    </div>


                                    <div className="field email">
                                        <input type="text" placeholder="Digite seu E-mail" required />
                                    </div>


                                </div> {/* fields */}

                                <div className="field">
                                    <input type="text" placeholder="Digite o assunto" required />
                                </div>

                                <h2>Mais detalhes</h2>

                                <div className="field textarea">
                                    <textarea cols="30" rows="10" type="text" placeholder="Digite o conteúdo" required>  </textarea>
                                </div>

                                <div className="button-area">

                                    <button type="submit">Enviar</button>

                                </div>

                                

                                


                            </form>

                        </div>




                    </div>  {/* contact-content*/}

                </div>   {/* max-width */}
            </section>   {/* contact */}





            <footer>
                <span>Create by <a href="#">Site</a></span>
            </footer>


            <Script src="https://code.jquery.com/jquery-2.2.4.min.js" strategy="beforeInteractive" />

            <Script src="script.js" strategy="afterInteractive" />



        </div>

    )
}

export default Home;