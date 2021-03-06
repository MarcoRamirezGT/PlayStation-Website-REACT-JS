
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import './slider.css';
import Soul from '../images/soulstormF.jpeg';
import Pascua from '../images/pascua2.png';
import Outride from '../images/outriders.jpg';
import Chess from '../images/autochess2.jpg';
import PlayC from '../images/play.png';

function slider() {
    return (
        <AwesomeSlider>
            <div data-src={Soul}>
                <div className="sda">
                    <h1 className="titulo">
                        El capitulo dos del viaje de Abe <br /> comienza
                    </h1>
                    <button className="btnBuy1 btnBuyC1">
                        Comprar ahora
                    </button>

                </div>
            </div>



            <div data-src={Outride}>
                <div className="dataOut">
                    <h1 className="h1Out"> Embárcate en un viaje al poder</h1>
                    <p className="pOut">Outriders combina frenéticas mecánicas de disparos con profundos sistemas de RPG para crear un verdadero género híbrido.</p>
                    <button className="btnOut"> Comprar ahora</button>
                </div>
            </div>
            <div data-src={Chess}>
                <div className="divChess">
                    <h1 className="h1Chess">
                        Ya disponible para PS5
                    </h1>
                    <p className="p1Chess">
                        Prepárate para el nuevo capítulo de batalla junto a la temporada 11 y el pase de ajedrez que ofrece la nueva pieza de ajedrez Space Walker.
                    </p>
                    <button className="btnChess">
                        Descargar gratis
                    </button>

                </div>
            </div>


            <div data-src={PlayC}>
                <div className="divPlay">
                    <p className="p1Play">
                        Play At Home regresa con una selección gratuita de juegos excelentes y más, que llegará en los próximos meses.
                    </p>
                    <button className="btnPlay">
                        Más información
                    </button>
                </div>
            </div>
            <div data-src={Pascua}>
                <div className="dataPascua">
                    <h1 className="descuentos"> Cuatro semanas de grandes descuentos</h1>

                    <p className="textoDescuentos">Ahorra a lo grande en titulos independientes innovadores, exitos esenciales, experencias envolventes de  PS VR, monedas dentro de juegos y más</p>
                    <button className="btnDescuentos">Ver todas las promociones</button>
                </div>
            </div>

        </AwesomeSlider>
    )
}

export default slider;
