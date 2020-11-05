document.getElementById("obsluga").onclick = function() {Oferta1()};
document.getElementById("finanse").onclick = function() {Oferta2()};
document.getElementById("doradztwo").onclick = function() {Oferta3()};
document.getElementById("remonty").onclick = function() {Oferta4()};
document.getElementById("interesy").onclick = function() {Oferta5()};
document.getElementById("przejrzystosc").onclick = function() {Oferta6()};
document.getElementById("kontrola").onclick = function() {Oferta7()};
document.getElementById("oferta").onclick = function() {Oferta8()};

function Oferta1() {
document.getElementById("description_rachunkowosc").style.display="flex";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
}

function Oferta2() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="flex";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
}

function Oferta3() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="flex";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
}

function Oferta4() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="flex";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
}

function Oferta5() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="flex";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
}

function Oferta6() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="flex";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="none";
}

function Oferta7() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="flex";
document.getElementById("description_oferta").style.display="none";
}

function Oferta8() {
document.getElementById("description_rachunkowosc").style.display="none";
document.getElementById("description_doradztwo").style.display="none";
document.getElementById("description_obsluga").style.display="none";
document.getElementById("description_remonty").style.display="none";
document.getElementById("description_reprezentacja").style.display="none";
document.getElementById("description_przejrzystosc").style.display="none";
document.getElementById("description_kontrola").style.display="none";
document.getElementById("description_oferta").style.display="flex";
}