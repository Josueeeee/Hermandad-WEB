import React from 'react';
import Footer from './Footer';

const History = ({ elemt2, theigth }) => {
    return (
        <div className='contain-history' style={{ display: elemt2 ? 'block' : 'none' }}>
            <div data-aos="zoom-in" className='containinfo-history'>
                <h3>HISTORIA</h3>
                <p>
                    De 1968 a 1969 fungió como cura párroco de San Marcos Ocotepeque James Francis McTaggart (Padre Javier), sacerdote capuchino de nacionalidad estadounidense, quien conoció la realidad socio económica de su parroquia. Posteriormente a su regreso a los Estados Unidos de América, se desempeño como catedrático en la Universidad de Massachussets. Durante este período McTaggart visualizó la idea de crear una institución orientada a apoyar la población sanmarqueña de escasos recursos económicos, en aspectos de: Formación Humana, Asistencia Técnica, Cooperativismo, Movimiento Scout y Cuerpos de Socorristas.Fue así como, con la colaboración de alumnos y amigos fundó «Helping Reach Many Through Direct Assistance In Development» (Hermandad Inc.); «Ayudando a alcanzar mucho a través de una asistencia directa en desarrollo». El 1º de julio de 1975, y bajo la tutela de McTaggart se inició el proceso de creación de la Asociación Hermandad de Honduras. El 1º de abril de 1977, la Secretaría de Gobernación y Justicia, mediante Acuerdo No. 42 entregó a la Asociación Hermandad de Honduras su personalidad jurídica.
                    En un acto de generosidad los Profesores: Luis Efraín Espinoza (QDDG) y Rosa Rodezno de Espinoza (QDDG) donaron un predio de tres manzanas de extensión para establecer las instalaciones físicas; mismas que fueron construidas en su primera etapa durante la gestión administrativa de Cristina Garófalo, con el aporte de la comunidad y de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID).De 1977 a 1987 ejerció la Dirección Ejecutiva ad honoren María del Pilar Manceñido (QDDG), religiosa capuchina de nacionalidad argentina. En este período, Hermandad de Honduras impulsa varios proyectos en las áreas de: Promoción Humana, Vivienda, Tecnologías Apropiadas, Pequeñas Industrias, Salud, Agricultura y Promoción de la Mujer.En 1982 quedó sin valor el convenio de cooperación entre Hermandad Inc. y la Asociación Hermandad de Honduras, recurriendo esta última al apoyo financiero de otras instituciones nacionales e internaciones. No obstante, con el paso del tiempo Hermandad de Honduras continúa cultivando como uno de los valores mas preciados, la filosofía legada por Pilar Manceñido: La Búsqueda Constante de la Excelencia.
                </p>
                HIstory
            </div>
            <Footer />
        </div>
    );
};

export default History;